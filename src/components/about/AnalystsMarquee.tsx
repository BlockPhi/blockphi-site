'use client';

import { useEffect, useRef } from 'react';

/* ──────────────────────────────────────────────────────────────────────
   AnalystsMarquee — replaces the CSS-transform marquee with a
   native-scroll model so visitors can take control. Auto-scroll runs
   on RAF by writing to scrollLeft; on hover, focus, wheel, or touch
   the loop pauses and the user has full native horizontal scroll
   (trackpad swipe, shift+wheel, drag on touch). After 2.5s of
   inactivity, the auto-scroll resumes.

   Edge-positioned prev/next chevron buttons make the scroll
   affordance explicit (this is the BlackRock-style affordance for
   horizontally scrollable content). The buttons sit on top of the
   container's mask-faded edges so they don't crowd cards, and they
   pause the auto-scroll for the same RESUME_DELAY_MS as wheel/touch
   so a click doesn't snap back to motion mid-read.

   Cards are duplicated by the parent (the same pattern the CSS
   marquee used) so the wrap-around is invisible: when scrollLeft
   crosses half of scrollWidth, we subtract half — landing on the
   identical second copy at the same visual position.

   Respects prefers-reduced-motion: when set, RAF is skipped entirely;
   the responsive CSS fallback wraps the cards into a static grid.
   The arrow buttons stay functional — they just scroll without
   competing with auto-motion.
   ────────────────────────────────────────────────────────────────────── */

const SPEED_PX_PER_SEC = 45;
const RESUME_DELAY_MS = 2500;
const FALLBACK_STEP_PX = 280; // used when measuring a card width fails

export default function AnalystsMarquee({
  children,
}: {
  children: React.ReactNode;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const pausedRef = useRef(false);
  const resumeTimerRef = useRef<number | null>(null);

  // Click-handler-side pause: shared logic between the arrow buttons
  // and the wheel/touch listeners attached inside useEffect.
  const interactPause = () => {
    pausedRef.current = true;
    if (resumeTimerRef.current) window.clearTimeout(resumeTimerRef.current);
    resumeTimerRef.current = window.setTimeout(() => {
      pausedRef.current = false;
    }, RESUME_DELAY_MS);
  };

  const handleNav = (direction: -1 | 1) => {
    const el = containerRef.current;
    if (!el) return;
    const card = el.querySelector('.analysts-marquee-card') as HTMLElement | null;
    // Card width + the 3rem gap so each click moves exactly one card.
    const step = card ? card.offsetWidth + 48 : FALLBACK_STEP_PX;
    interactPause();
    el.scrollBy({ left: direction * step, behavior: 'smooth' });
  };

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let raf = 0;
    let lastTs = 0;
    // Browsers round scrollLeft to integers. At 45px/sec / ~60fps
    // that's ~0.75 per frame — which rounds to zero and the marquee
    // never moves. Accumulate fractional pixels here and only write
    // whole pixels to scrollLeft, so the sub-pixel speed actually
    // translates to motion.
    let frac = 0;

    const tick = (ts: number) => {
      if (!lastTs) lastTs = ts;
      const dt = ts - lastTs;
      lastTs = ts;

      if (!pausedRef.current) {
        const half = el.scrollWidth / 2;
        if (half > 0) {
          frac += (SPEED_PX_PER_SEC * dt) / 1000;
          const whole = Math.floor(frac);
          if (whole > 0) {
            frac -= whole;
            const next = el.scrollLeft + whole;
            el.scrollLeft = next >= half ? next - half : next;
          }
        }
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    const pause = () => {
      pausedRef.current = true;
    };
    const resume = () => {
      pausedRef.current = false;
      lastTs = 0;
    };
    const interactWithResume = () => {
      pause();
      if (resumeTimerRef.current) window.clearTimeout(resumeTimerRef.current);
      resumeTimerRef.current = window.setTimeout(resume, RESUME_DELAY_MS);
    };

    el.addEventListener('mouseenter', pause);
    el.addEventListener('mouseleave', resume);
    el.addEventListener('focusin', pause);
    el.addEventListener('focusout', resume);
    el.addEventListener('wheel', interactWithResume, { passive: true });
    el.addEventListener('touchstart', interactWithResume, { passive: true });

    return () => {
      cancelAnimationFrame(raf);
      if (resumeTimerRef.current) {
        window.clearTimeout(resumeTimerRef.current);
        resumeTimerRef.current = null;
      }
      el.removeEventListener('mouseenter', pause);
      el.removeEventListener('mouseleave', resume);
      el.removeEventListener('focusin', pause);
      el.removeEventListener('focusout', resume);
      el.removeEventListener('wheel', interactWithResume);
      el.removeEventListener('touchstart', interactWithResume);
    };
  }, []);

  return (
    <div className="analysts-marquee-wrap">
      <div
        ref={containerRef}
        className="analysts-marquee"
        aria-label="Independent analysts"
      >
        <div className="analysts-marquee-track">{children}</div>
      </div>
      <button
        type="button"
        className="analysts-marquee-nav analysts-marquee-nav--prev"
        onClick={() => handleNav(-1)}
        aria-label="Previous analysts"
      >
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <polyline points="15,5 8,12 15,19" />
        </svg>
      </button>
      <button
        type="button"
        className="analysts-marquee-nav analysts-marquee-nav--next"
        onClick={() => handleNav(1)}
        aria-label="Next analysts"
      >
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <polyline points="9,5 16,12 9,19" />
        </svg>
      </button>
    </div>
  );
}
