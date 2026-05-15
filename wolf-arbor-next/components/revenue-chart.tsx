"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { Reveal } from "@/components/ui/reveal";

// realistic AU tree-work year-1 trajectory.
// avg job value ~$1.5–1.8k. ~40% lead→close conversion.
type Row = {
  m: string;
  leads: number;
  jobs: number;
  revenue: number; // dollars
};

const months: Row[] = [
  { m: "M1", leads: 0, jobs: 0, revenue: 0 },
  { m: "M2", leads: 5, jobs: 2, revenue: 3000 },
  { m: "M3", leads: 12, jobs: 5, revenue: 8000 },
  { m: "M4", leads: 22, jobs: 9, revenue: 15000 },
  { m: "M5", leads: 30, jobs: 12, revenue: 20000 },
  { m: "M6", leads: 38, jobs: 15, revenue: 25000 },
  { m: "M7", leads: 44, jobs: 17, revenue: 29000 },
  { m: "M8", leads: 50, jobs: 20, revenue: 33000 },
  { m: "M9", leads: 55, jobs: 22, revenue: 37000 },
  { m: "M10", leads: 60, jobs: 24, revenue: 41000 },
  { m: "M11", leads: 65, jobs: 26, revenue: 45000 },
  { m: "M12", leads: 70, jobs: 28, revenue: 50000 },
];

const MAX_REV = 50000;

const totals = months.reduce(
  (a, m) => ({
    leads: a.leads + m.leads,
    jobs: a.jobs + m.jobs,
    revenue: a.revenue + m.revenue,
  }),
  { leads: 0, jobs: 0, revenue: 0 },
);

function fmt(n: number) {
  if (n >= 1000) return "$" + (n / 1000).toFixed(0) + "k";
  return "$" + n;
}

export function RevenueChart() {
  const chartRef = useRef<HTMLDivElement>(null);
  const inView = useInView(chartRef, {
    once: true,
    margin: "0px 0px -15% 0px",
  });
  const [hover, setHover] = useState<number | null>(11); // default = M12

  const active = hover !== null ? months[hover] : months[11];

  return (
    <section id="math" className="relative px-6 py-24 md:py-32 bg-sandSoft">
      <div className="max-w-6xl mx-auto">
        <Reveal className="max-w-2xl mb-12">
          <div className="text-[11px] font-mono uppercase tracking-[0.22em] text-forest mb-4">
            04 · The maths · projection
          </div>
          <h2 className="text-balance text-3xl md:text-5xl font-semibold tracking-[-0.02em] leading-[1.05] text-ink">
            What a year with us could look like.
          </h2>
          <p className="text-muted text-[16px] md:text-[17px] leading-relaxed mt-5">
            Estimate based on the ten levers above and AU tree-work
            benchmarks. Real numbers will track to your service area, pricing,
            and capacity. Hover any month to see the leads in, jobs closed,
            and revenue for that month.
          </p>
        </Reveal>

        <Reveal>
          <div className="bg-bg rounded-3xl border border-sand p-5 md:p-10 shadow-card">
            {/* Active-month panel */}
            <div className="flex flex-wrap items-end justify-between gap-4 mb-7">
              <div>
                <div className="text-[11px] font-mono uppercase tracking-[0.2em] text-muted mb-2">
                  Month{" "}
                  <span className="text-forest font-semibold">
                    {active.m}
                  </span>
                </div>
                <div className="flex items-baseline gap-8">
                  <div>
                    <div className="text-[10px] font-mono uppercase tracking-[0.18em] text-muted">
                      Leads in
                    </div>
                    <div className="text-2xl md:text-3xl font-semibold text-ink counter leading-tight">
                      {active.leads}
                    </div>
                  </div>
                  <div>
                    <div className="text-[10px] font-mono uppercase tracking-[0.18em] text-muted">
                      Jobs closed
                    </div>
                    <div className="text-2xl md:text-3xl font-semibold text-forest counter leading-tight">
                      {active.jobs}
                    </div>
                  </div>
                  <div>
                    <div className="text-[10px] font-mono uppercase tracking-[0.18em] text-muted">
                      Revenue
                    </div>
                    <div className="text-2xl md:text-3xl font-semibold text-amber counter leading-tight">
                      {fmt(active.revenue)}
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-[11px] font-mono uppercase tracking-[0.2em] text-muted">
                Hover any bar
              </div>
            </div>

            {/* Chart */}
            <div ref={chartRef} className="relative">
              <div className="flex">
                {/* Y-axis */}
                <div className="flex flex-col justify-between pr-3 text-right h-64 md:h-80 text-[11px] font-mono text-muted shrink-0">
                  <div>$50k</div>
                  <div>$40k</div>
                  <div>$30k</div>
                  <div>$20k</div>
                  <div>$10k</div>
                  <div>$0</div>
                </div>

                <div className="relative flex-1 h-64 md:h-80 border-l border-b border-sand">
                  {/* Gridlines */}
                  {[0, 20, 40, 60, 80].map((p) => (
                    <div
                      key={p}
                      className="absolute left-0 right-0 border-t border-sand/60 pointer-events-none"
                      style={{ top: `${p}%` }}
                    />
                  ))}

                  {/* Bars */}
                  <div className="absolute inset-0 flex items-end justify-around px-1.5 md:px-2.5">
                    {months.map((d, i) => {
                      const revPct = (d.revenue / MAX_REV) * 100;
                      const isActive = hover === i;
                      return (
                        <button
                          key={d.m}
                          type="button"
                          onMouseEnter={() => setHover(i)}
                          onFocus={() => setHover(i)}
                          onMouseLeave={() => setHover(11)}
                          onBlur={() => setHover(11)}
                          aria-label={`${d.m}: ${d.leads} leads, ${d.jobs} jobs, ${fmt(d.revenue)} revenue`}
                          className="relative h-full flex items-end justify-center group"
                          style={{ width: `${100 / months.length}%` }}
                        >
                          <motion.div
                            initial={{ height: 0 }}
                            animate={inView ? { height: `${revPct}%` } : {}}
                            transition={{
                              duration: 0.9,
                              delay: i * 0.05,
                              ease: [0.22, 1, 0.36, 1],
                            }}
                            className={
                              "w-[60%] md:w-[55%] rounded-t-md transition-colors duration-200 " +
                              (isActive ? "bg-amber" : "bg-forest")
                            }
                            style={{ minWidth: 6, minHeight: d.revenue > 0 ? 4 : 0 }}
                          />

                          {/* Tooltip */}
                          <AnimatePresence>
                            {isActive && d.revenue > 0 && (
                              <motion.div
                                initial={{ opacity: 0, y: 6 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 6 }}
                                transition={{ duration: 0.18 }}
                                className="absolute -top-[88px] left-1/2 -translate-x-1/2 bg-ink text-bg rounded-xl px-3 py-2 shadow-card whitespace-nowrap pointer-events-none z-10"
                                style={{ minWidth: 130 }}
                              >
                                <div className="text-[10px] font-mono uppercase tracking-[0.18em] text-bg/50 mb-1">
                                  {d.m}
                                </div>
                                <div className="text-[11px] flex justify-between gap-3">
                                  <span className="text-bg/70">Leads</span>
                                  <span className="font-semibold">{d.leads}</span>
                                </div>
                                <div className="text-[11px] flex justify-between gap-3">
                                  <span className="text-bg/70">Jobs</span>
                                  <span className="font-semibold">{d.jobs}</span>
                                </div>
                                <div className="text-[11px] flex justify-between gap-3 pt-1 mt-1 border-t border-bg/15">
                                  <span className="text-bg/70">Revenue</span>
                                  <span className="font-semibold text-amber">
                                    {fmt(d.revenue)}
                                  </span>
                                </div>
                                {/* Arrow */}
                                <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-ink rotate-45" />
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* X-axis */}
              <div className="flex pl-12 mt-2">
                <div className="flex-1 flex justify-around px-1.5 md:px-2.5">
                  {months.map((d, i) => (
                    <div
                      key={d.m}
                      className={
                        "text-[10px] md:text-[11px] font-mono uppercase tracking-[0.15em] text-center transition-colors " +
                        (hover === i ? "text-amber font-semibold" : "text-muted")
                      }
                      style={{ width: `${100 / months.length}%` }}
                    >
                      {d.m}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Year-1 totals strip */}
            <div className="grid grid-cols-3 gap-3 mt-10 pt-8 border-t border-sand">
              <div>
                <div className="text-[11px] font-mono uppercase tracking-[0.18em] text-muted mb-2">
                  Year-1 leads
                </div>
                <div className="text-2xl md:text-3xl font-semibold text-ink counter">
                  {totals.leads}
                </div>
                <div className="text-[12px] text-muted mt-1">
                  inbound enquiries
                </div>
              </div>
              <div>
                <div className="text-[11px] font-mono uppercase tracking-[0.18em] text-muted mb-2">
                  Year-1 jobs
                </div>
                <div className="text-2xl md:text-3xl font-semibold text-forest counter">
                  {totals.jobs}
                </div>
                <div className="text-[12px] text-muted mt-1">
                  paying customers
                </div>
              </div>
              <div>
                <div className="text-[11px] font-mono uppercase tracking-[0.18em] text-muted mb-2">
                  Year-1 revenue
                </div>
                <div className="text-2xl md:text-3xl font-semibold text-amber counter">
                  {fmt(totals.revenue)}
                </div>
                <div className="text-[12px] text-muted mt-1">
                  exiting at ${(months[11].revenue / 1000).toFixed(0)}k/mo
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
