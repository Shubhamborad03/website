"use client";

import { motion } from "framer-motion";
import AgentShowcase from "@/components/AgentShowcase";

const ease = [0.16, 1, 0.3, 1] as const;

export default function Hero() {
  return (
    <section id="top" className="relative pt-32 pb-24 lg:pt-36 lg:pb-32 overflow-hidden">
      {/* soft blue light, top-right, very restrained */}
      <div
        className="pointer-events-none absolute -top-40 right-[-10%] w-[900px] h-[760px] -z-0"
        style={{ background: "radial-gradient(ellipse 50% 55% at center, rgba(59,134,255,.10), transparent 62%)" }}
      />
      <div className="wrap relative z-10 flex flex-col lg:flex-row gap-12 lg:gap-10 items-center w-full">
        {/* copy */}
        <div className="lg:flex-1 min-w-0 w-full">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
            className="flex items-center gap-3 mb-7"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-blue pulse-live" />
            <span className="label">Custom AI agents</span>
            <span className="label !text-ink-3">Built to run 24/7</span>
          </motion.div>

          <h1 className="font-display text-ink text-[clamp(40px,4.9vw,74px)] tracking-[-.02em]">
            {["Do more", "with less."].map((line, i) => (
              <span key={i} className="block overflow-hidden">
                <motion.span
                  className={i === 1 ? "inline-block text-blue" : "inline-block"}
                  initial={{ y: "110%" }}
                  animate={{ y: "0%" }}
                  transition={{ duration: 0.9, ease, delay: 0.1 + i * 0.12 }}
                >
                  {line}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.45 }}
            className="mt-7 text-[clamp(18px,1.7vw,22px)] text-ink-2 max-w-[34ch] leading-[1.4]"
          >
            AI agents that run the work behind your business. Built for you. Owned by you.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.58 }}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <a
              href="https://z8d9iav9qs2.typeform.com/to/zTzcDJPm"
              className="inline-flex items-center gap-2 rounded-full bg-btn text-white px-7 py-[15px] text-[15px] font-semibold hover:bg-btn-hover transition-colors"
            >
              Contact us
            </a>
            <a
              href="#agents"
              className="inline-flex items-center gap-2 rounded-full border border-line px-7 py-[15px] text-[15px] font-semibold text-ink hover:border-ink transition-colors"
            >
              See what they do
            </a>
          </motion.div>

          {/* proof strip — balances the column, real differentiators */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.72 }}
            className="mt-14 grid grid-cols-3 gap-8 max-w-[460px]"
          >
            {[
              { n: "6-in-1", l: "Agents working as one" },
              { n: "<60s", l: "Every lead answered" },
              { n: "100%", l: "Yours, code and data" },
            ].map((s) => (
              <div key={s.l}>
                <div className="font-display text-[30px] text-ink tabular">{s.n}</div>
                <div className="text-[13px] text-ink-2 mt-1.5 leading-snug">{s.l}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* looping showcase: cycles through every automation, live */}
        <motion.div
          initial={{ opacity: 0, y: 26, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, ease, delay: 0.4 }}
          className="relative w-full lg:flex-[0_0_64%] flex justify-center lg:justify-end"
        >
          <AgentShowcase />
        </motion.div>
      </div>
    </section>
  );
}

