const areas = [
  "Noosa Heads", "Noosaville", "Peregian Beach", "Peregian Springs",
  "Sunshine Beach", "Marcus Beach", "Tewantin", "Cooroy",
  "Pomona", "Eumundi", "Coolum Beach", "Castaways Beach",
  "Yaroomba", "Mount Coolum", "Maroochydore", "Mooloolaba",
  "Buderim", "Nambour", "Caloundra", "Noosa Hinterland",
];

export default function ServiceAreasSection() {
  return (
    <section id="areas" className="py-24 bg-cream-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-gold-500 text-sm font-semibold uppercase tracking-widest mb-3">
            Where We Work
          </p>
          <h2 className="font-heading text-4xl sm:text-5xl font-bold text-navy-900 mb-4">
            Caloundra to Noosa & Beyond
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            We&apos;ve been painting homes from one end of the Sunshine Coast to the
            other for over 40 years. If you&apos;re nearby, we&apos;ll come to you.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {areas.map((area) => (
            <span
              key={area}
              className="bg-white text-navy-800 text-sm font-medium px-4 py-2 rounded-full border border-gray-200 hover:border-gold-400 hover:text-gold-600 transition-colors cursor-default"
            >
              {area}
            </span>
          ))}
        </div>

        <div className="text-center">
          <p className="text-gray-500 text-base">
            Not sure if we cover your area?{" "}
            <a
              href="tel:0754481697"
              className="text-gold-600 font-semibold hover:text-gold-700 underline underline-offset-2"
            >
              Give us a call
            </a>{" "}
            — we&apos;re happy to travel for the right job.
          </p>
        </div>
      </div>
    </section>
  );
}
