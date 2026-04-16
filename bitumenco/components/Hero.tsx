import Image from "next/image";
import { Phone, ArrowRight, Shield, Truck, Clock } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] overflow-hidden bg-asphalt-950">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-workers.png"
          alt="Bitumen Co crew paving asphalt"
          fill
          className="object-cover opacity-30"
          priority
        />
      </div>

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-asphalt-950 via-asphalt-950/80 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-asphalt-950 via-transparent to-asphalt-950/50" />

      {/* Amber glow accent */}
      <div className="absolute -right-32 top-1/4 h-96 w-96 rounded-full bg-amber-500/10 blur-[120px]" />

      <div className="container-tight relative flex min-h-[90vh] items-center px-4 sm:px-6">
        <div className="max-w-2xl pt-32 pb-20">
          {/* Badge */}
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-4 py-1.5 text-sm font-medium text-amber-400">
            <Shield className="h-4 w-4" />
            10+ Years Industry Experience
          </div>

          {/* Heading */}
          <h1 className="font-heading text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
            Brisbane&apos;s Trusted{" "}
            <span className="text-amber-400">Asphalt &amp; Bitumen</span>{" "}
            Contractor
          </h1>

          {/* Subtext */}
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-asphalt-300 sm:text-xl">
            Domestic driveways, commercial paving, car parks &amp; civil
            construction. Quality work from the Gold Coast to the Sunshine
            Coast.
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a href="tel:0421333728" className="btn-primary text-base">
              <Phone className="h-5 w-5" />
              Call 0421 333 728
            </a>
            <Link href="/services" className="btn-outline text-base">
              View Our Services
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Trust strip */}
          <div className="mt-14 flex flex-wrap gap-x-8 gap-y-4 border-t border-white/10 pt-8">
            <div className="flex items-center gap-3 text-sm text-asphalt-300">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-500/10">
                <Truck className="h-5 w-5 text-amber-400" />
              </div>
              <div>
                <p className="font-semibold text-white">Latest Equipment</p>
                <p className="text-asphalt-400">Modern plant & machinery</p>
              </div>
            </div>
            <div className="flex items-center gap-3 text-sm text-asphalt-300">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-500/10">
                <Shield className="h-5 w-5 text-amber-400" />
              </div>
              <div>
                <p className="font-semibold text-white">Fully Insured</p>
                <p className="text-asphalt-400">Licensed & professional</p>
              </div>
            </div>
            <div className="flex items-center gap-3 text-sm text-asphalt-300">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-500/10">
                <Clock className="h-5 w-5 text-amber-400" />
              </div>
              <div>
                <p className="font-semibold text-white">Fast Turnaround</p>
                <p className="text-asphalt-400">Most jobs done in 1–2 days</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
