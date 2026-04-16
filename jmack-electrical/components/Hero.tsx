import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-brand-950 overflow-hidden flex items-center">
      {/* Circuit dot pattern */}
      <div className="absolute inset-0 circuit-bg opacity-60" />

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-950 via-brand-900/90 to-brand-800/70" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-brand-950 to-transparent" />

      {/* Right side decorative arc */}
      <div className="absolute right-0 top-0 bottom-0 w-1/2 hidden lg:block">
        <div className="absolute right-0 top-0 bottom-0 w-full bg-gradient-to-l from-brand-800/20 to-transparent" />
      </div>

      {/* Jim's photo - desktop right side */}
      <div className="absolute right-0 bottom-0 w-[42%] h-full hidden lg:flex items-end justify-center pointer-events-none">
        <div className="relative w-full h-full">
          {/* Glow behind photo */}
          <div className="absolute inset-0 bg-gradient-to-t from-brand-950 via-transparent to-transparent z-10" />
          <div className="absolute left-0 inset-y-0 w-32 bg-gradient-to-r from-brand-950 to-transparent z-10" />
          <Image
            src="/images/jim.jpg"
            alt="Jim Mackenzie – Owner, J Mack Electrical Services"
            fill
            className="object-cover object-top"
            priority
            sizes="42vw"
          />
        </div>
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-28 pb-20">
        <div className="max-w-xl lg:max-w-2xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-brand-800/60 backdrop-blur-sm border border-brand-600/40 text-brand-300 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            Serving Gympie & Surrounds Since 2015
          </div>

          {/* Headline */}
          <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-[1.05] mb-6">
            Gympie&apos;s{" "}
            <span className="relative">
              <span className="text-brand-300">Most Trusted</span>
              <svg className="absolute -bottom-2 left-0 w-full" height="6" viewBox="0 0 200 6" fill="none" preserveAspectRatio="none">
                <path d="M0 3 Q50 0 100 3 Q150 6 200 3" stroke="#2d8c65" strokeWidth="2.5" strokeLinecap="round" fill="none" />
              </svg>
            </span>{" "}
            Electrician
          </h1>

          <p className="text-white/70 text-lg leading-relaxed mb-8 max-w-md">
            Family owned and operated. Reliable, affordable, and professional
            electrical services for residential, commercial, industrial and
            rural properties across the Gympie region.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 mb-12">
            <Link href="/contact" className="btn-primary text-base px-8 py-4">
              Get a Free Quote
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <a href="tel:+61432057619" className="btn-outline-white text-base px-8 py-4">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              0432 057 619
            </a>
          </div>

          {/* Trust badges row */}
          <div className="flex flex-wrap gap-5">
            {[
              { icon: "⭐", value: "4.8", label: "Google Rating" },
              { icon: "📋", value: "54",  label: "Reviews" },
              { icon: "🏠", value: "10+", label: "Years Experience" },
              { icon: "✅", value: "500+", label: "Jobs Done" },
            ].map((b) => (
              <div key={b.label} className="flex items-center gap-2.5 bg-white/8 backdrop-blur-sm border border-white/10 rounded-xl px-4 py-2.5">
                <span className="text-xl">{b.icon}</span>
                <div>
                  <p className="text-white font-bold text-sm leading-none">{b.value}</p>
                  <p className="text-white/50 text-xs">{b.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1.5 text-white/30">
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-white/30 to-transparent" />
      </div>
    </section>
  );
}
