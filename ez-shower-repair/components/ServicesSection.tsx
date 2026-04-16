import {
  Droplets,
  ShowerHead,
  Grid3X3,
  Paintbrush,
  Home,
  Shield,
  Sparkles,
  Wrench,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: Droplets,
    title: "Leaking Shower Repair",
    description:
      "Permanent solutions to fix leaking showers without removing your existing tiles. Save thousands on unnecessary renovations.",
    href: "/services#leak-repair",
  },
  {
    icon: ShowerHead,
    title: "Shower Screen Resealing",
    description:
      "Professional resealing of shower screens to prevent water damage and mould growth in your bathroom.",
    href: "/services#resealing",
  },
  {
    icon: Grid3X3,
    title: "Regrouting & Tile Repair",
    description:
      "Restore your bathroom&apos;s appearance with expert regrouting and tile repair services.",
    href: "/services#regrouting",
  },
  {
    icon: Paintbrush,
    title: "Bathroom Retiling",
    description:
      "Complete bathroom and balcony retiling with premium materials and expert craftsmanship.",
    href: "/services#retiling",
  },
  {
    icon: Home,
    title: "Balcony Repairs",
    description:
      "Fix leaking balconies and waterproof outdoor areas to protect your home from water damage.",
    href: "/services#balcony",
  },
  {
    icon: Shield,
    title: "Anti-Slip Solutions",
    description:
      "Keep your family safe with professional anti-slip treatments for tiles and wet areas.",
    href: "/services#anti-slip",
  },
  {
    icon: Sparkles,
    title: "Mould & Calcium Removal",
    description:
      "Eliminate stubborn mould and calcium buildup to restore your bathroom to pristine condition.",
    href: "/services#mould-removal",
  },
  {
    icon: Wrench,
    title: "Shower Renovations",
    description:
      "Full shower renovation services from design to completion. Transform your bathroom completely.",
    href: "/services#renovations",
  },
];

export default function ServicesSection() {
  return (
    <section className="section-padding">
      <div className="container-tight">
        {/* Header */}
        <div className="text-center">
          <span className="inline-block font-heading text-sm font-semibold uppercase tracking-wider text-ocean-600">
            What We Do
          </span>
          <h2 className="section-heading mx-auto mt-2">
            Expert Bathroom & Shower Services
          </h2>
          <p className="section-subheading mx-auto text-center">
            From minor repairs to complete renovations — we deliver permanent,
            professional results every time.
          </p>
        </div>

        {/* Grid */}
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <Link
              key={service.title}
              href={service.href}
              className="group rounded-2xl border border-navy-100 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-ocean-200 hover:shadow-xl hover:shadow-ocean-500/10"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-ocean-50 text-ocean-600 transition-colors group-hover:bg-ocean-500 group-hover:text-white">
                <service.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 font-heading text-lg font-bold text-navy-900">
                {service.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-500">
                {service.description}
              </p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-ocean-600 opacity-0 transition-opacity group-hover:opacity-100">
                Learn More <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
