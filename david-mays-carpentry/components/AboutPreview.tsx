import { CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";

const points = [
  "QBCC Licensed Carpenter (Lic. 15017564)",
  "ABN registered — fully insured",
  "Carpentry jobs from small repairs to $200K+",
  "Serves all Sunshine Coast suburbs",
  "Open 7 days a week",
  "Free, no-obligation quotes",
];

export default function AboutPreview() {
  return (
    <section className="section-padding bg-charcoal-50/50">
      <div className="container-tight">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Image placeholder / visual */}
          <div className="relative">
            <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-gradient-to-br from-timber-200 via-timber-100 to-charcoal-100">
              <div className="flex h-full flex-col items-center justify-center p-8 text-center">
                <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-2xl bg-timber-600 text-3xl font-bold text-white">
                  DM
                </div>
                <p className="font-heading text-2xl font-bold text-charcoal-900">
                  David May
                </p>
                <p className="mt-1 text-sm text-charcoal-500">
                  Licensed Carpenter — Sunshine Coast
                </p>
              </div>
            </div>
            {/* Experience badge */}
            <div className="absolute -bottom-4 -right-4 rounded-xl bg-timber-600 px-5 py-3 text-white shadow-lg sm:-bottom-6 sm:-right-6">
              <p className="text-2xl font-bold">QBCC</p>
              <p className="text-xs font-medium opacity-80">Licensed</p>
            </div>
          </div>

          {/* Content */}
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-timber-600">
              About David
            </p>
            <h2 className="heading-lg">
              Quality Craftsmanship You Can Trust
            </h2>
            <p className="text-body mt-4">
              David May is a QBCC licensed carpenter serving the entire Sunshine
              Coast region. With a focus on quality workmanship and honest
              pricing, David handles everything from small handyman repairs to
              large-scale renovations up to $200,000.
            </p>
            <p className="text-body mt-3">
              Based in Nambour, David covers Maroochydore, Buderim, Coolum,
              Kawana, Sippy Downs and all surrounding areas — open 7 days a week.
            </p>

            {/* Checklist */}
            <ul className="mt-8 space-y-3">
              {points.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-timber-600" />
                  <span className="text-sm font-medium text-charcoal-700">
                    {point}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <Link href="/about" className="btn-secondary">
                More About David
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
