import assert from "node:assert/strict";
import test from "node:test";
import {
  MAX_HISTORY_MESSAGES,
  MAX_MESSAGE_LENGTH,
  buildProviderHistory,
  validateChatRequest,
} from "../lib/chat/validation.ts";
import {
  XORA_CHAT_KNOWLEDGE,
  XORA_CHAT_SYSTEM_INSTRUCTION,
} from "../lib/chat/knowledge.ts";

const knowledgeText = JSON.stringify(XORA_CHAT_KNOWLEDGE).toLowerCase();
const instructionText = XORA_CHAT_SYSTEM_INSTRUCTION.toLowerCase();

test("approved knowledge covers requested XORA service categories", () => {
  const categories = [
    "AI and business process automation",
    "Website development and redesign",
    "SaaS software development",
    "Lead generation systems",
    "CRM and lead management automation",
    "Website chatbots",
    "WhatsApp chatbot solutions",
    "Voice agents",
    "Shopify inventory management automation",
    "Shopify product-image generation and upload automation",
    "SEO when needed",
  ];

  for (const category of categories) {
    assert.ok(knowledgeText.includes(category.toLowerCase()), `Missing: ${category}`);
  }
});

test("OmniSync is in development and channels remain intended, not live claims", () => {
  assert.equal(XORA_CHAT_KNOWLEDGE.omniSyncCore.status, "In development");
  for (const channel of ["Shopify", "Amazon", "Etsy", "TikTok"]) {
    assert.ok(XORA_CHAT_KNOWLEDGE.omniSyncCore.intendedIntegrations.includes(channel));
  }
  assert.match(XORA_CHAT_KNOWLEDGE.omniSyncCore.integrationStatus, /not verified/i);
  assert.match(instructionText, /intended integrations only/i);
  assert.match(instructionText, /not confirmed live/i);
  assert.match(instructionText, /never promise zero overselling/i);
});

test("response policy covers direct, concise, contextual, and safe answers", () => {
  assert.match(instructionText, /answer the visitor's actual question directly first/i);
  assert.match(instructionText, /at most one concise follow-up/i);
  assert.match(instructionText, /never invent prices/i);
  assert.match(instructionText, /do not invent clients/i);
  assert.match(instructionText, /depends on project requirements/i);
  assert.match(instructionText, /plausible workflow as a proposal only/i);
});

test("unknown pricing and unverified WhatsApp details are not represented as facts", () => {
  assert.match(knowledgeText, /do not invent or estimate prices/i);
  assert.match(knowledgeText, /number is marked.*verification/i);
  assert.match(knowledgeText, /do not provide, repeat, or claim/i);
});

test("request validation accepts only bounded alternating user/assistant history", () => {
  assert.equal(validateChatRequest({
    messages: [
      { role: "user", content: "Can you build a WhatsApp chatbot?" },
    ],
  }).ok, true);

  assert.equal(validateChatRequest({
    messages: [
      { role: "assistant", content: "Welcome" },
      { role: "user", content: "Hi" },
    ],
  }).ok, false);

  assert.equal(validateChatRequest({
    messages: [
      { role: "user", content: "First" },
      { role: "user", content: "Second" },
    ],
  }).ok, false);

  assert.equal(validateChatRequest({ messages: [{ role: "user", content: " " }] }).ok, false);
  assert.equal(validateChatRequest({
    messages: [{ role: "user", content: "x".repeat(MAX_MESSAGE_LENGTH + 1) }],
  }).ok, false);
  assert.equal(validateChatRequest({
    messages: Array.from({ length: MAX_HISTORY_MESSAGES + 1 }, (_, index) => ({
      role: index % 2 === 0 ? "user" : "assistant",
      content: "message",
    })),
  }).ok, false);
});

test("provider history omits static welcome and local errors, preserves completed turns", () => {
  const history = buildProviderHistory(
    [
      { role: "assistant", content: "Welcome", includeInProviderHistory: false },
      { role: "user", content: "We lose leads", includeInProviderHistory: true },
      { role: "assistant", content: "Tell me about your process", includeInProviderHistory: true },
      { role: "assistant", content: "Local network error", includeInProviderHistory: false },
    ],
    { role: "user", content: "We reply manually" }
  );

  assert.deepEqual(history, [
    { role: "user", content: "We lose leads" },
    { role: "assistant", content: "Tell me about your process" },
    { role: "user", content: "We reply manually" },
  ]);
  assert.equal(history.length <= MAX_HISTORY_MESSAGES, true);
});
