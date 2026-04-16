"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Can you really fix a leaking shower without removing the tiles?",
    a: "Yes! In most cases, we can permanently seal your leaking shower without removing a single tile. We use specialist waterproofing products that penetrate and seal the grout lines and substrate beneath, stopping leaks at the source.",
  },
  {
    q: "How long does a typical repair take?",
    a: "Most shower repairs are completed in 2–4 hours. Your shower is ready to use within 24 hours. Larger jobs like balcony repairs or retiling may take half a day to 3 days depending on scope.",
  },
  {
    q: "How much does a leaking shower repair cost?",
    a: "Every job is different, but our shower repairs typically cost a fraction of a full renovation. We offer free inspections and upfront, no-obligation quotes so you know exactly what to expect.",
  },
  {
    q: "Are you licensed and insured?",
    a: "Absolutely. We are fully licensed and insured, giving you complete peace of mind. We also use only premium, approved products from trusted brands like Laticrete.",
  },
  {
    q: "What areas do you service?",
    a: "We service the Gold Coast, Brisbane, and Brisbane South including Logan, Ipswich, Redlands, Beenleigh, Springfield and all surrounding areas.",
  },
  {
    q: "Do you offer a warranty on your work?",
    a: "Yes, all our work comes with a warranty. The specific warranty period depends on the type of repair. We stand behind every job we do.",
  },
];

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="section-padding">
      <div className="container-tight">
        <div className="mx-auto max-w-3xl">
          {/* Header */}
          <div className="text-center">
            <span className="inline-block font-heading text-sm font-semibold uppercase tracking-wider text-ocean-600">
              FAQ
            </span>
            <h2 className="section-heading mx-auto mt-2">
              Common Questions
            </h2>
          </div>

          {/* Accordion */}
          <div className="mt-8 space-y-3">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="overflow-hidden rounded-xl border border-navy-100 bg-white"
              >
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="flex w-full items-center justify-between px-6 py-5 text-left"
                >
                  <span className="pr-4 font-heading font-semibold text-navy-900">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-slate-400 transition-transform duration-200 ${
                      open === i ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {open === i && (
                  <div className="border-t border-navy-50 px-6 pb-5 pt-4 text-slate-600">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
