import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-asphalt-950">
      <div className="container-tight px-4 py-16 sm:px-6">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Image
              src="/images/logo.png"
              alt="Bitumen Co"
              width={120}
              height={36}
              className="h-8 w-auto brightness-0 invert"
            />
            <p className="mt-4 text-sm leading-relaxed text-asphalt-500">
              Brisbane&apos;s trusted asphalt &amp; bitumen contractor. Quality
              work from the Gold Coast to the Sunshine Coast.
            </p>
            <a
              href="https://www.instagram.com/bitumencoqld/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-sm text-asphalt-400 transition-colors hover:text-amber-400"
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              @bitumencoqld
            </a>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-asphalt-400">
              Services
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/services#driveways"
                  className="text-sm text-asphalt-500 transition-colors hover:text-white"
                >
                  Asphalt Driveways
                </Link>
              </li>
              <li>
                <Link
                  href="/services#commercial"
                  className="text-sm text-asphalt-500 transition-colors hover:text-white"
                >
                  Commercial Paving
                </Link>
              </li>
              <li>
                <Link
                  href="/services#concrete"
                  className="text-sm text-asphalt-500 transition-colors hover:text-white"
                >
                  Concrete Driveways
                </Link>
              </li>
              <li>
                <Link
                  href="/services#repairs"
                  className="text-sm text-asphalt-500 transition-colors hover:text-white"
                >
                  Pothole Repairs
                </Link>
              </li>
              <li>
                <Link
                  href="/services#linemarking"
                  className="text-sm text-asphalt-500 transition-colors hover:text-white"
                >
                  Car Park Line Marking
                </Link>
              </li>
              <li>
                <Link
                  href="/services#civil"
                  className="text-sm text-asphalt-500 transition-colors hover:text-white"
                >
                  Civil Construction
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-asphalt-400">
              Company
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/about"
                  className="text-sm text-asphalt-500 transition-colors hover:text-white"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/gallery"
                  className="text-sm text-asphalt-500 transition-colors hover:text-white"
                >
                  Our Work
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-asphalt-500 transition-colors hover:text-white"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-asphalt-400">
              Contact
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:0421333728"
                  className="flex items-center gap-3 text-sm text-asphalt-500 transition-colors hover:text-amber-400"
                >
                  <Phone className="h-4 w-4 text-amber-500" />
                  0421 333 728
                </a>
              </li>
              <li>
                <a
                  href="mailto:jack@bitumenco.com"
                  className="flex items-center gap-3 text-sm text-asphalt-500 transition-colors hover:text-amber-400"
                >
                  <Mail className="h-4 w-4 text-amber-500" />
                  jack@bitumenco.com
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-asphalt-500">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-amber-500" />
                Gold Coast, Brisbane &amp; Sunshine Coast
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 sm:flex-row">
          <p className="text-xs text-asphalt-600">
            &copy; {new Date().getFullYear()} Bitumen Co. All Rights Reserved.
            ABN 22168612758
          </p>
          <p className="text-xs text-asphalt-600">
            Serving SE Queensland with pride.
          </p>
        </div>
      </div>
    </footer>
  );
}
