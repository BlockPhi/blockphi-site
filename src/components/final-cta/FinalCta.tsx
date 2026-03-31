import { DiscordIcon } from "../ui/Icons";
import ScrollReveal from "../ui/ScrollReveal";

export default function FinalCta() {
  return (
    <section className="final-cta">
      <ScrollReveal className="container">
        <h2 className="final-cta-title">
          You&apos;ve been doing this
          <br />
          alone long enough.
        </h2>
        <p className="final-cta-sub">
          Step into a room of serious investors. Get the structure. Get the
          clarity.
        </p>
        <a
          href="#"
          className="btn-primary"
          style={{ fontSize: "0.85rem", padding: "0.85rem 2.4rem" }}
        >
          <DiscordIcon />
          Apply to Join
        </a>
      </ScrollReveal>
    </section>
  );
}
