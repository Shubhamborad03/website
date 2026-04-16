export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy-950 text-white/50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <p className="font-heading text-xl font-bold text-white">Tracy Thew Painters</p>
              <p className="text-xs text-gold-400 uppercase tracking-widest mt-0.5">
                Est. 1982 · Sunshine Coast
              </p>
            </div>
            <p className="text-sm leading-relaxed">
              Family-run painting contractors serving the Sunshine Coast with
              pride and craftsmanship since 1982.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white text-sm font-semibold uppercase tracking-wide mb-4">
              Services
            </h4>
            <ul className="space-y-2 text-sm">
              {[
                "House Repainting",
                "New Homes & Renovations",
                "Commercial Painting",
                "Heritage Restorations",
                "Colour Consultation",
                "Specialised Finishes",
              ].map((s) => (
                <li key={s}>
                  <a href="#services" className="hover:text-white transition-colors">
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white text-sm font-semibold uppercase tracking-wide mb-4">
              Contact
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="tel:0754481697" className="hover:text-white transition-colors">
                  07 5448 1697
                </a>
              </li>
              <li>
                <a href="tel:0407768784" className="hover:text-white transition-colors">
                  0407 768 784
                </a>
              </li>
              <li>
                <a
                  href="mailto:tracey.thew@bigpond.com"
                  className="hover:text-white transition-colors break-all"
                >
                  tracey.thew@bigpond.com
                </a>
              </li>
              <li>19 Mimosa Street, Peregian Beach QLD 4573</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <p>© {year} Tracy Thew Painters. All rights reserved.</p>
          <p>QBCC Licensed · Sunshine Coast, QLD</p>
        </div>
      </div>
    </footer>
  );
}
