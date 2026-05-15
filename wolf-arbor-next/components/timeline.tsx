"use client";

import { Reveal } from "@/components/ui/reveal";
import { Check } from "lucide-react";

const weeks = [
  {
    label: "Days 1–7",
    title: "Phase one live",
    body: "Twilio + SMS engine + AI assessment. You take real quotes.",
  },
  {
    label: "Week 2",
    title: "Quote & close",
    body: "Branded PDF + Cal.com bookings + approval card.",
  },
  {
    label: "Week 3",
    title: "Operator app",
    body: "Pipeline + scheduling + Xero invoicing.",
  },
  {
    label: "Week 4",
    title: "Cron & comms",
    body: "Follow-ups, reviews, prune reminders.",
  },
  {
    label: "Week 5",
    title: "Growth engine",
    body: "Storm trigger + neighbour-drop + RE outreach.",
  },
  {
    label: "Week 6",
    title: "Insurance + PM",
    body: "Insurance panels + strata cold outreach.",
  },
  {
    label: "Weeks 7–8",
    title: "Tune & hand over",
    body: "Pricing tuned on real jobs. Handover + 30-day support.",
    final: true,
  },
];

export function Timeline() {
  return (
    <section id="build" className="relative px-6 py-24 md:py-32 max-w-7xl mx-auto">
      <Reveal className="max-w-2xl mb-14">
        <div className="text-[11px] font-mono uppercase tracking-[0.22em] text-forest mb-4">
          05 · The build
        </div>
        <h2 className="text-balance text-3xl md:text-5xl font-semibold tracking-[-0.02em] leading-[1.05] text-ink">
          First quotes flowing in days. Full system layered after.
        </h2>
        <p className="text-muted text-[16px] md:text-[17px] leading-relaxed mt-5">
          Phase one — SMS quote engine + AI assessment — runs your real jobs
          inside a week. The growth levers go on one at a time across the
          following weeks, so you&apos;re earning while we&apos;re building.
        </p>
      </Reveal>

      {/* Desktop horizontal timeline */}
      <div className="hidden md:block">
        <div className="relative">
          {/* Rail */}
          <div className="absolute top-5 left-5 right-5 h-px bg-sand" />

          <div className="grid grid-cols-7 gap-3">
            {weeks.map((w, i) => (
              <Reveal
                key={w.label}
                delay={i * 0.06}
                className="relative flex flex-col items-center text-center"
              >
                {/* Dot */}
                <div
                  className={
                    "relative z-10 w-10 h-10 rounded-full flex items-center justify-center border-2 " +
                    (w.final
                      ? "bg-amber border-amber text-bg"
                      : "bg-bg border-forest text-forest")
                  }
                >
                  {w.final ? (
                    <Check className="w-4 h-4" strokeWidth={2.5} />
                  ) : (
                    <span className="text-[11px] font-mono font-semibold">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  )}
                </div>

                <div
                  className={
                    "text-[11px] font-mono uppercase tracking-[0.18em] mt-4 mb-1 " +
                    (w.final ? "text-amber" : "text-forest")
                  }
                >
                  {w.label}
                </div>
                <div className="text-[15px] font-semibold text-ink mb-1.5 whitespace-nowrap">
                  {w.title}
                </div>
                <div className="text-[12px] text-muted leading-snug max-w-[180px]">
                  {w.body}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile vertical timeline */}
      <div className="md:hidden">
        <div className="relative pl-10">
          <div className="absolute top-3 bottom-3 left-4 w-px bg-sand" />
          <div className="space-y-7">
            {weeks.map((w, i) => (
              <Reveal
                key={w.label}
                delay={i * 0.05}
                className="relative"
              >
                <div
                  className={
                    "absolute -left-[34px] top-0.5 w-9 h-9 rounded-full flex items-center justify-center border-2 " +
                    (w.final
                      ? "bg-amber border-amber text-bg"
                      : "bg-bg border-forest text-forest")
                  }
                >
                  {w.final ? (
                    <Check className="w-3.5 h-3.5" strokeWidth={2.5} />
                  ) : (
                    <span className="text-[10px] font-mono font-semibold">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  )}
                </div>
                <div
                  className={
                    "text-[11px] font-mono uppercase tracking-[0.18em] mb-1 " +
                    (w.final ? "text-amber" : "text-forest")
                  }
                >
                  {w.label}
                </div>
                <div className="text-[16px] font-semibold text-ink mb-1">
                  {w.title}
                </div>
                <div className="text-[13px] text-muted leading-snug">
                  {w.body}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
