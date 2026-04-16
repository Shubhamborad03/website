import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Termite Barriers",
  description: "Termidor termite barriers in Noosaville and the Sunshine Coast. 8-year protection with $2 million BASF assurance warranty. Starting from $2,300. Licensed installers.",
};

const processSteps = [
  {
    step: "1",
    title: "Inspection First",
    desc: "Every barrier installation starts with a thorough termite inspection. We need to confirm there's no active infestation before installing the barrier.",
  },
  {
    step: "2",
    title: "Treat Active Termites",
    desc: "If live termites are found, we treat and eliminate the colony first, then monitor for 21 days to ensure they're gone before proceeding.",
  },
  {
    step: "3",
    title: "Trench & Treat",
    desc: "We dig a trench approximately 300mm wide and 300mm deep around your entire home perimeter. The Termidor chemical is injected and mixed with the soil.",
  },
  {
    step: "4",
    title: "Certification",
    desc: "Once complete, you receive certification and your BASF warranty certificate. Annual inspections maintain your 8-year warranty coverage.",
  },
];

const barrierFacts = [
  { label: "Protection Period", value: "8 Years" },
  { label: "BASF Warranty", value: "$2 Million" },
  { label: "Install Time", value: "7-8 Hours" },
  { label: "Starting Price", value: "From $2,300" },
  { label: "Product", value: "Termidor" },
  { label: "Technicians", value: "2 Person Team" },
];

export default function TermiteBarriersPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-brand-950 pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-brand-300 text-sm font-semibold uppercase tracking-widest mb-3">Termite Protection</p>
          <h1 className="font-heading text-4xl md:text-5xl font-extrabold text-white mb-4">
            Termite Barriers
          </h1>
          <p className="text-white/60 max-w-2xl text-lg">
            Industry-leading Termidor chemical barriers with 8-year protection
            and $2 million BASF assurance warranty. The gold standard in
            termite prevention.
          </p>
        </div>
      </section>

      {/* Quick facts bar */}
      <section className="bg-brand-900 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 text-center">
            {barrierFacts.map((f) => (
              <div key={f.label}>
                <p className="font-heading text-xl font-bold text-white">{f.value}</p>
                <p className="text-brand-300 text-xs mt-1">{f.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Termidor */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="section-label mb-3">Why Termidor</p>
              <h2 className="section-heading mb-6">The Industry-Leading Solution</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Termidor by BASF is Australia&apos;s most trusted termite barrier
                product, used by more pest professionals than any other
                termiticide. It works through a unique &ldquo;transfer effect&rdquo; — termites
                that contact the treated zone transfer the chemical to other
                termites in the colony, ultimately eliminating the entire nest.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Unlike other products that simply repel termites (pushing them
                to find another entry point), Termidor is undetectable. Termites
                can&apos;t see, smell, or taste it — they walk right through the
                treated zone, picking up the active ingredient and spreading it
                throughout the colony.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Every Termidor barrier installation is backed by a
                <strong> $2 million assurance warranty from BASF</strong> — giving
                you real financial protection alongside physical protection.
              </p>
            </div>

            <div className="space-y-4">
              <div className="bg-brand-50 rounded-2xl p-6 border border-brand-100">
                <h3 className="font-heading font-bold text-brand-800 mb-3">How the Transfer Effect Works</h3>
                <ol className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-brand-600 text-white text-xs font-bold flex items-center justify-center">1</span>
                    <span className="text-sm text-gray-600">Termites pass through the Termidor-treated zone unaware</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-brand-600 text-white text-xs font-bold flex items-center justify-center">2</span>
                    <span className="text-sm text-gray-600">They carry the active ingredient back to the colony on their bodies</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-brand-600 text-white text-xs font-bold flex items-center justify-center">3</span>
                    <span className="text-sm text-gray-600">Through grooming and contact, it spreads to other termites</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-brand-600 text-white text-xs font-bold flex items-center justify-center">4</span>
                    <span className="text-sm text-gray-600">The entire colony is eliminated — not just the foragers</span>
                  </li>
                </ol>
              </div>

              <div className="bg-accent-500/5 rounded-2xl p-6 border border-accent-500/20">
                <h3 className="font-heading font-bold text-brand-800 mb-2">Safe for Your Family</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  The active ingredient in Termidor is similar to those used in
                  common pet flea treatments. Once the barrier is installed and
                  dry (approximately 3 hours), it poses no immediate threat to
                  children or pets. Pets should be kept inside during
                  installation only.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="section-label mb-3">The Process</p>
            <h2 className="section-heading">How We Install Your Barrier</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((s) => (
              <div key={s.step} className="bg-white rounded-2xl p-6 border border-gray-100 relative">
                <div className="w-10 h-10 rounded-full bg-brand-600 text-white font-bold flex items-center justify-center mb-4 text-lg">
                  {s.step}
                </div>
                <h3 className="font-heading font-bold text-brand-900 mb-2">{s.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-brand-950 rounded-2xl p-8 md:p-12 text-center">
            <p className="text-brand-300 text-sm font-semibold uppercase tracking-widest mb-3">Pricing</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
              Transparent Pricing
            </h2>
            <p className="text-white/60 max-w-lg mx-auto mb-8">
              Termidor barrier installations start from <span className="text-white font-bold text-2xl">$2,300</span>{" "}
              for an average 3-bedroom home. Cost is calculated per lineal
              metre, so larger properties will be more.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              <div className="bg-white/10 rounded-xl p-4">
                <p className="text-white font-bold">8 Years</p>
                <p className="text-white/50 text-xs">Protection Period</p>
              </div>
              <div className="bg-white/10 rounded-xl p-4">
                <p className="text-white font-bold">$2M Warranty</p>
                <p className="text-white/50 text-xs">BASF Assurance</p>
              </div>
              <div className="bg-white/10 rounded-xl p-4">
                <p className="text-white font-bold">Annual Inspections</p>
                <p className="text-white/50 text-xs">Included in Plan</p>
              </div>
            </div>
            <Link href="/contact" className="btn-primary text-base px-8 py-4">
              Get Your Custom Quote
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
