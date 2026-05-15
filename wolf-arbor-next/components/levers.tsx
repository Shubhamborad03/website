"use client";

import { Reveal } from "@/components/ui/reveal";
import {
  Clock,
  PhoneCall,
  Star,
  CloudLightning,
  Repeat,
  MapPin,
  Building2,
  Briefcase,
  Shield,
  CloudSun,
} from "lucide-react";

const levers = [
  {
    icon: Clock,
    title: "1-hour quote moat",
    body: "60 minutes, all hours. First-quote-in wins.",
    value: "+20–30%",
    unit: "conversion",
  },
  {
    icon: PhoneCall,
    title: "24/7 capture net",
    body: "Every missed call gets an auto-SMS. Photo back, quote out.",
    value: "$1.5–3k",
    unit: "/ wk recovered",
  },
  {
    icon: Star,
    title: "Review-velocity engine",
    body: "Auto-ask 24 hrs after every job. 5 → 50+ reviews/yr.",
    value: "8–10×",
    unit: "reviews/yr",
  },
  {
    icon: CloudLightning,
    title: "Storm-triggered SMS",
    body: "BoM alert → batch text to past customers. You tap approve.",
    value: "$15–40k",
    unit: "/ big storm",
  },
  {
    icon: Repeat,
    title: "Prune reminders",
    body: "18 + 36 months after every job. Cohort compounds.",
    value: "$300–800",
    unit: "/ mo, growing",
  },
  {
    icon: MapPin,
    title: "Neighbour-drop flyers",
    body: "200m radius PDF auto-generated post-job. Print & drop.",
    value: "$1–6k",
    unit: "/ drop",
  },
  {
    icon: Building2,
    title: "Real-estate engine",
    body: "Cold-email vendor-prep offer to every RE agent in your area.",
    value: "25–80",
    unit: "jobs/yr potential",
  },
  {
    icon: Briefcase,
    title: "PM & strata outreach",
    body: "Free annual audit as foot-in-door. Recurring once signed.",
    value: "$10–50k",
    unit: "/ contract / yr",
  },
  {
    icon: Shield,
    title: "Insurance panels",
    body: "Drafted applications + tracking for the 8 major AU insurers.",
    value: "$20–80k",
    unit: "/ panel / yr",
  },
  {
    icon: CloudSun,
    title: "Smart weather scheduling",
    body: "Forecast above threshold? Auto-rebook customers, no churn.",
    value: "0",
    unit: "jobs dropped",
  },
];

export function Levers() {
  return (
    <section
      id="levers"
      className="relative px-6 py-24 md:py-32 max-w-7xl mx-auto"
    >
      <Reveal className="max-w-2xl mb-14">
        <div className="text-[11px] font-mono uppercase tracking-[0.22em] text-forest mb-4">
          03 · The fixes
        </div>
        <h2 className="text-balance text-3xl md:text-5xl font-semibold tracking-[-0.02em] leading-[1.05] text-ink">
          Ten levers. One for every leak above.
        </h2>
        <p className="text-muted text-[16px] md:text-[17px] leading-relaxed mt-5">
          Each one runs silently in the background — webhooks, cron jobs, BoM
          alerts. They generate the leads, recover the missed ones, and turn
          every closed job into the next one. You see only the outcomes.
        </p>
      </Reveal>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 md:gap-4">
        {levers.map((l, i) => {
          const Icon = l.icon;
          return (
            <Reveal
              key={l.title}
              delay={i * 0.04}
              className="group relative bg-bg border border-sand rounded-2xl p-5 hover:border-forest/30 hover:shadow-card transition-all duration-300 flex flex-col"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-forest text-bg flex items-center justify-center group-hover:bg-amber transition-colors">
                  <Icon className="w-4.5 h-4.5" strokeWidth={1.8} />
                </div>
                <div className="text-[10px] font-mono uppercase tracking-[0.18em] text-muted">
                  {String(i + 1).padStart(2, "0")}
                </div>
              </div>

              <div className="text-[14px] font-semibold text-ink mb-1.5 leading-tight">
                {l.title}
              </div>
              <div className="text-[12px] text-muted leading-snug mb-5 flex-1">
                {l.body}
              </div>

              <div className="pt-3 border-t border-sand">
                <div className="text-[18px] font-semibold text-forest counter leading-none">
                  {l.value}
                </div>
                <div className="text-[10px] font-mono uppercase tracking-[0.15em] text-muted mt-1">
                  {l.unit}
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
