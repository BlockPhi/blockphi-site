# BlockPhi Landing — Refinement Changes

Scope: section-by-section polish pass on the Next.js landing at `localhost:3000`, executed after the audit in [AUDIT.md](AUDIT.md). Copy edits, structural changes, and anything you needed to greenlight are listed per your approvals from that conversation.

Build status after all changes: `npx next build` clean (10 static routes, 0 errors), `npx eslint src/**/*.{ts,tsx}` clean.

Before/after screenshots live under `temporary-screenshots/audit-*.png` (before) and `temporary-screenshots/wave1-after-*.png` (after).

---

## 1. Motion / reveal

- **ScrollReveal threshold tightened** from `0.12 / -40px` to `0.05 / -80px`. Reveals now fire the moment a section enters the viewport instead of 12% in — stops the long Pillars / Pricing sections from revealing after you've scrolled past the fold. [src/components/ui/ScrollReveal.tsx](src/components/ui/ScrollReveal.tsx)
- **`prefers-reduced-motion` honored everywhere.** Users with the OS setting on now skip Ken Burns, pulse, scroll-reveal fades, stagger delays, and all CSS transitions. Added in both [ScrollReveal.tsx](src/components/ui/ScrollReveal.tsx) (observer bypass → content renders visible immediately) and [globals.css](src/app/globals.css) (`@media (prefers-reduced-motion: reduce)` block neutralizing `.hero-bg`, `.reveal`, `.stagger > *`, `.scroll-line`, `.play-btn::after`).
  - _Why:_ a11y requirement; reduces motion-sickness and vestibular-disorder triggers. Not optional for a production site.

## 2. Nav

- **Active-route indicator.** `aria-current="page"` now lives on the matching nav link; active links render in full white with the underline bar permanently extended. Client-side via `usePathname()`. Covers desktop nav + mobile drawer. [src/components/nav/Nav.tsx](src/components/nav/Nav.tsx), [globals.css](src/app/globals.css)
  - _Why:_ users on `/about`, `/insights`, `/privacy`, `/terms` had no visual indication of where they were.
  - `/about#contact` intentionally does *not* paint About as active — the Contact link has its own row.

## 3. Hero

- **Ampersand token.** The `&` in the first tag is now wrapped `<span class="amp">` and renders in `--text-blue` (#4A8EC9). Small but the brand guide explicitly specs it (DESIGN.md §2, §4). [src/components/hero/Hero.tsx](src/components/hero/Hero.tsx), [globals.css](src/app/globals.css)
  - _Why:_ matches spec; steel-blue ampersand gives the tag a subtle hierarchy cue without adding color noise.

## 4. Pillars

- **Sample-allocation caption above the models grid.** New `models-caption` block with JetBrains-Mono tag on the left ("Sample allocation frameworks") and a small disclaimer on the right ("Illustrative — each model is a standalone strategy, not a single combined portfolio."). [src/components/pillars/Pillars.tsx](src/components/pillars/Pillars.tsx), [globals.css](src/app/globals.css)
  - _Why:_ the four weights (65.40 / 24.15 / 10.45 / 12.80) sum to 112.8%, which would confuse a literal reader. The caption clarifies they're separate strategies, not one portfolio. Also de-risks misreading as "live positions" — these are frameworks, not trades.
- **Funnel SVG accessibility.** Added `role="img"` + descriptive `aria-label` to the funnel-lines SVG so screen readers announce it as "Diagram: six external information sources converging into a single signal at the center." [src/components/pillars/Pillars.tsx](src/components/pillars/Pillars.tsx)
- **Tokenized stroke color.** The funnel's six dashed paths previously used hand-rolled `rgba(74,142,201,0.20)` and `0.18` literals. Now they inherit `currentColor` from `.funnel-lines` (one token sets all six), with `opacity` attr on individual paths for subtle weighting. [globals.css](src/app/globals.css)
  - _Why:_ single source of truth for color; consistent with the rest of the palette system.

## 5. Testimonials

- **Not touched.** Per your instruction, leaving the current anonymous cards + placeholder video IDs in place until you film the real testimonials. The carousel still shows 3-equal-cards at desktop width which is a banned pattern in CLAUDE.md — I'll revisit this when you swap in real videos and we can move to a 2-up asymmetric grid at the same time.

## 6. Pricing

- **Layout: equal-height tiers with CTA pinned to bottom.** `.tier` now uses `display: flex; flex-direction: column; height: 100%`, and `.tier-features` takes `flex: 1 1 auto` so the feature list eats remaining space. `.pricing-grid` switched from `align-items: start` to `align-items: stretch`. Result: all four CTAs land on the same Y line across the row, regardless of description or feature-count differences. [globals.css](src/app/globals.css)
  - _Why:_ one of the redesign-skill's explicit rules ("Buttons not bottom-aligned in card groups", "Feature lists starting at different vertical positions"). Current layout pre-change had Gold's CTA floating mid-card while Free's CTA sat near the top. Now clean.
- **Mobile single column.** Pricing grid now collapses to `1fr` at ≤960px (was `1fr 1fr` 2×2) with max-width 480px, matching DESIGN.md §7. Also killed the `translateY(-8px)` lift on `.tier--featured` at mobile since when stacked it caused visual overlap with the card above. [globals.css](src/app/globals.css)
- **CTA labels: tiered semantics** (per your greenlight on question 7):
  - Free → **"Read-only Access"** (was "Join for Free")
  - Member → **"Join"** (was "Join as Member")
  - Gold → "Apply for Gold" (unchanged)
  - Inner Circle → "Apply for Inner Circle" (unchanged)
  [src/components/pricing/Pricing.tsx](src/components/pricing/Pricing.tsx)
  - _Why:_ matches your "application-only, selective" positioning for the paid tiers while letting the free tier read accurately as browse-only access.

## 7. Guarantee

- **Copy rewrite** (per your greenlight on question 9). [src/components/guarantee/Guarantee.tsx](src/components/guarantee/Guarantee.tsx)
  - Before: *"Join, explore the community, review the frameworks. If you're not satisfied within 7 days, send us a message and we'll refund you in full. No questions asked."* (34 words)
  - After: **"Explore the community. Review the frameworks. If it isn't for you within 7 days, one message and we refund in full — no questions asked."** (25 words)
  - _Why:_ tighter rhythm, two parallel short clauses setting up the guarantee, em-dash instead of "No questions asked." as a separate sentence.

## 8. Final CTA

- **Subhead rewrite** (per your greenlight on question 10). [src/components/final-cta/FinalCta.tsx](src/components/final-cta/FinalCta.tsx)
  - Before: *"Step into a room of serious investors. Get the structure. Get the clarity."*
  - After: **"A private room of serious investors, backed by frameworks built for real capital. The noise stays outside."**
  - _Why:_ the before version was staccato-repetitive ("Get the X. Get the Y."). The new line earns the headline above by naming what makes the room different (frameworks, real capital) and ending with a sharp anti-noise positioning line that keys off your "institutional, not influencer" frame.

## 9. Footer

- **Social SVGs marked `aria-hidden="true"`.** The parent `<a>` already has the descriptive `aria-label`; the SVG inside was doubling announcements on some screen readers. [src/components/footer/Footer.tsx](src/components/footer/Footer.tsx)

## 10. Site-wide a11y / infra

- **Skip-to-content link.** A `.skip-link` lives at the top of every page (`src/app/layout.tsx`), visually hidden until a keyboard user tabs into it, then slides into view in the top-left. Targets `#main-content` on every page. [src/app/layout.tsx](src/app/layout.tsx), [globals.css](src/app/globals.css)
- **`<main id="main-content">` landmark** added to all five page files: `/`, `/about`, `/insights`, `/privacy`, `/terms`. [src/app/page.tsx](src/app/page.tsx), [src/app/about/page.tsx](src/app/about/page.tsx), [src/app/insights/page.tsx](src/app/insights/page.tsx), [src/app/privacy/page.tsx](src/app/privacy/page.tsx), [src/app/terms/page.tsx](src/app/terms/page.tsx)
  - _Why:_ skip-link needs a target; screen readers need a landmark.
- **Custom 404.** New [src/app/not-found.tsx](src/app/not-found.tsx) — Nav + `.notfound` section with a JetBrains-mono "404" label, Cormorant headline "Page not found.", a copy line, and two CTAs: primary "Back to home" and ghost "Read research" linking to `/insights`. Metadata sets `robots: { index: false, follow: false }` so Google doesn't index the 404. Styles in [globals.css](src/app/globals.css) under `/* 404 NOT FOUND */`.
  - _Why:_ previously any unknown path hit Next's default bare 404. Now a branded dead-end with a way back.

---

## Explicitly not changed (per your instructions)

- **Hero headline, subhead, stats.** Keeping "Invest With Structure. / Allocate With Conviction." + the 22-word subhead + "Est. 2017 / 10+ Analysts". No `40× Portfolio Growth` — your call: "too spammy, memecoin territory." Agreed.
- **"Scroll" hint text at the bottom of the hero.** Kept per your question-3 answer.
- **"How It Works" section.** Not built. You deliberately left it out — "less is more, real information only."
- **Testimonials.** Untouched. You'll film real ones and swap them in.
- **Pillars H2 subhead** "BlockPhi is your all-in-one framework…" — kept per your question-8 answer.
- **"What you won't get" anti-list** — skipped per your question-11 answer.
- **Footer newsletter capture** — skipped per your question-12 answer.
- **Free pricing tier** — kept (you confirmed).
- **Gold "Most Popular" badge** — kept.

## Things I considered and didn't do

- **Amber `$79` accent on Gold tier** — DESIGN.md reserves orange for price anchors; I would've tinted the `$79` subtly. Held off because it overlaps copy territory and you said leave copy alone here. Flag if you want it for round 2.
- **Replace testimonials carousel with 2-up asymmetric grid** — would resolve the "3-equal-card" banned pattern. Deferred until you supply real testimonials, so we can restructure and re-populate in one pass.
- **Real Discord screenshot inside the Curated Investor Circle pillar.** Current placeholder is weak (stylized SVG window). Blocked on you supplying a blurred real screenshot.
- **Convert the VSL placeholder into a lazy YouTube facade.** Blocked on a real video ID.
- **"As seen on" / media strip under Hero.** Would move credibility faster than any synthesized testimonial. Blocked on you supplying podcast + publication logos.
- **Amber $79 subtle anchor, SVG logo brand mark, cookie consent banner.** Queued for a later pass once the higher-priority content is in.

---

---

# Round 2 — Other pages (About / Insights / Privacy / Terms)

Same workflow: audit screenshots → surgical fixes → rebuild → after-screenshots. Before/after under `temporary-screenshots/audit-pg-*.png` and `temporary-screenshots/wave2-after-pg-*.png`.

## About page

### Coverage section — broke the 3-equal-column banned pattern

**Before:** `.about-coverage` rendered as `grid-template-columns: repeat(3, 1fr)` — three equal cards with "01 / 02 / 03" labels, body copy, and `border-top` on each. This is on CLAUDE.md's banned list *("No 3-column equal card layouts")*. [globals.css](src/app/globals.css)

**After:** Vertical stack of three numbered rows. Each row is a 3-column grid — `80px number / 1fr title / 1.3fr body` — with a border-top divider on top of every row (plus a border-bottom on the last so the list closes cleanly). Hover on a row (and the row below) deepens the divider color. Matches DESIGN.md §6 "Steps" pattern. [globals.css](src/app/globals.css)

**Why:**
- Kills the banned symmetry.
- Reads as a structured list rather than three floating cards — better for institutional tone.
- Numbers got bigger and softer (Cormorant-sized mono, `rgba(0,31,63,0.45)`) so they anchor the row without shouting.
- Title shifted to Cormorant 300 for brand alignment (was Montserrat 500).

**Mobile:** The 3-col grid collapses to `50px number / 1fr title+body` with number spanning both rows. Title above body, consistent rhythm, same border-top divider. [globals.css](src/app/globals.css)

### Section title typography unified

`.about-title` was Montserrat 600 — read as a product-page sans-serif heading, different from the landing page's Cormorant 300 `.section-title`. Swapped to `var(--heading)` at `clamp(1.8rem, 3vw, 2.4rem)`, weight 300, with -0.01em tracking and 1.2 line-height. Now "What we analyze", "Who we are", "Independent Affiliate Analysts", "Get in touch" all render with the same serif rhythm as "Two pillars. One edge." and "Choose your level of access." on the landing page. [globals.css](src/app/globals.css)

## Insights page

### Section title typography unified

Same fix as About — `.insights-section-header h2` was Montserrat 600. Now Cormorant 300 at `clamp(1.8rem, 3vw, 2.4rem)`, matching the rest of the site. Also tightened `margin-bottom` on the header wrapper from `clamp(1.2rem, 2.5vw, 2rem)` → `clamp(1.8rem, 3vw, 2.8rem)` for more breathing room above the content. [globals.css](src/app/globals.css)

### `.insights-section-desc`

Line-height bumped 1.65 → 1.7; `max-width` changed from fixed `480px` to `55ch` so it scales with the font. Font-size from 0.88 → 0.9rem for slightly better readability. [globals.css](src/app/globals.css)

## Privacy & Terms pages

### `.legal-meta` repositioned with proper separator

**Before:** The "Last updated: …" chip used `margin-top: -1rem` to cheat closer to the h1, visually fighting the heading. Letter-spacing was `0.08em` — too tight for an all-caps mono label.

**After:** Removed the negative margin; sits a clean `0.25rem` below the heading. Bumped letter-spacing to `0.18em` (matches the section-tag scale elsewhere). Added a full-width `border-bottom: 1px solid var(--white-06)` and `padding-bottom: 2rem` so the meta chip anchors a clear introductory block. Added `.legal-doc h1 { margin-bottom: 0 }` so the heading + meta group cleanly.

Result: both legal pages now open with a proper document masthead — title, timestamp, horizontal rule — before the numbered sections start.

## Pricing — Gold price anchor

First pass: filled `$79` with amber. You (correctly) pushed back — too loud, "like the whole amount was orange." Reverted and replaced with a subtle accent instead.

**Shipping version:** `$79` stays white (readable, not shouty). A 28px × 1px amber mark sits under the `.tier-price` block on the Gold tier only, at 0.75 opacity. On `:hover` the mark grows to 44px over 0.5s with the site's standard easing. No glow, no fill, no border noise — just a quiet anchor hint that the eye can resolve without being grabbed by it. Matches DESIGN.md §2 ("Amber Signal … reserved for price anchors and special highlights") without violating the CLAUDE.md no-glows rule.

Only applies to `.tier--featured`; other tier prices remain untouched. Screenshot: `temporary-screenshots/wave2d-pricing-amber-underline.png`.

## Cross-page

- Every page inherits Wave 1 improvements automatically: skip-link, reduced-motion override, ScrollReveal tighter threshold, `<main id="main-content">` landmark, aria-current on Nav active route.
- Build still clean (`npx next build` — 10 static routes, 0 errors), lint clean.

## How to roll back

Every change is scoped to a single commit's worth of edits in these files:

- [src/app/layout.tsx](src/app/layout.tsx)
- [src/app/page.tsx](src/app/page.tsx)
- [src/app/about/page.tsx](src/app/about/page.tsx)
- [src/app/insights/page.tsx](src/app/insights/page.tsx)
- [src/app/privacy/page.tsx](src/app/privacy/page.tsx)
- [src/app/terms/page.tsx](src/app/terms/page.tsx)
- [src/app/not-found.tsx](src/app/not-found.tsx) _(new)_
- [src/app/globals.css](src/app/globals.css)
- [src/components/ui/ScrollReveal.tsx](src/components/ui/ScrollReveal.tsx)
- [src/components/nav/Nav.tsx](src/components/nav/Nav.tsx)
- [src/components/hero/Hero.tsx](src/components/hero/Hero.tsx)
- [src/components/pillars/Pillars.tsx](src/components/pillars/Pillars.tsx)
- [src/components/pricing/Pricing.tsx](src/components/pricing/Pricing.tsx)
- [src/components/guarantee/Guarantee.tsx](src/components/guarantee/Guarantee.tsx)
- [src/components/final-cta/FinalCta.tsx](src/components/final-cta/FinalCta.tsx)
- [src/components/footer/Footer.tsx](src/components/footer/Footer.tsx)
