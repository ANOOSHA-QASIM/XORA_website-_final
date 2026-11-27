
"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Minus, Plus } from "lucide-react";

const faqs = [
  {
    question: "What can XORA automate for my business?",
    answer:
      "XORA can automate repetitive tasks, streamline your workflows, connect your existing tools, and build intelligent systems like chatbots, lead management, inventory sync, and more. We focus on real business processes, not just technology for the sake of it.",
  },
  {
    question: "Can you work with my existing tools?",
    answer:
      "Yes. We can assess your existing tools and explore integrations through APIs, webhooks, CRMs, databases, and automation platforms. Our goal is to improve your current workflow wherever practical, without replacing systems unnecessarily.",
  },
  {
    question: "How does a project begin?",
    answer:
      "We start by understanding your business, the problems you want to solve, and your current workflow. Then we identify suitable opportunities, propose an approach, and agree on the project scope before development begins.",
  },
  {
    question: "Can AI be integrated into my current workflow?",
    answer:
      "Yes. Depending on your needs, we can integrate AI into customer support, lead qualification, data processing, content workflows, and other business operations. We choose an approach based on your actual requirements.",
  },
  {
    question: "Do you offer ongoing support?",
    answer:
      "We can help with maintenance, troubleshooting, monitoring, and improvements after implementation. The support arrangement will depend on your project's needs and the scope we agree on.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="relative overflow-hidden bg-[#080908] px-5 py-20 text-white sm:px-8 lg:px-16 lg:py-28"
    >
      {/* Ambient lime lighting */}
      <div className="pointer-events-none absolute -left-32 top-1/3 h-80 w-80 rounded-full bg-[#c6ff00]/[0.06] blur-[110px]" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-[#c6ff00]/[0.04] blur-[110px]" />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
        {/* Left content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55 }}
          className="flex flex-col items-start lg:sticky lg:top-28 lg:self-start"
        >
          <div className="mb-6 flex items-center gap-3">
            <span className="h-[3px] w-10 bg-[#c6ff00]" />
            <span className="text-xs font-medium uppercase tracking-[0.28em] text-gray-300">
              FAQ
            </span>
          </div>

          <h2 className="text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
            Good Questions.
            <br />
            <span className="text-[#c6ff00]">Clear Answers.</span>
          </h2>

          <p className="mt-7 max-w-md text-sm leading-7 text-gray-300 sm:text-base">
            We believe in transparency. Here are some of the most common
            questions we get about our services, process, and working with XORA.
          </p>

          <a
            href="#contact"
            className="group mt-8 inline-flex flex-col items-start gap-3 text-[#c6ff00]"
          >
            <span className="flex items-center gap-4 text-sm font-medium sm:text-base">
              Still have a question?
              <ArrowRight
                size={21}
                className="transition-transform duration-300 group-hover:translate-x-2"
              />
            </span>

            <span className="h-px w-16 bg-[#c6ff00] transition-all duration-300 group-hover:w-full" />
          </a>
        </motion.div>

        {/* Right accordion */}
        <div className="min-w-0 border-t border-white/20">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.06,
                }}
                className="border-b border-white/20"
              >
                <button
                  type="button"
                  onClick={() =>
                    setOpenIndex(isOpen ? null : index)
                  }
                  aria-expanded={isOpen}
                  className="group flex w-full items-start gap-4 py-6 text-left sm:items-center sm:gap-5 sm:py-7"
                >
                  {/* Number */}
                  <span
                    className={`w-7 shrink-0 pt-0.5 text-sm font-semibold tabular-nums transition-colors sm:w-9 sm:text-base ${
                      isOpen ? "text-[#c6ff00]" : "text-gray-400"
                    }`}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  {/* Vertical divider */}
                  <span
                    className={`hidden h-8 w-px shrink-0 transition-colors sm:block ${
                      isOpen ? "bg-[#c6ff00]" : "bg-white/40"
                    }`}
                  />

                  {/* Question and answer */}
                  <span className="min-w-0 flex-1">
                    <span
                      className={`block text-sm font-semibold leading-6 transition-colors sm:text-base md:text-lg ${
                        isOpen
                          ? "text-white"
                          : "text-gray-200 group-hover:text-[#c6ff00]"
                      }`}
                    >
                      {faq.question}
                    </span>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.span
                          key="answer"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{
                            height: {
                              duration: 0.3,
                              ease: [0.22, 1, 0.36, 1],
                            },
                            opacity: { duration: 0.22 },
                          }}
                          className="block overflow-hidden"
                        >
                          <span className="block max-w-xl pt-4 text-sm leading-7 text-gray-300">
                            {faq.answer}
                          </span>
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </span>

                  {/* Plus / minus */}
                  <span
                    className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center transition-colors ${
                      isOpen
                        ? "text-[#c6ff00]"
                        : "text-gray-300 group-hover:text-[#c6ff00]"
                    }`}
                  >
                    {isOpen ? <Minus size={19} /> : <Plus size={19} />}
                  </span>
                </button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
