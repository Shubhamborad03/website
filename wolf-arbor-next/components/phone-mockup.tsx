"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Sparkles } from "lucide-react";

export function PhoneMockup() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -10% 0px" });

  const base = 0.2;
  const step = 0.55;

  return (
    <div ref={ref} className="relative mx-auto" style={{ width: 296 }}>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="relative"
      >
        {/* Side buttons */}
        <div className="absolute -left-[3px] top-[110px] w-[3px] h-7 bg-[#1f1f21] rounded-l-sm" />
        <div className="absolute -left-[3px] top-[150px] w-[3px] h-12 bg-[#1f1f21] rounded-l-sm" />
        <div className="absolute -left-[3px] top-[210px] w-[3px] h-12 bg-[#1f1f21] rounded-l-sm" />
        <div className="absolute -right-[3px] top-[170px] w-[3px] h-20 bg-[#1f1f21] rounded-r-sm" />

        {/* Outer titanium frame */}
        <div
          className="relative rounded-[54px] p-[3px]"
          style={{
            background:
              "linear-gradient(145deg, #4a4a4d 0%, #2a2a2c 30%, #1d1d1f 50%, #2a2a2c 70%, #4a4a4d 100%)",
            boxShadow:
              "0 50px 100px -30px rgba(28, 30, 25, 0.45), 0 20px 40px -20px rgba(28, 30, 25, 0.25), inset 0 0 0 1px rgba(255,255,255,0.04)",
          }}
        >
          {/* Inner bezel */}
          <div className="rounded-[51px] p-[1px] bg-[#0a0a0a]">
            {/* Screen */}
            <div className="relative bg-bg rounded-[50px] overflow-hidden h-[600px]">
              {/* Dynamic Island */}
              <div className="absolute top-2.5 left-1/2 -translate-x-1/2 z-30 w-[96px] h-[28px] bg-black rounded-full">
                <div className="absolute right-2 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-[#1f3a2e] rounded-full opacity-50" />
              </div>

              {/* Status bar */}
              <div className="absolute top-0 left-0 right-0 z-20 flex justify-between items-center px-7 pt-3 pb-2 text-[13px] font-semibold text-ink">
                <span style={{ fontVariantNumeric: "tabular-nums" }}>9:41</span>
                <div className="flex gap-1.5 items-center">
                  {/* Signal */}
                  <svg className="w-4 h-2.5" viewBox="0 0 18 12" fill="currentColor">
                    <rect x="0" y="8" width="3" height="4" rx="0.5" />
                    <rect x="5" y="6" width="3" height="6" rx="0.5" />
                    <rect x="10" y="3" width="3" height="9" rx="0.5" />
                    <rect x="15" y="0" width="3" height="12" rx="0.5" />
                  </svg>
                  {/* Wifi */}
                  <svg className="w-3.5 h-2.5" viewBox="0 0 16 12" fill="none" stroke="currentColor" strokeWidth="1.4">
                    <path d="M1 4c2-2 5-3 7-3s5 1 7 3" strokeLinecap="round" />
                    <path d="M3.5 6.5C5 5 6.5 4.5 8 4.5s3 0.5 4.5 2" strokeLinecap="round" />
                    <path d="M6 9c0.6-0.6 1.4-1 2-1s1.4 0.4 2 1" strokeLinecap="round" />
                  </svg>
                  {/* Battery */}
                  <div className="relative flex items-center">
                    <div className="w-6 h-3 rounded-[3px] border border-current p-[1px]">
                      <div className="h-full w-[85%] bg-current rounded-[1px]" />
                    </div>
                    <div className="w-[1.5px] h-1.5 bg-current rounded-r-sm ml-px" />
                  </div>
                </div>
              </div>

              {/* Conversation header — under the Dynamic Island */}
              <div className="absolute top-12 left-0 right-0 px-5 pt-2 pb-3 border-b border-sand bg-bg/90 backdrop-blur-md z-10">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-full bg-forest flex items-center justify-center text-[11px] font-semibold text-bg">
                      SK
                    </div>
                    <div className="leading-tight">
                      <div className="text-[13px] font-semibold text-ink">
                        Sarah K.
                      </div>
                      <div className="text-[10px] text-muted">
                        Buderim · 0412 ••• •••
                      </div>
                    </div>
                  </div>
                  <button className="w-7 h-7 rounded-full bg-sandSoft flex items-center justify-center">
                    <svg className="w-3 h-3 text-forest" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Messages */}
              <div className="absolute top-[110px] left-0 right-0 bottom-0 px-3.5 py-3 space-y-2.5 overflow-hidden">
                {/* Customer text */}
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{
                    duration: 0.4,
                    delay: base + step * 0,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="flex justify-start"
                >
                  <div className="max-w-[78%]">
                    <div
                      className="text-[12.5px] leading-[1.35] rounded-[18px] rounded-tl-[6px] px-3 py-1.5"
                      style={{ background: "#E9E9EB", color: "#000" }}
                    >
                      Big gum out the back. Branch on the fence — can you look?
                    </div>
                  </div>
                </motion.div>

                {/* Customer photo */}
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{
                    duration: 0.4,
                    delay: base + step * 1,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="flex justify-start"
                >
                  <div
                    className="rounded-[18px] rounded-tl-[6px] overflow-hidden bg-[#E9E9EB] p-0.5"
                    style={{ width: 188 }}
                  >
                    <div
                      className="relative rounded-[14px] overflow-hidden bg-forest"
                      style={{ width: "100%", height: 138 }}
                    >
                      <Image
                        src="/sms-backyard.jpg"
                        alt="Customer photo of backyard tree near fence"
                        fill
                        sizes="188px"
                        className="object-cover"
                        unoptimized
                      />
                    </div>
                  </div>
                </motion.div>

                {/* AI assessment chip */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.94 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{
                    duration: 0.4,
                    delay: base + step * 2,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="flex justify-center pt-1"
                >
                  <div className="rounded-xl px-2.5 py-1.5 bg-forest/[0.06] border border-forest/15 max-w-[92%]">
                    <div className="text-[9px] font-mono uppercase tracking-[0.18em] text-forest mb-0.5 flex items-center gap-1">
                      <Sparkles className="w-2.5 h-2.5" />
                      Vision AI
                    </div>
                    <div className="text-[10.5px] text-ink leading-[1.4]">
                      <span className="font-semibold">Euc. tereticornis</span>,
                      ~18m. Medium complexity.{" "}
                      <span className="text-forest font-medium">
                        Cherry-picker required.
                      </span>
                    </div>
                  </div>
                </motion.div>

                {/* iMessage-style blue reply (auto-sent quote intro) */}
                <motion.div
                  initial={{ opacity: 0, x: 10 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{
                    duration: 0.4,
                    delay: base + step * 3,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="flex justify-end"
                >
                  <div className="max-w-[78%]">
                    <div
                      className="text-[12.5px] leading-[1.35] rounded-[18px] rounded-tr-[6px] px-3 py-1.5 text-white"
                      style={{
                        background:
                          "linear-gradient(180deg, #3FA3F0 0%, #1F88E6 100%)",
                      }}
                    >
                      Got it Sarah. Quote in the hour. Driveway clear for the
                      picker?
                    </div>
                    <div className="text-[9px] text-muted mt-0.5 mr-2 text-right">
                      Delivered · 8:13 pm
                    </div>
                  </div>
                </motion.div>

                {/* Owner approval card */}
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    duration: 0.4,
                    delay: base + step * 4,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="mt-2 rounded-2xl border border-sand bg-bg p-3 shadow-sm"
                >
                  <div className="text-[9px] font-mono uppercase tracking-[0.18em] text-amber mb-1.5 flex items-center gap-1.5">
                    <span className="inline-block w-1.5 h-1.5 bg-amber rounded-full" />
                    Owner approval · Mitch
                  </div>
                  <div className="text-[10.5px] text-muted mb-1 leading-snug">
                    Draft · full removal + stump grind
                  </div>
                  <div className="flex items-baseline gap-1.5 mb-2">
                    <span className="text-[19px] font-semibold text-ink counter leading-none">
                      $2,650
                    </span>
                    <span className="text-[10px] text-muted">
                      $2,400–2,900
                    </span>
                  </div>
                  <div className="grid grid-cols-3 gap-1">
                    <button className="bg-ink text-bg text-[10px] font-semibold rounded-md py-1.5">
                      Send
                    </button>
                    <button className="bg-sandSoft text-ink text-[10px] font-medium rounded-md py-1.5 border border-sand">
                      Edit
                    </button>
                    <button className="bg-sandSoft text-ink text-[10px] font-medium rounded-md py-1.5 border border-sand">
                      Visit
                    </button>
                  </div>
                </motion.div>
              </div>

              {/* Home indicator */}
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-28 h-1 bg-ink rounded-full opacity-90" />
            </div>
          </div>
        </div>
      </motion.div>

      {/* Floating timer pill */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: base + step * 5 }}
        className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-ink text-bg rounded-full px-4 py-2 text-[11px] font-mono uppercase tracking-[0.15em] shadow-card whitespace-nowrap"
      >
        Quote sent · 4 min
      </motion.div>
    </div>
  );
}
