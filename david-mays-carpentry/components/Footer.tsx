import { Phone, Mail, MapPin, Clock, Shield } from "lucide-react";
import Link from "next/link";

const serviceLinks = [
  { href: "/services#decks", label: "Decks & Pergolas" },
  { href: "/services#renovations", label: "Renovations" },
  { href: "/services#tiling", label: "Tiling & Waterproofing" },
  { href: "/services#handyman", label: "Handyman Services" },
  { href: "/services#plastering", label: "Plastering & Gyprock" },
  { href: "/services#doors", label: "Doors & Windows" },
];

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const areas = [
  "Nambour",
  "Maroochydore",
  "Buderim",
  "Coolum",
  "Kawana",
  "Sippy Downs",
  "Noosa",
  "Caloundra",
];

export default function Footer() {
  return (
    <footer className="bg-charcoal-950 text-charcoal-300">
      {/* Main footer */}
      <div className="container-tight px-4 pb-12 pt-16 sm:px-6">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-timber-600 text-lg font-bold text-white">
                DM
              </div>
              <div>
                <p className="font-heading text-lg font-bold text-white">
                  David May&apos;s
                </p>
                <p className="text-xs uppercase tracking-wider text-charcoal-500">
                  Carpentry & Handyman
                </p>
              </div>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-charcoal-400">
              QBCC Licensed Carpenter providing quality carpentry and handyman
              services across the entire Sunshine Coast.
            </p>
            <div className="mt-4 flex items-center gap-2 text-sm">
              <Shield className="h-4 w-4 text-timber-500" />
              <span>QBCC Lic: 15017564</span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-white">
              Services
            </h4>
            <ul className="space-y-2.5">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-charcoal-400 transition-colors hover:text-timber-400"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Areas */}
          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-white">
              Service Areas
            </h4>
            <ul className="space-y-2.5">
              {areas.map((area) => (
                <li key={area}>
                  <span className="flex items-center gap-1.5 text-sm text-charcoal-400">
                    <MapPin className="h-3 w-3 text-timber-500" />
                    {area}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-white">
              Contact
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:0400000000"
                  className="flex items-center gap-2 text-sm text-charcoal-400 transition-colors hover:text-timber-400"
                >
                  <Phone className="h-4 w-4 text-timber-500" />
                  Call David
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@handymansunshinecoast.com.au"
                  className="flex items-center gap-2 text-sm text-charcoal-400 transition-colors hover:text-timber-400"
                >
                  <Mail className="h-4 w-4 text-timber-500" />
                  Send Email
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-charcoal-400">
                <MapPin className="h-4 w-4 text-timber-500" />
                Nambour, Sunshine Coast QLD
              </li>
              <li className="flex items-center gap-2 text-sm text-charcoal-400">
                <Clock className="h-4 w-4 text-timber-500" />
                Open 7 Days — 9am to 5pm
              </li>
            </ul>

            <div className="mt-6">
              <a href="tel:0400000000" className="btn-primary w-full text-sm">
                <Phone className="h-4 w-4" />
                Get Free Quote
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="container-tight flex flex-col items-center justify-between gap-3 px-4 py-5 text-center text-xs text-charcoal-500 sm:flex-row sm:px-6 sm:text-left">
          <p>
            &copy; {new Date().getFullYear()} David May&apos;s Carpentry &
            Handyman. ABN: 98 183 774 863
          </p>
          <div className="flex gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="transition-colors hover:text-charcoal-300"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
