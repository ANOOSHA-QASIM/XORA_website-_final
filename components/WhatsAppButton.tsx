import { MessageCircle } from "lucide-react";
import { WHATSAPP_NUMBER } from "@/config/whatsapp";

const message =
  "Hello XORA, I’d like to learn more about your AI automation services.";
const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

export default function WhatsAppButton() {
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contact XORA on WhatsApp"
      title="Contact XORA on WhatsApp"
      className="fixed bottom-5 left-5 z-[8000] flex h-14 w-14 items-center justify-center rounded-full border border-white/15 bg-[#25D366] text-white shadow-[0_6px_20px_rgba(0,0,0,0.35)] transition-transform duration-200 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c6ff00] focus-visible:ring-offset-2 focus-visible:ring-offset-black sm:bottom-6 sm:left-6"
    >
      <MessageCircle size={27} strokeWidth={2.2} aria-hidden="true" />
    </a>
  );
}
