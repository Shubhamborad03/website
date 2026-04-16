import { MapPin } from "lucide-react";

const regions = [
  {
    name: "Brisbane",
    suburbs: [
      "Samford", "Pullenvale", "Brookfield", "Upper Brookfield",
      "Chandler", "Sheldon", "Burbank", "Cashmere",
    ],
  },
  {
    name: "North Brisbane",
    suburbs: [
      "Burpengary", "Morayfield", "Narangba", "Warner",
      "Caboolture", "Bellmere", "Deception Bay", "Elimbah",
    ],
  },
  {
    name: "Gold Coast",
    suburbs: [
      "Tambourine", "Mount Tamborine", "Jimboomba", "Priestdale",
    ],
  },
  {
    name: "Sunshine Coast",
    suburbs: [
      "Dayboro", "Ocean View", "Wamuran", "Woodford",
      "Highvale", "Moodlu", "Rocksberg", "Whiteside",
    ],
  },
];

export default function ServiceAreas() {
  return (
    <section className="bg-asphalt-900 py-20 sm:py-28">
      <div className="container-tight px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
          {/* Header */}
          <div className="lg:col-span-2">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-amber-400">
              Service Areas
            </p>
            <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">
              Gold Coast to{" "}
              <span className="text-asphalt-400">Sunshine Coast</span>
            </h2>
            <p className="mt-4 text-base text-asphalt-400">
              We service Brisbane and all surrounding regions, from the Gold
              Coast through to the Sunshine Coast — including outer suburbs and
              semi-rural properties.
            </p>
            <div className="mt-8 flex items-center gap-3 rounded-xl border border-amber-500/20 bg-amber-500/5 p-4">
              <MapPin className="h-5 w-5 shrink-0 text-amber-400" />
              <div>
                <p className="text-sm font-semibold text-white">
                  Not sure if we cover your area?
                </p>
                <p className="text-sm text-asphalt-400">
                  Call{" "}
                  <a
                    href="tel:0421333728"
                    className="text-amber-400 hover:underline"
                  >
                    0421 333 728
                  </a>{" "}
                  — we&apos;re happy to check.
                </p>
              </div>
            </div>
          </div>

          {/* Regions */}
          <div className="grid gap-8 sm:grid-cols-2 lg:col-span-3">
            {regions.map((region) => (
              <div key={region.name}>
                <h3 className="mb-3 font-heading text-lg font-semibold text-white">
                  {region.name}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {region.suburbs.map((suburb) => (
                    <span
                      key={suburb}
                      className="rounded-lg border border-white/5 bg-asphalt-950/50 px-3 py-1.5 text-xs text-asphalt-400"
                    >
                      {suburb}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
