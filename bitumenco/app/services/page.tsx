import Image from "next/image";
import { Phone, Check, ArrowRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | Bitumen Co — Asphalt, Concrete & Civil Construction",
  description:
    "Asphalt driveways, commercial paving, concrete driveways, pothole repairs, car park line marking & civil construction across SE Queensland.",
};

const services = [
  {
    id: "driveways",
    title: "Asphalt & Bitumen Driveways",
    subtitle: "Residential Driveways",
    description:
      "Asphalt driveways are the go-to choice for homeowners — cost-effective, durable, and installed in just 1–2 days. With a 15–20 year lifespan when properly maintained, they offer excellent value with superb skid resistance and heavy vehicle tolerance.",
    features: [
      "Asphalt driveways from $45–$65 per m\u00B2",
      "Bitumen seal driveways from $25–$45 per m\u00B2",
      "Installed in 1–2 days",
      "15–20 year lifespan",
      "Concrete edging available",
      "12-month workmanship warranty",
    ],
    image: "/images/residential-driveway.jpg",
    extra:
      "We also offer seal coating every 2–3 years to protect your surface from water, oil, and UV damage — extending your driveway's life significantly.",
  },
  {
    id: "commercial",
    title: "Commercial & Civil Paving",
    subtitle: "Roads, Car Parks & Industrial",
    description:
      "Full-service road construction, spray seal, profiling, and commercial asphalt. Our skilled, fully coordinated crew handles every stage — from initial site preparation to final surfacing.",
    features: [
      "Full road construction",
      "Spray seal resurfacing",
      "Precision profiling & pavement removal",
      "Small works & emergency repairs (flocons)",
      "Crew hire — supervisors, operators & labourers",
      "Asphalt & aggregate cartage",
    ],
    image: "/images/pinkenba-2.jpg",
    extra:
      "We work alongside industry leaders including Hutchinson Builders, IQ Construction, and Veolia on commercial and civil projects across SE Queensland.",
  },
  {
    id: "concrete",
    title: "Concrete Driveways",
    subtitle: "Plain, Exposed Aggregate & Coloured",
    description:
      "Concrete driveways are renowned for long-term durability — often outlasting other materials by decades. We offer plain, exposed aggregate, and coloured concrete options to match your property's aesthetic.",
    features: [
      "Plain concrete — affordable, durable, easy to maintain",
      "Exposed aggregate — natural stone beauty, slip-resistant",
      "Coloured concrete from $90–$140 per m\u00B2",
      "Range of colour options available",
      "Decades of lifespan",
      "Adds value to your property",
    ],
    image: "/images/samford-after.jpg",
    extra: null,
  },
  {
    id: "repairs",
    title: "Pothole Repairs & Resurfacing",
    subtitle: "Driveways & Car Parks",
    description:
      "Damaged asphalt leads to potholes from moisture penetration, age, drainage issues and heavy use. Our patching and resurfacing services restore your surface in hours — with traffic-ready results in 24 hours.",
    features: [
      "Pothole patching completed in hours",
      "Traffic-ready in 24 hours",
      "Full driveway resurfacing available",
      "Crack sealing & preventive maintenance",
      "Both cosmetic and structural repairs",
      "Cost-effective solutions",
    ],
    image: "/images/pothole-hero.jpg",
    extra:
      "Prompt crack sealing prevents minor issues from becoming major problems. We recommend regular inspections to catch damage early.",
  },
  {
    id: "linemarking",
    title: "Car Park Line Marking",
    subtitle: "Commercial & Retail",
    description:
      "A well-organised car park is vital for maximising parking space and presenting your business professionally. Our experienced crew uses high-quality, durable products from leading manufacturers.",
    features: [
      "Parking bay marking",
      "Zone & area identification",
      "Bollard supply & installation",
      "Speed bump installation (concrete or rubber)",
      "Wheel stop supply & installation",
      "High-durability products",
    ],
    image: "/images/line-marking-2.jpg",
    extra: null,
  },
  {
    id: "civil",
    title: "Civil Construction",
    subtitle: "Roads, Drainage & Site Development",
    description:
      "Comprehensive civil construction services including road construction, site development, stormwater management, and drainage projects. We work closely with clients to develop customised solutions delivered on time and on budget.",
    features: [
      "Main road construction",
      "Site preparation & development",
      "Stormwater management",
      "Civil drainage projects",
      "Walking & bike path construction",
      "Car park construction with curbing",
    ],
    image: "/images/drone-road.jpg",
    extra: null,
  },
];

export default function ServicesPage() {
  return (
    <main className="pt-28">
      {/* Hero */}
      <section className="section-dark py-16 sm:py-20">
        <div className="container-tight px-4 sm:px-6">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-amber-400">
            Our Services
          </p>
          <h1 className="max-w-3xl font-heading text-4xl font-bold tracking-tight sm:text-5xl">
            Everything Asphalt, Bitumen &amp;{" "}
            <span className="text-amber-400">Civil Construction</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-asphalt-300">
            From residential driveways to full-scale road construction — one
            team, one call, done right.
          </p>
        </div>
      </section>

      {/* Services */}
      {services.map((service, i) => (
        <section
          key={service.id}
          id={service.id}
          className={`py-20 sm:py-28 ${
            i % 2 === 0 ? "bg-asphalt-900" : "section-dark"
          }`}
        >
          <div className="container-tight px-4 sm:px-6">
            <div
              className={`grid items-center gap-12 lg:grid-cols-2 lg:gap-20 ${
                i % 2 !== 0 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div>
                <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-amber-400">
                  {service.subtitle}
                </p>
                <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">
                  {service.title}
                </h2>
                <p className="mt-4 text-base leading-relaxed text-asphalt-300">
                  {service.description}
                </p>

                {service.extra && (
                  <p className="mt-3 text-sm leading-relaxed text-asphalt-400">
                    {service.extra}
                  </p>
                )}

                <ul className="mt-6 space-y-3">
                  {service.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-3 text-sm text-asphalt-200"
                    >
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-amber-400" />
                      {f}
                    </li>
                  ))}
                </ul>

                <a
                  href="tel:0421333728"
                  className="btn-primary mt-8 inline-flex text-sm"
                >
                  <Phone className="h-4 w-4" />
                  Get a Free Quote
                </a>
              </div>
            </div>
          </div>
        </section>
      ))}
    </main>
  );
}
