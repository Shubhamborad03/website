/* ============================================================
   HELEN'S SWIM SCHOOL  ·  motion
   Gentle, buoyant, water-like. GSAP + ScrollTrigger + SplitText + Lenis.
   Libraries are injected AFTER first paint so content is fully visible
   without JS. Hero entrance is gated on fonts.ready AND a 1200ms timeout
   so it can never hang invisible. Respects prefers-reduced-motion.
   ============================================================ */
(function () {
  "use strict";

  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* mark JS active so CSS can hide-then-reveal (only when we will animate) */
  if (!reduce) document.documentElement.classList.add("js");

  /* ---------- mobile nav (no libs needed) ---------- */
  (function nav() {
    var toggle = document.querySelector(".nav-toggle");
    var menu = document.querySelector(".site-nav");
    if (!toggle || !menu) return;
    var scrim = document.createElement("div");
    scrim.className = "nav-scrim";
    document.body.appendChild(scrim);
    function set(open) {
      menu.classList.toggle("open", open);
      scrim.classList.toggle("open", open);
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    }
    toggle.addEventListener("click", function () {
      set(!menu.classList.contains("open"));
    });
    scrim.addEventListener("click", function () { set(false); });
    menu.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () { set(false); });
    });
  })();

  /* If reduced motion, leave everything visible and stop here. */
  if (reduce) return;

  /* ---------- library sources (CDN, after first paint) ---------- */
  var CDN = {
    gsap: "https://cdn.jsdelivr.net/npm/gsap@3.13.0/dist/gsap.min.js",
    st: "https://cdn.jsdelivr.net/npm/gsap@3.13.0/dist/ScrollTrigger.min.js",
    split: "https://cdn.jsdelivr.net/npm/gsap@3.13.0/dist/SplitText.min.js",
    lenis: "https://cdn.jsdelivr.net/npm/lenis@1.3.4/dist/lenis.min.js"
  };

  function loadScript(src) {
    return new Promise(function (resolve) {
      var s = document.createElement("script");
      s.src = src;
      s.async = false;
      s.onload = resolve;
      s.onerror = resolve; /* never block on a failed CDN */
      document.head.appendChild(s);
    });
  }

  /* ---------- HERO FAILSAFE: run once, gated two ways ---------- */
  var heroRan = false;
  function runHeroOnce() {
    if (heroRan) return;
    heroRan = true;

    if (!window.gsap) {
      /* gsap never arrived: make sure nothing is left hidden */
      document.querySelectorAll(".reveal,.rung,[data-hero]").forEach(function (el) {
        el.classList.add("is-in");
        el.style.opacity = "1";
        el.style.transform = "none";
      });
      return;
    }
    var gsap = window.gsap;

    /* hero text rise */
    var heroBits = document.querySelectorAll("[data-hero]");
    if (heroBits.length) {
      gsap.to(heroBits, {
        opacity: 1, y: 0, duration: 0.9, stagger: 0.09,
        ease: "power3.out", clearProps: "transform"
      });
    }

    /* hero headline split, gentle word lift */
    var h1 = document.querySelector("[data-split]");
    if (h1 && window.SplitText) {
      try {
        var split = new window.SplitText(h1, { type: "words" });
        gsap.from(split.words, {
          yPercent: 60, opacity: 0, duration: 0.7,
          stagger: 0.04, ease: "power3.out"
        });
      } catch (e) { /* ignore */ }
    }

    /* the ladder rungs rise and settle, bottom rung first */
    var rungs = document.querySelectorAll(".ladder .rung");
    if (rungs.length && window.ScrollTrigger) {
      var ordered = Array.prototype.slice.call(rungs).reverse();
      gsap.to(ordered, {
        opacity: 1, y: 0, scale: 1, duration: 0.75,
        ease: "back.out(1.3)", stagger: 0.12,
        scrollTrigger: { trigger: ".ladder", start: "top 82%" }
      });
    } else if (rungs.length) {
      rungs.forEach(function (r) { r.classList.add("is-in"); });
    }
  }

  /* ---------- generic reveals + per-page motion ---------- */
  function initScroll() {
    if (!window.gsap || !window.ScrollTrigger) {
      document.querySelectorAll(".reveal").forEach(function (el) {
        el.classList.add("is-in");
      });
      return;
    }
    var gsap = window.gsap;
    gsap.registerPlugin(window.ScrollTrigger);

    document.querySelectorAll(".reveal").forEach(function (el) {
      window.ScrollTrigger.create({
        trigger: el, start: "top 86%",
        onEnter: function () { el.classList.add("is-in"); },
        once: true
      });
    });

    /* lessons-page stage rows: gentle climb */
    var rows = document.querySelectorAll(".stage-list .stage-row");
    if (rows.length) {
      gsap.set(rows, { opacity: 0, y: 30 });
      gsap.to(rows, {
        opacity: 1, y: 0, duration: 0.7, ease: "power3.out", stagger: 0.1,
        scrollTrigger: { trigger: ".stage-list", start: "top 80%" }
      });
    }

    /* soft parallax drift on big media on desktop */
    if (window.matchMedia("(min-width: 900px)").matches) {
      document.querySelectorAll(".immersive > img, .dive > img, .page-hero > img").forEach(function (img) {
        gsap.fromTo(img, { yPercent: -6 }, {
          yPercent: 6, ease: "none",
          scrollTrigger: { trigger: img, scrub: true }
        });
      });
    }
  }

  /* ---------- Lenis smooth scroll ---------- */
  function initLenis() {
    if (!window.Lenis) return;
    var lenis = new window.Lenis({ duration: 1.1, smoothWheel: true });
    function raf(t) { lenis.raf(t); requestAnimationFrame(raf); }
    requestAnimationFrame(raf);
    if (window.ScrollTrigger) {
      lenis.on("scroll", window.ScrollTrigger.update);
    }
  }

  /* prep hero bits to hidden state so they can rise */
  document.querySelectorAll("[data-hero]").forEach(function (el) {
    el.style.opacity = "0";
    el.style.transform = "translateY(22px)";
  });

  /* FAILSAFE timer: fire hero even if fonts.ready stalls */
  setTimeout(runHeroOnce, 1200);

  function boot() {
    Promise.all([
      loadScript(CDN.gsap),
      loadScript(CDN.st),
      loadScript(CDN.split),
      loadScript(CDN.lenis)
    ]).then(function () {
      initLenis();
      initScroll();
      /* gate hero on fonts, but the 1200ms timer already covers a stall */
      if (document.fonts && document.fonts.ready) {
        document.fonts.ready.then(runHeroOnce);
      } else {
        runHeroOnce();
      }
      runHeroOnce(); /* extra guarantee */
    });
  }

  /* load libs after first paint */
  if (window.requestIdleCallback) {
    requestIdleCallback(boot, { timeout: 600 });
  } else {
    setTimeout(boot, 60);
  }
})();
