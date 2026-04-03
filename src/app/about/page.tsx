import type { Metadata } from "next";
import Image from "next/image";
import Nav from "@/components/nav/Nav";
import Footer from "@/components/footer/Footer";
import ScrollReveal from "@/components/ui/ScrollReveal";
import ContactForm from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "About — BlockPhi Capital",
  description:
    "BlockPhi Capital is an investment analytics firm building proprietary frameworks for crypto and capital allocation.",
};

export default function AboutPage() {
  return (
    <>
      <Nav />

      {/* Intro */}
      <section className="about-section about-first bg-base">
        <div className="about-container">
          <div className="about-intro">
            <span className="section-tag">About BlockPhi Capital</span>
            <h1 className="about-headline">
              Investment analytics for the
              <br />
              data-driven investor.
            </h1>
            <p className="about-lead">
              BlockPhi Capital is an investment analytics firm that builds
              proprietary frameworks for crypto and cross-market capital
              allocation. We serve a select community of serious investors
              who value rigorous analysis over noise.
            </p>
            <div className="about-name-origin">
              <p className="about-name-label">Why BlockPhi?</p>
              <p className="about-name-desc">
                <strong>Block</strong> — our foundation in blockchain technology
                and the digital asset industry.
                <br />
                <strong>Phi (&#934;)</strong> — the golden ratio, a mathematical
                constant central to Fibonacci analysis and quantitative
                trading. It represents our commitment to structured,
                data-driven decision-making.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* What We Cover */}
      <ScrollReveal>
        <section className="about-section bg-elevated bg-navy-depth">
          <div className="about-container">
            <span className="section-tag">Coverage</span>
            <h2 className="about-title">What we analyze</h2>
            <div className="about-coverage">
              <div className="about-coverage-item">
                <span className="about-coverage-num">01</span>
                <h3>Bitcoin & Digital Assets</h3>
                <p>
                  Valuation models, on-chain analytics, cycle positioning, and
                  risk-adjusted allocation frameworks across the crypto market.
                </p>
              </div>
              <div className="about-coverage-item">
                <span className="about-coverage-num">02</span>
                <h3>Global Macro & Liquidity</h3>
                <p>
                  Central bank policy, liquidity flows, rates, and the macro
                  variables that drive risk asset performance across all markets.
                </p>
              </div>
              <div className="about-coverage-item">
                <span className="about-coverage-num">03</span>
                <h3>Cross-Market Allocation</h3>
                <p>
                  Portfolio construction that spans crypto, equities, commodities,
                  and fixed income — always through a macro-liquidity lens,
                  so your capital is always in the right market at the right time.
                </p>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      <div className="divider" />

      {/* Team */}
      <ScrollReveal>
        <section className="about-section bg-card">
          <div className="about-container">
            <span className="section-tag">Team</span>
            <h2 className="about-title">Who we are</h2>
            <div className="about-team">

              {/* Jack Green */}
              <div className="about-team-member">
                <div className="about-team-photo">
                  <Image
                    src="/images/Jack.jpg"
                    alt="Jack Green"
                    width={180}
                    height={180}
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="about-team-info">
                  <h3>Jack Green</h3>
                  <span className="about-team-role">Founder & Editor-in-Chief</span>
                  <p>
                    Jack is the founder of BlockPhi Capital and the mind behind its
                    proprietary analytics frameworks. He hosts Setup Saturday, Bitcoin
                    Under The Loupe, and the Pursuing Value Podcast — reaching
                    thousands of investors weekly with data-driven market analysis.
                  </p>
                  <div className="about-team-socials">
                    <a href="https://x.com/jackgreencrypto" target="_blank" rel="noopener noreferrer" aria-label="X">
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                      </svg>
                    </a>
                    <a href="https://www.linkedin.com/in/jackgreencrypto" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </a>
                    <a href="https://www.youtube.com/@JackGreenCrypto" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12z"/>
                      </svg>
                    </a>
                    <a href="mailto:contact@blockphi.com" aria-label="Email">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <rect x="2" y="4" width="20" height="16" rx="2"/>
                        <path d="M22 4L12 13L2 4"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              {/* Freek Jansen */}
              <div className="about-team-member">
                <div className="about-team-photo">
                  <Image
                    src="/images/Freek.jpg"
                    alt="Freek Jansen"
                    width={180}
                    height={180}
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="about-team-info">
                  <h3>Freek Jansen</h3>
                  <span className="about-team-role">Program Editor</span>
                  <p>
                    Freek is the program editor at BlockPhi Capital, responsible
                    for production and editorial across all shows and published
                    research.
                  </p>
                  <div className="about-team-socials">
                    <a href="https://x.com/" target="_blank" rel="noopener noreferrer" aria-label="X">
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                      </svg>
                    </a>
                    <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </a>
                    <a href="https://www.youtube.com/@JackGreenCrypto" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12z"/>
                      </svg>
                    </a>
                    <a href="mailto:contact@blockphi.com" aria-label="Email">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <rect x="2" y="4" width="20" height="16" rx="2"/>
                        <path d="M22 4L12 13L2 4"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>
      </ScrollReveal>

      <div className="divider" />

      {/* Independent Affiliate Analysts */}
      <ScrollReveal>
        <section className="about-section bg-elevated">
          <div className="about-container">
            <h2 className="about-title">Independent Affiliate Analysts</h2>
            <div className="about-team">

              {/* George1Trader */}
              <div className="about-team-member">
                <div className="about-team-photo">
                  <Image
                    src="/images/George III from Memoirs of Queen Charlotte by WCOulton.jpg"
                    alt="George1Trader"
                    width={180}
                    height={180}
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="about-team-info">
                  <h3>George1Trader</h3>
                  <span className="about-team-role">Independent Affiliate Analyst</span>
                  <div className="about-team-socials">
                    <a href="https://x.com/" target="_blank" rel="noopener noreferrer" aria-label="X">
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

            </div>
            <div className="about-affiliate-cta">
              <span className="about-affiliate-label">Independent analyst?</span>
              <a href="/about#contact" className="about-affiliate-link">
                Partner with us
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                  <path d="M1 9L9 1M9 1H3M9 1V7" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          </div>
        </section>
      </ScrollReveal>

      <div className="divider" />

      {/* Contact */}
      <ScrollReveal>
        <section className="about-section bg-card" id="contact">
          <div className="about-container">
            <span className="section-tag">Contact</span>
            <h2 className="about-title">Get in touch</h2>
            <p className="about-contact-sub">
              Send us a message and we&apos;ll get back to you.
            </p>
            <ContactForm />
          </div>
        </section>
      </ScrollReveal>

      <Footer />
    </>
  );
}
