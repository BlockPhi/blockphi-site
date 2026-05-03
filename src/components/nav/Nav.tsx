"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ANALYTICS_URL, APPLY_URL } from "@/lib/links";

export default function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(href + "/");
  const ariaCurrent = (href: string) => (isActive(href) ? "page" : undefined);

  useEffect(() => {
    const mql = window.matchMedia("(min-width: 961px)");
    const onChange = () => {
      if (mql.matches) setMobileOpen(false);
    };
    mql.addEventListener("change", onChange);
    return () => mql.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 100);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [mobileOpen]);

  useEffect(() => {
    if (!mobileOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [mobileOpen]);

  const closeMenu = () => setMobileOpen(false);

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    closeMenu();
    if (pathname === "/") {
      e.preventDefault();
      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;
      window.scrollTo({
        top: 0,
        behavior: prefersReducedMotion ? "auto" : "smooth",
      });
    }
  };

  return (
    <nav className={scrolled ? "nav-scrolled" : ""}>
      <Link href="/" className="logo" onClick={handleLogoClick}>
        <Image
          src="/images/BlockPhi-Icon-White-PNG.png"
          alt="BlockPhi"
          width={32}
          height={46}
          className="logo-symbol"
          priority
        />
        <Image
          src="/images/BLOCKPHI.png"
          alt="BlockPhi"
          width={96}
          height={15}
          className="logo-wordmark"
          priority
        />
      </Link>
      <div className="nav-right">
        <Link href="/insights" aria-current={ariaCurrent("/insights")}>Insights</Link>
        <div className="nav-dropdown">
          <Link href="/about" className="nav-dropdown-trigger" aria-current={ariaCurrent("/about")}>
            About
            <svg width="8" height="8" viewBox="0 0 10 10" fill="none" className="nav-dropdown-chevron" aria-hidden="true">
              <path d="M2 4L5 7L8 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
          <div className="nav-dropdown-menu">
            <Link href="/about#team">Team</Link>
            <Link href="/about#analysts">Analysts</Link>
            <Link href="/about#contact">Contact</Link>
          </div>
        </div>
        <a
          href={APPLY_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="nav-cta"
        >
          Apply to Join
        </a>
        <a href={ANALYTICS_URL} target="_blank" rel="noopener noreferrer" className="nav-cta-outline">
          Analytics Terminal
          <svg className="nav-cta-arrow" width="8" height="8" viewBox="0 0 10 10" fill="none" aria-hidden="true">
            <path d="M1 9L9 1M9 1H3M9 1V7" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
      </div>
      <button
        type="button"
        className={`hamburger${mobileOpen ? " hamburger--open" : ""}`}
        aria-label={mobileOpen ? "Close menu" : "Open menu"}
        aria-expanded={mobileOpen}
        aria-controls="mobile-nav"
        onClick={() => setMobileOpen((v) => !v)}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <div
        id="mobile-nav"
        className={`mobile-nav${mobileOpen ? " mobile-nav--open" : ""}`}
        hidden={!mobileOpen}
      >
        <Link href="/insights" onClick={closeMenu} aria-current={ariaCurrent("/insights")}>
          Insights
        </Link>
        <Link href="/about" onClick={closeMenu} aria-current={ariaCurrent("/about")}>
          About
        </Link>
        <Link href="/about#team" onClick={closeMenu}>
          Team
        </Link>
        <Link href="/about#analysts" onClick={closeMenu}>
          Analysts
        </Link>
        <Link href="/about#contact" onClick={closeMenu}>
          Contact
        </Link>
        <a
          href={APPLY_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="nav-cta"
          onClick={closeMenu}
        >
          Apply to Join
        </a>
        <a
          href={ANALYTICS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="nav-cta-outline"
          onClick={closeMenu}
        >
          Analytics Terminal
        </a>
      </div>
    </nav>
  );
}
