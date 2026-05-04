"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import {
  Inbox,
  TrendingUp,
  CheckCircle2,
  Timer,
  ArrowUpRight,
  Search,
  SlidersHorizontal,
  Plus,
  Sparkles,
  ChevronRight,
  List,
  Map as MapIcon,
} from "lucide-react";
import CoverageMap from "./CoverageMap";

type Lead = {
  initial: string;
  address: string;
  suburb: string;
  detail: string;
  source: string;
  value: string;
  age: string;
  status: "new" | "qualified" | "booked" | "won";
};

const LEADS: Lead[] = [
  { initial: "47", address: "47 Belmore Tce",   suburb: "Sunshine Beach", detail: "Heavy moss · 28yr concrete tile",  source: "Aged Roof",   value: "$5,800",  age: "now", status: "new" },
  { initial: "12", address: "12 Pacific Ave",   suburb: "Coolum",         detail: "Hail event 2 days ago",            source: "Storm",       value: "$8,400",  age: "2m",  status: "new" },
  { initial: "8",  address: "8 Hilton Tce",     suburb: "Tewantin",       detail: "New dwelling · Colorbond replace", source: "Council",     value: "$14,200", age: "5m",  status: "qualified" },
  { initial: "26", address: "26 David Low Way", suburb: "Marcus Beach",   detail: "Pre-sale · faded tile",            source: "Real Estate", value: "$4,900",  age: "11m", status: "qualified" },
  { initial: "3",  address: "3 Karawatha Dr",   suburb: "Mountain Creek", detail: "Asked group for recs",             source: "Social",      value: "$5,400",  age: "23m", status: "qualified" },
  { initial: "104", address: "104 Coast Rd",    suburb: "Peregian Beach", detail: "Hail · NRMA · drafted",            source: "Insurance",   value: "$11,800", age: "38m", status: "booked" },
];

const STATUS = {
  new:       { label: "New",       dot: "bg-gold",         text: "text-gold-deep" },
  qualified: { label: "Qualified", dot: "bg-ink/45",       text: "text-ink/65" },
  booked:    { label: "Booked",    dot: "bg-blue-500",     text: "text-blue-700" },
  won:       { label: "Won",       dot: "bg-emerald-500",  text: "text-emerald-700" },
};

const CHART = [4, 6, 5, 8, 7, 11, 14];
const CHART_DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Today"];
const CHART_MAX = Math.max(...CHART);

export default function LeadsPipeline() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-20%" });
  const [visible, setVisible] = useState(0);
  const [view, setView] = useState<"list" | "map">("list");

  useEffect(() => {
    const id = setInterval(() => setVisible((c) => (c < LEADS.length ? c + 1 : c)), 280);
    return () => clearInterval(id);
  }, []);

  return (
    <section ref={ref} id="leads" className="relative py-20 lg:py-28 bg-fog-soft">
      <div className="max-w-6xl mx-auto px-5 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-10 lg:mb-14"
        >
          <div className="text-[11px] uppercase tracking-wider text-gold-deep font-bold mb-4">
            03 — Your CRM
          </div>
          <h2 className="font-display text-[36px] sm:text-[56px] lg:text-[72px] leading-[1.0] tracking-[-0.03em] font-extrabold max-w-3xl mx-auto">
            Every lead.
            <br />
            <span className="text-graphite">Every street.</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="rounded-2xl bg-white border border-ink/[0.08] shadow-[0_50px_100px_-20px_rgba(10,10,10,0.18)] overflow-hidden"
        >
          {/* Window chrome */}
          <div className="px-4 py-2.5 border-b border-ink/[0.06] bg-fog-soft/60 flex items-center gap-3">
            <div className="flex gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
            </div>
            <div className="text-[11px] text-ink/40 font-medium ml-2">wolfpartners.app</div>
            <div className="ml-auto flex items-center gap-1.5 text-[10px] text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 pulse-live" />
              <span className="font-bold uppercase tracking-wider">Live</span>
            </div>
          </div>

          {/* Toolbar */}
          <div className="px-4 sm:px-6 py-4 sm:py-5 border-b border-ink/[0.06] flex items-center justify-between flex-wrap gap-3">
            <div>
              <div className="font-display text-[18px] sm:text-[24px] font-extrabold tracking-[-0.02em] leading-none">
                Pipeline
              </div>
              <div className="text-[10px] sm:text-[11px] text-ink/45 mt-1.5">
                Last 7 days · {visible} new today · avg $7.4K
              </div>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="flex items-center bg-ink/[0.04] rounded-lg p-0.5 sm:mr-1.5">
                <button
                  onClick={() => setView("list")}
                  className={`flex items-center gap-1 sm:gap-1.5 px-2 sm:px-2.5 py-1.5 rounded-md text-[10px] sm:text-[11px] font-medium transition-all ${
                    view === "list" ? "bg-white text-ink shadow-sm" : "text-ink/55 hover:text-ink/80"
                  }`}
                >
                  <List className="w-3 h-3" strokeWidth={2.2} />
                  List
                </button>
                <button
                  onClick={() => setView("map")}
                  className={`flex items-center gap-1 sm:gap-1.5 px-2 sm:px-2.5 py-1.5 rounded-md text-[10px] sm:text-[11px] font-medium transition-all ${
                    view === "map" ? "bg-white text-ink shadow-sm" : "text-ink/55 hover:text-ink/80"
                  }`}
                >
                  <MapIcon className="w-3 h-3" strokeWidth={2.2} />
                  Map
                </button>
              </div>
              <button className="hidden md:flex items-center gap-1.5 px-3 py-2 rounded-lg bg-ink/[0.04] text-[11px] font-medium text-ink/65 hover:bg-ink/[0.08] transition-colors">
                <Search className="w-3 h-3" strokeWidth={2.2} />
                Search
              </button>
              <button className="hidden md:flex items-center gap-1.5 px-3 py-2 rounded-lg bg-ink/[0.04] text-[11px] font-medium text-ink/65 hover:bg-ink/[0.08] transition-colors">
                <SlidersHorizontal className="w-3 h-3" strokeWidth={2.2} />
                Filter
              </button>
              <button className="flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-lg bg-ink text-fog-soft text-[10px] sm:text-[11px] font-medium hover:bg-ink-soft transition-colors shadow-sm whitespace-nowrap">
                <Plus className="w-3 h-3" strokeWidth={2.5} />
                New lead
              </button>
            </div>
          </div>

          {/* AI insight banner */}
          <div className="px-4 sm:px-6 py-3 border-b border-ink/[0.06] bg-gradient-to-r from-gold/[0.05] to-transparent flex items-center gap-2.5 sm:gap-3">
            <div className="w-7 h-7 rounded-md bg-gold/15 text-gold-deep flex items-center justify-center shrink-0">
              <Sparkles className="w-3.5 h-3.5" strokeWidth={2} />
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-[11px] sm:text-[12px] font-bold leading-tight">
                3 new high-intent leads from Sunshine Beach scan
              </div>
              <div className="text-[9px] sm:text-[10px] text-ink/55 mt-0.5 truncate sm:whitespace-normal">
                Aged tile roofs · combined $16,100 · drafted outreach ready
              </div>
            </div>
            <button className="hidden sm:flex items-center gap-1 text-[11px] font-bold text-gold-deep shrink-0">
              Review
              <ChevronRight className="w-3 h-3" strokeWidth={2.5} />
            </button>
          </div>

          {/* KPI row */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-ink/[0.06] border-b border-ink/[0.06]">
            <KpiSparkline
              Icon={Inbox}
              label="Today's leads"
              value={visible.toString()}
              delta="+50%"
              data={[2, 4, 3, 6, 5, 4, visible]}
              inView={inView}
              uniqueId="kpi-leads"
            />
            <KpiSparkline
              Icon={TrendingUp}
              label="Pipeline value"
              value="$158K"
              delta="+$48K"
              data={[92, 105, 118, 124, 138, 149, 158]}
              inView={inView}
              uniqueId="kpi-pipeline"
            />
            <KpiProgress
              Icon={CheckCircle2}
              label="Won this month"
              value="6"
              target="8"
              percent={75}
              inView={inView}
            />
            <KpiCompare
              Icon={Timer}
              label="Time saved / week"
              value="11.4 hrs"
              compare="vs 0.5 hrs before"
            />
          </div>

          {/* Body */}
          {view === "list" ? (
            <div className="grid grid-cols-1 lg:grid-cols-[1.2fr,1fr]">
              {/* Simple bar chart */}
              <div className="p-4 sm:p-6 border-b lg:border-b-0 lg:border-r border-ink/[0.06]">
                <div className="flex items-start justify-between mb-9 sm:mb-10">
                  <div>
                    <div className="text-[10px] uppercase tracking-wider text-ink/40 font-bold mb-1">
                      Leads received
                    </div>
                    <div className="font-display text-[28px] font-extrabold tabular leading-none">
                      {CHART.reduce((a, b) => a + b, 0)}
                    </div>
                    <div className="text-[11px] text-ink/45 mt-1.5">last 7 days</div>
                  </div>
                  <div className="flex items-center gap-1 px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-700 text-[10px] font-bold whitespace-nowrap shrink-0">
                    <ArrowUpRight className="w-3 h-3" strokeWidth={2.5} />
                    +127% wow
                  </div>
                </div>

                <BarChart />
              </div>

              {/* Recent leads */}
              <div>
                <div className="px-5 py-3 border-b border-ink/[0.06] flex items-center justify-between">
                  <div className="text-[10px] uppercase tracking-wider text-ink/40 font-bold">
                    Recent leads
                  </div>
                  <button className="flex items-center gap-0.5 text-[10px] text-ink/55 font-medium hover:text-ink">
                    View all
                    <ChevronRight className="w-3 h-3" strokeWidth={2} />
                  </button>
                </div>
                <div className="divide-y divide-ink/[0.04]">
                  {LEADS.map((lead, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: 12 }}
                      animate={{ opacity: i < visible ? 1 : 0, x: i < visible ? 0 : 12 }}
                      transition={{ duration: 0.35 }}
                      className="px-5 py-3 flex items-center gap-3 hover:bg-fog-soft/40 transition-colors group cursor-pointer"
                    >
                      <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-ink/[0.08] to-ink/[0.04] flex items-center justify-center shrink-0 ring-1 ring-ink/[0.05]">
                        <span className="text-[10px] font-bold text-ink/65 tabular">{lead.initial}</span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="font-display text-[12px] font-bold leading-tight truncate">
                          {lead.address} <span className="font-normal text-ink/40">· {lead.suburb}</span>
                        </div>
                        <div className="flex items-center gap-1.5 mt-0.5">
                          <span className={`flex items-center gap-1 text-[9px] font-bold uppercase tracking-wider ${STATUS[lead.status].text}`}>
                            <span className={`w-1 h-1 rounded-full ${STATUS[lead.status].dot}`} />
                            {STATUS[lead.status].label}
                          </span>
                          <span className="text-[9px] text-ink/30">·</span>
                          <span className="text-[9px] text-ink/45">{lead.source}</span>
                          <span className="text-[9px] text-ink/30">·</span>
                          <span className="text-[9px] text-ink/45">{lead.age}</span>
                        </div>
                      </div>
                      <div className="font-display text-[12px] font-bold tabular text-right whitespace-nowrap shrink-0">
                        {lead.value}
                      </div>
                      <ChevronRight className="w-3 h-3 text-ink/30 opacity-0 group-hover:opacity-100 transition-opacity shrink-0" strokeWidth={2} />
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <CoverageMap />
          )}
        </motion.div>
      </div>
    </section>
  );
}

/* ─────────────────────────  BAR CHART (hover-interactive)  ───────────────────────── */

function BarChart() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div>
      <div className="relative h-44">
        <div className="absolute inset-0 grid grid-cols-7 gap-2.5 items-end">
          {CHART.map((v, i) => {
            const isToday = i === CHART.length - 1;
            const isHovered = hovered === i;
            return (
              <div
                key={i}
                className="flex flex-col justify-end h-full relative cursor-pointer"
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
              >
                {/* Hover tooltip — shown above any non-Today bar when hovered */}
                {isHovered && !isToday && (
                  <motion.div
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.12 }}
                    className="absolute -top-9 left-1/2 -translate-x-1/2 z-10 pointer-events-none"
                  >
                    <div className="bg-ink text-fog-soft px-2 py-1 rounded-md shadow-lg text-[10px] font-bold tabular whitespace-nowrap">
                      {v} leads
                    </div>
                    <div className="w-2 h-2 bg-ink rotate-45 absolute -bottom-1 left-1/2 -translate-x-1/2" />
                  </motion.div>
                )}

                <motion.div
                  initial={{ scaleY: 0 }}
                  whileInView={{ scaleY: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.7, delay: 0.4 + i * 0.06, ease: [0.16, 1, 0.3, 1] }}
                  style={{ originY: 1, height: `${(v / CHART_MAX) * 100}%` }}
                  className={`relative rounded-t-md transition-colors ${
                    isToday
                      ? "bg-gradient-to-t from-gold-deep to-gold"
                      : isHovered
                      ? "bg-ink/35"
                      : "bg-ink/[0.10]"
                  }`}
                >
                  {/* Today's pill — always visible */}
                  {isToday && (
                    <div className="absolute -top-7 left-1/2 -translate-x-1/2 px-1.5 py-0.5 rounded-md bg-ink text-fog-soft text-[10px] font-bold tabular whitespace-nowrap shadow-sm">
                      {v}
                    </div>
                  )}
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="grid grid-cols-7 gap-2.5 mt-2">
        {CHART_DAYS.map((d, i) => (
          <div
            key={i}
            className={`text-[10px] text-center font-medium transition-colors ${
              i === CHART.length - 1
                ? "text-gold-deep font-bold"
                : hovered === i
                ? "text-ink font-bold"
                : "text-ink/40"
            }`}
          >
            {d}
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─────────────────────────  KPI CARDS  ───────────────────────── */

function KpiSparkline({
  Icon,
  label,
  value,
  delta,
  data,
  inView,
  uniqueId,
}: {
  Icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
  label: string;
  value: string;
  delta: string;
  data: number[];
  inView: boolean;
  uniqueId: string;
}) {
  const max = Math.max(...data);
  const min = Math.min(...data);
  const range = max - min || 1;

  const points = data
    .map((v, i) => {
      const x = (i / (data.length - 1)) * 100;
      const y = 100 - ((v - min) / range) * 100;
      return `${x},${y}`;
    })
    .join(" ");
  const areaPoints = `0,100 ${points} 100,100`;

  return (
    <div className="bg-white p-3.5 sm:p-5 relative overflow-hidden">
      <div className="flex items-center justify-between mb-3">
        <div className="w-7 h-7 rounded-md bg-ink/[0.04] text-ink/55 flex items-center justify-center">
          <Icon className="w-3.5 h-3.5" strokeWidth={2} />
        </div>
        <div className="flex items-center gap-0.5 text-[10px] font-bold tabular text-emerald-700">
          <ArrowUpRight className="w-2.5 h-2.5" strokeWidth={2.5} />
          {delta}
        </div>
      </div>
      <div className="font-display text-[22px] sm:text-[32px] font-extrabold tabular leading-none">
        {value}
      </div>
      <div className="text-[11px] text-ink/45 mt-1.5">{label}</div>

      <svg
        className="absolute bottom-0 left-0 right-0 h-12 w-full pointer-events-none"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id={`spark-${uniqueId}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#C5A44E" stopOpacity="0.18" />
            <stop offset="100%" stopColor="#C5A44E" stopOpacity="0" />
          </linearGradient>
        </defs>
        <motion.polygon
          points={areaPoints}
          fill={`url(#spark-${uniqueId})`}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        />
        <motion.polyline
          points={points}
          fill="none"
          stroke="#C5A44E"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          vectorEffect="non-scaling-stroke"
          initial={{ pathLength: 0 }}
          animate={inView ? { pathLength: 1 } : {}}
          transition={{ duration: 1.4, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        />
      </svg>
    </div>
  );
}

function KpiProgress({
  Icon,
  label,
  value,
  target,
  percent,
  inView,
}: {
  Icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
  label: string;
  value: string;
  target: string;
  percent: number;
  inView: boolean;
}) {
  return (
    <div className="bg-white p-3.5 sm:p-5 relative group">
      <div className="flex items-center justify-between mb-3">
        <div className="w-7 h-7 rounded-md bg-ink/[0.04] text-ink/55 flex items-center justify-center group-hover:bg-gold/10 group-hover:text-gold-deep transition-colors">
          <Icon className="w-3.5 h-3.5" strokeWidth={2} />
        </div>
        <div className="text-[10px] tabular text-ink/45 font-medium">
          target {target}
        </div>
      </div>
      <div className="font-display text-[22px] sm:text-[32px] font-extrabold tabular leading-none">
        {value}
      </div>
      <div className="text-[11px] text-ink/45 mt-1.5 mb-3">{label}</div>
      <div className="relative h-1.5 rounded-full bg-ink/[0.06] overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${percent}%` } : {}}
          transition={{ duration: 1.2, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-y-0 left-0 bg-gradient-to-r from-gold-deep to-gold rounded-full"
        />
      </div>
      <div className="text-[10px] tabular text-ink/45 mt-1.5">
        <span className="text-gold-deep font-bold">{percent}%</span> of monthly target
      </div>
    </div>
  );
}

function KpiCompare({
  Icon,
  label,
  value,
  compare,
}: {
  Icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
  label: string;
  value: string;
  compare: string;
}) {
  return (
    <div className="bg-white p-3.5 sm:p-5 relative group">
      <div className="flex items-center justify-between mb-3">
        <div className="w-7 h-7 rounded-md bg-ink/[0.04] text-ink/55 flex items-center justify-center group-hover:bg-gold/10 group-hover:text-gold-deep transition-colors">
          <Icon className="w-3.5 h-3.5" strokeWidth={2} />
        </div>
        <div className="px-1.5 py-0.5 rounded text-[9px] font-bold uppercase tracking-wider bg-emerald-50 text-emerald-700">
          22× lift
        </div>
      </div>
      <div className="font-display text-[22px] sm:text-[32px] font-extrabold tabular leading-none">
        {value}
      </div>
      <div className="text-[11px] text-ink/45 mt-1.5">{label}</div>
      <div className="text-[10px] text-ink/40 mt-2.5 line-through decoration-ink/15 tabular">
        {compare}
      </div>
    </div>
  );
}
