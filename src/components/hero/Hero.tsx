import { DiscordIcon } from "../ui/Icons";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg" />
      <div className="hero-overlay" />

      <div className="hero-inner">
        <div className="hero-left">
          <div className="hero-tags">
            <span className="tag">Crypto Analytics & Capital Allocation</span>
            <span className="tag">Investor Community</span>
            <span className="tag">Application Only</span>
          </div>
          <h1>
            Invest With Structure.
            <br />
            Allocate With Conviction.
          </h1>
          <p className="hero-sub">
            Proprietary crypto and macro frameworks that turn data into
            actionable investment decisions, exclusive to our select investor
            community.
          </p>
          <div className="hero-actions">
            <a href="#" className="btn-primary">
              <DiscordIcon />
              Apply to Join
            </a>
            <a href="https://analytics.blockphi.com" target="_blank" rel="noopener noreferrer" className="btn-analytics">
              <span className="btn-analytics-label">Analytics Terminal</span>
              <svg className="btn-analytics-arrow" width="10" height="10" viewBox="0 0 10 10" fill="none">
                <path d="M1 9L9 1M9 1H3M9 1V7" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </div>

        <div className="hero-right">
          <div className="vsl-container">
            <img
              src="/images/placeholder-vsl-thumbnail.png"
              alt="Watch Overview"
              className="vsl-thumbnail"
            />
            <div className="vsl-inner">
              <div className="play-btn">
                <svg viewBox="0 0 24 24">
                  <polygon points="8,5 20,12 8,19" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
