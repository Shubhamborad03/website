"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

const BOOKING_URL =
  "https://calendar.google.com/calendar/appointments/schedules";

function useScrollFadeIn() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    const el = ref.current;
    if (el) {
      const children = el.querySelectorAll(".fade-section");
      children.forEach((child) => observer.observe(child));
    }

    return () => observer.disconnect();
  }, []);

  return ref;
}

export default function OptionB() {
  const containerRef = useScrollFadeIn();

  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-[#050505] text-white selection:bg-white/10"
    >
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#050505]/70 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-8 py-5 flex items-center justify-between">
          <Image
            src="/wolf-partners-logo.png"
            alt="Wolf Partners"
            width={120}
            height={40}
            className="h-7 w-auto opacity-80"
          />
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs tracking-[0.15em] uppercase text-zinc-400 hover:text-white transition-colors duration-300"
          >
            Start a conversation &rarr;
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="fade-section min-h-screen flex flex-col justify-end px-8 pb-24 pt-20">
        <div className="max-w-7xl mx-auto w-full">
          <p className="text-zinc-600 text-xs tracking-[0.3em] uppercase mb-8">
            Investor &amp; Growth Strategist
          </p>
          <h1
            className="text-[clamp(2.5rem,8vw,7rem)] font-bold leading-[0.9] tracking-[-0.03em] mb-10"
            style={{
              fontFamily: "var(--font-space-grotesk), sans-serif",
            }}
          >
            I scale
            <br />
            businesses that
            <br />
            already work<span className="text-zinc-700">.</span>
          </h1>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-8">
            <p className="text-zinc-500 text-base tracking-[0.15em] uppercase">
              Systems &middot; Clients &middot; Revenue &middot; Capital
            </p>
            <a
              href="#contact"
              className="text-white text-sm border-b border-zinc-700 pb-1 hover:border-white transition-colors duration-300 self-start sm:self-auto"
            >
              Start a conversation
            </a>
          </div>
        </div>
      </section>

      {/* What I Do */}
      <section className="fade-section py-40 px-8 border-t border-white/[0.03]">
        <div className="max-w-7xl mx-auto">
          <p className="text-zinc-700 text-xs tracking-[0.3em] uppercase mb-20">
            What I Do
          </p>

          <div className="grid md:grid-cols-3 gap-0">
            {[
              {
                title: "Scale & Optimise",
                desc: "Fix systems, client flow, retention, and pricing to unlock revenue that's already there.",
              },
              {
                title: "Strategic Growth",
                desc: "Positioning, partnerships, and commercial strategy that moves the needle.",
              },
              {
                title: "Capital & Deals",
                desc: "Investing, structuring, and connecting capital where there's real alignment.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="py-10 md:py-0 md:px-10 first:md:pl-0 last:md:pr-0 border-b md:border-b-0 md:border-l border-white/[0.04] first:md:border-l-0 first:border-t-0"
              >
                <h3
                  className="text-2xl font-semibold mb-4 tracking-tight"
                  style={{
                    fontFamily: "var(--font-space-grotesk), sans-serif",
                  }}
                >
                  {item.title}
                </h3>
                <p className="text-zinc-600 leading-relaxed text-[15px]">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who I Work With */}
      <section className="fade-section py-40 px-8 border-t border-white/[0.03]">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-20">
            <div>
              <p className="text-zinc-700 text-xs tracking-[0.3em] uppercase mb-8">
                Who I Work With
              </p>
              <p
                className="text-4xl sm:text-5xl font-bold tracking-tight leading-[1.1]"
                style={{
                  fontFamily: "var(--font-space-grotesk), sans-serif",
                }}
              >
                Businesses that already have traction.
              </p>
            </div>

            <div className="flex flex-col justify-end">
              <div className="space-y-0">
                {[
                  "Generating revenue but not scaling efficiently",
                  "Founders stuck at a plateau",
                  "Operators who know something isn't working",
                  "AI and tech-enabled businesses with growth potential",
                ].map((item, i) => (
                  <div
                    key={i}
                    className="py-5 border-b border-white/[0.04] flex items-start gap-6"
                  >
                    <span className="text-zinc-800 text-xs font-mono mt-1">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="text-zinc-400 text-[15px] leading-relaxed">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
              <p className="text-zinc-800 text-xs mt-8 tracking-wide">
                If you&apos;re starting from zero, I&apos;m probably not the
                right fit.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Proof */}
      <section className="fade-section py-40 px-8 border-t border-white/[0.03]">
        <div className="max-w-7xl mx-auto">
          <p className="text-zinc-700 text-xs tracking-[0.3em] uppercase mb-24">
            Track Record
          </p>

          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <p
                className="text-[clamp(4rem,12vw,10rem)] font-bold tracking-[-0.04em] leading-none"
                style={{
                  fontFamily: "var(--font-space-grotesk), sans-serif",
                }}
              >
                $80M<span className="text-zinc-800">+</span>
              </p>
              <p className="text-zinc-700 text-sm mt-4 tracking-wide uppercase">
                Deals completed
              </p>
            </div>

            <div>
              <p
                className="text-[clamp(4rem,12vw,10rem)] font-bold tracking-[-0.04em] leading-none"
                style={{
                  fontFamily: "var(--font-space-grotesk), sans-serif",
                }}
              >
                $15M<span className="text-zinc-800">+</span>
              </p>
              <p className="text-zinc-700 text-sm mt-4 tracking-wide uppercase">
                Active pipeline
              </p>
            </div>
          </div>

          <p className="text-zinc-800 text-sm mt-24">
            Real operators. Real businesses. Real outcomes.
          </p>
        </div>
      </section>

      {/* Current Focus */}
      <section className="fade-section py-40 px-8 border-t border-white/[0.03]">
        <div className="max-w-7xl mx-auto">
          <p className="text-zinc-700 text-xs tracking-[0.3em] uppercase mb-20">
            Current Focus
          </p>

          <div className="space-y-0">
            {[
              "Working with and funding AI-driven businesses",
              "Scaling service and operating businesses",
              "Structuring deals and capital strategies",
            ].map((item, i) => (
              <p
                key={i}
                className="text-xl sm:text-2xl md:text-3xl text-zinc-500 py-6 border-b border-white/[0.03] tracking-tight"
              >
                {item}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        id="contact"
        className="fade-section py-40 px-8 border-t border-white/[0.03]"
      >
        <div className="max-w-4xl mx-auto">
          <p
            className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight leading-[1.15] text-zinc-300 mb-16"
            style={{
              fontFamily: "var(--font-space-grotesk), sans-serif",
            }}
          >
            If you&apos;ve got something that&apos;s already working but not
            where it should be, let&apos;s talk.
          </p>
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-black px-10 py-4 text-sm font-semibold tracking-wide hover:bg-zinc-200 transition-colors duration-300"
          >
            Start a conversation
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-8 border-t border-white/[0.03]">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-zinc-800 text-xs tracking-wide">
          <p>&copy; {new Date().getFullYear()} Wolf Partners</p>
          <p>dave@wolfpartners.com.au</p>
        </div>
      </footer>
    </div>
  );
}
