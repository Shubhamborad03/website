/* ============================================================
  Pelican Boat Hire, motion (pelican.css design system)
  Lively but smooth: power3.out / expo.out, no bounce.
  Hero entrance has a setTimeout failsafe so the hero can
  NEVER hang invisible if fonts/GSAP stall.
  ============================================================ */
(function () {
 "use strict";

 document.documentElement.classList.add("js");

 var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
 var hasGSAP = typeof gsap !== "undefined";

 /* ---------- fleet ledger expand/collapse (works without GSAP too) ---------- */
 document.querySelectorAll(".row-head").forEach(function (head) {
  var body = document.getElementById(head.getAttribute("aria-controls"));
  if (!body) return;
  head.addEventListener("click", function () {
   var open = head.getAttribute("aria-expanded") === "true";
   if (open) {
    head.setAttribute("aria-expanded", "false");
    if (hasGSAP && !reduceMotion) {
     gsap.to(body, { height: 0, opacity: 0, duration: 0.5, ease: "power3.inOut",
      onComplete: function () { body.hidden = true; gsap.set(body, { clearProps: "all" }); } });
    } else { body.hidden = true; }
   } else {
    head.setAttribute("aria-expanded", "true");
    body.hidden = false;
    if (hasGSAP && !reduceMotion) {
     gsap.fromTo(body, { height: 0, opacity: 0 },
      { height: "auto", opacity: 1, duration: 0.65, ease: "power3.out",
       onComplete: function () { gsap.set(body, { clearProps: "height" }); } });
    }
   }
  });
 });

 /* ---------- honest demo form ---------- */
 var form = document.querySelector(".enquire-form");
 if (form) {
  form.addEventListener("submit", function (e) {
   e.preventDefault();
   var note = form.querySelector(".form-note");
   if (note) note.hidden = false;
  });
 }

 /* ---------- no motion path: reveal everything ---------- */
 if (!hasGSAP || reduceMotion) {
  document.documentElement.classList.remove("js");
  return;
 }

 gsap.registerPlugin(ScrollTrigger);

 /* Lenis smooth scroll on the GSAP ticker */
 if (typeof Lenis !== "undefined") {
  var lenis = new Lenis({ duration: 1.1, syncTouch: false });
  lenis.on("scroll", ScrollTrigger.update);
  gsap.ticker.add(function (t) { lenis.raf(t * 1000); });
  gsap.ticker.lagSmoothing(0);
  document.querySelectorAll('a[href^="#"]').forEach(function (a) {
   a.addEventListener("click", function (e) {
    var target = document.querySelector(a.getAttribute("href"));
    if (target) { e.preventDefault(); lenis.scrollTo(target, { offset: -10 }); }
   });
  });
 }

 /* ---------- HERO entrance ---------- */
 function heroEntrance() {
  var tl = gsap.timeline({ defaults: { ease: "expo.out" } });
  tl.to(".hero-kicker", { opacity: 1, y: 0, duration: 0.9 }, 0.1);

  var h1 = document.querySelector(".hero-h1");
  var splitOK = false;
  if (typeof SplitText !== "undefined" && h1) {
   try {
    var split = SplitText.create(h1, { type: "lines", linesClass: "sp-line-inner", mask: "lines" });
    gsap.set(h1, { opacity: 1 });
    tl.from(split.lines, { yPercent: 115, duration: 1.2, stagger: 0.1 }, 0.25);
    splitOK = true;
   } catch (err) { /* fall through */ }
  }
  if (!splitOK && h1) {
   tl.fromTo(h1, { opacity: 0, y: 34 }, { opacity: 1, y: 0, duration: 1.1 }, 0.25);
  }

  tl.to(".hero-sub",  { opacity: 1, y: 0, duration: 0.9 }, "-=0.7")
   .to(".hero-ctas", { opacity: 1, y: 0, duration: 0.9 }, "-=0.7")
   .to(".hero-proof", { opacity: 1, y: 0, duration: 0.9 }, "-=0.7");

  /* slow ken-burns drift on the real photo */
  gsap.fromTo(".hero-media img", { scale: 1.06 }, { scale: 1, duration: 14, ease: "sine.out" });
 }

 /* pre-set y offsets, then run, with a hard failsafe so it can never hang invisible */
 gsap.set([".hero-kicker", ".hero-sub", ".hero-ctas", ".hero-proof"], { y: 22 });
 var heroRan = false;
 function runHeroOnce() { if (heroRan) return; heroRan = true; heroEntrance(); }
 if (document.fonts && document.fonts.ready) {
  document.fonts.ready.then(runHeroOnce);
  setTimeout(runHeroOnce, 1200);
 } else {
  runHeroOnce();
 }

 /* hero photo subtle parallax on scroll */
 gsap.to(".hero-media img", { yPercent: 12, ease: "none",
  scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: 1 } });

 /* ---------- eyebrow rule draws in (CSS class toggled on scroll) ---------- */
 var ebStyle = document.createElement("style");
 ebStyle.textContent = ".js .eyebrow.draw::before{transform:scaleX(0);transition:transform .9s cubic-bezier(.22,.61,.36,1);}.js .eyebrow.draw.drawn::before{transform:scaleX(1);}";
 document.head.appendChild(ebStyle);
 document.querySelectorAll(".eyebrow.draw").forEach(function (el) {
  ScrollTrigger.create({ trigger: el, start: "top 90%",
   onEnter: function () { el.classList.add("drawn"); } });
 });

 /* ---------- generic staggered reveals ---------- */
 [".day-grid", ".infra-list", ".story-timeline"].forEach(function (sel) {
  var group = document.querySelector(sel);
  if (!group) return;
  var items = group.querySelectorAll(".reveal");
  if (!items.length) return;
  gsap.to(items, { opacity: 1, y: 0, duration: 1, ease: "power3.out", stagger: 0.12,
   scrollTrigger: { trigger: group, start: "top 82%" } });
 });

 /* ---------- fleet rows surface in sequence ---------- */
 document.querySelectorAll(".tier").forEach(function (tier) {
  var rows = tier.querySelectorAll(".boat-card");
  if (!rows.length) return;
  gsap.from(rows, { opacity: 0, y: 24, duration: 0.9, ease: "power3.out", stagger: 0.08,
   scrollTrigger: { trigger: tier, start: "top 84%" } });
 });

 /* ---------- 1957 numeral drifts ---------- */
 gsap.fromTo(".story-year", { yPercent: -6 }, { yPercent: -22, ease: "none",
  scrollTrigger: { trigger: ".story", start: "top bottom", end: "bottom top", scrub: 1 } });

 /* ---------- horizontal auto-scroll marquees (drift strip + reviews) ---------- */
 function marquee(trackSel, setSel, speed) {
  var track = document.querySelector(trackSel);
  if (!track) return;
  var set = track.querySelector(setSel);
  if (!set) return;
  var gap = parseFloat(getComputedStyle(track).columnGap || getComputedStyle(track).gap || 0) || 0;
  function run() {
   var dist = set.offsetWidth + gap;
   if (!dist) return;
   var tw = gsap.to(track, { x: -dist, duration: Math.max(dist / speed, 18), ease: "none", repeat: -1 });
   track.addEventListener("mouseenter", function () { gsap.to(tw, { timeScale: 0.15, duration: 0.6 }); });
   track.addEventListener("mouseleave", function () { gsap.to(tw, { timeScale: 1, duration: 0.6 }); });
  }
  run();
 }
 marquee(".drift-track", ".drift-set", 70);
 marquee(".proof-track", ".proof-set", 46); /* reviews drift slowly right to left */

 window.addEventListener("load", function () { ScrollTrigger.refresh(); });
})();
