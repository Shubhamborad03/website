"use client";

import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section id="book" className="relative py-20 lg:py-28 bg-fog">
      <div className="max-w-3xl mx-auto px-5 lg:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="flex flex-col items-center"
        >
          {/* Wolf AI wordmark */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="grid place-items-center w-20 h-20 rounded-2xl bg-white border border-ink/[0.08] shadow-[0_24px_50px_-18px_rgba(0,113,227,0.3)]"
          >
            <span className="font-display text-[26px] font-extrabold tracking-tight">
              Wolf<span className="text-blue">AI</span>
            </span>
          </motion.div>

          {/* Tagline */}
          <h2 className="font-display text-[36px] sm:text-[52px] lg:text-[64px] leading-[1.0] tracking-[-0.03em] font-extrabold mt-10 sm:mt-12 max-w-2xl">
            AI automation
            <br />
            <span className="text-graphite">built for trades.</span>
          </h2>

          <p className="text-[14px] sm:text-[16px] text-ink/55 mt-5 max-w-md leading-relaxed">
            Plug Wolf AI into your business and stop bleeding leads.
            We build, run, and report on the whole stack — you stay on the tools.
          </p>

          {/* primary CTA */}
          <a
            href="https://z8d9iav9qs2.typeform.com/to/zTzcDJPm"
            className="mt-9 inline-flex items-center gap-2 rounded-full bg-btn text-white px-8 py-[15px] text-[15px] font-semibold hover:bg-btn-hover transition-colors"
          >
            Contact us
            <span aria-hidden>&rarr;</span>
          </a>
        </motion.div>
      </div>

      <div className="max-w-6xl mx-auto px-5 lg:px-12 mt-20 sm:mt-24 pt-8 border-t border-ink/[0.08] flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="font-display text-[15px] font-bold tracking-tight">
          Wolf<span className="text-blue">AI</span>
        </div>
        <div className="text-[11px] text-ink/40">Noosa, QLD · Australia</div>
      </div>
    </section>
  );
}
