/* ============================================================
   Pelican Boat Hire — motion choreography
   Personality (direction.md): "The river at 8am — everything
   drifts, nothing snaps." expo.out / power3.out, no bounce.
   ============================================================ */

(function () {
  "use strict";

  document.documentElement.classList.add("js");

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var hasGSAP = typeof gsap !== "undefined";

  /* ---------- ledger expand/collapse (works with or without GSAP) ---------- */
  document.querySelectorAll(".row-head").forEach(function (head) {
    var body = document.getElementById(head.getAttribute("aria-controls"));
    head.addEventListener("click", function () {
      var open = head.getAttribute("aria-expanded") === "true";
      if (open) {
        head.setAttribute("aria-expanded", "false");
        if (hasGSAP && !reduceMotion) {
          gsap.to(body, {
            height: 0, opacity: 0, duration: 0.55, ease: "power3.inOut",
            onComplete: function () { body.hidden = true; gsap.set(body, { clearProps: "all" }); }
          });
        } else {
          body.hidden = true;
        }
      } else {
        head.setAttribute("aria-expanded", "true");
        body.hidden = false;
        if (hasGSAP && !reduceMotion) {
          gsap.fromTo(body,
            { height: 0, opacity: 0 },
            { height: "auto", opacity: 1, duration: 0.7, ease: "power3.out",
              onComplete: function () { gsap.set(body, { clearProps: "height" }); } }
          );
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

  /* ---------- motion (skipped entirely on reduced motion) ---------- */
  if (!hasGSAP || reduceMotion) {
    // Static fallback: make everything visible.
    document.documentElement.classList.remove("js");
    return;
  }

  gsap.registerPlugin(ScrollTrigger);

  /* Lenis smooth scroll, driven by the GSAP ticker (05-motion.md) */
  if (typeof Lenis !== "undefined") {
    var lenis = new Lenis({ duration: 1.2, syncTouch: false });
    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add(function (t) { lenis.raf(t * 1000); });
    gsap.ticker.lagSmoothing(0);
    // anchor links through lenis
    document.querySelectorAll('a[href^="#"]').forEach(function (a) {
      a.addEventListener("click", function (e) {
        var target = document.querySelector(a.getAttribute("href"));
        if (target) { e.preventDefault(); lenis.scrollTo(target, { offset: -20 }); }
      });
    });
  }

  /* ---------- HERO entrance: riverline → headline lines → sub/CTAs → water ---------- */
  function heroEntrance() {
    var tl = gsap.timeline({ defaults: { ease: "expo.out" } });

    tl.to(".hero-kicker .riverline-rule", { scaleX: 1, duration: 1.1 }, 0.1)
      .to(".hero-kicker", { opacity: 1, y: 0, duration: 0.9 }, 0.25);

    var h1 = document.querySelector(".hero-h1");
    var splitOK = false;
    if (typeof SplitText !== "undefined") {
      try {
        var split = SplitText.create(h1, { type: "lines", linesClass: "sp-line-inner", mask: "lines" });
        tl.from(split.lines, { yPercent: 110, duration: 1.3, stagger: 0.09 }, 0.35);
        splitOK = true;
      } catch (err) { /* fall through */ }
    }
    if (!splitOK) {
      tl.from(h1, { opacity: 0, y: 36, duration: 1.2 }, 0.35);
    }

    tl.to(".hero-sub",   { opacity: 1, y: 0, duration: 1 },   "-=0.8")
      .to(".hero-ctas",  { opacity: 1, y: 0, duration: 1 },   "-=0.85")
      .to(".hero-proof", { opacity: 1, y: 0, duration: 1 },   "-=0.85")
      .from(".hero-river .band", { yPercent: 30, opacity: 0, duration: 1.4, stagger: 0.08 }, 0.2)
      .from(".jetty", { yPercent: 40, opacity: 0, duration: 1.2 }, "-=1.0")
      .from(".pelican-drift", { opacity: 0, x: -30, duration: 1.4 }, "-=0.9");
  }

  /* CSS pre-hides the hero sub/ctas/proof under .js — so the entrance MUST run.
     Never let a stalled fonts.ready leave them invisible: failsafe at 1200ms. */
  var heroRan = false;
  function runHeroOnce() { if (heroRan) return; heroRan = true; heroEntrance(); }
  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(runHeroOnce);
    setTimeout(runHeroOnce, 1200);
  } else {
    runHeroOnce();
  }

  /* ---------- signature 1: hero water parallax + pelican drift ---------- */
  gsap.to(".band-1", { yPercent: -14, ease: "none",
    scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: 1 } });
  gsap.to(".band-2", { yPercent: -8, ease: "none",
    scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: 1 } });
  gsap.to(".band-3", { yPercent: -4, ease: "none",
    scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: 1 } });
  gsap.to(".hero-sun", { yPercent: 26, ease: "none",
    scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: 1 } });

  // the pelican drifts on its own clock — slow, endless
  gsap.to(".pelican-drift", {
    x: "9vw", duration: 26, ease: "sine.inOut", yoyo: true, repeat: -1, delay: 2
  });
  gsap.to(".pelican-drift", {
    y: 6, duration: 3.6, ease: "sine.inOut", yoyo: true, repeat: -1
  });

  /* ---------- riverline rules draw in on scroll (THE primitive) ---------- */
  document.querySelectorAll(".riverline-rule").forEach(function (rule) {
    if (rule.closest(".hero")) return; // hero handled in entrance
    gsap.to(rule, {
      scaleX: 1, duration: 1.2, ease: "expo.out",
      scrollTrigger: { trigger: rule, start: "top 88%" }
    });
  });

  /* ---------- generic reveals (choreographed, staggered per group) ---------- */
  [".day-list", ".proof-grid", ".infra-list", ".story-timeline"].forEach(function (sel) {
    var group = document.querySelector(sel);
    if (!group) return;
    var items = group.querySelectorAll(".reveal");
    if (!items.length) return;
    gsap.to(items, {
      opacity: 1, y: 0, duration: 1.1, ease: "power3.out", stagger: 0.14,
      scrollTrigger: { trigger: group, start: "top 80%" }
    });
  });

  /* ---------- signature 2: ledger rules + rows surface in sequence ---------- */
  var ledgerRows = document.querySelectorAll(".ledger-row");
  if (ledgerRows.length) {
    gsap.from(ledgerRows, {
      opacity: 0, y: 26, duration: 1, ease: "power3.out", stagger: 0.09,
      scrollTrigger: { trigger: ".ledger", start: "top 82%" }
    });
    gsap.from(".ledger-row", {
      borderTopColor: "rgba(194,176,152,0)", duration: 1.4, ease: "power2.out", stagger: 0.09,
      scrollTrigger: { trigger: ".ledger", start: "top 82%" }
    });
  }

  /* ---------- signature 3: the 1957 numeral drifts against the dark band ---------- */
  gsap.fromTo(".story-year",
    { yPercent: -38 }, { yPercent: -62, ease: "none",
      scrollTrigger: { trigger: ".story", start: "top bottom", end: "bottom top", scrub: 1 } });

  /* ---------- drift strip: slow review marquee, river pace ---------- */
  var track = document.querySelector(".drift-track");
  if (track) {
    var setWidth = track.querySelector(".drift-set").offsetWidth;
    var marquee = gsap.to(track, {
      x: -setWidth, duration: Math.max(setWidth / 60, 20), ease: "none", repeat: -1
    });
    // gentle pause on hover
    track.addEventListener("mouseenter", function () { gsap.to(marquee, { timeScale: 0.25, duration: 0.6 }); });
    track.addEventListener("mouseleave", function () { gsap.to(marquee, { timeScale: 1, duration: 0.6 }); });
  }

  /* refresh after everything settles */
  window.addEventListener("load", function () { ScrollTrigger.refresh(); });
})();
