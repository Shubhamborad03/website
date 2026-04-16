import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Termite Inspections",
  description: "Comprehensive termite inspections in Noosaville and the Sunshine Coast. Thorough 1.5-2 hour inspections covering interior, exterior, roof void, and subfloor. Licensed technicians.",
};

const inspectionCovers = [
  { area: "Interior", details: "Baseboards, walls, windows, door frames, cabinets, closets, and all timber structures" },
  { area: "Wet Areas", details: "Bathrooms, kitchens, laundry — where plumbing penetrates the foundation and moisture attracts termites" },
  { area: "Roof Void", details: "Accessible roof spaces checked for termite activity, damage to timber framing, and moisture issues" },
  { area: "Subfloor", details: "Crawl spaces and subfloor areas inspected for mud tubes, damage, and conducive conditions" },
  { area: "Exterior", details: "External walls, eaves, foundation, garden beds, retaining walls, and any timber in contact with soil" },
  { area: "Garage & Storage", details: "Garages, sheds, and storage areas where stored items can mask termite activity" },
];

const warningSignsList = [
  "Mud tubes on walls, foundations, or in subfloor areas",
  "Hollow-sounding timber when tapped",
  "Bubbling or rippling paint on walls",
  "Discarded termite wings near windows or doors",
  "Frass (termite droppings) that look like sawdust",
  "Doors or windows that suddenly stick or won't close",
  "Sagging floors or ceilings",
  "Visible damage to skirting boards or architraves",
];

const prepTips = [
  "Clear access to interior walls, especially in wet areas",
  "Move stored items away from walls in garage and storage areas",
  "Ensure roof void access hatch is accessible",
  "Trim vegetation touching the house walls",
  "Note any areas where you've seen suspected activity",
  "Have your previous inspection report available (if applicable)",
];

export default function TermiteInspectionsPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-brand-950 pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-brand-300 text-sm font-semibold uppercase tracking-widest mb-3">Termite Services</p>
          <h1 className="font-heading text-4xl md:text-5xl font-extrabold text-white mb-4">
            Termite Inspections
          </h1>
          <p className="text-white/60 max-w-2xl text-lg">
            Thorough, professional termite inspections that give you a clear
            picture of your property&apos;s termite risk and any active threats.
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="section-heading mb-6">What&apos;s Involved</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Our termite inspections take approximately <strong>1.5 to 2 hours</strong> and
                cover every accessible area of your property. We&apos;re looking for
                live termite activity, evidence of past damage, moisture issues,
                and conditions that make your home attractive to termites.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                On the Sunshine Coast, our subtropical climate and timber-framed
                homes create ideal conditions for termites. Annual inspections
                are the single most important thing you can do to protect your
                property.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                After the inspection, we&apos;ll walk you through our findings,
                explain any risks, and provide honest recommendations — no
                pressure, no scare tactics.
              </p>

              <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-amber-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                  <div>
                    <p className="font-semibold text-amber-800 text-sm">Did you know?</p>
                    <p className="text-sm text-amber-700 mt-1">
                      Termites cause more damage to Australian homes than fires,
                      floods, and storms combined. 1 in 3 homes will be affected
                      by termites at some point.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Areas covered */}
            <div>
              <h3 className="font-heading font-bold text-brand-900 text-lg mb-6">Areas We Inspect</h3>
              <div className="space-y-4">
                {inspectionCovers.map((item) => (
                  <div key={item.area} className="bg-brand-50 rounded-xl p-4 border border-brand-100">
                    <h4 className="font-semibold text-brand-800 text-sm mb-1">{item.area}</h4>
                    <p className="text-sm text-gray-600">{item.details}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Warning signs */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <p className="section-label mb-3">Know the Signs</p>
              <h2 className="section-heading mb-6">Termite Warning Signs</h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                If you notice any of these signs, don&apos;t disturb the area —
                contact us immediately for an inspection. Disturbing termites
                can cause them to retreat and reappear in a different location,
                making treatment harder.
              </p>
              <ul className="space-y-3">
                {warningSignsList.map((sign) => (
                  <li key={sign} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                    <span className="text-sm text-gray-700">{sign}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="section-label mb-3">Before We Arrive</p>
              <h2 className="section-heading mb-6">How to Prepare</h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                A few simple steps before your inspection will help us be as
                thorough as possible and get you the best result.
              </p>
              <ul className="space-y-3">
                {prepTips.map((tip) => (
                  <li key={tip} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-accent-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm text-gray-700">{tip}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <Link href="/contact" className="btn-primary">
                  Book an Inspection
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-900 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="section-heading-light text-3xl mb-4">Protect Your Biggest Investment</h2>
          <p className="text-white/60 mb-8 max-w-lg mx-auto">
            Annual termite inspections are the best insurance for your home.
            Book yours today and get peace of mind.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="btn-primary text-base px-8 py-4">
              Book an Inspection
            </Link>
            <Link href="/termite-barriers" className="btn-outline-white text-base px-8 py-4">
              Learn About Barriers
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
