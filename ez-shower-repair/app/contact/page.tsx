import { Phone, Mail, MapPin, Clock } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | EZ Shower Repair & Tiling",
  description:
    "Get a free quote for your leaking shower repair. Call 0406 671 114 or send us a message. Serving Gold Coast, Brisbane & Brisbane South.",
};

export default function ContactPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-navy-950 px-4 pb-12 pt-14 sm:px-6 lg:pb-14 lg:pt-16">
        <div className="container-tight max-w-3xl text-center">
          <span className="inline-block font-heading text-sm font-semibold uppercase tracking-wider text-ocean-400">
            Contact
          </span>
          <h1 className="mt-2 font-heading text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            Get Your Free Quote
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-navy-300">
            Call us directly or fill in the form below and we&apos;ll get back
            to you within the hour.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding">
        <div className="container-tight">
          <div className="grid gap-12 lg:grid-cols-5 lg:gap-20">
            {/* Contact info */}
            <div className="lg:col-span-2">
              <h2 className="font-heading text-2xl font-bold text-navy-900">
                Get in Touch
              </h2>
              <p className="mt-4 text-slate-600">
                Whether you have a leaking shower, need a quote, or just want
                advice — we&apos;re here to help.
              </p>

              <div className="mt-8 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-ocean-50 text-ocean-600">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-heading font-bold text-navy-900">
                      Phone
                    </div>
                    <a
                      href="tel:0406671114"
                      className="text-slate-600 hover:text-ocean-600"
                    >
                      0406 671 114
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-ocean-50 text-ocean-600">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-heading font-bold text-navy-900">
                      Email
                    </div>
                    <a
                      href="mailto:sales@ezshowerrepairandtiling.com"
                      className="text-slate-600 hover:text-ocean-600"
                    >
                      sales@ezshowerrepairandtiling.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-ocean-50 text-ocean-600">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-heading font-bold text-navy-900">
                      Location
                    </div>
                    <p className="text-slate-600">Gold Coast / Brisbane / Brisbane South</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-ocean-50 text-ocean-600">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-heading font-bold text-navy-900">
                      Hours
                    </div>
                    <p className="text-slate-600">Mon–Sat 7:00am – 4:30pm</p>
                    <p className="text-sm text-slate-400">Sunday — Closed</p>
                  </div>
                </div>
              </div>

              {/* Social */}
              <div className="mt-8 flex gap-3">
                <a
                  href="https://facebook.com/ezshowerrepairandtiling"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy-100 text-navy-600 transition-colors hover:bg-ocean-500 hover:text-white"
                  aria-label="Facebook"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                </a>
                <a
                  href="https://instagram.com/ezshowerrepairandtiling"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy-100 text-navy-600 transition-colors hover:bg-ocean-500 hover:text-white"
                  aria-label="Instagram"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                </a>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <div className="rounded-2xl border border-navy-100 bg-white p-8 shadow-lg shadow-navy-900/5">
                <h3 className="font-heading text-xl font-bold text-navy-900">
                  Request a Free Quote
                </h3>
                <p className="mt-2 text-sm text-slate-500">
                  Fill in the details below and we&apos;ll be in touch shortly.
                </p>

                <form className="mt-8 space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label className="mb-1.5 block text-sm font-medium text-navy-700">
                        Full Name
                      </label>
                      <input
                        type="text"
                        placeholder="Your name"
                        className="w-full rounded-lg border border-navy-200 px-4 py-3 text-navy-900 placeholder:text-slate-400 focus:border-ocean-500 focus:outline-none focus:ring-2 focus:ring-ocean-500/20"
                      />
                    </div>
                    <div>
                      <label className="mb-1.5 block text-sm font-medium text-navy-700">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        placeholder="Your phone"
                        className="w-full rounded-lg border border-navy-200 px-4 py-3 text-navy-900 placeholder:text-slate-400 focus:border-ocean-500 focus:outline-none focus:ring-2 focus:ring-ocean-500/20"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-navy-700">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="your@email.com"
                      className="w-full rounded-lg border border-navy-200 px-4 py-3 text-navy-900 placeholder:text-slate-400 focus:border-ocean-500 focus:outline-none focus:ring-2 focus:ring-ocean-500/20"
                    />
                  </div>

                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-navy-700">
                      Customer Type
                    </label>
                    <select className="w-full rounded-lg border border-navy-200 px-4 py-3 text-navy-900 focus:border-ocean-500 focus:outline-none focus:ring-2 focus:ring-ocean-500/20">
                      <option>Homeowner</option>
                      <option>Property Manager</option>
                      <option>Plumber / Builder / Trades</option>
                      <option>Business / Commercial</option>
                    </select>
                  </div>

                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-navy-700">
                      Service Required
                    </label>
                    <select className="w-full rounded-lg border border-navy-200 px-4 py-3 text-navy-900 focus:border-ocean-500 focus:outline-none focus:ring-2 focus:ring-ocean-500/20">
                      <option>Leaking Shower Repair</option>
                      <option>Shower Screen Resealing</option>
                      <option>Regrouting & Tile Repair</option>
                      <option>Bathroom Retiling</option>
                      <option>Balcony Repairs</option>
                      <option>Anti-Slip Solutions</option>
                      <option>Mould & Calcium Removal</option>
                      <option>Shower Renovation</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-navy-700">
                      Message
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Tell us about your issue..."
                      className="w-full resize-none rounded-lg border border-navy-200 px-4 py-3 text-navy-900 placeholder:text-slate-400 focus:border-ocean-500 focus:outline-none focus:ring-2 focus:ring-ocean-500/20"
                    />
                  </div>

                  <button type="submit" className="btn-primary w-full text-base">
                    Send Quote Request
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
