import Link from "next/link";
import Image from "next/image";

export default function Nav() {
  return (
    <nav>
      <Link href="/" className="logo">
        <Image
          src="/images/BlockPhi-Icon-White-PNG.png"
          alt="BlockPhi Capital"
          width={24}
          height={32}
          className="logo-symbol"
          style={{ objectFit: "contain" }}
        />
        <Image
          src="/images/BLOCKPHI.png"
          alt="BlockPhi"
          width={120}
          height={16}
          className="logo-wordmark"
          style={{ objectFit: "contain" }}
        />
      </Link>
      <div className="nav-right">
        <Link href="/insights">Insights</Link>
        <div className="nav-dropdown">
          <Link href="/about" className="nav-dropdown-trigger">
            About
            <svg width="8" height="8" viewBox="0 0 10 10" fill="none" className="nav-dropdown-chevron">
              <path d="M2 4L5 7L8 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
          <div className="nav-dropdown-menu">
            <Link href="/about#contact">Contact</Link>
          </div>
        </div>
        <Link href="#" className="nav-cta">
          Apply to Join
        </Link>
        <a href="https://analytics.blockphi.com" target="_blank" rel="noopener noreferrer" className="nav-cta-outline">
          Analytics Terminal
          <svg className="nav-cta-arrow" width="8" height="8" viewBox="0 0 10 10" fill="none">
            <path d="M1 9L9 1M9 1H3M9 1V7" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
      </div>
      <button className="hamburger" aria-label="Menu">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </nav>
  );
}
