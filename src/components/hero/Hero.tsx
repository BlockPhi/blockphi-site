import { DiscordIcon } from "../ui/Icons";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg" />
      <div className="hero-overlay" />

      <div className="hero-inner">
        <div className="hero-left">
          <div className="hero-tags">
            <span className="tag">Investment Analytics</span>
            <span className="tag">200 Members Max</span>
            <span className="tag">Est. 2016</span>
          </div>
          <h1>
            Crypto Analytics
            <br />
            <span className="amp">&amp;</span> Capital Allocation
          </h1>
          <p className="hero-sub">
            Data-driven investment frameworks, exclusive to our select investor
            community
          </p>
          <div className="hero-actions">
            <a href="#" className="btn-primary">
              <DiscordIcon />
              Apply to Join
            </a>
            <a href="#how" className="btn-ghost">
              See How It Works &rarr;
            </a>
          </div>
        </div>

        <div className="hero-right">
          <div className="vsl-container">
            <div className="vsl-inner">
              <div className="play-btn">
                <svg viewBox="0 0 24 24">
                  <polygon points="8,5 20,12 8,19" />
                </svg>
              </div>
              <div className="vsl-label">Watch Overview</div>
              <div className="vsl-duration">9 min</div>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-bottom">
        <div className="scroll-hint">
          <div className="scroll-line" />
          <div className="scroll-text">Scroll</div>
        </div>
        <div className="hero-stats">
          <div className="stat">
            <div className="num">40&times;</div>
            <div className="label">Portfolio Growth</div>
          </div>
          <div className="stat">
            <div className="num">10+</div>
            <div className="label">Analysts</div>
          </div>
          <div className="stat">
            <div className="num">2016</div>
            <div className="label">Active Since</div>
          </div>
        </div>
      </div>
    </section>
  );
}
