"use client";

import { motion } from "framer-motion";
import { Phone, Radar, MessagesSquare, LayoutGrid, MonitorSmartphone, FileText } from "lucide-react";
import { HeroCallVisual } from "@/components/voice/VoiceVisuals";
import { HeroScanVisual } from "@/components/leadgen/LeadGenVisuals";
import { HeroInboxVisual } from "@/components/inbound/InboundVisuals";
import { HeroMultiplyVisual } from "@/components/content/ContentVisuals";
import { HeroTabletVisual } from "@/components/opsoftware/OpsVisuals";
import { HeroProposalVisual } from "@/components/quote/QuoteVisuals";

const ease = [0.16, 1, 0.3, 1] as const;

type Feature = {
  n: string; key: string; href: string; icon: typeof Phone; title: string; tag: string;
  blurb: string; metric: string; metricLabel: string;
  rows: [string, string][];
  Visual: () => React.ReactElement;
};

const FEATURES: Feature[] = [
  {
    n: "01", key: "voice", href: "/agents/voice", icon: Phone, title: "Voice Agents", tag: "Calls",
    blurb: "Inbound and outbound calls answered in your voice. Leads qualified, jobs booked, deposits taken, the hard ones passed to you.",
    metric: "18s", metricLabel: "average, enquiry to booked",
    rows: [["Picks up", "Every call, first ring"], ["Qualifies", "Asks your questions, books the job"], ["Escalates", "Hands the tricky ones to you"]],
    Visual: HeroCallVisual,
  },
  {
    n: "02", key: "leadgen", href: "/agents/lead-gen", icon: Radar, title: "Lead Generation", tag: "Pipeline",
    blurb: "Finds buyers from public data, social, satellite and intent signals, scores them, and drafts the first message in your voice.",
    metric: "24/7", metricLabel: "scanning for your next job",
    rows: [["Finds", "Public data, social, intent signals"], ["Scores", "Only the leads worth your time"], ["Drafts", "Outreach in your voice, ready to send"]],
    Visual: HeroScanVisual,
  },
  {
    n: "03", key: "inbound", href: "/agents/inbound-outbound", icon: MessagesSquare, title: "Inbound and Outbound", tag: "Follow-up",
    blurb: "Every email, text and DM answered the same day. Cold leads warmed, dormant clients reactivated, every follow-up sent.",
    metric: "<60s", metricLabel: "to first reply, any channel",
    rows: [["Catches", "Email, SMS, DM, in one inbox"], ["Replies", "Same day, in your voice"], ["Reactivates", "Old clients and dead quotes"]],
    Visual: HeroInboxVisual,
  },
  {
    n: "04", key: "content", href: "/agents/content-ads", icon: LayoutGrid, title: "Content and Ads", tag: "Reach",
    blurb: "One finished job becomes a week of content: reels, posts, ads, all in your voice, scheduled, measured and A/B tested.",
    metric: "1 to 24", metricLabel: "one job, a week of content",
    rows: [["Creates", "Reels, posts, ads from one job"], ["Schedules", "Auto-posted at peak times"], ["Tests", "Doubles down on what converts"]],
    Visual: HeroMultiplyVisual,
  },
  {
    n: "05", key: "ops", href: "/agents/operating-software", icon: MonitorSmartphone, title: "Operating Software", tag: "Systems",
    blurb: "One system built around how your business runs: quoting, scheduling, invoicing and a dashboard of the whole operation.",
    metric: "1", metricLabel: "system, not seven tabs",
    rows: [["Quotes", "Priced from your rates"], ["Schedules", "The crew, the jobs, the week"], ["Invoices", "Billed and chased on autopilot"]],
    Visual: HeroTabletVisual,
  },
  {
    n: "06", key: "quote", href: "/agents/quote-proposals", icon: FileText, title: "Quote and Proposals", tag: "Proposals",
    blurb: "An enquiry becomes a finished quote in your format and your voice, ready for your one-tap review. Same day, every time.",
    metric: "4 min", metricLabel: "enquiry to a quote ready to send",
    rows: [["Reads", "Understands the enquiry"], ["Prices", "From your real rates"], ["Sends", "After your one-tap review"]],
    Visual: HeroProposalVisual,
  },
];

function FeatureRow({ f, flip }: { f: Feature; flip: boolean }) {
  const { Visual } = f;
  return (
    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
      {/* copy */}
      <motion.div
        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-120px" }}
        transition={{ duration: 0.6, ease }}
        className={flip ? "lg:order-2" : ""}
      >
        <div className="flex items-center gap-3 mb-5">
          <span className="grid place-items-center w-9 h-9 rounded-xl bg-blue-soft text-blue"><f.icon size={18} strokeWidth={1.9} /></span>
          <span className="label">{f.n} · {f.tag}</span>
        </div>
        <h3 className="font-display text-ink text-[clamp(28px,3.4vw,42px)] tracking-[-.02em] leading-[1.02] mb-4">{f.title}</h3>
        <p className="text-[16.5px] text-ink-2 leading-relaxed max-w-[42ch] mb-6">{f.blurb}</p>

        <div className="flex items-end gap-3 mb-5">
          <span className="font-display text-blue text-[clamp(40px,4.4vw,60px)] leading-[0.85] tabular">{f.metric}</span>
          <span className="text-[13px] text-ink-2 leading-tight max-w-[16ch] pb-1.5">{f.metricLabel}</span>
        </div>

        <div className="flex flex-col gap-1 mb-6 max-w-[400px]">
          {f.rows.map(([k, v]) => (
            <div key={k} className="flex items-baseline gap-4 py-1.5">
              <span className="label !text-[10px] !text-blue w-[78px] shrink-0">{k}</span>
              <span className="text-[14px] text-ink">{v}</span>
            </div>
          ))}
        </div>

        <a href={f.href} className="group inline-flex items-center gap-2 rounded-full bg-btn text-white px-6 py-3 text-[14.5px] font-semibold hover:bg-btn-hover transition-colors shadow-[0_8px_20px_-10px_rgba(0,113,227,.7)]">
          See it work
          <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
        </a>
      </motion.div>

      {/* live animation, the same component used on the agent's own page */}
      <motion.div
        initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease }}
        className={"flex justify-center " + (flip ? "lg:order-1" : "")}
      >
        <Visual />
      </motion.div>
    </div>
  );
}

export default function AutomationsTeaser() {
  return (
    <section id="agents" className="relative scroll-mt-20" style={{ background: "var(--paper)" }}>
      <div className="wrap pt-24 lg:pt-32 pb-8">
        <motion.div
          initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease }}
          className="max-w-2xl"
        >
          <span className="label block mb-5">What we build</span>
          <h2 className="font-display text-ink text-[clamp(32px,4.6vw,60px)] tracking-[-.02em] leading-[1.02]">
            Agents do the work.
            <br />
            <span className="text-blue">You do the rest.</span>
          </h2>
          <p className="mt-5 text-ink-2 text-[17px] leading-relaxed max-w-[52ch]">
            Not chatbots. Not workflows. Custom AI agents that handle the parts of your business you
            should not have to. Built from scratch, run together, owned by you.
          </p>
        </motion.div>
      </div>

      {/* six full feature rows, each reusing its own page animation */}
      <div className="wrap pb-24 lg:pb-32 flex flex-col gap-28 lg:gap-40">
        {FEATURES.map((f, i) => (
          <FeatureRow key={f.key} f={f} flip={i % 2 === 1} />
        ))}
      </div>
    </section>
  );
}
