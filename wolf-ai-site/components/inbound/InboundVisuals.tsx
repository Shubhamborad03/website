"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Mail, MessageSquare, Instagram, RefreshCw, Repeat2, Star, Inbox } from "lucide-react";

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

const CHANNELS = [
  { icon: Mail, ch: "Email", who: "Sarah M.", msg: "Do you service Peregian?", t: "now", color: "#0071E3",
    reply: "Yes, we cover Peregian. Want a free roof check this week?", rt: "8s", state: "sent" as const },
  { icon: MessageSquare, ch: "SMS", who: "0412 663…", msg: "How much for a re-roof?", t: "1m", color: "#28C840",
    reply: "Depends on the roof, happy to quote. What is the address?", rt: "14s", state: "sent" as const },
  { icon: Instagram, ch: "DM", who: "@coastreno", msg: "Got a quote going?", t: "3m", color: "#E1306C",
    reply: "", rt: "", state: "typing" as const },
];

/* hero — unified multi-channel inbox: replies land in sequence, one still mid-reply */
function useReplay(ms = 8500) {
  const [k, setK] = useState(0);
  useEffect(() => { const t = setInterval(() => setK((v) => v + 1), ms); return () => clearInterval(t); }, [ms]);
  return k;
}

export function HeroInboxVisual() {
  const k = useReplay();
  return (
    <div className="relative w-full max-w-[440px]">
      <div className="pointer-events-none absolute -inset-12 -z-10"
        style={{ background: "radial-gradient(ellipse 46% 50% at 50% 42%, rgba(59,134,255,.20), transparent 66%)" }} />
      <Frame>
        <Header icon={<Inbox size={15} strokeWidth={1.9} />} label="One inbox · every channel" />
        <div key={k} className="p-4 flex flex-col gap-2.5">
          {CHANNELS.map((c, i) => (
            <motion.div key={c.ch}
              initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease, delay: 0.2 + i * 0.45 }}
              className="rounded-2xl border border-line bg-paper-2 p-3">
              <div className="flex items-center gap-2">
                <span className="grid place-items-center w-7 h-7 rounded-lg text-white" style={{ background: c.color }}>
                  <c.icon size={14} strokeWidth={2} />
                </span>
                <span className="text-[12px] font-semibold text-ink">{c.who}</span>
                <span className="label !text-[9px] ml-1">{c.ch}</span>
                <span className="ml-auto font-mono text-[10px] text-ink-3">{c.t}</span>
              </div>
              <div className="mt-2 text-[12.5px] text-ink">{c.msg}</div>
              {c.state === "sent" ? (
                <motion.div
                  initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, ease, delay: 0.6 + i * 0.45 }}
                  className="mt-2">
                  <div className="rounded-xl rounded-tl-sm bg-blue text-white px-3 py-2 text-[12px] leading-snug">{c.reply}</div>
                  <div className="mt-1.5 flex items-center justify-end gap-1 text-[10.5px] text-ink-3 font-mono">
                    <span className="text-blue">✓</span> sent · {c.rt}
                  </div>
                </motion.div>
              ) : (
                <div className="mt-2 inline-flex items-center gap-1.5 rounded-xl bg-white border border-line px-3 py-2">
                  {[0,1,2].map((d) => (
                    <span key={d} className="w-1.5 h-1.5 rounded-full bg-ink-3" style={{ animation: `pl 1.1s ${d*0.18}s infinite` }} />
                  ))}
                  <span className="text-[11px] text-ink-3 ml-1">writing reply…</span>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </Frame>
    </div>
  );
}

/* 1 — every channel caught */
export function CatchVisual() {
  return (
    <Frame>
      <Header icon={<Inbox size={15} strokeWidth={1.9} />} label="Channels · unified" />
      <div className="p-6 grid grid-cols-2 gap-2.5">
        {["Email", "SMS", "Instagram DM", "Facebook", "WhatsApp", "Web form"].map((c, i) => (
          <motion.div key={c}
            initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.4, ease, delay: i * 0.06 }}
            className="flex items-center gap-2 rounded-xl bg-paper-2 px-3 py-3">
            <span className="w-1.5 h-1.5 rounded-full bg-blue" />
            <span className="text-[12.5px] text-ink">{c}</span>
          </motion.div>
        ))}
      </div>
    </Frame>
  );
}

/* 2 — same-day reply thread */
export function ReplyDayVisual() {
  return (
    <Frame>
      <Header icon={<MessageSquare size={15} strokeWidth={1.9} />} label="Same-day reply" />
      <div className="p-5 flex flex-col gap-2.5">
        <div className="self-start max-w-[85%] rounded-2xl rounded-bl-sm bg-paper-2 text-ink px-4 py-2.5 text-[13px]">
          Hi, still after a quote for the carport roof?
        </div>
        <div className="self-end max-w-[85%] rounded-2xl rounded-br-sm bg-blue text-white px-4 py-2.5 text-[13px]">
          Yes please. We can take a look this week, what is the address?
        </div>
        <div className="flex items-center gap-2 text-[11px] text-ink-3 mt-1">
          <span className="w-1.5 h-1.5 rounded-full bg-blue" /> Replied 9 minutes after they messaged
        </div>
      </div>
    </Frame>
  );
}

/* 3 — reactivation of dormant clients */
export function ReactivateVisual() {
  const rows = [
    { n: "Last job · 14 months ago", s: "Re-engaged" },
    { n: "Quoted, never booked", s: "Re-engaged" },
    { n: "Past customer · gutter clean", s: "Booked" },
  ];
  return (
    <Frame>
      <Header icon={<RefreshCw size={15} strokeWidth={1.9} />} label="Reactivation" />
      <div className="p-5 flex flex-col gap-2.5">
        {rows.map((r, i) => (
          <motion.div key={r.n}
            initial={{ opacity: 0, x: 10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.4, ease, delay: i * 0.1 }}
            className="flex items-center justify-between rounded-xl bg-paper-2 px-4 py-3">
            <span className="text-[12.5px] text-ink">{r.n}</span>
            <span className={"text-[11px] font-semibold " + (r.s === "Booked" ? "text-blue" : "text-ink-3")}>{r.s}</span>
          </motion.div>
        ))}
      </div>
    </Frame>
  );
}

/* 4 — follow-up sequence */
export function FollowVisual() {
  const steps = [
    { d: "Day 0", m: "First reply, same day" },
    { d: "Day 2", m: "Gentle nudge" },
    { d: "Day 5", m: "Last check-in + offer" },
  ];
  return (
    <Frame>
      <Header icon={<Repeat2 size={15} strokeWidth={1.9} />} label="Follow-up · automatic" />
      <div className="p-5">
        <div className="relative pl-5">
          <span className="absolute left-[5px] top-1 bottom-1 w-px bg-line" />
          {steps.map((s, i) => (
            <motion.div key={s.d}
              initial={{ opacity: 0, x: 8 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.4, ease, delay: i * 0.12 }}
              className="relative mb-4 last:mb-0">
              <span className="absolute -left-5 top-1 w-2.5 h-2.5 rounded-full bg-blue" />
              <div className="text-[11px] font-mono text-blue">{s.d}</div>
              <div className="text-[13px] text-ink">{s.m}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </Frame>
  );
}

/* 5 — referrals + reviews asked */
export function ReferVisual() {
  return (
    <Frame>
      <Header icon={<Star size={15} strokeWidth={1.9} />} label="Reviews + referrals" />
      <div className="p-6">
        <div className="rounded-xl bg-paper-2 px-4 py-3 text-[13px] text-ink mb-3">
          Glad you are happy with the new roof, would you mind a quick Google review?
        </div>
        <div className="flex items-center justify-between rounded-xl bg-blue-soft px-4 py-3">
          <span className="inline-flex items-center gap-1 text-blue-deep">
            {[0,1,2,3,4].map((i) => <Star key={i} size={13} className="fill-blue-deep" />)}
          </span>
          <span className="text-[12px] font-semibold text-blue-deep">+1 review · referral asked</span>
        </div>
      </div>
    </Frame>
  );
}

/* 6 — nothing slips board */
export function TrackVisual() {
  const cols = [
    { k: "New", v: ["Sarah M.", "@coastreno"] },
    { k: "Replied", v: ["0412 663", "Ben K."] },
    { k: "Booked", v: ["J. Powell"] },
  ];
  return (
    <Frame>
      <Header icon={<Inbox size={15} strokeWidth={1.9} />} label="Nothing slips" />
      <div className="p-4 grid grid-cols-3 gap-2">
        {cols.map((c) => (
          <div key={c.k} className="rounded-xl bg-paper-2 p-2.5">
            <div className="label !text-[8px] mb-2">{c.k}</div>
            <div className="flex flex-col gap-1.5">
              {c.v.map((x) => (
                <div key={x} className="rounded-lg bg-white border border-line px-2 py-1.5 text-[10.5px] text-ink truncate">{x}</div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Frame>
  );
}
