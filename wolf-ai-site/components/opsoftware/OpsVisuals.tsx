"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { LayoutDashboard, Workflow, FileSpreadsheet, CalendarClock, Wallet, Boxes } from "lucide-react";

function useReplay(ms = 8500) {
  const [k, setK] = useState(0);
  useEffect(() => { const t = setInterval(() => setK((v) => v + 1), ms); return () => clearInterval(t); }, [ms]);
  return k;
}

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

/* hero — a TABLET (iPad) showing the operator's live dashboard */
const HERO_KPIS = [
  ["Jobs booked", "9", "+2 today"],
  ["Revenue", "$48.2k", "+12%"],
  ["Quotes out", "14", "6 pending"],
  ["Win rate", "31%", "+4pts"],
] as const;

// weekday revenue: each bar is [actual %, target %, day label]
const HERO_CHART = [
  [44, 56, "M"],
  [60, 56, "T"],
  [52, 56, "W"],
  [78, 70, "T"],
  [66, 70, "F"],
  [88, 80, "S"],
  [72, 80, "S"],
] as const;

// funnel: label, count, bar width %
const HERO_FUNNEL = [
  ["New leads", "18", 100],
  ["Quoted", "11", 64],
  ["Negotiating", "7", 42],
  ["Won", "4", 24],
] as const;

const HERO_ACTIVITY = [
  ["Invoice paid", "$15,430", "2m"],
  ["Quote #1043 sent", "Sunrise Beach Rd", "18m"],
  ["Job booked", "Tewantin · gutter", "1h"],
  ["New enquiry", "Noosa Heads", "2h"],
] as const;

export function HeroTabletVisual() {
  const k = useReplay();
  return (
    <div className="relative w-full max-w-[560px]">
      <div className="pointer-events-none absolute -inset-12 -z-10"
        style={{ background: "radial-gradient(ellipse 48% 52% at 50% 44%, rgba(59,134,255,.20), transparent 66%)" }} />
      {/* tablet body (landscape) — milled bezel, screen inset, grounded */}
      <div className="relative rounded-[30px] p-[10px] shadow-[0_22px_34px_-20px_rgba(11,13,18,.6),0_6px_14px_-8px_rgba(11,13,18,.45),0_44px_80px_-50px_rgba(59,134,255,.4)]"
        style={{ background: "linear-gradient(155deg,#23262e,#0c0d11 60%)" }}>
        {/* camera dot */}
        <span className="absolute top-1/2 left-[5px] -translate-y-1/2 w-1 h-1 rounded-full bg-white/20" />
        {/* screen with inset highlight rim */}
        <div key={k} className="relative rounded-[22px] bg-paper overflow-hidden ring-1 ring-white/10"
          style={{ boxShadow: "inset 0 0 0 1px rgba(255,255,255,.06), inset 0 1px 0 rgba(255,255,255,.1)" }}>
          {/* top bar */}
          <div className="flex items-center gap-2 px-4 py-2.5 border-b border-line">
            <span className="grid place-items-center w-6 h-6 rounded-md bg-blue text-white"><LayoutDashboard size={13} /></span>
            <span className="text-[12px] font-semibold text-ink">Your business · today</span>
            <span className="ml-2 hidden sm:inline font-mono text-[9px] text-ink-3 tracking-[.08em]">Thu 19 Jun</span>
            <span className="ml-auto inline-flex items-center gap-1.5 font-mono text-[9px] text-blue"><span className="w-1 h-1 rounded-full bg-blue pulse-live" />live</span>
          </div>
          {/* KPI row — 4 cards */}
          <div className="grid grid-cols-4 gap-2 p-3 pb-2">
            {HERO_KPIS.map(([l, v, d], i) => (
              <motion.div key={l}
                initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, ease, delay: 0.15 + i * 0.08 }}
                className="rounded-xl bg-white border border-line px-2.5 py-2.5">
                <div className="font-display text-[17px] text-ink tabular leading-none">{v}</div>
                <div className="label !text-[7px] mt-1 truncate">{l}</div>
                <div className="font-mono text-[8px] text-blue mt-1 tabular">{d}</div>
              </motion.div>
            ))}
          </div>
          {/* chart + funnel */}
          <div className="grid grid-cols-[1.35fr_1fr] gap-2 px-3 pb-2">
            <div className="rounded-xl bg-white border border-line p-3">
              <div className="flex items-baseline justify-between mb-2">
                <span className="label !text-[8px]">Revenue · this week</span>
                <span className="font-mono text-[8px] text-ink-3">target</span>
              </div>
              <div className="flex items-end gap-1.5 h-[78px]">
                {HERO_CHART.map(([b, t], i) => (
                  <div key={i} className="relative flex-1 h-full flex items-end">
                    {/* target tick */}
                    <span className="absolute left-0 right-0 h-px bg-ink-3/35" style={{ bottom: `${t}%` }} />
                    <motion.div initial={{ height: 0 }} animate={{ height: `${b}%` }}
                      transition={{ duration: 0.7, ease, delay: 0.3 + i * 0.06 }}
                      className="w-full rounded-t bg-blue" style={{ opacity: 0.5 + b / 220 }} />
                  </div>
                ))}
              </div>
              <div className="flex gap-1.5 mt-1.5">
                {HERO_CHART.map(([, , d], i) => (
                  <span key={i} className="flex-1 text-center font-mono text-[7px] text-ink-3">{d}</span>
                ))}
              </div>
            </div>
            <div className="rounded-xl bg-white border border-line p-3">
              <div className="label !text-[8px] mb-2">Pipeline</div>
              <div className="flex flex-col gap-2">
                {HERO_FUNNEL.map(([l, v, w], i) => (
                  <div key={l}>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[9.5px] text-ink-2">{l}</span>
                      <span className="font-mono text-[9.5px] text-ink tabular">{v}</span>
                    </div>
                    <div className="h-1.5 rounded-full bg-paper-2 overflow-hidden">
                      <motion.div initial={{ width: 0 }} animate={{ width: `${w}%` }}
                        transition={{ duration: 0.6, ease, delay: 0.4 + i * 0.08 }}
                        className="h-full rounded-full bg-blue" style={{ opacity: 0.55 + i * 0.12 }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* recent activity feed */}
          <div className="px-3 pb-3">
            <div className="rounded-xl bg-white border border-line px-3 py-2.5">
              <div className="flex items-center justify-between mb-2">
                <span className="label !text-[8px]">Recent activity</span>
                <span className="font-mono text-[8px] text-ink-3">live feed</span>
              </div>
              <div className="flex flex-col">
                {HERO_ACTIVITY.map(([a, meta, t], i) => (
                  <motion.div key={a + meta}
                    initial={{ opacity: 0, x: -6 }} animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, ease, delay: 0.5 + i * 0.1 }}
                    className="flex items-center gap-2 py-1.5 border-b border-line last:border-0">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue shrink-0" style={{ opacity: 0.5 + (HERO_ACTIVITY.length - i) / (HERO_ACTIVITY.length * 1.4) }} />
                    <span className="text-[10px] text-ink font-medium shrink-0">{a}</span>
                    <span className="text-[10px] text-ink-3 truncate">{meta}</span>
                    <span className="ml-auto font-mono text-[8px] text-ink-3 tabular shrink-0">{t}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4 text-center text-[12px] text-ink-3">One screen for how the whole business is actually running.</div>
    </div>
  );
}

/* hero (header) variant — the SAME live dashboard, in a clean app window (no iPad mockup) */
export function HeroDashVisual() {
  const k = useReplay();
  return (
    <div className="relative w-full max-w-[440px]">
      <div className="pointer-events-none absolute -inset-12 -z-10"
        style={{ background: "radial-gradient(ellipse 48% 52% at 50% 44%, rgba(59,134,255,.20), transparent 66%)" }} />
      <Frame>
        <Header icon={<LayoutDashboard size={15} strokeWidth={1.9} />} label="Your business · today" />
        <div key={k}>
          {/* KPI row — 4 cards */}
          <div className="grid grid-cols-4 gap-2 p-3 pb-2">
            {HERO_KPIS.map(([l, v, d], i) => (
              <motion.div key={l}
                initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, ease, delay: 0.15 + i * 0.08 }}
                className="rounded-xl bg-white border border-line px-2.5 py-2.5">
                <div className="font-display text-[17px] text-ink tabular leading-none">{v}</div>
                <div className="label !text-[7px] mt-1 truncate">{l}</div>
                <div className="font-mono text-[8px] text-blue mt-1 tabular">{d}</div>
              </motion.div>
            ))}
          </div>
          {/* chart + funnel */}
          <div className="grid grid-cols-[1.35fr_1fr] gap-2 px-3 pb-2">
            <div className="rounded-xl bg-white border border-line p-3">
              <div className="flex items-baseline justify-between mb-2">
                <span className="label !text-[8px]">Revenue · this week</span>
                <span className="font-mono text-[8px] text-ink-3">target</span>
              </div>
              <div className="flex items-end gap-1.5 h-[78px]">
                {HERO_CHART.map(([b, t], i) => (
                  <div key={i} className="relative flex-1 h-full flex items-end">
                    <span className="absolute left-0 right-0 h-px bg-ink-3/35" style={{ bottom: `${t}%` }} />
                    <motion.div initial={{ height: 0 }} animate={{ height: `${b}%` }}
                      transition={{ duration: 0.7, ease, delay: 0.3 + i * 0.06 }}
                      className="w-full rounded-t bg-blue" style={{ opacity: 0.5 + b / 220 }} />
                  </div>
                ))}
              </div>
              <div className="flex gap-1.5 mt-1.5">
                {HERO_CHART.map(([, , d], i) => (
                  <span key={i} className="flex-1 text-center font-mono text-[7px] text-ink-3">{d}</span>
                ))}
              </div>
            </div>
            <div className="rounded-xl bg-white border border-line p-3">
              <div className="label !text-[8px] mb-2">Pipeline</div>
              <div className="flex flex-col gap-2">
                {HERO_FUNNEL.map(([l, v, w], i) => (
                  <div key={l}>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[9.5px] text-ink-2">{l}</span>
                      <span className="font-mono text-[9.5px] text-ink tabular">{v}</span>
                    </div>
                    <div className="h-1.5 rounded-full bg-paper-2 overflow-hidden">
                      <motion.div initial={{ width: 0 }} animate={{ width: `${w}%` }}
                        transition={{ duration: 0.6, ease, delay: 0.4 + i * 0.08 }}
                        className="h-full rounded-full bg-blue" style={{ opacity: 0.55 + i * 0.12 }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* recent activity feed */}
          <div className="px-3 pb-3">
            <div className="rounded-xl bg-white border border-line px-3 py-2.5">
              <div className="flex items-center justify-between mb-2">
                <span className="label !text-[8px]">Recent activity</span>
                <span className="font-mono text-[8px] text-ink-3">live feed</span>
              </div>
              <div className="flex flex-col">
                {HERO_ACTIVITY.map(([a, meta, t], i) => (
                  <motion.div key={a + meta}
                    initial={{ opacity: 0, x: -6 }} animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, ease, delay: 0.5 + i * 0.1 }}
                    className="flex items-center gap-2 py-1.5 border-b border-line last:border-0">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue shrink-0" style={{ opacity: 0.5 + (HERO_ACTIVITY.length - i) / (HERO_ACTIVITY.length * 1.4) }} />
                    <span className="text-[10px] text-ink font-medium shrink-0">{a}</span>
                    <span className="text-[10px] text-ink-3 truncate">{meta}</span>
                    <span className="ml-auto font-mono text-[8px] text-ink-3 tabular shrink-0">{t}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Frame>
    </div>
  );
}

/* 1 — replaces the SaaS pile */
export function ReplaceVisual() {
  return (
    <Frame>
      <Header icon={<Boxes size={15} strokeWidth={1.9} />} label="One system · not seven tabs" />
      <div className="p-5">
        <div className="grid grid-cols-3 gap-2 mb-3 opacity-60">
          {["CRM", "Sheets", "Quoting", "Calendar", "Invoices", "Notes"].map((s) => (
            <div key={s} className="rounded-lg border border-line bg-paper-2 px-2 py-3 text-center text-[10px] text-ink-3 line-through">{s}</div>
          ))}
        </div>
        <div className="flex justify-center text-ink-3 text-[12px] mb-3">becomes</div>
        <div className="rounded-xl bg-blue-soft border border-blue/30 px-4 py-4 text-center">
          <div className="font-display text-[16px] text-blue-deep">One place, built for you</div>
        </div>
      </div>
    </Frame>
  );
}

/* 2 — built to your workflow */
export function WorkflowVisual() {
  const steps = ["Enquiry", "Quote", "Schedule", "Job", "Invoice"];
  return (
    <Frame>
      <Header icon={<Workflow size={15} strokeWidth={1.9} />} label="Your workflow · wired in" />
      <div className="p-5">
        <div className="flex items-center justify-between">
          {steps.map((s, i) => (
            <div key={s} className="flex items-center">
              <motion.div initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
                transition={{ duration: 0.35, ease, delay: i * 0.1 }}
                className="grid place-items-center w-12 h-12 rounded-xl bg-paper-2 border border-line text-[9px] font-semibold text-ink text-center leading-tight px-1">{s}</motion.div>
              {i < steps.length - 1 && <span className="w-3 h-px bg-blue/40 mx-0.5" />}
            </div>
          ))}
        </div>
        <div className="mt-4 text-[12px] text-ink-3">Built around how you actually run, not how a SaaS wants you to.</div>
      </div>
    </Frame>
  );
}

/* 3 — quoting */
export function QuotingVisual() {
  return (
    <Frame>
      <Header icon={<FileSpreadsheet size={15} strokeWidth={1.9} />} label="Quoting · built in" />
      <div className="p-5">
        {[["Colorbond re-roof", "$12,400"], ["Gutter replacement", "$2,150"], ["Ridge capping", "$880"]].map(([k, v], i) => (
          <motion.div key={k} initial={{ opacity: 0, x: 10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.4, ease, delay: i * 0.1 }}
            className="flex items-center justify-between border-b border-line py-2.5 last:border-0">
            <span className="text-[12.5px] text-ink">{k}</span>
            <span className="font-mono text-[12.5px] text-ink tabular">{v}</span>
          </motion.div>
        ))}
        <div className="mt-3 flex items-center justify-between rounded-xl bg-blue-soft px-4 py-2.5">
          <span className="text-[12px] font-semibold text-blue-deep">Total</span>
          <span className="font-display text-[16px] text-blue-deep tabular">$15,430</span>
        </div>
      </div>
    </Frame>
  );
}

/* 4 — scheduling */
export function SchedulingVisual() {
  const jobs = [["Mon", "Sunrise Beach Rd"], ["Wed", "Tewantin · gutter"], ["Fri", "Noosa Heads · re-roof"]];
  return (
    <Frame>
      <Header icon={<CalendarClock size={15} strokeWidth={1.9} />} label="Scheduling · the crew" />
      <div className="p-5 flex flex-col gap-2.5">
        {jobs.map(([d, j], i) => (
          <motion.div key={j} initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.4, ease, delay: i * 0.1 }}
            className="flex items-center gap-3 rounded-xl bg-paper-2 px-4 py-3">
            <span className="grid place-items-center w-10 h-10 rounded-lg bg-white border border-line font-mono text-[11px] text-blue">{d}</span>
            <span className="text-[12.5px] text-ink">{j}</span>
          </motion.div>
        ))}
      </div>
    </Frame>
  );
}

/* 5 — invoicing */
export function InvoicingVisual() {
  return (
    <Frame>
      <Header icon={<Wallet size={15} strokeWidth={1.9} />} label="Invoicing · auto" />
      <div className="p-5">
        <div className="rounded-xl border border-line p-4 mb-3">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[12px] font-semibold text-ink">Invoice #1042</span>
            <span className="text-[10px] font-semibold text-blue bg-blue-soft rounded px-2 py-0.5">Paid</span>
          </div>
          <div className="font-display text-[24px] text-ink tabular leading-none">$15,430</div>
          <div className="text-[11px] text-ink-3 mt-1.5">Sent on job completion · paid in 2 days</div>
        </div>
        <div className="flex items-center gap-2 text-[12px] text-ink-3"><span className="w-1.5 h-1.5 rounded-full bg-blue" /> No more chasing payments by text</div>
      </div>
    </Frame>
  );
}

/* 6 — one dashboard (mini) */
export function DashVisual() {
  return (
    <Frame>
      <Header icon={<LayoutDashboard size={15} strokeWidth={1.9} />} label="Reporting · daily" />
      <div className="p-5 grid grid-cols-2 gap-3">
        {[["Booked", "9"], ["Revenue", "$48.2k"], ["Avg job", "$5.3k"], ["Win rate", "31%"]].map(([l, v], i) => (
          <motion.div key={l} initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.4, ease, delay: i * 0.08 }}
            className="rounded-xl bg-paper-2 px-4 py-3.5">
            <div className="font-display text-[22px] text-ink tabular leading-none">{v}</div>
            <div className="label !text-[8px] mt-1.5">{l}</div>
          </motion.div>
        ))}
      </div>
    </Frame>
  );
}
