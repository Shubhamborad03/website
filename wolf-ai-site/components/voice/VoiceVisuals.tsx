"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { PhoneCall, CalendarCheck, CreditCard, UserRoundCheck, FileText, Bot, UserRound } from "lucide-react";

const ease = [0.16, 1, 0.3, 1] as const;

function Frame({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative w-full max-w-[420px] rounded-[26px] bg-white border border-line overflow-hidden shadow-[0_2px_4px_rgba(11,13,18,.04),0_18px_36px_-18px_rgba(11,13,18,.22),0_50px_90px_-44px_rgba(59,134,255,.30)]">
      {/* window chrome */}
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

function Header({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-2 px-5 py-3 border-b border-line">
      <span className="w-2 h-2 rounded-full bg-blue pulse-live" />
      <span className="label !text-[10px]">{label}</span>
      <span className="ml-auto inline-flex items-center gap-1.5 font-mono text-[10px] text-blue">
        <span className="w-1 h-1 rounded-full bg-blue" /> live
      </span>
    </div>
  );
}

/* hero — a live VOICE CALL UI (not chat): call header, controls, looping transcript */
const CALL_SCRIPT: { who: "caller" | "agent"; text: string; status?: string }[] = [
  { who: "agent", text: "Thanks for calling, you're through to the team. How can I help?", status: "Answered" },
  { who: "caller", text: "Hi, do you do metal re-roofs in Noosa?" },
  { who: "agent", text: "We do. What's the property address?", status: "Qualifying" },
  { who: "caller", text: "12 Sunrise Beach Road." },
  { who: "agent", text: "Perfect. I can book a free roof check Thursday at 2:30. Does that suit?", status: "Booking" },
  { who: "caller", text: "Yeah, Thursday works." },
  { who: "agent", text: "Booked, and I've texted your confirmation. Anything else?", status: "Confirmed" },
];

export function HeroCallVisual() {
  const [turns, setTurns] = useState<{ who: "caller" | "agent"; text: string }[]>([]);
  const [status, setStatus] = useState("Connecting");
  const [secs, setSecs] = useState(0);
  const [agentSpeaking, setAgentSpeaking] = useState(false);

  useEffect(() => {
    const t = setInterval(() => setSecs((s) => s + 1), 1000);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    let cancel = false;
    const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));
    (async () => {
      while (!cancel) {
        setTurns([]); setStatus("Connecting");
        await sleep(700);
        for (const turn of CALL_SCRIPT) {
          if (cancel) return;
          setAgentSpeaking(turn.who === "agent");
          if (turn.status) setStatus(turn.status);
          await sleep(turn.who === "agent" ? 520 : 340);
          if (cancel) return;
          setTurns((prev) => [...prev, { who: turn.who, text: turn.text }].slice(-3));
          await sleep(turn.text.length > 40 ? 2000 : 1400);
        }
        setAgentSpeaking(false);
        await sleep(2200);
      }
    })();
    return () => { cancel = true; };
  }, []);

  const mm = Math.floor(secs / 60);
  const ss = String(secs % 60).padStart(2, "0");

  return (
    <div className="relative w-full max-w-[420px]">
      <div className="pointer-events-none absolute -inset-12 -z-10"
        style={{ background: "radial-gradient(ellipse 46% 50% at 50% 42%, rgba(59,134,255,.20), transparent 66%)" }} />
      <Frame>
        <Header label="Inbound · Voice agent" />
        <div className="p-6">
          {/* live call:  agent  ~~~ speaking wave ~~~  caller */}
          <div className="flex items-center gap-3">
            {/* agent endpoint, with the soft blue glow */}
            <div className="relative shrink-0 flex flex-col items-center gap-1.5">
              <span
                className="pointer-events-none absolute -inset-3 -z-10 rounded-full"
                style={{ background: "radial-gradient(circle at center, rgba(59,134,255,.4), transparent 70%)" }}
              />
              <span className="relative grid place-items-center w-14 h-14 rounded-2xl bg-blue-soft text-blue">
                <Bot size={26} strokeWidth={1.8} />
                {agentSpeaking && <span className="absolute inset-0 rounded-2xl pulse-live" />}
              </span>
              <span className="text-[9px] font-mono uppercase tracking-[.12em] text-ink-3">Agent</span>
            </div>

            {/* speaking waveform between them */}
            <div className="flex-1 flex items-center justify-center gap-[3px] h-10">
              {Array.from({ length: 22 }).map((_, i) => {
                const idle = 5 + Math.round(4 * Math.abs(Math.sin(i * 0.7)));
                const peak = 10 + Math.round(22 * Math.abs(Math.sin(i * 0.9 + 1)));
                return (
                  <motion.span key={i} className="w-[3px] rounded-full bg-blue/70"
                    animate={{ height: agentSpeaking ? [idle, peak, idle] : [idle, idle + 2, idle] }}
                    transition={{ duration: (agentSpeaking ? 0.6 : 1.8) + (i % 5) * 0.07, repeat: Infinity, ease: "easeInOut", delay: (i % 7) * 0.04 }} />
                );
              })}
            </div>

            {/* caller endpoint */}
            <div className="relative shrink-0 flex flex-col items-center gap-1.5">
              <span className="relative grid place-items-center w-14 h-14 rounded-2xl bg-blue text-white">
                <UserRound size={26} strokeWidth={1.8} />
                {!agentSpeaking && <span className="absolute inset-0 rounded-2xl pulse-live" />}
              </span>
              <span className="text-[9px] font-mono uppercase tracking-[.12em] text-ink-3">Caller</span>
            </div>
          </div>

          {/* status + timer */}
          <div className="mt-4 flex items-center justify-center gap-2 text-[12px]">
            <span className="w-1.5 h-1.5 rounded-full bg-blue pulse-live" />
            <span className="text-blue font-medium">{status}</span>
            <span className="text-ink-3">·</span>
            <span className="font-mono text-ink-2 tabular">{mm}:{ss}</span>
          </div>

          {/* transcript, iMessage style: agent on the left, caller on the right.
             FIXED height + clip so the component never changes size as bubbles come and go */}
          <div className="mt-4 h-[150px] flex flex-col justify-end gap-2 overflow-hidden">
            <AnimatePresence initial={false}>
              {turns.map((t) => (
                <motion.div key={`${t.who}-${t.text}`} layout
                  initial={{ opacity: 0, y: 8, scale: 0.96 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.32, ease }}
                  className={"flex " + (t.who === "agent" ? "justify-start" : "justify-end")}>
                  <span className={"max-w-[80%] px-3.5 py-2 text-[12.5px] leading-snug " +
                    (t.who === "agent"
                      ? "rounded-2xl rounded-bl-md bg-paper-2 text-ink"
                      : "rounded-2xl rounded-br-md bg-blue text-white")}>
                    {t.text}
                  </span>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* end call */}
          <div className="mt-4 flex items-center justify-center">
            <span className="grid place-items-center w-11 h-11 rounded-full bg-[#FF4D4F] text-white rotate-[135deg]"><PhoneCall size={18} strokeWidth={2.2} /></span>
          </div>
        </div>
      </Frame>
    </div>
  );
}

/* 1 — incoming call answered */
export function AnswerVisual() {
  return (
    <Frame>
      <Header label="Inbound · Voice agent" />
      <div className="p-7 flex flex-col items-center text-center">
        <span className="grid place-items-center w-16 h-16 rounded-full bg-blue-soft text-blue mb-4 pulse-live">
          <PhoneCall size={26} strokeWidth={1.8} />
        </span>
        <div className="font-display text-[22px] text-ink">Incoming call</div>
        <div className="text-[13px] text-ink-3 mt-1">Unknown · 0:02</div>
        <div className="mt-5 w-full rounded-2xl bg-paper-2 px-4 py-3 text-[13px] text-ink text-left">
          "Thanks for calling. How can I help with your roof today?"
        </div>
        <div className="mt-3 flex items-center gap-2 text-[12px] text-ink-3">
          <span className="w-1.5 h-1.5 rounded-full bg-blue" /> Answered on the first ring
        </div>
      </div>
    </Frame>
  );
}

/* 2 — qualifying questions */
export function QualifyVisual() {
  const rows = [
    { q: "Service", a: "Metal re-roof" },
    { q: "Suburb", a: "Noosa Heads" },
    { q: "Timeline", a: "Next 4 weeks" },
    { q: "Budget fit", a: "Qualified" },
  ];
  return (
    <Frame>
      <Header label="Qualifying" />
      <div className="p-6 flex flex-col gap-2.5">
        {rows.map((r, i) => (
          <motion.div
            key={r.q}
            initial={{ opacity: 0, x: 10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease, delay: 0.15 * i }}
            className="flex items-center justify-between rounded-xl bg-paper-2 px-4 py-3"
          >
            <span className="text-[13px] text-ink-3">{r.q}</span>
            <span className="text-[13px] font-semibold text-ink">{r.a}</span>
          </motion.div>
        ))}
      </div>
    </Frame>
  );
}

/* 3 — booking confirmed */
export function BookVisual() {
  return (
    <Frame>
      <Header label="Booking" />
      <div className="p-7">
        <div className="flex items-center gap-3 mb-5">
          <span className="grid place-items-center w-11 h-11 rounded-xl bg-blue text-white">
            <CalendarCheck size={20} strokeWidth={1.8} />
          </span>
          <div>
            <div className="font-display text-[18px] text-ink">Free roof check</div>
            <div className="text-[12px] text-ink-3">12 Sunrise Beach Rd</div>
          </div>
        </div>
        <div className="grid grid-cols-7 gap-1.5">
          {["M", "T", "W", "T", "F", "S", "S"].map((d, i) => (
            <div key={i} className="text-center text-[10px] text-ink-3 font-mono">{d}</div>
          ))}
          {Array.from({ length: 7 }).map((_, i) => (
            <div
              key={i}
              className={
                "aspect-square rounded-lg grid place-items-center text-[12px] font-semibold " +
                (i === 3 ? "bg-blue text-white" : "bg-paper-2 text-ink-2")
              }
            >
              {i + 9}
            </div>
          ))}
        </div>
        <div className="mt-5 flex items-center justify-between rounded-xl bg-blue-soft px-4 py-3">
          <span className="text-[13px] font-semibold text-blue-deep">Thursday · 2:30pm</span>
          <span className="text-[11px] text-blue-deep">Added to calendar</span>
        </div>
      </div>
    </Frame>
  );
}

/* 4 — deposit taken */
export function DepositVisual() {
  return (
    <Frame>
      <Header label="Deposit" />
      <div className="p-7 flex flex-col items-center text-center">
        <span className="grid place-items-center w-14 h-14 rounded-2xl bg-blue-soft text-blue mb-4">
          <CreditCard size={24} strokeWidth={1.8} />
        </span>
        <div className="font-display text-[40px] text-ink tabular leading-none">$250</div>
        <div className="text-[13px] text-ink-3 mt-2">Hold deposit · paid by link</div>
        <div className="mt-5 w-full rounded-xl bg-paper-2 px-4 py-3 flex items-center justify-between">
          <span className="text-[12px] text-ink-3">Status</span>
          <span className="text-[12px] font-semibold text-blue">Confirmed · receipt sent</span>
        </div>
      </div>
    </Frame>
  );
}

/* 5 — escalate to human */
export function EscalateVisual() {
  return (
    <Frame>
      <Header label="Escalation" />
      <div className="p-7">
        <div className="rounded-2xl bg-paper-2 px-4 py-3 text-[13px] text-ink mb-3">
          "This is an insurance storm claim, multiple buildings."
        </div>
        <div className="flex items-center gap-3 rounded-2xl border border-blue/30 bg-blue-soft px-4 py-3.5">
          <span className="grid place-items-center w-10 h-10 rounded-full bg-blue text-white">
            <UserRoundCheck size={18} strokeWidth={1.8} />
          </span>
          <div>
            <div className="text-[13px] font-semibold text-ink">Routed to you</div>
            <div className="text-[12px] text-ink-3">Call + full transcript, in 1 ring</div>
          </div>
        </div>
        <div className="mt-3 text-[12px] text-ink-3">The agent knows what it cannot close, and hands it over clean.</div>
      </div>
    </Frame>
  );
}

/* 6 — end of day summary */
export function SummaryVisual() {
  const items = [
    { k: "Calls handled", v: "23" },
    { k: "Jobs booked", v: "9" },
    { k: "Deposits taken", v: "$2,250" },
    { k: "Escalated to you", v: "2" },
  ];
  return (
    <Frame>
      <Header label="Daily summary · 6:00pm" />
      <div className="p-6 grid grid-cols-2 gap-3">
        {items.map((it, i) => (
          <motion.div
            key={it.k}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease, delay: i * 0.08 }}
            className="rounded-xl bg-paper-2 px-4 py-4"
          >
            <div className="font-display text-[24px] text-ink tabular leading-none">{it.v}</div>
            <div className="text-[12px] text-ink-3 mt-1.5">{it.k}</div>
          </motion.div>
        ))}
        <div className="col-span-2 flex items-center gap-2 text-[12px] text-ink-2 mt-1">
          <FileText size={14} className="text-blue" />
          Sent to your inbox. You read it, you do not write it.
        </div>
      </div>
    </Frame>
  );
}
