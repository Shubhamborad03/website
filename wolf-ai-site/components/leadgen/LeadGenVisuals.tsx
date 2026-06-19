"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Radar, Sparkles, Mail, Send, MessageSquareReply, CalendarCheck } from "lucide-react";

const ease = [0.16, 1, 0.3, 1] as const;

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

/* hero, live intent-signal stream on the left resolving into scored prospect cards on the right */

type Signal = { text: string; tag: string };
type Lead = { name: string; place: string; score: number };

// each beat: a raw intent signal streams in, the agent qualifies it, a scored lead card lands.
const BEATS: { signal: Signal; lead: Lead }[] = [
  { signal: { text: "anyone know a good roofer in Noosa?", tag: "facebook group" }, lead: { name: "Megan T.", place: "Noosa Heads", score: 96 } },
  { signal: { text: "permit filed · full re-roof", tag: "council records" }, lead: { name: "Coastline Homes", place: "Tewantin", score: 92 } },
  { signal: { text: "need a metal roof quote asap", tag: "search intent" }, lead: { name: "Daniel R.", place: "Cooroy", score: 89 } },
  { signal: { text: "storm damage spike, 40+ homes", tag: "weather signal" }, lead: { name: "Sunshine Strata", place: "Sunshine Beach", score: 94 } },
  { signal: { text: "looking for re-roof, insurance job", tag: "marketplace" }, lead: { name: "Priya N.", place: "Peregian", score: 88 } },
];

function scoreColor(s: number) {
  return s >= 93 ? "var(--blue)" : "var(--ink)";
}

export function HeroScanVisual() {
  const [step, setStep] = useState(0); // index into BEATS, advances forever
  const [phase, setPhase] = useState<"scan" | "match">("scan");
  const [found, setFound] = useState(7);
  const [reduce, setReduce] = useState(false);

  useEffect(() => {
    setReduce(typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  useEffect(() => {
    if (reduce) return;
    let alive = true;
    let scanT: ReturnType<typeof setTimeout>;
    let matchT: ReturnType<typeof setTimeout>;
    const run = () => {
      if (!alive) return;
      setPhase("scan");
      scanT = setTimeout(() => {
        if (!alive) return;
        setPhase("match");
        setFound((f) => f + 1);
        matchT = setTimeout(() => {
          if (!alive) return;
          setStep((s) => s + 1);
          run();
        }, 2000);
      }, 1700);
    };
    run();
    return () => { alive = false; clearTimeout(scanT); clearTimeout(matchT); };
  }, [reduce]);

  const beat = BEATS[step % BEATS.length];
  // the three most-recent leads, newest first; seeded so the stack is never empty
  const stack: Lead[] = [];
  for (let i = 0; i < 3; i++) {
    const idx = step - i + (phase === "match" ? 0 : -1);
    if (idx >= 0) stack.push(BEATS[idx % BEATS.length].lead);
    else stack.push(BEATS[(BEATS.length + idx) % BEATS.length].lead);
  }

  return (
    <div className="relative w-full max-w-[440px]">
      <div className="pointer-events-none absolute -inset-12 -z-10"
        style={{ background: "radial-gradient(ellipse 46% 50% at 50% 42%, rgba(59,134,255,.22), transparent 66%)" }} />
      <Frame>
        <Header icon={<Radar size={15} strokeWidth={1.9} />} label="Prospecting · Lead gen agent" />

        <div className="px-5 pt-4 pb-5">
          {/* two-lane workspace: intent stream  ->  qualified prospects */}
          <div className="grid grid-cols-[1fr_auto_1.05fr] items-stretch gap-2">

            {/* LEFT, live intent signal */}
            <div className="rounded-2xl bg-paper-2 border border-line p-3 flex flex-col min-h-[150px]">
              <div className="flex items-center gap-1.5 mb-2.5">
                <span className="w-1 h-1 rounded-full bg-blue pulse-live" />
                <span className="label !text-[8px]">intent signal</span>
              </div>
              <AnimatePresence mode="popLayout">
                <motion.div
                  key={step}
                  initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: -8, filter: "blur(4px)" }}
                  transition={{ duration: 0.5, ease }}
                  className="flex flex-col gap-2"
                >
                  <p className="text-[12.5px] leading-snug text-ink">&ldquo;{beat.signal.text}&rdquo;</p>
                  <span className="font-mono text-[9px] text-ink-3 tracking-[.08em] lowercase">{beat.signal.tag}</span>
                </motion.div>
              </AnimatePresence>

              {/* qualifying bar */}
              <div className="mt-auto pt-3">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="font-mono text-[8.5px] text-ink-3 tracking-[.08em]">
                    {phase === "scan" ? "qualifying" : "qualified"}
                  </span>
                  {phase === "match" && (
                    <motion.span
                      initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.35, ease }}
                      className="font-mono text-[8.5px] text-blue"
                    >real buyer</motion.span>
                  )}
                </div>
                <div className="h-1 rounded-full bg-line overflow-hidden">
                  <motion.div
                    key={step + phase}
                    className="h-full rounded-full bg-blue"
                    initial={{ width: phase === "scan" ? "0%" : "100%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: phase === "scan" ? 1.6 : 0.1, ease }}
                  />
                </div>
              </div>
            </div>

            {/* MIDDLE, flow connector */}
            <div className="relative flex flex-col items-center justify-center w-7">
              <span className="absolute inset-y-3 left-1/2 w-px -translate-x-1/2 bg-line" />
              <motion.span
                key={step}
                className="relative z-10 grid place-items-center w-6 h-6 rounded-full bg-white border border-line shadow-[0_2px_6px_rgba(11,13,18,.08)]"
                animate={{ scale: phase === "match" ? [1, 1.18, 1] : 1 }}
                transition={{ duration: 0.5, ease }}
              >
                <Sparkles size={11} strokeWidth={2} className="text-blue" />
              </motion.span>
              {/* travelling pulse along the line, shows the signal moving across */}
              {!reduce && (
                <motion.span
                  key={"p" + step}
                  className="absolute left-1/2 top-3 w-1.5 h-1.5 -translate-x-1/2 rounded-full bg-blue"
                  style={{ boxShadow: "0 0 8px var(--blue)" }}
                  initial={{ y: 0, opacity: 0 }}
                  animate={phase === "match" ? { y: ["0%", "260%"], opacity: [0, 1, 0] } : { opacity: 0 }}
                  transition={{ duration: 0.7, ease }}
                />
              )}
            </div>

            {/* RIGHT, scored qualified prospects */}
            <div className="rounded-2xl bg-paper-2 border border-line p-2.5 flex flex-col gap-1.5 min-h-[150px]">
              <span className="label !text-[8px] px-1 pb-0.5">qualified prospects</span>
              <div className="flex flex-col gap-1.5">
                <AnimatePresence mode="popLayout" initial={false}>
                  {stack.map((l, i) => (
                    <motion.div
                      key={`${l.name}-${step - i}`}
                      layout
                      initial={{ opacity: 0, x: 14, scale: 0.96 }}
                      animate={{ opacity: i === 0 ? 1 : 0.55 - i * 0.12, x: 0, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.94 }}
                      transition={{ duration: 0.5, ease }}
                      className="flex items-center gap-2 rounded-xl bg-white border border-line px-2.5 py-2"
                    >
                      <span className="grid place-items-center w-6 h-6 shrink-0 rounded-lg bg-paper-2 border border-line font-display text-[10px] text-ink">
                        {l.name[0]}
                      </span>
                      <span className="flex flex-col min-w-0 flex-1">
                        <span className="text-[11px] font-semibold text-ink leading-tight truncate">{l.name}</span>
                        <span className="text-[9px] text-ink-3 leading-tight truncate">{l.place}</span>
                      </span>
                      <span className="font-mono text-[11px] tabular shrink-0" style={{ color: scoreColor(l.score) }}>
                        {l.score}
                      </span>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </div>
          </div>

          {/* footer, live buyers-found counter */}
          <div className="mt-4 flex items-end justify-between">
            <div>
              <div className="flex items-baseline gap-1.5">
                <motion.span
                  key={found}
                  initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, ease }}
                  className="font-display text-[34px] text-blue tabular leading-none"
                >{found}</motion.span>
                <span className="font-display text-[15px] text-blue/40 leading-none">+</span>
              </div>
              <div className="label !text-[9px] mt-1.5">buyers found, last hour</div>
            </div>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-paper-2 border border-line px-2.5 py-1 font-mono text-[9.5px] text-ink-2">
              <span className="w-1 h-1 rounded-full bg-blue pulse-live" /> scanning live
            </span>
          </div>
        </div>
      </Frame>
    </div>
  );
}

/* 1 — sources scanned */
export function FindVisual() {
  const sources = ["Public records", "Social posts", "Satellite imagery", "Gov tenders", "Intent signals", "Review sites"];
  return (
    <Frame>
      <Header icon={<Radar size={15} strokeWidth={1.9} />} label="Sources" />
      <div className="p-6 grid grid-cols-2 gap-2.5">
        {sources.map((s, i) => (
          <motion.div key={s}
            initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.4, ease, delay: i * 0.07 }}
            className="flex items-center gap-2 rounded-xl bg-paper-2 px-3 py-3">
            <span className="w-1.5 h-1.5 rounded-full bg-blue" />
            <span className="text-[12.5px] text-ink">{s}</span>
          </motion.div>
        ))}
      </div>
    </Frame>
  );
}

/* 2 — matched prospects */
export function MatchVisual() {
  const rows = [
    { n: "Sunrise Builders", m: "94" },
    { n: "Coastline Homes", m: "91" },
    { n: "Hinterland Reno Co", m: "88" },
  ];
  return (
    <Frame>
      <Header icon={<Sparkles size={15} strokeWidth={1.9} />} label="Matched · fits your job" />
      <div className="p-5 flex flex-col gap-2.5">
        {rows.map((r, i) => (
          <motion.div key={r.n}
            initial={{ opacity: 0, x: 10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.4, ease, delay: i * 0.12 }}
            className="flex items-center gap-3 rounded-xl bg-paper-2 px-4 py-3">
            <span className="grid place-items-center w-9 h-9 rounded-lg bg-white border border-line font-display text-[13px] text-ink">{r.n[0]}</span>
            <span className="text-[13px] font-semibold text-ink flex-1">{r.n}</span>
            <span className="text-[12px] font-mono text-blue">{r.m}% fit</span>
          </motion.div>
        ))}
      </div>
    </Frame>
  );
}

/* 3 — drafted outreach in your voice */
export function DraftVisual() {
  return (
    <Frame>
      <Header icon={<Mail size={15} strokeWidth={1.9} />} label="Draft · your voice" />
      <div className="p-5">
        <div className="rounded-xl bg-paper-2 px-4 py-3 mb-3">
          <div className="label !text-[9px] mb-1">To</div>
          <div className="text-[13px] text-ink">Sunrise Builders · Ben</div>
        </div>
        <div className="rounded-xl bg-paper-2 px-4 py-3 text-[13px] text-ink leading-relaxed">
          Hi Ben, saw you are flat out on the new estate. We do metal re-roofs across Noosa,
          happy to take the overflow. Want a quick quote on the next one?
        </div>
        <div className="mt-3 flex items-center gap-2 text-[12px] text-ink-3">
          <Sparkles size={13} className="text-blue" /> Written to match how you actually talk
        </div>
      </div>
    </Frame>
  );
}

/* 4 — sent across channels */
export function SendVisual() {
  const ch = [{ k: "Email", v: "Sent" }, { k: "SMS", v: "Sent" }, { k: "DM", v: "Queued" }];
  return (
    <Frame>
      <Header icon={<Send size={15} strokeWidth={1.9} />} label="Outreach · multi-channel" />
      <div className="p-6 flex flex-col gap-2.5">
        {ch.map((c, i) => (
          <motion.div key={c.k}
            initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.4, ease, delay: i * 0.1 }}
            className="flex items-center justify-between rounded-xl bg-paper-2 px-4 py-3">
            <span className="text-[13px] text-ink">{c.k}</span>
            <span className={"text-[12px] font-semibold " + (c.v === "Sent" ? "text-blue" : "text-ink-3")}>{c.v}</span>
          </motion.div>
        ))}
      </div>
    </Frame>
  );
}

/* 5 — replies handled */
export function ReplyVisual() {
  return (
    <Frame>
      <Header icon={<MessageSquareReply size={15} strokeWidth={1.9} />} label="Reply · handled" />
      <div className="p-5 flex flex-col gap-2.5">
        <div className="self-start max-w-[85%] rounded-2xl rounded-bl-sm bg-paper-2 text-ink px-4 py-2.5 text-[13px]">
          Yeah we could use a hand. What is your turnaround?
        </div>
        <div className="self-end max-w-[85%] rounded-2xl rounded-br-sm bg-blue text-white px-4 py-2.5 text-[13px]">
          Usually 2 to 3 weeks. Want me to lock in a site visit Thursday?
        </div>
        <div className="self-start max-w-[85%] rounded-2xl rounded-bl-sm bg-paper-2 text-ink px-4 py-2.5 text-[13px]">
          Thursday works.
        </div>
      </div>
    </Frame>
  );
}

/* 6 — booked into pipeline */
export function BookedVisual() {
  const stages = [
    { k: "New", v: 18 }, { k: "Contacted", v: 11 }, { k: "Replied", v: 6 }, { k: "Booked", v: 4 },
  ];
  const max = 18;
  return (
    <Frame>
      <Header icon={<CalendarCheck size={15} strokeWidth={1.9} />} label="Pipeline · this week" />
      <div className="p-6 flex flex-col gap-3.5">
        {stages.map((s, i) => (
          <div key={s.k}>
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-[12px] text-ink-2">{s.k}</span>
              <span className="font-mono text-[12px] text-ink tabular">{s.v}</span>
            </div>
            <div className="h-2 rounded-full bg-paper-2 overflow-hidden">
              <motion.div className="h-full rounded-full bg-blue"
                initial={{ width: 0 }} whileInView={{ width: `${(s.v / max) * 100}%` }} viewport={{ once: true }}
                transition={{ duration: 0.9, ease, delay: i * 0.1 }} />
            </div>
          </div>
        ))}
      </div>
    </Frame>
  );
}
