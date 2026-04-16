"use client";

import { useState, useCallback } from "react";

/*
 * PLACEHOLDER REVIEWS
 * These are sample testimonials to demonstrate layout.
 * Replace with real Google/Facebook reviews from the client
 * before going live. Link to actual Google reviews page if possible.
 */
const testimonials = [
  {
    name: "Sarah M.",
    location: "Noosaville",
    text: "Had a terrible cockroach problem that I couldn't get on top of. One treatment and they were completely gone. Haven't seen one since.",
    rating: 5,
  },
  {
    name: "Greg T.",
    location: "Tewantin",
    text: "Called about a termite scare and they were out within the week. Very thorough — spent nearly two hours checking everything. Honest advice without trying to upsell.",
    rating: 5,
  },
  {
    name: "Michelle K.",
    location: "Noosa Heads",
    text: "We've been using them for our annual pest treatment for three years now. Always on time, always professional, and the house stays pest-free all year.",
    rating: 5,
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {[...Array(count)].map((_, i) => (
        <svg key={i} className="w-4 h-4" style={{ color: "#D4A017" }} fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => setCurrent((c) => (c + 1) % testimonials.length), []);
  const prev = useCallback(() => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length), []);

  return (
    <section className="py-20 bg-warm-50/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="section-label mb-3">Reviews</p>
          <h2 className="section-heading">What Customers Say</h2>
          {/* NOTE: These are placeholder reviews — replace with real ones */}
        </div>

        {/* Desktop: show all 3 */}
        <div className="hidden md:grid md:grid-cols-3 gap-6 mb-8">
          {testimonials.map((t) => (
            <div key={t.name} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
              <Stars count={t.rating} />
              <p className="text-gray-600 text-sm leading-relaxed mt-4 mb-6">
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-brand-100 flex items-center justify-center text-brand-700 font-bold text-sm">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-semibold text-brand-900">{t.name}</p>
                  <p className="text-xs text-gray-400">{t.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile: single card with arrows */}
        <div className="md:hidden">
          <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm mb-6">
            <Stars count={testimonials[current].rating} />
            <p className="text-gray-600 text-sm leading-relaxed mt-4 mb-6">
              &ldquo;{testimonials[current].text}&rdquo;
            </p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-brand-100 flex items-center justify-center text-brand-700 font-bold text-sm">
                {testimonials[current].name.charAt(0)}
              </div>
              <div>
                <p className="text-sm font-semibold text-brand-900">{testimonials[current].name}</p>
                <p className="text-xs text-gray-400">{testimonials[current].location}</p>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center gap-4">
            <button onClick={prev} className="p-2 rounded-full hover:bg-brand-50 transition-colors" aria-label="Previous review">
              <svg className="w-5 h-5 text-brand-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-colors ${
                    i === current ? "bg-brand-600" : "bg-brand-200"
                  }`}
                  aria-label={`Go to review ${i + 1}`}
                />
              ))}
            </div>
            <button onClick={next} className="p-2 rounded-full hover:bg-brand-50 transition-colors" aria-label="Next review">
              <svg className="w-5 h-5 text-brand-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
