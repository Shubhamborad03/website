import Image from "next/image";

const team = [
  {
    name: "Jim Mackenzie",
    role: "Owner & Master Electrician",
    image: "/images/jim.jpg",
    bio: "With 10+ years at the helm, Jim founded J Mack Electrical on honesty, quality work and fair pricing. He's a hands-on owner who still turns up to jobs personally.",
    skills: ["Licensed Master Electrician", "Lic: 79879", "Est. 2015"],
  },
  {
    name: "Dylan",
    role: "Qualified Electrician",
    image: "/images/dylan.jpg",
    bio: "Dylan is a key part of the J Mack team — known for his thorough workmanship and friendly, professional manner on every job.",
    skills: ["Residential", "Commercial", "Fault Finding"],
  },
];

export default function TeamSection() {
  return (
    <section className="py-20 bg-brand-50" id="team">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="section-label mb-3">Our People</p>
          <h2 className="section-heading">
            The Team Behind the Work
          </h2>
          <p className="text-gray-500 mt-3 max-w-md mx-auto text-sm leading-relaxed">
            A skilled, professional crew who take pride in every job — and treat your home or business with respect.
          </p>
        </div>

        {/* Team cards */}
        <div className="flex flex-col md:flex-row gap-8 justify-center max-w-3xl mx-auto">
          {team.map((member) => (
            <div key={member.name} className="flex-1 bg-white rounded-3xl shadow-sm border border-brand-100 overflow-hidden group hover:shadow-xl transition-all duration-300">
              {/* Photo */}
              <div className="relative h-72 overflow-hidden bg-brand-100">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 400px"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-950/70 via-transparent to-transparent" />
                {/* Name overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <p className="text-white font-heading font-bold text-lg leading-tight">{member.name}</p>
                  <p className="text-brand-200 text-sm font-medium">{member.role}</p>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{member.bio}</p>
                <div className="flex flex-wrap gap-2">
                  {member.skills.map((s) => (
                    <span key={s} className="bg-brand-50 text-brand-700 text-xs font-medium px-3 py-1 rounded-lg border border-brand-100">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional team note */}
        <div className="mt-10 text-center">
          <div className="inline-flex items-center gap-3 bg-white border border-brand-100 rounded-2xl px-6 py-4 shadow-sm">
            <div className="flex -space-x-2">
              {["A", "M", "R"].map((initial, i) => (
                <div key={i} className={`w-8 h-8 rounded-full border-2 border-white flex items-center justify-center text-xs font-bold text-white ${
                  ["bg-brand-600", "bg-brand-700", "bg-brand-800"][i]
                }`}>
                  {initial}
                </div>
              ))}
            </div>
            <p className="text-sm text-gray-600">
              <strong className="text-brand-900">Aidan, Matt & Rachael</strong> also on the team — all committed to great service.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
