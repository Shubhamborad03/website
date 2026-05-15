"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const CONTACT_URL = "https://z8d9iav9qs2.typeform.com/to/zTzcDJPm";

const links = [
  { href: "#leaks", label: "Leaks" },
  { href: "#system", label: "System" },
  { href: "#levers", label: "Levers" },
  { href: "#math", label: "Maths" },
  { href: "#build", label: "Build" },
];

export function NavPill() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4"
      >
        <nav
          className={cn(
            "rounded-full pl-3 pr-1.5 py-1.5 flex items-center gap-2 md:gap-3 transition-all duration-500",
            scrolled
              ? "bg-bg/92 backdrop-blur-xl border border-sand shadow-card"
              : "bg-bg/65 backdrop-blur-md border border-sand/60",
          )}
        >
          {/* Logo + brand — matches wolf-ai.com.au landing-page treatment */}
          <a
            href="https://wolf-ai.com.au"
            className="flex items-center gap-2.5 shrink-0 pl-1 pr-1"
          >
            <Image
              src="/tree/logo.png"
              alt="Wolf AI logo"
              width={30}
              height={30}
              priority
              className="w-7 h-7 rounded-md object-contain"
            />
            <span className="text-[15px] font-semibold tracking-tight text-ink whitespace-nowrap">
              Wolf<span className="text-amber">AI</span>
            </span>
          </a>

          {/* Divider */}
          <span className="hidden lg:block w-px h-5 bg-sand" />

          {/* Centered links */}
          <div className="hidden lg:flex items-center gap-6 text-[13px] text-muted px-2">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="hover:text-ink transition-colors font-medium"
              >
                {l.label}
              </a>
            ))}
          </div>

          {/* Divider */}
          <span className="hidden lg:block w-px h-5 bg-sand" />

          {/* CTA */}
          <a
            href={CONTACT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-ink text-bg text-[13px] font-semibold rounded-full px-4 py-2 hover:bg-forest transition-colors whitespace-nowrap"
          >
            Contact us
          </a>

          {/* Mobile menu trigger */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            className="lg:hidden w-9 h-9 rounded-full bg-sandSoft hover:bg-sand transition-colors flex items-center justify-center text-ink"
          >
            {open ? (
              <X className="w-4 h-4" strokeWidth={2} />
            ) : (
              <Menu className="w-4 h-4" strokeWidth={2} />
            )}
          </button>
        </nav>
      </motion.header>

      {/* Mobile menu drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden fixed inset-0 z-40 bg-ink/30 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.98 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="absolute top-20 left-1/2 -translate-x-1/2 w-[min(94%,420px)] bg-bg rounded-3xl border border-sand shadow-card p-2"
              onClick={(e) => e.stopPropagation()}
            >
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block px-5 py-4 text-[15px] font-medium text-ink hover:bg-sandSoft rounded-2xl transition-colors"
                >
                  {l.label}
                </a>
              ))}
              <a
                href={CONTACT_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="block mt-1 px-5 py-4 text-[15px] font-semibold bg-ink text-bg rounded-2xl text-center"
              >
                Contact us
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
