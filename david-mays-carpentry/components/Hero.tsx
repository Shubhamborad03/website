import { Phone, ArrowRight, Shield, Clock, MapPin } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-charcoal-900">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23b07a3b' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-charcoal-950/90 via-charcoal-900/80 to-timber-900/40" />

      <div className="container-tight relative px-4 pb-20 pt-16 sm:px-6 lg:pb-28 lg:pt-24">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-timber-500/30 bg-timber-500/10 px-4 py-1.5 text-sm text-timber-300">
            <Shield className="h-4 w-4" />
            QBCC Licensed — Lic. 15017564
          </div>

          {/* Heading */}
          <h1 className="font-heading text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl">
            Quality Carpentry &{" "}
            <span className="text-timber-400">Handyman Services</span> on the
            Sunshine Coast
          </h1>

          {/* Subtext */}
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-charcoal-300 sm:text-xl">
            From custom decks and pergolas to full renovations — David May
            delivers honest, quality craftsmanship across Nambour, Maroochydore,
            Buderim, Coolum and all surrounding areas.
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a href="tel:0400000000" className="btn-primary text-base">
              <Phone className="h-5 w-5" />
              Call for Free Quote
            </a>
            <Link href="/services" className="btn-outline-light text-base">
              View Services
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Trust strip */}
          <div className="mt-12 flex flex-wrap gap-6 border-t border-white/10 pt-8">
            <div className="flex items-center gap-2 text-sm text-charcoal-300">
              <Shield className="h-5 w-5 text-timber-400" />
              <span>QBCC Licensed</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-charcoal-300">
              <Clock className="h-5 w-5 text-timber-400" />
              <span>Open 7 Days</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-charcoal-300">
              <MapPin className="h-5 w-5 text-timber-400" />
              <span>All Sunshine Coast</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
