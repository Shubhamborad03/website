"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

// Edge measurement labels — each has the text, a position for the badge, and a small connector
// arrow pointing to the actual edge being measured
type EdgeMeasure = {
  text: string;
  side: "top" | "right" | "bottom" | "left";
  // badge position (xPct, yPct of the image)
  bx: number;
  by: number;
  // the edge midpoint where the arrow lands (xPct, yPct)
  ex: number;
  ey: number;
};

const EDGE_MEASURES: EdgeMeasure[] = [
  { text: "21.6m", side: "top",    bx: 50, by: 6,  ex: 50, ey: 16 },
  { text: "11.2m", side: "right",  bx: 95, by: 50, ex: 92, ey: 50 },
  { text: "9.4m",  side: "bottom", bx: 50, by: 96, ex: 50, ey: 88 },
  { text: "11.0m", side: "left",   bx: 5,  by: 50, ex: 8,  ey: 50 },
];

// Damage callouts — pinned to actual visible damage zones in the photo
type Damage = {
  label: string;
  // the damage spot (xPct, yPct of image)
  tx: number;
  ty: number;
  // where the badge sits (xPct, yPct of image)
  bx: number;
  by: number;
};

const DAMAGE_CALLOUTS: Damage[] = [
  { label: "Replaced sheet · mismatched colour", tx: 48, ty: 47, bx: 18, by: 30 },
  { label: "Surface rust · north pitch",         tx: 76, ty: 33, bx: 88, by: 22 },
  { label: "Gutter sag · front fascia",          tx: 22, ty: 76, bx: 12, by: 88 },
];

const DETAIL_IMAGES = [
  { img: "/images/before-1.png", label: "ROOF AGE & MOSS",  issue: "Heavy moss · ~28yr tile",     measure: "218m²", point: { x: 48, y: 42 } },
  { img: "/images/before-2.png", label: "STORM DAMAGE",     issue: "Hail-impact zone · north",    measure: "184m²", point: { x: 60, y: 38 } },
  { img: "/images/before-4.png", label: "SURFACE WEAR",     issue: "Coating breakdown",           measure: "145m²", point: { x: 50, y: 45 } },
];

export default function SatelliteQuoteDemo() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-20%" });

  return (
    <section
      id="satellite"
      ref={ref}
      className="relative py-20 lg:py-28"
    >
      <div className="max-w-5xl mx-auto px-5 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-10 lg:mb-14"
        >
          <div className="text-[11px] uppercase tracking-wider text-gold-deep font-bold mb-4">
            01 — How AI reads your customer's roof
          </div>
          <h2 className="font-display text-[36px] sm:text-[56px] lg:text-[72px] leading-[1.0] tracking-[-0.03em] font-extrabold max-w-3xl mx-auto">
            Every edge.
            <br />
            <span className="text-graphite">Every issue.</span>
          </h2>
        </motion.div>

        {/* Main scan — viewfinder + edge arrows + damage callouts */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="rounded-2xl overflow-hidden shadow-[0_40px_80px_-20px_rgba(10,10,10,0.18)] border border-ink/[0.08]"
        >
          <div className="relative aspect-[16/10]">
            <Image
              src="/images/before-3.png"
              alt="Aerial roof scan"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 1024px"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/25" />

            {/* SVG layer for viewfinder + arrows — all coords in % via 0-100 viewBox */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
            >
              {/* Viewfinder corner brackets */}
              <ViewfinderCorners inView={inView} />

              {/* Animated horizontal scan line */}
              <ScanLine inView={inView} />

              {/* Center crosshair */}
              <Crosshair inView={inView} cx={50} cy={50} />

              {/* Edge-measurement arrows */}
              {EDGE_MEASURES.map((m, i) => (
                <motion.g
                  key={`em-${i}`}
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : {}}
                  transition={{ duration: 0.4, delay: 1.5 + i * 0.15 }}
                >
                  <line
                    x1={m.bx}
                    y1={m.by}
                    x2={m.ex}
                    y2={m.ey}
                    stroke="#C5A44E"
                    strokeWidth="0.3"
                    strokeDasharray="0.8 0.8"
                    vectorEffect="non-scaling-stroke"
                  />
                </motion.g>
              ))}

              {/* Damage callout connector lines */}
              {DAMAGE_CALLOUTS.map((d, i) => (
                <motion.g
                  key={`dc-${i}`}
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : {}}
                  transition={{ duration: 0.4, delay: 2.0 + i * 0.15 }}
                >
                  <line
                    x1={d.bx}
                    y1={d.by}
                    x2={d.tx}
                    y2={d.ty}
                    stroke="#C5A44E"
                    strokeWidth="0.3"
                    strokeDasharray="0.8 0.8"
                    vectorEffect="non-scaling-stroke"
                  />
                  {/* Target dot at damage spot */}
                  <circle cx={d.tx} cy={d.ty} r="0.6" fill="#C5A44E" />
                  <circle cx={d.tx} cy={d.ty} r="1.4" fill="none" stroke="#C5A44E" strokeWidth="0.2" opacity="0.5" />
                </motion.g>
              ))}
            </svg>

            {/* Edge measurement labels (HTML for crisp text) */}
            {EDGE_MEASURES.map((m, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ delay: 1.3 + i * 0.15, duration: 0.4 }}
                className="absolute"
                style={{
                  left: `${m.bx}%`,
                  top: `${m.by}%`,
                  transform: "translate(-50%, -50%)",
                }}
              >
                <div className="px-2 py-0.5 rounded-md bg-ink border border-gold/50 text-[10px] sm:text-[11px] font-bold text-gold tabular whitespace-nowrap">
                  {m.text}
                </div>
              </motion.div>
            ))}

            {/* Damage labels — text with arrow connector to the spot */}
            {DAMAGE_CALLOUTS.map((d, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: -4 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 1.8 + i * 0.15, duration: 0.4 }}
                className="absolute"
                style={{
                  left: `${d.bx}%`,
                  top: `${d.by}%`,
                  transform: "translate(-50%, -50%)",
                }}
              >
                <div className="px-2.5 py-1 rounded-md bg-ink/85 backdrop-blur border border-gold/40 text-[10px] sm:text-[11px] font-bold text-gold whitespace-nowrap">
                  {d.label}
                </div>
              </motion.div>
            ))}

            {/* Top tag — address */}
            <div className="absolute top-4 left-4 px-2.5 py-1 rounded-full bg-ink/70 backdrop-blur border border-fog-soft/15 text-[11px] font-medium text-fog-soft">
              12 Sunrise Beach Rd
            </div>

            {/* Top right — scan complete */}
            <div className="absolute top-4 right-4 px-2.5 py-1 rounded-full bg-gold text-ink text-[10px] font-bold uppercase tracking-wider flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 rounded-full bg-ink pulse-live" />
              Scanned · 4.2s
            </div>
          </div>
        </motion.div>

        {/* Three big stats — what AI extracted */}
        <div className="mt-12 grid grid-cols-3 gap-6 lg:gap-12 max-w-3xl mx-auto">
          {[
            { v: "184", l: "square metres", u: "m²" },
            { v: "12",  l: "edges measured", u: "" },
            { v: "3",   l: "issues flagged", u: "" },
          ].map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center"
            >
              <div className="font-display text-[40px] sm:text-[64px] font-extrabold tabular leading-none">
                {s.v}
                {s.u && <span className="text-[18px] sm:text-[28px] text-ink/45 ml-1">{s.u}</span>}
              </div>
              <div className="text-[11px] sm:text-[13px] text-ink/50 mt-2 sm:mt-3">{s.l}</div>
            </motion.div>
          ))}
        </div>

        {/* Detail cards — viewfinder + crosshair + single arrow to damage point */}
        <div className="mt-16 lg:mt-20">
          <div className="text-[11px] uppercase tracking-wider text-gold-deep font-bold text-center mb-6">
            Three more roofs scanned today
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {DETAIL_IMAGES.map((card, i) => (
              <DetailCard key={i} card={card} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────  VIEWFINDER ELEMENTS  ─────────────────────── */

function ViewfinderCorners({ inView, inset = 4, length = 6 }: { inView: boolean; inset?: number; length?: number }) {
  // Corner brackets — top-left, top-right, bottom-left, bottom-right
  // Coordinates in 0-100 viewBox
  return (
    <motion.g
      initial={{ opacity: 0, scale: 0.92 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
      stroke="#C5A44E"
      strokeWidth="0.5"
      strokeLinecap="round"
      vectorEffect="non-scaling-stroke"
      fill="none"
    >
      {/* Top-left */}
      <path d={`M ${inset} ${inset + length} L ${inset} ${inset} L ${inset + length} ${inset}`} />
      {/* Top-right */}
      <path d={`M ${100 - inset - length} ${inset} L ${100 - inset} ${inset} L ${100 - inset} ${inset + length}`} />
      {/* Bottom-left */}
      <path d={`M ${inset} ${100 - inset - length} L ${inset} ${100 - inset} L ${inset + length} ${100 - inset}`} />
      {/* Bottom-right */}
      <path d={`M ${100 - inset - length} ${100 - inset} L ${100 - inset} ${100 - inset} L ${100 - inset} ${100 - inset - length}`} />
    </motion.g>
  );
}

function ScanLine({ inView }: { inView: boolean }) {
  return (
    <motion.line
      x1={0}
      x2={100}
      stroke="#C5A44E"
      strokeWidth="0.4"
      strokeOpacity="0.7"
      vectorEffect="non-scaling-stroke"
      initial={{ y1: 8, y2: 8, opacity: 0 }}
      animate={
        inView
          ? {
              y1: [8, 92, 8],
              y2: [8, 92, 8],
              opacity: [0, 0.7, 0.7, 0],
            }
          : {}
      }
      transition={{ duration: 2.5, delay: 0.6, times: [0, 0.45, 0.55, 1], ease: "easeInOut" }}
    />
  );
}

function Crosshair({ inView, cx, cy }: { inView: boolean; cx: number; cy: number }) {
  const arm = 4;
  const gap = 1.5;
  return (
    <motion.g
      initial={{ opacity: 0, scale: 0.5 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.4, delay: 1.0, ease: [0.16, 1, 0.3, 1] }}
      stroke="#C5A44E"
      strokeWidth="0.4"
      strokeLinecap="round"
      vectorEffect="non-scaling-stroke"
      fill="none"
    >
      {/* Outer ring */}
      <circle cx={cx} cy={cy} r={arm * 0.9} fill="rgba(197,164,78,0.08)" stroke="#C5A44E" strokeOpacity="0.6" />
      {/* Crosshair arms */}
      <line x1={cx - arm} y1={cy} x2={cx - gap} y2={cy} />
      <line x1={cx + gap} y1={cy} x2={cx + arm} y2={cy} />
      <line x1={cx} y1={cy - arm} x2={cx} y2={cy - gap} />
      <line x1={cx} y1={cy + gap} x2={cx} y2={cy + arm} />
      {/* Center dot */}
      <circle cx={cx} cy={cy} r="0.5" fill="#C5A44E" stroke="none" />
    </motion.g>
  );
}

/* ───────────────────────  DETAIL CARD  ─────────────────────── */

function DetailCard({ card, index }: { card: typeof DETAIL_IMAGES[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  // Arrow goes from the bottom-right corner badge area to the damage point
  // We aim for a curved dashed arrow ending in a small triangle
  const startX = 80;
  const startY = 88;
  const endX = card.point.x;
  const endY = card.point.y;
  const midX = (startX + endX) / 2 + 8;
  const midY = (startY + endY) / 2 - 5;

  // Arrowhead direction at end
  const dx = endX - midX;
  const dy = endY - midY;
  const len = Math.sqrt(dx * dx + dy * dy) || 1;
  const ux = dx / len;
  const uy = dy / len;
  const headBack = 1.6;
  const ax = endX - ux * headBack;
  const ay = endY - uy * headBack;
  const px = -uy * 0.9;
  const py = ux * 0.9;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="rounded-xl overflow-hidden border border-ink/[0.08] bg-white"
    >
      <div className="relative aspect-[4/3]">
        <Image
          src={card.img}
          alt={card.issue}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/20" />

        <svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          {/* Viewfinder brackets */}
          <ViewfinderCorners inView={inView} inset={3.5} length={5} />

          {/* Animated scan line */}
          <ScanLine inView={inView} />

          {/* Center crosshair */}
          <Crosshair inView={inView} cx={card.point.x} cy={card.point.y} />

          {/* Curved dashed arrow from corner badge area to damage point */}
          <motion.path
            d={`M ${startX} ${startY} Q ${midX} ${midY} ${ax} ${ay}`}
            stroke="#C5A44E"
            strokeWidth="0.5"
            strokeDasharray="1.2 1.2"
            fill="none"
            strokeLinecap="round"
            vectorEffect="non-scaling-stroke"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={inView ? { pathLength: 1, opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          />
          {/* Arrowhead */}
          <motion.path
            d={`M ${ax + px} ${ay + py} L ${endX - ux * 0.4} ${endY - uy * 0.4} L ${ax - px} ${ay - py}`}
            stroke="#C5A44E"
            strokeWidth="0.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            vectorEffect="non-scaling-stroke"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.2, delay: 1.4 }}
          />
        </svg>

        {/* Top label */}
        <div className="absolute top-2 left-2 px-2 py-0.5 rounded-full bg-ink/70 backdrop-blur text-[9px] font-bold uppercase tracking-wider text-gold">
          {card.label}
        </div>

        {/* Bottom strip — issue + measurement */}
        <div className="absolute bottom-2 left-2 right-2 flex items-end justify-between">
          <div className="text-[11px] sm:text-[12px] font-bold text-fog-soft leading-tight max-w-[180px]">
            {card.issue}
          </div>
          <div className="px-2 py-0.5 rounded-md bg-ink/85 backdrop-blur border border-gold/40 text-[10px] font-bold tabular text-gold whitespace-nowrap">
            {card.measure}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
