export default function SafetySection() {
  return (
    <section className="py-16 bg-accent-500/[0.04] border-y border-accent-500/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left — Big reassurance */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-2xl bg-accent-500/10 flex items-center justify-center">
                <svg className="w-6 h-6 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <p className="text-accent-600 text-sm font-semibold uppercase tracking-widest">Family Safety First</p>
            </div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-brand-950 leading-tight mb-4">
              Safe for Your Kids, Pets &amp; Family
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              This is the first thing every customer asks, so we&apos;ll answer
              it upfront: <strong>yes, our treatments are safe for your household.</strong>
            </p>
            <p className="text-gray-600 leading-relaxed">
              We use professional-grade products that are highly effective
              against pests but low-risk for humans and pets. After treatment,
              you simply stay off treated surfaces until dry — usually 1-2 hours.
              That&apos;s it. Your family and furry friends can go about their day.
            </p>
          </div>

          {/* Right — Quick facts */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                title: "Pet-Friendly Products",
                desc: "The active ingredients we use are similar to common pet flea treatments. Safe for dogs, cats, and other pets once dry.",
                icon: (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                ),
              },
              {
                title: "Kid-Safe Application",
                desc: "Treatments are applied to skirting boards, cracks, and perimeters — not play areas. Surfaces are safe once dry.",
                icon: (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                ),
              },
              {
                title: "No Need to Leave",
                desc: "For general pest treatments, you don't need to vacate your home. Just avoid treated rooms until dry.",
                icon: (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
              },
              {
                title: "Licensed Technicians",
                desc: "Every treatment follows Australian safety standards, carried out by qualified, licensed pest technicians.",
                icon: (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                ),
              },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-xl p-5 border border-gray-100">
                <div className="w-9 h-9 rounded-lg bg-accent-500/10 text-accent-600 flex items-center justify-center mb-3">
                  {item.icon}
                </div>
                <h3 className="font-heading font-bold text-brand-900 text-sm mb-1">{item.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
