"use client";
import { useRef, useEffect } from "react";

const reviews = [
  {
    name: "Margaret H.",
    suburb: "Peregian Beach",
    rating: 5,
    text: "Wonderful people and great workmanship. Thank you Tracy and Shannon for your professional painting of our home, inside and out. Absolutely thrilled with the result.",
  },
  {
    name: "David & Trish",
    suburb: "Sunshine Beach",
    rating: 5,
    text: "Excellent service and really nice people. Our Queenslander looks absolutely stunning. They took such care with the heritage details — couldn't be happier.",
  },
  {
    name: "Steve K.",
    suburb: "Noosa Heads",
    rating: 5,
    text: "Used Tracy Thew Painters for our new build. Professional from quote to completion. The finish quality is exceptional and they finished ahead of schedule.",
  },
  {
    name: "Lisa M.",
    suburb: "Coolum Beach",
    rating: 5,
    text: "Brilliant colour consultation service — Shannon helped us pick the perfect palette for our coastal home. The painting was immaculate. Highly recommend.",
  },
  {
    name: "Rob & Carol",
    suburb: "Tewantin",
    rating: 5,
    text: "Third time using Tracy Thew Painters and they never disappoint. Reliable, tidy, and the quick-dry system is amazing. Back in our rooms the same day!",
  },
  {
    name: "Janet W.",
    suburb: "Peregian Springs",
    rating: 5,
    text: "The whole experience was seamless. Showed up on time, cleaned up perfectly, and the interior looks brand new. Family business with real integrity.",
  },
  {
    name: "Michael P.",
    suburb: "Noosaville",
    rating: 5,
    text: "Our commercial space looks completely transformed. On budget, on schedule, minimal disruption. Tracy Thew Painters are our go-to for all future painting work.",
  },
  {
    name: "Amanda T.",
    suburb: "Cooroy",
    rating: 5,
    text: "Recommended by our real estate agent and they lived up to every bit of praise. Exterior repaint before selling — the house looked 20 years younger.",
  },
];

const doubled = [...reviews, ...reviews];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-4 h-4 text-gold-400" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function ReviewsSection() {
  const trackRef = useRef<HTMLDivElement>(null);
  const posRef = useRef(0);
  const pausedRef = useRef(false);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const tick = () => {
      if (!pausedRef.current) {
        posRef.current += 0.4;
        const half = track.scrollWidth / 2;
        if (posRef.current >= half) posRef.current = 0;
        track.style.transform = `translateX(-${posRef.current}px)`;
      }
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  return (
    <section id="reviews" className="py-24 bg-navy-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="text-center">
          <p className="text-gold-400 text-sm font-semibold uppercase tracking-widest mb-3">
            What Our Customers Say
          </p>
          <h2 className="font-heading text-4xl sm:text-5xl font-bold text-white mb-4">
            Thousands of Happy Homes
          </h2>
          <div className="flex items-center justify-center gap-2 text-gold-400">
            <StarRating count={5} />
            <span className="text-white/60 text-sm ml-1">
              5.0 · Rated by Sunshine Coast homeowners
            </span>
          </div>
        </div>
      </div>

      {/* Scrolling track */}
      <div
        className="fade-edges overflow-hidden"
        onMouseEnter={() => (pausedRef.current = true)}
        onMouseLeave={() => (pausedRef.current = false)}
      >
        <div ref={trackRef} className="flex gap-5 w-max py-2">
          {doubled.map((review, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-72 sm:w-80 bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors"
            >
              <StarRating count={review.rating} />
              <p className="text-white/80 text-sm leading-relaxed mt-3 mb-5">
                &ldquo;{review.text}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-gold-500/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-gold-400 text-sm font-bold">
                    {review.name[0]}
                  </span>
                </div>
                <div>
                  <p className="text-white text-sm font-semibold">{review.name}</p>
                  <p className="text-white/40 text-xs">{review.suburb}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
