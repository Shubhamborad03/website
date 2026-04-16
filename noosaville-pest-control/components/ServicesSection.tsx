import Link from "next/link";

const services = [
  {
    title: "General Pest Control",
    desc: "Complete treatment for all common household pests in a single visit. Our most popular service — ideal for annual maintenance.",
    pests: ["Cockroaches", "Ants", "Spiders", "Fleas", "Silverfish", "Beetles", "Rodents"],
    highlights: ["Interior & exterior spray", "Roof void dusting", "12-month protection"],
    href: "/services",
    color: "bg-brand-600",
  },
  {
    title: "Termite Inspections",
    desc: "Thorough 1.5-2 hour inspection of every accessible area. We check for live activity, damage, moisture issues, and risk factors.",
    pests: ["Subterranean termites", "Drywood termites", "Dampwood termites"],
    highlights: ["Full property inspection", "Detailed findings report", "Honest recommendations"],
    href: "/termite-inspections",
    color: "bg-warm-600",
  },
  {
    title: "Termite Barriers",
    desc: "Termidor chemical barriers by BASF — the industry-leading termite prevention. 8-year protection with $2 million assurance warranty.",
    pests: ["Complete colony elimination", "Transfer effect technology", "Undetectable to termites"],
    highlights: ["From $2,300 (3-bed home)", "8-year warranty", "$2M BASF assurance"],
    href: "/termite-barriers",
    color: "bg-brand-900",
  },
];

export default function ServicesSection() {
  return (
    <section className="py-20 bg-warm-50/50" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="section-label mb-3">Our Services</p>
          <h2 className="section-heading">What We Do</h2>
          <p className="mt-4 text-gray-500 max-w-xl mx-auto">
            Three core services that cover everything — from routine pest
            treatments to full termite protection.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <Link
              key={s.title}
              href={s.href}
              className="group bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              {/* Color header */}
              <div className={`${s.color} px-6 py-5`}>
                <h3 className="font-heading text-xl font-bold text-white">{s.title}</h3>
                <p className="text-white/70 text-sm mt-1">{s.desc}</p>
              </div>

              <div className="p-6">
                {/* Pests / coverage */}
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
                  {s.title === "General Pest Control" ? "Pests Covered" : "What's Included"}
                </p>
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {s.pests.map((pest) => (
                    <span key={pest} className="text-xs bg-brand-50 text-brand-700 px-2.5 py-1 rounded-full font-medium">
                      {pest}
                    </span>
                  ))}
                </div>

                {/* Highlights */}
                <ul className="space-y-2">
                  {s.highlights.map((h) => (
                    <li key={h} className="flex items-center gap-2 text-sm text-gray-600">
                      <svg className="w-4 h-4 text-accent-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {h}
                    </li>
                  ))}
                </ul>

                {/* Arrow */}
                <div className="mt-5 flex items-center gap-1.5 text-brand-600 text-sm font-semibold group-hover:gap-3 transition-all">
                  Learn more
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
