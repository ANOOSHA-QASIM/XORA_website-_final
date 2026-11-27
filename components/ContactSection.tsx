
"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  CalendarDays,
  Lock,
  Send,
  Shield,
} from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

const services = [
  "AI Automation",
  "CRM Automation",
  "Workflow Automation",
  "AI Chatbots",
  "Website Development",
  "Custom Software",
  "Lead Generation Systems",
  "Other",
];

const reveal = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease },
  },
};

export default function ContactSection() {
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (isSending) return;

    setIsSending(true);
    setStatus({ type: null, message: "" });

    const form = event.currentTarget;
    const formData = new FormData(form);

    const data = {
      name: String(formData.get("name") || "").trim(),
      email: String(formData.get("email") || "").trim(),
      company: String(formData.get("company") || "").trim(),
      service: String(formData.get("service") || "").trim(),
      message: String(formData.get("message") || "").trim(),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const contentType = response.headers.get("content-type") || "";

      if (!contentType.includes("application/json")) {
        throw new Error("Server error. Please try again in a moment.");
      }

      const result: { success?: boolean; message?: string } =
        await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.message || "Unable to send your message.");
      }

      setStatus({
        type: "success",
        message: "Message sent successfully! We'll get back to you soon.",
      });

      form.reset();
    } catch (error) {
      setStatus({
        type: "error",
        message:
          error instanceof Error
            ? error.message
            : "Something went wrong. Please try again.",
      });
    } finally {
      setIsSending(false);
    }
  }

  return (
    <section
      id="contact"
      className="relative isolate overflow-hidden bg-[#030303] px-5 py-20 text-white sm:px-8 md:px-10 md:py-24 lg:px-16"
    >
      {/* BACKGROUND LIGHTING */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-0 top-[15%] h-[360px] w-[360px] rounded-full bg-[#c6ff00]/[0.035] blur-[130px]" />
        <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-[#c6ff00]/[0.035] blur-[140px]" />
        <div className="absolute inset-x-[8%] top-0 h-px bg-gradient-to-r from-transparent via-white/[0.12] to-transparent" />
        <div className="absolute inset-x-[8%] bottom-0 h-px bg-gradient-to-r from-transparent via-[#c6ff00]/25 to-transparent" />
      </div>

      <div className="relative mx-auto max-w-[1250px]">
        {/* SECTION HEADER */}
        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          className="mx-auto mb-12 max-w-3xl text-center sm:mb-14"
        >
          <motion.div
            initial={{ width: 0, opacity: 0 }}
            whileInView={{ width: 40, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mx-auto mb-5 h-[2px] bg-[#c6ff00]"
          />

          
            
        </motion.div>

        {/* FORM LEFT — HEADING RIGHT */}
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          {/* 3D CONTACT FORM */}
          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            whileHover={{ y: -3 }}
            transition={{ duration: 0.3, ease }}
            className="relative [perspective:1200px]"
          >
            {/* Subtle 3D lower edge */}
            <div className="absolute inset-x-2 bottom-[-7px] top-2 rounded-2xl border border-[#c6ff00]/30 bg-[#11150a]" />

            <div className="relative overflow-hidden rounded-2xl border border-white/[0.15] bg-gradient-to-br from-[#151715] via-[#0a0b0a] to-[#070807] p-5 shadow-[0_20px_55px_rgba(0,0,0,0.45),inset_0_1px_0_rgba(255,255,255,0.06)] sm:p-7 md:p-8">
              <div className="pointer-events-none absolute right-0 top-0 h-40 w-40 rounded-full bg-[#c6ff00]/[0.035] blur-[65px]" />

              <div className="relative">
                <div className="mb-6 flex items-center gap-4">
                  <motion.div
                    whileHover={{ rotate: 6, scale: 1.05 }}
                    transition={{ duration: 0.25 }}
                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[#c6ff00]/35 bg-[#c6ff00]/[0.055] text-[#c6ff00]"
                  >
                    <Send size={21} />
                  </motion.div>

                  <div>
                    <h3 className="text-lg font-medium sm:text-xl">
                      Start a Conversation
                    </h3>
                    <p className="mt-1 text-xs leading-5 text-white/50 sm:text-sm">
                      Tell us a little about your project.
                    </p>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <AnimatedInput
                      name="name"
                      placeholder="Your Name"
                      label="Full Name"
                      required
                    />

                    <AnimatedInput
                      name="email"
                      type="email"
                      placeholder="Your Email"
                      label="Work Email"
                      required
                    />
                  </div>

                  <AnimatedInput
                    name="company"
                    placeholder="Company Name"
                    label="Company"
                  />

                  <div>
                    <label
                      htmlFor="contact-service"
                      className="mb-2 block text-xs font-medium text-white/75"
                    >
                      What are you looking to build?
                      <span className="ml-1 text-[#c6ff00]">*</span>
                    </label>

                    <div className="relative">
                      <select
                        id="contact-service"
                        name="service"
                        defaultValue=""
                        required
                        className="h-12 w-full cursor-pointer appearance-none rounded-lg border border-white/[0.14] bg-[#0a0b0a] px-4 pr-10 text-sm text-white/75 outline-none transition-all duration-300 hover:border-white/25 focus:border-[#c6ff00]/60 focus:ring-1 focus:ring-[#c6ff00]/15"
                      >
                        <option value="" disabled>
                          Select a service
                        </option>
                        {services.map((service) => (
                          <option
                            key={service}
                            value={service}
                            className="bg-[#0a0b0a] text-white"
                          >
                            {service}
                          </option>
                        ))}
                      </select>

                      <ArrowRight
                        size={15}
                        className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 rotate-90 text-[#c6ff00]"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="contact-message"
                      className="mb-2 block text-xs font-medium text-white/75"
                    >
                      Project Details
                      <span className="ml-1 text-[#c6ff00]">*</span>
                    </label>

                    <motion.textarea
                      id="contact-message"
                      name="message"
                      required
                      minLength={10}
                      rows={4}
                      whileFocus={{ borderColor: "rgba(198,255,0,0.6)" }}
                      placeholder="Tell us about your goals or challenges..."
                      className="w-full resize-y rounded-lg border border-white/[0.14] bg-black/30 px-4 py-3 text-sm leading-6 text-white outline-none transition-all duration-300 placeholder:text-white/35 focus:border-[#c6ff00]/60 focus:shadow-[0_0_20px_rgba(198,255,0,0.05)]"
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSending}
                    whileHover={
                      !isSending
                        ? {
                            y: -2,
                            boxShadow: "0 0 24px rgba(198,255,0,0.16)",
                          }
                        : undefined
                    }
                    whileTap={!isSending ? { scale: 0.985 } : undefined}
                    className="flex h-12 w-full items-center justify-center gap-3 rounded-lg bg-[#c6ff00] px-5 text-sm font-semibold text-black transition-colors hover:bg-[#d5ff45] disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {isSending ? (
                      <>
                        <span className="h-4 w-4 animate-spin rounded-full border-2 border-black/25 border-t-black" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <ArrowRight size={18} />
                      </>
                    )}
                  </motion.button>
                </form>

                {status.type && (
                  <motion.div
                    role="status"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`mt-4 rounded-lg border px-4 py-3 text-center text-xs ${
                      status.type === "success"
                        ? "border-[#c6ff00]/30 bg-[#c6ff00]/[0.06] text-[#c6ff00]"
                        : "border-red-500/30 bg-red-500/[0.06] text-red-300"
                    }`}
                  >
                    {status.message}
                  </motion.div>
                )}

                <div className="mt-5 flex items-center justify-center gap-2 text-center text-[10px] leading-4 text-white/40 sm:text-xs">
                  <Lock size={13} className="shrink-0 text-[#c6ff00]" />
                  Your information stays private and secure.
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT: MODERATE HEADING */}
          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: 0.1, duration: 0.7, ease }}
            className="flex flex-col justify-center lg:pl-3"
          >
            <div className="mb-5 flex items-center gap-3">
              <span className="h-[2px] w-8 bg-[#c6ff00]" />
              <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-[#c6ff00] sm:text-sm">
                LET&apos;S WORK TOGETHER
              </p>
            </div>

            <h3 className="text-4xl font-semibold leading-[1.08] tracking-[-0.04em] sm:text-5xl lg:text-[52px]">
              Ready to Automate
              <br />
              Your{" "}
              <span className="text-[#c6ff00]">Business?</span>
            </h3>

            <p className="mt-6 max-w-lg text-sm leading-7 text-white/60 sm:text-base">
              Tell us about your goals and challenges. We&apos;ll help you
              identify the right opportunities and build a solution around
              your business needs.
            </p>

            <div className="mt-7 h-px w-10 bg-[#c6ff00]" />

            <a
              href="https://calendar.app.google/vXNQVxL9w2JSUqkb6"
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-7 inline-flex w-fit items-center gap-3 rounded-lg border border-[#c6ff00]/40 bg-[#c6ff00]/[0.035] px-5 py-3 text-sm font-medium text-[#c6ff00] transition-all duration-300 hover:border-[#c6ff00]/70 hover:bg-[#c6ff00]/[0.08]"
            >
              <CalendarDays size={17} />
              Book a Free Consultation
              <ArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>

            <div className="mt-9 grid max-w-lg grid-cols-1 gap-4 border-t border-white/[0.09] pt-6 sm:grid-cols-2">
              <div className="flex items-start gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-[#c6ff00]/25 bg-[#c6ff00]/[0.04] text-[#c6ff00]">
                  <Shield size={17} />
                </div>
                <div>
                  <h4 className="text-sm font-medium">Built Around You</h4>
                  <p className="mt-1 text-xs leading-5 text-white/45">
                    Solutions tailored to your workflows.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-[#c6ff00]/25 bg-[#c6ff00]/[0.04] text-[#c6ff00]">
                  <Shield size={17} />
                </div>
                <div>
                  <h4 className="text-sm font-medium">Designed to Scale</h4>
                  <p className="mt-1 text-xs leading-5 text-white/45">
                    Systems built for changing business needs.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function AnimatedInput({
  name,
  label,
  placeholder,
  type = "text",
  required = false,
}: {
  name: string;
  label: string;
  placeholder: string;
  type?: string;
  required?: boolean;
}) {
  const autoComplete =
    name === "name"
      ? "name"
      : name === "email"
        ? "email"
        : name === "company"
          ? "organization"
          : undefined;

  return (
    <div className="min-w-0">
      <label
        htmlFor={`contact-${name}`}
        className="mb-2 block text-xs font-medium text-white/75"
      >
        {label}
        {required && <span className="ml-1 text-[#c6ff00]">*</span>}
      </label>

      <motion.input
        id={`contact-${name}`}
        type={type}
        name={name}
        placeholder={placeholder}
        required={required}
        autoComplete={autoComplete}
        whileFocus={{ scale: 1.005 }}
        className="h-12 w-full rounded-lg border border-white/[0.14] bg-black/30 px-4 text-sm text-white outline-none transition-all duration-300 placeholder:text-white/35 hover:border-white/25 focus:border-[#c6ff00]/60 focus:shadow-[0_0_20px_rgba(198,255,0,0.05)]"
      />
    </div>
  );
}
