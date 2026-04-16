import { ArrowRight } from "lucide-react";
import Link from "next/link";
import BeforeAfterSlider from "./BeforeAfterSlider";

const projects = [
  {
    before: "/images/project1-before.jpg",
    after: "/images/project1-after.jpg",
    title: "Shower Regrouting",
    tag: "Regrouting",
  },
  {
    before: "/images/project2-before.jpg",
    after: "/images/project2-after.jpg",
    title: "Bathroom Retiling",
    tag: "Retiling",
  },
  {
    before: "/images/project3-before.jpg",
    after: "/images/project3-after.jpg",
    title: "Full Shower Repair",
    tag: "Leak Repair",
  },
  {
    before: "/images/project5-before.jpg",
    after: "/images/project5-afte.jpg",
    title: "Floor Tile Replacement",
    tag: "Retiling",
  },
  {
    before: "/images/project6-before.jpg",
    after: "/images/project6-after.jpg",
    title: "Shower Restoration",
    tag: "Renovation",
  },
  {
    before: "/images/before3.webp",
    after: "/images/after3.webp",
    title: "Tile & Grout Repair",
    tag: "Regrouting",
  },
];

export default function GalleryPreview() {
  return (
    <section className="section-padding">
      <div className="container-tight">
        {/* Header */}
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <span className="inline-block font-heading text-sm font-semibold uppercase tracking-wider text-ocean-600">
              Our Work
            </span>
            <h2 className="section-heading mt-2">Before & After Results</h2>
            <p className="section-subheading">
              Drag the slider to see the transformation. Real results from real
              jobs across South-East Queensland.
            </p>
          </div>
          <Link href="/gallery" className="btn-outline-dark shrink-0 text-sm">
            View Full Gallery
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Slider grid */}
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <div key={i}>
              <BeforeAfterSlider
                before={project.before}
                after={project.after}
                alt={project.title}
              />
              <div className="mt-3 flex items-center justify-between">
                <h3 className="font-heading text-sm font-bold text-navy-900">
                  {project.title}
                </h3>
                <span className="rounded-full bg-ocean-50 px-2.5 py-0.5 text-xs font-semibold text-ocean-600">
                  {project.tag}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
