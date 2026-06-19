"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Search, TrendingUp, Workflow, Bot, Lock, Star } from "lucide-react";

const ease = [0.16, 1, 0.3, 1] as const;

/* Web design as a service. One large browser mockup performs a single, continuous
   transformation: a tired, low-converting trade site morphs into a clean modern site
   that ranks, converts, runs on autopilot and is wired to the Wolf AI agents.
   Nothing is ever a static frame, the whole thing loops. */

/* ----------------------------------------------------------------- url bar */
function UrlBar({ good }: { good: boolean }) {
  return (
    <div className="flex items-center gap-2 px-3.5 py-3 border-b border-line bg-[linear-gradient(var(--paper),var(--paper-2))]">
      <div className="flex gap-1.5">
        <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
      </div>
      <div
        className={
          "ml-2 flex-1 flex items-center gap-1.5 rounded-md px-2.5 py-1.5 text-[10.5px] font-mono transition-colors duration-700 " +
          (good ? "bg-white text-ink-2 shadow-[inset_0_0_0_1px_var(--line)]" : "bg-paper-2 text-ink-3")
        }
      >
        <motion.span
          animate={{ color: good ? "var(--blue)" : "var(--ink-3)" }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-1"
        >
          {good && <Lock size={9} strokeWidth={2.6} />}
          {good ? "https" : "http"}
        </motion.span>
        <span className="relative">
          <AnimatePresence mode="wait">
            <motion.span
              key={good ? "g" : "b"}
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.45, ease }}
              className="inline-block"
            >
              ://{good ? "apexroofing.com.au" : "apexroofing.net/home.html"}
            </motion.span>
          </AnimatePresence>
        </span>
      </div>
    </div>
  );
}

/* ----------------------------------------------------------------- before */
function BeforeSite() {
  return (
    <div className="absolute inset-0 bg-[#eef0ee] [font-family:Arial,Helvetica,sans-serif] text-[#3a3a3a]">
      {/* utility top bar */}
      <div className="flex items-center justify-between px-3 py-1 text-[6.5px] text-white/90" style={{ background: "#243443" }}>
        <span>(07) 5447 1234 &middot; info@apexroofing.com.au</span>
        <span>Mon&ndash;Fri 8am&ndash;5pm</span>
      </div>
      {/* header + cramped nav */}
      <div className="flex items-center justify-between px-3 py-2 bg-white border-b-2" style={{ borderColor: "#1f6f3f" }}>
        <span className="text-[13px] font-extrabold tracking-tight" style={{ color: "#1f6f3f" }}>
          APEX<span style={{ color: "#c9a227" }}>ROOFING</span>
        </span>
        <div className="flex gap-1.5 text-[7px] font-bold uppercase text-[#555]">
          {["Home", "About Us", "Services", "Gallery", "Testimonials", "Contact"].map((t) => (
            <span key={t}>{t}</span>
          ))}
        </div>
      </div>
      {/* dull stock hero with low-contrast overlay text */}
      <div
        className="relative mx-3 mt-2.5 h-[92px] rounded-[2px] overflow-hidden border border-[#c9ccc9]"
        style={{ background: "linear-gradient(120deg,#737d86,#9aa2aa 60%,#b6bcc2)" }}
      >
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-3">
          <div className="text-[12px] font-bold text-white/95 leading-tight [text-shadow:0_1px_2px_rgba(0,0,0,.4)]">
            Quality Roofing Services
            <br />
            You Can Trust
          </div>
          <div className="mt-1.5 text-[8px] font-bold text-white px-2.5 py-1 rounded-[2px]" style={{ background: "#1f6f3f" }}>
            Read More &raquo;
          </div>
        </div>
      </div>
      {/* cramped services row */}
      <div className="grid grid-cols-3 gap-1.5 px-3 mt-2.5">
        {["Roof Repairs", "Re-Roofing", "Guttering"].map((s) => (
          <div key={s} className="rounded-[2px] border border-[#cfd2cf] bg-white px-1.5 py-1.5">
            <div className="text-[7.5px] font-bold text-[#1f6f3f] mb-1">{s}</div>
            <div className="space-y-[3px]">
              <div className="h-1 w-full bg-[#dcdedb] rounded-[1px]" />
              <div className="h-1 w-5/6 bg-[#dcdedb] rounded-[1px]" />
              <div className="h-1 w-2/3 bg-[#dcdedb] rounded-[1px]" />
            </div>
          </div>
        ))}
      </div>
      {/* wall of text + clashing offer badge */}
      <div className="flex gap-2 px-3 mt-2.5">
        <div className="flex-1 space-y-1">
          {["w-full", "w-full", "w-11/12", "w-full", "w-4/5"].map((w, i) => (
            <div key={i} className={"h-1 rounded-[1px] bg-[#d3d6d2] " + w} />
          ))}
        </div>
        <div
          className="w-[76px] shrink-0 grid place-items-center text-center rounded-[2px] text-white"
          style={{ background: "radial-gradient(circle,#e0a82e,#c9952b)" }}
        >
          <div className="py-2 leading-none">
            <div className="text-[13px] font-extrabold [text-shadow:0_1px_0_rgba(0,0,0,.25)]">10%</div>
            <div className="text-[6px] font-bold tracking-wide">SPECIAL OFFER</div>
          </div>
        </div>
      </div>
      {/* dated footer */}
      <div className="absolute bottom-0 inset-x-0 px-3 py-1.5 text-[6px] text-[#8a8d89] border-t border-[#d3d6d2] bg-[#e6e8e5]">
        &copy; 2014 Apex Roofing &middot; ABN 00 000 000 000 &middot; Website by WebStudio
      </div>
    </div>
  );
}

/* ----------------------------------------------------------------- after */
function AfterSite() {
  return (
    <div className="absolute inset-0 bg-white overflow-hidden">
      {/* nav */}
      <div className="flex items-center justify-between px-5 pt-4 pb-3">
        <span className="font-display text-[12px] font-bold text-ink tracking-[-.01em]">
          Apex <span className="text-blue">Roofing</span>
        </span>
        <div className="flex items-center gap-3">
          {["Work", "Reviews"].map((t) => (
            <span key={t} className="text-[9px] font-medium text-ink-2">{t}</span>
          ))}
          <span className="text-[8.5px] font-semibold text-white bg-blue rounded-full px-2.5 py-1 shadow-[0_4px_10px_-3px_rgba(59,134,255,.6)]">
            Get a quote
          </span>
        </div>
      </div>
      {/* hero */}
      <div className="relative px-5 pt-2 pb-4">
        <div
          className="pointer-events-none absolute -top-6 -right-6 w-44 h-44"
          style={{ background: "radial-gradient(circle at 60% 40%, rgba(59,134,255,.16), transparent 70%)" }}
        />
        <div className="relative">
          <span className="inline-flex items-center gap-1 text-[7.5px] font-semibold uppercase tracking-[.12em] text-blue bg-blue-soft rounded-full px-2 py-0.5 mb-2">
            <span className="w-1 h-1 rounded-full bg-blue" /> Noosa &middot; Sunshine Coast
          </span>
          <div className="font-display text-[19px] font-bold text-ink leading-[1.04] tracking-[-.02em]">
            Roofs done right,<br />
            <span className="text-blue">booked online.</span>
          </div>
          <div className="mt-2.5 flex items-center gap-2">
            <span className="text-[9px] font-semibold text-white bg-blue rounded-lg px-3 py-1.5 shadow-[0_6px_14px_-5px_rgba(59,134,255,.7)]">
              Book a free check
            </span>
            <span className="text-[9px] font-semibold text-ink border border-line rounded-lg px-3 py-1.5">
              See our work
            </span>
          </div>
        </div>
      </div>
      {/* trust row */}
      <div className="px-5 mb-3.5 grid grid-cols-3 gap-2">
        {[
          { v: "4.9", k: "Google rating" },
          { v: "250+", k: "Roofs done" },
          { v: "Licensed", k: "& insured" },
        ].map((t) => (
          <div key={t.k} className="rounded-lg bg-paper-2 px-2 py-1.5 text-center">
            <div className="font-display text-[11px] font-bold text-ink leading-none">{t.v}</div>
            <div className="text-[6.5px] text-ink-3 mt-0.5">{t.k}</div>
          </div>
        ))}
      </div>
      {/* work gallery */}
      <div className="px-5 mb-3">
        <div className="flex items-center justify-between mb-1.5">
          <span className="text-[7.5px] font-semibold uppercase tracking-[.1em] text-ink-3">Recent work</span>
          <span className="text-[7.5px] font-semibold text-blue">View all &rarr;</span>
        </div>
        <div className="grid grid-cols-4 gap-1.5">
          {[
            "linear-gradient(150deg,#5b6675,#8a96a6 55%,#c4ccd6)",
            "linear-gradient(150deg,#7c5a3a,#a8794f 55%,#d8b78a)",
            "linear-gradient(150deg,#2f4a6b,#3f6797 55%,#86a8cf)",
            "linear-gradient(150deg,#475160,#6b7686 55%,#aab3c0)",
          ].map((g, i) => (
            <div
              key={i}
              className="relative aspect-[4/3] rounded-lg border border-line overflow-hidden"
              style={{ background: g }}
            >
              <span
                className="absolute inset-x-0 bottom-0 h-1/2"
                style={{ background: "linear-gradient(transparent,rgba(11,13,18,.4))" }}
              />
            </div>
          ))}
        </div>
      </div>
      {/* review */}
      <div className="px-5">
        <div className="flex items-start gap-2.5 rounded-xl bg-paper-2 px-3 py-2.5">
          <span className="grid place-items-center w-6 h-6 rounded-full bg-blue/15 text-blue shrink-0 font-display text-[9px] font-bold">
            DM
          </span>
          <div className="min-w-0">
            <div className="flex items-center gap-1 text-blue mb-0.5">
              {[0, 1, 2, 3, 4].map((s) => (
                <Star key={s} size={7} strokeWidth={0} fill="currentColor" />
              ))}
            </div>
            <p className="text-[8.5px] text-ink-2 leading-snug">
              &ldquo;Booked 3 jobs the first week the new site went live. The quote button does the work for me.&rdquo;
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ----------------------------------------------------------------- metric strip */
function Metric({ good }: { good: boolean }) {
  return (
    <div className="grid grid-cols-2 divide-x divide-[var(--line)] border-t border-line">
      {[
        { label: "Bounce rate", bad: "82%", good: "24%" },
        { label: "Booked jobs", bad: "0.4%", good: "6.1%" },
      ].map((m) => (
        <div key={m.label} className="px-4 py-3">
          <div className="text-[10px] text-ink-3 mb-1">{m.label}</div>
          <div className="relative h-[22px] overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={good ? "g" : "b"}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -14 }}
                transition={{ duration: 0.5, ease }}
                className="absolute inset-0 flex items-center gap-1.5"
              >
                <span className={"font-display text-[18px] tabular leading-none " + (good ? "text-blue" : "text-ink-3")}>
                  {good ? m.good : m.bad}
                </span>
                {good && (
                  <span className="text-[10px] font-semibold text-blue/80 leading-none">
                    {m.label === "Bounce rate" ? "↓" : "↑"}
                  </span>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      ))}
    </div>
  );
}

/* ----------------------------------------------------------------- wins */
const WINS = [
  { icon: Search, t: "SEO approved", d: "Found on Google, ranks for your trade and your town." },
  { icon: TrendingUp, t: "Built to convert", d: "Every section earns its place. Visitors turn into booked jobs." },
  { icon: Workflow, t: "Autopilot backend", d: "Forms, follow-ups and bookings run themselves. No fiddling." },
  { icon: Bot, t: "Wired to your agents", d: "Every enquiry feeds your Wolf AI agents the moment it lands." },
];

export default function WebDesignShowcase() {
  const [good, setGood] = useState(false);
  useEffect(() => {
    const t = setInterval(() => setGood((g) => !g), 4200);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="web" className="relative py-28 lg:py-40 overflow-hidden scroll-mt-20">
      {/* soft ambient wash behind the whole section */}
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{ background: "radial-gradient(ellipse 70% 60% at 78% 42%, rgba(59,134,255,.07), transparent 65%)" }}
      />
      <div className="wrap grid lg:grid-cols-[0.86fr_1.14fr] gap-16 lg:gap-20 items-center">
        {/* ------------------------------------------------ copy + wins */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease }}
          >
            <span className="label block mb-5">Web design</span>
            <h2 className="font-display text-ink text-[clamp(32px,4.4vw,58px)] tracking-[-.02em] leading-[1.02]">
              A site that <span className="text-blue">sells</span>,
              <br />
              not just sits there.
            </h2>
            <p className="mt-5 text-ink-2 text-[17px] leading-relaxed max-w-[44ch]">
              Most trade sites are slow, dated and invisible on Google. We rebuild yours into something that
              ranks, converts, runs on autopilot, and feeds your AI agents directly.
            </p>
          </motion.div>

          <div className="mt-9 flex flex-col gap-3">
            {WINS.map((w, i) => (
              <motion.div
                key={w.t}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, ease, delay: i * 0.08 }}
                className="group flex items-start gap-4 py-1.5"
              >
                <span className="grid place-items-center w-10 h-10 rounded-xl bg-blue-soft text-blue shrink-0 transition-colors group-hover:bg-blue group-hover:text-white">
                  <w.icon size={18} strokeWidth={1.9} />
                </span>
                <div className="pt-0.5">
                  <div className="text-[15px] font-semibold text-ink">{w.t}</div>
                  <div className="text-[13.5px] text-ink-2 leading-snug mt-0.5">{w.d}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ------------------------------------------------ before to after browser */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease }}
          className="relative justify-self-center w-full max-w-[560px]"
        >
          {/* state pills */}
          <div className="flex items-center justify-center gap-2.5 mb-5">
            <span
              className={
                "flex items-center gap-1.5 text-[12px] font-semibold rounded-full px-3 py-1 transition-all duration-500 " +
                (!good ? "bg-ink/[.06] text-ink" : "text-ink-3")
              }
            >
              <span className={"w-1.5 h-1.5 rounded-full transition-colors " + (!good ? "bg-ink-3" : "bg-ink/20")} />
              Before
            </span>
            <span className="text-ink-3 text-[13px]">&rarr;</span>
            <span
              className={
                "flex items-center gap-1.5 text-[12px] font-semibold rounded-full px-3 py-1 transition-all duration-500 " +
                (good ? "bg-blue-soft text-blue" : "text-ink-3")
              }
            >
              <span className={"w-1.5 h-1.5 rounded-full transition-colors " + (good ? "bg-blue" : "bg-ink/20")} />
              After
            </span>
          </div>

          <div className="rounded-[22px] bg-white border border-line overflow-hidden shadow-[0_2px_4px_rgba(11,13,18,.04),0_30px_60px_-26px_rgba(11,13,18,.3),0_70px_120px_-60px_rgba(59,134,255,.4)]">
            <UrlBar good={good} />
            <div className="relative h-[392px] overflow-hidden">
              <AnimatePresence>
                {!good && (
                  <motion.div
                    key="before"
                    initial={{ opacity: 1 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0, filter: "blur(6px)", scale: 1.015 }}
                    transition={{ duration: 0.6, ease }}
                    className="absolute inset-0"
                  >
                    <BeforeSite />
                  </motion.div>
                )}
              </AnimatePresence>
              <AnimatePresence>
                {good && (
                  <motion.div
                    key="after"
                    initial={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }}
                    animate={{ opacity: 1, clipPath: "inset(0 0 0% 0)" }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.85, ease }}
                    className="absolute inset-0"
                  >
                    <AfterSite />
                  </motion.div>
                )}
              </AnimatePresence>
              {/* sweep line that rides the reveal */}
              <AnimatePresence>
                {good && (
                  <motion.span
                    key="sweep"
                    initial={{ top: "0%", opacity: 0.9 }}
                    animate={{ top: "100%", opacity: 0 }}
                    transition={{ duration: 0.85, ease }}
                    className="pointer-events-none absolute left-0 right-0 h-px bg-[linear-gradient(90deg,transparent,var(--blue),transparent)] shadow-[0_0_12px_2px_rgba(59,134,255,.6)]"
                  />
                )}
              </AnimatePresence>
            </div>
            <Metric good={good} />
          </div>

          {/* caption under card */}
          <p className="mt-4 text-center text-[12.5px] text-ink-3">
            Same business. Same offer.{" "}
            <span className="text-ink-2 font-medium">A site built to do the selling.</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
