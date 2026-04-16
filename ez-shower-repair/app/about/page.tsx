import { CheckCircle, Shield, Clock, Award, Users } from "lucide-react";
import type { Metadata } from "next";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "About Us | EZ Shower Repair & Tiling",
  description:
    "Learn about EZ Shower Repair & Tiling — trusted bathroom specialists serving Gold Coast, Brisbane & Brisbane South with 10+ years experience.",
};

const values = [
  {
    icon: Shield,
    title: "Quality Guaranteed",
    description:
      "We use only premium, approved products from trusted brands like Laticrete. Every job comes with a warranty.",
  },
  {
    icon: Clock,
    title: "Fast Turnaround",
    description:
      "Most repairs are completed in 2–4 hours. Your shower is back in action within 24 hours — not days or weeks.",
  },
  {
    icon: Award,
    title: "Expert Technicians",
    description:
      "Our team is fully licensed, insured, and trained in the latest waterproofing and tiling techniques.",
  },
  {
    icon: Users,
    title: "Customer First",
    description:
      "We provide free inspections, honest advice, and upfront quotes. No surprises, no hidden fees.",
  },
];

export default function AboutPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-navy-950 px-4 pb-12 pt-14 sm:px-6 lg:pb-14 lg:pt-16">
        <div className="container-tight max-w-3xl text-center">
          <span className="inline-block font-heading text-sm font-semibold uppercase tracking-wider text-ocean-400">
            About Us
          </span>
          <h1 className="mt-2 font-heading text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            Your Trusted Shower Repair Specialists
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-navy-300">
            EZ Shower Repair & Tiling has been providing expert bathroom
            solutions across South-East Queensland for over a decade.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding">
        <div className="container-tight">
          <div className="mx-auto max-w-3xl">
            <h2 className="section-heading">Our Story</h2>
            <div className="mt-6 space-y-4 text-lg leading-relaxed text-slate-600">
              <p>
                EZ Shower Repair & Tiling was founded with a simple mission: to
                provide homeowners with a better, faster, and more affordable
                solution to leaking showers. Too many Australians were being told
                they needed a full bathroom renovation when all they needed was a
                professional repair.
              </p>
              <p>
                Over the past decade, we&apos;ve completed thousands of repairs
                across the Gold Coast, Brisbane, and Brisbane South. Our
                team of qualified technicians specialises in fixing leaking
                showers permanently — without removing your existing tiles.
              </p>
              <p>
                We use exclusive, premium products from Laticrete and other
                industry-leading brands to deliver results that last. Every job
                comes with a warranty, and we stand behind our work 100%.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-navy-50/50">
        <div className="container-tight">
          <div className="text-center">
            <h2 className="section-heading">Why Choose Us</h2>
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <div key={v.title} className="text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-ocean-50 text-ocean-600">
                  <v.icon className="h-7 w-7" />
                </div>
                <h3 className="mt-4 font-heading text-lg font-bold text-navy-900">
                  {v.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-500">
                  {v.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="section-padding">
        <div className="container-tight">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="section-heading">Our Credentials</h2>
            <ul className="mt-8 space-y-3 text-left">
              {[
                "Fully Licensed & Insured",
                "Exclusive Laticrete product partner",
                "NDIS approved provider",
                "10+ years of industry experience",
                "1,000+ successful jobs completed",
                "Free inspections and no-obligation quotes",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 shrink-0 text-ocean-500" />
                  <span className="text-navy-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <CTASection />
    </main>
  );
}
