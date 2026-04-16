import Image from "next/image";
import { ArrowRight, Road, Building2, PaintBucket, Wrench, ParkingCircle, HardHat } from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: Road,
    title: "Asphalt Driveways",
    description:
      "Durable, smooth asphalt driveways for residential properties. Typically installed in 1–2 days with a 15–20 year lifespan.",
    price: "From $45/m\u00B2",
    href: "/services#driveways",
    image: "/images/residential-driveway.jpg",
  },
  {
    icon: Building2,
    title: "Commercial Paving",
    description:
      "Full-service road construction, spray seal, profiling, and commercial asphalt for car parks, roads and industrial sites.",
    price: "Custom quote",
    href: "/services#commercial",
    image: "/images/pinkenba-2.jpg",
  },
  {
    icon: PaintBucket,
    title: "Concrete Driveways",
    description:
      "Plain, exposed aggregate, and coloured concrete driveways. Long-lasting with minimal maintenance required.",
    price: "From $90/m\u00B2",
    href: "/services#concrete",
    image: "/images/samford-after.jpg",
  },
  {
    icon: Wrench,
    title: "Pothole Repairs",
    description:
      "Fast patching and resurfacing for damaged driveways and car parks. Most repairs completed in hours, traffic-ready in 24hrs.",
    price: "From $25/m\u00B2",
    href: "/services#repairs",
    image: "/images/pothole-repair-workers.jpg",
  },
  {
    icon: ParkingCircle,
    title: "Car Park Line Marking",
    description:
      "Professional line marking, bollard installation, speed bumps and wheel stops for commercial car parks.",
    price: "Custom quote",
    href: "/services#linemarking",
    image: "/images/line-marking-2.jpg",
  },
  {
    icon: HardHat,
    title: "Civil Construction",
    description:
      "Road construction, site development, stormwater management, drainage projects and crew hire for civil works.",
    price: "Custom quote",
    href: "/services#civil",
    image: "/images/drone-road.jpg",
  },
];

export default function ServicesSection() {
  return (
    <section className="section-dark py-20 sm:py-28">
      <div className="container-tight px-4 sm:px-6">
        {/* Header */}
        <div className="mb-16 max-w-2xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-amber-400">
            What We Do
          </p>
          <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">
            Asphalt &amp; Bitumen Services{" "}
            <span className="text-asphalt-400">Across SE Queensland</span>
          </h2>
          <p className="mt-4 text-lg text-asphalt-400">
            From residential driveways to full-scale civil construction — we
            bring the same precision and quality to every job.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Link
              key={service.title}
              href={service.href}
              className="group relative overflow-hidden rounded-2xl border border-white/5 bg-asphalt-900/50 transition-all hover:border-amber-500/20 hover:bg-asphalt-900"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-asphalt-950 via-asphalt-950/40 to-transparent" />

                {/* Price badge */}
                <div className="absolute bottom-3 right-3 rounded-lg bg-asphalt-950/80 px-3 py-1.5 text-sm font-semibold text-amber-400 backdrop-blur-sm">
                  {service.price}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="mb-3 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-500/10">
                    <service.icon className="h-5 w-5 text-amber-400" />
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-white">
                    {service.title}
                  </h3>
                </div>
                <p className="text-sm leading-relaxed text-asphalt-400">
                  {service.description}
                </p>
                <div className="mt-4 flex items-center gap-2 text-sm font-medium text-amber-400 transition-colors group-hover:text-amber-300">
                  Learn more
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
