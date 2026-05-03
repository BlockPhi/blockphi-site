'use client';

/* ──────────────────────────────────────────────────────────────────────
   AnalyticsPane — left pillar, "Two pillars. One edge." section.

   DESIGN DECISIONS

   1.  Tier ranking. Hero candidates: BTCUSD-invDXY (#2, the most
       Bloomberg-terminal-looking chart in the set), GLI/BTC z-score (#3,
       the visible regime-break that closes the model story), and
       BTC×GLI regime-bands (#1, the "the model called this" punch).

   2.  Display pattern: tabbed analytics pane with auto-rotation through
       all 11 charts in CHARTS order. Tabs follow the rotation so the
       visitor sees the full sweep — Regime → Model → Forecast →
       Sensitivity — in one ~66s loop.

   3.  Auto-rotation, institutional flavour:
       - 6s dwell per chart, RAF-driven so it pauses cleanly when the
         tab loses focus.
       - Thin 1px text-blue progress line at the bottom edge of the
         chart fills 0 → 100% over the dwell, fades out cleanly during
         the crossfade, and fades back in when the next chart settles.
       - Pauses when the pane is off-screen and resumes from the same
         elapsed when it returns.
       - Pauses *permanently* the moment the visitor clicks any tab or
         chip. They've taken control; we don't fight them.
       - prefers-reduced-motion fully disables auto-rotation.

   4.  Chart-to-chart transition. Two persistent <Image> slots (A, B) —
       a ping-pong / double-buffer. We NEVER mutate the visible slot's
       src; we only update the hidden slot, wait two RAF ticks for the
       browser to paint that new src at opacity 0, then flip visibility.
       This kills the post-transition flicker that comes from changing
       src on the visible element (single-element implementations end
       the crossfade by mutating the src + flipping opacity in the same
       tick, leaving a 1-frame gap where the old image shows at full
       opacity before the new one paints).

       All 11 charts are preloaded on mount so manual clicks never wait
       on the network.

       Easing: 800ms with cubic-bezier(0.65, 0, 0.35, 1) — symmetric
       ease-in-out. The project default fast-out-slow-in makes a fade
       snap into view too quickly; for an opacity crossfade, symmetric
       reads smoother.

   5.  Edge clipping. PNG exports have a #121212 outer ring around the
       rounded #1e1e1e chart card. The display container is fixed 2:1
       but the source charts have varied aspects (square, 2:1, 16:6 …),
       so `object-fit: contain` letterboxes some of them. A naive
       transform: scale only clips the img-element edges, which is the
       letterbox for non-2:1 charts — the rounded ring stays visible
       inside.

       Fix: detect each chart's natural aspect at load time, then apply
       a per-chart `clip-path: inset()` that clips
         (a) through the letterbox to the chart's actual edge, plus
         (b) a few pixels past the chart edge to remove the rounded ring.
       The math: for a chart with aspect A in a container with aspect C,
       the letterbox fraction is (1 - A/C)/2 horizontally if A < C, or
       (1 - C/A)/2 vertically if A > C. Add INSET_PX past that.

   6.  Static assets, not live data. All 11 ship as static PNG exports
       per the architecture split — marketing site ≠ analytics.blockphi.com.

   7.  Bottom strip: real metrics drawn from the chart set
       (R² 0.819 · β 0.0404 · Lag 11W) + terminal-link exit. The
       0.9842/1.24x placeholders are gone for good.
   ────────────────────────────────────────────────────────────────────── */

import Image from 'next/image';
import { useEffect, useMemo, useRef, useState } from 'react';

type CategoryKey = 'LEAD_LAG' | 'REGIME' | 'MODEL' | 'FORECAST' | 'SENSITIVITY';

interface Chart {
  id: number;
  src: string;
  title: string;
  caption: string;
  category: CategoryKey;
}

// Order matters: this is also the auto-rotation sequence. Chart IDs are
// numbered to match display order (01 = first chip in the first tab),
// so the counter "NN / 11" reads as a natural sequence position.
//
// All captions are written to fit ~3 lines at full pillar width with
// the line-clamp + min-height layout in globals.css. They contain no
// em-dashes per project copy rules.
const CHARTS: Chart[] = [
  // ── LEAD-LAG ──
  {
    id: 1,
    src: '/images/Charts V2/GLI-W-BTC-6W-Changes.png',
    title: 'GLI vs BTC Rate-of-Change',
    caption: 'GLI 11W-lagged rate-of-change overlaid with BTC 6W rate-of-change. Colour codes whether GLI is expanding (green) or contracting (red). The synchrony confirms the lead operates at the rate level, not just the price level.',
    category: 'LEAD_LAG',
  },
  {
    id: 2,
    src: '/images/Charts V2/GLI vs BTC Price.png',
    title: 'GLI Lead Overlay',
    caption: 'Global Liquidity plotted 11 weeks ahead of BTC spot price. The visual confirmation of our core thesis: liquidity moves first, BTC follows.',
    category: 'LEAD_LAG',
  },

  // ── REGIME ──
  {
    id: 3,
    src: '/images/Charts V2/BTC vs. GL RoC.png',
    title: 'BTC × GLI Regime Bands',
    caption: 'BTC price overlaid with GLI rate-of-change regime bands at 11-week lag. Green windows mark expansionary liquidity, time to accumulate; red windows mark contractionary, time to trim or hedge. The classifier turns the 11-week GLI lead into actionable entry and exit windows.',
    category: 'REGIME',
  },
  {
    id: 4,
    src: '/images/Charts V2/BTCUSD invDXY.png',
    title: 'BTC/USD vs Inverted DXY',
    caption: 'BTC log-deviation against inverted DXY shifted forward 90 days, with ±2σ regime bands. The dollar is the primary proxy for global liquidity tightness: weakness signals abundant liquidity, fuel for BTC. Significant DXY declines have historically preceded major BTC rallies with a 94% win rate.',
    category: 'REGIME',
  },
  {
    id: 5,
    src: '/images/Charts V2/GLI BTC z-score.png',
    title: 'BTC vs GLI Z-Score',
    caption: 'BTC and GLI in z-score space with ±2σ regime bands. The dashed Oct 10 2025 marker flags the largest divergence in the dataset, when BTC decoupled from liquidity by more than 2σ. Disconnects this large historically resolve as BTC catching back up, or a genuine macro regime shift.',
    category: 'REGIME',
  },

  // ── MODEL ──
  {
    id: 6,
    src: '/images/Charts V2/Arimax model.png',
    title: 'ARIMAX Historical Fit',
    caption: "ARIMAX predicted weekly BTC returns (red) overlaid on actuals (white). The smooth fit captures the structural component driven by liquidity dynamics; what's left is the noise no macro model can predict. Our edge lives in the signal.",
    category: 'MODEL',
  },
  {
    id: 7,
    src: '/images/Charts V2/Log-Log GLI BTC Model.png',
    title: 'Log-Log GLI / BTC Model',
    caption: 'Power-law relationship between Global Liquidity and BTC in log-log space. Linear fit R² = 0.687, quadratic fit R² = 0.819. The quadratic fit captures the diminishing returns effect: each additional trillion of liquidity has slightly less price impact than the last.',
    category: 'MODEL',
  },
  {
    id: 8,
    src: '/images/Charts V2/GLI BTC Transmission Scatterplot.png',
    title: 'Transmission Scatter',
    caption: "GLI change at 11-week lag against BTC log return, point by point. The slope quantifies transmission: a $1 trillion weekly increase in global liquidity predicts a 4.1% rise in BTC's weekly return exactly 11 weeks later (β = 0.0404, p < 0.01).",
    category: 'MODEL',
  },

  // ── FORECAST ──
  {
    id: 9,
    src: '/images/Charts V2/Liquidity Quantile Forecast Fan.png',
    title: 'Quantile Forecast Fan',
    caption: "BTC's forward 11-week return distribution conditional on the current 13-week GLI change. The vertical 'Current' marker plants where we are today, telling you the range of forward outcomes implied by today's liquidity conditions, not just a point estimate.",
    category: 'FORECAST',
  },

  // ── SENSITIVITY ──
  {
    id: 10,
    src: '/images/Charts V2/Liquidity Sensitivity.png',
    title: 'Liquidity Sensitivity',
    caption: '52-week rolling β between BTC returns and GLI changes. Above the 0.0404 reference: BTC is hyper-sensitive, historically the precursor to bull runs. Below: idiosyncratic events have decoupled BTC from macro drivers. A real-time read on how macro-driven the current market is.',
    category: 'SENSITIVITY',
  },
  {
    id: 11,
    src: '/images/Charts V2/Liquidity Regimes.png',
    title: 'Regime Distributions',
    caption: "BTC weekly return distributions across five liquidity regimes. Median returns scale monotonically from −5.7% (massive withdrawal) to +9.2% (massive injection). A non-parametric robustness check that confirms the classifier reflects a real causal mechanism, not a statistical artifact.",
    category: 'SENSITIVITY',
  },
];

// Tab order matches the narrative arc — Lead-Lag is first because it's
// the most accessible "look, GLI moves first, BTC follows" entry point;
// Regime classification only makes sense after the visitor has seen the
// relationship being classified.
const CATEGORIES: { key: CategoryKey; label: string; defaultId: number }[] = [
  { key: 'LEAD_LAG',    label: 'Lead-Lag',    defaultId: 1 },
  { key: 'REGIME',      label: 'Regime',      defaultId: 3 },
  { key: 'MODEL',       label: 'Model',       defaultId: 7 },
  { key: 'FORECAST',    label: 'Forecast',    defaultId: 9 },
  { key: 'SENSITIVITY', label: 'Sensitivity', defaultId: 10 },
];

const DWELL_MS = 6000;
const CROSSFADE_MS = 800; // keep in sync with `.analytics-chart` transition duration

// Display container's aspect-ratio (2/1 in CSS). Used to compute the
// letterbox amount for each chart's natural aspect ratio.
const CONTAINER_ASPECT = 2;

// Pixels to clip past the chart's natural edge — covers the rounded
// corner radius + the #121212 ring on the source PNGs. Calibrated by
// pixel-sampling all 11 charts: 6px left a faint ring (#111111 still
// visible at corners); 12px clears every chart down to the #1e1e1e card.
const INSET_PX = 12;

const findChart = (id: number) => CHARTS.find((c) => c.id === id)!;
// Initial chart = first category's default = Lead-Lag #01 (GLI vs BTC
// Rate-of-Change). Same thesis as the price overlay but the colour-coded
// rate-of-change line lands the lead-lag relationship harder at a glance.
const INITIAL_CHART = findChart(1);

/** Build a clip-path that:
 *   1) clips past the letterbox to reach the chart's natural edge, then
 *   2) clips an additional INSET_PX into the chart to drop the rounded ring.
 *  Returns undefined while the aspect is unknown, so the chart renders
 *  unclipped during the brief window before its `naturalWidth/Height`
 *  is known. */
function clipForAspect(aspect: number | undefined): string | undefined {
  if (!aspect || !Number.isFinite(aspect) || aspect <= 0) return undefined;

  let lbY = 0;
  let lbX = 0;
  if (aspect >= CONTAINER_ASPECT) {
    // Chart wider than container: vertical letterbox top + bottom.
    lbY = (1 - CONTAINER_ASPECT / aspect) / 2;
  } else {
    // Chart taller than container: horizontal letterbox left + right.
    lbX = (1 - aspect / CONTAINER_ASPECT) / 2;
  }

  const top = `calc(${(lbY * 100).toFixed(3)}% + ${INSET_PX}px)`;
  const right = `calc(${(lbX * 100).toFixed(3)}% + ${INSET_PX}px)`;
  return `inset(${top} ${right})`;
}

export default function AnalyticsPane() {
  const [activeId, setActiveId] = useState<number>(INITIAL_CHART.id);
  const [paused, setPaused] = useState(false);

  // Two persistent slots. Both <Image> elements stay mounted for the
  // life of the component; we just toggle which one is visible. The
  // visible slot's src is NEVER mutated, which is what kills the
  // post-transition flicker.
  const [chartA, setChartA] = useState<Chart>(INITIAL_CHART);
  const [chartB, setChartB] = useState<Chart>(INITIAL_CHART);
  const [visibleSlot, setVisibleSlot] = useState<'A' | 'B'>('A');
  const [transitioning, setTransitioning] = useState(false);

  // Per-chart natural aspect ratio, captured from the preload pass so
  // the per-chart clip-path can clip past the letterbox.
  const [aspects, setAspects] = useState<Record<number, number>>({});

  const paneRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const inViewRef = useRef(false);
  const reducedMotionRef = useRef(false);

  // Mirrors so the activeId effect can read current slot/visibility
  // without re-running on those updates.
  const slotRefs = useRef({ A: chartA, B: chartB, visible: visibleSlot });
  useEffect(() => {
    slotRefs.current = { A: chartA, B: chartB, visible: visibleSlot };
  });

  const visibleChart = visibleSlot === 'A' ? chartA : chartB;
  const active = findChart(activeId);
  const activeCategory = active.category;

  const visibleChips = useMemo(
    () => CHARTS.filter((c) => c.category === activeCategory),
    [activeCategory],
  );

  const stopAndSelect = (id: number) => {
    setActiveId(id);
    setPaused(true);
  };

  const selectCategory = (key: CategoryKey) => {
    const cat = CATEGORIES.find((c) => c.key === key);
    if (cat) stopAndSelect(cat.defaultId);
  };

  // Preload all 11 charts on mount so any swap (auto or manual) hits
  // the browser cache rather than the network. We also capture each
  // chart's natural aspect ratio here for per-chart clip-path math.
  useEffect(() => {
    if (typeof window === 'undefined') return;
    CHARTS.forEach((c) => {
      const img = new window.Image();
      img.onload = () => {
        if (img.naturalWidth > 0 && img.naturalHeight > 0) {
          const aspect = img.naturalWidth / img.naturalHeight;
          setAspects((prev) => (prev[c.id] === aspect ? prev : { ...prev, [c.id]: aspect }));
        }
      };
      img.src = c.src;
    });
  }, []);

  // prefers-reduced-motion — kills auto-rotation outright.
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    reducedMotionRef.current = mq.matches;
    if (mq.matches) setPaused(true);
    const onChange = (e: MediaQueryListEvent) => {
      reducedMotionRef.current = e.matches;
      if (e.matches) setPaused(true);
    };
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  // Track in-viewport so the rotation only advances while the pane is visible.
  useEffect(() => {
    const el = paneRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        inViewRef.current = entries[0]?.isIntersecting ?? false;
      },
      { threshold: 0.3 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  // Ping-pong swap orchestration. When activeId changes:
  //  1. Read the currently visible slot.
  //  2. Place the next chart into the OTHER slot (it's invisible, so
  //     the browser can mutate its src without a visible flicker).
  //  3. Two RAF ticks later — once the browser has painted the new
  //     src in the hidden slot — flip `visibleSlot`. Both <Image>
  //     elements transition opacity simultaneously over CROSSFADE_MS.
  //  4. After CROSSFADE_MS, clear `transitioning` so the dwell timer
  //     and progress bar re-engage.
  useEffect(() => {
    const next = findChart(activeId);
    const { visible, A, B } = slotRefs.current;
    const currentVisible = visible === 'A' ? A : B;
    if (next.id === currentVisible.id) return;

    if (visible === 'A') {
      setChartB(next);
    } else {
      setChartA(next);
    }

    let raf1 = 0;
    let raf2 = 0;
    let endTimer = 0;

    raf1 = requestAnimationFrame(() => {
      raf2 = requestAnimationFrame(() => {
        setTransitioning(true);
        setVisibleSlot((prev) => (prev === 'A' ? 'B' : 'A'));
        endTimer = window.setTimeout(() => {
          setTransitioning(false);
        }, CROSSFADE_MS + 20);
      });
    });

    return () => {
      cancelAnimationFrame(raf1);
      cancelAnimationFrame(raf2);
      if (endTimer) window.clearTimeout(endTimer);
    };
  }, [activeId]);

  // RAF-driven dwell timer + progress line. Keyed on the visible
  // chart's id AND `transitioning` — the 6s clock pauses while the
  // crossfade plays and restarts cleanly when the new chart lands.
  useEffect(() => {
    if (paused || transitioning) {
      if (progressRef.current) progressRef.current.style.transform = 'scaleX(0)';
      return;
    }

    if (progressRef.current) progressRef.current.style.transform = 'scaleX(0)';

    let elapsed = 0;
    let last = performance.now();
    let rafId = 0;
    let cancelled = false;

    const tick = () => {
      if (cancelled) return;
      const now = performance.now();
      const delta = now - last;
      last = now;

      if (inViewRef.current) elapsed += delta;

      const pct = Math.min(elapsed / DWELL_MS, 1);
      if (progressRef.current) progressRef.current.style.transform = `scaleX(${pct})`;

      if (elapsed >= DWELL_MS) {
        setActiveId((current) => {
          const idx = CHARTS.findIndex((c) => c.id === current);
          return CHARTS[(idx + 1) % CHARTS.length].id;
        });
        return;
      }

      rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);
    return () => {
      cancelled = true;
      cancelAnimationFrame(rafId);
    };
  }, [visibleChart.id, paused, transitioning]);

  const progressState = paused || transitioning ? 'hidden' : 'active';

  return (
    <div className="analytics-pane" ref={paneRef}>
      <div className="analytics-tabs" role="tablist" aria-label="Framework category">
        {CATEGORIES.map((cat) => {
          const isActive = cat.key === activeCategory;
          return (
            <button
              key={cat.key}
              type="button"
              role="tab"
              aria-selected={isActive}
              tabIndex={isActive ? 0 : -1}
              onClick={() => selectCategory(cat.key)}
              className={`analytics-tab ${isActive ? 'analytics-tab--active' : ''}`}
            >
              {cat.label}
            </button>
          );
        })}
        <span className="analytics-tab-counter" aria-hidden="true">
          {String(active.id).padStart(2, '0')} / 11
        </span>
      </div>

      <div className="analytics-display">
        {/* Persistent slot A. Stable React key — never remounts. */}
        <Image
          key="slot-A"
          src={chartA.src}
          alt={visibleSlot === 'A' ? `${chartA.title} chart export from the BlockPhi analytics terminal` : ''}
          fill
          sizes="(max-width: 960px) 100vw, 720px"
          priority={chartA.id === INITIAL_CHART.id && visibleSlot === 'A'}
          className="analytics-chart"
          style={{
            opacity: visibleSlot === 'A' ? 1 : 0,
            clipPath: clipForAspect(aspects[chartA.id]),
          }}
          unoptimized
          aria-hidden={visibleSlot !== 'A'}
          onLoad={(e) => {
            const img = e.currentTarget;
            if (img.naturalWidth > 0 && img.naturalHeight > 0) {
              const aspect = img.naturalWidth / img.naturalHeight;
              setAspects((prev) => (prev[chartA.id] === aspect ? prev : { ...prev, [chartA.id]: aspect }));
            }
          }}
        />
        {/* Persistent slot B. Stable React key — never remounts. */}
        <Image
          key="slot-B"
          src={chartB.src}
          alt={visibleSlot === 'B' ? `${chartB.title} chart export from the BlockPhi analytics terminal` : ''}
          fill
          sizes="(max-width: 960px) 100vw, 720px"
          className="analytics-chart"
          style={{
            opacity: visibleSlot === 'B' ? 1 : 0,
            clipPath: clipForAspect(aspects[chartB.id]),
          }}
          unoptimized
          aria-hidden={visibleSlot !== 'B'}
          onLoad={(e) => {
            const img = e.currentTarget;
            if (img.naturalWidth > 0 && img.naturalHeight > 0) {
              const aspect = img.naturalWidth / img.naturalHeight;
              setAspects((prev) => (prev[chartB.id] === aspect ? prev : { ...prev, [chartB.id]: aspect }));
            }
          }}
        />
        <div className="analytics-display-overlay" aria-hidden="true">
          <span className="analytics-display-title">{visibleChart.title}</span>
        </div>
        <div
          className="analytics-progress"
          ref={progressRef}
          aria-hidden="true"
          data-state={progressState}
        />
      </div>

      <div className="analytics-chips" role="tablist" aria-label="Frameworks in this category">
        {visibleChips.map((chart) => {
          const isActive = chart.id === activeId;
          return (
            <button
              key={chart.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              tabIndex={isActive ? 0 : -1}
              onClick={() => stopAndSelect(chart.id)}
              className={`analytics-chip ${isActive ? 'analytics-chip--active' : ''}`}
            >
              <span className="analytics-chip-num">{String(chart.id).padStart(2, '0')}</span>
              <span className="analytics-chip-title">{chart.title}</span>
            </button>
          );
        })}
      </div>

      <p className="analytics-caption" key={`cap-${visibleChart.id}`}>
        {visibleChart.caption}
      </p>
    </div>
  );
}
