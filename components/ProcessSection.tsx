
import React from "react";

const steps = [
  {
    number: "01",
    title: "Discover",
    description: "We learn about your business, goals, and challenges.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
        <circle cx="20" cy="20" r="12.5" />
        <path d="M29.5 29.5 41 41" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Design",
    description: "We plan the right solution, workflow, and architecture.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
        <path d="m29 7 12 12L18 42 5 44l2-13L29 7Z" />
        <path d="m24 12 12 12" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Build",
    description: "We develop, integrate, and test the solution.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
        <path d="m16 13-12 11 12 11M32 13l12 11-12 11M28 7 20 41" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Improve",
    description: "We monitor, refine, and provide ongoing support.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
        <path d="M20 4h8l1.5 5.5a15 15 0 0 1 4 2.3l5.4-1.5 4 7-4 4a15 15 0 0 1 0 5.4l4 4-4 7-5.4-1.5a15 15 0 0 1-4 2.3L28 44h-8l-1.5-5.5a15 15 0 0 1-4-2.3L9 37.7l-4-7 4-4a15 15 0 0 1 0-5.4l-4-4 4-7 5.5 1.5a15 15 0 0 1 4-2.3L20 4Z" />
        <circle cx="24" cy="24" r="7" />
      </svg>
    ),
  },
];

const styles = `
  .xora-process {
    --xp-lime: #b7f500;
    --xp-text: #f5f7f5;
    --xp-muted: #c0cbc9;

    position: relative;
    isolation: isolate;
    overflow: hidden;
    padding: 100px 5.2% 115px;
    background: #080a09;
    color: var(--xp-text);
  }

  .xora-process *,
  .xora-process *::before,
  .xora-process *::after {
    box-sizing: border-box;
  }

  .xp-container {
    position: relative;
    z-index: 1;
    width: 100%;
    max-width: 1500px;
    margin: 0 auto;
  }

  /* Heading */

  .xp-header {
    max-width: 850px;
    margin: 0 auto 78px;
    text-align: center;
  }

  .xp-eyebrow {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 17px;
    margin-bottom: 25px;
    color: #d9e1e5;
    font-size: 13px;
    font-weight: 500;
    letter-spacing: 5px;
  }

  .xp-eyebrow-line {
    width: 45px;
    height: 4px;
    flex-shrink: 0;
    background: var(--xp-lime);
    box-shadow: 0 0 12px rgba(183, 245, 0, 0.15);
  }

  .xp-heading {
    margin: 0;
    color: var(--xp-text);
    font-size: clamp(38px, 5vw, 76px);
    font-weight: 750;
    line-height: 1.1;
    letter-spacing: -3px;
  }

  .xp-heading span {
    display: block;
    color: var(--xp-lime);
  }

  .xp-subtitle {
    max-width: 650px;
    margin: 22px auto 0;
    color: var(--xp-muted);
    font-size: clamp(15px, 1.2vw, 18px);
    line-height: 1.8;
  }

  /* Staggered process journey */

  .xp-timeline {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 38px;
    align-items: start;
    padding: 0 4px 35px;
  }

  .xp-step {
    position: relative;
    min-width: 0;
  }

  /* Every second card sits lower */

  .xp-step:nth-child(2) {
    margin-top: 32px;
  }

  .xp-step:nth-child(3) {
    margin-top: 80px;
  }

  .xp-step:nth-child(4) {
    margin-top: 27px;
  }

  /* Raised icon above the surface */

  .xp-icon {
    position: relative;
    z-index: 3;
    display: grid;
    place-items: center;
    width: 82px;
    height: 76px;
    margin: 0 0 -26px 30px;

    border: 1px solid #515a4c;
    border-radius: 18px;
    background: linear-gradient(
      145deg,
      #272d26 0%,
      #171c17 58%,
      #0d110e 100%
    );

    box-shadow:
      inset 1px 1px 0 rgba(255,255,255,.13),
      inset -2px -2px 0 rgba(0,0,0,.55),
      1px 1px 0 #30382c,
      2px 3px 0 #22291f,
      4px 7px 0 #171d15,
      7px 12px 17px rgba(0,0,0,.42);

    transform: translateY(-15px);
    transition:
      transform 300ms ease,
      border-color 300ms ease,
      box-shadow 300ms ease;
  }

  .xp-icon svg {
    width: 38px;
    height: 38px;
    stroke: var(--xp-lime);
    stroke-width: 2;
    stroke-linecap: round;
    stroke-linejoin: round;
  }

  /* Main dimensional card */

  .xp-card {
    position: relative;
    isolation: isolate;
    min-height: 255px;
    padding: 46px 25px 27px;

    border: 1px solid #424a3e;
    border-radius: 22px;

    background:
      radial-gradient(
        ellipse at 100% 0%,
        rgba(183,245,0,.075),
        transparent 50%
      ),
      linear-gradient(
        145deg,
        #1a1f1a 0%,
        #111511 50%,
        #090c0a 100%
      );

    box-shadow:
      inset 1px 1px 0 rgba(255,255,255,.12),
      inset -1px -1px 0 rgba(0,0,0,.8),
      1px 1px 0 #30372e,
      2px 3px 0 #242b21,
      4px 6px 0 #191f17,
      7px 11px 0 #11160f,
      10px 17px 25px rgba(0,0,0,.42);

    transform: perspective(900px) rotateX(1deg);
    transition:
      transform 300ms ease,
      border-color 300ms ease,
      box-shadow 300ms ease;
  }

  .xp-card::before {
    content: "";
    position: absolute;
    inset: 0;
    z-index: -1;
    border-radius: inherit;
    pointer-events: none;

    background: linear-gradient(
      135deg,
      rgba(183,245,0,.10),
      rgba(255,255,255,.025) 22%,
      transparent 48%,
      transparent 80%,
      rgba(183,245,0,.035)
    );
  }

  /* Subtle lime edge beneath each card */

  .xp-card::after {
    content: "";
    position: absolute;
    right: 8px;
    bottom: -7px;
    left: 8px;
    height: 7px;
    z-index: -2;

    border-radius: 0 0 10px 10px;
    background: linear-gradient(
      90deg,
      #647c16,
      #252e1c 45%,
      #b7f500
    );
    opacity: .8;
    filter: blur(.3px);
  }

  .xp-number {
    display: flex;
    align-items: center;
    gap: 13px;
    margin-bottom: 12px;
    color: var(--xp-lime);
    font-size: 18px;
    font-weight: 600;
    letter-spacing: -.3px;
  }

  .xp-number-line {
    width: 34px;
    height: 1px;
    background: var(--xp-lime);
    opacity: .85;
  }

  .xp-card h3 {
    margin: 0 0 9px;
    color: var(--xp-text);
    font-size: clamp(23px, 2vw, 29px);
    font-weight: 700;
    line-height: 1.2;
    letter-spacing: -.8px;
  }

  .xp-card p {
    max-width: 260px;
    margin: 0;
    color: var(--xp-muted);
    font-size: 14px;
    line-height: 1.7;
  }

  /* Small arrow detail */

  .xp-card-bottom {
    display: flex;
    align-items: center;
    gap: 13px;
    margin-top: 21px;
    color: var(--xp-lime);
  }

  .xp-arrow {
    display: inline-block;
    font-size: 25px;
    line-height: 1;
    transition: transform 250ms ease;
  }

  .xp-arrow-line {
    width: 58px;
    height: 1px;
    background: linear-gradient(
      90deg,
      var(--xp-lime),
      rgba(183,245,0,.3)
    );
  }

  /* Connecting line and directional arrow */

  .xp-connector {
    position: absolute;
    top: 150px;
    right: -39px;
    z-index: 4;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 39px;
    height: 20px;
    pointer-events: none;
  }

  .xp-connector::before {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    top: 50%;
    height: 1.5px;
    background: var(--xp-lime);
    box-shadow: 0 0 7px rgba(183,245,0,.12);
  }

  .xp-connector::after {
    content: "";
    position: relative;
    z-index: 1;
    width: 10px;
    height: 10px;
    border-top: 2px solid var(--xp-lime);
    border-right: 2px solid var(--xp-lime);
    transform: rotate(45deg);
    background: #080a09;
  }

  /* Ambient lighting */

  .xp-glow {
    position: absolute;
    z-index: 0;
    width: 310px;
    height: 310px;
    border-radius: 50%;
    filter: blur(115px);
    opacity: .10;
    pointer-events: none;
  }

  .xp-glow-top {
    top: -190px;
    right: -100px;
    background: var(--xp-lime);
  }

  .xp-glow-bottom {
    bottom: -190px;
    left: -150px;
    background: #75b900;
  }

  /* Desktop hover */

  @media (hover: hover) and (pointer: fine) {
    .xp-step:hover .xp-card {
      transform: perspective(900px) rotateX(0deg) translateY(-7px);
      border-color: rgba(183,245,0,.52);

      box-shadow:
        inset 1px 1px 0 rgba(255,255,255,.15),
        inset -1px -1px 0 rgba(0,0,0,.8),
        1px 1px 0 #39432f,
        2px 3px 0 #2a3522,
        4px 6px 0 #20291a,
        7px 11px 0 #151d12,
        11px 22px 30px rgba(0,0,0,.5),
        0 0 18px rgba(183,245,0,.035);
    }

    .xp-step:hover .xp-icon {
      transform: translateY(-20px);
      border-color: rgba(183,245,0,.55);
    }

    .xp-step:hover .xp-arrow {
      transform: translateX(5px);
    }
  }

  /* Tablet */

  @media (max-width: 1050px) {
    .xora-process {
      padding: 85px 5% 95px;
    }

    .xp-header {
      margin-bottom: 55px;
    }

    .xp-timeline {
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 42px 30px;
      padding: 0 4px 20px;
    }

    .xp-step:nth-child(n) {
      margin-top: 0;
    }

    .xp-step:nth-child(even) {
      margin-top: 38px;
    }

    .xp-card {
      min-height: 245px;
    }

    .xp-connector {
      display: none;
    }
  }

  /* Mobile */

  @media (max-width: 600px) {
    .xora-process {
      padding: 70px 21px 80px;
    }

    .xp-header {
      margin-bottom: 48px;
    }

    .xp-eyebrow {
      gap: 12px;
      margin-bottom: 20px;
      font-size: 10px;
      letter-spacing: 3.5px;
    }

    .xp-eyebrow-line {
      width: 30px;
      height: 3px;
    }

    .xp-heading {
      font-size: clamp(36px, 10vw, 49px);
      letter-spacing: -1.8px;
    }

    .xp-subtitle {
      margin-top: 18px;
      font-size: 14px;
      line-height: 1.8;
    }

    .xp-timeline {
      grid-template-columns: minmax(0, 1fr);
      gap: 33px;
      padding: 0 5px 12px;
    }

    .xp-step:nth-child(n) {
      margin-top: 0;
    }

    .xp-icon {
      width: 67px;
      height: 64px;
      margin-left: 23px;
      margin-bottom: -22px;
      border-radius: 15px;
    }

    .xp-icon svg {
      width: 33px;
      height: 33px;
    }

    .xp-card {
      min-height: 0;
      padding: 40px 24px 25px;
      border-radius: 18px;
    }

    .xp-card h3 {
      font-size: 27px;
    }

    .xp-card p {
      max-width: 310px;
      font-size: 14px;
    }

    .xp-card-bottom {
      margin-top: 18px;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .xp-card,
    .xp-icon,
    .xp-arrow {
      transition: none;
    }
  }
`;

export default function ProcessSection() {
  return (
    <>
      <style>{styles}</style>

      <section className="xora-process" id="process">
        <div className="xp-glow xp-glow-top" aria-hidden="true" />
        <div className="xp-glow xp-glow-bottom" aria-hidden="true" />

        <div className="xp-container">
          <header className="xp-header">
            <div className="xp-eyebrow">
              <span className="xp-eyebrow-line" />
              <span>OUR PROCESS</span>
            </div>

            <h2 className="xp-heading">
              From First Idea to
              <span>Smarter Operations.</span>
            </h2>

            <p className="xp-subtitle">
              We follow a clear and proven process to turn your ideas
              into scalable solutions that drive real business results.
            </p>
          </header>

          <div className="xp-timeline">
            {steps.map((step, index) => (
              <article className="xp-step" key={step.number}>
                <div className="xp-icon">{step.icon}</div>

                <div className="xp-card">
                  <div className="xp-number">
                    <span>{step.number}</span>
                    <span className="xp-number-line" />
                  </div>

                  <h3>{step.title}</h3>
                  <p>{step.description}</p>

                  <div className="xp-card-bottom" aria-hidden="true">
                    <span className="xp-arrow">→</span>
                    <span className="xp-arrow-line" />
                  </div>
                </div>

                {index < steps.length - 1 && (
                  <span className="xp-connector" aria-hidden="true" />
                )}
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
