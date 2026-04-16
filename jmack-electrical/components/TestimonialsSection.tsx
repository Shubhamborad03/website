"use client";

import { useEffect, useRef, useState, useCallback } from "react";

const reviews = [
  { name: "Hazel Wilkinson",   location: "Rainbow Beach & Gympie", rating: 5, text: "I highly recommend JMack Electrical. Jim has taken care of my electrical work in both Rainbow Beach and Gympie for some years now. Friendly, efficient and well priced service. One very happy customer here.", date: "3 months ago" },
  { name: "Joey",              location: "Gympie",                 rating: 5, text: "I can't recommend more, they deserve more than 5 stars! These guys had a tricky job at my place on a tight time frame and they came out in force and figured it out. Not only that they are crazy value! And VERY reliable! Thanks so much guys, wouldn't use anyone else.", date: "Verified Review" },
  { name: "Brian",             location: "Gympie",                 rating: 5, text: "Highly recommend these guys — they did a great job connecting underground power to our granny flat. Very professional and reliable and will be using these guys again. Thanks for a great job Jim.", date: "Verified Review" },
  { name: "Gerald McMillan",   location: "Gympie",                 rating: 5, text: "Very happy with my quote and the switchboard upgrade that Aidan did for me. 10/10. Thanks to everyone involved.", date: "4 months ago" },
  { name: "Josie Ritchie",     location: "Widgee",                 rating: 5, text: "JMack came and installed underground power from our house to our shed in Widgee. Jim was very professional and accommodating working around our schedule. Highly recommend.", date: "10 months ago" },
  { name: "Indy M",            location: "Gympie",                 rating: 5, text: "Best electricians we've ever used. A great bunch of guys who are professional and genuinely friendly, and very experienced. These are the guys to choose if you're looking for fantastic electricians.", date: "1 year ago" },
  { name: "Lisa Purnell-Webb", location: "Gympie",                 rating: 5, text: "I'm extremely happy with the service I received for my fire alarm installation. The team was prompt, friendly, and very professional from start to finish. They made the whole process easy and stress-free, and their pricing was very competitive.", date: "2 weeks ago" },
  { name: "Vanessa Hotton",    location: "Gympie",                 rating: 5, text: "Thanks Jim, Rachael and Aidan. We really appreciate the extra effort you went to in installing the replacement ceiling fans. Your customer service is on point. You went above and beyond.", date: "1 week ago" },
  { name: "Maxine Atkins",     location: "Gympie",                 rating: 5, text: "Jim was amazing! He is very skilled, polite and an electrical whizz! His dedication to his trade is admirable and he just gets in and does it. My job was a little tricky and it was done in no time at all.", date: "6 months ago" },
  { name: "Gaye B",            location: "Gympie",                 rating: 5, text: "Friendly, experienced electricians and also very honest which is highly regarded in our books. Matt and Aiden installed a new ceramic cooktop, replaced an old kitchen light and fixed two noisy ceiling fans. Big tick guys.", date: "1 year ago" },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <svg key={i} className={`w-4 h-4 ${i < count ? "text-yellow-400" : "text-gray-200"}`} fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function Avatar({ name }: { name: string }) {
  const initials = name.split(" ").map((n) => n[0]).join("").slice(0, 2).toUpperCase();
  const palette = ["bg-brand-600", "bg-brand-700", "bg-brand-800", "bg-emerald-600", "bg-teal-600", "bg-green-700"];
  const color = palette[name.charCodeAt(0) % palette.length];
  return (
    <div className={`w-10 h-10 rounded-full ${color} text-white flex items-center justify-center text-sm font-bold flex-shrink-0`}>
      {initials}
    </div>
  );
}

export default function TestimonialsSection() {
  const trackRef  = useRef<HTMLDivElement>(null);
  const animRef   = useRef<number>(0);
  const posRef    = useRef(0);       // current scroll position
  const pausedRef = useRef(false);   // paused by user interaction
  const [isDragging, setIsDragging] = useState(false);
  const dragStart  = useRef({ x: 0, scrollLeft: 0 });

  // Auto-scroll — moves right at ~0.5px per frame, loops seamlessly
  const tick = useCallback(() => {
    const el = trackRef.current;
    if (!el || pausedRef.current) { animRef.current = requestAnimationFrame(tick); return; }

    posRef.current += 0.5;

    // When we've scrolled past the first half (original set), jump back seamlessly
    const halfWidth = el.scrollWidth / 2;
    if (posRef.current >= halfWidth) posRef.current -= halfWidth;

    el.scrollLeft = posRef.current;
    animRef.current = requestAnimationFrame(tick);
  }, []);

  useEffect(() => {
    animRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(animRef.current);
  }, [tick]);

  // Pause on hover / focus
  const pause  = () => { pausedRef.current = true; };
  const resume = () => { pausedRef.current = false; };

  // Drag to scroll
  const onMouseDown = (e: React.MouseEvent) => {
    const el = trackRef.current!;
    setIsDragging(true);
    pausedRef.current = true;
    dragStart.current = { x: e.pageX, scrollLeft: el.scrollLeft };
  };
  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const el = trackRef.current!;
    const dx = e.pageX - dragStart.current.x;
    posRef.current = dragStart.current.scrollLeft - dx;
    el.scrollLeft = posRef.current;
  };
  const onMouseUp = () => {
    setIsDragging(false);
    // keep paused briefly then resume
    setTimeout(() => { pausedRef.current = false; }, 800);
  };

  // Touch scroll sync
  const onTouchStart = (e: React.TouchEvent) => {
    pausedRef.current = true;
    dragStart.current = { x: e.touches[0].pageX, scrollLeft: trackRef.current!.scrollLeft };
  };
  const onTouchMove = (e: React.TouchEvent) => {
    const dx = e.touches[0].pageX - dragStart.current.x;
    posRef.current = dragStart.current.scrollLeft - dx;
    trackRef.current!.scrollLeft = posRef.current;
  };
  const onTouchEnd = () => {
    setTimeout(() => { pausedRef.current = false; }, 1000);
  };

  // Duplicate reviews for seamless loop
  const doubled = [...reviews, ...reviews];

  return (
    <section className="py-20 bg-white" id="reviews">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <p className="section-label mb-3">What Clients Say</p>
            <h2 className="section-heading">
              Trusted by Hundreds of<br />Gympie Locals
            </h2>
            <p className="text-gray-400 text-sm mt-3">Drag or scroll to browse · Auto-scrolling</p>
          </div>
          {/* Google badge */}
          <div className="flex items-center gap-4 bg-brand-50 border border-brand-100 rounded-2xl px-6 py-4 w-fit">
            <svg className="w-8 h-8" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-heading text-2xl font-bold text-brand-950">4.8</span>
                <Stars count={5} />
              </div>
              <p className="text-gray-500 text-xs mt-0.5">54 reviews on Google</p>
            </div>
          </div>
        </div>

        {/* Scrolling track */}
        <div className="relative">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

          <div
            ref={trackRef}
            className={`flex gap-5 overflow-x-auto pb-4 select-none ${isDragging ? "cursor-grabbing" : "cursor-grab"}`}
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            onMouseEnter={pause}
            onMouseLeave={() => { if (!isDragging) resume(); }}
            onMouseDown={onMouseDown}
            onMouseMove={onMouseMove}
            onMouseUp={onMouseUp}
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            {doubled.map((r, idx) => (
              <div
                key={`${r.name}-${idx}`}
                className="flex-shrink-0 w-[320px] bg-white border border-brand-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
                style={{ pointerEvents: isDragging ? "none" : "auto" }}
              >
                {/* Top row */}
                <div className="flex items-center justify-between mb-3">
                  <Stars count={r.rating} />
                  <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                </div>

                {/* Quote */}
                <p className="text-gray-600 text-sm leading-relaxed mb-5 line-clamp-4">&ldquo;{r.text}&rdquo;</p>

                {/* Reviewer */}
                <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                  <Avatar name={r.name} />
                  <div>
                    <p className="font-semibold text-brand-900 text-sm">{r.name}</p>
                    <p className="text-gray-400 text-xs">{r.location} · {r.date}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
