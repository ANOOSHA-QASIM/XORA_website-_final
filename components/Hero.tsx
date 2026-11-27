
"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowUpRight,
  ArrowRight,
  Bot,
  MessageSquare,
  Workflow,
  Settings,
  Clock3,
  CircleX,
  Database,
  TrendingUp,
  Network,
  Check,
  ChartNoAxesColumnIncreasing,
} from "lucide-react";

const stats = [
  { value: "9+", label: "Automation Services" },
  { value: "AI", label: "Built for Business" },
  { value: "24/7", label: "Smarter Workflows" },
];

const ANIMATION_DELAY = 2.5;
const ANIMATION_SPEED = 1.5;

const reveal = (delay: number, reduceMotion: boolean) => ({
  initial: reduceMotion ? false : { opacity: 0, y: 18, scale: 0.94 },
  animate: { opacity: 1, y: 0, scale: 1 },
  transition: {
    duration: 0.8,
    delay: reduceMotion
      ? 0
      : ANIMATION_DELAY + delay * ANIMATION_SPEED,
    ease: "easeOut" as const,
  },
});

function ProblemSolverGraphic({
  reduceMotion,
}: {
  reduceMotion: boolean;
}) {
  const lineTransition = (delay: number) => ({
    duration: 1.4,
    delay: reduceMotion
      ? 0
      : ANIMATION_DELAY + delay * ANIMATION_SPEED,
    ease: "easeInOut" as const,
  });

  return (
    <div className="relative mx-auto aspect-[1.4/1] w-full select-none">
      {/* Connecting Lines */}
      <svg
        viewBox="0 0 900 620"
        preserveAspectRatio="none"
        className="pointer-events-none absolute inset-0 z-0 h-full w-full overflow-visible"
        aria-hidden="true"
      >
        <defs>
          <filter id="xora-line-glow">
            <feGaussianBlur stdDeviation="5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {[
          "M 190 300 L 250 300",
          "M 420 300 L 485 300",
          "M 565 185 L 565 115",
          "M 485 115 L 385 115 L 385 195",
          "M 640 115 L 760 115 L 760 220",
          "M 690 300 L 790 300",
          "M 385 195 L 385 150",
          "M 760 220 L 850 220",
        ].map((path, index) => (
          <motion.path
            key={path}
            d={path}
            fill="none"
            stroke="#baff00"
            strokeWidth="3"
            strokeLinecap="round"
            filter="url(#xora-line-glow)"
            initial={
              reduceMotion
                ? false
                : { pathLength: 0, opacity: 0 }
            }
            animate={{ pathLength: 1, opacity: 0.9 }}
            transition={lineTransition(1.7 + index * 0.18)}
          />
        ))}

        {/* Connection Points */}
        {[
          [250, 300],
          [485, 300],
          [565, 185],
          [385, 195],
          [760, 220],
          [790, 300],
        ].map(([cx, cy], index) => (
          <motion.circle
            key={index}
            cx={cx}
            cy={cy}
            r="5"
            fill="#c6ff00"
            filter="url(#xora-line-glow)"
            initial={reduceMotion ? false : { opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              delay: reduceMotion
                ? 0
                : ANIMATION_DELAY +
                  (2 + index * 0.15) * ANIMATION_SPEED,
              duration: 0.4,
            }}
          />
        ))}
      </svg>

      {/* Business Challenges */}
      <motion.div
        {...reveal(0.25, reduceMotion)}
        className="absolute left-[1%] top-[40%] z-10 w-[23%] rounded-[16px] border border-white/20 bg-[#111315] p-3 shadow-[0_10px_35px_rgba(0,0,0,0.6)] sm:p-4"
      >
        <h3 className="mb-3 text-[clamp(10px,1.3vw,17px)] font-bold leading-tight text-white">
          Business
          <span className="block text-[#c6ff00]">Challenges</span>
        </h3>

        <div className="space-y-1.5 text-[clamp(8px,0.85vw,12px)] text-white/90">
          <div className="flex items-center gap-2 rounded-lg border border-white/10 bg-black/40 p-2">
            <Clock3 className="h-4 w-4 shrink-0 text-white/80" />
            Manual Work
          </div>

          <div className="flex items-center gap-2 rounded-lg border border-white/10 bg-black/40 p-2">
            <CircleX className="h-4 w-4 shrink-0 text-white/80" />
            Human Errors
          </div>

          <div className="flex items-center gap-2 rounded-lg border border-white/10 bg-black/40 p-2">
            <Database className="h-4 w-4 shrink-0 text-white/80" />
            High Costs
          </div>

          <div className="flex items-center gap-2 rounded-lg border border-white/10 bg-black/40 p-2">
            <TrendingUp className="h-4 w-4 shrink-0 text-white/80" />
            Low Productivity
          </div>
        </div>
      </motion.div>

      {/* Arrow */}
      <motion.div
        {...reveal(0.8, reduceMotion)}
        className="absolute left-[23%] top-[57%] z-20 text-[#c6ff00]"
      >
        <ArrowRight
          size={35}
          strokeWidth={3}
          className="drop-shadow-[0_0_12px_#c6ff00]"
        />
      </motion.div>

      {/* Automation Solution */}
      <motion.div
        {...reveal(1.35, reduceMotion)}
        className="absolute left-[25%] top-[43%] z-20 w-[25%] rounded-[17px] border border-white/20 bg-[#111315] p-3 shadow-[0_10px_35px_rgba(0,0,0,0.6)] sm:p-4"
      >
        <h3 className="mb-3 text-[clamp(10px,1.3vw,17px)] font-bold leading-tight text-white">
          Automation
          <span className="block text-[#c6ff00]">Solution</span>
        </h3>

        <div className="space-y-2 text-[clamp(8px,0.85vw,12px)] text-white">
          {[
            "AI Agents",
            "Smart Workflows",
            "Seamless Integration",
            "Scalable Growth",
          ].map((item) => (
            <div key={item} className="flex items-center gap-2">
              <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#c6ff00] text-black">
                <Check size={11} strokeWidth={3} />
              </span>
              {item}
            </div>
          ))}
        </div>
      </motion.div>

      {/* Central XORA Logo */}
      <motion.div
        {...reveal(2.4, reduceMotion)}
        className="absolute left-[52%] top-[3%] z-30 flex aspect-square w-[24%] items-center justify-center rounded-[25%] border border-[#c6ff00]/60 bg-gradient-to-br from-[#292c2e] to-[#090a0b] shadow-[0_0_30px_rgba(198,255,0,0.22),inset_0_0_20px_rgba(198,255,0,0.08)]"
      >
        <span className="text-[clamp(35px,6vw,76px)] font-black tracking-[-0.1em] text-[#c6ff00]">
          X
        </span>
      </motion.div>

      {/* Gear Icon */}
      <motion.div
        {...reveal(2.8, reduceMotion)}
        className="absolute left-[34%] top-[17%] z-30 flex aspect-square w-[15%] items-center justify-center rounded-[25%] border border-white/20 bg-[#17191b] shadow-[0_0_18px_rgba(198,255,0,0.18)]"
      >
        <Settings className="h-[48%] w-[48%] text-[#c6ff00]" />
      </motion.div>

      {/* AI Bot Icon */}
      <motion.div
        {...reveal(3.2, reduceMotion)}
        className="absolute left-[80%] top-[17%] z-30 flex aspect-square w-[15%] items-center justify-center rounded-[25%] border border-white/20 bg-[#17191b] shadow-[0_0_18px_rgba(198,255,0,0.18)]"
      >
        <Bot className="h-[50%] w-[50%] text-white" />
      </motion.div>

      {/* Workflow Icon */}
      <motion.div
        {...reveal(3.6, reduceMotion)}
        className="absolute left-[91%] top-[37%] z-30 flex aspect-square w-[10%] items-center justify-center rounded-[25%] border border-white/20 bg-[#17191b] shadow-[0_0_18px_rgba(198,255,0,0.18)]"
      >
        <Network className="h-[52%] w-[52%] text-[#c6ff00]" />
      </motion.div>

      {/* Laptop Screen */}
      <motion.div
        {...reveal(3.1, reduceMotion)}
        className="absolute left-[38%] top-[39%] z-30 h-[35%] w-[43%] -skew-x-[8deg] rounded-t-[20px] border-[3px] border-[#777d80] bg-gradient-to-br from-[#171b1e] via-[#080a0c] to-[#171d1d] shadow-[0_0_25px_rgba(0,0,0,0.8),inset_0_0_25px_rgba(198,255,0,0.05)]"
      >
        <div className="flex h-full flex-col items-center justify-center">
          <div className="flex items-center text-[clamp(22px,4vw,55px)] font-bold tracking-[-0.08em] text-white">
            <span className="text-[#c6ff00]">X</span>ORA
          </div>

          <p className="mt-1 text-[clamp(8px,1.1vw,14px)] italic text-white">
            Automate. Grow.{" "}
            <span className="text-[#c6ff00]">Succeed.</span>
          </p>
        </div>
      </motion.div>

      {/* Laptop Keyboard and Base */}
      <motion.div
        {...reveal(3.5, reduceMotion)}
        className="absolute left-[33%] top-[73%] z-40 h-[12%] w-[53%] -skew-x-[12deg] rounded-b-[22px] border border-white/30 bg-gradient-to-b from-[#73797d] via-[#252a2d] to-[#090b0d] shadow-[0_12px_25px_rgba(0,0,0,0.8)]"
      >
        <div className="mx-auto mt-2 h-[35%] w-[70%] rounded-md border border-white/20 bg-[repeating-linear-gradient(90deg,#17191b_0px,#17191b_8px,#35393c_9px,#17191b_10px)] opacity-90" />

        <div className="mx-auto mt-1 h-[18%] w-[24%] rounded-b-lg border border-white/20 bg-[#858b8d]/60" />
      </motion.div>

      {/* Laptop Neon Platform */}
      <motion.div
        {...reveal(3.9, reduceMotion)}
        className="absolute left-[29%] top-[84%] z-20 h-[7%] w-[59%] -skew-x-[15deg] rounded-[50%] border-2 border-[#c6ff00] bg-[#181d10] shadow-[0_0_22px_rgba(198,255,0,0.55)]"
      />

      {/* Real Results */}
      <motion.div
        {...reveal(4.4, reduceMotion)}
        className="absolute left-[77%] top-[56%] z-40 w-[23%] rounded-[16px] border border-white/20 bg-[#111315] p-3 shadow-[0_10px_35px_rgba(0,0,0,0.65)] sm:p-4"
      >
        <h3 className="mb-3 text-[clamp(10px,1.3vw,17px)] font-bold text-white">
          Real <span className="text-[#c6ff00]">Results</span>
        </h3>

        <div className="mb-3 flex items-end gap-1">
          {[25, 38, 52, 70, 90].map((height, index) => (
            <motion.div
              key={index}
              initial={
                reduceMotion ? false : { height: 0, opacity: 0 }
              }
              animate={{ height: `${height}%`, opacity: 1 }}
              transition={{
                duration: 0.8,
                delay: reduceMotion
                  ? 0
                  : ANIMATION_DELAY +
                    (4.8 + index * 0.2) * ANIMATION_SPEED,
              }}
              className={`w-[15%] rounded-t-sm ${
                index > 2 ? "bg-[#c6ff00]" : "bg-[#666d70]"
              }`}
              style={{ minHeight: 8 }}
            />
          ))}

          <TrendingUp className="h-7 w-7 text-[#c6ff00]" />
        </div>

        <div className="space-y-2 text-[clamp(8px,0.85vw,12px)] text-white">
          {["More Sales", "Save Time", "Grow Faster"].map((item) => (
            <div key={item} className="flex items-center gap-2">
              <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#c6ff00] text-black">
                <Check size={11} strokeWidth={3} />
              </span>
              {item}
            </div>
          ))}
        </div>
      </motion.div>

      {/* Analytics Icon */}
      <motion.div
        {...reveal(5.1, reduceMotion)}
        className="absolute bottom-[1%] left-[19%] z-40 flex aspect-square w-[14%] items-center justify-center rounded-[25%] border border-white/20 bg-[#17191b] shadow-[0_0_20px_rgba(198,255,0,0.15)]"
      >
        <ChartNoAxesColumnIncreasing className="h-[55%] w-[55%] text-[#c6ff00]" />
      </motion.div>

      {/* Growth Badge */}
      <motion.div
        {...reveal(5.5, reduceMotion)}
        className="absolute bottom-[-1%] right-[0%] z-50 flex items-center gap-2 rounded-[16px] border border-white/20 bg-[#151719] px-3 py-2 shadow-[0_8px_25px_rgba(0,0,0,0.7)]"
      >
        <TrendingUp className="h-7 w-7 text-[#c6ff00]" />

        <div>
          <p className="text-[clamp(13px,2vw,24px)] font-bold text-white">
            +300%
          </p>
          <p className="text-[clamp(9px,1vw,13px)] text-white/80">
            Growth
          </p>
        </div>
      </motion.div>
    </div>
  );
}

export default function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="home"
      className="xora-office-hero relative isolate min-h-screen overflow-hidden"
    >
      {/* Neon Lighting */}
      <motion.div
        aria-hidden="true"
        className="xora-office-light absolute"
        animate={
          reduceMotion
            ? undefined
            : { opacity: [0.35, 0.65, 0.35], scale: [1, 1.08, 1] }
        }
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Right-side Animated Graphic */}
      <div className="pointer-events-none absolute right-[5%] top-[44%] z-0 hidden w-[40%] max-w-[580px] -translate-y-1/2 xl:block">
        <ProblemSolverGraphic reduceMotion={!!reduceMotion} />
      </div>

      {/* Main Content */}
      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-[1440px] flex-col justify-center px-6 pb-12 pt-32 sm:px-10 lg:px-16">
        <div className="max-w-[650px]">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="xora-office-badge mb-7 inline-flex items-center gap-3 rounded-full px-4 py-2"
          >
            <span className="xora-office-dot" />
            <span className="text-xs font-medium uppercase tracking-[0.2em]">
              XORA · AI Automation
            </span>
          </motion.div>

          <motion.h1
            initial={reduceMotion ? false : { opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl font-semibold leading-[0.98] tracking-[-0.055em] sm:text-6xl lg:text-7xl xl:text-[84px]"
          >
            Let Your
            <br />
            Business
            <br />
            <span className="xora-office-accent">Work For You.</span>
          </motion.h1>

          <motion.p
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="mt-7 max-w-[520px] text-base leading-7 text-white/70 sm:text-lg sm:leading-8"
          >
            We build intelligent automation systems that streamline
            operations, boost productivity, and drive real business growth.
          </motion.p>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-8 flex flex-col gap-4 sm:flex-row"
          >
            <a
              href="#services"
              className="xora-office-primary inline-flex min-h-14 items-center justify-center gap-4 rounded-xl px-7 font-semibold transition duration-300"
            >
              Explore Services
              <ArrowUpRight size={20} />
            </a>

            <a
              href="#work"
              className="xora-office-secondary inline-flex min-h-14 items-center justify-center gap-3 rounded-xl border px-7 font-medium transition duration-300"
            >
              View Our Work
              <ArrowUpRight size={18} />
            </a>
          </motion.div>

          {/* Service Highlights */}
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.55 }}
            className="mt-10 flex flex-wrap gap-3"
          >
            {[
              { icon: Bot, label: "AI Agents" },
              { icon: Workflow, label: "Automation" },
              { icon: MessageSquare, label: "AI Chatbots" },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="xora-office-chip">
                <Icon size={16} />
                <span>{label}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.65 }}
          className="xora-office-stats mt-16 grid max-w-[680px] grid-cols-3 gap-4 border-t pt-6 sm:mt-20 sm:gap-8"
        >
          {stats.map((stat) => (
            <div key={stat.label}>
              <div className="xora-office-accent text-2xl font-semibold sm:text-3xl">
                {stat.value}
              </div>

              <p className="mt-2 text-xs leading-5 text-white/55 sm:text-sm">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Subtle Floor Glow */}
      <div
        aria-hidden="true"
        className="xora-office-floor pointer-events-none absolute inset-x-0 bottom-0"
      />
    </section>
  );
}
