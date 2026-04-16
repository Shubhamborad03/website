"use client";

import { useState, type FormEvent } from "react";

const pestTypes = [
  "Cockroaches",
  "Ants",
  "Spiders",
  "Termites",
  "Rats / Mice",
  "Fleas",
  "Not Sure",
];

export default function Hero() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // In production → POST to API / webhook
    setSubmitted(true);
  }

  return (
    <section className="relative min-h-screen bg-brand-950 overflow-hidden flex items-center">
      {/* Subtle leaf pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 5 Q35 15 30 25 Q25 15 30 5Z' fill='white' opacity='0.5'/%3E%3Cpath d='M10 35 Q15 45 10 55 Q5 45 10 35Z' fill='white' opacity='0.3'/%3E%3Cpath d='M50 35 Q55 45 50 55 Q45 45 50 35Z' fill='white' opacity='0.3'/%3E%3C/svg%3E")`,
      }} />

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-950 via-brand-900/95 to-brand-800/80" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-brand-950 to-transparent" />

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-28 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left — Copy */}
          <div>
            {/* Urgency badge */}
            <div className="inline-flex items-center gap-2 bg-warm-600/20 backdrop-blur-sm border border-warm-500/30 text-warm-300 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-400 animate-pulse" />
              Same-Week Service Available
            </div>

            {/* Headline — urgency + benefit */}
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.08] mb-6">
              Pests Don&apos;t Wait.{" "}
              <span className="relative">
                <span className="text-accent-400">Neither Do We.</span>
                <svg className="absolute -bottom-2 left-0 w-full" height="6" viewBox="0 0 200 6" fill="none" preserveAspectRatio="none">
                  <path d="M0 3 Q50 0 100 3 Q150 6 200 3" stroke="#10b981" strokeWidth="2.5" strokeLinecap="round" fill="none" />
                </svg>
              </span>
            </h1>

            <p className="text-white/70 text-lg leading-relaxed mb-8 max-w-lg">
              Licensed pest control for Noosaville &amp; the Sunshine Coast.
              Safe for your kids and pets, effective against every common pest.
              Book today, get treated this week.
            </p>

            {/* Trust badges — compact */}
            <div className="flex flex-wrap gap-4 mb-6 lg:mb-0">
              {[
                { icon: "🛡️", text: "Licensed #012432124" },
                { icon: "👨‍👩‍👧‍👦", text: "Family & Pet Safe" },
                { icon: "📍", text: "Noosaville Local" },
              ].map((b) => (
                <div key={b.text} className="flex items-center gap-2 text-white/60 text-sm">
                  <span>{b.icon}</span>
                  <span>{b.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Inline quote form */}
          <div className="bg-white rounded-2xl shadow-2xl p-6 sm:p-8">
            {submitted ? (
              <div className="text-center py-8">
                <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-accent-500/10 flex items-center justify-center">
                  <svg className="w-7 h-7 text-accent-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-heading text-xl font-bold text-brand-900 mb-2">We&apos;ll call you back</h3>
                <p className="text-gray-500 text-sm">
                  Usually within a few hours. For urgent jobs, call{" "}
                  <a href="tel:+61408001239" className="text-brand-600 font-semibold hover:underline">0408 001 239</a> directly.
                </p>
              </div>
            ) : (
              <>
                <div className="mb-6">
                  <h2 className="font-heading text-xl font-bold text-brand-900">Get a Free Quote</h2>
                  <p className="text-gray-500 text-sm mt-1">Tell us what&apos;s bugging you — we&apos;ll get back to you fast.</p>
                </div>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="hero-name" className="block text-xs font-medium text-gray-600 mb-1">Your Name *</label>
                      <input
                        type="text" id="hero-name" name="name" required
                        placeholder="First name"
                        className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label htmlFor="hero-phone" className="block text-xs font-medium text-gray-600 mb-1">Phone *</label>
                      <input
                        type="tel" id="hero-phone" name="phone" required
                        placeholder="04XX XXX XXX"
                        className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="hero-pest" className="block text-xs font-medium text-gray-600 mb-1">Pest Type *</label>
                      <select
                        id="hero-pest" name="pest" required
                        className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent bg-white"
                      >
                        <option value="">What pest?</option>
                        {pestTypes.map((p) => (
                          <option key={p} value={p}>{p}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label htmlFor="hero-suburb" className="block text-xs font-medium text-gray-600 mb-1">Suburb *</label>
                      <input
                        type="text" id="hero-suburb" name="suburb" required
                        placeholder="e.g. Noosaville"
                        className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                  <button type="submit" className="btn-primary w-full justify-center text-base py-3.5">
                    Get My Free Quote
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                  <p className="text-center text-xs text-gray-400">
                    Or call now:{" "}
                    <a href="tel:+61408001239" className="text-brand-600 font-semibold hover:underline">0408 001 239</a>
                  </p>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
