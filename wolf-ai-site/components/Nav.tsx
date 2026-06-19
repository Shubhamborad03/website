"use client";

import { useEffect, useState } from "react";

const LINKS = [
  { label: "Agents", href: "#agents" },
  { label: "Web design", href: "#web" },
];

export default function Nav() {
  const [solid, setSolid] = useState(false);
  useEffect(() => {
    const on = () => setSolid(window.scrollY > 24);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  return (
    <header className="fixed top-0 inset-x-0 z-50 transition-all duration-300"
      style={{
        background: solid ? "rgba(251,251,253,.78)" : "transparent",
        backdropFilter: solid ? "blur(16px)" : "none",
        borderBottom: solid ? "1px solid var(--line-2)" : "1px solid transparent",
      }}>
      <div className="wrap flex items-center justify-between h-[68px]">
        <a href="/" className="font-display text-[20px] tracking-[-.02em] text-ink">
          Wolf<span className="text-blue">AI</span>
        </a>
        <nav className="hidden md:flex items-center gap-8">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} className="text-[14px] text-ink-2 hover:text-ink transition-colors">
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="https://z8d9iav9qs2.typeform.com/to/zTzcDJPm"
          className="inline-flex items-center gap-2 rounded-full bg-btn text-white px-5 py-[10px] text-[13.5px] font-semibold hover:bg-btn-hover transition-colors"
        >
          Contact us
          <span aria-hidden>&rarr;</span>
        </a>
      </div>
    </header>
  );
}
