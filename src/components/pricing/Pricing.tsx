import ScrollReveal from "../ui/ScrollReveal";
import SectionTitle from "../ui/SectionTitle";
import {
  TIER_FREE_URL,
  TIER_GOLD_URL,
  TIER_INNER_CIRCLE_URL,
  TIER_MEMBER_URL,
} from "@/lib/links";

export default function Pricing() {
  return (
    <section className="section bg-elevated bg-navy-depth" id="pricing">
      <div className="container">
        <ScrollReveal className="section-header">
          <span className="section-tag">Membership</span>
          <SectionTitle>Choose your level of access.</SectionTitle>
          <p className="section-sub">
            Frameworks, tools, and a vetted network. Everything required to
            allocate capital with conviction.
          </p>
        </ScrollReveal>

        <ScrollReveal className="pricing-grid" stagger>
          {/* Free */}
          <div className="tier tier--free">
            <div className="tier-name">Free</div>
            <div className="tier-desc">
              Read-only access to select channels.
            </div>
            <div className="tier-price">
              <span className="tier-amount">$0</span>
              <span className="tier-period">/forever</span>
            </div>
            <ul className="tier-features">
              <li>Select Discord channels</li>
            </ul>
            <a
              href={TIER_FREE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="tier-cta"
            >
              Join Free
            </a>
          </div>

          {/* Member */}
          <div className="tier">
            <div className="tier-name">Member</div>
            <div className="tier-desc">
              Full community access.
            </div>
            <div className="tier-price">
              <span className="tier-amount">$59</span>
              <span className="tier-period">/month</span>
            </div>
            <ul className="tier-features">
              <li>Full community access</li>
              <li>Daily market commentary</li>
              <li>Access to 10+ analysts</li>
            </ul>
            <a
              href={TIER_MEMBER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="tier-cta"
            >
              Apply for Membership
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
              <li>Annual in-person summit</li>
            </ul>
            <a
              href={TIER_GOLD_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="tier-cta"
            >
              Apply for Gold
            </a>
            <div className="tier-cap">Capped at 200 members</div>
          </div>

          {/* Inner Circle */}
          <div className="tier">
            <div className="tier-name">Inner Circle</div>
            <div className="tier-desc">
              Gold + personal advisory and direct access.
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
            <a
              href={TIER_INNER_CIRCLE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="tier-cta"
            >
              Apply for Inner Circle
            </a>
            <div className="tier-cap">Limited to 10 clients</div>
          </div>
        </ScrollReveal>

        <ScrollReveal className="pricing-guarantee">
          <svg className="pricing-guarantee-icon" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M9 12l2 2 4-4" />
            <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
          </svg>
          <span>7-day refund policy on all paid tiers</span>
        </ScrollReveal>
      </div>
    </section>
  );
}
