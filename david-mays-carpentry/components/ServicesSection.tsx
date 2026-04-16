import {
  Hammer,
  Home,
  Fence,
  PaintBucket,
  Wrench,
  LayoutGrid,
  Droplets,
  DoorOpen,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: Hammer,
    title: "Decks & Pergolas",
    description:
      "Custom timber decks, pergolas, patios and carports designed and built to suit your home and lifestyle.",
  },
  {
    icon: Home,
    title: "Renovations",
    description:
      "Full home renovations including wall removal, new walls, doors, windows, and structural alterations.",
  },
  {
    icon: Fence,
    title: "Retaining Walls & Fencing",
    description:
      "Timber and block retaining walls, plus all types of fencing to secure and define your property.",
  },
  {
    icon: LayoutGrid,
    title: "Tiling & Waterproofing",
    description:
      "Bathroom, kitchen and outdoor tiling with proper waterproofing. Licensed for jobs up to $3,300.",
  },
  {
    icon: PaintBucket,
    title: "Plastering & Gyprock",
    description:
      "Plasterboard installation, repairs, and finishing. Clean, professional results every time.",
  },
  {
    icon: Wrench,
    title: "General Handyman",
    description:
      "Flatpack assembly, property maintenance, repairs, built-in furniture, and all those odd jobs around the house.",
  },
  {
    icon: DoorOpen,
    title: "Doors & Windows",
    description:
      "Supply and installation of internal doors, external doors, glass sliding doors, and window frames.",
  },
  {
    icon: Droplets,
    title: "Timber Flooring",
    description:
      "Timber floor installation and repairs. Quality materials and precision fitting for a beautiful finish.",
  },
];

export default function ServicesSection() {
  return (
    <section className="section-padding bg-white" id="services">
      <div className="container-tight">
        {/* Section header */}
        <div className="mb-14 max-w-2xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-timber-600">
            What We Do
          </p>
          <h2 className="heading-lg">
            Honest Carpentry & Handyman Services for Every Job
          </h2>
          <p className="text-body mt-4">
            From small repairs to major renovations, David brings the same
            attention to detail and quality workmanship to every project across
            the Sunshine Coast.
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div key={service.title} className="card group">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-timber-50 text-timber-600 transition-colors group-hover:bg-timber-600 group-hover:text-white">
                <service.icon className="h-6 w-6" />
              </div>
              <h3 className="mb-2 font-heading text-lg font-bold text-charcoal-900">
                {service.title}
              </h3>
              <p className="text-sm leading-relaxed text-charcoal-500">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Link href="/services" className="btn-secondary">
            View All Services
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
