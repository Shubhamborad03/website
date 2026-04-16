import { Phone, Mail, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function CTASection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-tight">
        <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-charcoal-900 via-charcoal-800 to-timber-900">
          <div className="relative px-6 py-16 sm:px-12 lg:px-20 lg:py-20">
            {/* Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div
                className="h-full w-full"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.4' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E")`,
                }}
              />
            </div>

            <div className="relative mx-auto max-w-2xl text-center">
              <h2 className="font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                Ready to Get Your Project Started?
              </h2>
              <p className="mx-auto mt-4 max-w-lg text-lg text-charcoal-300">
                Give David a call for a free, no-obligation quote. Licensed,
                insured, and ready to work 7 days a week.
              </p>

              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <a
                  href="tel:0400000000"
                  className="btn-primary text-base shadow-xl"
                >
                  <Phone className="h-5 w-5" />
                  Call for Free Quote
                </a>
                <Link href="/contact" className="btn-outline-light text-base">
                  <Mail className="h-4 w-4" />
                  Send Enquiry
                </Link>
              </div>

              <p className="mt-6 text-sm text-charcoal-400">
                ABN: 98 183 774 863 — QBCC Licence: 15017564
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
