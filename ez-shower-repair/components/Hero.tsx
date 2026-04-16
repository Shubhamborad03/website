import { Phone, ArrowRight, Shield, Clock, Droplets } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy-950">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/bathroom.jpg"
          alt="Professional bathroom tiling"
          fill
          className="object-cover opacity-20"
          priority
        />
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy-950/95 via-navy-900/90 to-ocean-900/60" />

      <div className="container-tight relative px-4 pb-14 pt-12 sm:px-6 lg:pb-20 lg:pt-16">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-ocean-400/30 bg-ocean-500/10 px-4 py-1.5 text-sm text-ocean-300">
            <Shield className="h-4 w-4" />
            Fully Licensed & Insured
          </div>

          {/* Heading */}
          <h1 className="font-heading text-4xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl">
            Fix Your Leaking Shower{" "}
            <span className="text-ocean-400">Without Removing Tiles</span>
          </h1>

          {/* Subtext */}
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-navy-300 sm:text-xl">
            Permanent waterproofing solutions in just 2–4 hours — for a
            fraction of the cost of a full renovation. Serving Gold Coast,
            Brisbane & Brisbane South.
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a href="tel:0406671114" className="btn-primary text-base">
              <Phone className="h-5 w-5" />
              Call 0406 671 114
            </a>
            <Link href="/services" className="btn-outline-light text-base">
              View Our Services
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Trust strip */}
          <div className="mt-12 flex flex-wrap gap-6 border-t border-white/10 pt-8">
            <div className="flex items-center gap-2 text-sm text-navy-300">
              <Shield className="h-5 w-5 text-ocean-400" />
              <span>Licensed & Insured</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-navy-300">
              <Clock className="h-5 w-5 text-ocean-400" />
              <span>Done in 2–4 Hours</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-navy-300">
              <Droplets className="h-5 w-5 text-ocean-400" />
              <span>No Tile Removal</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
