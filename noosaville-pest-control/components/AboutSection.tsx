import Link from "next/link";

const values = [
  {
    title: "Efficient Service",
    desc: "We arrive on time, work quickly and thoroughly, and leave your property clean and pest-free.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: "Quality Products",
    desc: "We only use industry-leading products like Termidor by BASF, trusted by professionals Australia-wide.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
  },
  {
    title: "Local Knowledge",
    desc: "As Sunshine Coast locals, we understand the specific pest pressures in our subtropical climate.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: "Honest Advice",
    desc: "We tell you exactly what you need — no upselling, no unnecessary treatments. Just straight talk.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
  },
];

export default function AboutSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left - Content */}
          <div>
            <p className="section-label mb-3">About Us</p>
            <h2 className="section-heading mb-6">
              Your Local Pest Control Specialists
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Noosaville Pest Control is a locally owned and operated pest
              management company serving Noosaville and the greater Sunshine
              Coast region. We&apos;re committed to delivering efficient
              service and a quality product — every single time.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              Whether it&apos;s a routine pest treatment, a comprehensive
              termite inspection, or a full Termidor barrier installation, we
              bring the same level of care and professionalism to every job.
              Your home is your biggest investment, and we treat it that way.
            </p>
            <Link href="/about" className="btn-primary">
              Learn More About Us
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          {/* Right - Values grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {values.map((v) => (
              <div key={v.title} className="bg-white rounded-2xl p-6 shadow-sm border border-brand-100">
                <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-brand-50 text-brand-600 mb-4">
                  {v.icon}
                </div>
                <h3 className="font-heading font-bold text-brand-900 mb-2">{v.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
