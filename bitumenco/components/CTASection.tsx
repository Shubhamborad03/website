import { Phone, Mail, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function CTASection() {
  return (
    <section className="relative overflow-hidden bg-asphalt-950 py-20 sm:py-28">
      {/* Amber gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 via-transparent to-amber-600/5" />
      <div className="absolute -left-40 top-0 h-80 w-80 rounded-full bg-amber-500/10 blur-[100px]" />
      <div className="absolute -right-40 bottom-0 h-80 w-80 rounded-full bg-amber-600/10 blur-[100px]" />

      <div className="container-tight relative px-4 text-center sm:px-6">
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-amber-400">
          Ready to Get Started?
        </p>
        <h2 className="mx-auto max-w-2xl font-heading text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
          Get a Free Quote for Your{" "}
          <span className="text-amber-400">Next Project</span>
        </h2>
        <p className="mx-auto mt-6 max-w-lg text-lg text-asphalt-300">
          Whether it&apos;s a new driveway, car park resurfacing, or a full
          civil construction project — we&apos;re here to help.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a href="tel:0421333728" className="btn-primary text-base">
            <Phone className="h-5 w-5" />
            Call 0421 333 728
          </a>
          <a
            href="mailto:jack@bitumenco.com"
            className="btn-outline text-base"
          >
            <Mail className="h-5 w-5" />
            Email Jack Directly
          </a>
        </div>

        <p className="mt-8 text-sm text-asphalt-500">
          Free quotes &middot; No obligation &middot; Fast response
        </p>
      </div>
    </section>
  );
}
