import type { Metadata } from "next";
import Image from "next/image";
import Nav from "@/components/nav/Nav";
import Footer from "@/components/footer/Footer";
import ScrollReveal from "@/components/ui/ScrollReveal";
import ContactForm from "@/components/contact/ContactForm";
import AnalystsMarquee from "@/components/about/AnalystsMarquee";

export const metadata: Metadata = {
  title: "About | BlockPhi",
  description:
    "BlockPhi is an investment analytics firm building proprietary frameworks for crypto and capital allocation.",
};

type SocialType = "x" | "youtube" | "linkedin" | "twitch" | "substack" | "scholar" | "ssrn";

type Analyst = {
  name: string;
  role: string;
  photo: string;
  photoAlt: string;
  socials: { type: SocialType; href: string }[];
};

const SOCIAL_ICONS: Record<SocialType, { label: string; size: number; path?: string; text?: string }> = {
  x: {
    label: "X",
    size: 13,
    path: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z",
  },
  youtube: {
    label: "YouTube",
    size: 14,
    path: "M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12z",
  },
  linkedin: {
    label: "LinkedIn",
    size: 13,
    path: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
  },
  twitch: {
    label: "Twitch",
    size: 13,
    path: "M11.571 4.714h1.715v5.143H11.57zm4.715 0H18v5.143h-1.714zM6 0L1.714 4.286v15.428h5.143V24l4.286-4.286h3.428L22.286 12V0zm14.571 11.143l-3.428 3.428h-3.429l-3 3v-3H6.857V1.714h13.714z",
  },
  substack: {
    label: "Substack",
    size: 13,
    path: "M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z",
  },
  scholar: {
    label: "Google Scholar",
    size: 14,
    path: "M5.242 13.769L0 9.5 12 0l12 9.5-5.242 4.269C17.548 11.249 14.978 9.5 12 9.5c-2.977 0-5.548 1.748-6.758 4.269zM12 10a7 7 0 1 0 0 14 7 7 0 0 0 0-14z",
  },
  ssrn: {
    label: "SSRN",
    size: 14,
    text: "SSRN",
  },
};

const INDEPENDENT_ANALYSTS: Analyst[] = [
  {
    name: "George1Trader",
    role: "Digital Assets Trader",
    photo: "/images/George III from Memoirs of Queen Charlotte by WCOulton.jpg",
    photoAlt: "George1Trader",
    socials: [
      { type: "x", href: "https://x.com/George1Trader" },
      { type: "youtube", href: "https://www.youtube.com/@george1trader" },
    ],
  },
  {
    name: "Dr Jan Wüstenfeld",
    role: "Digital Assets Economist",
    photo: "/images/Jan.jpg",
    photoAlt: "Dr Jan Wüstenfeld",
    socials: [
      { type: "linkedin", href: "https://www.linkedin.com/in/dr-jan-wuestenfeld/" },
      { type: "x", href: "https://x.com/JanWues" },
      { type: "substack", href: "https://substack.com/@bitcoinmarketintelligenceen" },
      { type: "scholar", href: "https://scholar.google.co.uk/citations?user=dGXPC1kAAAAJ&hl=de&oi=sra" },
      { type: "ssrn", href: "https://papers.ssrn.com/sol3/cf_dev/AbsByAuth.cfm?per_id=5878220" },
    ],
  },
  {
    name: "Halston Valencia",
    role: "Bitcoin Adoption Educator",
    photo: "/images/halston.png",
    photoAlt: "Halston Valencia",
    socials: [
      { type: "linkedin", href: "https://www.linkedin.com/in/halstonvalencia/" },
      { type: "x", href: "https://x.com/halstonvalencia" },
    ],
  },
  {
    name: "denome",
    role: "Geopolitics & Markets Analyst",
    photo: "/images/denome.jpg",
    photoAlt: "denome",
    socials: [
      { type: "x", href: "https://x.com/denomeme" },
      { type: "youtube", href: "https://www.youtube.com/c/denome" },
    ],
  },
  {
    name: "Rohan Joshi",
    role: "Systematic Crypto Analyst",
    photo: "/images/Rohan Joshi.jpg",
    photoAlt: "Rohan Joshi",
    socials: [
      { type: "linkedin", href: "https://www.linkedin.com/in/rohan-joshi-2025b3141/" },
      { type: "x", href: "https://x.com/RohanJ_Markets" },
      { type: "substack", href: "https://substack.com/@macroquant1" },
    ],
  },
  {
    name: "Htoo Myat Zaw",
    role: "Macro Liquidity Analyst",
    photo: "/images/htoo.jpg",
    photoAlt: "Htoo Myat Zaw",
    socials: [
      { type: "x", href: "https://x.com/HtooZaw74204" },
      { type: "substack", href: "https://htoomyatzaw.substack.com/" },
    ],
  },
  {
    name: "Nicolas Pucino, PhD",
    role: "Emerging Assets Research Analyst",
    photo: "/images/Nicolas.jpg",
    photoAlt: "Nicolas Pucino, PhD",
    socials: [
      { type: "linkedin", href: "https://www.linkedin.com/in/nicolaspucino/" },
      { type: "x", href: "https://x.com/NickxCrypto" },
      { type: "youtube", href: "https://www.youtube.com/@NickxCrypto" },
      { type: "twitch", href: "https://twitch.tv/nickxcrypto" },
    ],
  },
  {
    name: "Souleiman",
    role: "Quantitative Macro Researcher",
    photo: "/images/Souleiman.jpg",
    photoAlt: "Souleiman",
    socials: [
      { type: "x", href: "https://x.com/QuantSy6" },
    ],
  },
  {
    name: "VynthraQuant",
    role: "Quantitative Crypto & Macro Analyst",
    photo: "/images/VynthraQuant.jpg",
    photoAlt: "VynthraQuant",
    socials: [
      { type: "x", href: "https://x.com/VynthraQuant" },
    ],
  },
  {
    name: "Mr.Dumpty",
    role: "Crypto Derivatives Trader",
    photo: "/images/Dumpty.jpg",
    photoAlt: "Mr.Dumpty",
    socials: [
      { type: "x", href: "https://x.com/Trader_Dumpty" },
    ],
  },
];

export default function AboutPage() {
  return (
    <>
      <Nav />
      <main id="main-content">

      {/* Intro */}
      <section className="about-section about-first bg-base">
        <div className="about-intro-visual-wrap" aria-hidden="true" />
        <div className="about-container">
          <div className="about-intro">
            <span className="section-tag">About BlockPhi</span>
            <h1 className="about-headline">
              Investment analytics for the
              <br />
              data driven investor.
            </h1>
            <p className="about-lead">
              BlockPhi is an investment analytics firm that builds
              proprietary frameworks for crypto and cross market capital
              allocation. We serve a select circle of serious investors
              who value rigorous analysis over noise.
            </p>
            <div className="about-intro-grid">
              <aside className="about-letter-intro">
                <p className="about-name-label">Founder&apos;s Note</p>
                <div className="about-letter-intro-prose">
                  <p>
                    <em>The room matters as much as the models.</em>
                  </p>
                  <p>
                    I&apos;ve been doing this long enough to know that the
                    best investments I&apos;ve ever made didn&apos;t come from
                    a screen. They came from a conversation. One person
                    who&apos;d seen something I hadn&apos;t. One perspective
                    that made everything click. Most people are either
                    guarding what they know, or they&apos;re not worth
                    listening to.
                  </p>
                  <p>
                    This circle exists because I got tired of that. A
                    private community with no noise, no gurus, and no one
                    trying to sell you a course. Just serious investors,
                    operators, and analysts, focused on building wealth
                    over the long term and actually knowing what they&apos;re
                    doing.
                  </p>
                </div>
                <p className="about-letter-intro-sign">Jack Green</p>
              </aside>

              <div className="about-name-origin">
                <p className="about-name-label">Why BlockPhi?</p>
                <p className="about-name-desc">
                  <strong>Block</strong>: our foundation in blockchain technology
                  and the digital asset industry.
                  <br />
                  <strong>Phi (&#934;)</strong>: the golden ratio, a mathematical
                  constant central to Fibonacci analysis and quantitative
                  trading. It represents our commitment to structured,
                  data driven decision making.
                </p>
              </div>
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
                <h3>Global Liquidity</h3>
                <p>
                  Central bank policy, credit cycles, and the global liquidity
                  flows that drive risk asset performance. The analytical
                  foundation behind every framework we publish.
                </p>
              </div>
              <div className="about-coverage-item">
                <span className="about-coverage-num">02</span>
                <h3>Bitcoin &amp; Digital Assets</h3>
                <p>
                  Bitcoin valuation grounded in global liquidity, alongside
                  onchain analytics, cycle positioning, and risk adjusted
                  allocation frameworks across the crypto market.
                </p>
              </div>
              <div className="about-coverage-item">
                <span className="about-coverage-num">03</span>
                <h3>Cross Market Allocation</h3>
                <p>
                  Portfolio construction that spans crypto, equities, commodities,
                  and fixed income, always viewed through a macro liquidity lens.
                </p>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      <div className="divider" />

      {/* Team */}
      <ScrollReveal>
        <section className="about-section bg-card" id="team">
          <div className="about-container">
            <span className="section-tag">Team</span>
            <h2 className="about-title">Who we are</h2>
            <div className="about-team about-team--asymmetric">

              {/* Jack Green — featured founder */}
              <div className="about-team-member about-team-member--lead">
                <div className="about-team-photo">
                  <Image
                    src="/images/Jack.jpg"
                    alt="Jack Green"
                    width={220}
                    height={220}
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="about-team-info">
                  <h3>Jack Green</h3>
                  <span className="about-team-role">Founder &amp; Head of Research</span>
                  <p>
                    Jack founded BlockPhi and leads research, building the
                    firm&apos;s proprietary analytics frameworks across
                    crypto and macro markets.
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

              <div className="about-team-secondary">
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
                  <span className="about-team-role">Technical Strategist</span>
                  <p>
                    Freek is BlockPhi&apos;s technical strategist, focused on
                    price structure, trend regimes, and key levels across
                    Bitcoin and the broader crypto market.
                  </p>
                  <div className="about-team-socials">
                    <a href="https://x.com/0xZer0cool" target="_blank" rel="noopener noreferrer" aria-label="X">
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              {/* Remy Reelen */}
              <div className="about-team-member">
                <div className="about-team-photo about-team-photo--monogram" aria-label="Remy Reelen">
                  <span aria-hidden="true">RR</span>
                </div>
                <div className="about-team-info">
                  <h3>Remy Reelen</h3>
                  <span className="about-team-role">Head Crypto &amp; Macro Analyst</span>
                  <p>
                    Remy leads crypto and macro research at BlockPhi,
                    covering onchain analytics, liquidity cycles, and the
                    cross market signals that drive capital allocation
                    decisions across digital assets.
                  </p>
                </div>
              </div>
              </div>

            </div>
          </div>
        </section>
      </ScrollReveal>

      <div className="divider" />

      {/* Independent Analysts */}
      <ScrollReveal>
        <section className="about-section bg-elevated" id="analysts">
          <div className="about-container">
            <h2 className="about-title">Independent Analysts</h2>
            <AnalystsMarquee>
              {[...INDEPENDENT_ANALYSTS, ...INDEPENDENT_ANALYSTS].map((a, i) => {
                const isDupe = i >= INDEPENDENT_ANALYSTS.length;
                return (
                  <article
                    key={i}
                    className="analysts-marquee-card"
                    aria-hidden={isDupe || undefined}
                  >
                    <div className="about-team-photo">
                      <Image
                        src={a.photo}
                        alt={isDupe ? "" : a.photoAlt}
                        width={180}
                        height={180}
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                    <div className="about-team-info">
                      <h3>{a.name}</h3>
                      <span className="about-team-role">{a.role}</span>
                      <div className="about-team-socials">
                        {a.socials.map((s) => {
                          const icon = SOCIAL_ICONS[s.type];
                          return (
                            <a
                              key={s.type + s.href}
                              href={s.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label={isDupe ? undefined : icon.label}
                              aria-hidden={isDupe || undefined}
                              tabIndex={isDupe ? -1 : undefined}
                            >
                              <svg
                                width={icon.text ? icon.size * 1.7 : icon.size}
                                height={icon.size}
                                viewBox={icon.text ? "0 0 40 24" : "0 0 24 24"}
                                fill="currentColor"
                                aria-hidden="true"
                              >
                                {icon.path && <path d={icon.path} />}
                                {icon.text && (
                                  <text
                                    x="20"
                                    y="18"
                                    textAnchor="middle"
                                    fontSize="14"
                                    fontWeight="700"
                                    fontFamily="var(--font-jetbrains-mono), ui-monospace, monospace"
                                    letterSpacing="0.4"
                                  >
                                    {icon.text}
                                  </text>
                                )}
                              </svg>
                            </a>
                          );
                        })}
                      </div>
                    </div>
                  </article>
                );
              })}
            </AnalystsMarquee>
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

      </main>
      <Footer />
    </>
  );
}
