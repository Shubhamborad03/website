"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

export default function Nav() {
  const { scrollY } = useScroll();
  const blur = useTransform(scrollY, [0, 100], [0, 16]);
  const bg = useTransform(
    scrollY,
    [0, 100],
    ["rgba(250, 250, 247, 0)", "rgba(250, 250, 247, 0.85)"]
  );
  const border = useTransform(
    scrollY,
    [0, 100],
    ["rgba(10, 10, 10, 0)", "rgba(10, 10, 10, 0.06)"]
  );

  return (
    <motion.nav
      style={{
        backdropFilter: blur.get() ? `blur(${blur.get()}px)` : undefined,
        WebkitBackdropFilter: blur.get() ? `blur(${blur.get()}px)` : undefined,
        backgroundColor: bg,
        borderBottom: "1px solid",
        borderColor: border,
      }}
      className="fixed top-0 inset-x-0 z-50 transition-all"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <Image
            src="/images/wolf-partners-logo.png"
            alt="Wolf Partners"
            width={28}
            height={30}
            className="h-7 w-auto"
            priority
          />
          <div className="font-display text-[15px] font-bold tracking-tight">
            Wolf Partners
          </div>
          <div className="hidden md:flex h-4 w-px bg-ink/15 mx-2" />
          <div className="hidden md:block text-[13px] text-graphite">
            for Roofing Contractors
          </div>
        </div>
        <div className="hidden md:flex items-center gap-8 text-[13px] text-ink/70 font-medium">
          <a href="#leads" className="hover:text-ink transition-colors">Leads</a>
          <a href="#satellite" className="hover:text-ink transition-colors">Quote engine</a>
          <a href="#conversation" className="hover:text-ink transition-colors">Conversation</a>
          <a href="#social" className="hover:text-ink transition-colors">Social</a>
          <a href="#numbers" className="hover:text-ink transition-colors">Numbers</a>
        </div>
        <a
          href="mailto:dave@wolfpartners.com.au"
          className="text-[13px] font-medium px-4 py-2 rounded-full bg-ink text-fog-soft hover:bg-ink-soft transition-colors whitespace-nowrap"
        >
          Get in touch
        </a>
      </div>
    </motion.nav>
  );
}
