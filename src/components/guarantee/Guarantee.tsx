import ScrollReveal from "../ui/ScrollReveal";

export default function Guarantee() {
  return (
    <section className="guarantee">
      <ScrollReveal className="container">
        <div className="guarantee-badge">
          <svg viewBox="0 0 24 24">
            <path d="M9 12l2 2 4-4" />
            <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
          </svg>
          <span>7-Day Money-Back Guarantee</span>
        </div>
        <p className="guarantee-text">
          Join, explore the community, review the frameworks. If you&apos;re not
          satisfied within 7 days, send us a message and we&apos;ll refund you in
          full. No questions asked.
        </p>
      </ScrollReveal>
    </section>
  );
}
