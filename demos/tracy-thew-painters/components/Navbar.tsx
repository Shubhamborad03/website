"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { label: "Services", href: "#services" },
    { label: "Our Work", href: "#gallery" },
    { label: "Reviews", href: "#reviews" },
    { label: "About", href: "#about" },
    { label: "Service Areas", href: "#areas" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-md py-3"
          : "bg-navy-900/95 backdrop-blur-sm py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex flex-col leading-tight">
            <span
              className={`font-heading text-xl font-bold tracking-tight transition-colors ${
                scrolled ? "text-navy-900" : "text-white"
              }`}
            >
              Tracy Thew
            </span>
            <span
              className={`text-xs font-medium uppercase tracking-widest transition-colors ${
                scrolled ? "text-gold-500" : "text-gold-400"
              }`}
            >
              Painters — Est. 1982
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-gold-400 ${
                  scrolled ? "text-navy-800" : "text-white/90"
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="tel:0754481697"
              className={`text-sm font-semibold transition-colors ${
                scrolled ? "text-navy-800" : "text-white"
              }`}
            >
              07 5448 1697
            </a>
            <a
              href="#contact"
              className="bg-gold-500 hover:bg-gold-600 text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-colors"
            >
              Free Quote
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors ${
              scrolled ? "text-navy-800" : "text-white"
            }`}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-white/20">
            <nav className="flex flex-col gap-1 mt-3">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`py-2.5 px-2 text-sm font-medium rounded-lg transition-colors ${
                    scrolled
                      ? "text-navy-800 hover:bg-navy-50"
                      : "text-white/90 hover:bg-white/10"
                  }`}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="mt-3 bg-gold-500 text-white text-sm font-semibold px-5 py-3 rounded-full text-center"
              >
                Get Free Quote
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
