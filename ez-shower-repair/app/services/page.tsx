import {
  Droplets,
  ShowerHead,
  Grid3X3,
  Paintbrush,
  Home,
  Shield,
  Sparkles,
  Wrench,
  CheckCircle,
} from "lucide-react";
import type { Metadata } from "next";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Our Services | EZ Shower Repair & Tiling",
  description:
    "Complete bathroom services — leaking shower repair, resealing, regrouting, retiling, balcony repairs, anti-slip solutions & more. Serving Brisbane & Gold Coast.",
};

const services = [
  {
    id: "leak-repair",
    icon: Droplets,
    title: "Leaking Shower Repair",
    description:
      "Our signature service. We permanently fix leaking showers without removing your existing tiles — saving you thousands compared to a full renovation.",
    features: [
      "No tile removal required",
      "Completed in 2–4 hours",
      "Permanent waterproofing solution",
      "Uses premium Laticrete products",
      "24-hour cure time",
      "Full warranty included",
    ],
  },
  {
    id: "resealing",
    icon: ShowerHead,
    title: "Shower Screen Resealing",
    description:
      "Professional resealing of shower screens to prevent water escaping and causing damage to your bathroom floor and walls.",
    features: [
      "Complete old silicone removal",
      "Anti-mould sealant application",
      "Clean, professional finish",
      "Prevents water damage",
    ],
  },
  {
    id: "regrouting",
    icon: Grid3X3,
    title: "Regrouting & Tile Repair",
    description:
      "Restore your bathroom's appearance and waterproofing with expert regrouting and individual tile repairs or replacements.",
    features: [
      "Full or partial regrouting",
      "Cracked tile replacement",
      "Colour-matched grout",
      "Epoxy grout options available",
    ],
  },
  {
    id: "retiling",
    icon: Paintbrush,
    title: "Bathroom & Balcony Retiling",
    description:
      "Complete retiling services for bathrooms, showers, and balconies using premium tiles and materials for a stunning result.",
    features: [
      "Floor and wall tiling",
      "Waterproofing included",
      "Wide range of tile options",
      "Expert installation",
    ],
  },
  {
    id: "balcony",
    icon: Home,
    title: "Balcony Repairs",
    description:
      "Fix leaking balconies and outdoor areas to protect your home from water damage. We repair waterproofing membranes and retile as needed.",
    features: [
      "Leak detection & diagnosis",
      "Membrane repair or replacement",
      "Retiling if required",
      "Prevents structural damage",
    ],
  },
  {
    id: "anti-slip",
    icon: Shield,
    title: "Anti-Slip Solutions",
    description:
      "Keep your family safe with professional anti-slip treatments for tiles in bathrooms, showers, pool surrounds, and other wet areas.",
    features: [
      "Invisible anti-slip coating",
      "Safe for all tile types",
      "Meets Australian standards",
      "Quick application",
    ],
  },
  {
    id: "mould-removal",
    icon: Sparkles,
    title: "Mould & Calcium Removal",
    description:
      "Eliminate stubborn mould, mildew, and calcium buildup from your bathroom tiles and grout. Restore your bathroom to pristine condition.",
    features: [
      "Deep cleaning treatment",
      "Mould prevention coating",
      "Calcium deposit removal",
      "Safe, professional products",
    ],
  },
  {
    id: "renovations",
    icon: Wrench,
    title: "Shower Renovations",
    description:
      "Full shower and bathroom renovation services from design to completion. Transform your bathroom with modern fixtures, tiles, and fittings.",
    features: [
      "Complete design consultation",
      "Demolition to completion",
      "Waterproofing & tiling",
      "Fixture installation",
    ],
  },
];

export default function ServicesPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-navy-950 px-4 pb-12 pt-14 sm:px-6 lg:pb-14 lg:pt-16">
        <div className="container-tight max-w-3xl text-center">
          <span className="inline-block font-heading text-sm font-semibold uppercase tracking-wider text-ocean-400">
            Our Services
          </span>
          <h1 className="mt-2 font-heading text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            Expert Bathroom & Shower Solutions
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-navy-300">
            From quick leak repairs to full renovations — we deliver permanent,
            professional results across Gold Coast, Brisbane & Brisbane South.
          </p>
        </div>
      </section>

      {/* Services list */}
      <section className="section-padding">
        <div className="container-tight">
          <div className="space-y-20">
            {services.map((service, i) => (
              <div
                key={service.id}
                id={service.id}
                className="scroll-mt-24"
              >
                <div
                  className={`grid items-start gap-12 lg:grid-cols-2 lg:gap-20 ${
                    i % 2 === 1 ? "lg:direction-rtl" : ""
                  }`}
                >
                  {/* Image placeholder */}
                  <div
                    className={`aspect-[4/3] overflow-hidden rounded-2xl bg-gradient-to-br from-navy-100 to-ocean-100 ${
                      i % 2 === 1 ? "lg:order-2" : ""
                    }`}
                  >
                    <div className="flex h-full items-center justify-center text-navy-300">
                      <div className="text-center">
                        <service.icon className="mx-auto h-16 w-16" />
                        <p className="mt-3 text-sm font-medium">
                          Service photo
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-ocean-50 text-ocean-600">
                      <service.icon className="h-6 w-6" />
                    </div>
                    <h2 className="mt-4 font-heading text-2xl font-bold text-navy-900 sm:text-3xl">
                      {service.title}
                    </h2>
                    <p className="mt-4 text-lg leading-relaxed text-slate-600">
                      {service.description}
                    </p>
                    <ul className="mt-6 space-y-2.5">
                      {service.features.map((f) => (
                        <li key={f} className="flex items-center gap-3">
                          <CheckCircle className="h-5 w-5 shrink-0 text-ocean-500" />
                          <span className="text-navy-700">{f}</span>
                        </li>
                      ))}
                    </ul>
                    <a
                      href="tel:0406671114"
                      className="btn-primary mt-8 text-sm"
                    >
                      Get a Free Quote
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </main>
  );
}
