"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

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
      { threshold: 0.1 }
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

function useMouseGlow() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const handleMove = (e: MouseEvent) => {
      el.style.setProperty("--glow-x", `${e.clientX}px`);
      el.style.setProperty("--glow-y", `${e.clientY}px`);
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return ref;
}

export default function OptionC() {
  const containerRef = useScrollFadeIn();
  const glowRef = useMouseGlow();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div
      ref={(node) => {
        (containerRef as React.MutableRefObject<HTMLDivElement | null>).current = node;
        (glowRef as React.MutableRefObject<HTMLDivElement | null>).current = node;
      }}
      className="min-h-screen bg-[#000000] text-white relative overflow-hidden"
    >
      {/* Subtle mouse-following glow — Linear inspired */}
      <div
        className="pointer-events-none fixed inset-0 z-0 transition-opacity duration-500"
        style={{
          opacity: mounted ? 1 : 0,
          background:
            "radial-gradient(800px circle at var(--glow-x, 50%) var(--glow-y, 50%), rgba(255,255,255,0.015), transparent 60%)",
        }}
      />

      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/60 backdrop-blur-2xl border-b border-white/[0.04]">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-4 flex items-center justify-between">
          <Image
            src="/wolf-partners-logo.png"
            alt="Wolf Partners"
            width={120}
            height={40}
            className="h-7 w-auto"
          />
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[13px] text-zinc-400 px-4 py-2 border border-white/[0.08] rounded-lg hover:text-white hover:border-white/20 hover:bg-white/[0.03] transition-all duration-200"
          >
            Start a conversation
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="fade-section relative z-10 min-h-screen flex flex-col justify-center px-6 lg:px-8">
        <div className="max-w-6xl mx-auto w-full">
          {/* Subtle gradient accent line */}
          <div className="w-16 h-[1px] mb-10 bg-gradient-to-r from-zinc-500 to-transparent" />

          <p className="text-zinc-500 text-[13px] tracking-wide mb-6">
            Investor and growth strategist
          </p>

          <h1 className="text-[clamp(2.8rem,7vw,5.5rem)] font-semibold tracking-[-0.035em] leading-[1.05] mb-8 text-white/95">
            I scale businesses
            <br />
            that already work.
          </h1>

          <p className="text-zinc-500 text-[15px] sm:text-base tracking-[0.08em] mb-14">
            Systems. Clients. Revenue. Capital.
          </p>

          <a
            href="#contact"
            className="group inline-flex items-center gap-2.5 bg-white text-black text-[13px] font-medium px-6 py-3 rounded-lg hover:bg-zinc-100 transition-colors duration-200"
          >
            Start a conversation
            <svg
              className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform duration-200"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
              />
            </svg>
          </a>
        </div>
      </section>

      {/* What I Do */}
      <section className="fade-section relative z-10 py-32 lg:py-40 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="w-16 h-[1px] mb-10 bg-gradient-to-r from-zinc-600 to-transparent" />
          <h2 className="text-zinc-500 text-[13px] tracking-wide mb-16 lg:mb-20">
            What I do
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Scale & Optimise",
                desc: "Fix systems, client flow, retention, and pricing.",
              },
              {
                title: "Strategic Growth",
                desc: "Positioning, partnerships, and commercial strategy.",
              },
              {
                title: "Capital & Deals",
                desc: "Investing, structuring, and connecting capital.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="group p-6 lg:p-8 rounded-xl border border-white/[0.04] hover:border-white/[0.08] hover:bg-white/[0.02] transition-all duration-300"
              >
                <h3 className="text-lg font-semibold mb-3 text-white/90 tracking-tight">
                  {item.title}
                </h3>
                <p className="text-zinc-600 text-[14px] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who I Work With */}
      <section className="fade-section relative z-10 py-32 lg:py-40 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="w-16 h-[1px] mb-10 bg-gradient-to-r from-zinc-600 to-transparent" />
          <h2 className="text-zinc-500 text-[13px] tracking-wide mb-6">
            Who I work with
          </h2>

          <p className="text-2xl sm:text-3xl font-semibold tracking-tight text-white/90 mb-14 max-w-xl leading-snug">
            I work with businesses that already have traction.
          </p>

          <div className="max-w-2xl">
            {[
              "Generating revenue but not scaling efficiently",
              "Founders stuck at a plateau",
              "Operators who know something isn't working",
              "AI and tech-enabled businesses with growth potential",
            ].map((item, i) => (
              <div
                key={i}
                className="group flex items-center gap-5 py-4 border-b border-white/[0.04]"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-zinc-700 group-hover:bg-zinc-400 transition-colors duration-300 shrink-0" />
                <p className="text-zinc-400 text-[15px]">{item}</p>
              </div>
            ))}
          </div>

          <p className="text-zinc-700 text-[13px] mt-10">
            If you&apos;re starting from zero, I&apos;m probably not the right
            fit.
          </p>
        </div>
      </section>

      {/* Proof */}
      <section className="fade-section relative z-10 py-32 lg:py-40 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="w-16 h-[1px] mb-10 bg-gradient-to-r from-zinc-600 to-transparent" />

          <div className="grid sm:grid-cols-2 gap-8 lg:gap-12">
            {/* $80M card */}
            <div className="p-8 lg:p-12 rounded-xl border border-white/[0.04] bg-white/[0.01]">
              <p className="text-6xl sm:text-7xl lg:text-8xl font-bold tracking-[-0.04em] leading-none text-white/95">
                $80M
                <span className="text-zinc-800">+</span>
              </p>
              <p className="text-zinc-600 text-[13px] tracking-wide mt-5 uppercase">
                Deals completed
              </p>
            </div>

            {/* $15M card */}
            <div className="p-8 lg:p-12 rounded-xl border border-white/[0.04] bg-white/[0.01]">
              <p className="text-6xl sm:text-7xl lg:text-8xl font-bold tracking-[-0.04em] leading-none text-white/95">
                $15M
                <span className="text-zinc-800">+</span>
              </p>
              <p className="text-zinc-600 text-[13px] tracking-wide mt-5 uppercase">
                Active pipeline
              </p>
            </div>
          </div>

          <p className="text-zinc-700 text-[14px] mt-10 tracking-wide">
            Real operators. Real businesses. Real outcomes.
          </p>
        </div>
      </section>

      {/* Current Focus */}
      <section className="fade-section relative z-10 py-32 lg:py-40 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="w-16 h-[1px] mb-10 bg-gradient-to-r from-zinc-600 to-transparent" />
          <h2 className="text-zinc-500 text-[13px] tracking-wide mb-16">
            Current focus
          </h2>

          <div className="space-y-6">
            {[
              "Working with and funding AI-driven businesses",
              "Scaling service and operating businesses",
              "Structuring deals and capital strategies",
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="w-1.5 h-1.5 rounded-full bg-zinc-700 mt-2.5 shrink-0" />
                <p className="text-zinc-400 text-lg sm:text-xl tracking-tight">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        id="contact"
        className="fade-section relative z-10 py-32 lg:py-40 px-6 lg:px-8"
      >
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-2xl sm:text-3xl lg:text-4xl font-medium tracking-tight leading-[1.3] text-zinc-300 mb-14">
            If you&apos;ve got something that&apos;s already working but not
            where it should be, let&apos;s talk.
          </p>
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2.5 bg-white text-black text-[13px] font-medium px-8 py-3.5 rounded-lg hover:bg-zinc-100 transition-colors duration-200"
          >
            Start a conversation
            <svg
              className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform duration-200"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
              />
            </svg>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-8 px-6 lg:px-8 border-t border-white/[0.04]">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-zinc-700 text-[13px]">
          <p>&copy; {new Date().getFullYear()} Wolf Partners</p>
          <p>dave@wolfpartners.com.au</p>
        </div>
      </footer>
    </div>
  );
}
