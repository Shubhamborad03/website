"use client";

import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";
import Image from "next/image";
import {
  Images,
  Film,
  Smartphone,
  Facebook,
  Megaphone,
  Search,
  Globe,
  Mail,
} from "lucide-react";

const PIECES = [
  { Icon: Images,     count: 4, type: "Carousels",       sub: "Before/after" },
  { Icon: Film,       count: 2, type: "Reels",           sub: "Time-lapse" },
  { Icon: Smartphone, count: 5, type: "Stories",         sub: "5-frame set" },
  { Icon: Facebook,   count: 3, type: "FB Posts",        sub: "Suburb-tagged" },
  { Icon: Megaphone,  count: 6, type: "Meta Ads",        sub: "Creative variants" },
  { Icon: Search,     count: 2, type: "Google Ads",      sub: "Search creative" },
  { Icon: Globe,      count: 1, type: "Portfolio",       sub: "Website entry" },
  { Icon: Mail,       count: 1, type: "Newsletter",      sub: "Feature piece" },
];

const TOTAL = PIECES.reduce((s, p) => s + p.count, 0);

function Counter({ to }: { to: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-30%" });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v));

  useEffect(() => {
    if (!inView) return;
    const controls = animate(count, to, { duration: 2, ease: [0.16, 1, 0.3, 1] });
    return controls.stop;
  }, [inView, to, count]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
}

export default function ContentEngineDemo() {
  return (
    <section id="content" className="relative py-20 lg:py-28 bg-ink text-fog-soft overflow-hidden">
      <div className="absolute inset-0 bg-grid-dark opacity-15" />

      <div className="relative max-w-5xl mx-auto px-5 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-10 lg:mb-14"
        >
          <div className="text-[11px] uppercase tracking-wider text-gold font-bold mb-4">
            05 — Content engine
          </div>
          <h2 className="font-display text-[36px] sm:text-[56px] lg:text-[72px] leading-[1.0] tracking-[-0.03em] font-extrabold max-w-3xl mx-auto">
            One job becomes
            <br />
            <span className="text-gold"><Counter to={TOTAL} /> pieces.</span>
          </h2>
        </motion.div>

        {/* Hero before/after */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="rounded-2xl border border-fog-soft/10 overflow-hidden mb-6"
        >
          <div className="grid grid-cols-2 aspect-[16/8]">
            <div className="relative">
              <Image src="/images/before-1.png" alt="Before" fill sizes="(max-width: 768px) 50vw, 600px" className="object-cover" />
              <div className="absolute top-4 left-4 px-2.5 py-1 rounded-full bg-ink/70 backdrop-blur text-[10px] font-bold uppercase tracking-wider text-fog-soft/80">
                Before
              </div>
            </div>
            <div className="relative">
              <Image src="/images/after-1.png" alt="After" fill sizes="(max-width: 768px) 50vw, 600px" className="object-cover" />
              <div className="absolute top-4 right-4 px-2.5 py-1 rounded-full bg-gold text-ink text-[10px] font-bold uppercase tracking-wider">
                After
              </div>
            </div>
          </div>
        </motion.div>

        {/* Big icon-led tiles for each content format */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {PIECES.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="relative p-5 rounded-xl bg-ink-soft border border-fog-soft/10 overflow-hidden group hover:border-gold/30 transition-colors"
            >
              {/* Icon */}
              <div className="w-10 h-10 rounded-lg bg-gold/15 text-gold flex items-center justify-center mb-4">
                <p.Icon className="w-5 h-5" strokeWidth={1.8} />
              </div>

              {/* Big count */}
              <div className="font-display text-[44px] sm:text-[56px] font-extrabold tabular leading-none text-fog-soft">
                {p.count}
                <span className="text-fog-soft/30 text-[18px] sm:text-[24px] ml-1">×</span>
              </div>

              {/* Type + sub */}
              <div className="mt-3">
                <div className="font-display text-[14px] font-bold text-fog-soft">
                  {p.type}
                </div>
                <div className="text-[11px] text-fog-soft/50 mt-0.5">
                  {p.sub}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom strip — total time + delivery */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-6 p-5 rounded-xl bg-fog-soft/[0.04] border border-fog-soft/10 grid grid-cols-3 gap-3 text-center"
        >
          <div>
            <div className="text-[10px] uppercase tracking-wider text-fog-soft/45 font-bold mb-1">
              Generation time
            </div>
            <div className="font-display text-[20px] sm:text-[24px] font-extrabold text-gold tabular">
              1m 8s
            </div>
          </div>
          <div className="border-x border-fog-soft/10">
            <div className="text-[10px] uppercase tracking-wider text-fog-soft/45 font-bold mb-1">
              Your time spent
            </div>
            <div className="font-display text-[20px] sm:text-[24px] font-extrabold text-gold tabular">
              0
            </div>
          </div>
          <div>
            <div className="text-[10px] uppercase tracking-wider text-fog-soft/45 font-bold mb-1">
              Platforms covered
            </div>
            <div className="font-display text-[20px] sm:text-[24px] font-extrabold text-gold tabular">
              6
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
