import Link from "next/link";

const services = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    title: "Residential",
    desc: "Complete home electrical solutions — from new builds and renovations to fans, downlights, power points and safety upgrades.",
    highlight: "Ceiling fans, downlights, switchboards",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    title: "Commercial",
    desc: "Reliable electrical fit-outs, maintenance and upgrades for shops, offices, restaurants and all commercial premises.",
    highlight: "Fit-outs, repairs, safety compliance",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18" />
      </svg>
    ),
    title: "Industrial",
    desc: "Specialised electrical work for warehouses, factories and industrial facilities — wiring, three-phase, control systems.",
    highlight: "Three-phase, control systems",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
    title: "Rural & Agricultural",
    desc: "Shed power, pump connections, underground power runs, generator setups and everything rural properties need.",
    highlight: "Sheds, pumps, generator hookups",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
      </svg>
    ),
    title: "Smoke Alarm Compliance",
    desc: "QLD mandatory smoke alarm upgrades for all homes. Stay compliant before selling, renting or leasing — fast and affordable.",
    highlight: "QLD compliance, rental properties",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Switchboard Upgrades",
    desc: "Outdated boards upgraded to modern safety standards — including safety switches and circuit breakers to protect your home.",
    highlight: "Safety switches, circuit breakers",
  },
];

export default function ServicesSection() {
  return (
    <section className="py-20 bg-brand-50" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="section-label mb-3">What We Do</p>
          <h2 className="section-heading mb-4">
            Electrical Services for Every Need
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-base leading-relaxed">
            Whether it&apos;s a simple fan install or a full commercial fit-out,
            Jim and the team bring skill, reliability and fair pricing to every job.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div key={s.title} className="card p-7 group">
              {/* Icon */}
              <div className="w-14 h-14 rounded-2xl bg-brand-50 border border-brand-100 text-brand-600 flex items-center justify-center mb-5 group-hover:bg-brand-600 group-hover:text-white group-hover:border-brand-600 transition-all duration-300">
                {s.icon}
              </div>
              <h3 className="font-heading text-lg font-bold text-brand-950 mb-2">{s.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-4">{s.desc}</p>
              {/* Tag */}
              <div className="flex flex-wrap gap-1.5">
                {s.highlight.split(", ").map((tag) => (
                  <span key={tag} className="bg-brand-50 text-brand-700 text-xs font-medium px-2.5 py-1 rounded-lg border border-brand-100">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link href="/services" className="btn-primary inline-flex">
            View All Services
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
