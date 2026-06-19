"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Camera, LayoutGrid, TrendingUp, CalendarDays, BarChart3, Split, Play, Layers, Megaphone, Image as ImageIcon, Clapperboard, Mail as MailIcon } from "lucide-react";

const ease = [0.16, 1, 0.3, 1] as const;

function useReplay(ms = 8500) {
  const [k, setK] = useState(0);
  useEffect(() => { const t = setInterval(() => setK((v) => v + 1), ms); return () => clearInterval(t); }, [ms]);
  return k;
}

function Frame({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative w-full max-w-[440px] rounded-[26px] bg-white border border-line overflow-hidden shadow-[0_2px_4px_rgba(11,13,18,.04),0_18px_36px_-18px_rgba(11,13,18,.22),0_50px_90px_-44px_rgba(59,134,255,.30)]">
      <div className="flex items-center gap-1.5 px-4 py-3 border-b border-line bg-[linear-gradient(var(--paper),var(--paper-2))]">
        <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
        <span className="ml-auto font-mono text-[9.5px] text-ink-3 tracking-[.1em]">wolf-ai</span>
      </div>
      {children}
    </div>
  );
}

function Header({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="flex items-center gap-2 px-5 py-3 border-b border-line">
      <span className="text-blue">{icon}</span>
      <span className="label !text-[10px]">{label}</span>
      <span className="ml-auto inline-flex items-center gap-1.5 font-mono text-[10px] text-blue">
        <span className="w-1 h-1 rounded-full bg-blue" /> live
      </span>
    </div>
  );
}

// typed media: each format looks different (icon + aspect ratio + tint)
const PIECES = [
  { k: "Reel", icon: Play, ratio: "9 / 16", tint: "rgba(59,134,255,.20)" },
  { k: "Post", icon: ImageIcon, ratio: "1 / 1", tint: "rgba(90,168,255,.16)" },
  { k: "Ad · A", icon: Megaphone, ratio: "16 / 9", tint: "rgba(59,134,255,.14)" },
  { k: "Carousel", icon: Layers, ratio: "4 / 5", tint: "rgba(90,168,255,.20)" },
  { k: "Story", icon: Clapperboard, ratio: "9 / 16", tint: "rgba(59,134,255,.16)" },
  { k: "Ad · B", icon: Megaphone, ratio: "16 / 9", tint: "rgba(90,168,255,.14)" },
  { k: "Post", icon: ImageIcon, ratio: "1 / 1", tint: "rgba(59,134,255,.18)" },
  { k: "Email", icon: MailIcon, ratio: "4 / 3", tint: "rgba(90,168,255,.16)" },
  { k: "Short", icon: Play, ratio: "9 / 16", tint: "rgba(59,134,255,.20)" },
];

function PieceCard({ p, i, anim = "in" }: { p: (typeof PIECES)[number]; i: number; anim?: "in" | "view" }) {
  const common = "mb-2 inline-block w-full rounded-xl border border-line bg-white overflow-hidden align-top";
  const a = anim === "view"
    ? { initial: { opacity: 0, scale: 0.92 }, whileInView: { opacity: 1, scale: 1 }, viewport: { once: true } }
    : { initial: { opacity: 0, scale: 0.92 }, animate: { opacity: 1, scale: 1 } };
  return (
    <motion.div {...(a as object)} transition={{ duration: 0.34, ease, delay: 0.35 + i * 0.06 }} className={common}>
      <div className="relative overflow-hidden" style={{ aspectRatio: p.ratio, background: `linear-gradient(135deg, ${p.tint}, transparent)` }}>
        {/* format-specific content character */}
        {(p.k === "Reel" || p.k === "Story" || p.k === "Short") && (
          <>
            <span className="absolute inset-0 grid place-items-center">
              <span className="grid place-items-center w-8 h-8 rounded-full bg-white shadow-md">
                <svg width="11" height="12" viewBox="0 0 11 12" className="ml-[1px]"><path d="M0 0l11 6-11 6z" fill="#0071E3" /></svg>
              </span>
            </span>
            <span className="absolute left-1.5 right-1.5 bottom-1.5 h-1.5 rounded-full bg-white/75" />
            <span className="absolute top-1.5 right-1.5 text-[8px] font-mono text-ink-2 bg-white/80 rounded px-1">0:20</span>
          </>
        )}
        {p.k.startsWith("Ad") && (
          <div className="absolute inset-0 p-2.5 flex flex-col justify-between bg-[linear-gradient(135deg,rgba(194,94,28,.16),transparent)]">
            <span className="text-[8px] font-mono text-ink-3">Sponsored</span>
            <div>
              <div className="font-display text-[12px] leading-[1.05] text-ink">Roofs done right.</div>
              <span className="mt-1 inline-block text-[8px] font-semibold text-white bg-blue rounded px-1.5 py-0.5">Get a quote</span>
            </div>
          </div>
        )}
        {p.k === "Post" && (
          <div className="absolute inset-0 p-2 flex flex-col">
            <div className="flex items-center gap-1">
              <span className="w-3.5 h-3.5 rounded-full bg-blue/60" />
              <span className="h-1 w-10 rounded-full bg-ink/25" />
            </div>
            <div className="mt-auto flex flex-col gap-1">
              <div className="h-1 w-5/6 rounded-full bg-ink/15" />
              <div className="h-1 w-2/3 rounded-full bg-ink/10" />
            </div>
          </div>
        )}
        {p.k === "Carousel" && (
          <span className="absolute left-1/2 -translate-x-1/2 bottom-1.5 flex gap-1">
            {[0,1,2,3].map((d) => <span key={d} className={"w-1 h-1 rounded-full " + (d===0?"bg-blue":"bg-blue/30")} />)}
          </span>
        )}
        {p.k === "Email" && (
          <div className="absolute inset-0 p-2 flex flex-col gap-1">
            <div className="h-1.5 w-2/3 rounded-full bg-blue/35" />
            <div className="h-1 w-full rounded-full bg-ink/10" />
            <div className="h-1 w-4/5 rounded-full bg-ink/10" />
          </div>
        )}
      </div>
      <div className="flex items-center gap-1 px-2 py-1.5">
        <span className="w-1 h-1 rounded-full bg-blue" />
        <span className="text-[10px] font-semibold text-ink-2">{p.k}</span>
      </div>
    </motion.div>
  );
}

/* hero — one job fans out into many pieces */
export function HeroMultiplyVisual() {
  const k = useReplay();
  return (
    <div className="relative w-full max-w-[440px]">
      <div className="pointer-events-none absolute -inset-12 -z-10"
        style={{ background: "radial-gradient(ellipse 46% 50% at 50% 42%, rgba(59,134,255,.20), transparent 66%)" }} />
      <Frame>
        <Header icon={<LayoutGrid size={15} strokeWidth={1.9} />} label="Content engine" />
        <div key={k} className="p-5">
          {/* source */}
          <motion.div
            initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease }}
            className="flex items-center gap-3 rounded-2xl bg-paper-2 border border-line p-3 mb-4">
            <span className="grid place-items-center w-10 h-10 rounded-xl bg-blue text-white"><Camera size={18} strokeWidth={1.9} /></span>
            <div>
              <div className="text-[13px] font-semibold text-ink">One job · finished re-roof</div>
              <div className="text-[11px] text-ink-3">3 photos + a 20s clip</div>
            </div>
            <span className="ml-auto font-display text-[22px] text-blue tabular">1</span>
          </motion.div>
          {/* arrow */}
          <div className="flex justify-center text-ink-3 mb-3 text-[12px]">becomes</div>
          {/* pieces, varied media in a masonry fan-out */}
          <div className="[column-count:3] [column-gap:0.5rem]">
            {PIECES.map((p, i) => (
              <PieceCard key={i} p={p} i={i} anim="in" />
            ))}
          </div>
          <div className="mt-4 flex items-center justify-between">
            <span className="text-[12px] text-ink-3">one job, all week of content</span>
            <span className="font-display text-[22px] text-blue tabular">24</span>
          </div>
        </div>
      </Frame>
    </div>
  );
}

/* 1 — source in */
export function SourceVisual() {
  return (
    <Frame>
      <Header icon={<Camera size={15} strokeWidth={1.9} />} label="Raw material" />
      <div className="p-5 grid grid-cols-3 gap-2">
        {["Before", "After", "Drone", "Crew", "Detail", "Clip"].map((s, i) => (
          <motion.div key={s}
            initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.35, ease, delay: i * 0.06 }}
            className="rounded-xl overflow-hidden border border-line">
            <div className="h-16 bg-[linear-gradient(135deg,rgba(59,134,255,.16),rgba(90,168,255,.06))]" />
            <div className="label !text-[8px] px-2 py-1.5">{s}</div>
          </motion.div>
        ))}
      </div>
    </Frame>
  );
}

/* 2 — many formats out */
export function FormatsVisual() {
  return (
    <Frame>
      <Header icon={<LayoutGrid size={15} strokeWidth={1.9} />} label="24 pieces · 1 job" />
      <div className="p-5 [column-count:3] [column-gap:0.5rem]">
        {PIECES.map((p, i) => (
          <PieceCard key={i} p={p} i={i} anim="view" />
        ))}
      </div>
    </Frame>
  );
}

/* 3 — studies the market */
export function StudyVisual() {
  const rows = [
    { t: "Before/after reels", v: "trending", up: true },
    { t: "Storm-prep tips", v: "rising", up: true },
    { t: "Long captions", v: "fading", up: false },
  ];
  return (
    <Frame>
      <Header icon={<TrendingUp size={15} strokeWidth={1.9} />} label="What is working now" />
      <div className="p-5 flex flex-col gap-2.5">
        {rows.map((r, i) => (
          <motion.div key={r.t}
            initial={{ opacity: 0, x: 10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.4, ease, delay: i * 0.1 }}
            className="flex items-center justify-between rounded-xl bg-paper-2 px-4 py-3">
            <span className="text-[12.5px] text-ink">{r.t}</span>
            <span className={"text-[11px] font-semibold " + (r.up ? "text-blue" : "text-ink-3")}>{r.up ? "↑ " : "↓ "}{r.v}</span>
          </motion.div>
        ))}
      </div>
    </Frame>
  );
}

/* 4 — schedule */
export function ScheduleVisual() {
  const days = ["M", "T", "W", "T", "F", "S", "S"];
  const posts: Record<number, number> = { 0: 2, 2: 1, 3: 2, 4: 1, 6: 1 };
  return (
    <Frame>
      <Header icon={<CalendarDays size={15} strokeWidth={1.9} />} label="Scheduled · this week" />
      <div className="p-5">
        <div className="grid grid-cols-7 gap-1.5">
          {days.map((d, i) => <div key={i} className="text-center label !text-[8px]">{d}</div>)}
          {days.map((_, i) => (
            <div key={i} className="aspect-square rounded-lg bg-paper-2 p-1 flex flex-col gap-1">
              {Array.from({ length: posts[i] || 0 }).map((_, j) => (
                <motion.span key={j}
                  initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.1 * i }}
                  className="h-1.5 rounded-full bg-blue" />
              ))}
            </div>
          ))}
        </div>
        <div className="mt-4 text-[12px] text-ink-3">7 posts queued · auto-published at peak times</div>
      </div>
    </Frame>
  );
}

/* 5 — watches the numbers */
export function NumbersVisual() {
  const bars = [40, 62, 48, 80, 56, 92, 70];
  return (
    <Frame>
      <Header icon={<BarChart3 size={15} strokeWidth={1.9} />} label="Performance" />
      <div className="p-5">
        <div className="flex items-end gap-2 h-28">
          {bars.map((b, i) => (
            <motion.div key={i}
              initial={{ height: 0 }} whileInView={{ height: `${b}%` }} viewport={{ once: true }}
              transition={{ duration: 0.7, ease, delay: i * 0.07 }}
              className="flex-1 rounded-t-md bg-blue" style={{ opacity: 0.4 + (b / 160) }} />
          ))}
        </div>
        <div className="mt-3 flex items-center justify-between">
          <span className="text-[12px] text-ink-3">reach, last 7 posts</span>
          <span className="text-[12px] font-semibold text-blue">+38% week on week</span>
        </div>
      </div>
    </Frame>
  );
}

/* 6 — A/B test */
export function ABVisual() {
  return (
    <Frame>
      <Header icon={<Split size={15} strokeWidth={1.9} />} label="A/B · doubling down" />
      <div className="p-5 grid grid-cols-2 gap-3">
        {[
          { k: "Variant A", v: "1.2%", win: false },
          { k: "Variant B", v: "3.8%", win: true },
        ].map((x) => (
          <div key={x.k} className={"rounded-2xl border p-4 " + (x.win ? "border-blue bg-blue-soft" : "border-line bg-paper-2")}>
            <div className="label !text-[9px] mb-2">{x.k}</div>
            <div className={"font-display text-[30px] tabular leading-none " + (x.win ? "text-blue" : "text-ink")}>{x.v}</div>
            <div className="text-[11px] text-ink-3 mt-1.5">click rate</div>
            {x.win && <div className="mt-2 text-[11px] font-semibold text-blue">Winner · scaled up</div>}
          </div>
        ))}
      </div>
    </Frame>
  );
}
