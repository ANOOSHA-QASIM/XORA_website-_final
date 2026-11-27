
"use client";

import { motion } from "framer-motion";
import {
  Workflow,
  ShoppingCart,
  AudioLines,
  Users,
  Globe,
  Blocks,
  GitBranch,
  Target,
  ArrowUpRight,
  Check,
} from "lucide-react";

const services = [
  {
    number: "01",
    name: "AI Automation",
    icon: Workflow,
    description: "Automate repetitive business tasks with intelligent systems that save time and improve efficiency.",
    features: ["Business process automation", "AI-powered workflows", "Smart task execution"],
  },
  {
    number: "02",
    name: "E-commerce Automation",
    icon: ShoppingCart,
    description: "Streamline your online store operations with automated processes for orders, products, and customer interactions.",
    features: ["Order process automation", "Product workflow integration", "Customer follow-ups"],
  },
  {
    number: "03",
    name: "AI Chatbots & Voice Agents",
    icon: AudioLines,
    description: "Build intelligent chat and voice agents that handle customer enquiries, answer questions, and support your business.",
    features: ["AI customer support", "Voice calling agents", "Chatbot integrations"],
  },
  {
    number: "04",
    name: "CRM & Lead Management",
    icon: Users,
    description: "Organize customer information, manage leads, and automate follow-ups from one connected workflow.",
    features: ["Lead tracking", "CRM integrations", "Automated follow-ups"],
  },
  {
    number: "05",
    name: "Website Development",
    icon: Globe,
    description: "Create modern, responsive websites that communicate your brand and deliver a smooth user experience.",
    features: ["Business websites", "Responsive interfaces", "Modern web experiences"],
  },
  {
    number: "06",
    name: "Custom Software & SaaS",
    icon: Blocks,
    description: "Turn your ideas into custom software and SaaS platforms designed around your business requirements.",
    features: ["Custom software solutions", "SaaS platform development", "API integrations"],
  },
  {
    number: "07",
    name: "Workflow Solutions",
    icon: GitBranch,
    description: "Connect your business tools and create coordinated workflows that reduce manual work.",
    features: ["Cross-platform integrations", "Workflow orchestration", "Automated task routing"],
  },
  {
    number: "08",
    name: "Lead Generation Systems",
    icon: Target,
    description: "Build systems that discover potential customers, organize prospects, and support consistent lead follow-up.",
    features: ["Lead discovery", "Lead qualification", "Follow-up automation"],
  },
];

export default function Services() {
  return (
    <>
      <section className="xora-services" id="services">
        <div className="services-glow glow-left" />
        <div className="services-glow glow-right" />

        <div className="services-container">
          <motion.header
            className="services-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div>
              <span className="services-eyebrow">
                <span /> OUR SERVICES
              </span>

              <h2>
                Smart Solutions for
                <br />
                <span>Real Business.</span>
              </h2>

              <p>
                From intelligent automation to custom digital experiences,
                <br className="desktop-break" />
                we build practical solutions that help businesses work smarter,
                save time and grow faster.
              </p>
            </div>

            <a href="#contact" className="services-cta">
              Explore All Services <ArrowUpRight size={17} />
            </a>
          </motion.header>

          <div className="services-grid">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <motion.article
                  key={service.number}
                  className="service-card"
                  tabIndex={0}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.45, delay: (index % 4) * 0.05 }}
                >
                  <div className="service-card-inner">
                    {/* FRONT: large service name + small side icon */}
                    <div className="service-face service-front">
                      <span className="service-number">{service.number}</span>

                      <div className="front-content">
                        <h3>{service.name}</h3>
                        <div className="service-icon">
                          <Icon size={22} strokeWidth={1.5} />
                        </div>
                      </div>

                      <span className="front-hint">
                        EXPLORE SERVICE <ArrowUpRight size={14} />
                      </span>

                      <span className="card-watermark">{service.number}</span>
                    </div>

                    {/* BACK: description + features */}
                    <div className="service-face service-back">
                      <div className="back-label">
                        <Icon size={16} />
                        <span>WHAT WE CAN BUILD</span>
                      </div>

                      <h3>{service.name}</h3>

                      <p className="service-description">
                        {service.description}
                      </p>

                      <ul className="service-features">
                        {service.features.map((feature) => (
                          <li key={feature}>
                            <Check size={13} />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>

                      <a href="#contact" className="service-link">
                        Explore Service <ArrowUpRight size={15} />
                      </a>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>

          <footer className="services-footer">
            <div>
              <span className="footer-line" />
              <span>08 SERVICES</span>
            </div>

            <span className="footer-tagline">
              AUTOMATE <i>/</i> BUILD <i>/</i> GROW
            </span>
          </footer>
        </div>
      </section>

      <style jsx global>{`
        .xora-services {
          --lime: #c5f500;
          --page: var(--xora-page, #080b09);
          --surface: var(--xora-surface, #111612);
          --text: var(--xora-text, #f4f7f3);
          --muted: var(--xora-text-muted, #a5b1ac);
          --border: rgba(225, 240, 220, 0.25);

          position: relative;
          isolation: isolate;
          overflow: hidden;
          padding: 75px 6% 35px;
          background:
            radial-gradient(ellipse at 0% 5%, rgba(197,245,0,.10), transparent 28%),
            var(--page);
          color: var(--text);
        }

        .services-container {
          position: relative;
          z-index: 1;
          width: 100%;
          max-width: 1320px;
          margin: 0 auto;
        }

        .services-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 25px;
          margin-bottom: 35px;
        }

        .services-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 18px;
          color: var(--text);
          font-size: 10px;
          font-weight: 650;
          letter-spacing: 2px;
        }

        .services-eyebrow span,
        .footer-line {
          width: 30px;
          height: 2px;
          background: var(--lime);
        }

        .services-header h2 {
          margin: 0;
          font-size: clamp(38px, 4.8vw, 62px);
          font-weight: 650;
          line-height: 1.04;
          letter-spacing: -2.5px;
        }

        .services-header h2 span {
          color: var(--lime);
        }

        .services-header p {
          margin: 15px 0 0;
          color: var(--muted);
          font-size: 14px;
          line-height: 1.65;
        }

        .services-cta {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 18px;
          flex-shrink: 0;
          padding: 11px 17px;
          border: 1px solid var(--lime);
          border-radius: 30px;
          color: var(--text);
          font-size: 12px;
          text-decoration: none;
          transition: background .25s, color .25s;
        }

        .services-cta svg {
          color: var(--lime);
        }

        .services-cta:hover {
          background: var(--lime);
          color: #080b09;
        }

        .services-cta:hover svg {
          color: #080b09;
        }

        /* CARD GRID */
        .services-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 24px 27px;
          perspective: 1400px;
        }

        .service-card {
          position: relative;
          height: 285px;
          min-width: 0;
          outline: none;
          perspective: 1200px;
        }

        /* Raised 3D side edges */
        .service-card::before,
        .service-card::after {
          position: absolute;
          z-index: -1;
          top: 5px;
          bottom: -2px;
          width: 10px;
          border: 1px solid rgba(197,245,0,.7);
          border-right: 0;
          border-radius: 13px 0 0 13px;
          background: linear-gradient(90deg, rgba(197,245,0,.22), transparent);
          box-shadow: -3px 0 12px rgba(197,245,0,.16);
          content: "";
        }

        .service-card::before {
          left: -5px;
        }

        .service-card::after {
          left: 1px;
          opacity: .55;
        }

        .service-card-inner {
          position: relative;
          width: 100%;
          height: 100%;
          transform-style: preserve-3d;
          transition: transform 750ms cubic-bezier(.2,.72,.18,1);
        }

        .service-card:hover .service-card-inner,
        .service-card:focus .service-card-inner,
        .service-card:focus-within .service-card-inner {
          transform: rotateY(180deg);
        }

        .service-face {
          position: absolute;
          inset: 0;
          display: flex;
          flex-direction: column;
          overflow: hidden;
          padding: 20px;
          border: 1px solid var(--border);
          border-radius: 13px;
          background:
            linear-gradient(135deg, rgba(255,255,255,.08), transparent 35%),
            radial-gradient(ellipse at 100% 100%, rgba(197,245,0,.13), transparent 55%),
            linear-gradient(145deg, #171d18, #0b100d 70%);
          box-shadow:
            inset 1px 1px 0 rgba(255,255,255,.13),
            inset -1px -1px 0 rgba(197,245,0,.16),
            0 16px 28px rgba(0,0,0,.3);
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
        }

        .service-face::before {
          position: absolute;
          top: -20%;
          left: 35%;
          width: 42%;
          height: 75%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,.065), transparent);
          transform: rotate(24deg);
          pointer-events: none;
          content: "";
        }

        .service-front {
          transform: rotateY(0deg) translateZ(1px);
        }

        .service-back {
          transform: rotateY(180deg) translateZ(1px);
          border-color: rgba(197,245,0,.6);
          background:
            radial-gradient(ellipse at 100% 100%, rgba(197,245,0,.15), transparent 55%),
            linear-gradient(145deg, #182018, #090d0a 75%);
        }

        .service-number {
          position: relative;
          z-index: 1;
          color: var(--text);
          font-size: 12px;
          letter-spacing: 1px;
        }

        /* Front stays simple: big name, small icon beside it */
        .front-content {
          position: relative;
          z-index: 1;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 10px;
          margin-top: auto;
          margin-bottom: auto;
        }

        .front-content h3 {
          margin: 0;
          font-size: clamp(17px, 1.45vw, 21px);
          font-weight: 600;
          line-height: 1.25;
          letter-spacing: -.5px;
          overflow-wrap: anywhere;
        }

        .service-icon {
          display: grid;
          width: 39px;
          height: 39px;
          flex: 0 0 39px;
          place-items: center;
          border: 1px solid rgba(197,245,0,.45);
          border-radius: 10px;
          color: var(--lime);
          background: rgba(197,245,0,.07);
          box-shadow: 0 5px 16px rgba(0,0,0,.2);
          transition: transform .3s, background .3s;
        }

        .service-card:hover .service-icon {
          transform: translateY(-2px);
          background: rgba(197,245,0,.13);
        }

        .front-hint {
          position: relative;
          z-index: 1;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 8px;
          margin-top: auto;
          color: var(--lime);
          font-size: 9px;
          font-weight: 600;
          letter-spacing: 1px;
        }

        .card-watermark {
          position: absolute;
          right: -3px;
          bottom: 22px;
          color: white;
          font-size: 60px;
          font-weight: 800;
          opacity: .025;
          pointer-events: none;
        }

        /* Back face */
        .back-label {
          position: relative;
          z-index: 1;
          display: flex;
          align-items: center;
          gap: 8px;
          color: var(--lime);
          font-size: 9px;
          font-weight: 650;
          letter-spacing: 1px;
        }

        .service-back h3 {
          position: relative;
          z-index: 1;
          margin: 18px 0 0;
          font-size: 17px;
          line-height: 1.25;
          font-weight: 600;
        }

        .service-description {
          position: relative;
          z-index: 1;
          margin: 10px 0 0;
          color: var(--muted);
          font-size: 11px;
          line-height: 1.55;
        }

        .service-features {
          position: relative;
          z-index: 1;
          display: grid;
          gap: 8px;
          margin: 13px 0 0;
          padding: 0;
          list-style: none;
        }

        .service-features li {
          display: flex;
          align-items: flex-start;
          gap: 7px;
          color: #d2d9d0;
          font-size: 10px;
          line-height: 1.4;
        }

        .service-features li svg {
          flex: 0 0 13px;
          margin-top: 1px;
          color: var(--lime);
        }

        .service-link {
          position: relative;
          z-index: 1;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 8px;
          margin-top: auto;
          padding-top: 9px;
          color: var(--lime);
          font-size: 10px;
          text-decoration: none;
        }

        .service-link svg {
          transition: transform .2s;
        }

        .service-link:hover svg {
          transform: translate(3px, -2px);
        }

        .services-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 18px;
          margin-top: 32px;
          padding: 0 8px;
          color: var(--lime);
          font-size: 9px;
          letter-spacing: 2.5px;
        }

        .services-footer > div {
          display: flex;
          align-items: center;
          gap: 18px;
        }

        .footer-tagline {
          display: flex;
          gap: 12px;
        }

        .footer-tagline i {
          color: #657052;
          font-style: normal;
        }

        .services-glow {
          position: absolute;
          z-index: 0;
          width: 300px;
          height: 300px;
          border-radius: 50%;
          filter: blur(95px);
          pointer-events: none;
        }

        .glow-left {
          top: -190px;
          left: -160px;
          background: rgba(166,217,0,.17);
        }

        .glow-right {
          right: -190px;
          bottom: 0;
          background: rgba(166,217,0,.09);
        }

        @media (min-width: 1500px) {
          .services-grid {
            gap: 25px 30px;
          }

          .service-card {
            height: 300px;
          }
        }

        @media (max-width: 1100px) {
          .services-grid {
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 22px;
          }

          .service-card {
            height: 280px;
          }

          .front-content h3 {
            font-size: 18px;
          }
        }

        @media (max-width: 760px) {
          .xora-services {
            padding: 55px 20px 28px;
          }

          .services-header {
            align-items: flex-start;
            flex-direction: column;
            gap: 20px;
            margin-bottom: 30px;
          }

          .services-header h2 {
            font-size: clamp(36px, 8vw, 48px);
            letter-spacing: -1.8px;
          }

          .services-header p {
            font-size: 13px;
          }

          .desktop-break {
            display: none;
          }

          .services-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 17px 14px;
          }

          .service-card {
            height: 245px;
          }

          .service-face {
            padding: 14px;
          }

          .front-content {
            align-items: flex-start;
            gap: 7px;
          }

          .front-content h3 {
            font-size: 16px;
          }

          .service-icon {
            width: 32px;
            height: 32px;
            flex-basis: 32px;
            border-radius: 8px;
          }

          .service-icon svg {
            width: 19px;
            height: 19px;
          }

          .front-hint {
            font-size: 7px;
            letter-spacing: .5px;
          }

          .service-back h3 {
            margin-top: 13px;
            font-size: 14px;
          }

          .service-description {
            font-size: 9px;
            line-height: 1.45;
          }

          .service-features {
            gap: 6px;
            margin-top: 10px;
          }

          .service-features li {
            gap: 4px;
            font-size: 8px;
          }

          .service-link {
            font-size: 9px;
          }

          .services-footer {
            margin-top: 26px;
            letter-spacing: 1px;
          }
        }

        @media (max-width: 390px) {
          .xora-services {
            padding-right: 16px;
            padding-left: 16px;
          }

          .services-grid {
            gap: 14px 11px;
          }

          .service-card {
            height: 235px;
          }

          .service-face {
            padding: 11px;
          }

          .front-content h3 {
            font-size: 14px;
          }

          .service-icon {
            width: 29px;
            height: 29px;
            flex-basis: 29px;
          }

          .service-back h3 {
            font-size: 13px;
          }

          .service-description {
            font-size: 8px;
          }

          .service-features li {
            font-size: 7.5px;
          }

          .services-footer {
            font-size: 8px;
          }

          .footer-tagline {
            gap: 6px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .service-card-inner {
            transition: none;
          }
        }
      `}</style>
    </>
  );
}
