"use client";
import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 40, suffix: "+", label: "Years in Business" },
  { value: 5000, suffix: "+", label: "Homes Painted" },
  { value: 5.0, suffix: "★", label: "Star Rating", decimals: 1 },
  { value: 100, suffix: "%", label: "Free Colour Consult" },
];

function Counter({
  value,
  suffix,
  decimals = 0,
  active,
}: {
  value: number;
  suffix: string;
  decimals?: number;
  active: boolean;
}) {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!active) return;
    const duration = 1800;
    const start = performance.now();
    const raf = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      setDisplay(ease * value);
      if (progress < 1) requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);
  }, [active, value]);

  return (
    <span>
      {decimals > 0
        ? display.toFixed(decimals)
        : Math.floor(display).toLocaleString()}
      {suffix}
    </span>
  );
}

export default function TrustBar() {
  const [active, setActive] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setActive(true); observer.disconnect(); } },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="bg-navy-800 py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-heading text-4xl sm:text-5xl font-bold text-gold-400 mb-2">
                <Counter
                  value={stat.value}
                  suffix={stat.suffix}
                  decimals={stat.decimals}
                  active={active}
                />
              </div>
              <p className="text-sm text-white/60 font-medium uppercase tracking-wide">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Recommended by bar */}
        <div className="mt-12 pt-10 border-t border-white/10">
          <p className="text-center text-xs text-white/40 uppercase tracking-widest mb-6">
            Trusted & Recommended By
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-12">
            {[
              "L.J. Hooker Peregian",
              "Peregian Hardware",
              "Paint City Coolum",
              "Thousands of Sunshine Coast Homeowners",
            ].map((name) => (
              <span
                key={name}
                className="text-white/50 text-sm font-medium hover:text-white/80 transition-colors"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
