import IntroStatement from "@/components/IntroStatement";
import OpeningSection from "@/components/OpeningSection";
import Services from "@/components/Services";
import ProcessSection from "@/components/ProcessSection";
import CaseStudySection from "@/components/CaseStudySection";
import AboutUs from "@/components/AboutUs";
import TeamSection from "@/components/TeamSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import FAQSection from "@/components/FAQSection";
import WhatsAppButton from "@/components/WhatsAppButton";
import ChatbotWidget from "@/components/ChatbotWidget";

export default function Home() {
  return (
    <main className="relative min-h-screen w-full bg-black">
      <Navbar />

      <OpeningSection />

      <IntroStatement />

      <Services />

      <ProcessSection />

      <CaseStudySection />

      <AboutUs />

      <TeamSection />

      <FAQSection />

      <ContactSection />

      <Footer />

      <WhatsAppButton />
      <ChatbotWidget />
    </main>
  );
}