# Design System: BlockPhi Capital

## 1. Visual Theme & Atmosphere
A restrained, gallery-airy interface with confident asymmetric layouts and fluid spring-physics motion. The atmosphere is institutional yet warm — like a private wealth office with Bloomberg terminals and natural light. Dark foundations with surgical navy accents. Nothing screams; everything signals competence. The feeling is: "these people manage real capital."

- **Density:** 3 (Art Gallery Airy) — generous whitespace, everything breathes
- **Variance:** 7 (Offset Asymmetric) — left-aligned heroes, split grids, never centered-and-equal
- **Motion:** 5 (Fluid CSS) — smooth transitions, staggered load-ins, no animation for animation's sake

## 2. Color Palette & Roles
- **Deep Canvas** (#0A0A0A) — Primary background surface, near-black foundation
- **Elevated Surface** (#111111) — Card fills, elevated sections
- **Pure Surface** (#fcfcfc) — Text on dark, clean containers
- **Naval Ink** (#001F3F) — Primary brand detail color, nav elements, borders, accents, CTAs
- **Naval Mid** (#003166) — Hover states, secondary brand touches
- **Naval Bright** (#0A81FF) — Active states, links, focus rings (use sparingly)
- **Text Blue** (#4A8EC9) — Muted steel blue for readable text on dark backgrounds. Used for section tags, hero ampersand, step numbers, pillar icons. Navy stays for all non-text elements (buttons, borders, backgrounds, strokes).
- **Amber Signal** (#f7931a) — Warm accent for price anchors and special highlights only. NOT primary CTA color.
- **Amber Dim** (rgba(247,147,26,0.10)) — Subtle accent backgrounds, tag fills
- **Warm Complement** (#3F2000) — Deep warm for gradients or shadow tinting
- **Steel Text** (#4D4D4D) — Secondary text on light surfaces
- **Charcoal** (#1A1A1A) — Near-black for text on light, subtle depth layers
- **Whisper Border** (rgba(252,252,252,0.06)) — Structural dividers on dark surfaces
- **Whisper Border Hover** (rgba(252,252,252,0.12)) — Hover state dividers
- **Navy Border** (rgba(0,31,63,0.3)) — Brand-tinted structural borders
- **Navy Border Hover** (rgba(0,31,63,0.5)) — Brand-tinted hover borders

**Palette Rule:** Black/dark base (#0A0A0A), white text (#fcfcfc). Navy (#001F3F) for details only — borders, tags, CTAs, subtle accents. Orange (#f7931a) reserved for price anchors and special highlights. No purple. No neon. No gradients on text.

## 3. Typography Rules
- **Display / Headlines:** PP Eiko Thin — ultra-thin serif, elegant, editorial. Track-tight, controlled scale. Weight and color drive hierarchy, not screaming size. (Fallback: Cormorant Garamond 300 via Google Fonts until PP Eiko is self-hosted.)
- **Body / UI:** Montserrat 300-600 — clean sans-serif, professional, readable. Leading relaxed, max 65ch per line.
- **Mono / Data:** JetBrains Mono 300-400 — for tags, numbers, stats, pricing, timestamps.
- **Banned:** Inter, Roboto, Arial, system fonts. Generic serifs (Times New Roman, Georgia, Garamond, Palatino).
- **Hero headline scale:** clamp(3rem, 5vw, 4.2rem)
- **Section title scale:** clamp(2rem, 3.5vw, 2.8rem)
- **Body:** 0.85rem, weight 300, color white-40

## 4. Hero Section
- **Layout:** Asymmetric split grid — headline + CTA left (1fr), VSL container right (1.15fr). Never centered.
- **Background:** Full-bleed aerial night cityscape (Midjourney-generated), dark left zone for text, warm amber glow bottom-right. Ken Burns animation (25s cycle, scale 1.0 to 1.05, infinite alternate).
- **Overlay:** Diagonal gradient — 88% opacity top-left fading to transparent bottom-right, plus top-down fade.
- **Tags:** JetBrains Mono 0.58rem, letter-spacing 0.1em, navy border, above headline.
- **Headline:** "Crypto Analytics & Capital Allocation" — Cormorant Garamond 300 (PP Eiko Thin in production). The "&" in navy-mid color.
- **Subheadline:** "Data-driven investment frameworks, exclusive to our select investor community" — Cormorant Garamond italic 300, white-40.
- **CTA:** "Apply to Join" with Discord icon, navy background. Ghost button: "See How It Works"
- **VSL:** Frosted glass container (backdrop-blur, navy border), play button with navy ring, "Watch Overview, 9 min"
- **Stats bar:** Bottom of hero — "40x Portfolio Growth", "10+ Analysts", "2016 Active Since" in JetBrains Mono
- **Scroll hint:** Bottom-left, vertical text with animated navy line
- **No:** Scroll arrows, bouncing chevrons, "scroll to explore" secondary text

## 5. Component Stylings
- **Buttons (Primary):** Background navy (#001F3F), text white, border 1px rgba(0,49,102,0.4), border-radius 4px. Hover: navy-mid, translateY(-1px), box-shadow. Active: translateY(0).
- **Buttons (Ghost):** Transparent, 1px border white-06, text white-40. Hover: border white-12, text white-60.
- **Cards/Pillars:** Background black (#0A0A0A) inside a 1px gap grid with white-06 borders. Hover: background elevates to #111111. Navy gradient line appears on top on hover.
- **Tags:** JetBrains Mono 0.58-0.6rem, letter-spacing 0.1-0.2em, navy-mid color, navy background rgba(0,31,63,0.08).
- **Section Tags:** JetBrains Mono 0.6rem, letter-spacing 0.3em, navy-mid color, uppercase.
- **Section Numbers:** JetBrains Mono 2.4rem, weight 300, color rgba(0,31,63,0.4) — positioned as visual anchors in step layouts.
- **Pricing Badge:** JetBrains Mono 0.55rem, navy background, white text, absolute positioned top -10px.
- **Guarantee Badge:** Pill shape (border-radius 50px), navy border, navy checkmark SVG.

## 6. Layout Principles
- CSS Grid first. Never flexbox percentage math.
- Max-width containment: 1380px centered with clamp(1.5rem, 4vw, 3.5rem) padding.
- Hero: min-h-[100dvh] — NEVER use h-screen
- Section vertical rhythm: clamp(5rem, 10vw, 8rem) gaps
- **Pillars:** 2-column grid with third item spanning full width (grid-column: 1 / -1). NOT three equal cards.
- **Steps:** Left-aligned numbered list with 80px number column + 1fr content. Border-bottom dividers, no card boxes.
- **Testimonials:** Asymmetric grid (1.2fr / 1fr).
- **Pricing:** Offset three-tier grid (1fr / 1.15fr / 1fr). Center tier (Gold) wider and elevated with navy border treatment.
- **Dividers:** Gradient line — linear-gradient(90deg, transparent, navy-border, transparent)

## 7. Responsive Rules
- **Mobile-first collapse (< 960px):** All multi-column to single column
- **Nav:** Hide text links, show hamburger
- **Hero:** Stack to single column, padding-top 7rem
- **Pillars:** Single column, third pillar grid-column auto
- **Steps:** Reduce number column to 50px, font-size 1.8rem
- **Pricing:** Single column, max-width 480px centered
- **Testimonials:** Single column
- **Small mobile (< 480px):** Hero h1 drops to 2.4rem, hero actions stack vertically
- **No horizontal scroll** — ever
- **Touch targets:** All interactive elements min 44px

## 8. Motion & Interaction
- Default easing: cubic-bezier(0.16, 1, 0.3, 1) on all transitions
- Hero elements: staggered fadeUp animations with 0.8s duration, delays from 0.3s to 1.2s
- Sections reveal on scroll with IntersectionObserver (threshold 0.12, rootMargin -40px bottom)
- Reveal animation: opacity 0 to 1, translateY(24px to 0), 0.7s duration
- Stagger children: translateY(18px to 0), 0.6s duration, 80ms delay between siblings
- Ken Burns on hero background: scale(1) to scale(1.05), 25s, ease-in-out, infinite alternate
- Scroll hint line: pulsing opacity 0.3 to 1, 2.5s, ease-in-out, infinite
- Hover states: translateY(-3px) on cards/tiers, scale(1.06) on play button
- Only animate transform and opacity — never top/left/width/height
- No: parallax tilt, magnetic buttons, particle effects, scroll hijacking

## 9. Anti-Patterns (Banned)
- No emojis anywhere in UI
- No Inter, Roboto, Arial, or system fonts
- No pure black (#000000) — use #0A0A0A or #1A1A1A
- No neon/outer glow shadows
- No purple/blue AI gradients
- No oversaturated accents
- No gradient text on headers
- No custom mouse cursors
- No 3-column equal card layouts
- No centered Hero sections
- No generic names ("John Doe", "Acme")
- No fake round numbers (99.99%, 50%)
- No AI copywriting cliches: "Elevate", "Seamless", "Unleash", "Next-Gen", "Empower", "Revolutionize"
- No filler UI text: "Scroll to explore", scroll arrows, bouncing chevrons
- No literal crypto imagery (coins, candlestick charts) in hero or branding
- No broken Unsplash links — use picsum.photos or SVG if needed
- No overlapping elements — clean spatial separation always
- No h-screen — always min-h-[100dvh]
