"use client";

import { useEffect, useRef, useState, useCallback } from "react";

const reviews = [
  { name: "Abbie", text: "Sunny is very knowledgeable. Great service, reasonable pricing and excellent communication. Highly recommend for any shower/bathroom issues.", date: "Recent" },
  { name: "Katie Tilden", text: "We are thrilled with Sunny's work resealing and regrouting our main shower and en suite shower. We also took the opportunity to replace the old shower screens with frameless screens. It's been a great update. Sunny was a pleasure to deal with and clearly takes a lot of pride in his work.", date: "1 week ago" },
  { name: "Lam Sing", text: "Sunny has done a wonderful job restoring our main bathroom shower - regrouting and resealing as well as removing broken wall tiles and retiling the shower floor. A welcome update after approximately twenty years.", date: "1 month ago" },
  { name: "Neville Partridge", text: "What a great job that's what our tenants said. They could not believe how the old shower came back like new. Thanks Sunny for helping me and taking the time to go to Straddie. Well done E. Z. Shower repairs and tiling.", date: "1 month ago" },
  { name: "Stephen Ng", text: "Great service. Managed to get the job done in two days in an extremely meticulous manner. Will definitely hire again.", date: "1 month ago" },
  { name: "Dion Muller", text: "Awesome quality work, prompt and great communication. Really helped us out on a tight schedule. Couldn't be happier with the result - highly recommend!", date: "2 months ago" },
  { name: "Stephanie", text: "Had Sonny regrout our ensuite shower, affordable price, he was polite, professional and communicated every step. We had an issue however Sonny promptly rectified the issue and was always very responsive.", date: "2 months ago" },
  { name: "Su Ann Peel", text: "The scope of work included regrouting for both ensuite and main shower floors, removal and disposal of old shower screens, installation of new screens, sealant and hydro sealer application, as well as sealing the floor waste.", date: "4 months ago" },
  { name: "Jacki Ferro", text: "Fabulous, timely service. Shower looks like new without cost of replacement! Mukesh investigated the problem thoroughly and explained process throughout. Very happy to recommend EZ shower repairs.", date: "4 months ago" },
  { name: "Sivaranjani M.", text: "Sunny and the team did great job in fixing our leaking shower and renovation the bathroom as well, we highly recommend EZ Shower team for tiling project.", date: "5 months ago" },
  { name: "Lauren Manuel", text: "Excellent experience dealing with Sunny. He gave us a truly honest appraisal of our bathroom situation and realistic options (not the usual line from other waterproofers which is - whole new bathroom $$$$$). He regrouted/resealed two leaky showers.", date: "6 months ago" },
  { name: "Helen Cooper", text: "Good advice provided and a good outcome for regrouting and resealing shower recess - leak is now sealed. Service was prompt, efficient and neat. Sunny was helpful, respectful and courteous.", date: "6 months ago" },
  { name: "Stephanie W.", text: "Sunny has done a wonderful job solving my waterproofing problem in my apartment. Professional and completed on time. Highly recommend him. I know I'll ask Sunny's help again for my future bathroom problems.", date: "6 months ago" },
  { name: "Mark Markonda", text: "Sunny has done an incredible job with my bathroom leakage problem with waterproofing and tile replacement. He did exactly as he promised in time with a very reasonable and fair quote. Very professional and from start to finish everything was done perfectly.", date: "7 months ago" },
  { name: "Timothy Middlemiss", text: "We highly recommend EZ Shower Repairs. Sunny is highly skilled at repairing showers and bathrooms and we have been extremely happy with the work he has done for us.", date: "7 months ago" },
  { name: "Selbie Tower", text: "Sunny has just completed a fabulous job of retiling our bathroom including replacing half the floor and all new waterproofing. Professional, efficient, interactive with us and delivered when and how he promised.", date: "8 months ago" },
  { name: "Grey Wolf", text: "We engaged Mukesh from EZ Shower Repair and Tiling to regrout and replace the floor waste in our Ensuite shower. We are very pleased with the result. We found Mukesh to be courteous, timely and carried out the work satisfactorily.", date: "10 months ago" },
  { name: "Dev Padda", text: "Absolutely fantastic work! The team was professional, punctual, and paid great attention to detail. Our floors look amazing. Highly recommend for any tiling needs!", date: "10 months ago" },
  { name: "Cameron Urquhart", text: "After receiving a number of quotes (expensive) from larger companies who wanted to rebuild the bathrooms, the quote from Sunny was very reasonable & realistic - no over quoting. The work done was outstanding and both showers look amazing.", date: "11 months ago" },
  { name: "Nate Y", text: "Sunny was very easy to deal with. Good communication and clearly identified what needed to be fixed. Received other quotes from a bigger company that just wanted to gut the entire bathroom to milk you with a big bill.", date: "11 months ago" },
  { name: "Bill Kernahan", text: "A great job. Sunny did an extensive outdoor balcony repair and waterproofing project. He was on time each day and left the site clean and safe. The agreed price was reasonable.", date: "11 months ago" },
  { name: "Tracy Bergan", text: "I needed my shower repaired quickly, when I contacted Sunny, who was extremely helpful he quoted the job, and was also able to complete the work quickly. I would highly recommend Ezishower for your bathroom renovations.", date: "11 months ago" },
  { name: "Geoff Wong", text: "I put a hole in my bathroom wall while attempting a DIY project. 24 hours later, Mukesh fixed the issue with a reasonable, practical and affordable solution. He was responsive and worked professionally and efficiently.", date: "11 months ago" },
  { name: "Tushar Chandel", text: "Had an amazing experience with EZ Shower Repair & Tiling! From start to finish, the service was top-notch. Sunny did an incredible job — super professional, skilled, and efficient. He made sure everything was done to perfection.", date: "1 year ago" },
  { name: "Tracey Donkin", text: "Sunny did an amazing job at fixing our shower leak!! We can't thank him enough and we will be recommending him to any of our friends, should they require help with their bathrooms. Thanks a million, Sunny!!", date: "1 year ago" },
  { name: "Ranita Lal", text: "Excellent service! Sunny was quick to return my calls, excellent communication and his pricing was very reasonable. He did an amazing and very professional job. I highly recommend EZ Shower Repair and Tiling.", date: "1 year ago" },
  { name: "Michael", text: "Sunny provided great service and workmanship, responded quickly to our request, inspected the requirements personally, provided a timely and value for money quotation and completed all works to our satisfaction.", date: "1 year ago" },
  { name: "E B", text: "We are very happy with the quality of work and pricing. Sunny was very helpful giving us lots of input when we have issue with our shower floor tile. Job done on time and very tidy. Thank you Sunny.", date: "1 year ago" },
  { name: "Yu-chi Chen", text: "The job is detail and effective. The price is fair. Also Sunny only recommended what you need to do. Do not ask you spend the money you do not have to spend. Before I choose him I compare different companies.", date: "1 year ago" },
  { name: "Prabhjit Panesar", text: "Sunny is very professional, reasonable and reliable. While other companies want to demolish whole shower, Sunny from EZ shower repair and tiling found and fixed issue with very reasonable price.", date: "1 year ago" },
  { name: "Vincenza S.", text: "Very professional, excellent communication and speedy service. Cannot recommend highly enough! So happy I found EZ shower repair and tiling.", date: "1 year ago" },
  { name: "Manav Chawla", text: "Excellent service! Professional, on time, and high-quality work. Our shower and tiles look amazing. Highly recommend!", date: "1 year ago" },
  { name: "Anu Bassi Ghai", text: "Highly recommended EZ Shower Repair and tiling. Prompt professional service great product supplied and fitted. Very happy with the result. Great person Sunny.", date: "1 year ago" },
  { name: "Steve Latimore", text: "Great workmanship, reliable and prompt. Very friendly, well priced. Would use again.", date: "1 year ago" },
  { name: "Kevin Faxt", text: "Great job done, very reliable. Happy with them from start to finish.", date: "1 year ago" },
  { name: "Robert Patterson", text: "Immaculate job replacing a damaged soap dish tile at a very reasonable price.", date: "1 year ago" },
  { name: "Matt", text: "Excellent service all round. Sunny was quick to respond to my enquiry and book in a time to assess my shower.", date: "1 year ago" },
  { name: "Hudson Jefferies", text: "Sunny was very helpful and patient. He provided a range of options for us which we really needed given our budget constraints. The work we did request was completed to a high degree and Sunny even called to follow up.", date: "3 weeks ago" },
  { name: "Sai Kiran", text: "Highly Recommend! I had a fantastic experience with EZ Shower Repair and Tiling. The team was professional and delivered outstanding results.", date: "1 year ago" },
  { name: "Kashish Kalra", text: "Outstanding Service & Quality! I had a fantastic experience with EZ Shower Repair and Tiling from the initial consultation to the final result.", date: "1 year ago" },
];

function Stars() {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <svg key={i} className="h-4 w-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function Avatar({ name }: { name: string }) {
  const initials = name.split(" ").map((n) => n[0]).join("").slice(0, 2).toUpperCase();
  const palette = ["bg-ocean-500", "bg-ocean-600", "bg-ocean-700", "bg-navy-700", "bg-navy-800", "bg-navy-900"];
  const color = palette[name.charCodeAt(0) % palette.length];
  return (
    <div className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full ${color} text-sm font-bold text-white`}>
      {initials}
    </div>
  );
}

export default function TestimonialsSection() {
  const trackRef = useRef<HTMLDivElement>(null);
  const animRef = useRef<number>(0);
  const posRef = useRef(0);
  const pausedRef = useRef(false);
  const [isDragging, setIsDragging] = useState(false);
  const dragStart = useRef({ x: 0, scrollLeft: 0 });

  const tick = useCallback(() => {
    const el = trackRef.current;
    if (!el || pausedRef.current) {
      animRef.current = requestAnimationFrame(tick);
      return;
    }

    posRef.current += 0.5;

    const halfWidth = el.scrollWidth / 2;
    if (posRef.current >= halfWidth) posRef.current -= halfWidth;

    el.scrollLeft = posRef.current;
    animRef.current = requestAnimationFrame(tick);
  }, []);

  useEffect(() => {
    animRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(animRef.current);
  }, [tick]);

  const pause = () => { pausedRef.current = true; };
  const resume = () => { pausedRef.current = false; };

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
    setTimeout(() => { pausedRef.current = false; }, 800);
  };

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

  const doubled = [...reviews, ...reviews];

  return (
    <section className="section-padding bg-navy-950" id="reviews">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Header */}
        <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="font-heading text-sm font-semibold uppercase tracking-wider text-ocean-400">
              Testimonials
            </span>
            <h2 className="mt-2 font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              What Our Customers Say
            </h2>
            <p className="mt-3 text-sm text-navy-400">
              Drag or scroll to browse · Auto-scrolling
            </p>
          </div>

          {/* Google badge */}
          <div className="flex w-fit items-center gap-4 rounded-2xl border border-navy-800 bg-navy-900/60 px-6 py-4">
            <svg className="h-8 w-8" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-heading text-2xl font-bold text-white">5.0</span>
                <Stars />
              </div>
              <p className="mt-0.5 text-xs text-navy-400">40+ reviews on Google</p>
            </div>
          </div>
        </div>

        {/* Scrolling track */}
        <div className="relative">
          {/* Fade edges */}
          <div className="pointer-events-none absolute bottom-0 left-0 top-0 z-10 w-16 bg-gradient-to-r from-navy-950 to-transparent" />
          <div className="pointer-events-none absolute bottom-0 right-0 top-0 z-10 w-16 bg-gradient-to-l from-navy-950 to-transparent" />

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
                className="w-[320px] flex-shrink-0 rounded-2xl border border-navy-800 bg-navy-900/50 p-6 transition-shadow hover:shadow-lg hover:shadow-ocean-500/5"
                style={{ pointerEvents: isDragging ? "none" : "auto" }}
              >
                {/* Top row */}
                <div className="mb-3 flex items-center justify-between">
                  <Stars />
                  <svg className="h-5 w-5 flex-shrink-0" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                </div>

                {/* Quote */}
                <p className="mb-5 text-sm leading-relaxed text-navy-200 line-clamp-4">
                  &ldquo;{r.text}&rdquo;
                </p>

                {/* Reviewer */}
                <div className="flex items-center gap-3 border-t border-navy-800 pt-4">
                  <Avatar name={r.name} />
                  <div>
                    <p className="text-sm font-semibold text-white">{r.name}</p>
                    <p className="text-xs text-navy-400">{r.date}</p>
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
