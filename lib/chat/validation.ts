export type ChatRole = "user" | "assistant";

export type ChatMessage = {
  role: ChatRole;
  content: string;
};

export type VisibleChatMessage = ChatMessage & {
  includeInProviderHistory?: boolean;
};

export type ChatRequest = {
  messages: ChatMessage[];
};

export type ChatValidationResult =
  | { ok: true; value: ChatRequest }
  | { ok: false; error: string };

// Limits bound request and future provider usage; update only with review.
export const MAX_MESSAGE_LENGTH = 2_000;
export const MAX_HISTORY_MESSAGES = 20;
export const MAX_REQUEST_BODY_BYTES = 32_000;

/**
 * Build provider context from successful chat turns only. Static welcome text
 * and local error notices stay in the UI but are never sent to Gemini.
 */
export function buildProviderHistory(
  visibleMessages: VisibleChatMessage[],
  latestUserMessage: ChatMessage
): ChatMessage[] {
  const completedTurns: ChatMessage[] = [];
  let pendingUser: ChatMessage | null = null;

  for (const message of visibleMessages) {
    if (!message.includeInProviderHistory) continue;

    if (message.role === "user") {
      pendingUser = { role: "user", content: message.content };
    } else if (pendingUser) {
      completedTurns.push(
        pendingUser,
        { role: "assistant", content: message.content }
      );
      pendingUser = null;
    }
  }

  // Leave room for the new user turn and retain only complete prior pairs.
  const maxPriorMessages = Math.floor((MAX_HISTORY_MESSAGES - 1) / 2) * 2;
  return [
    ...completedTurns.slice(-maxPriorMessages),
    { role: "user", content: latestUserMessage.content.trim() },
  ];
}

const validRoles = new Set<ChatRole>(["user", "assistant"]);

export function validateChatRequest(value: unknown): ChatValidationResult {
  if (!value || typeof value !== "object" || Array.isArray(value)) {
    return { ok: false, error: "Request body must be a JSON object." };
  }

  const messages = (value as Record<string, unknown>).messages;

  if (!Array.isArray(messages) || messages.length === 0) {
    return { ok: false, error: "Provide at least one chat message." };
  }

  if (messages.length > MAX_HISTORY_MESSAGES) {
    return { ok: false, error: "Conversation is too long. Start a new chat." };
  }

  const validatedMessages: ChatMessage[] = [];

  for (let index = 0; index < messages.length; index += 1) {
    const message = messages[index];
    if (!message || typeof message !== "object" || Array.isArray(message)) {
      return { ok: false, error: "Each message must be an object." };
    }

    const candidate = message as Record<string, unknown>;
    if (
      typeof candidate.role !== "string" ||
      !validRoles.has(candidate.role as ChatRole)
    ) {
      return { ok: false, error: "Message role is invalid." };
    }

    const expectedRole: ChatRole = index % 2 === 0 ? "user" : "assistant";
    if (candidate.role !== expectedRole) {
      return {
        ok: false,
        error: "Messages must alternate between visitor and assistant turns, starting with the visitor.",
      };
    }

    if (typeof candidate.content !== "string" || !candidate.content.trim()) {
      return { ok: false, error: "Messages cannot be empty." };
    }

    if (candidate.content.length > MAX_MESSAGE_LENGTH) {
      return { ok: false, error: "A message exceeds the allowed length." };
    }

    validatedMessages.push({
      role: candidate.role as ChatRole,
      content: candidate.content.trim(),
    });
  }

  if (validatedMessages[validatedMessages.length - 1].role !== "user") {
    return { ok: false, error: "The latest message must be from the visitor." };
  }

  return { ok: true, value: { messages: validatedMessages } };
}
