import Image from "next/image";
import { ArrowRight, User, Briefcase, Award } from "lucide-react";
import Link from "next/link";

export default function AboutPreview() {
  return (
    <section className="bg-asphalt-900 py-20 sm:py-28">
      <div className="container-tight px-4 sm:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Images */}
          <div className="relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Image
                src="/images/excavator.jpg"
                alt="Bitumen Co equipment on site"
                fill
                className="object-cover"
              />
            </div>
            {/* Floating card */}
            <div className="absolute -bottom-6 -right-4 rounded-xl border border-white/10 bg-asphalt-950/90 p-5 shadow-2xl backdrop-blur-sm sm:-right-8">
              <p className="font-heading text-3xl font-bold text-amber-400">
                10+
              </p>
              <p className="text-sm text-asphalt-300">Years in the Industry</p>
            </div>
          </div>

          {/* Content */}
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-amber-400">
              About Bitumen Co
            </p>
            <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">
              Built on Quality.{" "}
              <span className="text-asphalt-400">Driven by Passion.</span>
            </h2>
            <p className="mt-6 text-base leading-relaxed text-asphalt-300">
              Company Director Jack Alley was originally a builder, but
              discovered a passion for bitumen that led him to create Bitumen
              Co. Today, we&apos;re a family-operated business working alongside
              industry leaders like Hutchinson Builders, IQ Construction, and
              Veolia.
            </p>
            <p className="mt-4 text-base leading-relaxed text-asphalt-300">
              We specialise in serving private and residential clients — offering
              personalised service, exceptional craftsmanship, and results that
              speak for themselves.
            </p>

            {/* Stats */}
            <div className="mt-8 grid grid-cols-3 gap-4">
              <div className="rounded-xl border border-white/5 bg-asphalt-950/50 p-4 text-center">
                <User className="mx-auto mb-2 h-5 w-5 text-amber-400" />
                <p className="font-heading text-xl font-bold">Family</p>
                <p className="text-xs text-asphalt-500">Operated</p>
              </div>
              <div className="rounded-xl border border-white/5 bg-asphalt-950/50 p-4 text-center">
                <Briefcase className="mx-auto mb-2 h-5 w-5 text-amber-400" />
                <p className="font-heading text-xl font-bold">SE QLD</p>
                <p className="text-xs text-asphalt-500">Coverage</p>
              </div>
              <div className="rounded-xl border border-white/5 bg-asphalt-950/50 p-4 text-center">
                <Award className="mx-auto mb-2 h-5 w-5 text-amber-400" />
                <p className="font-heading text-xl font-bold">Quality</p>
                <p className="text-xs text-asphalt-500">Guaranteed</p>
              </div>
            </div>

            <Link
              href="/about"
              className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-amber-400 transition-colors hover:text-amber-300"
            >
              Read our full story
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
