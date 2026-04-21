import type { Metadata } from "next";
import Nav from "@/components/nav/Nav";
import Footer from "@/components/footer/Footer";
import { CONTACT_EMAIL } from "@/lib/links";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "The terms governing your use of blockphi.com, the BlockPhi research and community, and every associated service. Investment risk disclosures, no-advice disclaimer, and full legal terms.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <>
      <Nav />
      <main id="main-content">
      <section className="about-section about-first bg-base">
        <div className="about-container legal-doc">
          <span className="section-tag">Legal</span>
          <h1 className="about-headline">Terms of Service</h1>
          <p className="legal-meta">Last updated: April 18, 2026</p>

          <p>
            These Terms of Service (&ldquo;Terms&rdquo;) govern your access to and use
            of www.blockphi.com, the BlockPhi research and community, and
            every associated service (collectively, the &ldquo;Services&rdquo;) operated
            by BlockPhi (&ldquo;BlockPhi&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;). Please read these
            Terms carefully. By accessing or using the Services, you agree to
            be bound by them.
          </p>

          <h2>1. Acceptance of these Terms</h2>
          <p>
            By accessing or using the Services in any way, you represent
            that you have read, understood, and agree to be legally bound by
            these Terms and by our{" "}
            <a href="/privacy">Privacy Policy</a>, which is incorporated
            herein by reference. If you do not agree, you must not use the
            Services.
          </p>

          <h2>2. About BlockPhi and the nature of the Services</h2>
          <p>
            BlockPhi is an investment analytics firm that publishes
            research, quantitative frameworks, market commentary, and
            educational content. Parts of the Services are delivered
            through a private community hosted on Discord with paid access
            managed by Whop. Nothing we publish is personalised
            investment, financial, legal, accounting, or tax advice, and
            we do not act as your broker, investment adviser, financial
            planner, or fiduciary. You are solely responsible for your
            investment decisions.
          </p>

          <h2>3. Eligibility</h2>
          <p>You may use the Services only if:</p>
          <ul>
            <li>You are at least 18 years old and have the legal capacity to enter into a binding contract in your jurisdiction.</li>
            <li>You are not barred from using the Services under the laws of your jurisdiction or any other applicable jurisdiction.</li>
            <li>You are not located in, under the control of, or a national or resident of any country subject to comprehensive US, EU, UN, UK, or other applicable sanctions, and you are not on any sanctions, denied-parties, or specially-designated-nationals list.</li>
            <li>You will comply with all applicable laws, including securities, tax, AML, and sanctions laws, in your jurisdiction.</li>
          </ul>

          <h2>4. Accounts and account security</h2>
          <p>
            Access to paid tiers requires an account with Whop and, for
            community access, with Discord. You are responsible for
            maintaining the confidentiality of your credentials, for all
            activity on your account, and for notifying us promptly at{" "}
            <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a> if you
            suspect unauthorised access. We are not liable for any loss
            arising from your failure to safeguard your credentials.
          </p>

          <h2>5. Membership, payment, and auto-renewal</h2>
          <ul>
            <li>
              <strong>Payment processing.</strong> All paid memberships are
              processed by Whop under{" "}
              <a href="https://whop.com/terms" target="_blank" rel="noopener noreferrer">Whop&apos;s own terms</a>.
              We do not receive or store your payment card details.
            </li>
            <li>
              <strong>Subscriptions and renewals.</strong> Subscriptions renew
              automatically at the end of each billing period at the then-current
              rate unless cancelled. You may cancel at any time through your Whop
              account; cancellation takes effect at the end of the current paid
              period.
            </li>
            <li>
              <strong>Price changes.</strong> We may change membership prices
              from time to time. Price changes take effect at the next renewal
              after we give you reasonable notice.
            </li>
            <li>
              <strong>Taxes.</strong> Prices are exclusive of any applicable
              VAT, sales tax, or withholding taxes, which may be added at the
              point of purchase by Whop.
            </li>
          </ul>

          <h2>6. Refund policy</h2>
          <p>
            We offer a <strong>7-day money-back guarantee</strong> on new paid
            memberships: if within 7 days of your first payment you decide the
            Services are not for you, contact{" "}
            <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a> and we
            will refund that payment in full. Beyond the 7-day window,
            subscription payments are non-refundable except where required by
            applicable consumer-protection law. Refunds are otherwise governed
            by Whop&apos;s refund policy.
          </p>

          <h2>7. Free tier, trials, and promotional offers</h2>
          <p>
            We may offer a free tier, trial access, or promotional pricing.
            Trials automatically convert to paid memberships at the end of
            the trial period unless you cancel before conversion. Promotional
            rates apply only for the period stated and revert to the
            standard rate on renewal unless we expressly state otherwise.
          </p>

          <h2>8. Intellectual property</h2>
          <h3>8.1 Our content</h3>
          <p>
            All research, frameworks, scripts, templates, models, graphics,
            text, and other material made available through the Services
            (collectively, &ldquo;Content&rdquo;) is owned by BlockPhi or its licensors
            and is protected by intellectual-property laws. We grant you a
            limited, personal, non-exclusive, non-transferable, revocable
            licence to use the Content for your own personal, non-commercial
            investment decisions during your membership. All rights not
            expressly granted are reserved.
          </p>

          <h3>8.2 Your content</h3>
          <p>
            If you post, upload, or submit content (including messages in
            our community, testimonials, feedback, or other materials) you
            grant BlockPhi a worldwide, non-exclusive, royalty-free,
            sublicensable, and transferable licence to host, store, use,
            reproduce, modify, display, and distribute that content in
            connection with operating, improving, and promoting the Services.
            You represent that you own or have the right to grant this
            licence and that your content does not infringe any third-party
            rights.
          </p>

          <h3>8.3 Feedback</h3>
          <p>
            If you provide feedback or suggestions about the Services, you
            grant us the right to use that feedback without restriction or
            compensation.
          </p>

          <h2>9. Acceptable use</h2>
          <p>You agree that you will not:</p>
          <ul>
            <li>Share, resell, publish, or redistribute paid Content, including screenshots, community channel contents, TradingView scripts, research reports, or member discussions.</li>
            <li>Use the Services to build a competing product or to train a machine-learning model.</li>
            <li>Scrape, crawl, or mirror any part of the Services, or attempt to extract data in bulk.</li>
            <li>Attempt to gain unauthorised access to the Services or any related systems, or interfere with their operation.</li>
            <li>Upload malware, engage in denial-of-service behaviour, or probe for vulnerabilities without written authorisation.</li>
            <li>Impersonate another person, misrepresent your affiliation, or use the Services in a way that is misleading, defamatory, harassing, hateful, or unlawful.</li>
            <li>Use the Services to promote unrelated products, services, or investment opportunities, or to solicit other members without our prior written permission.</li>
            <li>Violate any applicable law or regulation, including securities, tax, AML, sanctions, export-control, or data-protection laws.</li>
          </ul>
          <p>
            We may remove content, suspend accounts, or terminate access for
            any violation of this section, with or without notice.
          </p>

          <h2>10. Community conduct</h2>
          <p>
            The BlockPhi community is a professional space. Be civil,
            constructive, and respectful. Do not engage in market manipulation,
            coordinated buying or selling, pump-and-dump schemes, insider
            trading, front-running of research, or any other conduct that
            could violate securities laws or community trust. We reserve the
            right to remove members whose conduct is incompatible with the
            community&apos;s standards.
          </p>

          <h2>11. Third-party services</h2>
          <p>
            The Services integrate with and link to third-party services,
            including Whop (payments and access), Discord (community),
            Substack (newsletter), TradingView (charts and scripts),
            FormSubmit (contact transport), Medium (research publication),
            and YouTube (video content). Your use of those services is
            subject to their respective terms and privacy policies. We are
            not responsible for their performance, availability, content,
            or practices.
          </p>

          <h2>12. Affiliate and partner links</h2>
          <p>
            Some links on the Services are affiliate or partner links. If
            you click through and sign up, create an account, or make a
            purchase, we may receive a referral fee or commission at no
            additional cost to you. Our research and coverage decisions are
            never influenced by affiliate arrangements. Affiliate links are
            identified with <code>rel=&quot;sponsored&quot;</code> in line with
            search-engine guidelines.
          </p>

          <h2>13. Testimonials and endorsements</h2>
          <p>
            Testimonials presented on the Services reflect the views of the
            individuals who provided them. They are not paid testimonials
            unless expressly noted. Testimonials describe personal
            experiences and do not guarantee that you will experience
            similar results. Any testimonial featuring investment outcomes
            is accompanied by the disclosures required by applicable
            marketing and advertising rules, including, where relevant, the
            US Securities and Exchange Commission Marketing Rule (17 CFR
            275.206(4)-1). Where a testimonial refers to specific returns,
            those returns are not a guarantee of future performance.
          </p>

          <h2>14. Investment risk disclosures</h2>
          <p>
            Investing of any kind, and investing in digital assets in
            particular, involves substantial risk, including the possible
            loss of your entire investment. Before making any investment
            decision, you should carefully consider your financial situation,
            investment objectives, risk tolerance, and the risks outlined
            below, and you should consult a qualified professional.
          </p>
          <ul>
            <li>
              <strong>Market risk.</strong> Digital-asset, equity, fixed-income,
              commodity, and currency markets can be volatile. Prices may
              decline rapidly and substantially, and assets may become
              worthless or illiquid.
            </li>
            <li>
              <strong>Crypto-specific risks.</strong> Digital assets may be
              subject to extreme volatility, thin liquidity, exchange failures,
              custody and wallet risk, smart-contract bugs, protocol changes,
              forks, governance disputes, and loss of private keys. Many
              digital-asset markets operate 24/7 with limited investor
              protection compared to traditional securities markets.
            </li>
            <li>
              <strong>Leverage and derivatives risk.</strong> Margin,
              perpetuals, options, and other derivatives can amplify losses
              and result in losses greater than the amount initially
              invested. Funding rates, forced liquidations, and cascading
              deleveraging can cause rapid and severe losses.
            </li>
            <li>
              <strong>Regulatory and legal risk.</strong> Laws governing
              digital assets, securities, commodities, tax, and consumer
              protection vary across jurisdictions and are evolving.
              Regulatory changes may affect the availability, value, or
              tax treatment of investments.
            </li>
            <li>
              <strong>Tax risk.</strong> Digital-asset transactions generally
              have tax consequences and recordkeeping obligations. You are
              solely responsible for determining and paying any applicable
              taxes and for keeping accurate records.
            </li>
            <li>
              <strong>Operational and technology risk.</strong> Exchanges,
              brokers, and platforms can experience outages, bugs,
              breaches, and insolvencies. Transfers can be delayed or lost.
              You are responsible for safeguarding your own accounts and
              wallets.
            </li>
            <li>
              <strong>Model risk.</strong> Any framework, backtest, or
              model output is a simplification of reality, depends on
              historical data, and may fail to predict future outcomes.
              Assumptions and parameters may prove wrong. Past performance
              of any strategy is not indicative of future results.
            </li>
            <li>
              <strong>Macro, geopolitical, and systemic risk.</strong>
              Monetary-policy shifts, banking crises, wars, cyberattacks,
              pandemics, and other systemic events can drive correlated
              losses across asset classes.
            </li>
          </ul>

          <h2>15. No investment or other advice</h2>
          <p>
            All Content on the Services is for general educational and
            informational purposes only and is not investment, financial,
            legal, tax, accounting, or other professional advice. BlockPhi
            is not registered as an investment adviser or broker-dealer
            with any regulatory authority unless we expressly state
            otherwise. No portion of the Services should be construed as:
          </p>
          <ul>
            <li>A recommendation to buy, sell, hold, or solicit any security or digital asset.</li>
            <li>An offer or solicitation of any security or investment product in any jurisdiction where such offer or solicitation would be unlawful.</li>
            <li>A personalised investment plan or portfolio recommendation for you.</li>
            <li>Legal, tax, accounting, or estate-planning advice.</li>
          </ul>
          <p>
            You acknowledge that you are solely responsible for your own
            investment decisions and for any resulting gains or losses.
          </p>

          <h2>16. Forward-looking statements</h2>
          <p>
            The Services may contain forward-looking statements about
            markets, economies, and investment outlooks. These statements
            reflect our view at the time they are made and are subject to
            change, risk, and uncertainty. Actual results may differ
            materially. We undertake no obligation to update forward-looking
            statements.
          </p>

          <h2>17. Disclaimer of warranties</h2>
          <p>
            THE SERVICES AND ALL CONTENT ARE PROVIDED &ldquo;AS IS&rdquo; AND &ldquo;AS
            AVAILABLE&rdquo; WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED. TO
            THE FULLEST EXTENT PERMITTED BY LAW, BLOCKPHI DISCLAIMS ALL
            WARRANTIES, INCLUDING IMPLIED WARRANTIES OF MERCHANTABILITY,
            FITNESS FOR A PARTICULAR PURPOSE, NON-INFRINGEMENT, TITLE,
            ACCURACY, COMPLETENESS, RELIABILITY, SECURITY, AND ANY
            WARRANTY ARISING FROM COURSE OF DEALING OR USAGE OF TRADE. WE
            DO NOT WARRANT THAT THE SERVICES WILL BE UNINTERRUPTED, ERROR-
            FREE, SECURE, OR FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS,
            OR THAT ANY INFORMATION PROVIDED IS ACCURATE, CURRENT, OR
            COMPLETE.
          </p>

          <h2>18. Limitation of liability</h2>
          <p>
            TO THE FULLEST EXTENT PERMITTED BY LAW, BLOCKPHI AND ITS
            OFFICERS, EMPLOYEES, CONTRACTORS, AGENTS, AFFILIATES, AND
            LICENSORS WILL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL,
            SPECIAL, CONSEQUENTIAL, EXEMPLARY, OR PUNITIVE DAMAGES; FOR
            LOST PROFITS, LOST DATA, LOST OPPORTUNITY, LOSS OF GOODWILL,
            OR BUSINESS INTERRUPTION; OR FOR ANY INVESTMENT LOSS OR
            TRADING LOSS ARISING FROM OR RELATING TO THE SERVICES, THE
            CONTENT, OR YOUR RELIANCE ON ANY OF IT, WHETHER BASED ON
            CONTRACT, TORT (INCLUDING NEGLIGENCE), STRICT LIABILITY, OR
            ANY OTHER THEORY, EVEN IF WE HAVE BEEN ADVISED OF THE
            POSSIBILITY OF SUCH DAMAGES.
          </p>
          <p>
            TO THE FULLEST EXTENT PERMITTED BY LAW, OUR AGGREGATE LIABILITY
            ARISING OUT OF OR RELATING TO THE SERVICES AND THESE TERMS WILL
            NOT EXCEED THE GREATER OF (A) THE AMOUNT YOU PAID TO BLOCKPHI
            IN THE TWELVE (12) MONTHS PRECEDING THE EVENT GIVING RISE TO
            THE CLAIM, OR (B) EUR 100.
          </p>
          <p>
            Nothing in these Terms excludes or limits liability that cannot
            lawfully be excluded or limited, including liability for fraud,
            gross negligence, death, or personal injury caused by our
            negligence.
          </p>

          <h2>19. Indemnification</h2>
          <p>
            You agree to indemnify, defend, and hold harmless BlockPhi and
            its officers, employees, contractors, agents, affiliates, and
            licensors from and against any claims, damages, liabilities,
            losses, costs, and expenses (including reasonable attorneys&apos;
            fees) arising out of or relating to (a) your use of the
            Services, (b) your violation of these Terms or any applicable
            law, (c) your infringement of any third-party right, or (d)
            your content.
          </p>

          <h2>20. Termination and suspension</h2>
          <p>
            We may suspend or terminate your access to the Services, with
            or without notice, for violation of these Terms, for conduct
            that harms the community or us, for extended inactivity, for
            non-payment, or for any other reason permitted by law. You may
            terminate by cancelling your membership via Whop and
            discontinuing use. Sections that by their nature should
            survive termination will survive, including Sections 8
            (Intellectual property), 13-19 (Disclosures and liability),
            22-30 (Dispute resolution and miscellaneous), and any accrued
            payment obligations.
          </p>

          <h2>21. Modifications to the Services and these Terms</h2>
          <p>
            We may add, modify, suspend, or discontinue any part of the
            Services at any time. We may update these Terms from time to
            time; material changes will be reflected on this page with a
            new &ldquo;Last updated&rdquo; date, and, where appropriate, we will notify
            you. Your continued use of the Services after the revised Terms
            take effect constitutes your acceptance of the changes. If you
            do not agree to the changes, you must stop using the Services.
          </p>

          <h2>22. Copyright and DMCA</h2>
          <p>
            If you believe content on the Services infringes your copyright,
            please send a notice to{" "}
            <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
            including: (a) identification of the copyrighted work claimed
            to be infringed, (b) identification of the allegedly infringing
            material and its location on the Services, (c) your contact
            information, (d) a statement that you have a good-faith belief
            that the use is not authorised, (e) a statement, under penalty
            of perjury, that the information is accurate and that you are
            authorised to act on behalf of the owner, and (f) your
            physical or electronic signature.
          </p>

          <h2>23. Export controls and sanctions</h2>
          <p>
            The Services may be subject to export-control and sanctions
            laws of the European Union, the United States, the United
            Kingdom, and other jurisdictions. You may not use, access,
            export, re-export, or transfer the Services in violation of
            any such laws. You represent that you are not on, and are not
            acting on behalf of anyone on, any sanctions or denied-parties
            list.
          </p>

          <h2>24. Governing law and jurisdiction</h2>
          <p>
            These Terms are governed by the laws of Belgium, without
            regard to conflict-of-law principles. The United Nations
            Convention on Contracts for the International Sale of Goods
            does not apply. Any dispute arising out of or relating to
            these Terms or the Services that cannot be resolved informally
            will be submitted to the exclusive jurisdiction of the
            competent courts of the registered office of BlockPhi in
            Belgium, except where mandatory local consumer-protection law
            provides you with the right to bring a claim in the courts of
            your place of residence. Nothing in this section prevents
            either party from seeking injunctive or equitable relief in
            any court of competent jurisdiction.
          </p>

          <h2>25. Informal dispute resolution</h2>
          <p>
            Before filing a claim, you agree to attempt to resolve the
            dispute informally by sending a written notice to{" "}
            <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
            describing the claim and the relief sought. We will attempt to
            resolve the dispute within 60 days. If we cannot, either
            party may commence a formal proceeding in the forum designated
            in Section 24.
          </p>

          <h2>26. EU Online Dispute Resolution</h2>
          <p>
            The European Commission provides an online dispute resolution
            platform, which you can access at{" "}
            <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer">ec.europa.eu/consumers/odr</a>.
          </p>

          <h2>27. Electronic communications and consents</h2>
          <p>
            You consent to receive communications from us electronically,
            including emails, notices, and disclosures. Communications
            delivered electronically satisfy any legal requirement that
            such communications be in writing.
          </p>

          <h2>28. Force majeure</h2>
          <p>
            We are not liable for any delay or failure to perform resulting
            from causes outside our reasonable control, including acts of
            God, war, terrorism, riots, embargoes, civil or military
            authorities, fire, flood, accidents, pandemics, network
            infrastructure failures, strikes, or shortages of transport,
            facilities, fuel, energy, labour, or materials.
          </p>

          <h2>29. Miscellaneous</h2>
          <ul>
            <li>
              <strong>Entire agreement.</strong> These Terms and the Privacy
              Policy constitute the entire agreement between you and
              BlockPhi regarding the Services and supersede all prior
              understandings.
            </li>
            <li>
              <strong>Severability.</strong> If any provision of these Terms
              is held to be invalid or unenforceable, the remaining
              provisions will remain in full force and effect, and the
              invalid provision will be reformed to the minimum extent
              necessary to make it enforceable.
            </li>
            <li>
              <strong>No waiver.</strong> Our failure to enforce any right
              or provision of these Terms will not constitute a waiver of
              that right or provision.
            </li>
            <li>
              <strong>Assignment.</strong> You may not assign or transfer
              these Terms without our prior written consent. We may assign
              these Terms in connection with a merger, acquisition,
              reorganisation, or sale of assets.
            </li>
            <li>
              <strong>No partnership.</strong> Nothing in these Terms
              creates a partnership, joint venture, agency, fiduciary, or
              employment relationship between you and BlockPhi.
            </li>
            <li>
              <strong>Headings.</strong> Headings are for convenience only
              and do not affect interpretation.
            </li>
          </ul>

          <h2>30. Contact</h2>
          <p>
            Questions about these Terms? Email{" "}
            <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
          </p>

          <p className="legal-meta" style={{ marginTop: "2.5rem" }}>
            These Terms are provided for informational purposes and do not
            constitute legal advice. BlockPhi strongly recommends that you
            have qualified counsel review and adapt these Terms to your
            specific circumstances and jurisdictions before relying on them.
          </p>
        </div>
      </section>
      </main>
      <Footer />
    </>
  );
}
