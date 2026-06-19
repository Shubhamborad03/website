"use client";

import { motion, animate } from "framer-motion";
import { useEffect, useState } from "react";
import { Inbox, ScanText, FileText, PenLine, SendHorizonal, Timer } from "lucide-react";

const ease = [0.16, 1, 0.3, 1] as const;

function CountMoney({ to, delay = 0 }: { to: number; delay?: number }) {
  const [v, setV] = useState(0);
  useEffect(() => {
    const id = setTimeout(() => {
      const c = animate(0, to, { duration: 0.9, ease: [0.16, 1, 0.3, 1], onUpdate: (n) => setV(Math.round(n)) });
      return () => c.stop();
    }, delay * 1000);
    return () => clearTimeout(id);
  }, [to, delay]);
  return <>${v.toLocaleString()}</>;
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

const LINES = [
  ["Colorbond re-roof · 184m²", "$12,400"],
  ["Remove + cart old tin", "$1,850"],
  ["New gutters + downpipes", "$2,150"],
  ["Ridge capping + flashing", "$880"],
];

function useReplay(ms = 8500) {
  const [k, setK] = useState(0);
  useEffect(() => { const t = setInterval(() => setK((v) => v + 1), ms); return () => clearInterval(t); }, [ms]);
  return k;
}

/* hero — a proposal document assembling itself, ready for review */
export function HeroProposalVisual() {
  const k = useReplay();
  return (
    <div className="relative w-full max-w-[440px]">
      <div className="pointer-events-none absolute -inset-12 -z-10"
        style={{ background: "radial-gradient(ellipse 46% 50% at 50% 42%, rgba(59,134,255,.20), transparent 66%)" }} />
      <Frame>
        <Header icon={<FileText size={15} strokeWidth={1.9} />} label="Proposal · drafting" />
        <div key={k} className="p-5">
          {/* document */}
          <div className="rounded-2xl border border-line bg-white p-4">
            <div className="flex items-center justify-between mb-3">
              <div>
                <div className="font-display text-[15px] text-ink leading-none">Quote · #1043</div>
                <div className="text-[11px] text-ink-3 mt-1">For: J. Powell · Sunrise Beach</div>
              </div>
              <div className="text-right">
                <div className="label !text-[8px]">Prepared by</div>
                <div className="text-[11px] font-semibold text-ink">Your business</div>
              </div>
            </div>
            <div className="border-t border-line">
              {LINES.map(([k, v], i) => (
                <motion.div key={k}
                  initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, ease, delay: 0.3 + i * 0.25 }}
                  className="flex items-center justify-between py-2 border-b border-line last:border-0">
                  <span className="text-[12px] text-ink">{k}</span>
                  <span className="font-mono text-[12px] text-ink tabular">{v}</span>
                </motion.div>
              ))}
            </div>
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4, delay: 1.4 }}
              className="mt-2 flex items-center justify-between rounded-xl bg-blue-soft px-3 py-2">
              <span className="text-[11px] font-semibold text-blue-deep">Total inc GST</span>
              <span className="font-display text-[16px] text-blue-deep tabular"><CountMoney to={17280} delay={1.4} /></span>
            </motion.div>
          </div>
          {/* review action */}
          <motion.div
            initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 1.7 }}
            className="mt-3 flex items-center justify-between">
            <span className="inline-flex items-center gap-1.5 text-[12px] text-ink-3"><Timer size={13} className="text-blue" /> Drafted in 4 min</span>
            <span className="inline-flex items-center gap-1.5 text-[12px] font-semibold text-white bg-blue rounded-full px-3 py-1.5">Send for review <SendHorizonal size={12} /></span>
          </motion.div>
        </div>
      </Frame>
    </div>
  );
}

/* 1 — enquiry in */
export function EnquiryVisual() {
  return (
    <Frame>
      <Header icon={<Inbox size={15} strokeWidth={1.9} />} label="Enquiry" />
      <div className="p-5">
        <div className="rounded-2xl bg-paper-2 px-4 py-3 text-[13px] text-ink leading-relaxed">
          "Hi, after a quote to re-roof a single storey house in Sunrise Beach, about 180sqm, old tin needs removing. Gutters too."
        </div>
        <div className="mt-3 flex items-center gap-2 text-[12px] text-ink-3"><span className="w-1.5 h-1.5 rounded-full bg-blue" /> Came in via the website form, 7:48am</div>
      </div>
    </Frame>
  );
}

/* 2 — data pulled */
export function ExtractVisual() {
  const fields = [["Service", "Re-roof + gutters"], ["Area", "~180m²"], ["Remove old", "Yes · tin"], ["Suburb", "Sunrise Beach"]];
  return (
    <Frame>
      <Header icon={<ScanText size={15} strokeWidth={1.9} />} label="Extracted" />
      <div className="p-5 grid grid-cols-2 gap-2.5">
        {fields.map(([k, v], i) => (
          <motion.div key={k}
            initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.4, ease, delay: i * 0.08 }}
            className="rounded-xl bg-paper-2 px-3 py-3">
            <div className="label !text-[8px] mb-1">{k}</div>
            <div className="text-[12.5px] font-semibold text-ink">{v}</div>
          </motion.div>
        ))}
      </div>
    </Frame>
  );
}

/* 3 — priced from your rates */
export function PriceVisual() {
  return (
    <Frame>
      <Header icon={<FileText size={15} strokeWidth={1.9} />} label="Priced · your rates" />
      <div className="p-5">
        {LINES.map(([k, v], i) => (
          <motion.div key={k}
            initial={{ opacity: 0, x: 10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.4, ease, delay: i * 0.08 }}
            className="flex items-center justify-between py-2 border-b border-line last:border-0">
            <span className="text-[12.5px] text-ink">{k}</span>
            <span className="font-mono text-[12.5px] text-ink tabular">{v}</span>
          </motion.div>
        ))}
        <div className="mt-3 flex items-center justify-between rounded-xl bg-blue-soft px-4 py-2.5">
          <span className="text-[12px] font-semibold text-blue-deep">Total inc GST</span>
          <span className="font-display text-[16px] text-blue-deep tabular">$17,280</span>
        </div>
      </div>
    </Frame>
  );
}

/* 4 — in your format + voice */
export function VoiceVisual() {
  return (
    <Frame>
      <Header icon={<PenLine size={15} strokeWidth={1.9} />} label="Your format · your voice" />
      <div className="p-5">
        <div className="rounded-2xl border border-line p-4">
          <div className="h-2 w-1/3 rounded bg-blue/50 mb-3" />
          <div className="text-[12.5px] text-ink leading-relaxed mb-3">
            Thanks for the enquiry, J. Here is the quote for the Sunrise Beach re-roof. We use Colorbond Ultra and clean up every offcut before we leave.
          </div>
          <div className="space-y-1.5">
            <div className="h-1 w-full rounded bg-ink/10" />
            <div className="h-1 w-5/6 rounded bg-ink/10" />
            <div className="h-1 w-2/3 rounded bg-ink/10" />
          </div>
        </div>
        <div className="mt-3 text-[12px] text-ink-3">Your letterhead, your wording, your terms. Every time.</div>
      </div>
    </Frame>
  );
}

/* 5 — sent for review */
export function ReviewVisual() {
  return (
    <Frame>
      <Header icon={<PenLine size={15} strokeWidth={1.9} />} label="Your review" />
      <div className="p-5">
        <div className="rounded-2xl bg-paper-2 p-4 mb-3">
          <div className="flex items-center justify-between">
            <span className="text-[12.5px] font-semibold text-ink">Quote #1043 · $17,280</span>
            <span className="text-[10px] font-semibold text-ink-3 bg-white border border-line rounded px-2 py-0.5">Draft</span>
          </div>
          <div className="text-[11px] text-ink-3 mt-1">Waiting on your OK before it sends</div>
        </div>
        <div className="flex gap-2">
          <span className="flex-1 text-center text-[12px] font-semibold text-white bg-blue rounded-full py-2">Approve &amp; send</span>
          <span className="text-center text-[12px] font-semibold text-ink border border-line rounded-full py-2 px-4">Edit</span>
        </div>
      </div>
    </Frame>
  );
}

/* 6 — same day, every time */
export function SpeedVisual() {
  return (
    <Frame>
      <Header icon={<Timer size={15} strokeWidth={1.9} />} label="Speed" />
      <div className="p-6 grid grid-cols-2 gap-3">
        {[["4 min", "enquiry to draft"], ["Same day", "every quote out"], ["0", "quotes forgotten"], ["+ jobs", "won on speed"]].map(([v, l], i) => (
          <motion.div key={l}
            initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.4, ease, delay: i * 0.08 }}
            className="rounded-xl bg-paper-2 px-4 py-3.5">
            <div className="font-display text-[20px] text-ink tabular leading-none">{v}</div>
            <div className="label !text-[8px] mt-1.5">{l}</div>
          </motion.div>
        ))}
      </div>
    </Frame>
  );
}
