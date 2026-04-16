"use client";

import { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Shield,
  Send,
  CheckCircle2,
} from "lucide-react";

const contactInfo = [
  {
    icon: Phone,
    label: "Phone",
    value: "Call David",
    href: "tel:0400000000",
    detail: "Available 7 days, 9am–5pm",
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@handymansunshinecoast.com.au",
    href: "mailto:info@handymansunshinecoast.com.au",
    detail: "We'll reply within 24 hours",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Nambour, Sunshine Coast QLD",
    href: null,
    detail: "Serving all Sunshine Coast suburbs",
  },
  {
    icon: Clock,
    label: "Hours",
    value: "Open 7 Days — 9am to 5pm",
    href: null,
    detail: "Including weekends & public holidays",
  },
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main>
      {/* Hero */}
      <section className="bg-charcoal-900 px-4 pb-16 pt-14 sm:px-6">
        <div className="container-tight">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-timber-400">
            Get In Touch
          </p>
          <h1 className="font-heading text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Contact David
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-charcoal-300">
            Ready to get your project started? Give David a call for a free
            quote or fill out the form below.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-tight">
          <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
            {/* Contact info */}
            <div className="lg:col-span-2">
              <h2 className="heading-md">Quick Contact</h2>
              <p className="text-body mt-3">
                The fastest way to get a quote is to call David directly. For
                detailed enquiries, use the form.
              </p>

              <div className="mt-8 space-y-5">
                {contactInfo.map((item) => (
                  <div key={item.label} className="flex gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-timber-50 text-timber-600">
                      <item.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-xs font-medium uppercase tracking-wider text-charcoal-400">
                        {item.label}
                      </p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-sm font-bold text-charcoal-900 transition-colors hover:text-timber-600"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-sm font-bold text-charcoal-900">
                          {item.value}
                        </p>
                      )}
                      <p className="mt-0.5 text-xs text-charcoal-500">
                        {item.detail}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Trust box */}
              <div className="mt-8 rounded-xl border border-timber-200 bg-timber-50 p-5">
                <div className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-timber-600" />
                  <p className="text-sm font-bold text-charcoal-900">
                    Licensed & Insured
                  </p>
                </div>
                <p className="mt-2 text-xs text-charcoal-600">
                  QBCC Licence: 15017564
                  <br />
                  ABN: 98 183 774 863
                </p>
              </div>
            </div>

            {/* Contact form */}
            <div className="lg:col-span-3">
              <div className="rounded-2xl border border-charcoal-100 bg-charcoal-50/50 p-6 sm:p-8">
                <h2 className="heading-md">Send an Enquiry</h2>
                <p className="mt-2 text-sm text-charcoal-500">
                  Tell us about your project and David will get back to you
                  within 24 hours.
                </p>

                {submitted ? (
                  <div className="mt-8 rounded-xl bg-green-50 p-8 text-center">
                    <CheckCircle2 className="mx-auto h-12 w-12 text-green-600" />
                    <h3 className="mt-4 font-heading text-xl font-bold text-charcoal-900">
                      Enquiry Sent!
                    </h3>
                    <p className="mt-2 text-sm text-charcoal-600">
                      Thanks for reaching out. David will get back to you within
                      24 hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="mt-6 space-y-5">
                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-charcoal-700">
                          Name *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="Your full name"
                          className="w-full rounded-lg border border-charcoal-200 bg-white px-4 py-3 text-sm text-charcoal-900 outline-none transition-colors placeholder:text-charcoal-400 focus:border-timber-500 focus:ring-2 focus:ring-timber-500/20"
                        />
                      </div>
                      <div>
                        <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-charcoal-700">
                          Phone *
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder="Your phone number"
                          className="w-full rounded-lg border border-charcoal-200 bg-white px-4 py-3 text-sm text-charcoal-900 outline-none transition-colors placeholder:text-charcoal-400 focus:border-timber-500 focus:ring-2 focus:ring-timber-500/20"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-charcoal-700">
                        Email
                      </label>
                      <input
                        type="email"
                        placeholder="Your email address"
                        className="w-full rounded-lg border border-charcoal-200 bg-white px-4 py-3 text-sm text-charcoal-900 outline-none transition-colors placeholder:text-charcoal-400 focus:border-timber-500 focus:ring-2 focus:ring-timber-500/20"
                      />
                    </div>

                    <div>
                      <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-charcoal-700">
                        Suburb
                      </label>
                      <input
                        type="text"
                        placeholder="Where's the job?"
                        className="w-full rounded-lg border border-charcoal-200 bg-white px-4 py-3 text-sm text-charcoal-900 outline-none transition-colors placeholder:text-charcoal-400 focus:border-timber-500 focus:ring-2 focus:ring-timber-500/20"
                      />
                    </div>

                    <div>
                      <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-charcoal-700">
                        Service Needed
                      </label>
                      <select className="w-full rounded-lg border border-charcoal-200 bg-white px-4 py-3 text-sm text-charcoal-900 outline-none transition-colors focus:border-timber-500 focus:ring-2 focus:ring-timber-500/20">
                        <option value="">Select a service</option>
                        <option value="decks">Decks & Pergolas</option>
                        <option value="renovations">Renovations</option>
                        <option value="tiling">Tiling & Waterproofing</option>
                        <option value="plastering">
                          Plastering & Gyprock
                        </option>
                        <option value="fencing">
                          Retaining Walls & Fencing
                        </option>
                        <option value="doors">Doors & Windows</option>
                        <option value="flooring">Flooring & Stairs</option>
                        <option value="handyman">General Handyman</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-charcoal-700">
                        Project Details *
                      </label>
                      <textarea
                        required
                        rows={4}
                        placeholder="Tell us about your project — what do you need done?"
                        className="w-full resize-none rounded-lg border border-charcoal-200 bg-white px-4 py-3 text-sm text-charcoal-900 outline-none transition-colors placeholder:text-charcoal-400 focus:border-timber-500 focus:ring-2 focus:ring-timber-500/20"
                      />
                    </div>

                    <button type="submit" className="btn-primary w-full">
                      <Send className="h-4 w-4" />
                      Send Enquiry
                    </button>

                    <p className="text-center text-xs text-charcoal-400">
                      Free quotes — no obligation. David will respond within 24
                      hours.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
