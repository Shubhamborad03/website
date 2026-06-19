"use client";

import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";
import { Inbox, Clock, FileText, Search, Hammer, Timer, Star, DollarSign, ArrowRight } from "lucide-react";

type Metric = {
  Icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
  label: string;
  before: string;
  after: string;
  delta: string;
  note: string;
};

const METRICS: Metric[] = [
  { Icon: Inbox,      label: "Inbound leads / mo",  before: "12",     after: "47",   delta: "+35",         note: "Trickle → flooded" },
  { Icon: Clock,      label: "Avg response time",   before: "2 days", after: "5 min", delta: "576× faster", note: "Lead's gone → still warm" },
  { Icon: FileText,   label: "Quotes sent / mo",    before: "8",      after: "31",   delta: "+23",         note: "When you can → every lead" },
  { Icon: Search,     label: "Inspections / mo",    before: "4",      after: "11",   delta: "+7",          note: "Manual book-in → auto-scheduled" },
  { Icon: Hammer,     label: "Jobs won / mo",       before: "2",      after: "5",    delta: "+3",          note: "Hit and miss → predictable" },
  { Icon: Timer,      label: "Estimator hrs / wk",  before: "18 hrs", after: "7 hrs", delta: "−11 hrs",    note: "Drowning in it → in the field" },
  { Icon: Star,       label: "Reviews replied",     before: "0%",     after: "100%", delta: "all of them", note: "Ghosted → every one" },
  { Icon: DollarSign, label: "Revenue / mo",        before: "$10K",   after: "$32K", delta: "+$22K",       note: "Stuck → compounding" },
];

function CountUp({ to, duration = 1.6, format }: { to: number; duration?: number; format?: (v: number) => string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-30%" });
  const count = useMotionValue(0);
  const display = useTransform(count, (v) => (format ? format(v) : Math.round(v).toLocaleString()));
  useEffect(() => {
    if (!inView) return;
    const controls = animate(count, to, { duration, ease: [0.16, 1, 0.3, 1] });
    return controls.stop;
  }, [inView, to, count, duration]);
  return <motion.span ref={ref}>{display}</motion.span>;
}

const ease = [0.16, 1, 0.3, 1] as const;

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
          className="mb-10 lg:mb-14 max-w-2xl"
        >
          <div className="text-[11px] uppercase tracking-[.16em] text-blue font-bold mb-4">06 — The math</div>
          <h2 className="font-display text-[36px] sm:text-[52px] lg:text-[64px] leading-[1.0] tracking-[-0.03em] font-extrabold">
            What changes <span className="text-graphite">when we plug in.</span>
          </h2>
        </motion.div>

        {/* Revenue headline — clean light card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease }}
          className="relative rounded-[24px] border border-line bg-white overflow-hidden mb-5 shadow-[0_1px_2px_rgba(11,13,18,.04),0_24px_50px_-28px_rgba(0,113,227,.28)]"
        >
          <div
            className="pointer-events-none absolute -top-24 -right-16 w-[460px] h-[460px] -z-0"
            style={{ background: "radial-gradient(circle at center, rgba(0,113,227,.10), transparent 70%)" }}
          />
          <div className="relative grid grid-cols-1 lg:grid-cols-[1.4fr_1fr]">
            <div className="p-7 sm:p-10 lg:p-12">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-blue pulse-live" />
                <span className="text-[10px] uppercase tracking-[.16em] text-blue font-bold">Net new revenue · 90 days</span>
              </div>
              <div className="font-display text-blue text-[56px] sm:text-[88px] lg:text-[116px] font-extrabold tabular leading-[0.9] tracking-[-0.04em]">
                +$<CountUp to={66} format={(v) => Math.round(v).toString()} />K
              </div>
              <p className="text-[13px] sm:text-[15px] text-ink-2 mt-5 max-w-md leading-relaxed">
                Modelled against a typical Sunshine Coast residential roofer baseline.
                Your actual figures land in your monthly KPI report.
              </p>
            </div>

            <div className="p-7 sm:p-10 lg:p-12 lg:border-l border-t lg:border-t-0 border-line flex flex-col justify-center gap-5 bg-paper-2/40">
              <Stat label="Wolf AI (90d)" value="$10,500" muted />
              <div className="h-px bg-line" />
              <Stat label="Net to your business" value="$55,500" highlight />
              <div className="h-px bg-line" />
              <Stat label="Payback" value="Week 3" highlight />
            </div>
          </div>
        </motion.div>

        {/* Before → After comparison — clean rows, no dark panel */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="rounded-[24px] overflow-hidden border border-line bg-white shadow-[0_1px_2px_rgba(11,13,18,.04),0_24px_50px_-30px_rgba(11,13,18,.18)]"
        >
          {/* header */}
          <div className="px-5 sm:px-7 py-5 border-b border-line flex items-end justify-between gap-3 flex-wrap">
            <div>
              <div className="text-[10px] uppercase tracking-[.16em] text-ink-3 font-bold">The changes</div>
              <div className="font-display text-[18px] font-extrabold tracking-tight mt-1">8 metrics. 90 days. Same crew.</div>
            </div>
            <div className="flex items-center gap-6 text-[10px] uppercase tracking-[.14em] font-bold">
              <span className="text-ink-3">Today</span>
              <span className="text-blue">With Wolf AI</span>
            </div>
          </div>

          {/* rows */}
          <div>
            {METRICS.map((m, i) => (
              <MetricRow key={m.label} m={m} index={i} last={i === METRICS.length - 1} />
            ))}
          </div>
        </motion.div>

        <p className="mt-6 text-[11px] text-ink-3 leading-snug max-w-2xl">
          Every paying client gets monthly KPI reporting against their actual baseline.
          If the system isn&apos;t paying back inside 90 days, you don&apos;t deserve the retainer.
        </p>
      </div>
    </section>
  );
}

function MetricRow({ m, index, last }: { m: Metric; index: number; last: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 8 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.45, ease, delay: index * 0.05 }}
      className={"flex items-center gap-3 sm:gap-4 px-5 sm:px-7 py-4 sm:py-[18px] " + (last ? "" : "border-b border-line")}
    >
      <span className="grid place-items-center w-9 h-9 rounded-xl bg-blue-soft text-blue shrink-0">
        <m.Icon className="w-[18px] h-[18px]" strokeWidth={1.9} />
      </span>

      <div className="flex-1 min-w-0">
        <div className="text-[13px] sm:text-[14px] font-semibold text-ink leading-tight">{m.label}</div>
        <div className="text-[11px] sm:text-[12px] text-ink-3 mt-0.5 truncate">{m.note}</div>
      </div>

      <div className="flex items-center gap-2.5 sm:gap-4 shrink-0">
        <span className="font-display text-[15px] sm:text-[20px] font-semibold tabular text-ink-3 line-through decoration-ink-3/30">
          {m.before}
        </span>
        <ArrowRight className="w-4 h-4 text-ink-3 shrink-0" strokeWidth={2} />
        <span className="font-display text-[20px] sm:text-[28px] font-extrabold tabular text-ink leading-none">{m.after}</span>
        <span className="hidden sm:inline-flex items-center px-2 py-1 rounded-md bg-blue-soft text-blue text-[10px] font-bold tabular shrink-0">
          {m.delta}
        </span>
      </div>
    </motion.div>
  );
}

function Stat({ label, value, muted = false, highlight = false }: { label: string; value: string; muted?: boolean; highlight?: boolean }) {
  return (
    <div className="flex items-center justify-between gap-3">
      <span className={"text-[12px] sm:text-[13px] " + (muted ? "text-ink-3" : "text-ink-2")}>{label}</span>
      <span
        className={
          "font-display tabular shrink-0 " +
          (highlight ? "text-[18px] sm:text-[20px] font-extrabold text-blue" : "text-[15px] sm:text-[16px] font-bold text-ink")
        }
      >
        {value}
      </span>
    </div>
  );
}
