"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Search, Bell, Users, MessageCircle } from "lucide-react";

type Post = {
  group: string;
  author: string;
  text: string;
  time: string;
  reach: number;
  match: boolean;
};

const POSTS: Post[] = [
  { group: "Sunshine Coast Locals", author: "Jess M.", text: "Anyone got a recommendation for a decent roof restorer? Coolum, faded paint, lots of moss…", time: "2m", reach: 8400, match: true },
  { group: "Noosa Mums", author: "Hannah T.", text: "Best place for school holiday activities under $50?", time: "8m", reach: 3200, match: false },
  { group: "Sunshine Coast Tradies", author: "Marcus B.", text: "Storm damage repair quotes — anyone done a hail claim recently?", time: "22m", reach: 5100, match: true },
  { group: "Peregian Beach Community", author: "Linda H.", text: "Looking for a reliable roofer for our place. Roof's a state, not sure where to start.", time: "47m", reach: 4200, match: true },
];

export default function SocialAgentDemo() {
  const [visible, setVisible] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setVisible((c) => (c < POSTS.length ? c + 1 : c)), 600);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="social" className="relative py-20 lg:py-28 bg-fog">
      <div className="max-w-5xl mx-auto px-5 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-10 lg:mb-14"
        >
          <div className="text-[11px] uppercase tracking-wider text-gold-deep font-bold mb-4">
            04 — Social listening
          </div>
          <h2 className="font-display text-[36px] sm:text-[56px] lg:text-[72px] leading-[1.0] tracking-[-0.03em] font-extrabold max-w-3xl mx-auto">
            Someone asks for a roofer.
            <br />
            <span className="text-graphite">You're the first reply.</span>
          </h2>
        </motion.div>

        {/* Brand24-style social listening dashboard */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="rounded-2xl bg-white border border-ink/[0.10] shadow-[0_40px_80px_-20px_rgba(10,10,10,0.18)] overflow-hidden"
        >
          {/* Top bar with metrics */}
          <div className="px-5 py-4 border-b border-ink/[0.06] bg-fog-soft/30 flex items-center justify-between flex-wrap gap-3">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-md bg-gold/15 text-gold-deep flex items-center justify-center">
                <Search className="w-3.5 h-3.5" strokeWidth={2} />
              </div>
              <div>
                <div className="font-display text-[13px] font-bold leading-tight">Social Listening</div>
                <div className="text-[10px] text-ink/45 mt-0.5">Tracking: "roof", "roof restoration", "roofer"</div>
              </div>
            </div>
            <div className="flex items-center gap-1.5 text-[10px] text-emerald-700 bg-emerald-50 px-2 py-1 rounded-md">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 pulse-live" />
              <span className="font-bold uppercase tracking-wider">Live</span>
            </div>
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-3 sm:grid-cols-4 border-b border-ink/[0.06]">
            {[
              { Icon: Users, label: "Groups watched", value: "47" },
              { Icon: MessageCircle, label: "Mentions today", value: "12" },
              { Icon: Bell, label: "Matches", value: "3", highlight: true },
              { Icon: Search, label: "Reach", value: "21K" },
            ].map((s, i) => (
              <div
                key={i}
                className={`p-4 ${i < 3 ? "border-r border-ink/[0.06]" : "hidden sm:block"}`}
              >
                <div className="flex items-center gap-1.5 mb-1.5">
                  <s.Icon className={`w-3 h-3 ${s.highlight ? "text-gold-deep" : "text-ink/40"}`} strokeWidth={2} />
                  <div className="text-[9px] uppercase tracking-wider text-ink/40 font-bold">
                    {s.label}
                  </div>
                </div>
                <div className={`font-display text-[22px] font-extrabold tabular leading-tight ${s.highlight ? "text-gold-deep" : ""}`}>
                  {s.value}
                </div>
              </div>
            ))}
          </div>

          {/* Feed */}
          <div className="divide-y divide-ink/[0.04]">
            <div className="px-5 py-2.5 bg-fog-soft/15 text-[9px] uppercase tracking-wider text-ink/40 font-bold flex items-center justify-between">
              <span>Mention feed · last hour</span>
              <span>Reach</span>
            </div>
            {POSTS.map((post, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: i < visible ? 1 : 0, x: i < visible ? 0 : -16 }}
                transition={{ duration: 0.4 }}
                className={`px-5 py-4 flex items-start gap-3 ${post.match ? "bg-gold/[0.03]" : ""}`}
              >
                {/* Sentiment indicator bar */}
                <div className={`w-0.5 self-stretch rounded-full ${post.match ? "bg-gold" : "bg-ink/[0.08]"}`} />

                {/* Avatar */}
                <div className="w-9 h-9 rounded-full bg-mist flex items-center justify-center font-bold text-ink/55 text-[13px] shrink-0">
                  {post.author.charAt(0)}
                </div>

                {/* Body */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-0.5 flex-wrap">
                    <span className="text-[12px] font-bold">{post.author}</span>
                    <span className="text-[10px] text-ink/30">·</span>
                    <span className="text-[10px] text-ink/45">{post.group}</span>
                    <span className="text-[10px] text-ink/30">·</span>
                    <span className="text-[10px] text-ink/45">{post.time}</span>
                    {post.match && (
                      <span className="px-1.5 py-0.5 rounded-md bg-gold/15 text-gold-deep text-[9px] font-bold uppercase tracking-wider">
                        High intent
                      </span>
                    )}
                  </div>
                  <div className="text-[13px] text-ink/85 leading-snug">{post.text}</div>

                  {post.match && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      transition={{ delay: 0.3, duration: 0.4 }}
                      className="mt-2 flex items-center gap-2 overflow-hidden"
                    >
                      <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-ink text-fog-soft text-[10px] font-medium">
                        <div className="w-1.5 h-1.5 rounded-full bg-gold pulse-live" />
                        Reply drafted in your voice
                      </div>
                      <button className="text-[10px] font-medium text-ink/55 hover:text-ink underline">
                        Review + send
                      </button>
                    </motion.div>
                  )}
                </div>

                {/* Reach */}
                <div className="text-right shrink-0">
                  <div className="text-[11px] font-bold tabular">{(post.reach / 1000).toFixed(1)}K</div>
                  <div className="text-[9px] text-ink/40">reach</div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Footer */}
          <div className="px-5 py-3 border-t border-ink/[0.06] bg-fog-soft/15 flex items-center justify-between text-[10px] text-ink/45">
            <span>Refreshed 12 seconds ago</span>
            <span>3 new matches today · 8 calls booked this week</span>
          </div>
        </motion.div>

        {/* Subtle 4-step flow below */}
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-3">
          {[
            { l: "Watch", b: "47 groups, 24/7" },
            { l: "Match", b: "Roof intent, real-time" },
            { l: "Scan", b: "Profile + address" },
            { l: "Send", b: "Drafted in your voice" },
          ].map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="text-center"
            >
              <div className="text-[10px] tabular text-gold-deep font-bold mb-1">0{i + 1}</div>
              <div className="font-display text-[14px] font-bold mb-0.5">{s.l}</div>
              <div className="text-[11px] text-ink/55">{s.b}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
