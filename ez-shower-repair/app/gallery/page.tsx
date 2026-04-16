import type { Metadata } from "next";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Gallery | EZ Shower Repair & Tiling",
  description:
    "See our before & after results — leaking shower repairs, retiling, regrouting, and bathroom renovations across Gold Coast, Brisbane & Brisbane South.",
};

const projects = [
  {
    before: "/images/project1-before.jpg",
    after: "/images/project1-after.jpg",
    title: "Shower Regrouting",
    location: "Gold Coast",
    tag: "Regrouting",
  },
  {
    before: "/images/project2-before.jpg",
    after: "/images/project2-after.jpg",
    title: "Bathroom Retiling",
    location: "Brisbane",
    tag: "Retiling",
  },
  {
    before: "/images/project3-before.jpg",
    after: "/images/project3-after.jpg",
    title: "Full Shower Repair",
    location: "Southport",
    tag: "Leak Repair",
  },
  {
    before: "/images/project5-before.jpg",
    after: "/images/project5-afte.jpg",
    title: "Floor Tile Replacement",
    location: "Logan",
    tag: "Retiling",
  },
  {
    before: "/images/project6-before.jpg",
    after: "/images/project6-after.jpg",
    title: "Shower Restoration",
    location: "Brisbane South",
    tag: "Renovation",
  },
  {
    before: "/images/before3.webp",
    after: "/images/after3.webp",
    title: "Tile & Grout Repair",
    location: "Robina",
    tag: "Regrouting",
  },
  {
    before: "/images/before5.webp",
    after: "/images/after5.webp",
    title: "Shower Floor Repair",
    location: "Surfers Paradise",
    tag: "Leak Repair",
  },
  {
    before: "/images/before7.webp",
    after: "/images/after7.webp",
    title: "Bathroom Waterproofing",
    location: "Ipswich",
    tag: "Waterproofing",
  },
  {
    before: "/images/before9.webp",
    after: "/images/after9.webp",
    title: "Shower Screen Reseal",
    location: "Redlands",
    tag: "Resealing",
  },
  {
    before: "/images/before11.webp",
    after: "/images/after11.webp",
    title: "Complete Shower Reno",
    location: "Broadbeach",
    tag: "Renovation",
  },
];

export default function GalleryPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-navy-950 px-4 pb-12 pt-14 sm:px-6 lg:pb-14 lg:pt-16">
        <div className="container-tight max-w-3xl text-center">
          <span className="inline-block font-heading text-sm font-semibold uppercase tracking-wider text-ocean-400">
            Our Work
          </span>
          <h1 className="mt-2 font-heading text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            Before & After Gallery
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-navy-300">
            Drag the slider on each image to see the transformation. Real
            results from real jobs across South-East Queensland.
          </p>
        </div>
      </section>

      {/* Gallery grid */}
      <section className="section-padding">
        <div className="container-tight">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, i) => (
              <div key={i}>
                <BeforeAfterSlider
                  before={project.before}
                  after={project.after}
                  alt={project.title}
                />
                <div className="mt-3">
                  <div className="flex items-center justify-between">
                    <h3 className="font-heading text-sm font-bold text-navy-900">
                      {project.title}
                    </h3>
                    <span className="rounded-full bg-ocean-50 px-2.5 py-0.5 text-xs font-semibold text-ocean-600">
                      {project.tag}
                    </span>
                  </div>
                  <p className="mt-0.5 text-xs text-slate-500">
                    {project.location}
                  </p>
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
