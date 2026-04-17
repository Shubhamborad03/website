"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

const BOOKING_URL = "https://calendar.google.com/calendar/appointments/schedules";

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

export default function OptionA() {
  const containerRef = useScrollFadeIn();

  return (
    <div ref={containerRef} className="min-h-screen bg-[#0A0A0A] text-white">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0A0A0A]/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Image
            src="/wolf-partners-logo.png"
            alt="Wolf Partners"
            width={120}
            height={40}
            className="h-8 w-auto"
          />
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm border border-zinc-700 px-5 py-2 rounded-full hover:bg-white hover:text-black transition-all duration-300"
          >
            Start a conversation
          </a>
        </div>
      </nav>

      {/* 01 — Hero */}
      <section className="fade-section min-h-screen flex flex-col justify-center px-6 pt-20">
        <div className="max-w-5xl mx-auto w-full">
          <p className="text-zinc-600 text-sm font-mono tracking-widest uppercase mb-6">
            01
          </p>
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.95] mb-8">
            I scale businesses
            <br />
            that already work.
          </h1>
          <p className="text-zinc-400 text-lg sm:text-xl tracking-wide mb-4">
            Systems. Clients. Revenue. Capital.
          </p>
          <p className="text-zinc-600 text-sm mb-12">
            Investor and growth strategist
          </p>
          <a
            href="#contact"
            className="inline-block border border-zinc-700 px-8 py-3.5 rounded-full text-sm font-medium hover:bg-white hover:text-black transition-all duration-300"
          >
            Start a conversation
          </a>
        </div>
      </section>

      {/* 02 — What I Do */}
      <section className="fade-section py-32 px-6 border-t border-white/5">
        <div className="max-w-5xl mx-auto">
          <p className="text-zinc-600 text-sm font-mono tracking-widest uppercase mb-6">
            02
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-16">
            What I do
          </h2>

          <div className="grid md:grid-cols-3 gap-12 md:gap-8">
            <div className="group">
              <h3 className="text-xl font-semibold mb-3 text-white">
                Scale & Optimise
              </h3>
              <p className="text-zinc-500 leading-relaxed">
                Fix systems, client flow, retention, and pricing to unlock
                revenue that&apos;s already there.
              </p>
            </div>

            <div className="group">
              <h3 className="text-xl font-semibold mb-3 text-white">
                Strategic Growth
              </h3>
              <p className="text-zinc-500 leading-relaxed">
                Positioning, partnerships, and commercial strategy that moves
                the needle.
              </p>
            </div>

            <div className="group">
              <h3 className="text-xl font-semibold mb-3 text-white">
                Capital & Deals
              </h3>
              <p className="text-zinc-500 leading-relaxed">
                Investing, structuring, and connecting capital where there&apos;s
                real alignment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 03 — Who I Work With */}
      <section className="fade-section py-32 px-6 border-t border-white/5">
        <div className="max-w-5xl mx-auto">
          <p className="text-zinc-600 text-sm font-mono tracking-widest uppercase mb-6">
            03
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">
            Who I work with
          </h2>
          <p className="text-zinc-400 text-lg mb-12">
            I work with businesses that already have traction.
          </p>

          <div className="space-y-6">
            {[
              "Generating revenue but not scaling efficiently",
              "Founders stuck at a plateau",
              "Operators who know something isn't working",
              "AI and tech-enabled businesses with growth potential",
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-4 py-4 border-b border-white/5"
              >
                <span className="text-zinc-700 font-mono text-sm mt-0.5">
                  0{i + 1}
                </span>
                <p className="text-zinc-300 text-lg">{item}</p>
              </div>
            ))}
          </div>

          <p className="text-zinc-600 text-sm mt-12 italic">
            If you&apos;re starting from zero, I&apos;m probably not the right
            fit.
          </p>
        </div>
      </section>

      {/* 04 — Proof */}
      <section className="fade-section py-32 px-6 border-t border-white/5">
        <div className="max-w-5xl mx-auto">
          <p className="text-zinc-600 text-sm font-mono tracking-widest uppercase mb-6">
            04
          </p>

          <div className="grid md:grid-cols-2 gap-16 md:gap-24 mb-16">
            <div>
              <p className="text-6xl sm:text-7xl md:text-8xl font-bold tracking-tighter text-white">
                $80M
                <span className="text-zinc-600">+</span>
              </p>
              <p className="text-zinc-500 text-lg mt-3">Deals completed</p>
            </div>

            <div>
              <p className="text-6xl sm:text-7xl md:text-8xl font-bold tracking-tighter text-white">
                $15M
                <span className="text-zinc-600">+</span>
              </p>
              <p className="text-zinc-500 text-lg mt-3">Active pipeline</p>
            </div>
          </div>

          <p className="text-zinc-600 text-lg">
            Real operators. Real businesses. Real outcomes.
          </p>
        </div>
      </section>

      {/* 05 — Current Focus */}
      <section className="fade-section py-32 px-6 border-t border-white/5">
        <div className="max-w-5xl mx-auto">
          <p className="text-zinc-600 text-sm font-mono tracking-widest uppercase mb-6">
            05
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-16">
            Current focus
          </h2>

          <div className="space-y-8">
            {[
              "Working with and funding AI-driven businesses",
              "Scaling service and operating businesses",
              "Structuring deals and capital strategies",
            ].map((item, i) => (
              <p key={i} className="text-zinc-400 text-xl leading-relaxed">
                <span className="text-zinc-700 mr-3">—</span>
                {item}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* 06 — CTA */}
      <section
        id="contact"
        className="fade-section py-32 px-6 border-t border-white/5"
      >
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-zinc-600 text-sm font-mono tracking-widest uppercase mb-6">
            06
          </p>
          <p className="text-2xl sm:text-3xl md:text-4xl font-medium tracking-tight text-zinc-300 leading-snug mb-12">
            If you&apos;ve got something that&apos;s already working but not
            where it should be, let&apos;s talk.
          </p>
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-black px-10 py-4 rounded-full text-sm font-semibold hover:bg-zinc-200 transition-all duration-300"
          >
            Start a conversation
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-white/5">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-zinc-700 text-sm">
          <p>&copy; {new Date().getFullYear()} Wolf Partners</p>
          <p>dave@wolfpartners.com.au</p>
        </div>
      </footer>
    </div>
  );
}
