import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const projects = [
  {
    title: "Residential Driveway — Brisbane",
    category: "Asphalt Driveway",
    image: "/images/residential-driveway.jpg",
  },
  {
    title: "Industrial Car Park — Pinkenba",
    category: "Commercial Paving",
    image: "/images/pinkenba-2.jpg",
  },
  {
    title: "Pathway Installation — Samford",
    category: "Civil Construction",
    image: "/images/samford-after.jpg",
  },
  {
    title: "Aerial View — BGS Project",
    category: "Civil Construction",
    image: "/images/bgs-aerial.jpg",
  },
  {
    title: "Car Park Line Marking",
    category: "Line Marking",
    image: "/images/line-marking-2.jpg",
  },
  {
    title: "Commercial Facility — Pinkenba",
    category: "Commercial Paving",
    image: "/images/pinkenba-3.jpg",
  },
];

export default function GalleryPreview() {
  return (
    <section className="bg-asphalt-900 py-20 sm:py-28">
      <div className="container-tight px-4 sm:px-6">
        {/* Header */}
        <div className="mb-12 flex items-end justify-between">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-amber-400">
              Our Work
            </p>
            <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">
              Recent Projects
            </h2>
          </div>
          <Link
            href="/gallery"
            className="hidden items-center gap-2 text-sm font-medium text-amber-400 transition-colors hover:text-amber-300 sm:flex"
          >
            View all projects
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Gallery grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <div
              key={i}
              className="group relative aspect-[4/3] overflow-hidden rounded-2xl"
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-asphalt-950/90 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="absolute inset-x-0 bottom-0 translate-y-4 p-6 opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                <span className="mb-1 block text-xs font-semibold uppercase tracking-wider text-amber-400">
                  {project.category}
                </span>
                <h3 className="font-heading text-lg font-semibold text-white">
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        <Link
          href="/gallery"
          className="mt-8 flex items-center justify-center gap-2 text-sm font-medium text-amber-400 transition-colors hover:text-amber-300 sm:hidden"
        >
          View all projects
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}
