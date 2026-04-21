"use client";

import { useEffect } from "react";

export default function HeroScrollFade() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const hero = document.querySelector<HTMLElement>(".hero");
    if (!hero) return;

    let rafId = 0;

    const update = () => {
      rafId = 0;
      const h = hero.offsetHeight || window.innerHeight;
      const progress = Math.max(0, Math.min(1, window.scrollY / h));
      hero.style.setProperty("--hero-exit", progress.toString());
    };

    const onScroll = () => {
      if (!rafId) rafId = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return null;
}
