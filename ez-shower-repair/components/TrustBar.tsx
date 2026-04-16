import { Star, ShieldCheck, Award, ThumbsUp } from "lucide-react";

const stats = [
  { icon: Star, label: "Years Experience", value: "10+" },
  { icon: ShieldCheck, label: "Licensed & Insured", value: "QBCC" },
  { icon: Award, label: "Jobs Completed", value: "1,000+" },
  { icon: ThumbsUp, label: "Customer Satisfaction", value: "100%" },
];

export default function TrustBar() {
  return (
    <section className="relative z-10 -mt-6 px-4 sm:px-6">
      <div className="container-tight">
        <div className="grid grid-cols-2 gap-4 rounded-2xl border border-navy-100 bg-white p-6 shadow-xl shadow-navy-900/5 lg:grid-cols-4 lg:gap-8 lg:p-8">
          {stats.map((stat) => (
            <div key={stat.label} className="flex items-center gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-ocean-50 text-ocean-600">
                <stat.icon className="h-6 w-6" />
              </div>
              <div>
                <div className="font-heading text-xl font-bold text-navy-900 lg:text-2xl">
                  {stat.value}
                </div>
                <div className="text-sm text-slate-500">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
