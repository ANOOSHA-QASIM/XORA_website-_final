"use client";
import { useEffect, useRef, useState } from "react";
import type { CSSProperties } from "react";
const services = [
  {
    number: "01",
    title: "Strategy",
    description:
      "We analyze your goals, find the right opportunities, and build a clear plan for success.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none">
        <path
          d="M11 34 7 21l8-11 12 3 6 8-8 4 5 9-19 0Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path
          d="m17 15 5 3m-8 8 10-1m-8 6h10"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Automation",
    description:
      "We turn manual processes into intelligent systems that save time and reduce costs.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none">
        <g
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="17" cy="17" r="7" />
          <circle cx="32" cy="29" r="8" />
          <path d="M17 6v4m0 14v4M6 17h4m14 0h4M9 9l3 3m10 10 3 3m0-16-3 3m-10 10-3 3M32 17v4m0 16v4M20 29h4m16 0h4M25 22l3 3m8 8 3 3m0-14-3 3m-8 8-3 3" />
        </g>
      </svg>
    ),
  },
  {
    number: "03",
    title: "Growth",
    description:
      "We help you scale faster with solutions that deliver real, measurable results.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none">
        <g
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M7 39h34" />
          <path d="M10 32 20 21l7 5 12-15" />
          <path d="M29 11h10v10" />
          <path d="M10 36h6v3h-6zM22 30h6v9h-6zM34 23h6v16h-6z" />
        </g>
      </svg>
    ),
  },
];

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    let raf = 0;

    const updateProgress = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const rect = section.getBoundingClientRect();
        const scrollDistance = section.offsetHeight - window.innerHeight;
        const progress =
          scrollDistance > 0
            ? Math.max(0, Math.min(1, -rect.top / scrollDistance))
            : 0;
        setScrollProgress(progress);
      });
    };

    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);
    updateProgress();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, []);

  return (
    <section ref={sectionRef} className="xora-about">
      <div className="about-container">
        <div className="about-glow about-glow-top" />
        <div className="about-glow about-glow-bottom" />
        {/* LEFT CONTENT */}
        <div className="about-content">
          <div className="about-eyebrow">
            <span className="eyebrow-line" />
            <span>ABOUT XORA</span>
          </div>

          <h2 className="about-heading">
            We Turn Complex
            <br />
            Work Into
            <br />
            <span>Simple Systems.</span>
          </h2>

          <p className="about-description">
            XORA is an AI automation and software development company
            helping businesses streamline operations, boost productivity,
            and achieve sustainable growth with intelligent,
            custom-built solutions.
          </p>

          <a href="/about" className="about-link">
            <span>Learn More</span>
            <svg viewBox="0 0 24 24" fill="none">
              <path
                d="M4 12h15m-6-7 7 7-7 7"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>

        {/* RIGHT 3D CARDS */}
        <div className="about-visual">
          {services.map((service, index) => {
            // Card 1 starts visible. Card 2 slides up over it, then card 3
            // slides up over card 2. The final card remains in place until
            // the pinned section finishes.
            const timeline = scrollProgress * (services.length - 1);
            const clamp = (value: number) => Math.max(0, Math.min(1, value));
            const secondEnter = clamp(timeline);
            const thirdEnter = clamp(timeline - 1);

            // Keep the section pinned while each new card rises from below.
            // Previously revealed cards move up slightly and remain visible
            // as a neat stack. After card 3 lands, all cards stay in place.
            const y =
              index === 0
                ? -24 * secondEnter
                : index === 1
                  ? 560 * (1 - secondEnter) - 24 * thirdEnter
                  : 560 * (1 - thirdEnter);
            const opacity =
              index === 0
                ? 1
                : index === 1
                  ? secondEnter
                  : thirdEnter;

            const cardStyle = {
              "--card-y": `${y}px`,
              "--card-opacity": opacity,
              "--card-z": index + 1,
            } as CSSProperties;
            return (
              <article
                key={service.number}
                className={`about-card about-card-${index + 1}`}
                style={cardStyle}
              >
                <div className="card-top">
                  <span className="card-number">{service.number}</span>
                  <span className="card-number-line" />
                </div>

                <div className="card-body">
                  <div className="card-icon">{service.icon}</div>
                  <div className="card-copy">
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        .xora-about {
          position: relative;
          isolation: isolate;
          background: transparent;
          color: #f5f6f4;
          height: 300svh;
          min-height: 300vh;
          padding: 0 6%;
          margin: 0;
          overflow: visible;
        }

        .about-glow {
          position: absolute;
          pointer-events: none;
          z-index: -1;
          border-radius: 50%;
          filter: blur(100px);
        }

        .about-glow-top {
          width: 280px;
          height: 230px;
          background: rgba(183, 245, 0, 0.055);
          top: -150px;
          left: -90px;
        }

        .about-glow-bottom {
          width: 370px;
          height: 280px;
          background: rgba(183, 245, 0, 0.12);
          bottom: -220px;
          right: -110px;
        }

        .about-container {
          position: sticky;
          top: 0;
          width: 100%;
          max-width: 1400px;
          height: 100svh;
          min-height: 0;
          background: #080a08;
          isolation: isolate;
          overflow: hidden;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 0.92fr 1.08fr;
          align-items: center;
          gap: 45px;
        }

        .about-content {
          position: relative;
          z-index: 2;
          max-width: 600px;
        }

        .about-eyebrow {
          display: flex;
          align-items: center;
          gap: 18px;
          margin-bottom: 23px;
          color: #d8ddd4;
          font-size: 13px;
          letter-spacing: 5px;
          font-weight: 500;
        }

        .eyebrow-line {
          display: block;
          width: 52px;
          height: 5px;
          background: #b7f500;
          box-shadow: 0 0 12px rgba(183, 245, 0, 0.25);
        }

        .about-heading {
          margin: 0;
          font-size: clamp(38px, 4.55vw, 70px);
          line-height: 1.12;
          letter-spacing: -2.5px;
          font-weight: 750;
        }

        .about-heading span {
          color: #b7f500;
          text-shadow: 0 0 28px rgba(183, 245, 0, 0.1);
        }

        .about-description {
          max-width: 500px;
          margin: 35px 0 36px;
          color: #c6ccc6;
          font-size: 17px;
          line-height: 1.85;
          font-weight: 400;
        }

        .about-link {
          display: inline-flex;
          align-items: center;
          gap: 20px;
          position: relative;
          padding-bottom: 17px;
          color: #b7f500;
          text-decoration: none;
          font-size: 17px;
          font-weight: 600;
          transition: gap 0.25s ease;
        }

        .about-link::after {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          width: 76px;
          height: 1px;
          background: #b7f500;
          transition: width 0.25s ease;
        }

        .about-link:hover {
          gap: 28px;
        }

        .about-link:hover::after {
          width: 100%;
        }

        .about-link svg {
          width: 25px;
          height: 25px;
        }

        .about-visual {
          position: relative;
          width: 100%;
          max-width: 680px;
          height: 100%;
          min-height: 0;
          margin: 0 auto;
          perspective: 1200px;
          overflow: visible;
        }

        .about-card {
          position: absolute;
          top: 50%;
          left: 50%;
          right: auto;
          width: 80%;
          min-height: 235px;
          padding: 25px 35px 30px;
          border: 1px solid rgba(190, 204, 190, 0.38);
          border-radius: 22px;
          background:
            radial-gradient(
              ellipse at 95% 95%,
              rgba(183, 245, 0, 0.075),
              transparent 48%
            ),
            linear-gradient(145deg, #151a16 0%, #0c100e 75%);
          transform: translate(-50%, calc(-50% + var(--card-y, 0px)));
          transform-style: preserve-3d;
          opacity: var(--card-opacity, 1);
          z-index: var(--card-z, 1);
          box-shadow:
            inset 0 1px 0 rgba(255, 255, 255, 0.07),
            0 8px 0 #20271c,
            0 12px 0 #141a12,
            0 24px 35px rgba(0, 0, 0, 0.55),
            8px 0 20px rgba(183, 245, 0, 0.07);
          will-change: transform, opacity;
          transition: border-color 0.4s ease, box-shadow 0.4s ease;
        }

        .about-card-1,
        .about-card-2,
        .about-card-3 {
          top: 50%;
          left: 50%;
          right: auto;
        }

        .about-card::before {
          content: "";
          position: absolute;
          top: 14px;
          right: -1px;
          bottom: 14px;
          width: 2px;
          border-radius: 0 10px 10px 0;
          background: linear-gradient(
            to bottom,
            rgba(183, 245, 0, 0.95),
            rgba(183, 245, 0, 0.12)
          );
          box-shadow: 5px 0 14px rgba(183, 245, 0, 0.18);
          pointer-events: none;
        }

        .card-top {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 15px;
        }

        .card-number {
          color: #b7f500;
          font-size: 16px;
          font-weight: 500;
        }

        .card-number-line {
          width: 58px;
          height: 1px;
          background: #b7f500;
          opacity: 0.75;
        }

        .card-body {
          display: flex;
          align-items: flex-start;
          gap: 20px;
        }

        .card-icon {
          flex: 0 0 43px;
          width: 43px;
          height: 43px;
          color: #b7f500;
        }

        .card-icon svg {
          width: 100%;
          height: 100%;
        }

        .card-copy h3 {
          margin: 0 0 8px;
          color: #f5f6f4;
          font-size: clamp(20px, 2vw, 28px);
          line-height: 1.2;
          font-weight: 700;
        }

        .card-copy p {
          max-width: 300px;
          margin: 0;
          color: #c5cdc5;
          font-size: 14px;
          line-height: 1.65;
        }

        @media (hover: hover) {
          .about-card:hover {
            border-color: rgba(183, 245, 0, 0.65);
            transform: translate(-50%, calc(-50% + var(--card-y, 0px)));
            box-shadow:
              inset 0 1px 0 rgba(255, 255, 255, 0.09),
              0 8px 0 #26301b,
              0 12px 0 #171d12,
              0 30px 45px rgba(0, 0, 0, 0.6),
              8px 0 26px rgba(183, 245, 0, 0.12);
          }
        }

        @media (max-width: 1050px) and (min-width: 701px) {
          .xora-about {
            padding: 0 5%;
          }

          .about-container {
            grid-template-columns: 1fr 1fr;
            gap: 20px;
          }

          .about-heading {
            font-size: clamp(36px, 4.5vw, 55px);
            letter-spacing: -1.8px;
          }

          .about-visual {
            height: 490px;
          }

          .about-card {
            width: 88%;
            min-height: 205px;
            padding: 22px 24px;
          }

          .card-body {
            gap: 13px;
          }

          .card-icon {
            flex-basis: 34px;
            width: 34px;
            height: 34px;
          }
        }

        @media (max-width: 700px) {
          .xora-about {
            height: 300svh;
            min-height: 300vh;
            padding: 0 22px;
            overflow: visible;
          }

          .about-container {
            position: sticky;
            top: 0;
            height: 100svh;
            min-height: 0;
            grid-template-columns: 1fr;
            grid-template-rows: auto 1fr;
            align-content: center;
            gap: 12px;
          }

          .about-content {
            max-width: 100%;
          }

          .about-eyebrow {
            gap: 13px;
            font-size: 11px;
            letter-spacing: 3.5px;
            margin-bottom: 20px;
          }

          .eyebrow-line {
            width: 38px;
            height: 4px;
          }

          .about-heading {
            font-size: clamp(37px, 9vw, 56px);
            line-height: 1.12;
            letter-spacing: -1.8px;
          }

          .about-description {
            margin: 25px 0 28px;
            font-size: 15px;
            line-height: 1.8;
          }

          .about-visual {
            width: 100%;
            max-width: 520px;
            height: 100%;
            min-height: 0;
            margin: 0 auto;
          }

          .about-card {
            top: 50%;
            left: 50%;
            right: auto;
            position: absolute;
            width: 94%;
            min-height: 175px;
            margin: 0;
            padding: 19px 20px 22px;
            border-radius: 16px;
            transform: translate(-50%, calc(-50% + var(--card-y, 0px)));
            opacity: var(--card-opacity, 1);
            z-index: var(--card-z, 1);
            box-shadow:
              inset 0 1px 0 rgba(255, 255, 255, 0.07),
              0 5px 0 #20271c,
              0 8px 0 #141a12,
              0 17px 24px rgba(0, 0, 0, 0.5);
          }

          .card-top {
            margin-bottom: 10px;
          }

          .card-number {
            font-size: 13px;
          }

          .card-number-line {
            width: 42px;
          }

          .card-body {
            gap: 13px;
          }

          .card-icon {
            flex-basis: 29px;
            width: 29px;
            height: 29px;
          }

          .card-copy h3 {
            font-size: 20px;
            margin-bottom: 5px;
          }

          .card-copy p {
            font-size: 12px;
            line-height: 1.5;
          }
        }

        @media (max-width: 380px) {
          .about-heading {
            font-size: 35px;
          }

          .about-visual {
            height: 390px;
          }

          .about-card {
            width: 96%;
            padding: 17px;
          }

          .card-copy p {
            font-size: 11px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .about-card,
          .about-link,
          .about-link::after {
            transition: none;
          }
        }
      `}</style>
    </section>
  );
}
