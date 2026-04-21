import type { Metadata } from "next";
import Nav from "@/components/nav/Nav";
import Footer from "@/components/footer/Footer";
import CookieSettingsLink from "@/components/cookies/CookieSettingsLink";
import { CONTACT_EMAIL } from "@/lib/links";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How BlockPhi collects, uses, shares, and protects personal data across blockphi.com and related services. GDPR, UK GDPR, and CCPA/CPRA rights.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <>
      <Nav />
      <main id="main-content">
      <section className="about-section about-first bg-base">
        <div className="about-container legal-doc">
          <span className="section-tag">Legal</span>
          <h1 className="about-headline">Privacy Policy</h1>
          <p className="legal-meta">Last updated: April 18, 2026</p>

          <p>
            This Privacy Policy explains how BlockPhi (&ldquo;BlockPhi&rdquo;, &ldquo;we&rdquo;,
            &ldquo;us&rdquo;, or &ldquo;our&rdquo;) collects, uses, shares, and protects personal
            data when you visit www.blockphi.com, subscribe to our research,
            engage our community, or otherwise interact with us (collectively,
            the &ldquo;Services&rdquo;). Please read this policy carefully. If you do not
            agree with it, please do not use our Services.
          </p>

          <h2>1. Who we are and how to contact us</h2>
          <p>
            BlockPhi is an investment analytics firm operating
            www.blockphi.com and related research, commentary, and
            community services. For any question about this policy or
            about your personal data, contact us at{" "}
            <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
          </p>
          <p>
            For the purposes of the EU and UK General Data Protection
            Regulation (&ldquo;GDPR&rdquo;), BlockPhi acts as the data controller of the
            personal data collected through the Services, except where this
            policy states otherwise.
          </p>

          <h2>2. Information we collect</h2>
          <h3>2.1 Information you provide directly</h3>
          <ul>
            <li>
              <strong>Contact details</strong> you submit through our contact
              form, email, or customer support channels, including your name,
              email address, and the content of your message.
            </li>
            <li>
              <strong>Subscription data</strong> when you subscribe to our
              newsletter (via Substack) or enroll in a paid tier (via Whop),
              including account identifiers and, where applicable, billing
              information handled directly by those processors.
            </li>
            <li>
              <strong>Community activity</strong> when you post, comment, or
              react in our Discord community, governed by Discord&apos;s own terms
              and privacy policy.
            </li>
            <li>
              <strong>Survey, feedback, and correspondence</strong> that you
              voluntarily provide.
            </li>
          </ul>

          <h3>2.2 Information collected automatically</h3>
          <ul>
            <li>
              <strong>Server and security logs</strong>, including IP address,
              user agent string, referrer URL, request timestamp, and pages
              viewed. These are retained for security, fraud prevention, and
              service integrity purposes.
            </li>
            <li>
              <strong>Aggregated and anonymised analytics</strong> about how
              visitors interact with the Services.
            </li>
            <li>
              <strong>Device and connection information</strong> such as browser
              type, operating system, language setting, and approximate
              location derived from IP address.
            </li>
          </ul>

          <h3>2.3 Information collected via third parties</h3>
          <ul>
            <li>
              <strong>Whop</strong> processes all paid-tier sign-ups, billing,
              and membership status. We receive confirmation of membership and
              tier but do not store payment card details.
            </li>
            <li>
              <strong>Substack</strong> manages our newsletter subscriber list
              and delivers email updates.
            </li>
            <li>
              <strong>Discord</strong> hosts our private community. Your
              presence and activity there are governed by Discord&apos;s terms.
            </li>
            <li>
              <strong>Medium and YouTube</strong> host embedded content; their
              embeds may set cookies governed by their own policies.
            </li>
          </ul>

          <h2>3. How we use your information</h2>
          <ul>
            <li>To respond to inquiries and provide the Services you request.</li>
            <li>To deliver, maintain, and improve the website, research, and community.</li>
            <li>To verify membership status and provide tier-specific access.</li>
            <li>To send service-related communications, updates, and (where you opted in) newsletters.</li>
            <li>To detect, prevent, and address security incidents, fraud, and abuse.</li>
            <li>To comply with applicable legal, regulatory, tax, and accounting obligations.</li>
            <li>To enforce our Terms of Service and protect our rights and property.</li>
          </ul>

          <h2>4. Legal bases for processing (GDPR)</h2>
          <p>
            If you are located in the European Economic Area, the United
            Kingdom, or Switzerland, we rely on the following legal bases:
          </p>
          <ul>
            <li>
              <strong>Performance of a contract</strong> to provide the
              Services you request and enforce our Terms (Art. 6(1)(b) GDPR).
            </li>
            <li>
              <strong>Legitimate interests</strong> to operate and secure the
              Services, understand how they are used, communicate with you,
              and improve what we offer (Art. 6(1)(f) GDPR), provided those
              interests are not overridden by your rights.
            </li>
            <li>
              <strong>Your consent</strong> for optional communications (such
              as the newsletter) and for non-essential cookies where required
              (Art. 6(1)(a) GDPR). You can withdraw consent at any time.
            </li>
            <li>
              <strong>Compliance with a legal obligation</strong>, including
              tax, accounting, fraud-prevention, and AML/CTF requirements
              (Art. 6(1)(c) GDPR).
            </li>
          </ul>

          <h2>5. Cookies and similar technologies</h2>
          <p>
            The site uses only <strong>strictly necessary cookies</strong>
            required for basic site operation (for example, your cookie
            consent choice). We do not run third-party advertising, marketing,
            or cross-site tracking cookies.
          </p>
          <p>
            Embedded third-party content (such as YouTube videos, Medium
            articles, or the Substack newsletter widget) may set their own
            cookies when loaded. Those cookies are governed by the respective
            third parties&apos; privacy policies. You can manage your preferences
            at any time:{" "}
            <CookieSettingsLink />.
          </p>

          <h2>6. How we share your information</h2>
          <p>
            We do not sell personal data. We do not share personal data with
            third parties for cross-context behavioural advertising. We
            disclose personal data only in the following circumstances:
          </p>
          <ul>
            <li>
              <strong>Service providers</strong> who process data on our behalf
              under written agreements that restrict use to the services we
              retained them for. Current processors include: Vercel (web
              hosting and delivery), Whop (membership, billing, access
              control), Discord (community platform), Substack (newsletter
              delivery), FormSubmit (contact-form transport), Google Fonts
              (font delivery) and YouTube / Medium for embedded content.
            </li>
            <li>
              <strong>Legal or regulatory requirements</strong>, including
              responding to a lawful subpoena, court order, or government
              request, and to protect our rights, property, safety, or the
              rights of others.
            </li>
            <li>
              <strong>Business transfers</strong>, such as a merger,
              acquisition, reorganisation, insolvency, or sale of assets, in
              which case personal data may be transferred as part of the
              transaction.
            </li>
            <li>
              <strong>With your consent</strong> or at your direction.
            </li>
          </ul>

          <h2>7. International data transfers</h2>
          <p>
            The Services are operated from the European Union. Some of
            our processors (including Vercel, Whop, Discord, Substack,
            YouTube, and Medium) are headquartered in the United States or
            other jurisdictions outside the EEA. Where personal data is
            transferred outside the EEA, UK, or Switzerland, we rely on
            appropriate safeguards such as European Commission Standard
            Contractual Clauses, the UK International Data Transfer
            Addendum, or applicable adequacy decisions (for example, the
            EU-US Data Privacy Framework where the processor is certified).
          </p>

          <h2>8. Data retention</h2>
          <p>
            We retain personal data only for as long as necessary for the
            purposes described in this policy, to comply with our legal,
            regulatory, tax, or accounting obligations, or to resolve
            disputes and enforce our agreements:
          </p>
          <ul>
            <li>Contact-form submissions: up to 24 months, then deleted or anonymised.</li>
            <li>Membership and transaction records: retained for the duration of your membership plus up to 7 years for tax and accounting purposes.</li>
            <li>Newsletter-subscription data: retained until you unsubscribe, plus a suppression record to prevent re-subscription in error.</li>
            <li>Server logs: up to 90 days in their raw form, after which they are aggregated or deleted.</li>
            <li>Cookie-consent records: up to 12 months, after which we will re-prompt.</li>
          </ul>

          <h2>9. Your rights</h2>
          <h3>9.1 Rights under EU / UK GDPR</h3>
          <p>Subject to applicable law, you have the right to:</p>
          <ul>
            <li>Access the personal data we hold about you.</li>
            <li>Correct inaccurate or incomplete personal data.</li>
            <li>Request erasure of your personal data (subject to certain exceptions).</li>
            <li>Restrict or object to certain processing.</li>
            <li>Data portability, where processing is based on consent or a contract and carried out by automated means.</li>
            <li>Withdraw consent at any time (without affecting the lawfulness of prior processing).</li>
            <li>Lodge a complaint with the supervisory authority of your EU member state of habitual residence, place of work, or place of alleged infringement. Our lead supervisory authority is identified on request; contact us at <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.</li>
          </ul>

          <h3>9.2 Rights under California law (CCPA / CPRA)</h3>
          <p>
            California residents have additional rights, including the right
            to know what personal information we collect, use, disclose, and
            sell or share; the right to delete; the right to correct; the
            right to limit the use of sensitive personal information; and the
            right to non-discrimination for exercising these rights. We do
            not sell or share personal information for cross-context
            behavioural advertising. To exercise your rights, contact{" "}
            <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
          </p>

          <h3>9.3 How to exercise your rights</h3>
          <p>
            Email{" "}
            <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>. We will
            respond within a reasonable timeframe and in any event within one
            month (extendable where permitted by law). We may need to verify
            your identity before fulfilling certain requests.
          </p>

          <h2>10. Children&apos;s privacy</h2>
          <p>
            The Services are not directed at children under the age of 18,
            and we do not knowingly collect personal data from minors. If you
            believe a child has provided personal data to us, please contact
            us and we will take steps to delete it.
          </p>

          <h2>11. Security</h2>
          <p>
            We implement technical and organisational safeguards appropriate
            to the sensitivity of the personal data we process, including
            transport encryption (HTTPS/TLS), access controls, httpOnly
            cookies for authentication, server-side membership verification,
            and regular review of our security posture. No method of
            transmission or storage is perfectly secure, and we cannot
            guarantee absolute security.
          </p>

          <h2>12. Data-breach notification</h2>
          <p>
            In the unlikely event of a personal-data breach likely to result
            in a risk to your rights and freedoms, we will notify the
            competent supervisory authority within 72 hours of becoming
            aware of the breach, in accordance with Art. 33 GDPR, and notify
            affected individuals where required by law.
          </p>

          <h2>13. Do Not Track and Global Privacy Control</h2>
          <p>
            Because we do not use advertising or cross-site tracking cookies,
            we do not currently differentiate responses to browser Do-Not-Track
            or Global Privacy Control (GPC) signals beyond our default
            practice of not tracking across sites.
          </p>

          <h2>14. Third-party links and embedded content</h2>
          <p>
            The Services may link to or embed content from third parties
            (such as Medium articles, YouTube videos, exchange partner
            pages, and Substack). We are not responsible for the privacy
            practices of those third parties. We encourage you to review
            their privacy policies before interacting with their content.
          </p>

          <h2>15. Marketing communications</h2>
          <p>
            We will only send marketing communications (such as newsletters)
            if you have opted in. You can unsubscribe at any time using the
            link in any email we send, by withdrawing consent from your
            Substack subscription, or by contacting{" "}
            <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
          </p>

          <h2>16. Nothing here is investment advice</h2>
          <p>
            All content on the Services is educational and informational
            only. Nothing is financial, investment, legal, or tax advice.
            Past performance is not indicative of future results. Do your
            own research and consult a qualified professional before making
            investment decisions. See our{" "}
            <a href="/terms">Terms of Service</a> for the full investment-risk
            disclosures.
          </p>

          <h2>17. Changes to this policy</h2>
          <p>
            We may update this Privacy Policy from time to time to reflect
            changes in our practices, technology, legal requirements, or
            for other operational reasons. Material changes will be reflected
            on this page with a new &ldquo;Last updated&rdquo; date, and, where required
            by law, we will notify you directly.
          </p>

          <h2>18. Contact</h2>
          <p>
            For any question about this Privacy Policy or to exercise your
            privacy rights, contact us at{" "}
            <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
          </p>

          <p className="legal-meta" style={{ marginTop: "2.5rem" }}>
            This policy is provided for informational purposes and does not
            constitute legal advice. Consult qualified counsel for advice
            tailored to your specific situation.
          </p>
        </div>
      </section>
      </main>
      <Footer />
    </>
  );
}
