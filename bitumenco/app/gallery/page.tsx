import Image from "next/image";
import { Phone } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Work | Bitumen Co — Project Gallery",
  description:
    "View our completed projects across Brisbane, Gold Coast & Sunshine Coast. Residential driveways, commercial car parks, civil construction & more.",
};

const projects = [
  {
    title: "Residential Driveway",
    location: "Brisbane",
    category: "Asphalt Driveway",
    image: "/images/residential-driveway.jpg",
  },
  {
    title: "Industrial Car Park",
    location: "Pinkenba",
    category: "Commercial Paving",
    image: "/images/pinkenba-2.jpg",
  },
  {
    title: "Commercial Facility",
    location: "Pinkenba",
    category: "Commercial Paving",
    image: "/images/pinkenba-3.jpg",
  },
  {
    title: "Pathway Installation",
    location: "Samford",
    category: "Civil Construction",
    image: "/images/samford-after.jpg",
  },
  {
    title: "Aerial Project View",
    location: "Brisbane",
    category: "Civil Construction",
    image: "/images/bgs-aerial.jpg",
  },
  {
    title: "Road Construction",
    location: "SE Queensland",
    category: "Civil Construction",
    image: "/images/drone-road.jpg",
  },
  {
    title: "Car Park Line Marking",
    location: "Brisbane",
    category: "Line Marking",
    image: "/images/line-marking-2.jpg",
  },
  {
    title: "Car Park Markings",
    location: "Brisbane",
    category: "Line Marking",
    image: "/images/line-marking-1.jpg",
  },
  {
    title: "Pothole Repairs",
    location: "Brisbane",
    category: "Repairs",
    image: "/images/pothole-repair-2.jpg",
  },
  {
    title: "Asphalt Laying",
    location: "Brisbane",
    category: "Commercial Paving",
    image: "/images/pothole-repair-4.jpg",
  },
  {
    title: "Excavation Works",
    location: "SE Queensland",
    category: "Civil Construction",
    image: "/images/excavator.jpg",
  },
  {
    title: "Road Compaction",
    location: "SE Queensland",
    category: "Civil Construction",
    image: "/images/roller.jpg",
  },
];

export default function GalleryPage() {
  return (
    <main className="pt-28">
      {/* Hero */}
      <section className="section-dark py-16 sm:py-20">
        <div className="container-tight px-4 sm:px-6">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-amber-400">
            Project Gallery
          </p>
          <h1 className="max-w-2xl font-heading text-4xl font-bold tracking-tight sm:text-5xl">
            Our Work{" "}
            <span className="text-asphalt-400">Speaks for Itself</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-asphalt-300">
            Residential driveways, commercial car parks, civil construction —
            here&apos;s a selection of our completed projects across SE
            Queensland.
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section className="bg-asphalt-900 py-16 sm:py-20">
        <div className="container-tight px-4 sm:px-6">
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
                <div className="absolute inset-0 bg-gradient-to-t from-asphalt-950/90 via-asphalt-950/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <span className="mb-1 block text-xs font-semibold uppercase tracking-wider text-amber-400">
                    {project.category}
                  </span>
                  <h3 className="font-heading text-lg font-semibold text-white">
                    {project.title}
                  </h3>
                  <p className="text-sm text-asphalt-400">
                    {project.location}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-dark py-16">
        <div className="container-tight px-4 text-center sm:px-6">
          <h2 className="font-heading text-2xl font-bold sm:text-3xl">
            Want results like these?
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-asphalt-400">
            Get a free, no-obligation quote for your project.
          </p>
          <a href="tel:0421333728" className="btn-primary mt-6 inline-flex">
            <Phone className="h-5 w-5" />
            Call 0421 333 728
          </a>
        </div>
      </section>
    </main>
  );
}
