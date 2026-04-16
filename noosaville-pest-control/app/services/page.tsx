import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pest Control Services",
  description: "Complete pest control services in Noosaville and the Sunshine Coast. Cockroaches, ants, spiders, rodents, fleas, silverfish, beetles and more.",
};

const services = [
  {
    title: "Cockroach Control",
    desc: "Cockroaches are one of the most common pests on the Sunshine Coast. They carry bacteria, contaminate food, and trigger allergies. Our targeted cockroach treatments eliminate infestations at the source — treating harbourage points, cracks, crevices, and entry areas with professional-grade products for long-lasting results.",
    includes: ["Interior spray treatment", "Gel bait application in kitchen & bathrooms", "Crack and crevice treatment", "External perimeter barrier spray"],
    icon: "🪳",
  },
  {
    title: "Ant Control",
    desc: "Ants invade in massive numbers and the ones you see are just the tip of the iceberg. We identify the species (coastal brown, black house, green-head, or fire ants) and apply targeted treatments that reach the colony — not just the foraging ants on your bench.",
    includes: ["Species identification", "Colony-targeting bait systems", "Internal & external barrier spray", "Entry point treatment"],
    icon: "🐜",
  },
  {
    title: "Spider Control",
    desc: "The Sunshine Coast is home to several dangerous spider species including redbacks, white-tails, and funnel-webs. Our spider treatments include complete web removal and barrier applications to exterior walls, eaves, fences, and garden beds — keeping your family safe.",
    includes: ["Full web removal (interior & exterior)", "Barrier spray to walls & eaves", "Garden bed treatment", "Redback & dangerous species targeting"],
    icon: "🕷️",
  },
  {
    title: "Rodent Control",
    desc: "Rats and mice cause property damage, contaminate food, and carry diseases. We use a combination of professional baiting stations, snap traps, and exclusion methods. Critically, we identify and seal entry points so they can't get back in.",
    includes: ["Professional bait stations", "Snap trap placement", "Entry point identification & sealing", "Roof void & subfloor treatment"],
    icon: "🐀",
  },
  {
    title: "Flea Treatment",
    desc: "Fleas breed rapidly and infest carpets, furniture, and bedding — especially in homes with pets. Our flea treatments target all life stages (eggs, larvae, pupae, adults) to break the breeding cycle and provide lasting relief.",
    includes: ["Internal carpet & floor spray", "Furniture & pet resting area treatment", "External yard spray", "Lifecycle disruption approach"],
    icon: "🦟",
  },
  {
    title: "Silverfish Control",
    desc: "Silverfish damage books, clothing, wallpaper, and stored items. They thrive in the humid Sunshine Coast climate. Our treatments target their hiding spots in roof voids, wardrobes, bookshelves, and storage areas.",
    includes: ["Roof void dusting", "Wardrobe & storage area treatment", "Crack and crevice spray", "Humidity management advice"],
    icon: "🐛",
  },
  {
    title: "Beetle Control",
    desc: "Various beetle species can damage timber, stored food products, and fabrics. We identify the species and apply the appropriate treatment to eliminate infestations and prevent reinfestation.",
    includes: ["Species identification", "Targeted spray treatment", "Timber treatment where needed", "Prevention advice"],
    icon: "🪲",
  },
  {
    title: "General Pest Treatment",
    desc: "Our comprehensive general pest treatment covers all common household pests in a single visit. This is our most popular service — ideal for annual maintenance to keep your home pest-free year-round. Covers cockroaches, ants, spiders, silverfish, and more.",
    includes: ["Full interior spray", "External perimeter barrier", "Roof void dusting", "Web removal", "Crack & crevice treatment", "12-month recommendation"],
    icon: "🛡️",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Page header */}
      <section className="bg-brand-950 pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-brand-300 text-sm font-semibold uppercase tracking-widest mb-3">Our Services</p>
          <h1 className="font-heading text-4xl md:text-5xl font-extrabold text-white mb-4">
            Pest Control Services
          </h1>
          <p className="text-white/60 max-w-2xl text-lg">
            Complete pest management solutions for homes and businesses across
            the Sunshine Coast. Safe, effective treatments using professional-grade products.
          </p>
        </div>
      </section>

      {/* Services list */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {services.map((s, i) => (
              <div
                key={s.title}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${
                  i > 0 ? "pt-8 border-t border-gray-100" : ""
                }`}
              >
                <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-3xl">{s.icon}</span>
                    <h2 className="font-heading text-2xl font-bold text-brand-900">{s.title}</h2>
                  </div>
                  <p className="text-gray-600 leading-relaxed mb-6">{s.desc}</p>
                  <Link href="/contact" className="btn-primary text-sm">
                    Get a Quote
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
                <div className={`bg-brand-50 rounded-2xl p-6 border border-brand-100 ${
                  i % 2 === 1 ? "lg:order-1" : ""
                }`}>
                  <h3 className="font-heading font-semibold text-brand-800 text-sm uppercase tracking-wider mb-4">
                    What&apos;s Included
                  </h3>
                  <ul className="space-y-2.5">
                    {s.includes.map((item) => (
                      <li key={item} className="flex items-start gap-2.5">
                        <svg className="w-5 h-5 text-accent-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-sm text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-brand-900 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="section-heading-light text-3xl mb-4">Not Sure What You Need?</h2>
          <p className="text-white/60 mb-8 max-w-lg mx-auto">
            Give us a call and describe what you&apos;re seeing — we&apos;ll
            recommend the right treatment. No obligation, no pressure.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:+61408001239" className="btn-primary text-base px-8 py-4">
              Call 0408 001 239
            </a>
            <Link href="/contact" className="btn-outline-white text-base px-8 py-4">
              Send an Enquiry
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
