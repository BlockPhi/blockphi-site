"use client";

import { useEffect, useRef, useState } from "react";

interface Props {
  to: number;
  duration?: number;
  startDelay?: number;
}

export default function CountUp({
  to,
  duration = 1400,
  startDelay = 0,
}: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const [value, setValue] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReducedMotion =
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let rafId = 0;
    let timeoutId: ReturnType<typeof setTimeout> | null = null;
    let started = false;

    const run = () => {
      if (started) return;
      started = true;
      if (prefersReducedMotion) {
        setValue(to);
        return;
      }
      const start = performance.now();
      const tick = () => {
        const elapsed = performance.now() - start;
        const t = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - t, 3);
        setValue(Math.round(to * eased));
        if (t < 1) rafId = requestAnimationFrame(tick);
      };
      rafId = requestAnimationFrame(tick);
    };

    const rect = el.getBoundingClientRect();
    const inViewport = rect.top < window.innerHeight && rect.bottom > 0;

    if (inViewport) {
      timeoutId = setTimeout(run, startDelay);
      return () => {
        if (timeoutId) clearTimeout(timeoutId);
        if (rafId) cancelAnimationFrame(rafId);
      };
    }

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            run();
            obs.disconnect();
          }
        });
      },
      { threshold: 0 }
    );
    obs.observe(el);
    return () => {
      obs.disconnect();
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [to, duration, startDelay]);

  return <span ref={ref}>{value}</span>;
}
