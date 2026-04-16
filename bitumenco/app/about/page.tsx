import Image from "next/image";
import { Shield, Users, Truck, Award, Phone, Mail } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Bitumen Co — Brisbane Asphalt Contractor",
  description:
    "Meet the team behind Bitumen Co. 10+ years in the asphalt industry, family-operated, working alongside Hutchinson Builders, IQ Construction & Veolia.",
};

export default function AboutPage() {
  return (
    <main className="pt-28">
      {/* Hero */}
      <section className="section-dark py-20 sm:py-28">
        <div className="container-tight px-4 sm:px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-amber-400">
                Our Story
              </p>
              <h1 className="font-heading text-4xl font-bold tracking-tight sm:text-5xl">
                From Builder to{" "}
                <span className="text-amber-400">Bitumen Specialist</span>
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-asphalt-300">
                Company Director Jack Alley was originally a builder, but
                discovered a passion for bitumen and civil construction that led
                him to create Bitumen Co.
              </p>
              <p className="mt-4 text-base leading-relaxed text-asphalt-400">
                Today we&apos;re a family-operated business, working on
                everything from small residential driveways to large-scale civil
                projects alongside well-respected organisations such as
                Hutchinson Builders, IQ Construction, and Veolia.
              </p>
              <p className="mt-4 text-base leading-relaxed text-asphalt-400">
                With over 10 years in the bitumen and asphalt industry, the
                latest plant and equipment, and a management team that
                understands everything from customer service to OH&amp;S — we
                deliver a high-quality product, every time.
              </p>
            </div>

            <div className="relative">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                <Image
                  src="/images/drone-road.jpg"
                  alt="Aerial view of Bitumen Co road project"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-4 rounded-xl border border-white/10 bg-asphalt-950/90 p-5 shadow-2xl backdrop-blur-sm sm:-left-8">
                <p className="font-heading text-3xl font-bold text-amber-400">
                  10+
                </p>
                <p className="text-sm text-asphalt-300">
                  Years in the Industry
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-asphalt-900 py-20 sm:py-28">
        <div className="container-tight px-4 sm:px-6">
          <div className="mb-16 text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-amber-400">
              Why Bitumen Co
            </p>
            <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">
              What Sets Us Apart
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: Users,
                title: "Family Operated",
                text: "We treat every project like it's our own property. Personal service, no corporate runaround.",
              },
              {
                icon: Truck,
                title: "Latest Equipment",
                text: "Modern plant and machinery ensures we deliver a high-quality finish on every job.",
              },
              {
                icon: Shield,
                title: "Fully Insured",
                text: "Licensed and fully insured for your complete peace of mind on every project.",
              },
              {
                icon: Award,
                title: "Industry Partners",
                text: "Trusted by Hutchinson Builders, IQ Construction, Veolia and more.",
              },
            ].map((v) => (
              <div
                key={v.title}
                className="rounded-2xl border border-white/5 bg-asphalt-950/50 p-8"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-amber-500/10">
                  <v.icon className="h-6 w-6 text-amber-400" />
                </div>
                <h3 className="mb-2 font-heading text-lg font-semibold">
                  {v.title}
                </h3>
                <p className="text-sm leading-relaxed text-asphalt-400">
                  {v.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What we do */}
      <section className="section-dark py-20 sm:py-28">
        <div className="container-tight px-4 sm:px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-amber-400">
                Our Expertise
              </p>
              <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">
                Three Core Capabilities
              </h2>

              <div className="mt-8 space-y-8">
                <div>
                  <h3 className="font-heading text-xl font-semibold text-amber-400">
                    Asphalt
                  </h3>
                  <p className="mt-2 text-base text-asphalt-400">
                    High-quality, durable asphalt solutions for driveways,
                    roads, car parks, and commercial properties. We use only
                    premium materials and follow strict industry standards.
                  </p>
                </div>
                <div>
                  <h3 className="font-heading text-xl font-semibold text-amber-400">
                    Bitumen
                  </h3>
                  <p className="mt-2 text-base text-asphalt-400">
                    Road construction, waterproofing, and sealing services.
                    Reliable bitumen products and services designed to meet the
                    highest standards in the industry.
                  </p>
                </div>
                <div>
                  <h3 className="font-heading text-xl font-semibold text-amber-400">
                    Civil Construction
                  </h3>
                  <p className="mt-2 text-base text-asphalt-400">
                    Road construction, site development, stormwater management,
                    and more. Customised solutions delivered on time and on
                    budget with cutting-edge technology.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid gap-4">
              <div className="relative aspect-video overflow-hidden rounded-2xl">
                <Image
                  src="/images/excavator.jpg"
                  alt="Excavator on construction site"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-video overflow-hidden rounded-2xl">
                <Image
                  src="/images/pothole-repair-workers.jpg"
                  alt="Workers laying asphalt"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-asphalt-950 py-20">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 via-transparent to-amber-600/5" />
        <div className="container-tight relative px-4 text-center sm:px-6">
          <h2 className="font-heading text-3xl font-bold sm:text-4xl">
            Ready to work with us?
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-asphalt-300">
            Contact Jack directly for a free, no-obligation quote on your
            project.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a href="tel:0421333728" className="btn-primary text-base">
              <Phone className="h-5 w-5" />
              Call 0421 333 728
            </a>
            <a
              href="mailto:jack@bitumenco.com"
              className="btn-outline text-base"
            >
              <Mail className="h-5 w-5" />
              jack@bitumenco.com
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
