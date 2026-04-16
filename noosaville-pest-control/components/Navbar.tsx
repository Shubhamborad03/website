"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./Logo";

const navLinks = [
  { label: "Home",               href: "/" },
  { label: "Services",           href: "/services" },
  { label: "Termite Inspections", href: "/termite-inspections" },
  { label: "Termite Barriers",   href: "/termite-barriers" },
  { label: "About",              href: "/about" },
  { label: "Contact",            href: "/contact" },
];

export default function Navbar() {
  const [scrolled,   setScrolled]   = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onDarkHero = isHome && !scrolled;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        onDarkHero
          ? "bg-brand-950 border-b border-brand-800"
          : "bg-white/95 backdrop-blur-sm shadow-sm border-b border-brand-100"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 py-3">
          <Link href="/" className="flex-shrink-0">
            <Logo variant={onDarkHero ? "light" : "dark"} size="md" />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-150 ${
                    active
                      ? onDarkHero
                        ? "text-white bg-white/10"
                        : "text-brand-700 bg-brand-50"
                      : onDarkHero
                      ? "text-white/80 hover:text-white hover:bg-white/10"
                      : "text-gray-600 hover:text-brand-700 hover:bg-brand-50"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:+61408001239"
              className={`text-sm font-semibold transition-colors duration-150 ${
                onDarkHero ? "text-white/80 hover:text-white" : "text-brand-700 hover:text-brand-900"
              }`}
            >
              0408 001 239
            </a>
            <Link href="/contact" className="btn-primary text-sm px-5 py-2.5">
              Get a Free Quote
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 rounded-lg"
            aria-label="Toggle menu"
          >
            <div className="w-6 flex flex-col gap-1.5">
              <span className={`block h-0.5 w-full transition-all duration-300 ${
                onDarkHero ? "bg-white" : "bg-gray-700"
              } ${mobileOpen ? "rotate-45 translate-y-2" : ""}`} />
              <span className={`block h-0.5 w-full transition-all duration-300 ${
                onDarkHero ? "bg-white" : "bg-gray-700"
              } ${mobileOpen ? "opacity-0" : ""}`} />
              <span className={`block h-0.5 w-full transition-all duration-300 ${
                onDarkHero ? "bg-white" : "bg-gray-700"
              } ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`mobile-menu bg-white border-t border-brand-100 ${mobileOpen ? "open" : ""}`}>
        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                pathname === link.href
                  ? "bg-brand-50 text-brand-700"
                  : "text-gray-700 hover:bg-brand-50 hover:text-brand-700"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <div className="mt-3 pt-3 border-t border-brand-100 flex gap-3">
            <a href="tel:+61408001239" className="btn-secondary flex-1 justify-center text-sm py-2.5">
              Call Now
            </a>
            <Link href="/contact" className="btn-primary flex-1 justify-center text-sm py-2.5" onClick={() => setMobileOpen(false)}>
              Get a Quote
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
