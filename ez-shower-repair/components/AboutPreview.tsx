import { CheckCircle, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const points = [
  "Permanent leak repair without removing tiles",
  "Licensed, insured & fully qualified technicians",
  "Premium products — exclusive Laticrete partner",
  "Done in 2–4 hours, not days",
  "Free inspections & honest, upfront quotes",
  "Serving Gold Coast, Brisbane & Brisbane South",
];

export default function AboutPreview() {
  return (
    <section className="section-padding bg-navy-50/50">
      <div className="container-tight">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/3] overflow-hidden rounded-2xl">
              <Image
                src="/images/Regrouting-and-Tile-repairs.jpg"
                alt="Professional tiling work by EZ Shower Repair"
                width={600}
                height={450}
                className="h-full w-full object-cover"
              />
            </div>
            {/* Floating stat card */}
            <div className="absolute -bottom-6 -right-4 rounded-xl bg-ocean-500 px-6 py-4 text-white shadow-xl shadow-ocean-500/30 sm:-right-6">
              <div className="font-heading text-3xl font-bold">40+</div>
              <div className="text-sm text-ocean-100">5-Star Reviews</div>
            </div>
          </div>

          {/* Content */}
          <div>
            <span className="inline-block font-heading text-sm font-semibold uppercase tracking-wider text-ocean-600">
              About Us
            </span>
            <h2 className="section-heading mt-2">
              Your Trusted Shower Repair Specialists
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-slate-600">
              EZ Shower Repair & Tiling has been providing expert bathroom
              solutions across South-East Queensland for over a decade. We
              specialise in fixing leaking showers permanently — without the
              cost and mess of removing tiles.
            </p>

            <ul className="mt-8 space-y-3">
              {points.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-ocean-500" />
                  <span className="text-navy-700">{point}</span>
                </li>
              ))}
            </ul>

            <Link href="/about" className="btn-primary mt-8 text-sm">
              More About Us
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
