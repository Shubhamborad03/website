import { Check, Phone } from "lucide-react";

const tiers = [
  {
    name: "Bitumen Seal",
    price: "$25–$45",
    unit: "per m\u00B2",
    description: "Cost-effective option ideal for lower-traffic areas and rural properties.",
    features: [
      "Budget-friendly option",
      "Ideal for rural & semi-rural properties",
      "Quick installation",
      "Good for lower-traffic areas",
    ],
    highlighted: false,
  },
  {
    name: "Asphalt Driveway",
    price: "$45–$65",
    unit: "per m\u00B2",
    description: "Our most popular choice — durable, smooth, and built to last 15–20 years.",
    features: [
      "15–20 year lifespan",
      "Installed in 1–2 days",
      "Excellent skid resistance",
      "Heavy vehicle rated",
      "Low maintenance",
      "12-month workmanship warranty",
    ],
    highlighted: true,
  },
  {
    name: "Concrete Driveway",
    price: "$90–$140",
    unit: "per m\u00B2",
    description: "Premium finish with exposed aggregate and colour options available.",
    features: [
      "Decades of lifespan",
      "Multiple finish options",
      "Exposed aggregate available",
      "Custom colours available",
      "Minimal maintenance",
    ],
    highlighted: false,
  },
];

export default function PricingSection() {
  return (
    <section className="bg-asphalt-950 py-20 sm:py-28">
      <div className="container-tight px-4 sm:px-6">
        {/* Header */}
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-amber-400">
            Transparent Pricing
          </p>
          <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">
            Driveway Pricing Guide
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-asphalt-400">
            Every project is unique — these are starting prices. Contact us for
            a free, no-obligation quote tailored to your property.
          </p>
        </div>

        {/* Pricing cards */}
        <div className="grid gap-6 sm:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative rounded-2xl border p-8 ${
                tier.highlighted
                  ? "border-amber-500/30 bg-amber-500/5"
                  : "border-white/5 bg-asphalt-900/50"
              }`}
            >
              {tier.highlighted && (
                <span className="absolute -top-3 left-6 rounded-full bg-amber-500 px-4 py-1 text-xs font-bold text-asphalt-950">
                  MOST POPULAR
                </span>
              )}

              <h3 className="font-heading text-lg font-semibold">
                {tier.name}
              </h3>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="font-heading text-3xl font-bold text-amber-400">
                  {tier.price}
                </span>
                <span className="text-sm text-asphalt-500">{tier.unit}</span>
              </div>
              <p className="mt-3 text-sm text-asphalt-400">
                {tier.description}
              </p>

              <ul className="mt-6 space-y-3">
                {tier.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-start gap-3 text-sm text-asphalt-300"
                  >
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-amber-400" />
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href="tel:0421333728"
                className={`mt-8 flex w-full items-center justify-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold transition-all ${
                  tier.highlighted
                    ? "bg-amber-500 text-asphalt-950 hover:bg-amber-400"
                    : "border border-white/10 text-white hover:border-amber-500/30 hover:text-amber-400"
                }`}
              >
                <Phone className="h-4 w-4" />
                Get Free Quote
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
