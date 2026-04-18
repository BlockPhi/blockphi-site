import type { Metadata } from "next";
import Nav from "@/components/nav/Nav";
import Footer from "@/components/footer/Footer";
import MediumArticles from "@/components/insights/MediumArticles";
import YouTubeVideos from "@/components/insights/YouTubeVideos";
import { Livestreams, PodcastsSection } from "@/components/insights/Podcasts";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SubstackSubscribe from "@/components/insights/SubstackSubscribe";

export const metadata: Metadata = {
  title: "Insights | BlockPhi",
  description:
    "Research, analysis, and market commentary from BlockPhi. Institutional-grade crypto and macro insights.",
};

export default function InsightsPage() {
  return (
    <>
      <Nav />
      <main id="main-content">
      <h1 className="sr-only">Insights</h1>

      {/* Medium Articles — Primary Section */}
      <section className="insights-section insights-section--research insights-first bg-base">
        <div className="insights-container">
          <div className="insights-section-header">
            <span className="section-tag">Published Data-Driven Research &amp; Analysis</span>
            <h2>Latest Articles</h2>
          </div>
          <MediumArticles />
        </div>
      </section>

      <div className="divider" />

      {/* Livestreams & Podcasts — one section */}
      <ScrollReveal>
        <section className="insights-section insights-section--podcasts bg-elevated bg-navy-depth">
          <div className="insights-container">
            <div className="insights-section-header">
              <span className="section-tag">Livestreams</span>
              <h2>Weekly Shows</h2>
              <p className="insights-section-desc">
                Two recurring shows covering crypto markets, macro data, and
                Bitcoin valuation.
              </p>
            </div>
            <Livestreams />

            <div className="insights-section-header" style={{ marginTop: 'clamp(3rem, 6vw, 5rem)' }}>
              <span className="section-tag">Podcasts</span>
            </div>
            <PodcastsSection />
          </div>
        </section>
      </ScrollReveal>

      <div className="divider" />

      {/* YouTube Videos */}
      <ScrollReveal>
        <section className="insights-section insights-section--videos bg-card">
          <div className="insights-container">
            <div className="insights-section-header">
              <span className="section-tag">Video</span>
              <h2>Latest Videos</h2>
            </div>
            <YouTubeVideos />
          </div>
        </section>
      </ScrollReveal>

      {/* Stay Informed strip */}
      <ScrollReveal>
        <section className="subscribe-strip bg-elevated">
          <div className="insights-container">
            <span className="section-tag">Stay Informed</span>

            <div className="subscribe-follow">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
              <span>Follow <a href="https://x.com/jackgreencrypto" target="_blank" rel="noopener noreferrer">@jackgreencrypto</a> for real-time market commentary</span>
            </div>

            <div className="subscribe-row">
              <p className="subscribe-strip-text">
                Weekly crypto and macro insights, straight from our research desk.
              </p>
              <SubstackSubscribe />
            </div>
          </div>
        </section>
      </ScrollReveal>

      </main>
      <Footer />
    </>
  );
}
