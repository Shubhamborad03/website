import Image from "next/image";
import Link from "next/link";

const values = [
  {
    icon: "🤝",
    title: "Honest & Transparent",
    desc: "We explain exactly what's needed and why — no inflated quotes, no surprises on the invoice.",
  },
  {
    icon: "⚡",
    title: "Quality Workmanship",
    desc: "Every job is completed to the highest standard, whether it's a simple repair or a complex installation.",
  },
  {
    icon: "📞",
    title: "Always Responsive",
    desc: "We respond quickly and show up on time. When you have an electrical issue, you can count on us.",
  },
];

export default function AboutSection() {
  return (
    <section className="py-20 bg-white" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left — image stack */}
          <div className="relative">
            {/* Main image */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3]">
              <Image
                src="/images/team-trucks.jpg"
                alt="J Mack Electrical team and work trucks"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-950/60 to-transparent" />
              {/* Caption bar */}
              <div className="absolute bottom-0 left-0 right-0 px-6 py-5">
                <p className="text-white font-semibold text-sm">Jim and the J Mack team</p>
                <p className="text-white/60 text-xs">Gympie, Queensland</p>
              </div>
            </div>

            {/* Floating newspaper card */}
            <div className="absolute -bottom-6 -right-6 w-52 rounded-2xl overflow-hidden shadow-xl border-4 border-white hidden md:block">
              <Image
                src="/images/newspaper.jpg"
                alt="JMack's decade of care - Gympie Today newspaper feature"
                width={210}
                height={140}
                className="object-cover"
              />
              <div className="bg-white px-3 py-2">
                <p className="text-xs font-semibold text-brand-900">Featured in Gympie Today</p>
                <p className="text-xs text-gray-500">JMack&apos;s Decade of Care</p>
              </div>
            </div>

            {/* 10-year badge */}
            <div className="absolute -top-5 -left-5 w-24 h-24 bg-brand-700 rounded-2xl flex flex-col items-center justify-center text-white shadow-lg hidden md:flex">
              <span className="font-heading text-3xl font-extrabold leading-none">10</span>
              <span className="text-xs font-semibold uppercase tracking-wider text-brand-200">Years</span>
              <span className="text-xs text-brand-300">Est. 2015</span>
            </div>
          </div>

          {/* Right — content */}
          <div>
            <p className="section-label mb-3">About Us</p>
            <h2 className="section-heading mb-6 heading-underline">
              Gympie&apos;s Local,<br />Family Electrician
            </h2>
            <div className="mt-8 space-y-4 text-gray-600 leading-relaxed">
              <p>
                J Mack Electrical Services has been proudly serving Gympie and the
                surrounding region since 2015. Founded by <strong className="text-brand-900">Jim Mackenzie</strong>,
                the business was built on a simple belief — that local people deserve
                a reliable, honest electrician who turns up on time and does the job right.
              </p>
              <p>
                What started as a one-man operation has grown into a skilled team
                handling everything from a quick fan install to full commercial
                fit-outs and rural underground power projects. But even as we&apos;ve
                grown, we&apos;ve never lost that personal, local touch.
              </p>
              <p>
                We&apos;re proud to be a <strong className="text-brand-900">locally owned, family business</strong> —
                and even prouder of the reputation we&apos;ve earned across Gympie,
                Rainbow Beach, Widgee and beyond.
              </p>
            </div>

            {/* Values */}
            <div className="mt-8 space-y-4">
              {values.map((v) => (
                <div key={v.title} className="flex gap-4 p-4 rounded-xl bg-brand-50 border border-brand-100">
                  <span className="text-2xl flex-shrink-0 mt-0.5">{v.icon}</span>
                  <div>
                    <p className="font-semibold text-brand-900 text-sm mb-0.5">{v.title}</p>
                    <p className="text-gray-500 text-sm">{v.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex gap-4">
              <Link href="/about" className="btn-primary">
                Meet the Team
              </Link>
              <Link href="/contact" className="btn-secondary">
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
