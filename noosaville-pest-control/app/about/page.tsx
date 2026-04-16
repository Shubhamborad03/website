import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Noosaville Pest Control — your locally owned pest control specialists on the Sunshine Coast. Licensed, experienced, and committed to quality service.",
};

const whyUs = [
  {
    title: "Licensed & Insured",
    desc: "Fully licensed under QLD licence #012432124. Every treatment is carried out by qualified technicians following Australian standards.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: "Industry-Leading Products",
    desc: "We only use the best products available, including Termidor by BASF for termite barriers — trusted by pest professionals across Australia.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
  },
  {
    title: "Honest, No-Pressure Advice",
    desc: "We tell you what you actually need — not what makes us the most money. If your home doesn't need a treatment, we'll tell you.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
  },
  {
    title: "Sunshine Coast Knowledge",
    desc: "We know the local pests because we live here. Our subtropical climate brings unique challenges — and we understand exactly how to deal with them.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h.5A2.5 2.5 0 0022 5.5V3.935" />
      </svg>
    ),
  },
  {
    title: "Family & Pet Safe",
    desc: "All our treatments are safe for households with children and pets. We'll advise on any short precautions and use the safest effective products available.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
  },
  {
    title: "Reliable & Punctual",
    desc: "We show up when we say we will. Your time is valuable, and we respect that with prompt, efficient service on every job.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-brand-950 pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-brand-300 text-sm font-semibold uppercase tracking-widest mb-3">About Us</p>
          <h1 className="font-heading text-4xl md:text-5xl font-extrabold text-white mb-4">
            Your Local Pest Control Specialists
          </h1>
          <p className="text-white/60 max-w-2xl text-lg">
            Locally owned, licensed, and committed to protecting Sunshine Coast
            homes with efficient service and quality products.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="section-heading mb-6">Who We Are</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Noosaville Pest Control is a locally owned and operated pest
              management company based right here on the Sunshine Coast. We
              specialise in general pest control, termite inspections, and
              termite barrier installations for residential and commercial
              properties.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              We started this business because we believe the Sunshine Coast
              deserves pest control done right — with honest advice, quality
              products, and reliable service. No shortcuts, no scare tactics,
              no unnecessary upselling.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Every job gets the same level of attention, whether it&apos;s a
              routine annual pest treatment or a full Termidor barrier
              installation. Your home is your biggest investment, and we treat
              it with the respect it deserves.
            </p>
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="section-label mb-3">Why Choose Us</p>
            <h2 className="section-heading">What Sets Us Apart</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyUs.map((item) => (
              <div key={item.title} className="bg-white rounded-2xl p-6 border border-gray-100">
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-brand-50 text-brand-600 mb-4">
                  {item.icon}
                </div>
                <h3 className="font-heading font-bold text-brand-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-900 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="section-heading-light text-3xl mb-4">Ready to Get Started?</h2>
          <p className="text-white/60 mb-8 max-w-lg mx-auto">
            Get in touch today for a free, no-obligation quote. We&apos;ll
            assess your needs and recommend the right solution.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="btn-primary text-base px-8 py-4">
              Get a Free Quote
            </Link>
            <a href="tel:+61408001239" className="btn-outline-white text-base px-8 py-4">
              Call 0408 001 239
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
