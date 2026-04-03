import ScrollReveal from "../ui/ScrollReveal";

export default function Pricing() {
  return (
    <section className="section bg-elevated bg-navy-depth" id="pricing">
      <div className="container">
        <ScrollReveal className="section-header">
          <span className="section-tag">Membership</span>
          <h2 className="section-title">Choose your level of access.</h2>
          <p className="section-sub">
            Start for free. Upgrade when you&apos;re ready. The price is a
            filter, not a barrier.
          </p>
        </ScrollReveal>

        <ScrollReveal className="pricing-grid" stagger>
          {/* Free */}
          <div className="tier tier--free">
            <div className="tier-name">Free</div>
            <div className="tier-desc">
              Read-only access to the community.
            </div>
            <div className="tier-price">
              <span className="tier-amount">$0</span>
              <span className="tier-period">/forever</span>
            </div>
            <ul className="tier-features">
              <li>Read-only Discord</li>
              <li>Public research</li>
              <li>Show archives</li>
              <li>Market updates</li>
            </ul>
            <a href="#" className="tier-cta">
              Join for Free
            </a>
          </div>

          {/* Member */}
          <div className="tier">
            <div className="tier-name">Member</div>
            <div className="tier-desc">
              Full community access with analytics.
            </div>
            <div className="tier-price">
              <span className="tier-amount">$59</span>
              <span className="tier-period">/month</span>
            </div>
            <ul className="tier-features">
              <li>Full community access</li>
              <li>Daily market discussion</li>
              <li>Read-only framework access</li>
              <li>Member referral program</li>
            </ul>
            <a href="#" className="tier-cta">
              Join as Member
            </a>
          </div>

          {/* Gold (Featured) */}
          <div className="tier tier--featured">
            <div className="tier-badge">Most Popular</div>
            <div className="tier-name">Gold</div>
            <div className="tier-desc">
              Full analytics, frameworks, and real-time positions.
            </div>
            <div className="tier-price">
              <span className="tier-amount">$79</span>
              <span className="tier-period">/month</span>
            </div>
            <ul className="tier-features">
              <li>Everything in Member</li>
              <li>Proprietary TradingView scripts</li>
              <li>Real-time portfolio positions</li>
              <li>Macro-liquidity frameworks</li>
              <li>Premium research sources</li>
              <li>Annual in-person meetup</li>
            </ul>
            <a href="#" className="tier-cta">
              Apply for Gold
            </a>
            <div className="tier-cap">Capped at 200 members</div>
          </div>

          {/* Inner Circle */}
          <div className="tier">
            <div className="tier-name">Inner Circle</div>
            <div className="tier-desc">
              Gold + personal mentorship and direct access.
            </div>
            <div className="tier-price">
              <span className="tier-amount">$499</span>
              <span className="tier-period">/month</span>
            </div>
            <ul className="tier-features">
              <li>Everything in Gold</li>
              <li>Direct DM access to me</li>
              <li>Monthly private advisory call</li>
              <li>Full portfolio review</li>
              <li>Personal network access</li>
            </ul>
            <a href="#" className="tier-cta">
              Apply for Inner Circle
            </a>
            <div className="tier-cap">Limited to 10 clients</div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
