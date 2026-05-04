"use client";

import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { Fragment, useEffect, useRef } from "react";
import { Trophy, PiggyBank, Zap } from "lucide-react";

type Metric = {
  emoji: string;
  label: string;
  before: string;
  beforeNote: string;
  after: string;
  afterNote: string;
  delta: string;
};

const METRICS: Metric[] = [
  { emoji: "📥", label: "Inbound leads / mo",   before: "12",      beforeNote: "trickle",        after: "47",      afterNote: "flooded",         delta: "+35" },
  { emoji: "⏱️", label: "Avg response time",    before: "2 days",  beforeNote: "lead's gone",    after: "5 mins",  afterNote: "still warm",      delta: "576× faster" },
  { emoji: "📝", label: "Quotes sent / mo",     before: "8",       beforeNote: "when you can",   after: "31",      afterNote: "every lead",      delta: "+23" },
  { emoji: "🔍", label: "Inspections / mo",     before: "4",       beforeNote: "manual book-in", after: "11",      afterNote: "auto-scheduled",  delta: "+7" },
  { emoji: "🔨", label: "Jobs won / mo",        before: "2",       beforeNote: "hit and miss",   after: "5",       afterNote: "predictable",     delta: "+3" },
  { emoji: "⏰", label: "Estimator hrs / wk",   before: "18 hrs",  beforeNote: "drowning in it", after: "7 hrs",   afterNote: "in the field",    delta: "−11 hrs" },
  { emoji: "⭐", label: "Reviews replied",      before: "0%",      beforeNote: "ghosted",        after: "100%",    afterNote: "every one",       delta: "all of them" },
  { emoji: "💰", label: "Revenue / mo",         before: "$10K",    beforeNote: "stuck",          after: "$32K",    afterNote: "compounding",     delta: "+$22K" },
];

function CountUp({ to, duration = 1.6, format }: { to: number; duration?: number; format?: (v: number) => string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-30%" });
  const count = useMotionValue(0);
  const display = useTransform(count, (v) => format ? format(v) : Math.round(v).toLocaleString());

  useEffect(() => {
    if (!inView) return;
    const controls = animate(count, to, { duration, ease: [0.16, 1, 0.3, 1] });
    return controls.stop;
  }, [inView, to, count, duration]);

  return <motion.span ref={ref}>{display}</motion.span>;
}

export default function Numbers() {
  return (
    <section id="numbers" className="relative py-20 lg:py-28 bg-fog-soft">
      <div className="max-w-5xl mx-auto px-5 lg:px-12">
        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-10 lg:mb-14"
        >
          <div className="text-[11px] uppercase tracking-wider text-gold-deep font-bold mb-4">
            06 — The math
          </div>
          <h2 className="font-display text-[36px] sm:text-[56px] lg:text-[72px] leading-[1.0] tracking-[-0.03em] font-extrabold max-w-3xl mx-auto">
            What changes
            <br />
            <span className="text-graphite">when we plug in.</span>
          </h2>
        </motion.div>

        {/* HERO — the dollar number front and centre */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-2xl bg-ink text-fog-soft overflow-hidden mb-4"
        >
          <div className="absolute inset-0 bg-grid-dark opacity-15" />
          <div className="absolute -top-1/2 -right-1/4 w-[600px] h-[600px] bg-gold/8 rounded-full blur-3xl" />

          <div className="relative grid grid-cols-1 lg:grid-cols-[1.4fr,1fr]">
            {/* Big number */}
            <div className="p-6 sm:p-10 lg:p-12">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-1.5 h-1.5 rounded-full bg-gold" />
                <div className="text-[10px] uppercase tracking-wider text-gold font-bold">
                  Net new revenue · 90 days
                </div>
              </div>
              <div className="font-display text-[48px] sm:text-[80px] lg:text-[120px] font-extrabold tabular leading-[0.9] tracking-[-0.04em]">
                +$<CountUp to={66} format={(v) => Math.round(v).toString()} />K
              </div>
              <div className="text-[13px] sm:text-[15px] text-fog-soft/55 mt-4 max-w-md leading-relaxed">
                Modelled against a typical Sunshine Coast residential roofer baseline.
                Your actual figures land in your monthly KPI report.
              </div>
            </div>

            {/* Cost breakdown */}
            <div className="p-6 sm:p-10 lg:p-12 lg:border-l border-t lg:border-t-0 border-fog-soft/[0.08] bg-fog-soft/[0.02]">
              <div className="space-y-4">
                <BreakdownRow
                  Icon={Zap}
                  label="Wolf Partners (90d)"
                  value="$10,500"
                  muted
                />
                <BreakdownRow
                  Icon={PiggyBank}
                  label="Net to your business"
                  value="$55,500"
                  highlight
                />
                <BreakdownRow
                  Icon={Trophy}
                  label="Payback"
                  value="Week 3"
                  highlight
                />
              </div>
            </div>
          </div>
        </motion.div>

        {/* DARK vs LIGHT comparison — instantly readable, before/after photo style */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="rounded-2xl overflow-hidden shadow-[0_30px_60px_-20px_rgba(10,10,10,0.18)] border border-ink/[0.08]"
        >
          {/* Caption strip */}
          <div className="px-4 sm:px-6 py-4 sm:py-5 bg-white border-b border-ink/[0.06] flex items-center justify-between flex-wrap gap-2">
            <div>
              <div className="text-[10px] uppercase tracking-wider text-ink/40 font-bold">
                The changes
              </div>
              <div className="font-display text-[18px] font-extrabold tracking-tight mt-0.5">
                8 metrics. 90 days. Same crew.
              </div>
            </div>
            <div className="text-[11px] text-ink/45">
              Read each side top → bottom
            </div>
          </div>

          {/* Two-side comparison — single grid, each row spans both columns so heights stay locked */}
          <div className="grid grid-cols-2 relative">
            {/* Vertical gold seam threading the right column */}
            <div className="absolute top-0 bottom-0 w-[3px] bg-gradient-to-b from-gold-deep via-gold to-gold-deep pointer-events-none z-10" style={{ left: "50%", transform: "translateX(-1.5px)" }} />

            {/* HEADER ROW — left header */}
            <div
              className="px-4 sm:px-6 py-4 sm:py-5 flex items-center gap-2 sm:gap-2.5"
              style={{ background: "#1F1A14", borderBottom: "1px solid rgba(232, 222, 201, 0.10)" }}
            >
              <span className="text-[20px] sm:text-[22px] grayscale" style={{ opacity: 0.55 }}>😩</span>
              <div className="min-w-0">
                <div className="text-[9px] sm:text-[10px] uppercase tracking-wider font-bold" style={{ color: "rgba(232, 222, 201, 0.60)" }}>
                  Without us
                </div>
                <div className="font-display text-[13px] sm:text-[15px] font-extrabold tracking-tight truncate" style={{ color: "#E8DEC9" }}>
                  Today — stuck on the tools
                </div>
              </div>
            </div>
            {/* HEADER ROW — right header */}
            <div
              className="px-4 sm:px-6 py-4 sm:py-5 flex items-center gap-2 sm:gap-2.5"
              style={{ background: "#FAF6EE", borderBottom: "1px solid rgba(10, 10, 10, 0.06)" }}
            >
              <span className="text-[20px] sm:text-[22px]">🚀</span>
              <div className="min-w-0">
                <div className="text-[9px] sm:text-[10px] uppercase tracking-wider text-gold-deep font-bold">
                  With Wolf Partners
                </div>
                <div className="font-display text-[13px] sm:text-[15px] font-extrabold text-ink tracking-tight truncate">
                  90 days from now
                </div>
              </div>
            </div>

            {/* METRIC ROWS — alternating left/right cells in source order so each row pair shares height */}
            {METRICS.map((m, i) => {
              const isLast = i === METRICS.length - 1;
              return (
                <Fragment key={i}>
                  <BeforeCell metric={m} index={i} isLast={isLast} />
                  <AfterCell metric={m} index={i} isLast={isLast} />
                </Fragment>
              );
            })}
          </div>
        </motion.div>

        <div className="mt-6 text-[11px] text-ink/45 leading-snug max-w-2xl">
          Every paying client gets monthly KPI reporting against their actual baseline.
          If the system isn&apos;t paying back inside 90 days, you don&apos;t deserve the retainer.
        </div>
      </div>
    </section>
  );
}

function BeforeCell({ metric, index, isLast }: { metric: Metric; index: number; isLast: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -8 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="px-4 sm:px-6 py-4 sm:py-5 flex items-start gap-2 sm:gap-3 h-full"
      style={{
        background: "#1F1A14",
        color: "#E8DEC9",
        borderBottom: isLast ? "none" : "1px solid rgba(232, 222, 201, 0.08)",
      }}
    >
      <span className="text-[18px] sm:text-[24px] leading-none mt-0.5 sm:mt-1 grayscale shrink-0" style={{ opacity: 0.55 }}>
        {metric.emoji}
      </span>
      <div className="flex-1 min-w-0">
        <div
          className="text-[10px] sm:text-[12px] font-semibold leading-tight uppercase tracking-wider"
          style={{ color: "rgba(232, 222, 201, 0.70)" }}
        >
          {metric.label}
        </div>
        <div
          className="font-display text-[22px] sm:text-[34px] font-extrabold tabular leading-none mt-1.5"
          style={{ color: "#F2EAD3" }}
        >
          {metric.before}
        </div>
        <div className="text-[10px] sm:text-[11px] mt-1.5 italic" style={{ color: "rgba(232, 222, 201, 0.55)" }}>
          “{metric.beforeNote}”
        </div>
      </div>
    </motion.div>
  );
}

function AfterCell({ metric, index, isLast }: { metric: Metric; index: number; isLast: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: 8 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.4, delay: index * 0.05 + 0.15 }}
      className="px-4 sm:px-6 py-4 sm:py-5 flex items-start gap-2 sm:gap-3 h-full"
      style={{
        background: "#FAF6EE",
        borderBottom: isLast ? "none" : "1px solid rgba(10, 10, 10, 0.06)",
      }}
    >
      <span className="text-[18px] sm:text-[24px] leading-none mt-0.5 sm:mt-1 shrink-0">
        {metric.emoji}
      </span>
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap">
          <div className="text-[10px] sm:text-[12px] font-semibold text-gold-deep leading-tight uppercase tracking-wider">
            {metric.label}
          </div>
          <div className="inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded-md bg-emerald-100 text-[9px] sm:text-[10px] font-bold text-emerald-800 tabular shrink-0">
            {metric.delta}
          </div>
        </div>
        <div className="font-display text-[22px] sm:text-[34px] font-extrabold tabular text-ink leading-none mt-1.5">
          {metric.after}
        </div>
        <div className="text-[10px] sm:text-[11px] text-ink/70 mt-1.5">
          {metric.afterNote}
        </div>
      </div>
    </motion.div>
  );
}

function BreakdownRow({
  Icon,
  label,
  value,
  muted = false,
  highlight = false,
}: {
  Icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
  label: string;
  value: string;
  muted?: boolean;
  highlight?: boolean;
}) {
  return (
    <div className="flex items-center gap-3">
      <div
        className={`w-7 h-7 rounded-md flex items-center justify-center shrink-0 ${
          highlight ? "bg-gold/15 text-gold" : "bg-fog-soft/[0.06] text-fog-soft/55"
        }`}
      >
        <Icon className="w-3.5 h-3.5" strokeWidth={2} />
      </div>
      <div className="flex-1 min-w-0">
        <div className={`text-[11px] ${muted ? "text-fog-soft/50" : "text-fog-soft/70"}`}>
          {label}
        </div>
      </div>
      <div
        className={`font-display tabular shrink-0 ${
          highlight ? "text-[16px] font-extrabold text-gold" : "text-[14px] font-bold text-fog-soft/85"
        }`}
      >
        {value}
      </div>
    </div>
  );
}
