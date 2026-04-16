"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Menu, X, ChevronDown } from "lucide-react";

const services = [
  { name: "Asphalt Driveways", href: "/services#driveways" },
  { name: "Commercial Paving", href: "/services#commercial" },
  { name: "Concrete Driveways", href: "/services#concrete" },
  { name: "Pothole Repairs", href: "/services#repairs" },
  { name: "Car Park Line Marking", href: "/services#linemarking" },
  { name: "Civil Construction", href: "/services#civil" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-asphalt-950/90 backdrop-blur-xl">
      {/* Top bar */}
      <div className="border-b border-white/5 bg-asphalt-900/50">
        <div className="container-tight flex items-center justify-between px-4 py-2 text-sm">
          <span className="text-asphalt-400">
            Serving Gold Coast to Sunshine Coast
          </span>
          <a
            href="tel:0421333728"
            className="flex items-center gap-2 font-semibold text-amber-400 transition-colors hover:text-amber-300"
          >
            <Phone className="h-3.5 w-3.5" />
            0421 333 728
          </a>
        </div>
      </div>

      {/* Main nav */}
      <nav className="container-tight flex items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/images/logo.png"
            alt="Bitumen Co"
            width={140}
            height={40}
            className="h-9 w-auto brightness-0 invert"
          />
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-8 lg:flex">
          <Link
            href="/"
            className="text-sm font-medium text-asphalt-300 transition-colors hover:text-white"
          >
            Home
          </Link>

          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button className="flex items-center gap-1 text-sm font-medium text-asphalt-300 transition-colors hover:text-white">
              Services
              <ChevronDown className="h-4 w-4" />
            </button>
            {servicesOpen && (
              <div className="absolute top-full left-0 w-56 pt-2">
                <div className="rounded-xl border border-white/10 bg-asphalt-900 p-2 shadow-2xl">
                  {services.map((s) => (
                    <Link
                      key={s.href}
                      href={s.href}
                      onClick={() => setServicesOpen(false)}
                      className="block rounded-lg px-4 py-2.5 text-sm text-asphalt-300 transition-colors hover:bg-white/5 hover:text-white"
                    >
                      {s.name}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          <Link
            href="/gallery"
            className="text-sm font-medium text-asphalt-300 transition-colors hover:text-white"
          >
            Our Work
          </Link>
          <Link
            href="/about"
            className="text-sm font-medium text-asphalt-300 transition-colors hover:text-white"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="text-sm font-medium text-asphalt-300 transition-colors hover:text-white"
          >
            Contact
          </Link>

          <a href="tel:0421333728" className="btn-primary text-sm">
            <Phone className="h-4 w-4" />
            Get a Free Quote
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="rounded-lg p-2 text-asphalt-300 lg:hidden"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-white/5 bg-asphalt-900 px-4 pb-6 pt-4 lg:hidden">
          <div className="flex flex-col gap-1">
            <Link
              href="/"
              onClick={() => setMobileOpen(false)}
              className="rounded-lg px-4 py-3 text-sm font-medium text-asphalt-200 hover:bg-white/5"
            >
              Home
            </Link>
            <p className="mt-2 px-4 text-xs font-semibold uppercase tracking-wider text-asphalt-500">
              Services
            </p>
            {services.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                onClick={() => setMobileOpen(false)}
                className="rounded-lg px-4 py-2.5 text-sm text-asphalt-300 hover:bg-white/5"
              >
                {s.name}
              </Link>
            ))}
            <Link
              href="/gallery"
              onClick={() => setMobileOpen(false)}
              className="rounded-lg px-4 py-3 text-sm font-medium text-asphalt-200 hover:bg-white/5"
            >
              Our Work
            </Link>
            <Link
              href="/about"
              onClick={() => setMobileOpen(false)}
              className="rounded-lg px-4 py-3 text-sm font-medium text-asphalt-200 hover:bg-white/5"
            >
              About
            </Link>
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="rounded-lg px-4 py-3 text-sm font-medium text-asphalt-200 hover:bg-white/5"
            >
              Contact
            </Link>
            <a href="tel:0421333728" className="btn-primary mt-4 text-sm">
              <Phone className="h-4 w-4" />
              Call 0421 333 728
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
