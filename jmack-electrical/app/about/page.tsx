import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about J Mack Electrical — Gympie's locally owned, family electrical business since 2015. Meet Jim and the team.",
};

const values = [
  { icon: "🤝", title: "Honesty First", desc: "We tell you what's actually needed, not what earns the most. Our reputation is built on trust, not upselling." },
  { icon: "⚡", title: "Quality Work", desc: "Every job is done to code and to the highest standard. We don't cut corners — on a job that matters as much as electrical, we never would." },
  { icon: "⏰", title: "We Show Up", desc: "On time, every time. If there's a delay, we'll tell you in advance. Punctuality is a form of respect." },
  { icon: "📍", title: "Local Knowledge", desc: "We know Gympie and its surrounds. From the properties to the regulations, our local expertise means better outcomes for you." },
  { icon: "💲", title: "Fair Pricing", desc: "Competitive rates and free quotes. We've absorbed fuel cost increases ourselves so our customers don't have to." },
  { icon: "❤️", title: "Community Focused", desc: "As a local family business, we care about the community we serve. We're proud to be Gympie's preferred local electrician." },
];

const milestones = [
  { year: "2015", event: "J Mack Electrical founded by Jim Mackenzie in Gympie" },
  { year: "2017", event: "Expanded team — taking on larger commercial projects" },
  { year: "2019", event: "Became Gympie's go-to for QLD smoke alarm compliance" },
  { year: "2021", event: "Launched rural & underground power services" },
  { year: "2023", event: "Celebrated 500+ completed jobs across the region" },
  { year: "2025", event: "10-year anniversary — featured in Gympie Today newspaper" },
];

export default function AboutPage() {
  return (
    <>
      {/* Page header */}
      <div className="bg-brand-950 pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 circuit-bg opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-br from-brand-950 to-brand-800/80" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-brand-300 text-sm mb-4">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span>About</span>
          </div>
          <h1 className="font-heading text-5xl font-extrabold text-white mb-4">About Us</h1>
          <p className="text-white/60 text-lg max-w-xl">
            A locally owned, family electrical business proudly serving Gympie
            and surrounds since 2015.
          </p>
        </div>
      </div>

      {/* Story section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="section-label mb-3">Our Story</p>
              <h2 className="section-heading mb-8 heading-underline">
                JMack&apos;s Decade of Care
              </h2>
              <div className="mt-8 space-y-5 text-gray-600 leading-relaxed">
                <p>
                  <strong className="text-brand-900">J Mack Electrical Services</strong> was founded
                  in 2015 by Jim Mackenzie — a licensed electrician with a vision to provide
                  honest, reliable and affordable electrical services to the people of Gympie
                  and the surrounding region.
                </p>
                <p>
                  &ldquo;In a region like Gympie, you need to be able to do anything and everything,&rdquo;
                  Jim says. &ldquo;From household connections and repairs to pumps and equipment on the
                  farm, in factories or in shops — we do it all.&rdquo;
                </p>
                <p>
                  What started as a one-man business has grown into a skilled team covering
                  everything from smoke alarm compliance and switchboard upgrades to full
                  commercial fit-outs and rural underground power projects.
                </p>
                <p>
                  A significant focus today is smoke alarm upgrades, as Queensland moves
                  toward mandatory photoelectric, interconnected systems in every home
                  by 2027. JMack is already helping hundreds of homeowners and landlords
                  get ahead of the changes.
                </p>
                <p>
                  &ldquo;It&apos;s a big job, but an important one,&rdquo; Jim explains. &ldquo;We&apos;re helping people
                  get ahead of the changes before the 2027 deadline.&rdquo;
                </p>
              </div>
              {/* News snippet */}
              <div className="mt-8 p-5 bg-brand-50 border border-brand-100 rounded-2xl flex gap-4">
                <div className="text-3xl">📰</div>
                <div>
                  <p className="text-sm font-bold text-brand-900">Featured in Gympie Today</p>
                  <p className="text-sm text-gray-500 mt-0.5">&ldquo;JMack&apos;s Decade of Care — a local, family-owned business preparing to celebrate a major milestone: 10 years of delivering reliable electrical work and community connection.&rdquo;</p>
                </div>
              </div>
            </div>

            {/* Photo */}
            <div className="space-y-6">
              <div className="relative rounded-3xl overflow-hidden aspect-[3/4] shadow-2xl">
                <Image
                  src="/images/newspaper.jpg"
                  alt="JMack's Decade of Care - Gympie Today feature"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="relative rounded-2xl overflow-hidden aspect-video shadow-lg">
                <Image
                  src="/images/team-trucks.jpg"
                  alt="J Mack Electrical team and work trucks"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-brand-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="section-label mb-3">Our Journey</p>
            <h2 className="section-heading">10 Years, Milestone by Milestone</h2>
          </div>
          <div className="relative">
            {/* Line */}
            <div className="absolute left-6 top-0 bottom-0 w-px bg-brand-200 hidden sm:block" />
            <div className="space-y-8">
              {milestones.map((m, i) => (
                <div key={m.year} className="flex gap-6 items-start">
                  {/* Dot */}
                  <div className="relative flex-shrink-0">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-xs font-bold z-10 relative ${
                      i === milestones.length - 1
                        ? "bg-brand-600 text-white shadow-lg"
                        : "bg-white border-2 border-brand-200 text-brand-700"
                    }`}>
                      {m.year.slice(-2)}
                    </div>
                  </div>
                  <div className="flex-1 pb-2">
                    <p className="font-heading font-bold text-brand-900 text-sm mb-0.5">{m.year}</p>
                    <p className="text-gray-600 text-sm">{m.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="section-label mb-3">How We Work</p>
            <h2 className="section-heading">Our Values</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v) => (
              <div key={v.title} className="card p-6">
                <span className="text-3xl block mb-4">{v.icon}</span>
                <h3 className="font-heading font-bold text-brand-950 mb-2">{v.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-brand-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="section-label mb-3">The Team</p>
            <h2 className="section-heading">Meet the Crew</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Jim */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-brand-100 hover:shadow-xl transition-all duration-300 group">
              <div className="relative h-80 bg-brand-100 overflow-hidden">
                <Image src="/images/jim.jpg" alt="Jim Mackenzie" fill className="object-cover object-top group-hover:scale-105 transition-transform duration-500" sizes="400px" />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-950/70 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <p className="text-white font-heading font-bold text-lg">Jim Mackenzie</p>
                  <p className="text-brand-200 text-sm">Owner & Master Electrician</p>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 text-sm leading-relaxed mb-4">Founder of J Mack Electrical. Hands-on, honest and passionate about doing the job right the first time.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-brand-50 text-brand-700 text-xs font-medium px-3 py-1 rounded-lg border border-brand-100">Licensed</span>
                  <span className="bg-brand-50 text-brand-700 text-xs font-medium px-3 py-1 rounded-lg border border-brand-100">Lic: 79879</span>
                  <span className="bg-brand-50 text-brand-700 text-xs font-medium px-3 py-1 rounded-lg border border-brand-100">10+ Years</span>
                </div>
              </div>
            </div>

            {/* Dylan */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-brand-100 hover:shadow-xl transition-all duration-300 group">
              <div className="relative h-80 bg-brand-100 overflow-hidden">
                <Image src="/images/dylan.jpg" alt="Dylan" fill className="object-cover object-top group-hover:scale-105 transition-transform duration-500" sizes="400px" />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-950/70 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <p className="text-white font-heading font-bold text-lg">Dylan</p>
                  <p className="text-brand-200 text-sm">Qualified Electrician</p>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 text-sm leading-relaxed mb-4">A key part of the team known for thorough workmanship and a professional, friendly manner on every job.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-brand-50 text-brand-700 text-xs font-medium px-3 py-1 rounded-lg border border-brand-100">Residential</span>
                  <span className="bg-brand-50 text-brand-700 text-xs font-medium px-3 py-1 rounded-lg border border-brand-100">Commercial</span>
                </div>
              </div>
            </div>

            {/* Rest of team placeholder */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-brand-100 flex flex-col">
              <div className="h-80 bg-brand-50 flex items-center justify-center flex-col gap-4 p-8">
                <div className="flex -space-x-3">
                  {["A", "M", "R"].map((initial, i) => (
                    <div key={i} className={`w-14 h-14 rounded-full border-4 border-white flex items-center justify-center text-base font-bold text-white ${
                      ["bg-brand-600", "bg-brand-700", "bg-brand-800"][i]
                    }`}>
                      {initial}
                    </div>
                  ))}
                </div>
                <p className="text-center text-brand-700 font-heading font-bold text-lg">Aidan, Matt & Rachael</p>
                <p className="text-center text-gray-500 text-sm">Part of the full J Mack team</p>
              </div>
              <div className="p-6 flex-1">
                <p className="text-gray-600 text-sm leading-relaxed mb-4">Our full team brings a wealth of experience across residential, commercial and rural projects. Every member is handpicked for their skill, attitude and commitment to the J Mack way.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-brand-50 text-brand-700 text-xs font-medium px-3 py-1 rounded-lg border border-brand-100">All Trades</span>
                  <span className="bg-brand-50 text-brand-700 text-xs font-medium px-3 py-1 rounded-lg border border-brand-100">Reliable</span>
                  <span className="bg-brand-50 text-brand-700 text-xs font-medium px-3 py-1 rounded-lg border border-brand-100">Friendly</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
