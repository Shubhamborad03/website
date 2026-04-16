const reasons = [
  {
    number: "01",
    title: "Family Values, Professional Standards",
    body: "Tracy and Shannon treat your home like their own. For over 40 years, the Thew family has built their reputation on personal attention, honest communication, and turning up when they say they will.",
  },
  {
    number: "02",
    title: "Quick-Dry System — Dry in 2 Hours",
    body: "Our advanced quick-dry painting system means interior and exterior surfaces dry in under 2 hours. Get your rooms back the same day with zero compromise on finish quality.",
  },
  {
    number: "03",
    title: "Thousands of Happy Sunshine Coast Families",
    body: "From Caloundra to Noosa, we've left a trail of beautifully painted homes and delighted owners. Recommended by L.J. Hooker Peregian, Peregian Hardware and Paint City Coolum.",
  },
];

export default function WhyUsSection() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Story */}
          <div>
            <p className="text-gold-500 text-sm font-semibold uppercase tracking-widest mb-3">
              Our Story
            </p>
            <h2 className="font-heading text-4xl sm:text-5xl font-bold text-navy-900 mb-6 leading-tight">
              Painting the Sunshine Coast Since 1982
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed mb-6">
              What started as a one-person operation in Peregian Beach has grown
              into one of the Sunshine Coast&apos;s most trusted painting businesses.
              Tracy Thew founded the company with a simple belief: do quality work,
              treat people right, and the rest follows.
            </p>
            <p className="text-gray-500 text-lg leading-relaxed mb-10">
              Today, Shannon carries that same ethic forward — servicing everything
              from Queenslander renovations in Noosa to large commercial projects.
              Every quote is personalised. Every job has a name behind it.
            </p>

            {/* Contact info */}
            <div className="flex flex-col gap-3">
              <a
                href="tel:0754481697"
                className="inline-flex items-center gap-3 text-navy-800 font-semibold hover:text-gold-500 transition-colors"
              >
                <span className="w-9 h-9 rounded-full bg-gold-100 flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-gold-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                </span>
                07 5448 1697
              </a>
              <a
                href="tel:0407768784"
                className="inline-flex items-center gap-3 text-navy-800 font-semibold hover:text-gold-500 transition-colors"
              >
                <span className="w-9 h-9 rounded-full bg-gold-100 flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-gold-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 8.25h3" />
                  </svg>
                </span>
                0407 768 784
              </a>
              <a
                href="mailto:tracey.thew@bigpond.com"
                className="inline-flex items-center gap-3 text-navy-800 font-semibold hover:text-gold-500 transition-colors"
              >
                <span className="w-9 h-9 rounded-full bg-gold-100 flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-gold-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                </span>
                tracey.thew@bigpond.com
              </a>
            </div>
          </div>

          {/* Right: Reasons */}
          <div className="space-y-8">
            {reasons.map((r) => (
              <div key={r.number} className="flex gap-6">
                <span className="font-heading text-4xl font-bold text-gold-300 flex-shrink-0 leading-none">
                  {r.number}
                </span>
                <div>
                  <h3 className="font-heading text-xl font-bold text-navy-900 mb-2">
                    {r.title}
                  </h3>
                  <p className="text-gray-500 leading-relaxed">{r.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
