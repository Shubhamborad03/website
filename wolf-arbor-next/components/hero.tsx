"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { MagneticButton } from "@/components/ui/magnetic-button";

const CONTACT_URL = "https://z8d9iav9qs2.typeform.com/to/zTzcDJPm";

export function Hero() {
  return (
    <section
      id="top"
      className="relative pt-28 md:pt-32 pb-16 md:pb-24 px-6 max-w-7xl mx-auto"
    >
      <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_1fr] gap-10 lg:gap-16 items-center">
        {/* Left: Copy */}
        <div className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="inline-flex items-center gap-2 rounded-full bg-sandSoft border border-sand px-3 py-1 text-[12px] text-forest font-medium mb-7"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-forest" />
            For Australian arborists
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.9,
              delay: 0.2,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="text-balance text-ink font-semibold tracking-[-0.025em] leading-[1.02]"
            style={{ fontSize: "clamp(40px, 6.6vw, 76px)" }}
          >
            Software that wins
            <br />
            <span className="text-forest">more tree jobs.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.45 }}
            className="text-muted text-[17px] md:text-[18px] leading-[1.6] max-w-[520px] mt-7"
          >
            SMS quotes inside an hour. AI that reads the tree from a photo.
            Reviews on autopilot. Storms turned into bookings. Live in days.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.6 }}
            className="flex flex-wrap items-center gap-3 mt-9"
          >
            <MagneticButton href={CONTACT_URL}>
              Contact us
              <ArrowRight className="w-4 h-4" />
            </MagneticButton>
            <a
              href="#system"
              className="text-ink/80 hover:text-ink text-[14px] font-medium underline-offset-4 hover:underline transition-colors px-3 py-3"
            >
              See how it works
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.8 }}
            className="grid grid-cols-3 gap-4 md:gap-8 mt-12 max-w-[520px]"
          >
            <div>
              <div className="text-2xl md:text-3xl font-semibold text-ink counter">
                60<span className="text-muted">min</span>
              </div>
              <div className="text-[12px] text-muted mt-1 leading-tight">
                First quote out
              </div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-semibold text-ink counter">
                +30<span className="text-muted">%</span>
              </div>
              <div className="text-[12px] text-muted mt-1 leading-tight">
                Conversion lift
              </div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-semibold text-ink counter">
                7<span className="text-muted">d</span>
              </div>
              <div className="text-[12px] text-muted mt-1 leading-tight">
                Phase one live
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right: Hero photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="relative aspect-[4/5] w-full rounded-3xl overflow-hidden shadow-card bg-forest"
        >
          <Image
            src="/hero-arborist.jpg"
            alt="Arborist mid-cut with chainsaw, working at height"
            fill
            priority
            sizes="(min-width: 1024px) 540px, 100vw"
            className="object-cover object-[center_30%]"
          />
          {/* gradient for legibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent pointer-events-none" />
          {/* Live status card */}
          <div className="absolute bottom-4 left-4 right-4 md:bottom-6 md:left-6 md:right-6 rounded-2xl bg-bg/95 backdrop-blur-md p-4 md:p-5 border border-sand">
            <div className="text-[11px] font-mono uppercase tracking-[0.18em] text-forest mb-1">
              Live · 8:13 pm
            </div>
            <div className="text-[14px] md:text-[15px] text-ink font-medium leading-snug">
              Quote drafted for Sarah K. — $2,650 · sent in 4 minutes.
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
