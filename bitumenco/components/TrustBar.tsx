import Image from "next/image";

const partners = [
  { name: "Hutchinson Builders", logo: null },
  { name: "IQ Construction", logo: null },
  { name: "Veolia", logo: null },
];

export default function TrustBar() {
  return (
    <section className="border-y border-white/5 bg-asphalt-900/50">
      <div className="container-tight px-4 py-8 sm:px-6">
        <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
          <p className="text-sm font-medium uppercase tracking-widest text-asphalt-500">
            Trusted by industry leaders
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12">
            {partners.map((p) => (
              <span
                key={p.name}
                className="font-heading text-lg font-semibold text-asphalt-400/60 transition-colors hover:text-asphalt-300"
              >
                {p.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
