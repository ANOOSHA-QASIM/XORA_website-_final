
"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Zap, Bot, Workflow, Code2 } from "lucide-react";

const features = [
  { icon: Bot, label: "AI Agents" },
  { icon: Workflow, label: "Automation" },
  { icon: Code2, label: "SaaS Development" },
];

export default function IntroStatement() {
  return (
    <section className="bg-[#101110] px-5 py-14 sm:py-16">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid items-center gap-8 md:grid-cols-[1.2fr_0.8fr]"
        >
          {/* Left Content */}
          <div>
            <p className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#c5f500]">
              <Zap size={14} />
              Smarter Systems. Better Growth.
            </p>

            <h2 className="max-w-xl text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl">
              We automate the work.
              <span className="text-[#c5f500]">
                {" "}You grow faster.
              </span>
            </h2>

            <p className="mt-4 max-w-md text-sm leading-6 text-neutral-400">
              XORA builds intelligent automations, AI agents, and software
              that help businesses save time and work smarter.
            </p>

            <a
              href="#services"
              className="mt-6 inline-flex items-center gap-2 rounded-lg bg-[#c5f500] px-5 py-3 text-sm font-semibold text-black transition hover:-translate-y-1 hover:shadow-[0_6px_20px_#c5f50030]"
            >
              Explore Services
              <ArrowUpRight size={16} />
            </a>
          </div>

          {/* Compact 3D Visual */}
          <motion.div
            initial={{ opacity: 0, rotateY: -12, x: 15 }}
            whileInView={{ opacity: 1, rotateY: 0, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            whileHover={{ rotateY: -4, rotateX: 3, y: -4 }}
            style={{ transformStyle: "preserve-3d" }}
            className="relative mx-auto w-full max-w-[300px]"
          >
            <div className="absolute inset-3 translate-x-2 translate-y-3 rounded-2xl border border-[#c5f500]/10 bg-[#c5f500]/5" />

            <div className="relative rounded-2xl border border-white/[0.09] bg-[#181a17] p-5 shadow-[0_15px_35px_#00000040]">
              <div className="mb-6 flex items-center justify-between">
                <span className="text-xs text-neutral-400">XORA SYSTEMS</span>
                <span className="h-2 w-2 rounded-full bg-[#c5f500] shadow-[0_0_10px_#c5f500]" />
              </div>

              <div className="space-y-3">
                {features.map(({ icon: Icon, label }, index) => (
                  <motion.div
                    key={label}
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.12 }}
                    className="flex items-center gap-3 rounded-xl border border-white/[0.06] bg-[#20221f] px-3 py-3"
                  >
                    <div className="rounded-lg bg-[#c5f500]/10 p-2 text-[#c5f500]">
                      <Icon size={17} />
                    </div>
                    <span className="text-sm text-neutral-200">{label}</span>
                    <span className="ml-auto text-xs text-[#c5f500]">↗</span>
                  </motion.div>
                ))}
              </div>

              <div className="mt-5 flex items-center justify-between border-t border-white/[0.08] pt-4">
                <span className="text-xs text-neutral-500">
                  Built for efficiency
                </span>
                <span className="text-xs font-medium text-[#c5f500]">
                  XORA®
                </span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
