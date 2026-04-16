import type { Metadata } from "next";
import { Phone } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Gallery | David May's Carpentry & Handyman — Sunshine Coast",
  description:
    "View completed carpentry and renovation projects across the Sunshine Coast. Decks, pergolas, renovations, tiling and more.",
};

const projects = [
  {
    title: "Hardwood Deck Build",
    location: "Buderim",
    category: "Decks & Outdoor",
    description:
      "Custom merbau hardwood deck with built-in seating and stainless steel balustrade.",
    color: "from-timber-300 to-timber-600",
  },
  {
    title: "Full Bathroom Renovation",
    location: "Maroochydore",
    category: "Renovations",
    description:
      "Complete strip-out and rebuild including waterproofing, tiling, new vanity and frameless shower.",
    color: "from-charcoal-300 to-charcoal-500",
  },
  {
    title: "Pergola & Entertaining Area",
    location: "Coolum Beach",
    category: "Outdoor Structures",
    description:
      "Large treated pine pergola with polycarbonate roofing, perfect for year-round entertaining.",
    color: "from-timber-400 to-timber-700",
  },
  {
    title: "Wall Removal & Open Plan",
    location: "Nambour",
    category: "Structural",
    description:
      "Load-bearing wall removed with steel beam install. Transformed a cramped kitchen into an open-plan living space.",
    color: "from-charcoal-400 to-charcoal-600",
  },
  {
    title: "Custom Timber Staircase",
    location: "Sippy Downs",
    category: "Carpentry",
    description:
      "Spotted gum staircase with custom handrail and landing. Built to replace an old, unsafe stairway.",
    color: "from-timber-200 to-timber-500",
  },
  {
    title: "Timber Retaining Wall",
    location: "Kawana",
    category: "Retaining Walls",
    description:
      "Three-tier treated pine retaining wall with proper drainage. Stabilised a sloping backyard for a new lawn area.",
    color: "from-charcoal-200 to-charcoal-400",
  },
  {
    title: "Kitchen Renovation",
    location: "Bli Bli",
    category: "Renovations",
    description:
      "New cabinetry, splashback tiling, benchtop install and flooring. Complete transformation of a dated kitchen.",
    color: "from-timber-300 to-charcoal-400",
  },
  {
    title: "Carport Build",
    location: "Palmwoods",
    category: "Outdoor Structures",
    description:
      "Double carport with colorbond roofing. Designed to match existing house style and colours.",
    color: "from-charcoal-300 to-timber-400",
  },
  {
    title: "Gyprock & Plastering",
    location: "Woombye",
    category: "Interior",
    description:
      "Full room plasterboard installation and finishing for a garage-to-bedroom conversion.",
    color: "from-timber-100 to-timber-300",
  },
];

export default function GalleryPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-charcoal-900 px-4 pb-16 pt-14 sm:px-6">
        <div className="container-tight">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-timber-400">
            Our Work
          </p>
          <h1 className="font-heading text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Project Gallery
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-charcoal-300">
            Real projects completed for real Sunshine Coast homeowners. Every job
            is built with quality materials and attention to detail.
          </p>
        </div>
      </section>

      {/* Gallery grid */}
      <section className="section-padding bg-white">
        <div className="container-tight">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <div
                key={project.title}
                className="group overflow-hidden rounded-2xl border border-charcoal-100 transition-all duration-300 hover:border-timber-200 hover:shadow-xl"
              >
                {/* Image placeholder */}
                <div className="relative overflow-hidden">
                  <div
                    className={`aspect-[4/3] bg-gradient-to-br ${project.color} transition-transform duration-500 group-hover:scale-105`}
                  >
                    <div className="flex h-full items-center justify-center">
                      <p className="text-5xl font-bold text-white/20">
                        {project.category.charAt(0)}
                      </p>
                    </div>
                  </div>
                  <div className="absolute left-3 top-3">
                    <span className="rounded-full bg-charcoal-900/70 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
                      {project.category}
                    </span>
                  </div>
                </div>
                {/* Content */}
                <div className="p-5">
                  <h3 className="font-heading text-lg font-bold text-charcoal-900">
                    {project.title}
                  </h3>
                  <p className="mt-1 text-xs font-medium text-timber-600">
                    {project.location}, Sunshine Coast
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-charcoal-500">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-2xl bg-timber-50 p-8 text-center">
            <p className="text-body">
              These photos will be replaced with real project images.
              Professional photography of David&apos;s actual completed work
              makes the biggest difference in converting website visitors to
              calls.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-charcoal-50">
        <div className="container-tight text-center">
          <h2 className="heading-lg">Want Something Like This?</h2>
          <p className="text-body mx-auto mt-4 max-w-lg">
            Every project starts with a free quote. Call David to discuss your
            project ideas.
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
