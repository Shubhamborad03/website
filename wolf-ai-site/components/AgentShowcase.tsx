"use client";

import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { HeroCallVisual } from "@/components/voice/VoiceVisuals";
import { HeroScanVisual } from "@/components/leadgen/LeadGenVisuals";
import { HeroInboxVisual } from "@/components/inbound/InboundVisuals";
import { HeroMultiplyVisual } from "@/components/content/ContentVisuals";
import { HeroDashVisual } from "@/components/opsoftware/OpsVisuals";
import { HeroProposalVisual } from "@/components/quote/QuoteVisuals";

const ease = [0.16, 1, 0.3, 1] as const;

/* Homepage hero: all six automations running at once, three above and three below.
   Each box renders the SAME live animation used in that automation's feature row
   below (and on its own agent page), scaled to fit. The grid measures its own
   width and sizes the boxes responsively — three columns on desktop, two on mobile. */

type Mini = {
  key: string;
  href: string;
  name: string;
  natW: number; // natural design width of the visual, so it can be scaled to the box
  Visual: () => React.ReactElement;
};

const MINIS: Mini[] = [
  { key: "voice", href: "/agents/voice", name: "Voice Agents", natW: 420, Visual: HeroCallVisual },
  { key: "leadgen", href: "/agents/lead-gen", name: "Lead Generation", natW: 440, Visual: HeroScanVisual },
  { key: "inbound", href: "/agents/inbound-outbound", name: "Inbound & Out", natW: 440, Visual: HeroInboxVisual },
  { key: "content", href: "/agents/content-ads", name: "Content & Ads", natW: 440, Visual: HeroMultiplyVisual },
  { key: "ops", href: "/agents/operating-software", name: "Operating SW", natW: 440, Visual: HeroDashVisual },
  { key: "quote", href: "/agents/quote-proposals", name: "Quote & Proposals", natW: 440, Visual: HeroProposalVisual },
];

function MiniCard({ m, i, cellW, cellH }: { m: Mini; i: number; cellW: number; cellH: number }) {
  const { Visual } = m;
  const scale = cellW / m.natW;
  return (
    <motion.a
      href={m.href}
      initial={{ opacity: 0, y: 14, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.6, ease, delay: i * 0.09 }}
      style={{ height: cellH }}
      className="group relative block w-full rounded-[20px] bg-white border border-line overflow-hidden shadow-[0_1px_2px_rgba(11,13,18,.04),0_10px_24px_-16px_rgba(11,13,18,.22)] hover:shadow-[0_2px_6px_rgba(11,13,18,.07),0_20px_40px_-18px_rgba(59,134,255,.4)] transition-shadow"
    >
      {/* exact same animation as the feature row below, scaled into the box */}
      <div
        className="origin-top-left pointer-events-none select-none"
        style={{ width: m.natW, transform: `scale(${scale})` }}
        aria-hidden
      >
        <Visual />
      </div>

      {/* fade so the label sits cleanly over the animation */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-14 bg-gradient-to-t from-white via-white/85 to-transparent" />
      <div className="absolute left-2.5 bottom-2.5 z-10">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-white/85 backdrop-blur-sm border border-line px-2.5 py-1 text-[10px] font-semibold text-ink">
          <span className="w-1 h-1 rounded-full bg-blue pulse-live" />
          {m.name}
        </span>
      </div>
    </motion.a>
  );
}

const GAP = 16;

export default function AgentShowcase() {
  const ref = useRef<HTMLDivElement>(null);
  const [cols, setCols] = useState(3);
  const [cellW, setCellW] = useState(258);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const compute = () => {
      const w = el.clientWidth;
      const c = w < 560 ? 2 : 3;
      setCols(c);
      setCellW(Math.floor((w - GAP * (c - 1)) / c));
    };
    compute();
    const ro = new ResizeObserver(compute);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const cellH = Math.round(cellW * 1.2);

  return (
    <div ref={ref} className="relative w-full">
      <div
        className="pointer-events-none absolute -inset-10 -z-10"
        style={{ background: "radial-gradient(ellipse 52% 52% at 50% 46%, rgba(59,134,255,.16), transparent 70%)" }}
      />
      <div className="grid gap-4" style={{ gridTemplateColumns: `repeat(${cols}, minmax(0,1fr))` }}>
        {MINIS.map((m, i) => (
          <MiniCard key={m.key} m={m} i={i} cellW={cellW} cellH={cellH} />
        ))}
      </div>
    </div>
  );
}
