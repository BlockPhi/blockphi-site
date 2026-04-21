"use client";

import { useEffect, useRef } from "react";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  stagger?: boolean;
}

export default function ScrollReveal({
  children,
  className = "",
  stagger = false,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Users who prefer reduced motion should see the content immediately,
    // not wait for a scroll-driven fade.
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) {
      el.classList.add("visible");
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      // Fire the moment a section enters the viewport — looser threshold,
      // deeper rootMargin so long sections don't reveal after the user has
      // already scrolled past the fold.
      { threshold: 0.05, rootMargin: "0px 0px -80px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const classes = `reveal ${stagger ? "stagger" : ""} ${className}`.trim();

  return (
    <div ref={ref} className={classes}>
      {children}
    </div>
  );
}
