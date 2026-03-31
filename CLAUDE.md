@AGENTS.md

# CLAUDE.md — BlockPhi Capital Website

## Project Overview
BlockPhi Capital is an investment analytics firm that builds proprietary frameworks for crypto and capital allocation, delivered through a premium investor community. This is the public-facing marketing website at www.blockphi.com.

Target audience: high-net-worth, time-poor, macro-curious crypto investors (28-44, mostly male, €100k-€5M net worth). The site must feel institutional, serious, and premium — not like a Discord community or crypto influencer page.

## Tech Stack
- **Framework:** Next.js (App Router) with TypeScript
- **Styling:** Tailwind CSS
- **Fonts:** Montserrat (body/UI), PP Eiko Thin (headlines — self-hosted, use Cormorant Garamond 300 as fallback), JetBrains Mono (tags, numbers, stats, pricing)
- **Hosting:** Vercel
- **Payments:** Whop
- **Community:** Discord (authenticated via Whop)
- **Analytics subdomain:** analytics.blockphi.com (separate Vercel project, managed by Maurits)

## Brand Colors
Base is black, not white. Navy is for details only — never the background.

- **Black base:** #0a0a0a (page background)
- **Card/elevated:** #111111
- **Navy (primary detail):** #001F3F — borders, tags, CTAs, accents
- **Navy mid:** #003166 — hover states
- **Navy bright:** #0A81FF — active states, focus rings (use sparingly)
- **Orange:** #f7931a — reserved for price anchors and special highlights only, NOT primary CTA
- **Complementary:** #3F2000
- **White:** #fcfcfc
- **Charcoal:** #1A1A1A
- **Gray:** #4D4D4D

Primary CTA buttons use navy background (#001F3F), not orange. Orange is an accent, not the main action color.

## Design System (taste-skill settings)
This project uses the taste-skill from https://github.com/Leonxlnx/taste-skill with these dial values:

- **DESIGN_VARIANCE: 7** — Asymmetric layouts. No centered heroes. No 3-equal-card rows.
- **MOTION_INTENSITY: 5** — Fluid CSS transitions. No parallax, no magnetic buttons, no particles.
- **VISUAL_DENSITY: 3** — Art gallery airy. Generous whitespace. Everything breathes.

Read DESIGN.md in project root for the full brand design system.

## Layout Rules
- All layouts use CSS Grid, never flexbox percentage math
- Max content width: 1400px centered (`max-w-[1400px] mx-auto`)
- Hero sections: `min-h-[100dvh]` — NEVER use `h-screen` (breaks iOS Safari)
- Hero layout: asymmetric split — headline left, VSL right. Never centered.
- Section dividers: use `border-top` or negative space, not card boxes
- Pricing: offset grid (1fr / 1.15fr / 1fr), Gold tier wider and elevated
- Three equal columns are banned. Use 2+1, zig-zag, or asymmetric grids.
- Mobile (<768px): everything collapses to single column, no exceptions
- Touch targets: minimum 44px

## Motion Rules
- Default easing: `cubic-bezier(0.16, 1, 0.3, 1)` on all transitions
- Sections reveal on scroll with IntersectionObserver (fade-up, 0.7s)
- Stagger children with `animation-delay: calc(var(--index) * 80ms)`
- Hero background: Ken Burns effect (slow zoom, 25s, infinite alternate)
- Only animate `transform` and `opacity` — never top/left/width/height
- No scroll hijacking, no parallax tilt, no magnetic hover effects

## Typography Rules
- Headlines: PP Eiko Thin / Cormorant Garamond 300, `clamp(2.4rem, 5vw, 4.2rem)`, tracking tight, weight 300
- Body: Montserrat 300-500, max-width 65ch, relaxed leading
- Tags/numbers/stats: JetBrains Mono 300-400, small caps, letter-spacing 0.08-0.12em
- No Inter, Roboto, Arial, or system fonts anywhere
- Hierarchy through weight and color, not just size

## Banned Patterns (AI Tells)
Never generate any of these:
- Emojis in UI
- Pure black (#000000) — use #0a0a0a or #1A1A1A
- Neon glows or outer box-shadow glows
- Purple/blue AI gradients
- Gradient text on headlines
- Custom mouse cursors
- Generic names ("John Doe", "Acme")
- Fake round numbers (99.99%, 50%)
- AI copy clichés: "Elevate", "Seamless", "Unleash", "Next-Gen", "Empower", "Revolutionize"
- Filler text: "Scroll to explore", scroll arrows, bouncing chevrons
- Literal crypto imagery (coins, candlestick charts) in hero or branding
- Centered hero sections
- Three equal cards in a row
- Broken Unsplash links — use picsum.photos or SVG if needed

## Copy Voice
- Concise, direct, scannable
- Analytics-first positioning — "investment analytics firm", not "platform" or "community"
- Key terms: capital allocation, data-driven frameworks, vetted/select/curated, macro markets
- Both pillars (analytics + community) should feel co-equal
- No hype, no urgency tricks in body copy
- Price is a filter, not a barrier

## Site Sections (landing page)
1. **Nav** — Logo symbol + "BlockPhi Capital", links: Home, Analytics, Services, Insights, About, CTA: "Apply to Join"
2. **Hero** — Headline: "Crypto Analytics & Capital Allocation", sub: "Data-driven investment frameworks, exclusive to our select investor community", VSL right, stats bottom
3. **Pillars** — "Two pillars. One edge." — Proprietary Frameworks / Curated Investor Circle / Cross-Market Allocation
4. **How It Works** — Three numbered steps with border-top dividers
5. **Social Proof** — Member testimonials in asymmetric grid
6. **Pricing** — Three tiers: Member ($59), Gold ($79, featured), Inner Circle ($499)
7. **Guarantee** — 7-day money-back
8. **Final CTA** — "You've been doing this alone long enough."
9. **Footer** — Copyright, Privacy, Terms, Contact

## File Structure Conventions
- Pages in `src/app/`
- Components in `src/components/` grouped by section (e.g. `src/components/hero/`, `src/components/pricing/`)
- Shared UI primitives in `src/components/ui/`
- Fonts in `src/fonts/` (self-hosted PP Eiko when available)
- Images in `public/images/`
- Use server components by default, only add `'use client'` when interactivity requires it

## Key Links
- Live site: www.blockphi.com
- Analytics: analytics.blockphi.com
- Whop (payments): whop.com
- GitHub repo: (to be created)
- Vercel dashboard: (Maurits manages)
