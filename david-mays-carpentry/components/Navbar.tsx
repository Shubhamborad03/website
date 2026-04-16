"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";

const links = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-charcoal-100 bg-white/95 backdrop-blur-md">
      <div className="container-tight flex items-center justify-between px-4 py-4 sm:px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-timber-600 text-lg font-bold text-white">
            DM
          </div>
          <div className="hidden sm:block">
            <p className="font-heading text-lg font-bold leading-tight text-charcoal-900">
              David May&apos;s
            </p>
            <p className="text-xs font-medium uppercase tracking-wider text-charcoal-500">
              Carpentry & Handyman
            </p>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 lg:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-lg px-4 py-2 text-sm font-medium text-charcoal-700 transition-colors hover:bg-timber-50 hover:text-timber-700"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden items-center gap-3 lg:flex">
          <a href="tel:0400000000" className="btn-primary">
            <Phone className="h-4 w-4" />
            Get Free Quote
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="rounded-lg p-2 text-charcoal-700 transition-colors hover:bg-charcoal-50 lg:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-charcoal-100 bg-white px-4 pb-6 pt-2 lg:hidden">
          <nav className="flex flex-col gap-1">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-4 py-3 text-base font-medium text-charcoal-700 transition-colors hover:bg-timber-50"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="mt-4 border-t border-charcoal-100 pt-4">
            <a href="tel:0400000000" className="btn-primary w-full">
              <Phone className="h-4 w-4" />
              Call David — Free Quote
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
