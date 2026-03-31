import ScrollReveal from "../ui/ScrollReveal";

export default function Pillars() {
  return (
    <section className="section">
      <div className="container">
        <ScrollReveal className="section-header">
          <span className="section-tag">What You Get</span>
          <h2 className="section-title">Two pillars. One edge.</h2>
          <p className="section-sub">
            Analytics that cut through noise and a room that keeps you
            accountable.
          </p>
        </ScrollReveal>

        <ScrollReveal className="pillars-grid" stagger>
          <div className="pillar">
            <div className="pillar-num">01</div>
            <h3>Proprietary Frameworks</h3>
            <p>
              Real-time TradingView scripts, macro-liquidity models, valuation
              frameworks and charts — the same tools our team uses to manage our
              own positions.
            </p>
          </div>
          <div className="pillar">
            <div className="pillar-num">02</div>
            <h3>Curated Investor Circle</h3>
            <p>
              Every application is reviewed. When someone shares an insight, you
              know it&apos;s worth your attention. No noise. No spam. Only
              serious capital allocators.
            </p>
          </div>
          <div className="pillar">
            <div className="pillar-num">03</div>
            <h3>Cross-Market Allocation</h3>
            <p>
              Sometimes crypto isn&apos;t the right place for your capital. We
              think in allocations across all markets — so you&apos;re never
              trapped in the echo chamber.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
