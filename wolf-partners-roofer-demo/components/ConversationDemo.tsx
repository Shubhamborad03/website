"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

type Msg = {
  id: string;
  from: "ai" | "homeowner";
  text: string;
  attachment?: boolean;
  delay: number;
  // Y position percentage within phone chat area (0 = top, 1 = bottom)
  // Used by the arrow system to point to this exact message
  yPct: number;
};

// Carefully tuned to match where each bubble sits inside the phone chat area
const MESSAGES: Msg[] = [
  { id: "m1", from: "ai", text: "Hi Sarah — saw your quote request. Had a look at your roof from above.", delay: 400, yPct: 0.12 },
  { id: "m2", from: "homeowner", text: "Yeah go for it", delay: 1400, yPct: 0.27 },
  { id: "m3", from: "ai", text: "Concrete tile, ~218m². Heavy moss south face. ~25–30 years old. Restoration not replacement.", delay: 2200, yPct: 0.43 },
  { id: "m4", from: "ai", text: "Range below. Final number locks at the on-site inspection.", attachment: true, delay: 3300, yPct: 0.62 },
  { id: "m5", from: "homeowner", text: "Thursday 10am works", delay: 4900, yPct: 0.83 },
  { id: "m6", from: "ai", text: "Locked in. Stephen will text 15 mins out — full report on his phone.", delay: 5800, yPct: 0.93 },
];

// Each callout anchors to a specific message
const CALLOUTS = [
  {
    side: "left" as const,
    targetIdx: 0,
    title: "TRAINED IN YOUR VOICE",
    body: "Your past emails, quotes, texts.",
  },
  {
    side: "right" as const,
    targetIdx: 2,
    title: "HONEST ABOUT WHAT AI SAW",
    body: "Never invents damage.",
  },
  {
    side: "left" as const,
    targetIdx: 3,
    title: "LIVE QUOTE ATTACHED",
    body: "Branded to you. Site visit confirms.",
  },
  {
    side: "right" as const,
    targetIdx: 5,
    title: "BOOKED + WARMED UP",
    body: "Stephen arrives ready to close.",
  },
];

// Phone dimensions used for arrow geometry
const PHONE_W = 300;
const PHONE_H = 600;
const CHAT_TOP = 70;       // header height inside phone
const CHAT_BOTTOM = PHONE_H - 14; // padding before bottom

function bubbleY(yPct: number): number {
  return CHAT_TOP + yPct * (CHAT_BOTTOM - CHAT_TOP);
}

export default function ConversationDemo() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-25%" });
  const [visible, setVisible] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const timers = MESSAGES.map((msg, i) =>
      setTimeout(() => setVisible(i + 1), msg.delay)
    );
    return () => timers.forEach(clearTimeout);
  }, [inView]);

  return (
    <section
      id="conversation"
      ref={ref}
      className="relative py-20 lg:py-28 bg-fog"
    >
      <div className="max-w-6xl mx-auto px-5 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-10 lg:mb-14"
        >
          <div className="text-[11px] uppercase tracking-wider text-gold-deep font-bold mb-4">
            02 — The conversation
          </div>
          <h2 className="font-display text-[36px] sm:text-[56px] lg:text-[72px] leading-[1.0] tracking-[-0.03em] font-extrabold max-w-3xl mx-auto">
            AI talks to every customer.
            <br />
            <span className="text-graphite">In your voice.</span>
          </h2>
        </motion.div>

        {/* DESKTOP — phone with side callouts + arrows */}
        <div className="hidden lg:flex justify-center relative" style={{ minHeight: PHONE_H + 40 }}>
          <div className="relative" style={{ width: 900, height: PHONE_H }}>
            {/* Phone centred */}
            <div
              className="absolute"
              style={{
                left: (900 - PHONE_W) / 2,
                top: 0,
                width: PHONE_W,
                height: PHONE_H,
              }}
            >
              <Phone visible={visible} highlightId={null} />
            </div>

            {/* SVG layer with all arrows */}
            <svg
              className="absolute inset-0 pointer-events-none"
              width="900"
              height={PHONE_H}
              viewBox={`0 0 900 ${PHONE_H}`}
            >
              {CALLOUTS.map((c, i) => {
                const target = MESSAGES[c.targetIdx];
                const targetY = bubbleY(target.yPct);
                const phoneLeft = (900 - PHONE_W) / 2;
                const phoneRight = phoneLeft + PHONE_W;

                if (c.side === "left") {
                  // Callout positioned on left side, arrow points right into phone
                  const startX = phoneLeft - 6;
                  const endX = phoneLeft + 24;
                  return (
                    <g key={i}>
                      <motion.path
                        d={`M ${startX - 60} ${targetY} Q ${startX - 20} ${targetY - 6}, ${startX} ${targetY}`}
                        stroke="#C5A44E"
                        strokeWidth="1.5"
                        strokeDasharray="3 3"
                        fill="none"
                        initial={{ pathLength: 0 }}
                        whileInView={{ pathLength: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 1 + i * 0.2 }}
                      />
                      <motion.path
                        d={`M ${startX - 5} ${targetY - 4} L ${startX} ${targetY} L ${startX - 5} ${targetY + 4}`}
                        stroke="#C5A44E"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="none"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.2, delay: 1.5 + i * 0.2 }}
                      />
                    </g>
                  );
                } else {
                  const startX = phoneRight + 6;
                  return (
                    <g key={i}>
                      <motion.path
                        d={`M ${startX + 60} ${targetY} Q ${startX + 20} ${targetY - 6}, ${startX} ${targetY}`}
                        stroke="#C5A44E"
                        strokeWidth="1.5"
                        strokeDasharray="3 3"
                        fill="none"
                        initial={{ pathLength: 0 }}
                        whileInView={{ pathLength: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 1 + i * 0.2 }}
                      />
                      <motion.path
                        d={`M ${startX + 5} ${targetY - 4} L ${startX} ${targetY} L ${startX + 5} ${targetY + 4}`}
                        stroke="#C5A44E"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="none"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.2, delay: 1.5 + i * 0.2 }}
                      />
                    </g>
                  );
                }
              })}
            </svg>

            {/* Callout text positioned at message Y */}
            {CALLOUTS.map((c, i) => {
              const targetY = bubbleY(MESSAGES[c.targetIdx].yPct);
              const phoneLeft = (900 - PHONE_W) / 2;
              const phoneRight = phoneLeft + PHONE_W;

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.6 + i * 0.2 }}
                  className="absolute"
                  style={{
                    [c.side === "left" ? "right" : "left"]: c.side === "left" ? 900 - phoneLeft + 70 : phoneRight + 70,
                    top: targetY - 22,
                    width: 200,
                    textAlign: c.side === "left" ? "right" : "left",
                  }}
                >
                  <div className={`flex items-center gap-1.5 mb-1 ${c.side === "left" ? "justify-end" : ""}`}>
                    <div className="w-1 h-1 rounded-full bg-gold" />
                    <div className="text-[10px] uppercase tracking-wider text-gold-deep font-bold">
                      {c.title}
                    </div>
                  </div>
                  <div className="font-display text-[13px] font-bold leading-tight text-ink">
                    {c.body}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* MOBILE — phone, then callouts above & below with vertical arrows */}
        <div className="lg:hidden relative max-w-md mx-auto">
          {/* Top callouts (for first 2 messages) */}
          <div className="space-y-3 mb-4">
            {CALLOUTS.slice(0, 2).map((c, i) => (
              <MobileCallout key={i} callout={c} delay={i * 0.15} />
            ))}
          </div>

          <div className="mx-auto" style={{ width: PHONE_W }}>
            <Phone visible={visible} highlightId={null} />
          </div>

          {/* Bottom callouts (for last 2 messages) */}
          <div className="space-y-3 mt-4">
            {CALLOUTS.slice(2).map((c, i) => (
              <MobileCallout key={i} callout={c} delay={(i + 2) * 0.15} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function MobileCallout({ callout, delay }: { callout: typeof CALLOUTS[0]; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay }}
      className="flex items-center gap-3 p-3 rounded-xl bg-white border border-ink/[0.08]"
    >
      <div className="w-1 self-stretch bg-gold rounded-full shrink-0" />
      <div className="flex-1">
        <div className="text-[9px] uppercase tracking-wider text-gold-deep font-bold mb-0.5">
          {callout.title}
        </div>
        <div className="text-[12px] font-bold leading-snug">{callout.body}</div>
      </div>
    </motion.div>
  );
}

function Phone({ visible, highlightId }: { visible: number; highlightId: string | null }) {
  return (
    <div className="relative bg-ink rounded-[2.5rem] p-2.5 shadow-[0_30px_60px_-20px_rgba(10,10,10,0.4)]" style={{ width: PHONE_W, height: PHONE_H }}>
      <div className="bg-fog-soft rounded-[2rem] overflow-hidden h-full relative flex flex-col">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-6 bg-ink rounded-b-2xl z-10" />
        <div className="pt-9 pb-3 px-3 border-b border-ink/[0.06] flex items-center gap-2 bg-fog-soft/95 backdrop-blur shrink-0">
          <div className="text-gold-deep">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
              <path d="M15 6L9 12L15 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <div className="flex-1 flex flex-col items-center -ml-3">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-gold to-gold-deep flex items-center justify-center text-fog-soft font-bold text-[13px]">D</div>
            <div className="text-[10px] font-semibold mt-0.5">Dragon Roofing</div>
            <div className="text-[8px] text-ink/40">Assistant</div>
          </div>
        </div>
        <div className="flex-1 overflow-hidden px-2.5 py-3 space-y-1.5 relative">
          {MESSAGES.slice(0, visible).map((msg) => (
            <Message key={msg.id} msg={msg} />
          ))}
          {visible < MESSAGES.length && visible > 0 && (
            <Typing from={MESSAGES[visible]?.from || "ai"} />
          )}
        </div>
      </div>
    </div>
  );
}

function Message({ msg }: { msg: Msg }) {
  const isAi = msg.from === "ai";
  return (
    <motion.div
      initial={{ opacity: 0, y: 6, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.3 }}
      className={`flex ${isAi ? "justify-start" : "justify-end"}`}
    >
      <div className="max-w-[78%]">
        <div
          className={`px-3 py-2 text-[11.5px] leading-[1.4] ${
            isAi ? "bg-mist text-ink rounded-2xl rounded-bl-md" : "bg-[#0a84ff] text-white rounded-2xl rounded-br-md"
          }`}
        >
          {msg.text}
        </div>
        {msg.attachment && (
          <motion.div
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.3 }}
            className="mt-1 inline-block bg-white border border-gold/40 rounded-xl rounded-bl-md p-2.5 shadow-sm max-w-[210px]"
          >
            <div className="text-[8px] uppercase tracking-wider text-gold-deep font-bold">
              Preliminary quote
            </div>
            <div className="font-display text-[11px] font-bold leading-tight mt-0.5">
              Restoration · 218m²
            </div>
            <div className="mt-1 pt-1 border-t border-ink/[0.05]">
              <div className="font-display text-[15px] font-extrabold tabular leading-none">
                $9.8K — $13.4K
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}

function Typing({ from }: { from: "ai" | "homeowner" }) {
  const isAi = from === "ai";
  return (
    <div className={`flex ${isAi ? "justify-start" : "justify-end"}`}>
      <div className={`px-2.5 py-1.5 ${isAi ? "bg-mist rounded-2xl rounded-bl-md" : "bg-[#0a84ff] rounded-2xl rounded-br-md"}`}>
        <div className="flex gap-1">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.18 }}
              className={`w-1.5 h-1.5 rounded-full ${isAi ? "bg-ink/40" : "bg-white/70"}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
