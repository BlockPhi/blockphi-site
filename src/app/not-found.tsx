import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/nav/Nav";
import Footer from "@/components/footer/Footer";

export const metadata: Metadata = {
  title: "Page not found",
  description:
    "The page you're looking for has moved or never existed. Head back to BlockPhi's homepage.",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <>
      <Nav />
      <main id="main-content">
        <section className="notfound bg-base">
          <div className="container notfound-inner">
            <span className="notfound-code">404</span>
            <h1 className="notfound-title">Page not found.</h1>
            <p className="notfound-sub">
              The page you were looking for has moved, been archived, or never
              existed. Start from the homepage or jump straight into the
              research.
            </p>
            <div className="notfound-actions">
              <Link href="/" className="btn-primary notfound-btn">
                Back to home
              </Link>
              <Link href="/insights" className="btn-analytics notfound-btn-ghost">
                <span className="btn-analytics-label">Read research</span>
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
                  <path d="M1 9L9 1M9 1H3M9 1V7" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
