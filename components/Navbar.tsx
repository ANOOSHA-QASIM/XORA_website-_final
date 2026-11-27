
"use client";

import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const closeMenu = () => setMobileOpen(false);

  const navSurface =
    "border-white/[0.12] bg-[#090b09]/85 shadow-[0_18px_55px_rgba(0,0,0,0.38),inset_0_1px_0_rgba(255,255,255,0.07)]";

  const navText =
    "text-white/65 hover:text-white hover:bg-white/[0.05]";

  const iconSurface =
    "border-white/10 bg-white/[0.04] text-white/75 hover:text-[#c6ff00]";

  return (
    <header className="fixed inset-x-0 top-0 z-[9000]">
      <div className="mx-auto w-full max-w-[1500px] px-4 pt-4 sm:px-8 lg:px-12">
        <nav
          aria-label="Main navigation"
          className={`relative flex h-[68px] items-center justify-between overflow-hidden rounded-2xl border px-4 backdrop-blur-2xl transition-all duration-300 sm:px-6 ${navSurface}`}
        >
          {/* Restrained lime reflection */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-[12%] top-0 h-px bg-gradient-to-r from-transparent via-[#c6ff00]/55 to-transparent"
          />

          {/* Logo */}
          <a
            href="#home"
            onClick={closeMenu}
            aria-label="XORA home"
            className="group relative z-10 flex shrink-0 items-center gap-2"
          >
            <span className="text-[24px] font-semibold tracking-[0.23em] text-white transition-colors duration-300 group-hover:text-[#c6ff00]">
              XORA
            </span>

            <span className="h-1.5 w-1.5 rounded-full bg-[#c6ff00] shadow-[0_0_12px_rgba(198,255,0,0.7)]" />
          </a>

          {/* Desktop navigation */}
          <div className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-0.5 lg:flex">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`group relative rounded-xl px-3.5 py-2.5 text-[13px] font-medium transition-all duration-300 xl:px-4 ${navText}`}
              >
                {item.label}

                <span className="absolute bottom-1.5 left-1/2 h-px w-0 -translate-x-1/2 bg-[#c6ff00] shadow-[0_0_8px_rgba(198,255,0,0.65)] transition-all duration-300 group-hover:w-5" />
              </a>
            ))}
          </div>

          {/* Actions */}
          <div className="relative z-10 ml-auto flex items-center gap-2 lg:ml-0">
            {/* Let's Talk button */}
            <a
              href="#contact"
              className="group hidden h-10 items-center gap-2 rounded-xl border border-[#d8ff57]/60 bg-[#c6ff00] px-4 text-[13px] font-semibold text-[#10130a] shadow-[0_4px_0_0_rgba(115,150,0,0.45),0_8px_24px_rgba(198,255,0,0.10)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#d4ff32] hover:shadow-[0_5px_0_0_rgba(115,150,0,0.45),0_12px_28px_rgba(198,255,0,0.18)] active:translate-y-0 lg:inline-flex"
            >
              Let's Talk

              <ArrowUpRight
                size={16}
                strokeWidth={2.2}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>

            {/* Mobile menu toggle */}
            <button
              type="button"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              aria-controls="xora-mobile-menu"
              onClick={() => setMobileOpen((prev) => !prev)}
              className={`flex h-10 w-10 items-center justify-center rounded-xl border transition-all duration-300 hover:border-[#c6ff00]/50 hover:text-[#c6ff00] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c6ff00] lg:hidden ${iconSurface}`}
            >
              {mobileOpen ? (
                <X size={20} aria-hidden="true" />
              ) : (
                <Menu size={20} aria-hidden="true" />
              )}
            </button>
          </div>
        </nav>

        {/* Mobile navigation */}
        <div
          id="xora-mobile-menu"
          aria-hidden={!mobileOpen}
          className={`grid transition-[grid-template-rows,opacity,margin] duration-300 ease-out lg:hidden ${
            mobileOpen
              ? "mt-3 grid-rows-[1fr] opacity-100"
              : "mt-0 grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="min-h-0 overflow-hidden">
            <div className="overflow-hidden rounded-2xl border border-white/[0.12] bg-[#090b09]/95 p-3 shadow-[0_20px_55px_rgba(0,0,0,0.42),inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-2xl">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  tabIndex={mobileOpen ? 0 : -1}
                  onClick={closeMenu}
                  className="flex items-center justify-between rounded-xl px-4 py-3.5 text-sm font-medium text-white/65 transition-colors duration-200 hover:bg-white/[0.045] hover:text-[#c6ff00]"
                >
                  {item.label}

                  <ArrowUpRight size={15} className="opacity-45" />
                </a>
              ))}

              {/* Mobile Let's Talk button */}
              <a
                href="#contact"
                tabIndex={mobileOpen ? 0 : -1}
                onClick={closeMenu}
                className="mt-2 flex h-[48px] items-center justify-center gap-2 rounded-xl border border-[#d8ff57]/50 bg-[#c6ff00] text-sm font-semibold text-[#10130a] shadow-[0_4px_0_rgba(115,150,0,0.4)] transition-all duration-200 hover:bg-[#d4ff32] active:translate-y-0.5"
              >
                Let's Talk

                <ArrowUpRight size={17} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
