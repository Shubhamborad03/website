/* ============================================================
  Helen's Swim School, motion (helens.css design system)
  Gentle and water-like: soft floats, slow drifts, no bounce.
  Hero entrance has a setTimeout failsafe so the hero can
  NEVER hang invisible if fonts or GSAP stall.
  ============================================================ */
(function () {
 "use strict";

 document.documentElement.classList.add("js");

 var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
 var hasGSAP = typeof gsap !== "undefined";

 /* ---------- mobile nav toggle (works without GSAP) ---------- */
 var navToggle = document.querySelector(".nav-toggle");
 var siteNav = document.querySelector(".site-nav");
 if (navToggle && siteNav) {
  navToggle.addEventListener("click", function () {
   var open = navToggle.getAttribute("aria-expanded") === "true";
   navToggle.setAttribute("aria-expanded", open ? "false" : "true");
   siteNav.classList.toggle("open");
  });
 }

 /* ---------- honest demo form ---------- */
 var form = document.querySelector(".enrol-form");
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
    tl.from(split.lines, { yPercent: 115, duration: 1.15, stagger: 0.1 }, 0.25);
    splitOK = true;
   } catch (err) { /* fall through */ }
  }
  if (!splitOK && h1) {
   tl.fromTo(h1, { opacity: 0, y: 32 }, { opacity: 1, y: 0, duration: 1.05 }, 0.25);
  }

  tl.to(".hero-sub",  { opacity: 1, y: 0, duration: 0.9 }, "-=0.65")
   .to(".hero-ctas", { opacity: 1, y: 0, duration: 0.9 }, "-=0.7")
   .to(".hero-proof", { opacity: 1, y: 0, duration: 0.9 }, "-=0.7");

  /* slow ken-burns drift on the real bush-pool photo */
  gsap.fromTo(".hero-media > img", { scale: 1.07 }, { scale: 1, duration: 16, ease: "sine.out" });
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

 /* hero photo gentle parallax on scroll */
 gsap.to(".hero-media > img", { yPercent: 10, ease: "none",
  scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: 1 } });

 /* ---------- stat cards float up ---------- */
 gsap.from(".stat-card", { opacity: 0, y: 28, duration: 0.9, ease: "power3.out", stagger: 0.12,
  scrollTrigger: { trigger: ".stats", start: "top 90%" } });

 /* ---------- eyebrow rule draws in ---------- */
 var ebStyle = document.createElement("style");
 ebStyle.textContent = ".js .eyebrow::before{transform:scaleX(0);transition:transform .9s cubic-bezier(.22,.61,.36,1);}.js .eyebrow.drawn::before{transform:scaleX(1);}";
 document.head.appendChild(ebStyle);
 document.querySelectorAll(".eyebrow").forEach(function (el) {
  ScrollTrigger.create({ trigger: el, start: "top 92%",
   onEnter: function () { el.classList.add("drawn"); } });
 });

 /* ---------- generic staggered reveals ---------- */
 document.querySelectorAll(".reveal").forEach(function (el) {
  gsap.to(el, { opacity: 1, y: 0, duration: 0.95, ease: "power3.out",
   scrollTrigger: { trigger: el, start: "top 88%" } });
 });

 /* grouped reveals (cards surface in sequence) */
 [".water-list", ".class-grid", ".news-grid", ".price-card", ".enrol-ledger"].forEach(function (sel) {
  var group = document.querySelector(sel);
  if (!group) return;
  var items = group.children;
  if (!items.length) return;
  gsap.from(items, { opacity: 0, y: 24, duration: 0.9, ease: "power3.out", stagger: 0.1,
   scrollTrigger: { trigger: group, start: "top 84%" } });
 });

 /* ---------- 1993 numeral drifts ---------- */
 gsap.fromTo(".story-year", { yPercent: -4 }, { yPercent: -16, ease: "none",
  scrollTrigger: { trigger: ".story", start: "top bottom", end: "bottom top", scrub: 1 } });

 window.addEventListener("load", function () { ScrollTrigger.refresh(); });
})();
