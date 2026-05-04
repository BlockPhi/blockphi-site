import type { Metadata, Viewport } from "next";
import { Montserrat, Cormorant_Garamond, JetBrains_Mono } from "next/font/google";
import { SITE_URL } from "@/lib/links";
import CookieConsent from "@/components/cookies/CookieConsent";
import SmoothScroll from "@/components/ui/SmoothScroll";
import BgShift from "@/components/ui/BgShift";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["300", "400"],
  display: "swap",
});

const title = "BlockPhi | Crypto Analytics & Capital Allocation";
const description =
  "Data driven investment frameworks, exclusive to our select investor community. Proprietary analytics, macro liquidity models, and curated investor access.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: title,
    template: "%s | BlockPhi",
  },
  description,
  applicationName: "BlockPhi",
  keywords: [
    "crypto analytics",
    "capital allocation",
    "investment frameworks",
    "macro liquidity",
    "Bitcoin analysis",
    "investor community",
    "portfolio construction",
  ],
  authors: [{ name: "BlockPhi" }],
  creator: "BlockPhi",
  publisher: "BlockPhi",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    siteName: "BlockPhi",
    title,
    description,
    url: SITE_URL,
    locale: "en_US",
    images: [
      {
        url: "/images/BLOCKPHI.png",
        width: 1200,
        height: 630,
        alt: "BlockPhi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    creator: "@jackgreencrypto",
    images: ["/images/BLOCKPHI.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0a0a0a",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Organization structured data — helps Google understand the entity.
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "BlockPhi",
    description,
    url: SITE_URL,
    logo: `${SITE_URL}/images/BLOCKPHI.png`,
    sameAs: [
      "https://x.com/jackgreencrypto",
      "https://www.youtube.com/@JackGreenCrypto",
      "https://medium.com/@jackgreencrypto",
      "https://substack.com/@jackgreencrypto",
    ],
  };

  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${cormorant.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        {/* Hero background is the LCP image but it's loaded via CSS
            background-image, which browsers don't discover until the
            stylesheet parses. Preloading it early halves first-paint
            latency on the hero. fetchPriority is the new-spec attribute
            name (fetchpriority in HTML). */}
        <link
          rel="preload"
          as="image"
          href="/images/hero-bg.png"
          fetchPriority="high"
        />
        {/* Early handshakes for the third-party origins we actually hit:
            YouTube (testimonial + insights videos, thumbs), Substack
            (newsletter embed), and FormSubmit (contact form POST).
            Trims the first-request latency on each. */}
        <link rel="preconnect" href="https://www.youtube.com" />
        <link rel="preconnect" href="https://img.youtube.com" crossOrigin="" />
        <link rel="preconnect" href="https://i.ytimg.com" crossOrigin="" />
        <link rel="preconnect" href="https://formsubmit.co" />
      </head>
      <body>
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        <SmoothScroll />
        <BgShift />
        {children}
        <CookieConsent />
        <script
          type="application/ld+json"
          // Safe: object is serialized server-side, no user input.
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </body>
    </html>
  );
}
