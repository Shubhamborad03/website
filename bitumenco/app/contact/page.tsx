import { Phone, Mail, MapPin, Clock } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Bitumen Co — Get a Free Quote",
  description:
    "Contact Bitumen Co for a free quote on asphalt driveways, commercial paving, or civil construction. Call 0421 333 728 or email jack@bitumenco.com.",
};

export default function ContactPage() {
  return (
    <main className="pt-28">
      {/* Hero */}
      <section className="section-dark py-16 sm:py-20">
        <div className="container-tight px-4 sm:px-6">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-amber-400">
            Get in Touch
          </p>
          <h1 className="max-w-2xl font-heading text-4xl font-bold tracking-tight sm:text-5xl">
            Let&apos;s Talk About{" "}
            <span className="text-amber-400">Your Project</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-asphalt-300">
            Whether you need a new driveway, car park resurfacing, or a
            full-scale civil project — reach out for a free, no-obligation
            quote.
          </p>
        </div>
      </section>

      {/* Contact info + form */}
      <section className="bg-asphalt-900 py-20 sm:py-28">
        <div className="container-tight px-4 sm:px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            {/* Contact details */}
            <div>
              <h2 className="font-heading text-2xl font-bold">
                Contact Details
              </h2>
              <p className="mt-4 text-base text-asphalt-400">
                Speak directly with Jack — no call centres, no runaround.
              </p>

              <div className="mt-8 space-y-6">
                <a
                  href="tel:0421333728"
                  className="flex items-start gap-4 rounded-xl border border-white/5 bg-asphalt-950/50 p-5 transition-colors hover:border-amber-500/20"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-500/10">
                    <Phone className="h-5 w-5 text-amber-400" />
                  </div>
                  <div>
                    <p className="font-semibold text-white">Phone</p>
                    <p className="text-lg text-amber-400">0421 333 728</p>
                  </div>
                </a>

                <a
                  href="mailto:jack@bitumenco.com"
                  className="flex items-start gap-4 rounded-xl border border-white/5 bg-asphalt-950/50 p-5 transition-colors hover:border-amber-500/20"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-500/10">
                    <Mail className="h-5 w-5 text-amber-400" />
                  </div>
                  <div>
                    <p className="font-semibold text-white">Email</p>
                    <p className="text-amber-400">jack@bitumenco.com</p>
                  </div>
                </a>

                <div className="flex items-start gap-4 rounded-xl border border-white/5 bg-asphalt-950/50 p-5">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-500/10">
                    <MapPin className="h-5 w-5 text-amber-400" />
                  </div>
                  <div>
                    <p className="font-semibold text-white">Service Area</p>
                    <p className="text-asphalt-400">
                      Gold Coast, Brisbane &amp; Sunshine Coast
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 rounded-xl border border-white/5 bg-asphalt-950/50 p-5">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-500/10">
                    <Clock className="h-5 w-5 text-amber-400" />
                  </div>
                  <div>
                    <p className="font-semibold text-white">ABN</p>
                    <p className="text-asphalt-400">22168612758</p>
                  </div>
                </div>
              </div>

              <a
                href="https://www.instagram.com/bitumencoqld/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 text-sm text-asphalt-400 transition-colors hover:text-amber-400"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                Follow us @bitumencoqld
              </a>
            </div>

            {/* Contact form */}
            <div className="rounded-2xl border border-white/5 bg-asphalt-950/50 p-8">
              <h2 className="font-heading text-2xl font-bold">
                Request a Free Quote
              </h2>
              <p className="mt-2 text-sm text-asphalt-400">
                Fill in the form below and Jack will get back to you within 24
                hours.
              </p>

              <form className="mt-8 space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-medium text-asphalt-300">
                      Name
                    </label>
                    <input
                      type="text"
                      className="w-full rounded-lg border border-white/10 bg-asphalt-900 px-4 py-3 text-sm text-white placeholder:text-asphalt-600 focus:border-amber-500/50 focus:outline-none focus:ring-1 focus:ring-amber-500/50"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium text-asphalt-300">
                      Phone
                    </label>
                    <input
                      type="tel"
                      className="w-full rounded-lg border border-white/10 bg-asphalt-900 px-4 py-3 text-sm text-white placeholder:text-asphalt-600 focus:border-amber-500/50 focus:outline-none focus:ring-1 focus:ring-amber-500/50"
                      placeholder="Your phone number"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-asphalt-300">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full rounded-lg border border-white/10 bg-asphalt-900 px-4 py-3 text-sm text-white placeholder:text-asphalt-600 focus:border-amber-500/50 focus:outline-none focus:ring-1 focus:ring-amber-500/50"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-asphalt-300">
                    Service Needed
                  </label>
                  <select className="w-full rounded-lg border border-white/10 bg-asphalt-900 px-4 py-3 text-sm text-asphalt-400 focus:border-amber-500/50 focus:outline-none focus:ring-1 focus:ring-amber-500/50">
                    <option>Select a service</option>
                    <option>Asphalt Driveway</option>
                    <option>Bitumen Seal Driveway</option>
                    <option>Concrete Driveway</option>
                    <option>Commercial Paving</option>
                    <option>Pothole Repairs / Resurfacing</option>
                    <option>Car Park Line Marking</option>
                    <option>Civil Construction</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-asphalt-300">
                    Property Address
                  </label>
                  <input
                    type="text"
                    className="w-full rounded-lg border border-white/10 bg-asphalt-900 px-4 py-3 text-sm text-white placeholder:text-asphalt-600 focus:border-amber-500/50 focus:outline-none focus:ring-1 focus:ring-amber-500/50"
                    placeholder="Where is the project?"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-asphalt-300">
                    Project Details
                  </label>
                  <textarea
                    rows={4}
                    className="w-full rounded-lg border border-white/10 bg-asphalt-900 px-4 py-3 text-sm text-white placeholder:text-asphalt-600 focus:border-amber-500/50 focus:outline-none focus:ring-1 focus:ring-amber-500/50"
                    placeholder="Tell us about your project — approximate size, current surface, what you need done..."
                  />
                </div>

                <button
                  type="submit"
                  className="btn-primary w-full text-base"
                >
                  <Phone className="h-5 w-5" />
                  Send Quote Request
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
