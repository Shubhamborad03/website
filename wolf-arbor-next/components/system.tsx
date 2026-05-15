"use client";

import { Reveal } from "@/components/ui/reveal";
import { PhoneMockup } from "@/components/phone-mockup";
import { MessageSquare, Brain, MousePointerClick, FileText } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    label: "Capture",
    title: "Twilio 24/7 SMS net.",
    body: "Missed call? Auto-text out in seconds: \"Send a photo, I'll have a quote in the hour.\"",
  },
  {
    icon: Brain,
    label: "Assess",
    title: "Claude vision reads the tree.",
    body: "Species, height, hazards, access — returned as structured JSON. You can override anything.",
  },
  {
    icon: MousePointerClick,
    label: "Approve",
    title: "One tap from up the tree.",
    body: "Card with photo, AI summary, draft price. Send / Edit / Site visit. Thirty-minute timer.",
  },
  {
    icon: FileText,
    label: "Close",
    title: "Branded quote in their inbox.",
    body: "PDF + Cal.com booking link. Customer taps a date. Job's on your calendar.",
  },
];

export function System() {
  return (
    <section
      id="system"
      className="relative px-6 py-24 md:py-32 bg-forest text-bg overflow-hidden"
    >
      {/* Subtle texture */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 30%, #FAF7F0 1px, transparent 1px), radial-gradient(circle at 80% 70%, #FAF7F0 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative max-w-7xl mx-auto">
        <Reveal className="max-w-3xl mb-16 md:mb-20">
          <div className="text-[11px] font-mono uppercase tracking-[0.22em] text-amber mb-4">
            02 · The core build
          </div>
          <h2 className="text-balance text-3xl md:text-5xl font-semibold tracking-[-0.02em] leading-[1.05]">
            A quote in under an hour. Any time. Any day.
          </h2>
          <p className="text-bg/70 text-[16px] md:text-[17px] leading-relaxed mt-5 max-w-2xl">
            Customer texts a photo. AI reads the tree. You approve in one tap.
            Quote lands before they finish dinner.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-14 lg:gap-20 items-start">
          {/* Phone — compact on mobile, doesn't overwhelm */}
          <Reveal className="flex justify-center lg:justify-start">
            <PhoneMockup />
          </Reveal>

          {/* Steps */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <Reveal
                  key={step.label}
                  delay={i * 0.07}
                  className="bg-bg/[0.04] border border-bg/10 rounded-2xl p-5 md:p-6"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-8 h-8 rounded-lg bg-amber/15 border border-amber/30 flex items-center justify-center text-amber">
                      <Icon className="w-4 h-4" strokeWidth={1.8} />
                    </div>
                    <div className="text-[11px] font-mono uppercase tracking-[0.2em] text-amber">
                      0{i + 1} · {step.label}
                    </div>
                  </div>
                  <div className="text-[16px] font-semibold mb-1.5">
                    {step.title}
                  </div>
                  <div className="text-[13px] text-bg/70 leading-relaxed">
                    {step.body}
                  </div>
                </Reveal>
              );
            })}

            <Reveal className="sm:col-span-2 grid grid-cols-3 gap-[1px] bg-bg/10 rounded-2xl overflow-hidden mt-2">
              <div className="bg-forest p-5">
                <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-bg/50 mb-1.5">
                  First quote
                </div>
                <div className="text-xl md:text-2xl font-semibold counter">
                  60 min
                </div>
              </div>
              <div className="bg-forest p-5">
                <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-bg/50 mb-1.5">
                  Industry avg
                </div>
                <div className="text-xl md:text-2xl font-semibold text-bg/55 counter">
                  24–72 hr
                </div>
              </div>
              <div className="bg-forest p-5">
                <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-bg/50 mb-1.5">
                  Conv. lift
                </div>
                <div className="text-xl md:text-2xl font-semibold text-amber counter">
                  +20–30%
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
