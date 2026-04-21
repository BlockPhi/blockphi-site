import type { Metadata } from "next";
import Nav from "@/components/nav/Nav";
import Hero from "@/components/hero/Hero";
import Pillars from "@/components/pillars/Pillars";
import Testimonials from "@/components/testimonials/Testimonials";
import Pricing from "@/components/pricing/Pricing";
import FinalCta from "@/components/final-cta/FinalCta";
import Footer from "@/components/footer/Footer";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      <Nav />
      <main id="main-content">
        <Hero />
        <div className="divider" />
        <Pillars />
        <div className="divider" />
        <Testimonials />
        <div className="divider" />
        <Pricing />
        <div className="divider" />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
