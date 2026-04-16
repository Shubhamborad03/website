import { ArrowRight } from "lucide-react";
import Link from "next/link";

const projects = [
  {
    title: "Custom Timber Deck",
    location: "Buderim",
    category: "Decks & Outdoor",
    color: "from-timber-300 to-timber-500",
  },
  {
    title: "Bathroom Renovation",
    location: "Maroochydore",
    category: "Renovations",
    color: "from-charcoal-300 to-charcoal-500",
  },
  {
    title: "Pergola & Carport",
    location: "Coolum Beach",
    category: "Outdoor Structures",
    color: "from-timber-400 to-timber-700",
  },
  {
    title: "Internal Wall Build",
    location: "Nambour",
    category: "Structural",
    color: "from-charcoal-400 to-charcoal-600",
  },
  {
    title: "Timber Staircase",
    location: "Sippy Downs",
    category: "Carpentry",
    color: "from-timber-200 to-timber-400",
  },
  {
    title: "Retaining Wall",
    location: "Kawana",
    category: "Outdoor",
    color: "from-charcoal-200 to-charcoal-400",
  },
];

export default function GalleryPreview() {
  return (
    <section className="section-padding bg-white">
      <div className="container-tight">
        <div className="mb-14 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div className="max-w-xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-timber-600">
              Our Work
            </p>
            <h2 className="heading-lg">Recent Projects</h2>
            <p className="text-body mt-3">
              Real work completed for real Sunshine Coast homeowners. Every
              project is built to last.
            </p>
          </div>
          <Link href="/gallery" className="btn-secondary shrink-0">
            View All Projects
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group relative overflow-hidden rounded-2xl"
            >
              <div
                className={`aspect-[4/3] bg-gradient-to-br ${project.color} transition-transform duration-500 group-hover:scale-105`}
              >
                <div className="flex h-full items-center justify-center">
                  <div className="text-center text-white/80">
                    <p className="text-4xl font-bold opacity-30">
                      {project.category.charAt(0)}
                    </p>
                  </div>
                </div>
              </div>
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-charcoal-900/80 via-transparent to-transparent p-6">
                <div>
                  <p className="text-xs font-medium uppercase tracking-wider text-timber-300">
                    {project.category}
                  </p>
                  <h3 className="mt-1 font-heading text-lg font-bold text-white">
                    {project.title}
                  </h3>
                  <p className="text-sm text-charcoal-300">
                    {project.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
