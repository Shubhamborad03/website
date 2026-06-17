/* ============================================================
  GOSFORD INN MOTEL, motion
  Personality (direction.md): "Unhurried and welcoming, soft
  power3/expo outs, rules draw in, photos breathe, nothing
  bounces, nothing snaps."
  ============================================================ */
(function () {
 "use strict";

 var reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
 var hasGSAP = typeof gsap !== "undefined";

 /* ---------- graceful image fallback chain: local → their CDN → styled panel ---------- */
 document.querySelectorAll(".ph img").forEach(function (img) {
  function fail() {
   if (!img.getAttribute("src")) return; // empty preview slot, not a failure
   var cdn = img.getAttribute("data-cdn");
   if (cdn && img.src.indexOf("cdnimages") === -1) {
    img.removeAttribute("srcset");
    img.removeAttribute("sizes");
    img.src = cdn; // retry from the motel's own Bookings247 CDN
    return;
   }
   img.closest(".ph").classList.add("is-broken");
  }
  img.addEventListener("error", fail);
  if (img.complete && img.naturalWidth === 0) fail();
 });

 if (reduced || !hasGSAP) return; // full static experience, content is visible by default

 gsap.registerPlugin(ScrollTrigger);

 /* ---------- Lenis smooth scroll, GSAP-ticker driven ---------- */
 var lenis = null;
 if (typeof Lenis !== "undefined") {
  lenis = new Lenis({ lerp: 0.1, syncTouch: false });
  lenis.on("scroll", ScrollTrigger.update);
  gsap.ticker.add(function (t) { lenis.raf(t * 1000); });
  gsap.ticker.lagSmoothing(0);
  // anchor links through Lenis
  document.querySelectorAll('a[href^="#"]').forEach(function (a) {
   a.addEventListener("click", function (e) {
    var target = document.querySelector(a.getAttribute("href"));
    if (target) { e.preventDefault(); lenis.scrollTo(target, { offset: -64 }); }
   });
  });
 }

 var EASE = "power3.out";

 /* ---------- rules draw themselves in (the board language) ---------- */
 gsap.utils.toArray(".ledger, .hero__ledger, .mumma__kick").forEach(function (el) {
  gsap.from(el, {
   scrollTrigger: { trigger: el, start: "top 88%" },
   clipPath: "inset(0 100% 0 0)",
   duration: 1.1,
   ease: "expo.out",
   clearProps: "clipPath"
  });
 });

 /* ---------- hero entrance ----------
   The photo is the LCP element: it must paint immediately (07 build
   standards), so it gets a transform-only settle, never a clip/opacity
   delay. Type choreography waits for fonts so lines split correctly. */
 gsap.from(".hero__media figcaption", { opacity: 0, duration: 0.8, delay: 0.9, ease: EASE });

 function heroIntro() {
  var tl = gsap.timeline({ defaults: { ease: EASE } });
  var title = document.querySelector(".hero__title");

  if (typeof SplitText !== "undefined") {
   var split = SplitText.create(title, { type: "lines", mask: "lines", aria: "none" });
   tl.from(split.lines, { yPercent: 110, duration: 1.1, stagger: 0.09, ease: "power4.out" });
  } else {
   tl.from(title, { opacity: 0, y: 28, duration: 1 });
  }

  tl.from(".hero__lede", { opacity: 0, y: 18, duration: 0.8 }, "-=0.6")
   .from(".board--hero .board__row", { opacity: 0, y: 14, duration: 0.7, stagger: 0.1 }, "-=0.5")
   .from(".hero__cta, .hero__proof, .hero .footnote", { opacity: 0, y: 12, duration: 0.6, stagger: 0.08 }, "-=0.4");
 }
 var heroRan = false;
 function runHeroOnce() { if (heroRan) return; heroRan = true; heroIntro(); }
 if (document.fonts && document.fonts.ready) {
  document.fonts.ready.then(runHeroOnce);
  setTimeout(runHeroOnce, 1200); // failsafe: never let a stalled fonts.ready hold the hero
 } else {
  runHeroOnce();
 }

 /* ---------- look-around band: slow drift + photo breathing (desktop only;
    mobile gets a native swipeable strip instead) ---------- */
 gsap.matchMedia().add("(min-width: 921px)", function () {
  var track = document.querySelector(".look__track");
  if (!track) return;
  gsap.to(track, {
   xPercent: -12,
   ease: "none",
   scrollTrigger: { trigger: ".look", start: "top bottom", end: "bottom top", scrub: 1 }
  });
  gsap.utils.toArray(".look__item .ph img").forEach(function (img) {
   gsap.fromTo(img, { yPercent: -6 }, {
    yPercent: 6,
    ease: "none",
    scrollTrigger: { trigger: img, start: "top bottom", end: "bottom top", scrub: 1 }
   });
  });
 });

 /* ---------- tariff board: rows arrive like entries being written in ---------- */
 ScrollTrigger.batch(".room-row", {
  start: "top 90%",
  once: true,
  onEnter: function (rows) {
   gsap.from(rows, { opacity: 0, y: 22, duration: 0.8, ease: EASE, stagger: 0.09 });
  }
 });

 /* ---------- section heads & quiet reveals (varied, not uniform) ---------- */
 [".rooms__title", ".rooms__lede", ".location__title", ".location__lede", ".book__title", ".book__lede"].forEach(function (sel) {
  var el = document.querySelector(sel);
  if (!el) return;
  gsap.from(el, {
   scrollTrigger: { trigger: el, start: "top 86%" },
   opacity: 0, y: 26, duration: 0.9, ease: EASE
  });
 });

 var featured = document.querySelector(".words__featured p");
 if (featured && typeof SplitText !== "undefined") {
  var fsplit = SplitText.create(featured, { type: "lines", mask: "lines", aria: "none" });
  gsap.from(fsplit.lines, {
   scrollTrigger: { trigger: featured, start: "top 82%" },
   yPercent: 110, duration: 1, stagger: 0.07, ease: "power4.out"
  });
 }

 gsap.utils.toArray(".word-row, .board--dist .board__row, .board--contact .board__row").forEach(function (row, i) {
  gsap.from(row, {
   scrollTrigger: { trigger: row, start: "top 92%" },
   opacity: 0, y: 14, duration: 0.7, ease: EASE
  });
 });

 /* ---------- Don't Tell Mumma: the loud moment ---------- */
 var mummaTitle = document.querySelector(".mumma__title");
 if (mummaTitle) {
  gsap.from(mummaTitle, {
   scrollTrigger: { trigger: mummaTitle, start: "top 85%" },
   opacity: 0, y: 60, duration: 1.2, ease: "expo.out"
  });
  gsap.from(".mumma__copy, .mumma__quote, .mumma__hours", {
   scrollTrigger: { trigger: ".mumma__copy", start: "top 88%" },
   opacity: 0, y: 24, duration: 0.9, ease: EASE, stagger: 0.12
  });
 }

 /* marquee, slow loop, scroll-velocity reactive */
 var mTrack = document.querySelector(".marquee__track");
 if (mTrack) {
  var loop = gsap.to(mTrack, { xPercent: -50, ease: "none", duration: 28, repeat: -1 });
  if (lenis) {
   lenis.on("scroll", function (e) {
    var v = Math.min(Math.abs(e.velocity || 0) / 10, 3);
    gsap.to(loop, { timeScale: 1 + v, duration: 0.4, overwrite: true });
   });
  }
 }

 /* ---------- rooms hover → sticky preview crossfade (desktop only) ---------- */
 var mq = window.matchMedia("(min-width: 921px)");
 var pA = document.getElementById("previewA");
 var pB = document.getElementById("previewB");
 var pCap = document.getElementById("previewCap");
 if (pA && pB && mq.matches) {
  var front = pA, back = pB, current = pA.src;
  document.querySelectorAll(".room-row").forEach(function (row) {
   row.addEventListener("mouseenter", function () {
    var src = row.getAttribute("data-img");
    if (!src || current.indexOf(src) !== -1) return;
    current = src;
    back.src = src;
    if (pCap) pCap.textContent = row.getAttribute("data-cap") || "";
    gsap.set(back, { zIndex: 2, opacity: 0, scale: 1.05 });
    gsap.set(front, { zIndex: 1 });
    gsap.to(back, { opacity: 1, scale: 1, duration: 0.55, ease: EASE });
    var swap = front; front = back; back = swap;
   });
  });
 }
})();
