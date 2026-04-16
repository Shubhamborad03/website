import type { Metadata } from "next";
import {
  Hammer,
  Home,
  Fence,
  PaintBucket,
  Wrench,
  LayoutGrid,
  Droplets,
  DoorOpen,
  CheckCircle2,
  Phone,
} from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services | David May's Carpentry & Handyman — Sunshine Coast",
  description:
    "Decks, pergolas, renovations, tiling, plastering, handyman services and more. QBCC Licensed Carpenter on the Sunshine Coast.",
};

const services = [
  {
    id: "decks",
    icon: Hammer,
    title: "Decks & Pergolas",
    description:
      "Custom-designed and built timber decks, pergolas, patios and carports. Whether you want a small balcony deck or a large entertaining area, David builds it to last using quality timber and hardware.",
    includes: [
      "Hardwood & treated pine decks",
      "Pergolas & shade structures",
      "Patios & verandahs",
      "Carports",
      "Deck repairs & restorations",
      "Custom designs to suit your home",
    ],
  },
  {
    id: "renovations",
    icon: Home,
    title: "Home Renovations",
    description:
      "Full-service renovations from planning to completion. David manages the entire process — demolition, framing, structural alterations, doors, windows and finishing work.",
    includes: [
      "Wall removal & new wall framing",
      "Bathroom renovations",
      "Kitchen renovations",
      "Room extensions",
      "Structural alterations",
      "Complete project management",
    ],
  },
  {
    id: "fencing",
    icon: Fence,
    title: "Retaining Walls & Fencing",
    description:
      "Timber and block retaining walls built properly with drainage. Plus all types of fencing — timber, colorbond, pool fencing and boundary fences.",
    includes: [
      "Timber retaining walls",
      "Block retaining walls",
      "Boundary fencing",
      "Pool fencing (to compliance)",
      "Gates & access points",
      "Drainage solutions",
    ],
  },
  {
    id: "tiling",
    icon: LayoutGrid,
    title: "Tiling & Waterproofing",
    description:
      "Professional tiling for bathrooms, kitchens, laundries and outdoor areas. All waterproofing done to Australian standards. Licensed for tiling jobs up to $3,300.",
    includes: [
      "Floor & wall tiling",
      "Bathroom waterproofing",
      "Shower recesses",
      "Splashbacks",
      "Outdoor tiling",
      "Tile repairs & replacements",
    ],
  },
  {
    id: "plastering",
    icon: PaintBucket,
    title: "Plastering & Gyprock",
    description:
      "Plasterboard installation, repairs and finishing for walls and ceilings. Clean, precise work whether it's a patch job or a full room fit-out.",
    includes: [
      "Plasterboard installation",
      "Ceiling repairs",
      "Cornice installation",
      "Patch & repair work",
      "Feature walls",
      "Sanding & finishing",
    ],
  },
  {
    id: "handyman",
    icon: Wrench,
    title: "General Handyman",
    description:
      "No job too small. From flatpack assembly and shelf installation to property maintenance and general repairs. David turns up on time and gets the job done right.",
    includes: [
      "Flatpack assembly (IKEA etc.)",
      "Shelf & storage installation",
      "Property maintenance",
      "General repairs",
      "Built-in furniture",
      "Odd jobs & fix-ups",
    ],
  },
  {
    id: "doors",
    icon: DoorOpen,
    title: "Doors & Windows",
    description:
      "Supply and installation of all door and window types. Internal doors, external doors, sliding doors, window frames — properly fitted and finished.",
    includes: [
      "Internal door installation",
      "External doors & frames",
      "Glass sliding doors",
      "Window frame installation",
      "Door hardware & locks",
      "Repairs & adjustments",
    ],
  },
  {
    id: "flooring",
    icon: Droplets,
    title: "Timber Flooring & Stairs",
    description:
      "Timber floor installation, sanding and finishing. Plus custom staircases and stairwell renovations. Quality materials and precision workmanship.",
    includes: [
      "Hardwood floor installation",
      "Floating floor installation",
      "Staircase construction",
      "Stairwell renovations",
      "Floor repairs",
      "Sanding & polishing",
    ],
  },
];

export default function ServicesPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-charcoal-900 px-4 pb-16 pt-14 sm:px-6">
        <div className="container-tight">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-timber-400">
            Our Services
          </p>
          <h1 className="font-heading text-4xl font-bold tracking-tight text-white sm:text-5xl">
            What We Do
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-charcoal-300">
            From small handyman repairs to large-scale renovations up to
            $200,000 — David brings the same quality workmanship and attention
            to detail to every job.
          </p>
        </div>
      </section>

      {/* Services list */}
      <section className="section-padding bg-white">
        <div className="container-tight space-y-16">
          {services.map((service, i) => (
            <div
              key={service.id}
              id={service.id}
              className={`grid items-start gap-8 lg:grid-cols-2 lg:gap-16 ${
                i % 2 === 1 ? "lg:direction-rtl" : ""
              }`}
            >
              {/* Visual */}
              <div
                className={`order-1 ${i % 2 === 1 ? "lg:order-2" : "lg:order-1"}`}
              >
                <div className="aspect-[16/10] overflow-hidden rounded-2xl bg-gradient-to-br from-timber-100 to-charcoal-100">
                  <div className="flex h-full items-center justify-center">
                    <service.icon className="h-16 w-16 text-timber-300" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div
                className={`order-2 ${i % 2 === 1 ? "lg:order-1" : "lg:order-2"}`}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-timber-100 text-timber-600">
                  <service.icon className="h-6 w-6" />
                </div>
                <h2 className="heading-md mt-4">{service.title}</h2>
                <p className="text-body mt-3">{service.description}</p>
                <ul className="mt-6 space-y-2.5">
                  {service.includes.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-timber-600" />
                      <span className="text-sm text-charcoal-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-timber-50">
        <div className="container-tight text-center">
          <h2 className="heading-lg">Need a Quote?</h2>
          <p className="text-body mx-auto mt-4 max-w-lg">
            David provides free, no-obligation quotes for all jobs — big or
            small. Give him a call or send an enquiry.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a href="tel:0400000000" className="btn-primary">
              <Phone className="h-4 w-4" />
              Call for Free Quote
            </a>
            <Link href="/contact" className="btn-secondary">
              Send Enquiry
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
