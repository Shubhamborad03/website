const areas = [
  "Noosaville",
  "Noosa Heads",
  "Tewantin",
  "Sunshine Beach",
  "Sunrise Beach",
  "Peregian Beach",
  "Coolum Beach",
  "Cooroy",
  "Eumundi",
  "Pomona",
  "Doonan",
  "Tinbeerwah",
];

export default function ServiceAreasSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left — Map placeholder */}
          <div className="bg-brand-50 rounded-2xl p-8 aspect-square lg:aspect-auto lg:h-full min-h-[400px] flex items-center justify-center border border-brand-100">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-brand-100 flex items-center justify-center">
                <svg className="w-8 h-8 text-brand-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="font-heading font-bold text-brand-900 text-xl mb-2">
                Sunshine Coast Wide
              </h3>
              <p className="text-sm text-gray-500 max-w-xs mx-auto">
                Proudly serving Noosaville and surrounding Sunshine Coast
                suburbs with reliable, licensed pest control.
              </p>
            </div>
          </div>

          {/* Right — Areas list */}
          <div>
            <p className="section-label mb-3">Service Areas</p>
            <h2 className="section-heading mb-4">
              Covering the Sunshine Coast
            </h2>
            <p className="text-gray-500 mb-8 leading-relaxed">
              Based in Noosaville, we service the entire Noosa region and
              surrounds. If your suburb isn&apos;t listed, give us a call —
              chances are we cover your area too.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {areas.map((area) => (
                <div
                  key={area}
                  className="flex items-center gap-2 bg-brand-50 rounded-xl px-4 py-3 border border-brand-100"
                >
                  <svg className="w-4 h-4 text-brand-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm font-medium text-brand-800">{area}</span>
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm text-gray-400">
              Not listed? Call <a href="tel:+61408001239" className="text-brand-600 hover:underline font-medium">0408 001 239</a> to check availability.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
