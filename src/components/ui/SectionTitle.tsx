"use client";

import { Fragment, useEffect, useRef, useState } from "react";

interface Props {
  children: string;
  className?: string;
}

export default function SectionTitle({ children, className = "" }: Props) {
  const ref = useRef<HTMLHeadingElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      // Defer to next frame so the setState isn't in the effect's
      // synchronous body (React 19 set-state-in-effect rule).
      const id = requestAnimationFrame(() => setVisible(true));
      return () => cancelAnimationFrame(id);
    }

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            obs.disconnect();
          }
        });
      },
      { threshold: 0.2 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const words = children.split(" ");

  return (
    <h2 ref={ref} className={`section-title ${className}`.trim()}>
      {words.map((w, i) => (
        <Fragment key={i}>
          <span
            className={`title-word${visible ? " title-word--revealed" : ""}`}
            style={{ transitionDelay: visible ? `${i * 0.1}s` : "0s" }}
          >
            {w}
          </span>
          {i < words.length - 1 ? " " : ""}
        </Fragment>
      ))}
    </h2>
  );
}
