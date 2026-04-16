"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 10,  suffix: "+", label: "Years in Business",    icon: "🏆" },
  { value: 500, suffix: "+", label: "Jobs Completed",       icon: "✅" },
  { value: 4.8, suffix: "★", label: "Google Rating",        icon: "⭐", decimal: true },
  { value: 54,  suffix: "",  label: "5-Star Google Reviews", icon: "💬" },
];

function useCountUp(target: number, duration: number, start: boolean, decimal?: boolean) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    const startTime = performance.now();
    const step = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(decimal ? Math.round(target * eased * 10) / 10 : Math.floor(target * eased));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [start, target, duration, decimal]);
  return count;
}

function StatItem({ stat, active }: { stat: typeof stats[0]; active: boolean }) {
  const count = useCountUp(stat.value, 2000, active, stat.decimal);
  return (
    <div className="text-center">
      <div className="text-4xl mb-2">{stat.icon}</div>
      <div className="font-heading text-5xl lg:text-6xl font-extrabold text-white mb-2 tabular-nums">
        {stat.decimal ? count.toFixed(1) : count}{stat.suffix}
      </div>
      <p className="text-white/60 text-sm font-medium uppercase tracking-wider">{stat.label}</p>
    </div>
  );
}

export default function StatsSection() {
  const ref = useRef<HTMLElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setActive(true); obs.disconnect(); } },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-20 bg-brand-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 circuit-bg opacity-30" />
      <div className="absolute -left-20 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-brand-700/20 blur-3xl" />
      <div className="absolute -right-20 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-brand-600/10 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-brand-300 text-sm font-semibold uppercase tracking-widest mb-3">By the Numbers</p>
          <h2 className="section-heading-light">
            A Decade of Trusted Service
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((s) => (
            <StatItem key={s.label} stat={s} active={active} />
          ))}
        </div>

        {/* Service area strip */}
        <div className="mt-14 border-t border-white/10 pt-10 text-center">
          <p className="text-white/40 text-xs uppercase tracking-widest mb-4">Service Area</p>
          <div className="flex flex-wrap justify-center gap-3">
            {["Gympie", "Rainbow Beach", "Widgee", "Kilkivan", "Goomborian", "Imbil", "Tin Can Bay", "Cooloola Cove"].map((area) => (
              <span key={area} className="bg-white/5 border border-white/10 text-white/60 text-sm px-4 py-1.5 rounded-full">
                {area}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
