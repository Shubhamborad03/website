import { Shield, Award, Clock, ThumbsUp } from "lucide-react";

const stats = [
  {
    icon: Shield,
    label: "QBCC Licensed",
    detail: "Licence #15017564",
  },
  {
    icon: Award,
    label: "Qualified Carpenter",
    detail: "Fully insured",
  },
  {
    icon: Clock,
    label: "Open 7 Days",
    detail: "9am – 5pm",
  },
  {
    icon: ThumbsUp,
    label: "Free Quotes",
    detail: "No obligation",
  },
];

export default function TrustBar() {
  return (
    <section className="border-y border-charcoal-100 bg-charcoal-50/50">
      <div className="container-tight px-4 py-8 sm:px-6">
        <div className="grid grid-cols-2 gap-6 sm:gap-8 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="flex items-center gap-3">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-timber-100 text-timber-600">
                <stat.icon className="h-6 w-6" />
              </div>
              <div>
                <p className="text-sm font-bold text-charcoal-900">
                  {stat.label}
                </p>
                <p className="text-xs text-charcoal-500">{stat.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
