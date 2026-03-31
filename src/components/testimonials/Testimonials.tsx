import ScrollReveal from "../ui/ScrollReveal";

export default function Testimonials() {
  return (
    <section className="section">
      <div className="container">
        <ScrollReveal className="section-header">
          <span className="section-tag">From Our Members</span>
          <h2 className="section-title">
            The room changes how you invest.
          </h2>
        </ScrollReveal>

        <ScrollReveal className="testimonials-grid" stagger>
          <div className="testimonial">
            <p className="testimonial-quote">
              &ldquo;I was managing a high six-figure crypto portfolio and felt
              lost in the noise. BlockPhi gave me the structure and timely
              insights to move with confidence.&rdquo;
            </p>
            <div className="testimonial-author">Private Member</div>
            <div className="testimonial-role">Portfolio above $250k</div>
          </div>
          <div className="testimonial">
            <p className="testimonial-quote">
              &ldquo;I finally stopped overtrading. The frameworks helped me sit
              on my hands when the data said wait.&rdquo;
            </p>
            <div className="testimonial-author">Private Member</div>
            <div className="testimonial-role">Joined 2023</div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
