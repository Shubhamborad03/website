"use client";

import { Reveal } from "@/components/ui/reveal";
import {
  PhoneMissed,
  Car,
  Clock,
  MessageCircleQuestion,
  Star,
  CalendarClock,
  CloudRain,
} from "lucide-react";

const leaks = [
  {
    icon: PhoneMissed,
    title: "Missed calls",
    value: "5–10 / wk",
    body: "Voicemail eats them. Half never call back.",
  },
  {
    icon: Car,
    title: "Wasted site visits",
    value: "3–5 hrs / wk",
    body: "Half don't book. You still drove there.",
  },
  {
    icon: Clock,
    title: "Slow quotes",
    value: "20–30% lost",
    body: "Industry baseline is 24–72 hrs. First-in wins.",
  },
  {
    icon: MessageCircleQuestion,
    title: "Quiet quotes",
    value: "8–15% lost",
    body: "\"Thinking about it\" never gets a nudge.",
  },
  {
    icon: Star,
    title: "No reviews asked",
    value: "Rank slips",
    body: "Top-3 Google wins 80% of clicks. You aren't there.",
  },
  {
    icon: CalendarClock,
    title: "No re-engagement",
    value: "$300–800 / mo",
    body: "18-month prune cycles. Customer Googles it again.",
  },
  {
    icon: CloudRain,
    title: "Storm timing",
    value: "$15–40k / event",
    body: "Storm hits at 2am. You're the eighth text, not the first.",
  },
];

export function Leaks() {
  return (
    <section
      id="leaks"
      className="relative px-6 py-24 md:py-32 max-w-7xl mx-auto"
    >
      <Reveal className="max-w-2xl mb-14">
        <div className="text-[11px] font-mono uppercase tracking-[0.22em] text-forest mb-4">
          01 · The diagnosis
        </div>
        <h2 className="text-balance text-3xl md:text-5xl font-semibold tracking-[-0.02em] leading-[1.05] text-ink">
          Most loppers leak seven ways every week.
        </h2>
        <p className="text-muted text-[16px] md:text-[17px] leading-relaxed mt-5 max-w-xl">
          You can&apos;t pick up the phone from twelve metres up a gum. Here&apos;s where the
          money actually disappears.
        </p>
      </Reveal>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
        {leaks.map((leak, i) => {
          const Icon = leak.icon;
          return (
            <Reveal
              key={leak.title}
              delay={i * 0.05}
              className="group relative bg-sandSoft border border-sand rounded-2xl p-5 md:p-6 hover:bg-bg hover:shadow-card transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-5">
                <div className="w-9 h-9 rounded-xl bg-bg border border-sand flex items-center justify-center text-forest">
                  <Icon className="w-4.5 h-4.5" strokeWidth={1.8} />
                </div>
                <div className="text-[11px] font-mono uppercase tracking-[0.18em] text-muted">
                  {String(i + 1).padStart(2, "0")}
                </div>
              </div>
              <div className="text-[15px] font-semibold text-ink mb-1">
                {leak.title}
              </div>
              <div className="text-[13px] text-muted leading-snug mb-4">
                {leak.body}
              </div>
              <div className="text-[16px] font-semibold text-forest counter">
                {leak.value}
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
