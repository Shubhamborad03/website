/* ============================================================
   Pelican Boat Hire — interior page motion
   Same "river at 8am" choreography as main.js, scoped to the
   .ipage-* hero + generic .reveal elements on story / on-the-river /
   activities. expo.out / power3.out, no bounce. Honest static fallback.
   ============================================================ */
(function () {
  "use strict";
  document.documentElement.classList.add("js");

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var hasGSAP = typeof gsap !== "undefined";

  if (!hasGSAP || reduceMotion) {
    document.documentElement.classList.remove("js"); // reveal everything
    return;
  }

  gsap.registerPlugin(ScrollTrigger);

  if (typeof Lenis !== "undefined") {
    var lenis = new Lenis({ duration: 1.2, syncTouch: false });
    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add(function (t) { lenis.raf(t * 1000); });
    gsap.ticker.lagSmoothing(0);
    document.querySelectorAll('a[href^="#"]').forEach(function (a) {
      a.addEventListener("click", function (e) {
        var target = document.querySelector(a.getAttribute("href"));
        if (target) { e.preventDefault(); lenis.scrollTo(target, { offset: -20 }); }
      });
    });
  }

  /* hero entrance */
  function heroEntrance() {
    var tl = gsap.timeline({ defaults: { ease: "expo.out" } });
    tl.to(".ipage-kicker .riverline-rule", { scaleX: 1, duration: 1.0 }, 0.05)
      .to(".ipage-kicker", { opacity: 1, y: 0, duration: 0.8 }, 0.15)
      .to(".ipage-h1", { opacity: 1, y: 0, duration: 1.1 }, 0.3)
      .to(".ipage-lede", { opacity: 1, y: 0, duration: 1 }, "-=0.8")
      .to(".ipage-proof", { opacity: 1, y: 0, duration: 1 }, "-=0.85");
  }
  var heroRan = false;
  function runHeroOnce() { if (heroRan) return; heroRan = true; heroEntrance(); }
  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(runHeroOnce);
    setTimeout(runHeroOnce, 1200);
  } else { runHeroOnce(); }

  /* riverline rules draw in (THE primitive) */
  document.querySelectorAll(".riverline-rule").forEach(function (rule) {
    if (rule.closest(".ipage-hero")) return; // hero handled above
    gsap.set(rule, { transformOrigin: "left center", scaleX: 0 });
    gsap.to(rule, {
      scaleX: 1, duration: 1.2, ease: "expo.out",
      scrollTrigger: { trigger: rule, start: "top 90%" }
    });
  });

  /* generic reveals — every .reveal eases up on scroll */
  document.querySelectorAll(".reveal").forEach(function (el) {
    gsap.set(el, { opacity: 0, y: 28 });
  });
  gsap.utils.toArray(".reveal").forEach(function (el) {
    gsap.to(el, {
      opacity: 1, y: 0, duration: 1.05, ease: "power3.out",
      scrollTrigger: { trigger: el, start: "top 86%" }
    });
  });

  window.addEventListener("load", function () { ScrollTrigger.refresh(); });
})();
