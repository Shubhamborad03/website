import Link from "next/link";

export default function CTASection() {
  return (
    <section className="relative py-20 bg-brand-950 overflow-hidden">
      {/* Subtle pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.5) 1px, transparent 0)`,
        backgroundSize: "40px 40px",
      }} />
      <div className="absolute inset-0 bg-gradient-to-br from-brand-950 via-brand-900/90 to-brand-800/70" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 bg-warm-600/20 border border-warm-500/30 text-warm-300 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-accent-400 animate-pulse" />
          Don&apos;t Wait
        </div>

        <h2 className="section-heading-light text-4xl md:text-5xl mb-6">
          Every Day Without Treatment Is Another Day for Pests to Spread
        </h2>

        <p className="text-white/60 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
          Get in touch now for a free, no-obligation quote. We&apos;ll assess
          your situation and get you booked in — usually within the week.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/contact" className="btn-primary text-base px-8 py-4">
            Get a Free Quote
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
          <a href="tel:+61408001239" className="btn-outline-white text-base px-8 py-4">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Call 0408 001 239
          </a>
        </div>
      </div>
    </section>
  );
}
