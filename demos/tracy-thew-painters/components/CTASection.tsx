export default function CTASection() {
  return (
    <section className="py-24 bg-navy-800 relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 70% 50%, #C8963C 0%, transparent 60%)`,
          }}
        />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-gold-400 text-sm font-semibold uppercase tracking-widest mb-4">
          Ready for a Fresh Coat?
        </p>
        <h2 className="font-heading text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
          Get Your Free, No-Obligation Quote Today
        </h2>
        <p className="text-white/65 text-lg mb-10 max-w-2xl mx-auto">
          We&apos;ll come to you, assess the job, and give you an honest quote — no
          pressure, no hidden charges. Just 40 years of experience working for you.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#contact"
            className="bg-gold-500 hover:bg-gold-600 text-white font-semibold text-base px-9 py-4 rounded-full transition-colors w-full sm:w-auto text-center"
          >
            Request My Free Quote
          </a>
          <a
            href="tel:0754481697"
            className="border border-white/30 hover:border-white/60 text-white font-semibold text-base px-9 py-4 rounded-full transition-colors w-full sm:w-auto text-center"
          >
            Call 07 5448 1697
          </a>
        </div>
      </div>
    </section>
  );
}
