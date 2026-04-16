"use client";

import { useState, type FormEvent } from "react";

const serviceOptions = [
  "General Pest Treatment",
  "Cockroach / Ant Control",
  "Spider Control",
  "Rodent Control",
  "Flea Treatment",
  "Termite Inspection",
  "Termite Barrier Quote",
  "Other / Not Sure",
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // In production, this would POST to an API
    setSubmitted(true);
  }

  return (
    <>
      {/* Header */}
      <section className="bg-brand-950 pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-brand-300 text-sm font-semibold uppercase tracking-widest mb-3">Get in Touch</p>
          <h1 className="font-heading text-4xl md:text-5xl font-extrabold text-white mb-4">
            Contact Us
          </h1>
          <p className="text-white/60 max-w-2xl text-lg">
            Ready for a pest-free home? Get in touch for a free, no-obligation
            quote. We normally require two weeks notice but for urgent jobs
            we&apos;ll get to you as soon as possible.
          </p>
        </div>
      </section>

      {/* Contact content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              {submitted ? (
                <div className="bg-accent-500/5 border border-accent-500/20 rounded-2xl p-8 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-accent-500/10 flex items-center justify-center">
                    <svg className="w-8 h-8 text-accent-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h2 className="font-heading text-2xl font-bold text-brand-900 mb-2">Thanks for your enquiry!</h2>
                  <p className="text-gray-600">
                    We&apos;ve received your message and will be in touch within
                    24 hours to arrange a suitable time. For urgent jobs, call
                    us directly on{" "}
                    <a href="tel:+61408001239" className="text-brand-600 font-medium hover:underline">
                      0408 001 239
                    </a>.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-brand-900 mb-1.5">
                        First Name *
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        required
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent"
                        placeholder="Your first name"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-brand-900 mb-1.5">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        required
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent"
                        placeholder="Your last name"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-brand-900 mb-1.5">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent"
                        placeholder="your@email.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-brand-900 mb-1.5">
                        Phone *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent"
                        placeholder="04XX XXX XXX"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    <div className="sm:col-span-2">
                      <label htmlFor="address" className="block text-sm font-medium text-brand-900 mb-1.5">
                        Service Address *
                      </label>
                      <input
                        type="text"
                        id="address"
                        name="address"
                        required
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent"
                        placeholder="Street address"
                      />
                    </div>
                    <div>
                      <label htmlFor="suburb" className="block text-sm font-medium text-brand-900 mb-1.5">
                        Suburb *
                      </label>
                      <input
                        type="text"
                        id="suburb"
                        name="suburb"
                        required
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent"
                        placeholder="e.g. Noosaville"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-brand-900 mb-1.5">
                      Service Required *
                    </label>
                    <select
                      id="service"
                      name="service"
                      required
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent bg-white"
                    >
                      <option value="">Select a service</option>
                      {serviceOptions.map((opt) => (
                        <option key={opt} value={opt}>{opt}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-brand-900 mb-1.5">
                      Details
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent resize-none"
                      placeholder="Tell us what you're experiencing — what pests have you seen, where in the house, how long has it been an issue?"
                    />
                  </div>

                  <button type="submit" className="btn-primary text-base px-8 py-4 w-full sm:w-auto justify-center">
                    Send Enquiry
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                </form>
              )}
            </div>

            {/* Contact info sidebar */}
            <div className="space-y-6">
              <div className="bg-brand-50 rounded-2xl p-6 border border-brand-100">
                <h3 className="font-heading font-bold text-brand-900 mb-4">Contact Details</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-brand-100 flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-brand-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 mb-0.5">Phone</p>
                      <a href="tel:+61408001239" className="text-sm text-brand-900 font-semibold hover:text-brand-600">
                        0408 001 239
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-brand-100 flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-brand-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 mb-0.5">Email</p>
                      <a href="mailto:noosavillepestcontrol@outlook.com" className="text-sm text-brand-900 font-semibold hover:text-brand-600 break-all">
                        noosavillepestcontrol@outlook.com
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-brand-100 flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-brand-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 mb-0.5">Service Area</p>
                      <p className="text-sm text-brand-900 font-semibold">Noosaville &amp; Sunshine Coast</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-brand-100 flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-brand-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 mb-0.5">Licence</p>
                      <p className="text-sm text-brand-900 font-semibold">#012432124</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-amber-50 rounded-2xl p-6 border border-amber-200">
                <h3 className="font-heading font-bold text-amber-800 mb-2 text-sm">Booking Notice</h3>
                <p className="text-sm text-amber-700 leading-relaxed">
                  We normally require <strong>two weeks notice</strong> for
                  bookings. For urgent pest issues, call us directly and
                  we&apos;ll do our best to get to you as soon as possible.
                </p>
              </div>

              <div className="bg-brand-950 rounded-2xl p-6 text-center">
                <p className="text-brand-300 text-xs uppercase tracking-widest mb-2">Prefer to Call?</p>
                <a
                  href="tel:+61408001239"
                  className="font-heading text-2xl font-bold text-white hover:text-brand-300 transition-colors"
                >
                  0408 001 239
                </a>
                <p className="text-white/40 text-xs mt-2">Mon–Sat · Sunshine Coast</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
