const pests = [
  {
    name: "Cockroaches",
    where: "Kitchens, bathrooms, behind appliances",
    risk: "Bacteria, food contamination, allergies",
    season: "Year-round (worse in summer)",
    emoji: "🪳",
  },
  {
    name: "Ants",
    where: "Kitchen benches, walls, garden beds",
    risk: "Food contamination, bites (fire ants)",
    season: "Spring & summer peak",
    emoji: "🐜",
  },
  {
    name: "Spiders",
    where: "Eaves, garden, sheds, under furniture",
    risk: "Venomous bites (redbacks, white-tails)",
    season: "Warmer months, after rain",
    emoji: "🕷️",
  },
  {
    name: "Termites",
    where: "Timber framing, subfloor, walls",
    risk: "Severe structural damage ($10K+)",
    season: "Year-round (swarm in spring)",
    emoji: "🐛",
  },
  {
    name: "Rats & Mice",
    where: "Roof void, walls, garages, gardens",
    risk: "Disease, wiring damage, fire risk",
    season: "Cooler months drive them inside",
    emoji: "🐀",
  },
  {
    name: "Fleas",
    where: "Carpets, pet bedding, yards",
    risk: "Painful bites, skin irritation",
    season: "Spring & summer",
    emoji: "🦟",
  },
];

export default function CommonPests() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="section-label mb-3">Pest Identification</p>
          <h2 className="section-heading">Common Noosa Pests</h2>
          <p className="mt-4 text-gray-500 max-w-xl mx-auto">
            Not sure what you&apos;re dealing with? Here are the most common
            pests we treat on the Sunshine Coast.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {pests.map((pest) => (
            <div key={pest.name} className="rounded-2xl border border-gray-100 p-5 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">{pest.emoji}</span>
                <h3 className="font-heading font-bold text-brand-900 text-lg">{pest.name}</h3>
              </div>
              <div className="space-y-2.5">
                <div className="flex items-start gap-2">
                  <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider w-16 flex-shrink-0 pt-0.5">Where</span>
                  <span className="text-sm text-gray-600">{pest.where}</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider w-16 flex-shrink-0 pt-0.5">Risk</span>
                  <span className="text-sm text-gray-600">{pest.risk}</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider w-16 flex-shrink-0 pt-0.5">Active</span>
                  <span className="text-sm text-gray-600">{pest.season}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="text-sm text-gray-400">
            Not sure what you&apos;re seeing? Call{" "}
            <a href="tel:+61408001239" className="text-brand-600 font-semibold hover:underline">0408 001 239</a>{" "}
            and describe it — we&apos;ll help you identify it.
          </p>
        </div>
      </div>
    </section>
  );
}
