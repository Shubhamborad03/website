"use client";

import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";

function Counter({ to, duration = 1.6 }: { to: number; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v));

  useEffect(() => {
    if (!inView) return;
    const controls = animate(count, to, { duration, ease: [0.16, 1, 0.3, 1], delay: 0.6 });
    return controls.stop;
  }, [inView, to, count, duration]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
}

export default function Hero() {
  return (
    <section className="relative pt-24 pb-14 sm:pt-32 sm:pb-20 lg:pt-36 lg:pb-24 overflow-hidden">
      <div className="max-w-5xl mx-auto px-5 lg:px-12">
        {/* Tag */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-8"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-ink/[0.04] border border-ink/[0.08]">
            <div className="w-1.5 h-1.5 rounded-full bg-gold pulse-live" />
            <span className="text-[11px] font-medium tracking-wide text-ink/70 uppercase">
              For QLD Roofing Contractors
            </span>
          </div>
        </motion.div>

        {/* The big headline — transformation math */}
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-center font-extrabold tracking-[-0.04em] leading-[0.92]"
        >
          <div className="text-[44px] sm:text-[72px] lg:text-[96px]">
            <span className="text-ink/30 line-through decoration-ink/15 decoration-[3px]">12 leads</span>
            <span className="inline-block mx-2 sm:mx-4 text-graphite">→</span>
            <span className="text-gold-deep tabular">
              <Counter to={47} />
              <span> leads.</span>
            </span>
          </div>
          <div className="text-[28px] sm:text-[44px] lg:text-[60px] text-ink/45 mt-2 sm:mt-4">
            Same crew.
          </div>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-8 sm:mt-10 max-w-xl mx-auto text-center text-[16px] sm:text-[18px] leading-[1.5] text-ink/55"
        >
          AI automation for residential roofing contractors.
        </motion.p>

        {/* Scroll cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-10 flex justify-center"
        >
          <a
            href="#satellite"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-ink text-fog-soft text-[15px] font-medium hover:bg-ink-soft transition-colors"
          >
            See how it works
            <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none">
              <path d="M8 3v10m0 0l-4-4m4 4l4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </motion.div>
      </div>

      {/* Visual proof — the lift */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="mt-14 sm:mt-20 max-w-4xl mx-auto px-5 lg:px-12"
      >
        <div className="rounded-2xl bg-white border border-ink/[0.08] shadow-[0_30px_60px_-20px_rgba(10,10,10,0.12)] overflow-hidden">
          <div className="grid grid-cols-2">
            <div className="p-5 sm:p-8 border-r border-ink/[0.08]">
              <div className="text-[11px] sm:text-[12px] uppercase tracking-wider text-ink/45 font-bold mb-2">
                Your business today
              </div>
              <div className="font-display text-[44px] sm:text-[64px] font-extrabold tabular leading-none text-ink/55 line-through decoration-ink/25 decoration-[2px]">
                12
              </div>
              <div className="text-[12px] sm:text-[14px] text-ink/55 mt-2 font-medium">leads / month</div>

              <div className="mt-5 sm:mt-6 space-y-2 text-[12px] sm:text-[14px] text-ink/65">
                <Bullet text="Wait for inbound" muted />
                <Bullet text="Quote in 2 days" muted />
                <Bullet text="Reply to no reviews" muted />
                <Bullet text="Estimator drives every site" muted />
              </div>
            </div>
            <div className="p-5 sm:p-8 bg-gradient-to-br from-gold/5 to-transparent">
              <div className="flex items-center gap-1.5 mb-2">
                <div className="w-1 h-1 rounded-full bg-gold" />
                <div className="text-[11px] sm:text-[12px] uppercase tracking-wider text-gold-deep font-bold">
                  With Wolf Partners
                </div>
              </div>
              <div className="font-display text-[44px] sm:text-[64px] font-extrabold tabular leading-none text-gold-deep">
                47
              </div>
              <div className="text-[12px] sm:text-[14px] text-ink/65 mt-2 font-medium">
                leads / month <span className="text-gold-deep font-bold">+35</span>
              </div>

              <div className="mt-5 sm:mt-6 space-y-2 text-[12px] sm:text-[14px] text-ink/85 font-medium">
                <Bullet text="AI scans 7 sources daily" />
                <Bullet text="Quote sent in 5 minutes" />
                <Bullet text="Every review replied to" />
                <Bullet text="Estimator only visits booked jobs" />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

function Bullet({ text, muted = false }: { text: string; muted?: boolean }) {
  return (
    <div className="flex items-center gap-2.5">
      <div className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 ${muted ? "bg-ink/[0.06]" : "bg-gold/20"}`}>
        <svg className={`w-2.5 h-2.5 ${muted ? "text-ink/40" : "text-gold-deep"}`} viewBox="0 0 8 8" fill="none">
          <path d="M2 4l1.5 1.5L6 2.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      <span className="leading-snug">{text}</span>
    </div>
  );
}
