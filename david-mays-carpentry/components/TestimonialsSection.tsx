import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah M.",
    location: "Buderim",
    text: "David built us an incredible deck off the back of our house. On time, on budget, and the quality is outstanding. Highly recommend to anyone on the Sunshine Coast.",
    project: "Timber Deck Build",
  },
  {
    name: "Mark & Jenny T.",
    location: "Maroochydore",
    text: "We used David for our bathroom renovation and couldn't be happier. He handled the tiling, waterproofing and all the carpentry. Honest bloke, fair prices.",
    project: "Bathroom Renovation",
  },
  {
    name: "Paul R.",
    location: "Coolum Beach",
    text: "Great handyman service. David's done multiple jobs for us now — doors, built-in shelving, patched up gyprock. Always shows up when he says he will. That counts for a lot.",
    project: "Multiple Handyman Jobs",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="section-padding bg-timber-50/50">
      <div className="container-tight">
        <div className="mb-14 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-timber-600">
            Testimonials
          </p>
          <h2 className="heading-lg">What Sunshine Coast Locals Say</h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <div key={t.name} className="card relative">
              <Quote className="absolute right-6 top-6 h-8 w-8 text-timber-100" />

              {/* Stars */}
              <div className="mb-4 flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-timber-500 text-timber-500"
                  />
                ))}
              </div>

              <p className="relative text-sm leading-relaxed text-charcoal-600">
                &ldquo;{t.text}&rdquo;
              </p>

              <div className="mt-6 border-t border-charcoal-100 pt-4">
                <p className="text-sm font-bold text-charcoal-900">{t.name}</p>
                <p className="text-xs text-charcoal-500">
                  {t.location} — {t.project}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
