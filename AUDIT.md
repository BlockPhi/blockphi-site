# BlockPhi Landing — Refinement Audit

**Baseline captured:** 2026-04-16
**Scope:** `/` home page only (the landing) — Next.js build in `blockphi-site/`, viewed at localhost:3000 at 1440×900 (desktop) and 390×844 (mobile).
**Method:** Section-by-section visual audit against CLAUDE.md + DESIGN.md, cross-checked with component source.

## How to read this

Each finding has a class:

- **[SAFE]** — pure polish (spacing, hover, alignment, a11y, refactor of inline style). No copy or structural change. I can ship these without asking.
- **[APPROVAL]** — copy changes, positioning, structural changes, anything that changes what a prospect reads or sees at a macro level. Per your rule, needs your greenlight before I touch it.
- **[BLOCKED]** — waiting on a real asset (photo, video ID, URL, copy from you) that I cannot synthesize.

Baseline screenshots live in `temporary-screenshots/audit-*.png`.

---

## Cross-cutting findings (apply across multiple sections)

- **[SAFE] IntersectionObserver threshold is sluggish.** `ScrollReveal` uses `threshold: 0.12` with `rootMargin: "0px 0px -40px 0px"`. On long sections (Pillars, Pricing), children sometimes reveal after you've already scrolled past. Tighten rootMargin to `-80px` or drop threshold to `0.05` so reveals fire the instant a section enters the viewport. [src/components/ui/ScrollReveal.tsx](src/components/ui/ScrollReveal.tsx)
- **[SAFE] `scroll-behavior: smooth` is set at `html` level** ([globals.css:48](src/app/globals.css:48)). Good. But no `@media (prefers-reduced-motion)` override anywhere — Ken Burns, scroll reveals, and hover transforms all keep running for users who opted out. Add a single reduced-motion block that neutralizes `transform`/`animation` on `.hero-bg`, `.revealable`, and `.ken-burns`-style elements.
- **[APPROVAL] Section 4 "How It Works" is specced in CLAUDE.md and DESIGN.md but not implemented.** The landing goes Hero → Pillars → Testimonials → Pricing. Three numbered steps with border-top dividers would give the page a narrative spine it currently lacks. Either **(a)** I build it from the spec (three steps: control who's in the room / access proprietary frameworks / allocate across all markets), **(b)** you supply the final copy, or **(c)** we formally drop it from the spec and update CLAUDE.md. Flag which.
- **[SAFE] White-opacity hierarchy compliance** — the spec mandates 100/60/40/25/12/6. A grep of `rgba(252, 252, 252` returns 6 canonical tokens, but several hand-rolled `rgba(255,255,255,...)` and `rgba(0,0,0,...)` values exist in isolated rules. Worth a cleanup pass.
- **[SAFE] Section vertical rhythm.** Spec says `clamp(5rem, 10vw, 8rem)`. Hero bottom padding and Pillars top padding land fine. But the `.divider` between sections is invisible (it's `border-top: 1px solid var(--white-06)` on a zero-height div) — that's fine intentionally, but it leaves no visible gradient-line divider. DESIGN.md §6 says "Dividers: Gradient line — linear-gradient(90deg, transparent, navy-border, transparent)". Currently missing. Easy upgrade.
- **[SAFE] No active-page indicator in Nav.** `/insights`, `/about`, `/privacy`, `/terms` all have Nav, but no `aria-current="page"` and no visual distinction for the active route.
- **[SAFE] No `/404`, no skip-to-content link.** Dead-end UX and keyboard-user a11y gap.
- **[SAFE] Cookie/GDPR banner missing.** The audience is EU-heavy (€100k-€5M NW implies EU). Legally advisable to add consent for at least Google Fonts / Vercel analytics.

---

## 1. Nav

Screenshot: `audit-sec-nav-desktop.png`

### Findings

- **[SAFE] Hover state on nav links is color-only.** `.nav-right a` shifts `color: white-40 → white` on hover, with a navy underline bar that slides in. That part is fine. But the dropdown chevron next to "About" rotates 180° only on parent `:hover` — with a pointer device this feels abrupt. Add a small `gap` change or let the chevron shift `translateY(1px)` as a secondary cue. Minor polish.
- **[SAFE] Logo is a PNG raster.** The spec and your brief mention it as the brand mark that should "feel refined" — at retina densities and high DPI it'll look soft. No SVG exists in the repo (`find public/images -name "*.svg"` returns Next.js boilerplate only: file/globe/next/vercel/window). I can't synthesize the real brand mark. [BLOCKED on real SVG]
- **[SAFE] Nav z-index is hardcoded `100`.** No z-scale. Adequate for this project but flag for the next refactor.
- **[APPROVAL] Nav link label "Insights" — consider "Research".** "Insights" leans influencer/newsletter; "Research" leans institutional. Your brand guide calls the firm "investment analytics". Not a safe-to-ship change — flagging.
- **[APPROVAL] Nav currently hides `nav-cta-outline` (Analytics Terminal) on mobile.** The Analytics Terminal is a real product at `analytics.blockphi.com` and arguably the strongest signal of institutional substance. Hiding it on phones weakens the page. Options: show it as a secondary pill in the mobile nav, or move it into the hamburger drawer as a bordered row (currently it's in the drawer — good — but the main topbar still loses it). Confirm you're fine with the current "Apply to Join only" topbar on mobile.

### Not changing (working)

- Asymmetric topbar (logo left, links + 2 CTAs right). ✓ taste-skill compliant.
- 60px height, backdrop-blur, border-bottom white-06. ✓ matches DESIGN.md §4/§5.
- Hamburger drawer now works, aria-expanded, body scroll locked, animated X. ✓

---

## 2. Hero

Screenshot: `audit-sec-hero-desktop.png`

### Findings

- **[SAFE] Tags row uses "&" as plain text, not the navy-mid ampersand specified in DESIGN.md §4.** Current: `<span className="tag">Crypto Analytics & Capital Allocation</span>` — the ampersand is the same color as the rest. DESIGN.md says "The '&' in navy-mid color." Easy to implement with a wrapped `<span class="amp">` on just the ampersand.
- **[SAFE] VSL container "Watch Overview" label is missing.** DESIGN.md §4 says "Watch Overview, 9 min" — currently there's no visible label at all, just a thumbnail + play button. The play button has `aria-label="Play overview video"` for screen readers, but sighted users get no context. Add a small duration chip (JetBrains Mono, navy border) — e.g. bottom-left of the thumbnail.
- **[APPROVAL] Hero subheadline is long and soft.** "Proprietary crypto and macro frameworks that turn data into actionable investment decisions, exclusive to our select investor community." 22 words, buries the verb. DESIGN.md's spec version is tighter: "Data-driven investment frameworks, exclusive to our select investor community." Consider swapping.
- **[APPROVAL] Hero stats feel under-claimed.** Currently "Est. 2017 / 10+ Analysts". DESIGN.md §4 says "40× Portfolio Growth, 10+ Analysts, 2016 Active Since". `40×` is a strong claim — is it real? If so, add it. If not, keep it out (don't fabricate). "Est. 2017" and "2016 Active Since" disagree — pick one and fix CLAUDE.md to match.
- **[SAFE] Hero has `.scroll-hint` declared in CSS but only `Scroll` text and a line.** That violates CLAUDE.md banned pattern: *"Filler text: 'Scroll to explore', scroll arrows, bouncing chevrons"*. The component text is literally "Scroll". Remove or replace with just a silent decorative line — probably remove entirely, the rest of the page does the work.
- **[SAFE] VSL play button has no loading/unready state.** When clicked it does nothing (no onClick handler beyond semantic button). If the video isn't wired to Whop/YouTube yet, at minimum it should indicate that to the user (e.g., disabled or tooltip "Coming soon"). Right now it's a dead click. [Either: implement as real embed — see BLOCKED below — or disable until.]
- **[BLOCKED] No real overview video exists.** `placeholder-vsl-thumbnail.png` is used. Need a real thumbnail and either a YouTube/Whop video URL or a lightbox embed target.
- **[SAFE] Hero background** — `hero-bg.png` exists in `public/images/`. Ken Burns animation is running at 25s per spec. ✓ Good.

### Not changing (working)

- Asymmetric split (headline left 1fr, VSL right ≈1.15fr). ✓
- Discord icon on Apply button. ✓
- Figure/figcaption semantics for VSL + quote. ✓ (after my earlier fix, quote is below the box, not inside.)

---

## 3. Pillars

Screenshot: `audit-sec-pillars-desktop.png`

### Findings

- **[SAFE] Section tag reads "What You Get".** DESIGN.md standard is "JetBrains Mono 0.6rem, letter-spacing 0.3em, uppercase". Currently renders correctly. But the wording itself is very B2C — consider a more institutional tag like "The Offering" or "Two Pillars". [APPROVAL: copy change]
- **[APPROVAL] H2 "Two pillars. One edge." + sub "BlockPhi is your all-in-one framework for wealth management across crypto and global markets."** — the subhead is near an AI cliche ("all-in-one"). Tighten: *"Proprietary analytics. A private investor room. Nothing else."* or similar. Needs your voice on it.
- **[SAFE] The "models" sub-pillar is labeled only visually** — there's no H3 saying what it is. It's just a grid of four `AGGRESSIVE_01 / NEUTRAL_04 / PROTECT_09 / YIELD_02` cards. Add a small caption/tag like *"Sample allocation frameworks"* so it doesn't read as live positions.
- **[APPROVAL] The numbers `65.40% / 24.15% / 10.45% / 12.80%` sum to 112.8%.** Either the visual is "four independent models" (not one portfolio), in which case add a clarifying line, or they're meant to be one allocation and need rebalancing. Flag.
- **[SAFE] The right pillar's "Discord preview" placeholder shows a stylized SVG window with dots + the text "Discord preview".** Visually weak. Either (a) supply a real blurred Discord screenshot, or (b) replace with a more abstract "room" diagram. Currently it's the lightest pixel on the page. [Edit + BLOCKED — I can restyle the placeholder but the real Discord screenshot is blocked on you.]
- **[SAFE] The funnel visual in the right pillar** — 47 tabs, 12 groups, endless noise → one signal. Cute. The SVG has no `aria-label` — screen readers get nothing. Wrap it in `role="img" aria-label="Noise sources consolidate into one signal."`
- **[SAFE] Pillars hover states** — on `:hover` the border-left stays navy, border-bottom transparent, slight lift. Good. But the three pillars hover *independently* (primary / models / secondary). Watching the `pillar--primary:hover + pillar--models` rule, the models card's border reacts to primary's hover, which is a nice touch. Keep.
- **[SAFE] Funnel dashed stroke lines** — hardcoded `rgba(74,142,201,0.2)`. Should use `--text-blue` token + CSS opacity, for consistency with the hierarchy system. Token hygiene.

### Not changing (working)

- 2-column grid with the models card occupying bottom-left under the primary pillar — the spec says "2+1 asymmetric"; this is close enough visually. ✓
- "47 tabs. 12 groups. Endless noise. / One signal." caption is strong copy. ✓

---

## 4. Testimonials

Screenshot: `audit-sec-testimonials-desktop.png`

### Findings — this is the weakest section on the page

- **[APPROVAL + BLOCKED] All four testimonials are "Private Member".** Anonymity here reads as fabricated, not exclusive. For HNW prospects, what sells is a named persona (even first-name-only + role + city): *"Marco R. / CTO, Amsterdam / Member since 2023"* beats *"Private Member"* every time. The quotes themselves are plausible but read as synthesized. Options:
  - **A.** You supply 2–3 real testimonials with real names, roles, cities.
  - **B.** I keep the current anonymized frame but add concrete proof points (e.g., "Portfolio $480k → $1.3M" — only if real), which addresses the credibility gap differently.
  - **C.** Drop the section entirely until real testimonials exist and replace with a "recognized on" strip (podcasts Jack has been on, publications quoted in). That may be stronger than weak testimonials.
- **[SAFE + APPROVAL] Carousel shows 3 equal cards at desktop width (`w > 1024 → 3 visible`).** This is the CLAUDE.md banned pattern *"No 3-column equal card layouts"*. DESIGN.md §6 explicitly says *"Testimonials: Asymmetric grid (1.2fr / 1fr)"* — two cards, uneven weighting. The current carousel violates both docs. Options:
  - **A.** Replace carousel with 2-up asymmetric grid (matches spec). [SAFE — I can do this without your approval on visuals; APPROVAL on which testimonials stay.]
  - **B.** Keep carousel but set visible-count to 2 and weight the first card wider. Compromise.
- **[SAFE] Play button is a disabled gray circle when videoId is a placeholder.** After my earlier guard, clicks do nothing and cursor is default. Visually, the placeholder thumbnail is a bare diagonal gradient — reads as "image failed to load" more than "video coming". Either (a) replace with a neutral card layout that doesn't suggest video, (b) add a clear *"Video coming soon"* overlay.
- **[BLOCKED] YouTube video IDs are `PLACEHOLDER_1` through `PLACEHOLDER_4`.** Need real IDs from you.

### Not changing (working)

- Quote typography + location chip in JetBrains Mono. ✓
- `aria-label` on play buttons with full member/location context. ✓

---

## 5. Pricing

Screenshot: `audit-sec-pricing-desktop.png`

### Findings — deviates from the spec

- **[APPROVAL — structural] Four tiers vs three.** CLAUDE.md §6 lists only three: Member $59, Gold $79, Inner Circle $499. DESIGN.md §6 says *"Offset three-tier grid (1fr / 1.15fr / 1fr)"*. Current build has four: Free $0, Member, Gold, Inner Circle. The grid is now `0.85fr 1fr 1.15fr 1fr`. The "Free" tier was added after the spec. Two questions:
  - Do you want the Free tier kept? It's a real strategic decision — a zero-dollar read-only tier lowers activation friction but can cannibalize the $59 Member.
  - If kept, should we visually de-emphasize it further (ghost border, smaller padding) so the eye lands on Gold?
- **[SAFE] Gold tier stacks features like:** "Proprietary TradingView scripts / Real-time portfolio positions / Macro-liquidity frameworks / Premium research sources". "Premium research sources" is vague — every tier probably has some research. Is it third-party research subscriptions being passed through? If so the wording could be *"Third-party research passthrough (WhalePool, Sassal, etc.)"* — but this is speculation. [APPROVAL on exact wording.]
- **[SAFE] "Most Popular" badge on Gold.** Alternatives from your brief: "Recommended", "Best Value". I lean **keep "Most Popular"** because it's an empirical claim that social-proofs; "Recommended" shifts to editorial voice which feels less institutional. No change unless you disagree.
- **[APPROVAL] CTAs aren't parallel:** "Join for Free" / "Join as Member" / "Apply for Gold" / "Apply for Inner Circle". If the positioning is *"application only, selective"*, then "Join" on the lower two tiers breaks the frame. Options:
  - All four become "Apply" (consistent but less-friendly for the free tier).
  - Free → "Read-only Access"; Member → "Join"; Gold/Inner Circle → "Apply". Tiered semantics.
- **[SAFE] Tier feature lists don't start at the same Y.** The "Free" tier has 4 features, Gold has 6. Because pricing/description heights vary, the feature lists begin at different vertical positions. This is the "Feature lists starting at different vertical positions" item from the redesign skill. Fix with `grid-auto-flow: row` on the tier interior + a shared min-height on the description/price block.
- **[SAFE] Tier CTAs aren't pinned to the bottom.** Same issue — the CTAs don't form a horizontal line across all four tiers. `margin-top: auto` on the CTA inside a flex tier fixes it.
- **[SAFE] Mobile pricing grid is 2×2, not single column.** DESIGN.md §7 says *"Pricing: Single column, max-width 480px centered"* on mobile. [globals.css:2225](src/app/globals.css:2225) currently sets `grid-template-columns: 1fr 1fr`. Fix.

### Not changing (working)

- Gold tier featured treatment (taller padding, navy border, ::after gradient). ✓
- Orange `$79` price anchor — wait, it's currently white. DESIGN.md §2 says orange is "reserved for price anchors and special highlights." Prices are all white. Might be worth an amber touch on the Gold `$79/month` as a subtle anchor. [APPROVAL — small visual change.]

---

## 6. Guarantee

Screenshot: `audit-sec-guarantee-desktop.png`

### Findings

- **[SAFE] Badge + paragraph below is correct per spec** — pill shape (radius 50px), navy border, navy checkmark, JetBrains Mono uppercase. ✓
- **[SAFE] Copy: "Join, explore the community, review the frameworks. If you're not satisfied within 7 days, send us a message and we'll refund you in full. No questions asked."** — 34 words. Tight enough but slightly listy. *"Explore the community and review the frameworks. If it's not for you within 7 days, one email gets you a full refund."* — ~23 words, rhythm is better. **[APPROVAL]**
- **[SAFE] The section sits in `.bg-card` (#111111) flanked by #0a0a0a sections.** Subtle elevation pop — correct per spec.

### Not changing (working)

Entire section is spec-compliant. I'd ship it as-is if you don't want the copy edit.

---

## 7. Final CTA

Screenshot: `audit-sec-finalcta-desktop.png`

### Findings

- **[SAFE] Centered layout on this section.** CLAUDE.md bans *"Centered Hero sections"* but allows centered for the closing section (it's a common pattern for final CTAs). Not technically a violation — the banned pattern is specifically for the hero. Leaving as-is.
- **[APPROVAL] Headline "You've been doing this alone long enough."** — strong. Keep.
- **[APPROVAL] Subheadline "Step into a room of serious investors. Get the structure. Get the clarity."** — "Step into a room" is on-brand. "Get the structure. Get the clarity." is staccato-repetitive. Alternatives:
  - *"Step into a room of serious investors. Leave the noise behind."*
  - *"Step into a room of serious investors with the frameworks to back your conviction."*
- **[SAFE] CTA inline style already moved to `.final-cta-btn` class.** ✓ done in earlier pass.

### Not changing (working)

- Discord icon on button. ✓
- Cormorant Garamond 300 on headline at clamp scale. ✓

---

## 8. Footer

Screenshot: `audit-sec-footer-desktop.png`

### Findings

- **[SAFE] "Not financial advice" appears after the copyright on the same line.** DESIGN.md doesn't specify. Treatment could be sharper — put it on its own line in smaller JetBrains Mono uppercase, like a legal chip. Or leave as plain text. Your call.
- **[SAFE] Socials in footer have `aria-label` but SVG inside them lacks `aria-hidden="true"`** — screen readers may double-announce. Minor a11y fix.
- **[SAFE] Four footer items only (Privacy / Terms / Contact / socials).** Skill says *"4-column link farm"* is an anti-pattern. Current is minimal — good. No change.
- **[APPROVAL] Not a finding — just flagging:** There's no email-capture / newsletter in the footer. Given Jack has a Substack, a one-line inline "Get weekly research" subscribe field could live here (same style as the Insights page Substack widget). Would add a second capture path for people who aren't ready to apply.

---

## 9. Mobile

Screenshot: `audit-04-home-mobile-revealed.png`

### Findings

- **[SAFE] Hero stacks correctly to 1 column.** VSL comes after headline. ✓
- **[SAFE] Pillars stack correctly.** Proprietary Analytics → model grid → Curated Investor Circle. ✓
- **[SAFE] Pricing renders as 2×2 on mobile** (already called out above). Should be single column per spec.
- **[SAFE] Testimonials carousel shows 1 card at a time on mobile (`w ≤ 640 → 1`).** ✓ matches spec.
- **[SAFE] Mobile hamburger drawer works** (verified earlier).
- **[SAFE] Nav on mobile shows only `Apply to Join` + hamburger.** Already flagged under Nav — Analytics Terminal is absent from the mobile topbar.
- **[SAFE] The hero's city skyline background** renders and is not too intense on mobile. Ken Burns scale 1.05 at 390px wide is subtle. ✓
- **[SAFE] Touch target audit:** The dropdown chevron in the mobile drawer is absent (drawer lists About + Contact as flat items) — good. Tier CTAs are full-width with ~48px height. ✓

---

## 10. Strategic omissions (what the site is missing overall)

- **No "As seen on" / media strip.** Jack has real podcast credits and publications. A row of logos (blurred or greyscale) under Hero would move credibility faster than any testimonial. [BLOCKED on logo list]
- **No "For analysts" or affiliate hook.** The About page mentions the affiliate program; the landing doesn't. If part of the strategy is recruiting independent analysts, a small block between Pricing and Final CTA could work. [APPROVAL]
- **No explicit "What you won't get" list.** Premium brands often include an anti-list: "No Telegram bot signals. No alpha pumps. No get-rich-quick." This aggressively differentiates from competitor noise. Fits the "institutional, not influencer" positioning. [APPROVAL]
- **No Discord preview / inside-the-room glimpse.** The right pillar teases Discord but the placeholder is weak. One real, blurred screenshot of a live macro-liquidity discussion would be the single strongest trust signal on the page. [BLOCKED on real screenshot]
- **Gold tier `tier-cap` says "Capped at 200 members".** If true, that's a very strong scarcity signal — it should be louder. Currently it's 0.6rem footer text on the card.

---

## Recommended execution order (if you greenlight)

**Wave 1 — Safe-to-ship polish (no approvals needed):**
1. ScrollReveal threshold/rootMargin tweak
2. `prefers-reduced-motion` override
3. Gradient-line section dividers (DESIGN.md §6)
4. Nav `aria-current` on active route
5. Pillars: wrap funnel SVG with role+label; token-ize dashed stroke colors; add "Sample allocation frameworks" caption
6. Pricing: equalize feature-list start Y + pin CTAs to bottom + single-column on mobile
7. Guarantee: no change
8. Final CTA: no change (already fixed inline style)
9. Footer: aria-hidden on social SVGs
10. Add `/404` page + skip-to-content link
11. Hero: wrap "&" in `.amp`; remove "Scroll" filler text

**Wave 2 — Needs your approval (copy / positioning):**
- Hero subhead tightening
- Hero stats (40× Portfolio Growth?)
- Pillars H2 subhead rewrite
- Testimonials strategy (A/B/C from §4)
- Pricing: Free tier keep/drop, CTA labels, feature wording
- Guarantee copy rewrite
- Final CTA subhead rewrite
- "How It Works" section: build / you supply / drop

**Wave 3 — Blocked on real assets:**
- Real VSL video + thumbnail
- Real testimonials (names, quotes, video IDs)
- Real Discord preview screenshot
- Real brand logo SVG
- "As seen on" logos

---

## What I considered and explicitly didn't flag

- **Converting the VSL to a real YouTube lite-embed with lazy facade.** Worth doing — but only once you have a real video ID. Noted for Wave 3.
- **Adding motion-path SVG tracing on the funnel.** Cool, but the CLAUDE.md ruleset (Motion Intensity: 5) says "no animation for animation's sake." The funnel already communicates the idea statically; motion would be decoration.
- **Swapping Cormorant Garamond for a more editorial serif (e.g., Söhne Breit, Tiempos, Reckless).** The spec is locked on PP Eiko with Cormorant as fallback; I won't override.
- **Redesigning the pricing grid to an Apple-style side-by-side comparison.** More dense, good for feature parity, but kills the "Gold is the answer" nudge. Current offset grid is doing correct work.
- **Scroll-driven parallax on hero stats.** Explicitly banned by CLAUDE.md.

---

## Your decision gates

Before I write code, I need a **yes/no on each of these** so Wave 2 can execute:

1. **Hero subhead:** keep long version / swap to spec-tight version?
2. **Hero stats:** leave "Est. 2017 / 10+ Analysts" / add "40× Portfolio Growth" (is it real?) / replace entirely with something else?
3. **"Scroll" filler text:** remove?
4. **"How It Works" section:** build to spec / you supply copy / drop from spec?
5. **Testimonials:** A (you supply real ones), B (add proof points, keep anon), or C (drop section until real, replace with "as seen on")?
6. **Free tier in pricing:** keep / drop?
7. **Pricing CTA labels:** all "Apply" / tiered semantics (Free = Read-only, Member = Join, others = Apply)?
8. **Pillars H2 subhead:** keep "BlockPhi is your all-in-one framework…" / rewrite?
9. **Guarantee copy:** keep / shorten?
10. **Final CTA subhead:** keep / rewrite?
11. **"What you won't get" anti-list:** add / skip?
12. **Footer newsletter capture:** add / skip?

I'll wait for your responses on Wave 2 items. In the meantime, should I proceed on Wave 1 (safe-to-ship polish, ~11 items)?
