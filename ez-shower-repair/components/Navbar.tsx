"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Phone, ChevronDown } from "lucide-react";

const services = [
  { name: "Leaking Shower Repair", href: "/services#leak-repair" },
  { name: "Shower Screen Resealing", href: "/services#resealing" },
  { name: "Regrouting & Tile Repair", href: "/services#regrouting" },
  { name: "Bathroom Retiling", href: "/services#retiling" },
  { name: "Balcony Repairs", href: "/services#balcony" },
  { name: "Anti-Slip Solutions", href: "/services#anti-slip" },
  { name: "Mould & Calcium Removal", href: "/services#mould-removal" },
  { name: "Shower Renovations", href: "/services#renovations" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-navy-100 bg-white/95 backdrop-blur-sm">
      <div className="container-tight flex items-center justify-between px-4 py-3 sm:px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/images/EZ-Shower-Logo-e1724151865182.png"
            alt="EZ Shower Repair & Tiling"
            width={180}
            height={50}
            className="h-10 w-auto sm:h-12"
            priority
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 lg:flex">
          <Link
            href="/"
            className="rounded-lg px-4 py-2 text-sm font-medium text-navy-700 transition-colors hover:bg-navy-50 hover:text-navy-900"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="rounded-lg px-4 py-2 text-sm font-medium text-navy-700 transition-colors hover:bg-navy-50 hover:text-navy-900"
          >
            About
          </Link>

          {/* Services dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <Link
              href="/services"
              className="flex items-center gap-1 rounded-lg px-4 py-2 text-sm font-medium text-navy-700 transition-colors hover:bg-navy-50 hover:text-navy-900"
            >
              Services
              <ChevronDown className="h-4 w-4" />
            </Link>
            {servicesOpen && (
              <div className="absolute left-0 top-full w-64 rounded-xl border border-navy-100 bg-white py-2 shadow-xl">
                {services.map((s) => (
                  <Link
                    key={s.name}
                    href={s.href}
                    className="block px-4 py-2.5 text-sm text-navy-700 transition-colors hover:bg-navy-50 hover:text-ocean-600"
                  >
                    {s.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            href="/gallery"
            className="rounded-lg px-4 py-2 text-sm font-medium text-navy-700 transition-colors hover:bg-navy-50 hover:text-navy-900"
          >
            Gallery
          </Link>
          <Link
            href="/testimonials"
            className="rounded-lg px-4 py-2 text-sm font-medium text-navy-700 transition-colors hover:bg-navy-50 hover:text-navy-900"
          >
            Reviews
          </Link>
          <Link
            href="/contact"
            className="rounded-lg px-4 py-2 text-sm font-medium text-navy-700 transition-colors hover:bg-navy-50 hover:text-navy-900"
          >
            Contact
          </Link>
        </nav>

        {/* CTA + mobile toggle */}
        <div className="flex items-center gap-3">
          <a href="tel:0406671114" className="btn-primary hidden text-sm sm:inline-flex">
            <Phone className="h-4 w-4" />
            Call Us Now
          </a>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="rounded-lg p-2 text-navy-700 hover:bg-navy-50 lg:hidden"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-navy-100 bg-white px-4 pb-6 pt-4 lg:hidden">
          <nav className="flex flex-col gap-1">
            <Link href="/" onClick={() => setMobileOpen(false)} className="rounded-lg px-4 py-3 text-sm font-medium text-navy-700 hover:bg-navy-50">Home</Link>
            <Link href="/about" onClick={() => setMobileOpen(false)} className="rounded-lg px-4 py-3 text-sm font-medium text-navy-700 hover:bg-navy-50">About</Link>
            <Link href="/services" onClick={() => setMobileOpen(false)} className="rounded-lg px-4 py-3 text-sm font-medium text-navy-700 hover:bg-navy-50">Services</Link>
            <Link href="/gallery" onClick={() => setMobileOpen(false)} className="rounded-lg px-4 py-3 text-sm font-medium text-navy-700 hover:bg-navy-50">Gallery</Link>
            <Link href="/testimonials" onClick={() => setMobileOpen(false)} className="rounded-lg px-4 py-3 text-sm font-medium text-navy-700 hover:bg-navy-50">Reviews</Link>
            <Link href="/contact" onClick={() => setMobileOpen(false)} className="rounded-lg px-4 py-3 text-sm font-medium text-navy-700 hover:bg-navy-50">Contact</Link>
          </nav>
          <a href="tel:0406671114" className="btn-primary mt-4 w-full text-sm">
            <Phone className="h-4 w-4" />
            Call 0406 671 114
          </a>
        </div>
      )}
    </header>
  );
}
