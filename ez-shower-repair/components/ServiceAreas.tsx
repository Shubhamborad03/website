import { MapPin } from "lucide-react";

const areas = [
  {
    region: "Gold Coast",
    suburbs: [
      "Southport",
      "Surfers Paradise",
      "Broadbeach",
      "Robina",
      "Nerang",
      "Burleigh Heads",
      "Coolangatta",
    ],
  },
  {
    region: "Brisbane",
    suburbs: [
      "Brisbane CBD",
      "Northside",
      "Southside",
      "West End",
      "Chermside",
      "Carindale",
      "Indooroopilly",
    ],
  },
  {
    region: "Brisbane South",
    suburbs: [
      "Logan",
      "Ipswich",
      "Redlands",
      "Beenleigh",
      "Springfield",
      "Sunnybank",
      "Mt Gravatt",
    ],
  },
];

export default function ServiceAreas() {
  return (
    <section className="section-padding bg-navy-50/50">
      <div className="container-tight">
        {/* Header */}
        <div className="text-center">
          <span className="inline-block font-heading text-sm font-semibold uppercase tracking-wider text-ocean-600">
            Service Areas
          </span>
          <h2 className="section-heading mx-auto mt-2">Where We Work</h2>
          <p className="section-subheading mx-auto text-center">
            We service the Gold Coast, Brisbane, and Brisbane South — including
            all surrounding suburbs.
          </p>
        </div>

        {/* Areas grid */}
        <div className="mt-8 grid gap-5 sm:grid-cols-3">
          {areas.map((area) => (
            <div
              key={area.region}
              className="rounded-2xl border border-navy-100 bg-white p-6"
            >
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-ocean-500" />
                <h3 className="font-heading text-lg font-bold text-navy-900">
                  {area.region}
                </h3>
              </div>
              <ul className="mt-4 space-y-2">
                {area.suburbs.map((suburb) => (
                  <li key={suburb} className="text-sm text-slate-600">
                    {suburb}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
