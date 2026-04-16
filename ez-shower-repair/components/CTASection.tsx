import { Phone, MessageCircle } from "lucide-react";
import Link from "next/link";

export default function CTASection() {
  return (
    <section className="relative overflow-hidden bg-ocean-600 px-4 py-14 sm:px-6 lg:py-16">
      {/* Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.5'%3E%3Ccircle cx='3' cy='3' r='1.5'/%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container-tight relative text-center">
        <h2 className="mx-auto max-w-2xl font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
          Got a Leaking Shower? Get Your Free Quote Today
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg text-ocean-100">
          Call us now or send through your details and we&apos;ll get back to
          you within the hour.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a href="tel:0406671114" className="btn-white text-base">
            <Phone className="h-5 w-5" />
            Call 0406 671 114
          </a>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-white/30 px-6 py-3.5 font-semibold text-white transition-all duration-200 hover:border-white/60 hover:bg-white/10"
          >
            <MessageCircle className="h-5 w-5" />
            Request a Quote Online
          </Link>
        </div>
      </div>
    </section>
  );
}
