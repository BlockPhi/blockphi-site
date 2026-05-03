import ScrollReveal from "../ui/ScrollReveal";
import { APPLY_URL } from "@/lib/links";

export default function FinalCta() {
  return (
    <section className="final-cta bg-base">
      <ScrollReveal className="container">
        <h2 className="final-cta-title">
          Data-driven allocation.
          <br />
          Invitation only.
        </h2>
        <p className="final-cta-sub">
          Quantitative crypto and macro frameworks.
          <br />
          A curated investor circle.
        </p>
        <a
          href={APPLY_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary final-cta-btn"
        >
          Apply to Join
        </a>
      </ScrollReveal>
    </section>
  );
}
