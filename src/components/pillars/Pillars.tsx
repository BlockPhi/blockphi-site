import Image from "next/image";
import ScrollReveal from "../ui/ScrollReveal";
import SectionTitle from "../ui/SectionTitle";
import AnalyticsPane from "./AnalyticsPane";

/* Platform logos that represent the "noise" investors deal with */
const noiseSources = [
  { name: "X", icon: (
    <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
  )},
  { name: "Telegram", icon: (
    <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
    </svg>
  )},
  { name: "YouTube", icon: (
    <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12z"/>
    </svg>
  )},
  { name: "Chrome", icon: (
    <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
      <path d="M12 0C8.21 0 4.831 1.757 2.632 4.501l3.953 6.848A5.454 5.454 0 0 1 12 6.545h10.691A12 12 0 0 0 12 0zM1.931 5.47A11.943 11.943 0 0 0 0 12c0 6.012 4.42 10.991 10.189 11.864l3.953-6.847a5.45 5.45 0 0 1-6.865-2.29zm13.342 2.166a5.446 5.446 0 0 1 1.45 7.09l.002.001-3.953 6.848c.252.018.505.025.76.025 6.627 0 12-5.373 12-12 0-1.033-.134-2.037-.382-2.964zM12 8.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7z"/>
    </svg>
  )},
  { name: "Reddit", icon: (
    <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
      <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z"/>
    </svg>
  )},
  { name: "Discord", icon: (
    <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
      <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189z"/>
    </svg>
  )},
];

export default function Pillars() {
  return (
    <section className="section bg-elevated bg-navy-depth">
      <div className="container">
        <ScrollReveal className="section-header">
          <span className="section-tag">What You Get</span>
          <SectionTitle>Two pillars. One edge.</SectionTitle>
          <p className="section-sub">
            Quantitative macro analytics and a curated peer circle.
            <br />
            BlockPhi is your all-in-one framework for wealth management across crypto and global markets.
            <br />
            Built for investors with long horizons focused on building durable returns.
          </p>
        </ScrollReveal>

        <ScrollReveal className="pillars-layout" stagger>
          {/* ── LEFT PILLAR: Proprietary Analytics ── */}
          <div className="pillar pillar--analytics">
            {/* Header — title + 2-line description above the chart pane.
                No decorative icon: institutional sites (Two Sigma, AQR,
                Citadel) earn the space with typography alone. */}
            <div className="pillar-header">
              <h3>Proprietary Analytics</h3>
              <p>
                Our proprietary frameworks for Global Liquidity&apos;s
                transmission to Bitcoin. Built to identify asymmetric
                entries ahead of consensus, for investors who want the
                data behind the thesis, not just the conclusion.
              </p>
            </div>

            <AnalyticsPane />

            {/* Three live-state metrics, one per framework lens
                surfaced in the chart pane:
                  - BTC z-score divergence  ─ Regime tab (chart 05)
                  - 11W forecast q50 median ─ Forecast tab (chart 09)
                  - 52W rolling β            ─ Sensitivity tab (chart 10)
                Values shown here are calibrated placeholders. Once the
                analytics-terminal API is wired up, each one updates
                live from its source chart. The pulsing dot at the
                "View live data" link signals that these are
                time-varying, not static framework parameters. */}
            <div className="analytics-footer">
              <div className="analytics-metric-set">
                <div className="analytics-metric">
                  <span className="analytics-metric-num">-1.08σ</span>
                  <span className="analytics-metric-key">BTC Z-Score</span>
                </div>
                <div className="analytics-metric">
                  <span className="analytics-metric-num">+0.4%</span>
                  <span className="analytics-metric-key">11W Forecast</span>
                </div>
                <div className="analytics-metric">
                  <span className="analytics-metric-num">0.018</span>
                  <span className="analytics-metric-key">Rolling β</span>
                </div>
              </div>
              <a
                href="https://analytics.blockphi.com"
                target="_blank"
                rel="noopener noreferrer"
                className="analytics-terminal-link"
              >
                <span className="analytics-live-dot" aria-hidden="true" />
                View live data
              </a>
            </div>
          </div>

          {/* ── RIGHT PILLAR: Curated Investor Circle ── */}
          <div className="pillar pillar--secondary">
            {/* Discord screenshot placeholder */}
            <div className="pillar-screenshot" aria-hidden="true">
              <div className="pillar-screenshot-placeholder">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" width="20" height="20" opacity="0.25">
                  <rect x="2" y="3" width="20" height="18" rx="2" />
                  <path d="M2 8h20" />
                  <circle cx="5" cy="5.5" r="0.8" fill="currentColor" stroke="none" />
                  <circle cx="7.5" cy="5.5" r="0.8" fill="currentColor" stroke="none" />
                  <circle cx="10" cy="5.5" r="0.8" fill="currentColor" stroke="none" />
                </svg>
                <span>Discord preview</span>
              </div>
            </div>

            <h3>Curated Investor Circle</h3>
            <p>
              An invitation only circle of high net worth individuals and
              institutions sharing high conviction thesis reports.
            </p>

            {/* Noise-to-signal funnel visual */}
            <div className="funnel-visual" aria-hidden="true">
              <div className="funnel-noise">
                {noiseSources.map((source, i) => (
                  <div
                    key={source.name}
                    className="funnel-source"
                    style={{ '--i': i } as React.CSSProperties}
                  >
                    {source.icon}
                  </div>
                ))}
              </div>

              <svg
                className="funnel-lines"
                viewBox="0 0 200 200"
                fill="none"
                preserveAspectRatio="none"
                role="img"
                aria-label="Diagram: six external information sources converging into a single signal at the center."
              >
                <path d="M30 25 L100 100" stroke="currentColor" strokeWidth="0.75" strokeDasharray="3 4" />
                <path d="M170 20 L100 100" stroke="currentColor" strokeWidth="0.75" strokeDasharray="3 4" />
                <path d="M15 90 L100 100" stroke="currentColor" strokeWidth="0.75" strokeDasharray="3 4" opacity="0.9" />
                <path d="M185 85 L100 100" stroke="currentColor" strokeWidth="0.75" strokeDasharray="3 4" opacity="0.9" />
                <path d="M50 170 L100 100" stroke="currentColor" strokeWidth="0.75" strokeDasharray="3 4" />
                <path d="M155 165 L100 100" stroke="currentColor" strokeWidth="0.75" strokeDasharray="3 4" />
              </svg>

              <div className="funnel-center">
                <Image
                  src="/images/BlockPhi-Icon-White-PNG.png"
                  alt=""
                  width={28}
                  height={36}
                  style={{ objectFit: "contain" }}
                />
              </div>
            </div>
            <p className="funnel-caption">
              Many sources.<br />
              <span>One signal.</span>
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
