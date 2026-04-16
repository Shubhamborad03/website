"use client";

import { useState } from "react";
import Link from "next/link";

const services = [
  "Residential Electrical",
  "Commercial Electrical",
  "Industrial Electrical",
  "Rural & Agricultural",
  "Smoke Alarm Compliance",
  "Switchboard Upgrade",
  "Underground Power",
  "Lighting & Downlights",
  "Fault Finding & Repairs",
  "Other",
];

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "", phone: "", email: "", service: "", message: "", suburb: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim())    e.name    = "Name is required";
    if (!form.phone.trim())   e.phone   = "Phone number is required";
    if (!form.service)        e.service = "Please select a service";
    if (!form.message.trim()) e.message = "Please describe your job";
    return e;
  };

  const handleSubmit = (ev: React.FormEvent) => {
    ev.preventDefault();
    const e = validate();
    if (Object.keys(e).length) { setErrors(e); return; }
    setSubmitted(true);
  };

  const set = (k: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((f) => ({ ...f, [k]: e.target.value }));
    setErrors((er) => { const n = { ...er }; delete n[k]; return n; });
  };

  return (
    <>
      {/* Page header */}
      <div className="bg-brand-950 pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 circuit-bg opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-br from-brand-950 to-brand-800/80" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-brand-300 text-sm mb-4">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span>Contact</span>
          </div>
          <h1 className="font-heading text-5xl font-extrabold text-white mb-4">Get in Touch</h1>
          <p className="text-white/60 text-lg max-w-xl">
            Request a free quote or just ask a question. We respond fast and
            get back to you the same day wherever possible.
          </p>
        </div>
      </div>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">

            {/* Left — info */}
            <div className="lg:col-span-2 space-y-6">
              {/* Contact cards */}
              {[
                {
                  icon: (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  ),
                  label: "Phone",
                  value: "0432 057 619",
                  sub: "Call for same-day bookings",
                  href: "tel:+61432057619",
                },
                {
                  icon: (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  ),
                  label: "Email",
                  value: "jmackelectrical@outlook.com.au",
                  sub: "We reply within a few hours",
                  href: "mailto:jmackelectrical@outlook.com.au",
                },
                {
                  icon: (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  ),
                  label: "Address",
                  value: "36 Caledonian Hill, Gympie QLD 4570",
                  sub: "Serving all of Gympie & surrounds",
                  href: "https://maps.google.com/?q=36+Caledonian+Hill+Gympie+QLD+4570",
                },
                {
                  icon: (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  ),
                  label: "Business Hours",
                  value: "Mon–Fri: 6am–5pm",
                  sub: "Saturday by appointment",
                  href: null,
                },
              ].map((c) => {
                const Wrapper = c.href ? "a" : "div";
                return (
                  <Wrapper
                    key={c.label}
                    {...(c.href ? { href: c.href, target: c.href.startsWith("http") ? "_blank" : undefined, rel: c.href.startsWith("http") ? "noopener noreferrer" : undefined } : {})}
                    className="flex gap-4 p-5 rounded-2xl border border-brand-100 hover:border-brand-300 hover:bg-brand-50 transition-all group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-brand-600 text-white flex items-center justify-center flex-shrink-0 group-hover:bg-brand-700 transition-colors">
                      {c.icon}
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs text-gray-400 uppercase tracking-wider font-semibold mb-0.5">{c.label}</p>
                      <p className="font-semibold text-brand-900 text-sm break-all">{c.value}</p>
                      <p className="text-gray-500 text-xs mt-0.5">{c.sub}</p>
                    </div>
                  </Wrapper>
                );
              })}

              {/* Service area */}
              <div className="p-5 rounded-2xl bg-brand-50 border border-brand-100">
                <p className="text-xs text-brand-500 uppercase tracking-widest font-semibold mb-3">Service Areas</p>
                <div className="flex flex-wrap gap-2">
                  {["Gympie", "Rainbow Beach", "Widgee", "Kilkivan", "Goomborian", "Imbil", "Tin Can Bay", "Cooloola Cove", "Kandanga", "Gresbro"].map((area) => (
                    <span key={area} className="bg-white border border-brand-100 text-brand-700 text-xs px-3 py-1.5 rounded-lg font-medium">
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right — form */}
            <div className="lg:col-span-3">
              {submitted ? (
                <div className="h-full flex items-center justify-center">
                  <div className="text-center py-16">
                    <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                      <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="font-heading text-2xl font-bold text-brand-950 mb-3">Quote Request Sent!</h3>
                    <p className="text-gray-500 max-w-sm mx-auto mb-8">
                      Thanks {form.name}! Jim and the team will be in touch shortly
                      to discuss your job and provide a free quote.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                      <a href="tel:+61432057619" className="btn-primary">Call Us Now</a>
                      <button onClick={() => { setSubmitted(false); setForm({ name: "", phone: "", email: "", service: "", message: "", suburb: "" }); }} className="btn-secondary">
                        Submit Another
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-white border border-brand-100 rounded-3xl p-8 shadow-sm space-y-5">
                  <div>
                    <h2 className="font-heading text-2xl font-bold text-brand-950 mb-1">Request a Free Quote</h2>
                    <p className="text-gray-500 text-sm">Fill in your details and we&apos;ll get back to you ASAP.</p>
                  </div>

                  {/* Name + Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-brand-900 mb-1.5">Full Name <span className="text-red-500">*</span></label>
                      <input
                        type="text" value={form.name} onChange={set("name")}
                        placeholder="Your full name"
                        className={`w-full border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-400 transition ${errors.name ? "border-red-400 bg-red-50" : "border-brand-200"}`}
                      />
                      {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-brand-900 mb-1.5">Phone Number <span className="text-red-500">*</span></label>
                      <input
                        type="tel" value={form.phone} onChange={set("phone")}
                        placeholder="0400 000 000"
                        className={`w-full border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-400 transition ${errors.phone ? "border-red-400 bg-red-50" : "border-brand-200"}`}
                      />
                      {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                    </div>
                  </div>

                  {/* Email + Suburb */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-brand-900 mb-1.5">Email Address</label>
                      <input
                        type="email" value={form.email} onChange={set("email")}
                        placeholder="your@email.com"
                        className="w-full border border-brand-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-400 transition"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-brand-900 mb-1.5">Suburb / Location</label>
                      <input
                        type="text" value={form.suburb} onChange={set("suburb")}
                        placeholder="Gympie, Rainbow Beach..."
                        className="w-full border border-brand-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-400 transition"
                      />
                    </div>
                  </div>

                  {/* Service */}
                  <div>
                    <label className="block text-sm font-medium text-brand-900 mb-1.5">Service Required <span className="text-red-500">*</span></label>
                    <select
                      value={form.service} onChange={set("service")}
                      className={`w-full border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-400 transition appearance-none bg-white ${errors.service ? "border-red-400 bg-red-50" : "border-brand-200"}`}
                    >
                      <option value="">Select a service...</option>
                      {services.map((s) => <option key={s} value={s}>{s}</option>)}
                    </select>
                    {errors.service && <p className="text-red-500 text-xs mt-1">{errors.service}</p>}
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-medium text-brand-900 mb-1.5">Job Description <span className="text-red-500">*</span></label>
                    <textarea
                      value={form.message} onChange={set("message")}
                      placeholder="Tell us about the job — what needs to be done, any relevant details..."
                      rows={5}
                      className={`w-full border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-400 transition resize-none ${errors.message ? "border-red-400 bg-red-50" : "border-brand-200"}`}
                    />
                    {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                  </div>

                  <button type="submit" className="btn-primary w-full justify-center text-base py-4">
                    Send Quote Request
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>

                  <p className="text-center text-xs text-gray-400">
                    Or call directly: <a href="tel:+61432057619" className="text-brand-600 hover:underline font-medium">0432 057 619</a>
                  </p>
                </form>
              )}
            </div>
          </div>

          {/* Google Maps embed */}
          <div className="mt-16">
            <div className="mb-6">
              <p className="section-label mb-2">Find Us</p>
              <h3 className="font-heading text-2xl font-bold text-brand-950">Gympie & Surrounds</h3>
              <p className="text-gray-500 text-sm mt-1">Based in Gympie, QLD — servicing the whole region.</p>
            </div>
            <div className="rounded-3xl overflow-hidden shadow-lg border border-brand-100 aspect-video w-full">
              <iframe
                src="https://maps.google.com/maps?q=36+Caledonian+Hill+Gympie+QLD+4570+Australia&t=&z=14&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: 400 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="J Mack Electrical Services location"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
