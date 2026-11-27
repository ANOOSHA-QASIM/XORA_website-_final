
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const team = [
  {
    name: "Anusha Qasim",
    role: "FOUNDER & CEO",
    image: "/anusha-qasim1.png",
    linkedin: "https://www.linkedin.com/in/anusha-qasim/",
  },
  {
    name: "Rohan Majeed",
    role: "CO-FOUNDER & CTO",
    image: "/rohan-majeed2.png",
    linkedin: "https://www.linkedin.com/in/rohan-majeed-6b55a1352/",
  },
 
];

export default function TeamSection() {
  return (
    <section
      id="team"
      className="relative overflow-hidden bg-[#080908] px-5 py-20 text-white sm:px-8 lg:px-16 lg:py-28"
    >
      {/* Background accent */}
      <div className="pointer-events-none absolute -right-40 top-20 h-80 w-80 rounded-full bg-[#c6ff00]/[0.04] blur-[100px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 max-w-2xl lg:mb-16"
        >
          <div className="mb-5 flex items-center gap-3">
            <span className="h-[3px] w-10 bg-[#c6ff00]" />
            <span className="text-xs font-medium uppercase tracking-[0.3em] text-gray-300">
              Our Team
            </span>
          </div>

          <h2 className="text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
            Meet the Minds
            <br />
            <span className="text-[#c6ff00]">Behind XORA.</span>
          </h2>

          <p className="mt-6 max-w-lg text-base leading-7 text-gray-400 sm:text-lg">
            We’re a small, focused team with a shared vision — to build
            intelligent solutions that help businesses automate, grow,
            and stay ahead.
          </p>
        </motion.div>

        {/* Team cards */}
        <div className="grid grid-cols-1 justify-items-center gap-7 sm:grid-cols-2 lg:grid-cols-2 lg:gap-8">
          {team.map((member, index) => (
            <motion.article
              key={member.name}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.5,
                delay: index * 0.12,
              }}
              whileHover={{
                y: -7,
                rotateY: index === 1 ? 1 : -1,
              }}
              className="group relative isolate aspect-[4/5] w-full max-w-[420px] overflow-hidden rounded-2xl border border-white/15 bg-[#141614] shadow-[7px_8px_0px_#20251b,0_24px_45px_-25px_rgba(198,255,0,0.18)] transition-[border-color,box-shadow] duration-300 hover:border-[#c6ff00]/60 hover:shadow-[7px_10px_0px_#303b18,0_28px_55px_-25px_rgba(198,255,0,0.25)]"
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Full-card image */}
              <Image
                src={member.image}
                alt={member.name}
                fill
                priority={index === 0}
                sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw"
                
className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"

              />

              {/* Gradient behind the text */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

              {/* Card number */}
              <div className="absolute right-5 top-5 flex items-center gap-2 text-sm font-medium tracking-widest text-[#c6ff00]">
                <span>0{index + 1}</span>
                <span className="h-px w-7 bg-[#c6ff00]" />
              </div>

              {/* Name and role over the image */}
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-5 sm:p-6">
                <div className="min-w-0">
                  <span className="mb-3 block h-[3px] w-9 bg-[#c6ff00] transition-all duration-300 group-hover:w-14" />

                  <h3 className="text-xl font-semibold tracking-tight sm:text-2xl">
                    {member.name}
                  </h3>

                  <p className="mt-2 text-xs font-semibold tracking-[0.12em] text-[#c6ff00] sm:text-sm">
                    {member.role}
                  </p>
                </div>

                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${member.name} LinkedIn profile`}
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/30 bg-black/40 text-white backdrop-blur-sm transition-all duration-300 hover:border-[#c6ff00] hover:bg-[#c6ff00] hover:text-black"
                >
                  <ArrowUpRight size={19} />
                </a>
              </div>

              {/* Subtle glass border */}
              <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/5 transition-colors duration-300 group-hover:ring-[#c6ff00]/20" />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
