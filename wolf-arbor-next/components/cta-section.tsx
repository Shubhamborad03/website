"use client";

import { Reveal } from "@/components/ui/reveal";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { ArrowRight } from "lucide-react";

const CONTACT_URL = "https://z8d9iav9qs2.typeform.com/to/zTzcDJPm";

const questions = [
  {
    n: "01",
    title: "Twenty past quotes",
    body: "Pairings to calibrate the AI pricing.",
  },
  {
    n: "02",
    title: "How you actually price",
    body: "$/metre, $/hour, $/job-by-size.",
  },
  {
    n: "03",
    title: "Equipment available",
    body: "Chipper. Cherry picker. Crane partner.",
  },
  {
    n: "04",
    title: "Service area + suburbs",
    body: "Defines the geo polygon.",
  },
  {
    n: "05",
    title: "Compliance status",
    body: "AQF, ASP Level 2, Workcover, ABN.",
  },
  {
    n: "06",
    title: "Phone setup",
    body: "Existing number, or fresh AU long-code.",
  },
];

export function CtaSection() {
  return (
    <section
      id="start"
      className="relative px-6 py-24 md:py-32 overflow-hidden"
    >
      <div className="max-w-5xl mx-auto">
        <Reveal className="text-center max-w-3xl mx-auto mb-14">
          <div className="text-[11px] font-mono uppercase tracking-[0.22em] text-forest mb-4">
            06 · What we need from you
          </div>
          <h2 className="text-balance text-3xl md:text-5xl font-semibold tracking-[-0.02em] leading-[1.05] text-ink">
            Six answers and we lock scope.
          </h2>
          <p className="text-muted text-[16px] md:text-[17px] leading-relaxed mt-5">
            Fill in the short form and we&apos;ll come back with a build plan
            inside a week.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 mb-14">
          {questions.map((q, i) => (
            <Reveal
              key={q.n}
              delay={i * 0.05}
              className="bg-sandSoft border border-sand rounded-2xl p-5"
            >
              <div className="text-[11px] font-mono uppercase tracking-[0.18em] text-amber mb-3">
                {q.n}
              </div>
              <div className="text-[15px] font-semibold text-ink mb-1">
                {q.title}
              </div>
              <div className="text-[13px] text-muted leading-snug">
                {q.body}
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="bg-forest text-bg rounded-3xl p-8 md:p-12 text-center">
          <div className="text-[11px] font-mono uppercase tracking-[0.22em] text-amber mb-4">
            Ready when you are
          </div>
          <h3 className="text-balance text-2xl md:text-4xl font-semibold tracking-[-0.02em] leading-[1.1] mb-8 max-w-xl mx-auto">
            Tell us about your tree-work business. We&apos;ll come back with a
            plan.
          </h3>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <MagneticButton
              href={CONTACT_URL}
              className="bg-amber text-ink hover:bg-amberDeep"
            >
              Contact us
              <ArrowRight className="w-4 h-4" />
            </MagneticButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
