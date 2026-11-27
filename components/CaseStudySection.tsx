
"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  CircleHelp,
  LayoutDashboard,
  MessageCircle,
  Package,
  Search,
  Users,
} from "lucide-react";

const projects = [
  {
    number: "01",
    title: "OmniSync",
    category: "LEAD MANAGEMENT & INVENTORY AUTOMATION",
    description:
      "A multichannel inventory and order synchronization system designed to help e-commerce businesses coordinate stock and automate updates across platforms.",
    features: [
      "Multichannel Sync",
      "Central Inventory",
      "Automated Updates",
      "Unified Dashboard",
    ],
  },
  {
    number: "02",
    title: "Velora Real Estate",
    category: "WEBSITE DEVELOPMENT",
    description:
      "A modern real estate website concept with property listings, streamlined lead capture, and a polished browsing experience.",
  },
  {
    number: "03",
    title: "CareConnect",
    category: "AI CHATBOT SOLUTION",
    description:
      "A healthcare chatbot concept designed to answer common questions, assist with appointment requests, and simplify patient communication.",
  },
];

const ease = [0.22, 1, 0.36, 1] as const;

export default function OurWork() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="work"
      className="relative isolate overflow-hidden bg-[#080a08] px-5 py-20 text-[#f4f4ef] sm:px-8 sm:py-24 lg:px-12 lg:py-28 xl:px-[5%]"
    >
      {/* Background lighting */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-[25%] -z-10 h-[420px] w-[420px] rounded-full bg-[#c5e900]/[0.055] blur-[140px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-[40%] -z-10 h-[420px] w-[420px] rounded-full bg-[#c5e900]/[0.04] blur-[140px]"
      />

      <div className="mx-auto max-w-[1500px]">
        {/* Heading */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65, ease }}
          className="mb-12 grid gap-7 lg:mb-14 lg:grid-cols-[1.2fr_0.8fr] lg:items-end"
        >
          <div>
            <div className="mb-5 flex items-center gap-4">
              <span className="h-[3px] w-12 bg-[#c5e900]" />
              <span className="text-[10px] font-medium uppercase tracking-[0.28em] text-white/65 sm:text-[11px]">
                Case Studies
              </span>
            </div>

            <h2 className="max-w-[800px] text-[38px] font-bold leading-[1.08] tracking-[-0.045em] sm:text-5xl lg:text-[58px] xl:text-[64px]">
              Solutions Built to Make
              <br />
              <span className="text-[#c5e900]">
                Work Flow Better.
              </span>
            </h2>
          </div>

          <p className="max-w-[430px] text-[13px] leading-7 text-white/60 sm:text-sm sm:leading-7 lg:justify-self-end">
            Real business challenges. Thoughtful technology.
            Explore how XORA approaches automation, web development,
            and custom software to make everyday work simpler.
          </p>
        </motion.div>

        {/* Asymmetrical project layout */}
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-[1.8fr_1fr]">
          {/* FEATURED PROJECT */}
          <motion.article
            initial={reduceMotion ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.7, ease }}
            className="group relative overflow-hidden rounded-[16px] border border-white/[0.15] bg-gradient-to-br from-[#141714] via-[#0c0e0c] to-[#090b09] shadow-[0_20px_60px_rgba(0,0,0,0.24),inset_0_1px_0_rgba(255,255,255,0.045)] transition-colors duration-300 hover:border-[#c5e900]/35"
          >
            <div
              aria-hidden="true"
              className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-[#c5e900]/50 to-transparent"
            />

            <div className="grid h-full grid-cols-1 xl:grid-cols-[0.82fr_1.18fr]">
              {/* Project description */}
              <div className="relative z-10 flex flex-col p-6 sm:p-8 lg:p-9 xl:py-10">
                <div className="mb-8 flex items-center gap-2">
                  <span className="text-[11px] font-semibold tracking-[0.18em] text-[#c5e900]">
                    01 /
                  </span>
                  <span className="text-[10px] font-medium uppercase tracking-[0.17em] text-[#c5e900]">
                    Featured Project
                  </span>
                </div>

                <p className="text-[9px] font-medium uppercase leading-5 tracking-[0.17em] text-white/55 sm:text-[10px]">
                  {projects[0].category}
                </p>

                <h3 className="mt-4 text-4xl font-bold tracking-[-0.045em] sm:text-5xl">
                  OmniSync
                </h3>

                <p className="mt-5 max-w-[360px] text-[13px] leading-7 text-white/65 sm:text-sm">
                  {projects[0].description}
                </p>

                <a
                  href="#contact"
                  className="group/link mt-7 inline-flex w-fit items-center gap-3 text-[12px] font-semibold text-[#c5e900] transition-colors hover:text-[#e0ff54] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c5e900]"
                >
                  Explore Project
                  <ArrowRight
                    size={17}
                    className="transition-transform duration-300 group-hover/link:translate-x-1"
                  />
                </a>

                <span className="mt-2 h-px w-12 bg-[#c5e900]/70" />

                {/* Feature list */}
                <div className="mt-9 grid grid-cols-2 gap-x-4 gap-y-4 border-t border-white/10 pt-6">
                  {projects[0].features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-start gap-2 text-[10px] leading-5 text-white/65"
                    >
                      <Check
                        size={13}
                        className="mt-0.5 shrink-0 text-[#c5e900]"
                      />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>

              {/* CSS-built dashboard preview */}
              <div className="relative flex min-h-[320px] items-center justify-center overflow-hidden px-4 pb-7 pt-2 sm:min-h-[400px] sm:px-6 xl:min-h-[510px] xl:px-2">
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-[radial-gradient(ellipse_at_55%_50%,rgba(197,233,0,0.075),transparent_65%)]"
                />

                <div className="relative w-full max-w-[520px] [perspective:1200px]">
                  <div className="absolute -inset-3 translate-x-2 translate-y-3 rounded-[15px] border border-[#c5e900]/30 bg-[#161a0d] shadow-[0_20px_35px_rgba(0,0,0,0.45)]" />

                  <div className="relative overflow-hidden rounded-[12px] border border-[#d4e0a2]/35 bg-[#0b0e0b] shadow-[0_25px_55px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.07)] transition-transform duration-500 group-hover:-translate-y-1 group-hover:rotate-0 xl:-rotate-[2deg]">
                    {/* Dashboard top bar */}
                    <div className="flex h-11 items-center justify-between border-b border-white/10 px-3 sm:px-4">
                      <div className="flex items-center gap-2">
                        <div className="flex h-6 w-6 items-center justify-center rounded-md bg-[#c5e900]/10">
                          <Package size={13} className="text-[#c5e900]" />
                        </div>
                        <span className="text-[10px] font-semibold">
                          OmniSync
                        </span>
                      </div>

                      <span className="flex items-center gap-1.5 text-[8px] text-[#c5e900] sm:text-[9px]">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#c5e900]" />
                        Dashboard
                      </span>
                    </div>

                    <div className="grid grid-cols-[82px_1fr] sm:grid-cols-[100px_1fr]">
                      {/* Sidebar */}
                      <div className="space-y-4 border-r border-white/10 p-2.5 sm:p-3">
                        {[
                          { label: "Overview", icon: LayoutDashboard },
                          { label: "Inventory", icon: Package },
                          { label: "Orders", icon: Check },
                          { label: "Channels", icon: Users },
                        ].map((item, index) => {
                          const Icon = item.icon;
                          return (
                            <div
                              key={item.label}
                              className={`flex items-center gap-1.5 rounded px-1.5 py-1.5 text-[8px] ${
                                index === 1
                                  ? "bg-[#c5e900]/10 text-[#c5e900]"
                                  : "text-white/45"
                              }`}
                            >
                              <Icon size={11} />
                              <span>{item.label}</span>
                            </div>
                          );
                        })}
                      </div>

                      {/* Main dashboard */}
                      <div className="min-w-0 p-3 sm:p-4">
                        <div className="flex items-center justify-between gap-2">
                          <div>
                            <p className="text-[12px] font-semibold sm:text-sm">
                              Inventory
                            </p>
                            <p className="mt-1 text-[8px] text-white/40">
                              Central inventory overview
                            </p>
                          </div>
                          <span className="rounded border border-[#c5e900]/30 bg-[#c5e900]/10 px-2 py-1 text-[8px] text-[#c5e900]">
                            Sync status
                          </span>
                        </div>

                        {/* Status cards */}
                        <div className="mt-4 grid grid-cols-3 gap-1.5 sm:gap-2">
                          {[
                            { label: "Healthy", color: "#c5e900" },
                            { label: "Low Stock", color: "#d6c86b" },
                            { label: "Out of Stock", color: "#e7a5a5" },
                          ].map((status) => (
                            <div
                              key={status.label}
                              className="rounded-md border border-white/[0.09] bg-white/[0.025] p-2"
                            >
                              <span
                                className="mb-2 block h-1 w-4 rounded-full"
                                style={{ backgroundColor: status.color }}
                              />
                              <p className="text-[8px] leading-4 text-white/65">
                                {status.label}
                              </p>
                            </div>
                          ))}
                        </div>

                        {/* Table */}
                        <div className="mt-4 overflow-hidden rounded-md border border-white/10">
                          <div className="grid grid-cols-[1fr_0.8fr_0.8fr] border-b border-white/10 bg-white/[0.035] px-2 py-2 text-[8px] text-white/45 sm:px-3">
                            <span>Product</span>
                            <span>Channel</span>
                            <span>Status</span>
                          </div>

                          {[
                            ["Product Alpha", "Shopify", "Synced"],
                            ["Product Beta", "Amazon", "Synced"],
                            ["Product Gamma", "Etsy", "Review"],
                            ["Product Delta", "TikTok", "Synced"],
                          ].map((item, index) => (
                            <div
                              key={item[0]}
                              className="grid grid-cols-[1fr_0.8fr_0.8fr] items-center border-b border-white/[0.06] px-2 py-3 last:border-b-0 sm:px-3"
                            >
                              <span className="truncate pr-1 text-[8px] text-white/70 sm:text-[9px]">
                                {item[0]}
                              </span>
                              <span className="truncate text-[8px] text-white/45 sm:text-[9px]">
                                {item[1]}
                              </span>
                              <span
                                className={`w-fit rounded px-1.5 py-1 text-[7px] sm:text-[8px] ${
                                  index === 2
                                    ? "bg-white/[0.07] text-white/60"
                                    : "bg-[#c5e900]/10 text-[#c5e900]"
                                }`}
                              >
                                {item[2]}
                              </span>
                            </div>
                          ))}
                        </div>

                        {/* Workflow strip */}
                        <div className="mt-4 flex items-center gap-1.5 overflow-hidden rounded-md border border-white/[0.08] bg-white/[0.02] p-2 sm:gap-2">
                          {["Sale", "Map SKU", "Update"].map(
                            (step, index) => (
                              <div
                                key={step}
                                className="flex min-w-0 flex-1 items-center gap-1.5"
                              >
                                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded border border-[#c5e900]/25 bg-[#c5e900]/[0.08] text-[8px] text-[#c5e900]">
                                  {index + 1}
                                </span>
                                <span className="truncate text-[7px] text-white/55 sm:text-[9px]">
                                  {step}
                                </span>
                                {index < 2 && (
                                  <ArrowRight
                                    size={10}
                                    className="shrink-0 text-[#c5e900]/70"
                                  />
                                )}
                              </div>
                            )
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Soft floor reflection */}
                  <div
                    aria-hidden="true"
                    className="absolute -bottom-5 left-[12%] right-[8%] h-5 rounded-full bg-[#c5e900]/10 blur-xl"
                  />
                </div>
              </div>
            </div>
          </motion.article>

          {/* SECONDARY PROJECTS */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-1">
            {/* Website development */}
            <motion.article
              initial={reduceMotion ? false : { opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.65, delay: 0.08, ease }}
              className="group relative flex min-h-[260px] flex-col overflow-hidden rounded-[15px] border border-white/[0.14] bg-gradient-to-br from-[#151815] to-[#0a0c0a] shadow-[0_14px_35px_rgba(0,0,0,0.2)] transition-colors duration-300 hover:border-[#c5e900]/35 sm:min-h-[300px] lg:min-h-0"
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

              <div className="grid flex-1 grid-cols-[1fr_0.82fr]">
                <div className="relative z-10 flex flex-col p-5 sm:p-6">
                  <ProjectLabel number="02" category="Website Development" />

                  <h3 className="mt-5 text-xl font-bold leading-tight tracking-[-0.03em] sm:text-2xl">
                    Velora Real Estate
                  </h3>

                  <p className="mt-3 text-[11px] leading-5 text-white/60 sm:text-xs sm:leading-6">
                    {projects[1].description}
                  </p>

                  <ProjectLink />
                </div>

                <div className="relative flex min-w-0 items-center overflow-hidden pl-1 pr-3">
                  <WebsitePreview />
                </div>
              </div>
            </motion.article>

            {/* Chatbot solution */}
            <motion.article
              initial={reduceMotion ? false : { opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.65, delay: 0.16, ease }}
              className="group relative flex min-h-[260px] flex-col overflow-hidden rounded-[15px] border border-white/[0.14] bg-gradient-to-br from-[#151815] to-[#0a0c0a] shadow-[0_14px_35px_rgba(0,0,0,0.2)] transition-colors duration-300 hover:border-[#c5e900]/35 sm:min-h-[300px] lg:min-h-0"
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

              <div className="grid flex-1 grid-cols-[1fr_0.82fr]">
                <div className="relative z-10 flex flex-col p-5 sm:p-6">
                  <ProjectLabel number="03" category="AI Chatbot Solution" />

                  <h3 className="mt-5 text-xl font-bold leading-tight tracking-[-0.03em] sm:text-2xl">
                    CareConnect
                  </h3>

                  <p className="mt-3 text-[11px] leading-5 text-white/60 sm:text-xs sm:leading-6">
                    {projects[2].description}
                  </p>

                  <ProjectLink />
                </div>

                <div className="relative flex min-w-0 items-center justify-center overflow-hidden px-2 pt-4">
                  <ChatPreview />
                </div>
              </div>
            </motion.article>
          </div>
        </div>
      </div>
    </section>
  );
}

/* Project label */
function ProjectLabel({
  number,
  category,
}: {
  number: string;
  category: string;
}) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <span className="text-[10px] font-semibold tracking-[0.15em] text-[#c5e900]">
        {number} /
      </span>
      <span className="text-[8px] font-medium uppercase tracking-[0.15em] text-white/65 sm:text-[9px]">
        {category}
      </span>
    </div>
  );
}

/* Project link */
function ProjectLink() {
  return (
    <a
      href="#contact"
      className="group/link mt-auto inline-flex w-fit items-center gap-2 pt-5 text-[11px] font-semibold text-[#c5e900] transition-colors hover:text-[#e0ff54] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c5e900]"
    >
      Explore Project
      <ArrowRight
        size={14}
        className="transition-transform duration-300 group-hover/link:translate-x-1"
      />
    </a>
  );
}

/* CSS-built real estate website preview */
function WebsitePreview() {
  return (
    <div className="relative w-full max-w-[245px] [perspective:900px]">
      <div className="absolute -inset-2 translate-x-1 translate-y-2 rounded-lg border border-[#c5e900]/25 bg-[#171b12]" />

      <div className="relative overflow-hidden rounded-md border border-white/20 bg-[#090b09] shadow-[0_18px_32px_rgba(0,0,0,0.5)] transition-transform duration-500 group-hover:-translate-y-1 group-hover:rotate-0 sm:-rotate-[2deg]">
        {/* Browser bar */}
        <div className="flex h-6 items-center gap-1.5 border-b border-white/10 px-2">
          <span className="h-1.5 w-1.5 rounded-full bg-white/20" />
          <span className="h-1.5 w-1.5 rounded-full bg-white/20" />
          <span className="h-1.5 w-1.5 rounded-full bg-[#c5e900]/70" />
          <span className="ml-auto text-[6px] tracking-wider text-white/40">
            VELORA
          </span>
        </div>

        {/* Property hero */}
        <div className="relative flex min-h-[130px] flex-col justify-end overflow-hidden bg-gradient-to-br from-[#353c30] via-[#1b211a] to-[#080a08] p-3 sm:min-h-[155px]">
          <div
            aria-hidden="true"
            className="absolute inset-0 opacity-50"
            style={{
              backgroundImage:
                "linear-gradient(135deg, transparent 45%, rgba(197,233,0,0.09) 45.5%, transparent 46%), linear-gradient(90deg, transparent 65%, rgba(255,255,255,0.04) 65.5%, transparent 66%)",
            }}
          />

          <div className="relative z-10">
            <p className="text-[7px] uppercase tracking-[0.2em] text-[#c5e900]">
              Find your place
            </p>
            <h4 className="mt-2 text-sm font-semibold leading-tight sm:text-lg">
              A Better Way
              <br />
              to Find Home.
            </h4>
            <span className="mt-3 inline-flex rounded-sm bg-[#c5e900] px-2 py-1 text-[6px] font-semibold text-black sm:text-[7px]">
              Explore Properties
            </span>
          </div>
        </div>

        <div className="p-2.5">
          <div className="mb-2 flex items-center justify-between">
            <span className="text-[7px] font-medium text-white/75">
              Featured Properties
            </span>
            <span className="text-[6px] text-[#c5e900]">View all ↗</span>
          </div>

          <div className="grid grid-cols-2 gap-2">
            {[1, 2].map((item) => (
              <div
                key={item}
                className="overflow-hidden rounded border border-white/10"
              >
                <div
                  className={`h-9 ${
                    item === 1
                      ? "bg-gradient-to-br from-[#666d59] to-[#1a2018]"
                      : "bg-gradient-to-br from-[#5b6055] to-[#252921]"
                  }`}
                />
                <div className="p-1.5">
                  <div className="h-1 w-4/5 rounded bg-white/25" />
                  <div className="mt-1.5 h-1 w-2/5 rounded bg-[#c5e900]/70" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* CSS-built chatbot interface preview */
function ChatPreview() {
  return (
    <div className="relative flex w-full max-w-[205px] justify-center">
      <div className="absolute bottom-0 left-[12%] right-[12%] h-10 rounded-full bg-[#c5e900]/10 blur-2xl" />

      <div className="relative w-full max-w-[185px] overflow-hidden rounded-[19px] border border-white/20 bg-[#080a08] p-2 shadow-[0_20px_40px_rgba(0,0,0,0.55)] transition-transform duration-500 group-hover:-translate-y-1 group-hover:rotate-0 sm:-rotate-[3deg]">
        <div className="overflow-hidden rounded-[13px] border border-white/[0.07] bg-[#0e110e]">
          {/* Chat header */}
          <div className="flex items-center gap-2 border-b border-white/10 p-2.5">
            <div className="flex h-7 w-7 items-center justify-center rounded-full border border-[#c5e900]/25 bg-[#c5e900]/10">
              <MessageCircle size={13} className="text-[#c5e900]" />
            </div>
            <div className="min-w-0">
              <p className="text-[8px] font-semibold">CareConnect</p>
              <p className="mt-0.5 flex items-center gap-1 text-[7px] text-white/45">
                <span className="h-1 w-1 rounded-full bg-[#c5e900]" />
                Online assistant
              </p>
            </div>
            <CircleHelp size={12} className="ml-auto text-white/35" />
          </div>

          {/* Conversation */}
          <div className="space-y-3 p-2.5">
            <p className="text-center text-[6px] uppercase tracking-wider text-white/30">
              Example conversation
            </p>

            <div className="max-w-[92%] rounded-lg rounded-tl-sm border border-white/[0.06] bg-white/[0.05] p-2 text-[8px] leading-4 text-white/70">
              Hello! How can I help you today?
            </div>

            <div className="ml-auto max-w-[88%] rounded-lg rounded-tr-sm border border-[#c5e900]/20 bg-[#c5e900]/10 p-2 text-[8px] leading-4 text-[#e6f4b1]">
              I would like to request an appointment.
            </div>

            <div className="max-w-[92%] rounded-lg rounded-tl-sm border border-white/[0.06] bg-white/[0.05] p-2 text-[8px] leading-4 text-white/70">
              Of course. What day works best for you?
            </div>

            <div className="ml-auto flex w-fit items-center gap-1 rounded-lg border border-[#c5e900]/20 bg-[#c5e900]/10 px-2 py-1.5 text-[7px] text-[#c5e900]">
              <Check size={10} />
              Check availability
            </div>
          </div>

          {/* Input */}
          <div className="m-2 flex items-center gap-2 rounded-md border border-white/10 bg-black/30 px-2 py-2">
            <span className="flex-1 text-[7px] text-white/30">
              Type a message...
            </span>
            <span className="flex h-5 w-5 items-center justify-center rounded bg-[#c5e900] text-black">
              <ArrowUpRight size={11} />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
