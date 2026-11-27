import { NextResponse } from "next/server";
import { GoogleGenAI, ThinkingLevel } from "@google/genai";
import {
  MAX_HISTORY_MESSAGES,
  MAX_REQUEST_BODY_BYTES,
  validateChatRequest,
} from "@/lib/chat/validation";
import { XORA_CHAT_SYSTEM_INSTRUCTION } from "@/lib/chat/knowledge";

export const runtime = "nodejs";

const MAX_OUTPUT_TOKENS = 300;
const PROVIDER_TIMEOUT_MS = 20_000;
const MAX_ANSWER_LENGTH = 2_400;

function getSafeProviderDiagnostics(
  error: unknown,
  visitorMessages: string[],
  elapsedMs: number
): { status: number | null; code: string; message: string; elapsedMs: number } {
  const candidate =
    error && typeof error === "object"
      ? (error as { status?: unknown; message?: unknown; name?: unknown })
      : null;
  const rawMessage =
    typeof candidate?.message === "string" ? candidate.message : "Unknown provider error";
  let parsed: Record<string, unknown> | null = null;

  try {
    const jsonStart = rawMessage.indexOf("{");
    if (jsonStart >= 0) {
      const value: unknown = JSON.parse(rawMessage.slice(jsonStart));
      if (value && typeof value === "object" && !Array.isArray(value)) {
        parsed = value as Record<string, unknown>;
      }
    }
  } catch {
    // Keep diagnostics generic if the SDK message is not a JSON API error.
  }

  const providerError =
    parsed?.error && typeof parsed.error === "object"
      ? (parsed.error as Record<string, unknown>)
      : parsed;
  const rawCode =
    typeof providerError?.code === "string"
      ? providerError.code
      : typeof providerError?.status === "string"
        ? providerError.status
        : typeof candidate?.name === "string"
          ? candidate.name
          : "unknown";
  const safeCode = /^[A-Za-z0-9_.-]{1,80}$/.test(rawCode) ? rawCode : "unknown";
  let safeMessage =
    typeof providerError?.message === "string"
      ? providerError.message
      : rawMessage;

  safeMessage = safeMessage
    .replace(/AIza[0-9A-Za-z_-]{20,}/g, "[redacted-key]")
    .replace(/(api[_-]?key\s*[:=]\s*)[^\s,}"']+/gi, "$1[redacted]")
    .replace(/Bearer\s+\S+/gi, "Bearer [redacted]")
    .replace(/https?:\/\/\S+/gi, "[redacted-url]");
  for (const visitorMessage of visitorMessages) {
    if (visitorMessage) safeMessage = safeMessage.split(visitorMessage).join("[visitor input redacted]");
  }

  return {
    status:
      typeof candidate?.status === "number" && Number.isFinite(candidate.status)
        ? candidate.status
        : null,
    code: safeCode,
    message: safeMessage.slice(0, 400),
    elapsedMs,
  };
}

export async function POST(request: Request) {
  const contentType = request.headers.get("content-type") || "";
  if (!contentType.toLowerCase().includes("application/json")) {
    return NextResponse.json(
      { error: "Content-Type must be application/json." },
      { status: 415 }
    );
  }

  const contentLength = Number(request.headers.get("content-length"));
  if (Number.isFinite(contentLength) && contentLength > MAX_REQUEST_BODY_BYTES) {
    return NextResponse.json(
      { error: "Request is too large." },
      { status: 413 }
    );
  }

  let body: unknown;
  try {
    const rawBody = await request.text();
    if (new TextEncoder().encode(rawBody).byteLength > MAX_REQUEST_BODY_BYTES) {
      return NextResponse.json(
        { error: "Request is too large." },
        { status: 413 }
      );
    }
    body = JSON.parse(rawBody);
  } catch {
    return NextResponse.json(
      { error: "Request body must be valid JSON." },
      { status: 400 }
    );
  }

  const validation = validateChatRequest(body);
  if (!validation.ok) {
    return NextResponse.json({ error: validation.error }, { status: 400 });
  }

  const apiKey = process.env.GEMINI_API_KEY;
  const model = process.env.GEMINI_MODEL;
  if (!apiKey || !model) {
    return NextResponse.json(
      { error: "The chat service is not configured yet. Please contact XORA using the website form or WhatsApp." },
      { status: 503 }
    );
  }

  const providerStartedAt = Date.now();
  try {
    const ai = new GoogleGenAI({ apiKey });
    const response = await ai.models.generateContent({
      model,
      contents: validation.value.messages
        .slice(-MAX_HISTORY_MESSAGES)
        .map((message) => ({
          role: message.role === "assistant" ? "model" : "user",
          parts: [{ text: message.content }],
        })),
      config: {
          systemInstruction: XORA_CHAT_SYSTEM_INSTRUCTION,
        thinkingConfig: { thinkingLevel: ThinkingLevel.LOW },
        maxOutputTokens: MAX_OUTPUT_TOKENS,
        httpOptions: {
          timeout: PROVIDER_TIMEOUT_MS,
          retryOptions: { attempts: 1 },
        },
      },
    });

    const answer = response.text?.trim().slice(0, MAX_ANSWER_LENGTH);
    if (!answer) {
      return NextResponse.json(
        { error: "I couldn’t prepare a response just now. Please try again or contact XORA." },
        { status: 502 }
      );
    }

    return NextResponse.json({ answer });
  } catch (error) {
    const diagnostics = getSafeProviderDiagnostics(
      error,
      validation.value.messages.map((message) => message.content),
      Date.now() - providerStartedAt
    );
    console.error("Gemini chat request failed", diagnostics);
    return NextResponse.json(
      { error: "The chat service is temporarily unavailable. Please try again or contact XORA." },
      { status: 502 }
    );
  }
}
