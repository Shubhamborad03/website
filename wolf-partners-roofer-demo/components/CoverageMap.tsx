"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  FileText,
  MessageSquare,
  Send,
  Clock,
  XCircle,
} from "lucide-react";

// Pixel-percentage positions of every red dot in /public/images/coverage.png
// 82 houses auto-detected from the image
const DOTS: { xPct: number; yPct: number }[] = [
  { xPct: 73.21, yPct: 3.80 },   { xPct: 84.05, yPct: 5.11 },   { xPct: 89.53, yPct: 5.81 },
  { xPct: 79.08, yPct: 6.91 },   { xPct: 57.21, yPct: 6.92 },   { xPct: 22.74, yPct: 7.87 },
  { xPct: 94.51, yPct: 8.43 },   { xPct: 14.04, yPct: 8.44 },   { xPct: 50.37, yPct: 9.95 },
  { xPct: 36.70, yPct: 10.92 },  { xPct: 4.60,  yPct: 12.65 },  { xPct: 68.66, yPct: 15.97 },
  { xPct: 59.25, yPct: 16.80 },  { xPct: 18.34, yPct: 17.49 },  { xPct: 33.44, yPct: 18.40 },
  { xPct: 9.32,  yPct: 19.08 },  { xPct: 52.44, yPct: 22.40 },  { xPct: 76.97, yPct: 22.40 },
  { xPct: 39.85, yPct: 23.71 },  { xPct: 62.47, yPct: 25.24 },  { xPct: 28.65, yPct: 26.68 },
  { xPct: 80.11, yPct: 27.23 },  { xPct: 14.44, yPct: 29.11 },  { xPct: 46.36, yPct: 30.14 },
  { xPct: 57.21, yPct: 31.32 },  { xPct: 85.38, yPct: 31.32 },  { xPct: 70.74, yPct: 31.33 },
  { xPct: 35.45, yPct: 32.21 },  { xPct: 91.03, yPct: 33.74 },  { xPct: 95.36, yPct: 33.74 },
  { xPct: 24.50, yPct: 37.33 },  { xPct: 41.14, yPct: 37.34 },  { xPct: 75.89, yPct: 37.34 },
  { xPct: 65.30, yPct: 37.34 },  { xPct: 52.45, yPct: 38.64 },  { xPct: 9.32,  yPct: 38.65 },
  { xPct: 31.47, yPct: 41.14 },  { xPct: 59.96, yPct: 43.84 },  { xPct: 79.08, yPct: 43.85 },
  { xPct: 5.85,  yPct: 45.36 },  { xPct: 46.86, yPct: 45.36 },  { xPct: 36.35, yPct: 47.30 },
  { xPct: 27.22, yPct: 50.20 },  { xPct: 55.78, yPct: 51.72 },  { xPct: 64.90, yPct: 51.72 },
  { xPct: 81.22, yPct: 51.72 },  { xPct: 18.63, yPct: 53.45 },  { xPct: 41.82, yPct: 54.62 },
  { xPct: 31.72, yPct: 56.42 },  { xPct: 50.38, yPct: 56.42 },  { xPct: 59.97, yPct: 59.88 },
  { xPct: 68.66, yPct: 59.88 },  { xPct: 85.38, yPct: 59.88 },  { xPct: 23.10, yPct: 63.13 },
  { xPct: 37.52, yPct: 63.13 },  { xPct: 45.33, yPct: 64.31 },  { xPct: 87.99, yPct: 64.31 },
  { xPct: 72.85, yPct: 66.45 },  { xPct: 14.04, yPct: 67.07 },  { xPct: 63.47, yPct: 68.93 },
  { xPct: 26.35, yPct: 70.04 },  { xPct: 48.40, yPct: 73.64 },  { xPct: 9.61,  yPct: 73.64 },
  { xPct: 18.95, yPct: 73.64 },  { xPct: 33.45, yPct: 73.64 },  { xPct: 76.11, yPct: 74.34 },
  { xPct: 38.42, yPct: 76.13 },  { xPct: 66.98, yPct: 77.17 },  { xPct: 22.03, yPct: 79.94 },
  { xPct: 78.75, yPct: 79.94 },  { xPct: 52.23, yPct: 80.98 },  { xPct: 42.78, yPct: 82.63 },
  { xPct: 28.87, yPct: 82.63 },  { xPct: 69.99, yPct: 84.09 },  { xPct: 15.58, yPct: 86.72 },
  { xPct: 55.45, yPct: 86.72 },  { xPct: 46.86, yPct: 89.28 },  { xPct: 73.21, yPct: 90.04 },
  { xPct: 24.50, yPct: 90.93 },  { xPct: 31.48, yPct: 92.59 },  { xPct: 59.00, yPct: 93.55 },
  { xPct: 11.43, yPct: 95.84 },
];

type Status = "won" | "quoted" | "in_talks" | "contacted" | "nurture" | "said_no";

type IconProps = { className?: string; strokeWidth?: number; style?: React.CSSProperties };

const STATUS_META: Record<Status, {
  label: string;
  short: string;
  Icon: React.ComponentType<IconProps>;
  bg: string;        // marker fill
  ringClass: string; // tailwind for animation/ring
  textColor: string; // for tooltip status header
  pillBg: string;    // for stats card icon bg
  pillText: string;
}> = {
  won:       { label: "Won",          short: "won",       Icon: CheckCircle2,  bg: "linear-gradient(135deg, #10B981, #059669)",  ringClass: "bg-emerald-500/25", textColor: "#10B981", pillBg: "bg-emerald-50",  pillText: "text-emerald-700" },
  quoted:    { label: "Quoted",       short: "quoted",    Icon: FileText,      bg: "linear-gradient(135deg, #3B82F6, #1D4ED8)",  ringClass: "bg-blue-500/20",    textColor: "#3B82F6", pillBg: "bg-blue-50",     pillText: "text-blue-700" },
  in_talks:  { label: "In talks",     short: "in talks",  Icon: MessageSquare, bg: "linear-gradient(135deg, #C5A44E, #8B6F2A)",  ringClass: "bg-gold/30",        textColor: "#C5A44E", pillBg: "bg-gold/10",     pillText: "text-gold-deep" },
  contacted: { label: "Contacted",    short: "contacted", Icon: Send,          bg: "linear-gradient(135deg, #64748B, #475569)",  ringClass: "",                  textColor: "#94A3B8", pillBg: "bg-slate-100",   pillText: "text-slate-700" },
  nurture:   { label: "6mo nurture",  short: "nurture",   Icon: Clock,         bg: "linear-gradient(135deg, #F59E0B, #B45309)",  ringClass: "",                  textColor: "#F59E0B", pillBg: "bg-amber-50",    pillText: "text-amber-700" },
  said_no:   { label: "Declined",     short: "said no",   Icon: XCircle,       bg: "linear-gradient(135deg, #94A3B8, #64748B)",  ringClass: "",                  textColor: "#94A3B8", pillBg: "bg-rose-50",     pillText: "text-rose-700" },
};

// Realistic Sunshine Coast roofing values
const WON_VALUES = [4900, 5800, 6200, 4500, 8400, 5400, 11800, 7200];
const QUOTE_VALUES = [5300, 4700, 9600, 5100, 6800, 14200, 4800, 4500];

const STREETS = ["Outlook Dr", "St Andrews Dr", "Cooroibah Cct", "Bryan St", "Banksia Dr"];

// Deterministic pseudo-random
const seedRand = (s: number) => {
  const x = Math.sin(s * 9301 + 49297) * 233280;
  return x - Math.floor(x);
};

type DotData = {
  xPct: number;
  yPct: number;
  status: Status;
  value?: number;       // for won + quoted
  address: string;
  daysAgo?: number;     // for contacted/nurture
};

const buildDots = (): DotData[] => {
  let wonIdx = 0;
  let quotedIdx = 0;
  let houseNum = 3;

  return DOTS.map((d, i) => {
    const r = seedRand(i + 1);
    let status: Status;
    let value: number | undefined;
    let daysAgo: number | undefined;

    if (r < 0.10) {
      status = "won";
      value = WON_VALUES[wonIdx % WON_VALUES.length];
      wonIdx++;
    } else if (r < 0.20) {
      status = "quoted";
      value = QUOTE_VALUES[quotedIdx % QUOTE_VALUES.length];
      quotedIdx++;
    } else if (r < 0.34) {
      status = "in_talks";
    } else if (r < 0.68) {
      status = "contacted";
      daysAgo = Math.floor(seedRand(i + 50) * 10) + 1;
    } else if (r < 0.85) {
      status = "nurture";
      daysAgo = Math.floor(seedRand(i + 70) * 30) + 5;
    } else {
      status = "said_no";
    }

    const street = STREETS[Math.floor(seedRand(i + 100) * STREETS.length)];
    houseNum += 2 + Math.floor(seedRand(i + 200) * 4);

    return {
      xPct: d.xPct,
      yPct: d.yPct,
      status,
      value,
      address: `${houseNum} ${street}`,
      daysAgo,
    };
  });
};

export default function CoverageMap() {
  const dots = useMemo(() => buildDots(), []);
  const [hovered, setHovered] = useState<number | null>(null);

  // Compute counts
  const counts = dots.reduce<Record<Status, number>>(
    (acc, d) => {
      acc[d.status]++;
      return acc;
    },
    { won: 0, quoted: 0, in_talks: 0, contacted: 0, nurture: 0, said_no: 0 },
  );

  const bookedRevenue = dots.filter(d => d.status === "won").reduce((s, d) => s + (d.value || 0), 0);
  const openPipeline  = dots.filter(d => d.status === "quoted").reduce((s, d) => s + (d.value || 0), 0);
  // Estimate from in_talks (~30% close rate × $7K avg deal)
  const projectedNext30d = Math.round(counts.in_talks * 7000 * 0.30 / 1000) * 1000;
  // Estimate from nurture (~20% close × $7K avg over 6 months)
  const projected6mo = Math.round(counts.nurture * 7000 * 0.20 / 1000) * 1000;

  return (
    <div className="relative">
      {/* Header */}
      <div className="px-4 sm:px-6 py-3 sm:py-4 border-b border-ink/[0.06] bg-fog-soft/30">
        <div className="text-[9px] sm:text-[10px] uppercase tracking-wider text-ink/40 font-bold">
          Territory · Outlook Dr, Tewantin QLD
        </div>
        <div className="font-display text-[13px] sm:text-[16px] font-extrabold tracking-tight mt-0.5">
          {dots.length} houses · {counts.won} won · ${(bookedRevenue / 1000).toFixed(1)}K booked
        </div>
      </div>

      {/* Revenue summary strip */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-ink/[0.06] border-b border-ink/[0.06]">
        <RevenueCell label="Booked" sublabel={`${counts.won} jobs won`} value={`$${(bookedRevenue / 1000).toFixed(1)}K`} accent="emerald" />
        <RevenueCell label="Open quotes" sublabel={`${counts.quoted} awaiting`} value={`$${(openPipeline / 1000).toFixed(1)}K`} accent="blue" />
        <RevenueCell label="Likely · 30d" sublabel={`${counts.in_talks} active`} value={`~$${(projectedNext30d / 1000).toFixed(0)}K`} accent="gold" />
        <RevenueCell label="Likely · 6mo" sublabel={`${counts.nurture} on follow-up`} value={`~$${(projected6mo / 1000).toFixed(0)}K`} accent="amber" />
      </div>

      {/* Map: static satellite + branded markers + annotation callouts */}
      <CoverageCanvas dots={dots} hovered={hovered} setHovered={setHovered} />


      {/* Status breakdown grid — 6 cells showing every house's state */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-px bg-ink/[0.06] border-t border-ink/[0.06]">
        {(Object.keys(STATUS_META) as Status[]).map((s) => (
          <StatusCell
            key={s}
            status={s}
            count={counts[s]}
            total={dots.length}
          />
        ))}
      </div>

      {/* Footer */}
      <div className="px-4 sm:px-6 py-3 border-t border-ink/[0.06] bg-fog-soft/15 flex items-center justify-between flex-wrap gap-2 text-[9px] sm:text-[10px] text-ink/55">
        <span>
          {dots.length} houses · refreshes nightly · 03:00 AEST
        </span>
        <span className="font-bold text-ink/75">
          {Math.round((counts.won / dots.length) * 100)}% closed · {Math.round(((counts.won + counts.quoted + counts.in_talks) / dots.length) * 100)}% in pipeline
        </span>
      </div>
    </div>
  );
}

/* ───────────────────────  CANVAS (image + markers + annotation callouts)  ─────────────────────── */

type CalloutSpec = {
  key: string;
  corner: "tl" | "tr" | "bl" | "br";
  anchor: DotData;
  status: Status;
  title: string;
  body: string;
};

function CoverageCanvas({
  dots,
  hovered,
  setHovered,
}: {
  dots: DotData[];
  hovered: number | null;
  setHovered: (n: number | null) => void;
}) {
  // Find an anchor dot for each corner with a sensible status
  const callouts = useMemo<CalloutSpec[]>(() => {
    const findOne = (
      pred: (d: DotData) => boolean,
      region: { xMin?: number; xMax?: number; yMin?: number; yMax?: number },
    ) =>
      dots.find(
        (d) =>
          pred(d) &&
          (region.xMin === undefined || d.xPct >= region.xMin) &&
          (region.xMax === undefined || d.xPct <= region.xMax) &&
          (region.yMin === undefined || d.yPct >= region.yMin) &&
          (region.yMax === undefined || d.yPct <= region.yMax),
      );

    const specs: CalloutSpec[] = [];

    // Top-left: a Won job
    const tl = findOne((d) => d.status === "won", { xMax: 50, yMax: 35 });
    if (tl) {
      specs.push({
        key: "tl",
        corner: "tl",
        anchor: tl,
        status: "won",
        title: "Job won",
        body: `${tl.address} · $${((tl.value || 0) / 1000).toFixed(1)}K · paid`,
      });
    }

    // Top-right: an active conversation
    const tr = findOne((d) => d.status === "in_talks", { xMin: 50, yMax: 35 });
    if (tr) {
      specs.push({
        key: "tr",
        corner: "tr",
        anchor: tr,
        status: "in_talks",
        title: "In talks now",
        body: `${tr.address} · drafting quote`,
      });
    }

    // Bottom-left: outreach sent recently
    const bl = findOne((d) => d.status === "contacted", { xMax: 50, yMin: 60 });
    if (bl) {
      specs.push({
        key: "bl",
        corner: "bl",
        anchor: bl,
        status: "contacted",
        title: "Outreach sent",
        body: `${bl.address} · ${bl.daysAgo}d ago, no reply yet`,
      });
    }

    // Bottom-right: nurture follow-up
    const br = findOne((d) => d.status === "nurture", { xMin: 50, yMin: 60 });
    if (br) {
      specs.push({
        key: "br",
        corner: "br",
        anchor: br,
        status: "nurture",
        title: "6mo nurture",
        body: `${br.address} · re-engage in ${br.daysAgo}d`,
      });
    }

    return specs;
  }, [dots]);

  // Real-pixel viewBox matches the image
  const VB_W = 2794;
  const VB_H = 1446;

  // Each corner's "exit point" — where the arrow leaves the callout box
  const exitFor = (corner: "tl" | "tr" | "bl" | "br") => {
    if (corner === "tl") return { x: 17, y: 13 };
    if (corner === "tr") return { x: 83, y: 13 };
    if (corner === "bl") return { x: 17, y: 87 };
    return { x: 83, y: 87 };
  };

  return (
    <div className="relative bg-ink select-none" style={{ aspectRatio: `${VB_W} / ${VB_H}` }}>
      <img
        src="/images/coverage.png"
        alt="Tewantin coverage area"
        className="absolute inset-0 w-full h-full object-cover"
        draggable={false}
      />

      {/* Markers layer */}
      {dots.map((dot, i) => (
        <Marker
          key={i}
          dot={dot}
          isHovered={hovered === i}
          onEnter={() => setHovered(i)}
          onLeave={() => setHovered(null)}
        />
      ))}

      {/* Annotation arrows — desktop only, hidden on mobile to keep map clean */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none hidden sm:block"
        viewBox={`0 0 ${VB_W} ${VB_H}`}
        preserveAspectRatio="none"
      >
        {callouts.map((c, i) => {
          const exit = exitFor(c.corner);
          // Convert pct to viewBox px
          const sx = (exit.x / 100) * VB_W;
          const sy = (exit.y / 100) * VB_H;
          const ex = (c.anchor.xPct / 100) * VB_W;
          const ey = (c.anchor.yPct / 100) * VB_H;

          // Quadratic curve mid-point: bend slightly toward map centre
          const cx = (sx + ex) / 2 + (c.corner.endsWith("l") ? 60 : -60);
          const cy = (sy + ey) / 2 + (c.corner.startsWith("t") ? 60 : -60);

          // Arrowhead direction at end (anchor): vector from control point to end
          const dx = ex - cx;
          const dy = ey - cy;
          const len = Math.sqrt(dx * dx + dy * dy) || 1;
          const ux = dx / len;
          const uy = dy / len;
          // Pull arrowhead back from the anchor by 18px so it sits next to the marker
          const headBase = 22;
          const ax = ex - ux * headBase;
          const ay = ey - uy * headBase;
          // Perpendicular for arrowhead "wings"
          const px = -uy * 10;
          const py = ux * 10;

          return (
            <g key={c.key}>
              <motion.path
                d={`M ${sx} ${sy} Q ${cx} ${cy} ${ax} ${ay}`}
                stroke="#C5A44E"
                strokeWidth="3.5"
                strokeDasharray="10 12"
                fill="none"
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.9, delay: 0.3 + i * 0.15, ease: [0.16, 1, 0.3, 1] }}
              />
              {/* Arrowhead */}
              <motion.path
                d={`M ${ax + px} ${ay + py} L ${ex - ux * 6} ${ey - uy * 6} L ${ax - px} ${ay - py}`}
                stroke="#C5A44E"
                strokeWidth="3.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.2, delay: 1.2 + i * 0.15 }}
              />
            </g>
          );
        })}
      </svg>

      {/* Annotation text boxes — desktop only */}
      <div className="hidden sm:block">
        {callouts.map((c, i) => (
          <CalloutBox key={c.key} spec={c} delay={i * 0.15} />
        ))}
      </div>

      {/* Mobile-only compact label so the map is still self-describing */}
      <div className="sm:hidden absolute top-2 left-2 bg-ink/90 backdrop-blur px-2 py-1 rounded-md shadow-md border border-fog-soft/10 pointer-events-none">
        <div className="text-[8px] uppercase tracking-wider font-bold text-gold/85 leading-none">Coverage</div>
        <div className="font-display text-[10px] font-extrabold text-fog-soft leading-tight mt-0.5">Outlook Dr · Tewantin</div>
      </div>

      {/* Attribution */}
      <div className="absolute bottom-1.5 right-2 z-10 text-[8px] text-fog-soft/50 pointer-events-none">
        Imagery © Google · Wolf Partners scan
      </div>
    </div>
  );
}

function CalloutBox({ spec, delay }: { spec: CalloutSpec; delay: number }) {
  const meta = STATUS_META[spec.status];
  const cornerClass = {
    tl: "top-3 left-3",
    tr: "top-3 right-3",
    bl: "bottom-8 left-3",
    br: "bottom-8 right-3",
  }[spec.corner];

  return (
    <motion.div
      initial={{ opacity: 0, y: -4 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, delay }}
      className={`absolute ${cornerClass} z-20 bg-ink/92 backdrop-blur px-3 py-2 rounded-md shadow-lg border border-fog-soft/10 pointer-events-none max-w-[44%]`}
    >
      <div className="flex items-center gap-1.5 mb-0.5">
        <meta.Icon className="w-3 h-3" strokeWidth={2.5} style={{ color: meta.textColor }} />
        <div
          className="text-[9px] uppercase tracking-wider font-bold leading-none"
          style={{ color: meta.textColor }}
        >
          {spec.title}
        </div>
      </div>
      <div className="font-display text-[12px] sm:text-[13px] font-extrabold text-fog-soft leading-tight">
        {spec.body}
      </div>
    </motion.div>
  );
}

/* ───────────────────────  MARKER  ─────────────────────── */

function Marker({
  dot,
  isHovered,
  onEnter,
  onLeave,
}: {
  dot: DotData;
  isHovered: boolean;
  onEnter: () => void;
  onLeave: () => void;
}) {
  const meta = STATUS_META[dot.status];

  // Sizing by status importance
  const isPrime = dot.status === "won" || dot.status === "quoted";
  const isMid = dot.status === "in_talks";
  const sizeClass = isPrime
    ? "w-3 h-3 sm:w-3.5 sm:h-3.5"
    : isMid
    ? "w-2.5 h-2.5 sm:w-3 sm:h-3"
    : "w-2 h-2 sm:w-2.5 sm:h-2.5";

  const baseStyle: React.CSSProperties = {
    position: "absolute",
    left: `${dot.xPct}%`,
    top: `${dot.yPct}%`,
    transform: "translate(-50%, -50%)",
    zIndex: isHovered ? 30 : isPrime ? 20 : isMid ? 15 : 10,
  };

  return (
    <div
      style={baseStyle}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      className="cursor-pointer"
    >
      {/* Animation ring for prime + active */}
      {(isPrime || isMid) && meta.ringClass && (
        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-7 h-7 rounded-full ${meta.ringClass} wp-pulse pointer-events-none`} />
      )}

      {/* The square */}
      <div
        className={`relative ${sizeClass} rounded-[3px] border-[1.5px] border-white shadow-md transition-transform ${isHovered ? "scale-150" : ""}`}
        style={{ background: meta.bg }}
      />

      {/* Always-visible value label for won + quoted */}
      {isPrime && dot.value && (
        <div className="absolute left-1/2 -translate-x-1/2 -top-5 sm:-top-6 px-1.5 py-[2px] rounded bg-ink text-[8px] sm:text-[9px] font-extrabold tabular whitespace-nowrap shadow-md pointer-events-none"
             style={{ color: dot.status === "won" ? "#A7F3D0" : "#BFDBFE" }}>
          {dot.status === "quoted" ? "Q " : ""}${(dot.value / 1000).toFixed(1)}K
        </div>
      )}

      {/* Hover tooltip */}
      {isHovered && <Tooltip dot={dot} />}
    </div>
  );
}

function Tooltip({ dot }: { dot: DotData }) {
  const meta = STATUS_META[dot.status];
  return (
    <motion.div
      initial={{ opacity: 0, y: 4 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.12 }}
      className="absolute left-1/2 -translate-x-1/2 -top-2 -translate-y-full bg-ink rounded-lg shadow-xl px-3 py-2 pointer-events-none whitespace-nowrap"
      style={{ minWidth: 150, border: "1px solid rgba(232, 216, 154, 0.3)" }}
    >
      <div className="flex items-center gap-1.5 mb-0.5">
        <meta.Icon className="w-3 h-3" strokeWidth={2.5} style={{ color: meta.textColor }} />
        <div
          className="text-[9px] uppercase tracking-wider font-bold"
          style={{ color: meta.textColor }}
        >
          {meta.label}
        </div>
      </div>
      <div className="text-[12px] font-extrabold text-fog-soft leading-tight">
        {dot.address} · Tewantin
      </div>
      {dot.value && (
        <div className="text-[13px] font-extrabold tabular leading-tight mt-1"
             style={{ color: dot.status === "won" ? "#A7F3D0" : "#BFDBFE" }}>
          ${dot.value.toLocaleString()}
        </div>
      )}
      {dot.daysAgo !== undefined && (
        <div className="text-[10px] text-fog-soft/60 mt-1">
          {dot.status === "contacted"
            ? `Outreach sent ${dot.daysAgo} day${dot.daysAgo === 1 ? "" : "s"} ago`
            : `Follow-up in ${dot.daysAgo} days`}
        </div>
      )}
    </motion.div>
  );
}

/* ───────────────────────  CARDS  ─────────────────────── */

function RevenueCell({
  label,
  sublabel,
  value,
  accent,
}: {
  label: string;
  sublabel: string;
  value: string;
  accent: "emerald" | "blue" | "gold" | "amber";
}) {
  const accentColor = {
    emerald: "text-emerald-700",
    blue: "text-blue-700",
    gold: "text-gold-deep",
    amber: "text-amber-700",
  }[accent];

  return (
    <div className="bg-white p-3 sm:p-4">
      <div className="text-[9px] sm:text-[10px] uppercase tracking-wider text-ink/40 font-bold leading-tight">
        {label}
      </div>
      <div className={`font-display text-[18px] sm:text-[26px] font-extrabold tabular leading-none mt-1 sm:mt-1.5 ${accentColor}`}>
        {value}
      </div>
      <div className="text-[9px] sm:text-[10px] text-ink/45 mt-1 sm:mt-1.5">{sublabel}</div>
    </div>
  );
}

function StatusCell({
  status,
  count,
  total,
}: {
  status: Status;
  count: number;
  total: number;
}) {
  const meta = STATUS_META[status];
  const pct = total > 0 ? Math.round((count / total) * 100) : 0;

  return (
    <div className="bg-white p-3 sm:p-3.5 flex items-center gap-2 sm:gap-3">
      <div className={`w-6 h-6 sm:w-7 sm:h-7 rounded-md ${meta.pillBg} ${meta.pillText} flex items-center justify-center shrink-0`}>
        <meta.Icon className="w-3 h-3 sm:w-3.5 sm:h-3.5" strokeWidth={2} />
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-baseline gap-1.5">
          <div className="font-display text-[16px] sm:text-[20px] font-extrabold tabular leading-none">
            {count}
          </div>
          <div className="text-[9px] sm:text-[10px] text-ink/40 tabular">·  {pct}%</div>
        </div>
        <div className="text-[9px] sm:text-[10px] uppercase tracking-wider text-ink/55 font-bold mt-0.5 leading-tight">
          {meta.label}
        </div>
      </div>
    </div>
  );
}
