import Link from "next/link";

export default function Footer() {

  return (
    <footer>
      <div className="container">
        <div className="footer-inner">
          <div className="footer-left">
            &copy; {new Date().getFullYear()} BlockPhi. Not financial
            advice.
          </div>
          <div className="footer-socials">
            <a href="https://x.com/jackgreencrypto" target="_blank" rel="me noopener noreferrer" aria-label="X (Twitter)">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            <a href="https://www.youtube.com/@JackGreenCrypto" target="_blank" rel="me noopener noreferrer" aria-label="YouTube">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12z"/>
              </svg>
            </a>
            <a href="https://medium.com/@jackgreencrypto" target="_blank" rel="me noopener noreferrer" aria-label="Medium">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zm7.42 0c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
              </svg>
            </a>
            <a href="https://substack.com/@jackgreencrypto" target="_blank" rel="me noopener noreferrer" aria-label="Substack">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z"/>
              </svg>
            </a>
            <a href="https://coinmarketcap.com/community/profile/jackgreencrypto/" target="_blank" rel="me noopener noreferrer" aria-label="CoinMarketCap">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M20.738 14.341c-.419.265-.913.29-1.286.063-.474-.29-.735-.902-.735-1.72v-2.407c0-1.18-.472-2.017-1.261-2.246-1.336-.387-2.343 1.245-2.72 1.857l-2.348 3.798v-4.643c-.026-1.062-.375-1.697-1.04-1.89-.44-.126-1.098-.077-1.737.902l-5.262 8.407A9.893 9.893 0 0 1 2.127 12C2.127 6.547 6.552 2.12 12 2.12c5.449 0 9.876 4.428 9.876 9.88v.028c.05 1.055-.29 1.899-.927 2.313h-.211Zm3.388-2.3V12c-.035-6.627-5.484-12.015-12.113-11.98C5.386.057-.002 5.506.031 12.126.066 18.726 5.428 24.065 12.03 24.065c3.029 0 5.934-1.135 8.162-3.175.444-.407.478-1.098.071-1.542a1.086 1.086 0 0 0-1.542-.071l-.022.02a9.844 9.844 0 0 1-13.929-.87 9.818 9.818 0 0 1-1.22-1.727l4.72-7.54v3.505c0 1.682.661 2.225 1.218 2.385.558.16 1.408.05 2.285-1.373l2.608-4.225a14.27 14.27 0 0 0 .046 1.442c.056 1.545.683 2.777 1.719 3.378 1.028.596 2.314.496 3.358-.27.473-.342.762-.878.762-1.419v-.01Z"/>
              </svg>
            </a>
          </div>
          <div className="footer-links">
            <Link href="/privacy">Privacy</Link>
            <Link href="/terms">Terms</Link>
            <Link href="/about#contact">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
