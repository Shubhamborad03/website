import Link from "next/link";

export default function TermiteSpotlight() {
  return (
    <section className="py-20 bg-brand-950 relative overflow-hidden">
      {/* Subtle pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.5) 1px, transparent 0)`,
        backgroundSize: "40px 40px",
      }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left — Content */}
          <div>
            <div className="inline-flex items-center gap-2 bg-warm-600/20 border border-warm-500/30 text-warm-300 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
              Highest-Value Service
            </div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white leading-tight mb-6">
              Termite Barriers:{" "}
              <span className="text-accent-400">Protect Your Biggest Investment</span>
            </h2>
            <p className="text-white/60 leading-relaxed mb-4">
              Termites cause more damage to Australian homes than fires, floods,
              and storms combined. 1 in 3 homes will be affected at some point.
              A Termidor chemical barrier is the single best thing you can do to
              protect your property.
            </p>
            <p className="text-white/60 leading-relaxed mb-8">
              We use Termidor by BASF — the same product trusted by pest
              professionals across Australia. Its unique &ldquo;transfer
              effect&rdquo; doesn&apos;t just repel termites — it eliminates
              the entire colony.
            </p>

            <div className="grid grid-cols-3 gap-4 mb-8">
              {[
                { value: "8 Years", label: "Protection" },
                { value: "$2M", label: "BASF Warranty" },
                { value: "$2,300", label: "Starting From" },
              ].map((stat) => (
                <div key={stat.label} className="bg-white/[0.06] rounded-xl px-4 py-3 text-center border border-white/10">
                  <p className="font-heading text-lg font-bold text-white">{stat.value}</p>
                  <p className="text-white/40 text-xs mt-0.5">{stat.label}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              <Link href="/termite-barriers" className="btn-primary">
                Learn About Barriers
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link href="/termite-inspections" className="btn-outline-white">
                Book an Inspection
              </Link>
            </div>
          </div>

          {/* Right — Warning signs card */}
          <div className="bg-white/[0.06] backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/10">
            <h3 className="font-heading font-bold text-white text-lg mb-2">
              Signs You Might Have Termites
            </h3>
            <p className="text-white/50 text-sm mb-6">
              If you notice any of these, don&apos;t disturb the area — call us immediately.
            </p>
            <ul className="space-y-3">
              {[
                "Mud tubes on walls or foundations",
                "Hollow-sounding timber when tapped",
                "Bubbling or rippling paint",
                "Discarded wings near windows",
                "Doors or windows suddenly sticking",
                "Visible damage to skirting boards",
              ].map((sign) => (
                <li key={sign} className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-warm-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                  <span className="text-sm text-white/70">{sign}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 pt-6 border-t border-white/10">
              <a href="tel:+61408001239" className="flex items-center gap-2 text-accent-400 font-semibold text-sm hover:text-accent-300 transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Suspected termites? Call 0408 001 239 now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
