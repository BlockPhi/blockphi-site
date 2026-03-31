import ScrollReveal from "../ui/ScrollReveal";

export default function Steps() {
  return (
    <section className="section steps-section" id="how">
      <div className="container">
        <ScrollReveal className="section-header">
          <span className="section-tag">How It Works</span>
          <h2 className="section-title">
            From noise to clarity in three moves.
          </h2>
        </ScrollReveal>

        <ScrollReveal className="steps-list" stagger>
          <div className="step">
            <div className="step-num">01</div>
            <div>
              <h3 className="step-title">
                We control who&apos;s in the room
              </h3>
              <p className="step-desc">
                Every application is reviewed. We only accept serious investors —
                so when someone shares a position or thesis, you know it carries
                weight. This circle acts as your signal filter.
              </p>
            </div>
          </div>
          <div className="step">
            <div className="step-num">02</div>
            <div>
              <h3 className="step-title">Access proprietary frameworks</h3>
              <p className="step-desc">
                TradingView scripts, global liquidity overlays, valuation models,
                and real-time charts built in-house. The same systems our
                analysts use to identify when assets are undervalued — or when
                it&apos;s time to take profit.
              </p>
            </div>
          </div>
          <div className="step">
            <div className="step-num">03</div>
            <div>
              <h3 className="step-title">Allocate across all markets</h3>
              <p className="step-desc">
                Sometimes crypto isn&apos;t the right call. BlockPhi covers
                capital allocation across all markets — which sectors to be in,
                when to be in crypto at all, and when to rotate into other
                assets.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
