"use client";

import { useState } from "react";

/* Reordered: safety first, then frequency, then termite specifics */
const faqs = [
  {
    q: "Is the pest treatment safe for my kids and pets?",
    a: "Yes. We use family and pet-friendly products applied by licensed technicians. You simply stay off treated surfaces until dry — typically 1-2 hours. That's it.",
  },
  {
    q: "Do I need to leave the house during treatment?",
    a: "For general pest treatments, no — you can stay home. Just avoid treated rooms until surfaces dry. For termite barrier installations, pets should be kept inside during the process (about 7-8 hours).",
  },
  {
    q: "How often should I get a pest treatment?",
    a: "We recommend annual treatments for most Sunshine Coast homes. Our subtropical climate means pests are active year-round, and annual treatments prevent infestations before they start.",
  },
  {
    q: "How quickly can you come out?",
    a: "We normally require about two weeks notice for bookings. For urgent pest issues (like a severe infestation or termite discovery), call us directly on 0408 001 239 and we'll prioritise your job.",
  },
  {
    q: "How much does a termite barrier cost?",
    a: "Termidor barriers start from $2,300 for a standard 3-bedroom home. Cost is per lineal metre, so larger properties cost more. Every installation includes 8-year protection and a $2 million BASF warranty.",
  },
  {
    q: "What does a termite inspection involve?",
    a: "A thorough 1.5-2 hour inspection covering interior, exterior, roof void, subfloor, wet areas, and surrounds. We check for live termites, damage, moisture, and conditions that attract them. You'll get a clear summary of findings and honest recommendations.",
  },
  {
    q: "What areas do you service?",
    a: "We service Noosaville and the entire Sunshine Coast — including Noosa Heads, Tewantin, Cooroy, Eumundi, Peregian Beach, Coolum Beach, Sunrise Beach, Sunshine Beach, and surrounding areas. Not listed? Call us to check.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="section-label mb-3">FAQ</p>
          <h2 className="section-heading">Common Questions</h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={i} className="bg-white rounded-xl border border-gray-100 overflow-hidden">
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-4 text-left"
                >
                  <span className="font-medium text-brand-900 text-sm pr-4">{faq.q}</span>
                  <svg
                    className={`w-5 h-5 text-brand-600 flex-shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? "max-h-60 pb-4" : "max-h-0"
                  }`}
                >
                  <p className="px-6 text-sm text-gray-500 leading-relaxed">{faq.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
