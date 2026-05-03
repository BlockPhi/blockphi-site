import Image from "next/image";
import Link from "next/link";
import { ANALYTICS_URL, APPLY_URL } from "@/lib/links";
import HeroSpotlight from "./HeroSpotlight";
import HeroScrollFade from "./HeroScrollFade";
import CountUp from "@/components/ui/CountUp";

const PARTNERS = [
  { name: "Kraken",      href: "https://kraken.pxf.io/kOW4gv",              logo: "/images/partners/kraken.svg",      w: 94, h: 16 },
  { name: "Ledger",      href: "https://shop.ledger.com/?r=5e80d45c0500",   logo: "/images/partners/ledger.svg",      w: 66, h: 22 },
  { name: "Bybit",       href: "https://partner.bybit.com/b/JACKGREEN",     logo: "/images/partners/bybit.svg",       w: 68, h: 22 },
  { name: "TradingView", href: "https://www.tradingview.com/?aff_id=143172", logo: "/images/partners/tradingview.svg", w: 20, h: 20, lockup: true },
  { name: "Tangem",      href: "https://tangem.com/invite/BLOCKPHI",        logo: "/images/partners/tangem.svg",      w: 78, h: 18 },
];

export default function Hero() {
  return (
    <section className="hero">
      <HeroScrollFade />
      <div className="hero-bg" />
      <div className="hero-overlay" />
      <HeroSpotlight />

      <div className="hero-inner">
        <div className="hero-left">
          <div className="hero-tags">
            <span className="hero-eyebrow">
              Crypto Analytics <span className="hero-eyebrow-sep" aria-hidden="true">·</span> Global Macro <span className="hero-eyebrow-sep" aria-hidden="true">·</span> Invite-Only Community
            </span>
            <div className="hero-eyebrow-rule" aria-hidden="true" />
          </div>
          <h1>
            <span className="h1-word" style={{ animationDelay: "0.7s" }}>Invest</span>{" "}
            <span className="h1-word" style={{ animationDelay: "0.92s" }}>With</span>{" "}
            <span className="h1-word" style={{ animationDelay: "1.14s" }}>Structure.</span>
            <br />
            <span className="h1-word" style={{ animationDelay: "1.74s" }}>Allocate</span>{" "}
            <span className="h1-word" style={{ animationDelay: "1.96s" }}>With</span>{" "}
            <span className="h1-word" style={{ animationDelay: "2.18s" }}>Conviction.</span>
          </h1>
          <p className="hero-sub">
            Quantitative crypto and macro frameworks that turn data into
            actionable investment decisions, exclusive to our select investor
            community.
          </p>
          <div className="hero-actions">
            <a
              href={APPLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Apply to Join
            </a>
            <a href={ANALYTICS_URL} target="_blank" rel="noopener noreferrer" className="btn-analytics">
              <span className="btn-analytics-label">Analytics Terminal</span>
              <svg className="btn-analytics-arrow" width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
                <path d="M1 9L9 1M9 1H3M9 1V7" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>

          {/* Plain <img> on purpose: next/image blocks local SVGs, and the
              CSS filter pipeline needs the raw <img> element. The PARTNERS
              array is rendered twice so the row can be an infinite marquee
              on mobile; the second pass is aria-hidden and removed from tab
              order. On desktop the duplicate set is display:none'd by CSS. */}
          <div className="hero-partners" aria-label="Trusted partners">
            <span className="hero-partners-label">Trusted Partners</span>
            <div className="hero-partners-row">
              <div className="hero-partners-track">
                {[...PARTNERS, ...PARTNERS].map((p, i) => {
                  const isDupe = i >= PARTNERS.length;
                  return (
                    <a
                      key={i}
                      href={p.href}
                      target="_blank"
                      rel="noopener noreferrer sponsored"
                      className={`hero-partner${p.lockup ? " hero-partner--lockup" : ""}${isDupe ? " hero-partner--dupe" : ""}`}
                      aria-label={isDupe ? undefined : `${p.name} (opens in a new tab)`}
                      aria-hidden={isDupe ? true : undefined}
                      tabIndex={isDupe ? -1 : undefined}
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={p.logo}
                        alt=""
                        width={p.w}
                        height={p.h}
                        className="hero-partner-logo"
                      />
                      {p.lockup && <span className="hero-partner-word">{p.name}</span>}
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <div className="hero-right">
          <div className="vsl-container">
            <Image
              src="/images/placeholder-vsl-thumbnail.png"
              alt="Overview video thumbnail"
              className="vsl-thumbnail"
              width={720}
              height={405}
              priority
              sizes="(max-width: 960px) 100vw, 50vw"
            />
            <div className="vsl-inner">
              <button
                type="button"
                className="play-btn"
                aria-label="Play overview video"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <polygon points="8,5 20,12 8,19" />
                </svg>
              </button>
            </div>
          </div>
          <div className="vsl-meta-row">
            <blockquote className="vsl-quote">
              &ldquo;I&rsquo;ve built this to be the only resource you need.&rdquo;
              <cite className="vsl-quote-attr">&ndash; Jack Green</cite>
            </blockquote>
          </div>
        </div>
      </div>

      <div className="hero-bottom">
        <div className="scroll-hint">
          <div className="scroll-line" />
          <span className="scroll-text">Scroll</span>
        </div>
        <div className="hero-stats">
          <span className="stat">Est. 2017</span>
          <span className="stat-sep" aria-hidden="true" />
          <Link href="/about#analysts" className="stat stat-link" aria-live="polite"><CountUp to={10} startDelay={1000} duration={1200} />+ Analysts</Link>
        </div>
      </div>
    </section>
  );
}
