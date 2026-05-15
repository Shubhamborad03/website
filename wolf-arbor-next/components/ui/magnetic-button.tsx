"use client";

import { useRef, useState, type ReactNode, type MouseEvent } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary";

interface Props {
  children: ReactNode;
  href?: string;
  className?: string;
  onClick?: () => void;
  variant?: Variant;
}

export function MagneticButton({
  children,
  href,
  className,
  onClick,
  variant = "primary",
}: Props) {
  const ref = useRef<HTMLElement | null>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  function onMove(e: MouseEvent<HTMLElement>) {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = e.clientX - r.left - r.width / 2;
    const y = e.clientY - r.top - r.height / 2;
    setPos({ x: x * 0.15, y: y * 0.22 });
  }
  function onLeave() {
    setPos({ x: 0, y: 0 });
  }

  const variants: Record<Variant, string> = {
    primary: "bg-ink text-bg hover:bg-forest",
    secondary: "bg-bg text-ink border border-sand hover:bg-sandSoft",
  };

  const classes = cn(
    "inline-flex items-center gap-2 rounded-full px-6 py-3.5 font-semibold text-[15px] transition-colors duration-300",
    variants[variant],
    className,
  );

  const animate = { x: pos.x, y: pos.y };
  const transition =
    pos.x === 0
      ? ({ type: "spring", stiffness: 220, damping: 20 } as const)
      : ({ type: "spring", stiffness: 380, damping: 30 } as const);

  if (href) {
    return (
      <motion.a
        ref={(el) => {
          ref.current = el;
        }}
        href={href}
        className={classes}
        animate={animate}
        transition={transition}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
      >
        {children}
      </motion.a>
    );
  }
  return (
    <motion.button
      ref={(el) => {
        ref.current = el;
      }}
      type="button"
      onClick={onClick}
      className={classes}
      animate={animate}
      transition={transition}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      {children}
    </motion.button>
  );
}
