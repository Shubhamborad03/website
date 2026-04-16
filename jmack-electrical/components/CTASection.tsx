import Link from "next/link";

export default function CTASection() {
  return (
    <section className="py-24 bg-brand-900 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 circuit-bg opacity-30" />
      <div className="absolute -left-40 top-0 w-80 h-80 rounded-full bg-brand-700/30 blur-3xl" />
      <div className="absolute -right-40 bottom-0 w-80 h-80 rounded-full bg-brand-600/20 blur-3xl" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 bg-brand-700/60 border border-brand-500/40 text-brand-300 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
          Free No-Obligation Quotes
        </div>

        <h2 className="font-heading text-4xl md:text-5xl font-extrabold text-white leading-tight mb-5">
          Ready to Get the Job Done?
        </h2>
        <p className="text-white/60 text-lg leading-relaxed mb-10 max-w-xl mx-auto">
          Contact Jim and the team today for a free quote. No job too big or too
          small — residential, commercial, industrial or rural.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link href="/contact" className="btn-primary text-base px-8 py-4 justify-center">
            Request a Free Quote
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
          <a href="tel:+61432057619" className="btn-outline-white text-base px-8 py-4 justify-center">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Call 0432 057 619
          </a>
        </div>

        {/* Contact details strip */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
          {[
            { icon: "📞", label: "Phone", value: "0432 057 619", href: "tel:+61432057619" },
            { icon: "📧", label: "Email", value: "jmackelectrical@outlook.com.au", href: "mailto:jmackelectrical@outlook.com.au" },
            { icon: "📍", label: "Location", value: "Gympie & Surrounds, QLD", href: "/contact" },
          ].map((c) => (
            <a key={c.label} href={c.href} className="flex flex-col items-center gap-1.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl px-4 py-5 transition-colors group">
              <span className="text-2xl">{c.icon}</span>
              <span className="text-white/40 text-xs uppercase tracking-wider">{c.label}</span>
              <span className="text-white text-sm font-medium text-center group-hover:text-brand-300 transition-colors break-all">{c.value}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
