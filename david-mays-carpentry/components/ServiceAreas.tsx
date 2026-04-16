import { MapPin } from "lucide-react";

const areas = [
  "Nambour",
  "Maroochydore",
  "Buderim",
  "Coolum Beach",
  "Kawana",
  "Sippy Downs",
  "Mooloolaba",
  "Caloundra",
  "Peregian Springs",
  "Noosa",
  "Eumundi",
  "Palmwoods",
  "Bli Bli",
  "Yandina",
  "Woombye",
  "Montville",
];

export default function ServiceAreas() {
  return (
    <section className="section-padding bg-charcoal-900 text-white">
      <div className="container-tight">
        <div className="mb-12 max-w-xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-timber-400">
            Service Areas
          </p>
          <h2 className="font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Covering the Entire Sunshine Coast
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-charcoal-300">
            Based in Nambour, David services all suburbs across the Sunshine
            Coast region. If you&apos;re not sure whether we cover your area,
            give us a call.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4">
          {areas.map((area) => (
            <div
              key={area}
              className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3 transition-colors hover:border-timber-500/30 hover:bg-timber-500/10"
            >
              <MapPin className="h-4 w-4 shrink-0 text-timber-400" />
              <span className="text-sm font-medium">{area}</span>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-charcoal-400">
          Plus all surrounding suburbs and the Sunshine Coast Hinterland
        </p>
      </div>
    </section>
  );
}
