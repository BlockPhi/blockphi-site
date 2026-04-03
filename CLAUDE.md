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
- **Text blue:** #4A8EC9 — muted steel blue, used ONLY for readable text on dark backgrounds (section tags, ampersand, step numbers, pillar icons). Navy stays for buttons, borders, backgrounds, and all non-text uses.
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

## Skill Priority Order

This project uses two frontend design skills. When they conflict, the first one always wins.

**PRIMARY (override everything): taste-skill**
Source: https://github.com/Leonxlnx/taste-skill
Controls: All first-principle design decisions — layout structure, color rules, typography choices, spacing system, motion intensity, anti-slop patterns.
Our settings: DESIGN_VARIANCE: 7, MOTION_INTENSITY: 5, VISUAL_DENSITY: 3
These rules are final. If the secondary skill suggests something that contradicts taste-skill, ignore the secondary skill.

Specific taste-skill rules that are non-negotiable:
- Asymmetric layouts only (no centered heroes, no 3-equal-card rows)
- Our exact color palette (navy #001F3F for non-text, text-blue #4A8EC9 for readable accent text, #0a0a0a base, #fcfcfc white)
- Our exact fonts (Cormorant Garamond headlines, Montserrat body, JetBrains Mono data)
- Border-top dividers over card boxes
- min-h-[100dvh] not h-screen
- cubic-bezier(0.16, 1, 0.3, 1) easing
- No AI tells (no Inter, no pure black, no neon, no emoji, no AI copy cliches)
- No 3-column equal card grids
- White opacity hierarchy: 100% / 60% / 40% / 25% / 12% / 6%

**SECONDARY (creative supplement): frontend-design (Anthropic plugin)**
Source: anthropics/claude-code plugin
Controls: Creative ideas, aesthetic inspiration, interaction patterns, animation concepts, component ideas, and design philosophy that DOESN'T contradict the primary skill.
Use this for: Fresh layout ideas within our asymmetric system, creative hover states, scroll interaction concepts, typography pairing suggestions (that still use our locked fonts), visual depth techniques, and any creative direction that enhances the primary rules without breaking them.
Do NOT use this for: Choosing different fonts, overriding our color palette, suggesting centered layouts, adding emoji, or any pattern banned by the primary skill.

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

## Screenshot Workflow
- **Always screenshot from localhost:** `node screenshot.mjs http://localhost:3000`
- Screenshots are saved automatically to `./temporary-screenshots/screenshot-N.png` (auto-incremented, never overwritten).
- Optional label suffix: `node screenshot.mjs http://localhost:3000 label` → saves as `screenshot-N-label.png`
- `screenshot.mjs` lives in the project root. Use it as-is.
- After screenshotting, read the PNG from `temporary-screenshots/` with the Read tool — Claude can see and analyze the image directly.
- When comparing, be specific: "heading is 32px but reference shows ~24px", "card gap is 16px but should be 24px"
- Check: spacing/padding, font size/weight/line-height, colors (exact hex), alignment, border-radius, shadows, image sizing

### When to Screenshot
- **BEFORE starting any visual/frontend task:** Take a screenshot first to see the current state before making changes.
- **AFTER every visual change:** After editing any component, page, layout, color, font, spacing, or animation — take a screenshot and compare it to the reference design (blockphi-landing-v5.html) and to the before screenshot.
- **When I share a reference image or screenshot:** Compare it pixel-by-pixel against a fresh localhost screenshot.
- **NOT needed for:** Editing CLAUDE.md, config files, package.json, non-visual code changes, or text-only tasks.

When reviewing a screenshot, always check:
1. Does it match the design system in DESIGN.md?
2. Are the colors correct? (exact hex values, not approximations)
3. Is the text-blue #4A8EC9 used for text, and navy #001F3F used for non-text elements?
4. Is the white opacity hierarchy correct? (100/60/40/25/12/6)
5. Are layouts asymmetric per taste-skill rules?
6. Does anything look broken, misaligned, or off-brand?

If something looks wrong, fix it before moving on. Don't wait for me to notice.

## Key Links
- Live site: www.blockphi.com
- Analytics: analytics.blockphi.com
- Whop (payments): whop.com
- GitHub repo: (to be created)
- Vercel dashboard: (Maurits manages)
