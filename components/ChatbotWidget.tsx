
"use client";

import { useEffect, useRef, useState } from "react";
import { Bot, Send, X } from "lucide-react";
import {
  buildProviderHistory,
  type ChatMessage,
} from "@/lib/chat/validation";
import { WHATSAPP_NUMBER } from "@/config/whatsapp";

type VisibleMessage = ChatMessage & {
  id: number;
  includeInProviderHistory?: boolean;
};

const welcomeMessage =
  "Hi! I'm XORA's website assistant. I can share approved information about our services and OmniSync Core.";

export default function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [isSending, setIsSending] = useState(false);

  const [messages, setMessages] = useState<VisibleMessage[]>([
    { id: 0, role: "assistant", content: welcomeMessage },
  ]);

  const panelRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const launcherRef = useRef<HTMLButtonElement>(null);
  const nextIdRef = useRef(1);

  useEffect(() => {
    if (!isOpen) return;

    inputRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
        launcherRef.current?.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;

    const closeIfOutside = (event: MouseEvent) => {
      const target = event.target as Node;

      if (
        panelRef.current &&
        !panelRef.current.contains(target) &&
        !launcherRef.current?.contains(target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", closeIfOutside);

    return () => {
      document.removeEventListener("mousedown", closeIfOutside);
    };
  }, [isOpen]);

  const closeChat = () => {
    setIsOpen(false);
    launcherRef.current?.focus();
  };

  const sendMessage = async () => {
    const content = input.trim();

    if (!content || isSending) return;

    const userMessage: VisibleMessage = {
      id: nextIdRef.current++,
      role: "user",
      content,
      includeInProviderHistory: true,
    };

    setMessages((current) => [...current, userMessage]);
    setInput("");
    setIsSending(true);

    let safeResponseError: string | null = null;

    try {
      const history = buildProviderHistory(messages, userMessage);

      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ messages: history }),
      });

      let result: { answer?: string; error?: string };

      try {
        result = (await response.json()) as {
          answer?: string;
          error?: string;
        };
      } catch {
        throw new Error(
          "Chat is temporarily unavailable. Please try again or use the contact form."
        );
      }

      if (!response.ok || !result.answer) {
        safeResponseError =
          result.error || "Chat is temporarily unavailable.";

        throw new Error(safeResponseError);
      }

      setMessages((current) => [
        ...current,
        {
          id: nextIdRef.current++,
          role: "assistant",
          content: result.answer!,
          includeInProviderHistory: true,
        },
      ]);
    } catch {
      const errorMessage =
        safeResponseError ||
        "Chat is temporarily unavailable. Please try again or use the contact form.";

      setMessages((current) => [
        ...current,
        {
          id: nextIdRef.current++,
          role: "assistant",
          content: errorMessage,
          includeInProviderHistory: false,
        },
      ]);
    } finally {
      setIsSending(false);
      inputRef.current?.focus();
    }
  };

  return (
    <div className="fixed bottom-5 right-4 z-[8100] flex flex-col items-end gap-3 sm:bottom-6 sm:right-6">
      {isOpen && (
        <section
          id="xora-chat-panel"
          ref={panelRef}
          aria-label="XORA chat assistant"
          className="mb-1 flex h-[min(70dvh,520px)] w-[min(calc(100vw-2rem),380px)] flex-col overflow-hidden rounded-2xl border border-[#c8f542]/30 bg-[#070808] text-white shadow-[0_20px_70px_rgba(0,0,0,0.65)] motion-safe:animate-[chat-panel-in_180ms_ease-out]"
        >
          <header className="flex items-center justify-between border-b border-white/10 bg-[#0a0c0b] px-4 py-3">
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#c8f542]/30 bg-[#c8f542]/[0.06] text-[#c8f542]">
                <Bot size={18} aria-hidden="true" />
              </span>

              <div>
                <h2 className="text-sm font-medium">
                  XORA Assistant
                </h2>
                <p className="text-[10px] text-white/45">
                  XORA virtual assistant
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={closeChat}
              aria-label="Close chat"
              className="flex h-9 w-9 items-center justify-center rounded-lg text-white/60 transition hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c8f542]"
            >
              <X size={18} aria-hidden="true" />
            </button>
          </header>

          <div
            className="flex-1 space-y-3 overflow-y-auto p-4"
            role="log"
            aria-live="polite"
            aria-relevant="additions text"
            aria-label="Chat messages"
          >
            <p className="rounded-lg border border-[#c8f542]/20 bg-[#c8f542]/[0.05] px-3 py-2 text-[11px] leading-5 text-[#d8e8ad]">
              Ask about our services or OmniSync Core. This assistant
              uses AI; don&apos;t share sensitive personal or business
              information.
            </p>

            {messages.map((message) => (
              <div
                key={message.id}
                className={`max-w-[88%] rounded-xl px-3 py-2.5 text-[12px] leading-5 ${
                  message.role === "user"
                    ? "ml-auto bg-[#c8f542] text-black"
                    : "mr-auto border border-white/10 bg-white/[0.04] text-white/80"
                }`}
              >
                {message.content}
              </div>
            ))}

            {isSending && (
              <p className="text-xs text-white/50" role="status">
                Checking availability...
              </p>
            )}
          </div>

          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="mx-4 mb-3 rounded-lg border border-[#c8f542]/35 px-3 py-2 text-center text-xs font-medium text-[#c8f542] transition hover:bg-[#c8f542]/[0.08] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c8f542]"
          >
            Contact XORA through the website form
          </a>

          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mx-4 mb-3 rounded-lg border border-white/10 px-3 py-2 text-center text-xs text-white/65 transition hover:border-[#25D366]/50 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c8f542]"
          >
            Contact XORA on WhatsApp
          </a>

          <form
            onSubmit={(event) => {
              event.preventDefault();
              void sendMessage();
            }}
            className="border-t border-white/10 p-3"
          >
            <label htmlFor="xora-chat-input" className="sr-only">
              Type a message
            </label>

            <div className="flex items-end gap-2">
              <textarea
                ref={inputRef}
                id="xora-chat-input"
                value={input}
                onChange={(event) => setInput(event.target.value)}
                onKeyDown={(event) => {
                  if (event.key === "Enter" && !event.shiftKey) {
                    event.preventDefault();
                    void sendMessage();
                  }
                }}
                maxLength={2000}
                rows={1}
                placeholder="Type a message..."
                disabled={isSending}
                className="max-h-24 min-h-11 flex-1 resize-y rounded-lg border border-white/10 bg-black/40 px-3 py-2.5 text-sm text-white outline-none placeholder:text-white/35 focus:border-[#c8f542]/60 focus:ring-1 focus:ring-[#c8f542]/25 disabled:opacity-60"
              />

              <button
                type="submit"
                disabled={isSending || !input.trim()}
                aria-label="Send message"
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#c8f542] text-black transition hover:bg-[#d5ff45] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c8f542] focus-visible:ring-offset-2 focus-visible:ring-offset-[#070808] disabled:cursor-not-allowed disabled:opacity-45"
              >
                <Send size={17} aria-hidden="true" />
              </button>
            </div>
          </form>
        </section>
      )}

      <button
        ref={launcherRef}
        type="button"
        onClick={() => setIsOpen((current) => !current)}
        aria-label={isOpen ? "Close XORA chat" : "Open XORA chat"}
        aria-expanded={isOpen}
        aria-controls="xora-chat-panel"
        title={isOpen ? "Close chat" : "Chat with XORA"}
        className="xora-chat-launcher flex h-[100px] w-[100px] items-center justify-center overflow-visible rounded-full bg-transparent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c8f542] focus-visible:ring-offset-2 focus-visible:ring-offset-black sm:h-[112px] sm:w-[112px]"
      >
        {isOpen ? (
          <span className="flex h-14 w-14 items-center justify-center rounded-full border border-[#c8f542]/55 bg-[#080909] text-[#c8f542] shadow-[0_6px_18px_rgba(0,0,0,0.4)]">
            <X size={23} aria-hidden="true" />
          </span>
        ) : (
          <span className="xora-robot" aria-hidden="true">
            <span className="xora-robot-antenna">
              <span />
            </span>

            <span className="xora-robot-head">
              <span className="xora-robot-ear xora-robot-ear-left" />
              <span className="xora-robot-ear xora-robot-ear-right" />

              <span className="xora-robot-face">
                <span className="xora-robot-eye" />
                <span className="xora-robot-eye" />
                <span className="xora-robot-mouth" />
              </span>
            </span>

            <span className="xora-robot-neck" />

            <span className="xora-robot-body">
              <span className="xora-robot-chest">
                <span className="xora-robot-chest-light" />
                <span className="xora-robot-chest-line" />
              </span>
            </span>

            <span className="xora-robot-arm xora-robot-arm-left">
              <span className="xora-robot-joint" />
              <span className="xora-robot-hand" />
            </span>

            <span className="xora-robot-arm xora-robot-arm-right">
              <span className="xora-robot-joint" />
              <span className="xora-robot-hand" />
            </span>

            <span className="xora-robot-leg xora-robot-leg-left">
              <span className="xora-robot-foot" />
            </span>

            <span className="xora-robot-leg xora-robot-leg-right">
              <span className="xora-robot-foot" />
            </span>
          </span>
        )}
      </button>
    </div>
  );
}
