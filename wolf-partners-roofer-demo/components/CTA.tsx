"use client";

import { motion } from "framer-motion";
import Image from "next/image";

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
          {/* Wolf Partners logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-2xl overflow-hidden shadow-[0_30px_60px_-20px_rgba(10,10,10,0.18)]"
          >
            <Image
              src="/images/wolf-partners-logo.png"
              alt="Wolf Partners"
              width={168}
              height={183}
              className="w-32 sm:w-40 h-auto"
              priority={false}
            />
          </motion.div>

          {/* Tagline */}
          <h2 className="font-display text-[36px] sm:text-[52px] lg:text-[64px] leading-[1.0] tracking-[-0.03em] font-extrabold mt-10 sm:mt-12 max-w-2xl">
            AI automation
            <br />
            <span className="text-graphite">built for QLD trades.</span>
          </h2>

          <p className="text-[14px] sm:text-[16px] text-ink/55 mt-5 max-w-md leading-relaxed">
            Plug Wolf Partners into your business and stop bleeding leads.
            We build, run, and report on the whole stack — you stay on the tools.
          </p>

          {/* Contact card */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-10 sm:mt-12 inline-flex flex-col items-center gap-1 px-6 py-4 rounded-2xl bg-white border border-ink/[0.08] shadow-[0_20px_40px_-12px_rgba(10,10,10,0.08)]"
          >
            <div className="text-[10px] uppercase tracking-wider text-gold-deep font-bold">
              Your point of contact
            </div>
            <div className="font-display text-[18px] sm:text-[20px] font-extrabold tracking-tight text-ink mt-1">
              Dave Heraud
            </div>
            <a
              href="mailto:dave@wolfpartners.com.au"
              className="text-[13px] sm:text-[14px] text-ink/65 hover:text-ink transition-colors tabular"
            >
              dave@wolfpartners.com.au
            </a>
          </motion.div>
        </motion.div>
      </div>

      <div className="max-w-6xl mx-auto px-5 lg:px-12 mt-20 sm:mt-24 pt-8 border-t border-ink/[0.08] flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="flex items-center gap-2.5">
          <Image
            src="/images/wolf-partners-logo.png"
            alt="Wolf Partners"
            width={28}
            height={30}
            className="h-7 w-auto"
          />
          <div className="font-display text-[12px] font-bold">Wolf Partners</div>
        </div>
        <div className="text-[11px] text-ink/40">
          Noosa, QLD · Australia
        </div>
      </div>
    </section>
  );
}
