import type { Metadata } from "next";
import {
  Shield,
  CheckCircle2,
  Phone,
  MapPin,
  Clock,
  Award,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About David May | Carpentry & Handyman — Sunshine Coast",
  description:
    "QBCC Licensed Carpenter based in Nambour, serving the Sunshine Coast. Quality carpentry, renovations and handyman services. Open 7 days.",
};

const values = [
  {
    title: "Quality Workmanship",
    description:
      "Every joint, every cut, every finish is done properly. David doesn't take shortcuts — your home deserves quality work that lasts.",
  },
  {
    title: "Honest Pricing",
    description:
      "No hidden fees, no inflated quotes. David gives you a fair price upfront and sticks to it. Free quotes on every job.",
  },
  {
    title: "Reliable & On Time",
    description:
      "When David says he'll be there, he's there. Consistent communication and reliable scheduling — no chasing up needed.",
  },
  {
    title: "Licensed & Insured",
    description:
      "QBCC Licensed (15017564), ABN registered (98 183 774 863) and fully insured. Your home and your investment are protected.",
  },
];

const credentials = [
  "QBCC Licensed Carpenter — Licence #15017564",
  "ABN: 98 183 774 863",
  "Fully insured for all works",
  "Licensed for carpentry jobs up to $200,000",
  "Licensed for tiling & waterproofing up to $3,300",
  "Licensed for plastering up to $3,300",
];

export default function AboutPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-charcoal-900 px-4 pb-16 pt-14 sm:px-6">
        <div className="container-tight">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-timber-400">
            About
          </p>
          <h1 className="font-heading text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Meet David May
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-charcoal-300">
            QBCC Licensed Carpenter based in Nambour, serving every suburb
            across the Sunshine Coast. Quality work, honest pricing, 7 days a
            week.
          </p>
        </div>
      </section>

      {/* About content */}
      <section className="section-padding bg-white">
        <div className="container-tight">
          <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-20">
            {/* Visual */}
            <div>
              <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-gradient-to-br from-timber-200 via-timber-100 to-charcoal-100">
                <div className="flex h-full flex-col items-center justify-center p-8 text-center">
                  <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-2xl bg-timber-600 text-4xl font-bold text-white shadow-lg">
                    DM
                  </div>
                  <p className="font-heading text-3xl font-bold text-charcoal-900">
                    David May
                  </p>
                  <p className="mt-2 text-charcoal-500">
                    Licensed Carpenter — Sunshine Coast
                  </p>
                  <div className="mt-4 flex items-center gap-2 rounded-full bg-timber-600/10 px-4 py-2 text-sm font-medium text-timber-700">
                    <Shield className="h-4 w-4" />
                    QBCC Lic: 15017564
                  </div>
                </div>
              </div>
            </div>

            {/* Story */}
            <div>
              <h2 className="heading-lg">Your Local Sunshine Coast Carpenter</h2>
              <div className="mt-6 space-y-4 text-base leading-relaxed text-charcoal-600">
                <p>
                  David May is a QBCC licensed carpenter based in Nambour on the
                  Sunshine Coast. With a genuine passion for quality
                  craftsmanship, David handles everything from small handyman
                  repairs to large-scale home renovations.
                </p>
                <p>
                  Whether you need a new timber deck built, a bathroom tiled, a
                  wall taken out, or just someone reliable to handle the odd
                  jobs around the house — David delivers honest work at fair
                  prices.
                </p>
                <p>
                  Licensed for carpentry jobs up to $200,000, plus tiling,
                  waterproofing, and plastering, David brings the full range of
                  skills needed to complete projects properly — without the
                  hassle of coordinating multiple tradies.
                </p>
                <p>
                  Open 7 days a week and covering Maroochydore, Buderim, Coolum,
                  Kawana, Sippy Downs and all surrounding Sunshine Coast suburbs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-charcoal-50/50">
        <div className="container-tight">
          <div className="mb-12 max-w-xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-timber-600">
              Why Choose David
            </p>
            <h2 className="heading-lg">What Sets Us Apart</h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {values.map((value) => (
              <div key={value.title} className="card">
                <h3 className="font-heading text-lg font-bold text-charcoal-900">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-charcoal-500">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="section-padding bg-white">
        <div className="container-tight">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-timber-600">
                Credentials
              </p>
              <h2 className="heading-lg">Licensed, Registered & Insured</h2>
              <p className="text-body mt-4">
                David holds a QBCC licence and is fully insured for all works.
                When you hire a licensed carpenter, you&apos;re protected by
                Queensland&apos;s building legislation — giving you confidence
                that the work meets required standards.
              </p>
            </div>
            <div className="rounded-2xl border border-charcoal-100 bg-charcoal-50 p-6 sm:p-8">
              <div className="mb-6 flex items-center gap-3">
                <Award className="h-8 w-8 text-timber-600" />
                <h3 className="font-heading text-lg font-bold">
                  Licences & Registration
                </h3>
              </div>
              <ul className="space-y-3">
                {credentials.map((cred) => (
                  <li key={cred} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-timber-600" />
                    <span className="text-sm font-medium text-charcoal-700">
                      {cred}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Quick info strip */}
      <section className="border-y border-charcoal-100 bg-charcoal-50/50 px-4 py-10 sm:px-6">
        <div className="container-tight grid gap-6 sm:grid-cols-3">
          <div className="flex items-center gap-3">
            <MapPin className="h-6 w-6 text-timber-600" />
            <div>
              <p className="text-sm font-bold text-charcoal-900">Based in Nambour</p>
              <p className="text-xs text-charcoal-500">
                Serves all Sunshine Coast
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Clock className="h-6 w-6 text-timber-600" />
            <div>
              <p className="text-sm font-bold text-charcoal-900">Open 7 Days</p>
              <p className="text-xs text-charcoal-500">9am – 5pm</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Phone className="h-6 w-6 text-timber-600" />
            <div>
              <p className="text-sm font-bold text-charcoal-900">Free Quotes</p>
              <p className="text-xs text-charcoal-500">No obligation</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-white">
        <div className="container-tight text-center">
          <h2 className="heading-lg">Ready to Talk About Your Project?</h2>
          <p className="text-body mx-auto mt-4 max-w-lg">
            Call David for a free, no-obligation quote. Or send an enquiry and
            he&apos;ll get back to you.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a href="tel:0400000000" className="btn-primary">
              <Phone className="h-4 w-4" />
              Call for Free Quote
            </a>
            <Link href="/contact" className="btn-secondary">
              Send Enquiry
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
