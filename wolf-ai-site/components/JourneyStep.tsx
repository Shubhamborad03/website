"use client";

import { motion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

export default function JourneyStep({
  n,
  kicker,
  title,
  body,
  flip = false,
  children,
}: {
  n: string;
  kicker: string;
  title: string;
  body: string;
  flip?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="py-24 lg:py-36">
      <div className="wrap grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
        {/* copy */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.7, ease }}
          className={flip ? "lg:order-2" : ""}
        >
          <div className="flex items-center gap-3 mb-5">
            <span className="grid place-items-center w-9 h-9 rounded-full bg-blue text-white font-mono text-[13px] font-semibold">{n}</span>
            <span className="label">{kicker}</span>
          </div>
          <h2 className="font-display text-ink text-[clamp(28px,3.6vw,46px)] tracking-[-.02em] mb-4 max-w-[18ch]">
            {title}
          </h2>
          <p className="text-[17px] lg:text-[18px] text-ink-2 leading-relaxed max-w-[42ch]">{body}</p>
        </motion.div>

        {/* visual */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease }}
          className={"relative flex justify-center " + (flip ? "lg:order-1" : "")}
        >
          <div
            className="pointer-events-none absolute inset-0 -z-10"
            style={{ background: "radial-gradient(ellipse 50% 50% at 50% 45%, rgba(59,134,255,.12), transparent 66%)" }}
          />
          {children}
        </motion.div>
      </div>
    </div>
  );
}
