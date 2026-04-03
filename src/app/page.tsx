import Nav from "@/components/nav/Nav";
import Hero from "@/components/hero/Hero";
import Pillars from "@/components/pillars/Pillars";
import Testimonials from "@/components/testimonials/Testimonials";
import Pricing from "@/components/pricing/Pricing";
import Guarantee from "@/components/guarantee/Guarantee";
import FinalCta from "@/components/final-cta/FinalCta";
import Footer from "@/components/footer/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <div className="divider" />
      <Pillars />
      <div className="divider" />
      <Testimonials />
      <div className="divider" />
      <Pricing />
      <Guarantee />
      <div className="divider" />
      <FinalCta />
      <Footer />
    </>
  );
}
