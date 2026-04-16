import Link from "next/link";
import Logo from "./Logo";

const services = [
  "General Pest Control",
  "Cockroach Control",
  "Ant Treatment",
  "Spider Control",
  "Rodent Control",
  "Flea Treatment",
  "Termite Inspections",
  "Termite Barriers",
];

const quickLinks = [
  { label: "Home",               href: "/" },
  { label: "Services",           href: "/services" },
  { label: "Termite Inspections", href: "/termite-inspections" },
  { label: "Termite Barriers",   href: "/termite-barriers" },
  { label: "About",              href: "/about" },
  { label: "Contact",            href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-brand-950 text-white">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <Logo variant="light" size="md" />
            <p className="mt-4 text-sm text-white/60 leading-relaxed">
              Noosaville&apos;s trusted local pest control specialists.
              Licensed, reliable, and committed to keeping Sunshine Coast
              homes pest-free.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-white/40 mb-4">Services</h3>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s}>
                  <Link href="/services" className="text-sm text-white/70 hover:text-white transition-colors flex items-center gap-1.5">
                    <span className="w-1 h-1 rounded-full bg-brand-500 flex-shrink-0" />
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-white/40 mb-4">Quick Links</h3>
            <ul className="space-y-2.5">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-white/70 hover:text-white transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-white/40 mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-brand-800 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-brand-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-white/40 mb-0.5">Phone</p>
                  <a href="tel:+61408001239" className="text-sm text-white hover:text-brand-300 transition-colors font-medium">0408 001 239</a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-brand-800 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-brand-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-white/40 mb-0.5">Email</p>
                  <a href="mailto:noosavillepestcontrol@outlook.com" className="text-sm text-white hover:text-brand-300 transition-colors font-medium break-all">
                    noosavillepestcontrol@outlook.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-brand-800 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-brand-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-white/40 mb-0.5">Location</p>
                  <p className="text-sm text-white/80">Noosaville, Sunshine Coast, QLD</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/40">
            &copy; {new Date().getFullYear()} Noosaville Pest Control. All rights reserved.
          </p>
          <p className="text-xs text-white/30">
            Licence: 012432124 · Noosaville, Sunshine Coast QLD
          </p>
        </div>
      </div>
    </footer>
  );
}
