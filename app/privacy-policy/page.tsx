import Link from "next/link"
import { PageShell, PageSection, PageDivider } from "@/components/page-shell"

const FOREST = "#1A3A2A"
const AMBER = "#B8903A"

export default function PrivacyPolicyPage() {
  const reviewed = new Date().toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  })

  return (
    <PageShell title="Privacy Policy">
      <p className="text-center font-sans text-xs mb-8" style={{ color: "#6B7560" }}>
        Last reviewed: <time>{reviewed}</time>
      </p>

      <PageSection title="Who We Are">
        <p>
          EliteUKBettingSites.com publishes independent editorial comparisons of UK-licensed online bookmakers.
          This policy explains what personal data may come into contact with our systems and how it is handled.
        </p>
      </PageSection>

      <PageDivider />

      <PageSection title="Data We May Process">
        <ul className="space-y-1.5 list-disc pl-4">
          <li>
            <strong style={{ color: FOREST }}>Technical logs:</strong> IP address, browser type,
            approximate location, and access timestamps retained to maintain site security.
          </li>
          <li>
            <strong style={{ color: FOREST }}>Usage signals:</strong> page-view counts and approximate
            scroll depth — only where analytics consent has been granted.
          </li>
          <li>
            <strong style={{ color: FOREST }}>Communications:</strong> if you contact us by email, we
            retain correspondence only as long as necessary to resolve your query.
          </li>
        </ul>
        <p className="text-xs mt-2 italic" style={{ color: "#8B9280" }}>
          We operate no sportsbook. We hold no betting history, payment card data, or player account credentials.
        </p>
      </PageSection>

      <PageDivider />

      <PageSection title="Legal Bases (UK GDPR)">
        <p>
          Where UK law applies, we rely on <strong style={{ color: FOREST }}>legitimate interest</strong> to
          operate and secure the site, and on <strong style={{ color: FOREST }}>consent</strong> where we
          request it (for example, analytics cookies). You may withdraw consent at any time via your browser
          settings or our cookie banner.
        </p>
      </PageSection>

      <PageDivider />

      <PageSection title="Sharing Your Data">
        <p>
          Hosting providers, analytics vendors, and affiliate networks may process data on our behalf under
          appropriate contractual safeguards. We do not sell personal data as a product. Lawful requests from
          public authorities will be honoured where legally required.
        </p>
      </PageSection>

      <PageDivider />

      <PageSection title="Retention">
        <p>
          Server logs are rotated on a short cycle. Analytics aggregates are retained in anonymised form.
          Email correspondence is deleted once the relevant matter is resolved, unless longer retention is
          required under applicable law.
        </p>
      </PageSection>

      <PageDivider />

      <PageSection title="Security">
        <p>
          We enforce HTTPS site-wide, apply access controls to administrative interfaces, and partner with
          vendors that maintain industry-standard security practices. No online system can be fully guaranteed
          against breach — please report any suspected vulnerabilities to us promptly.
        </p>
      </PageSection>

      <PageDivider />

      <PageSection title="Your Rights">
        <p>
          You may request access, rectification, erasure, restriction, or portability of your personal data
          where applicable under UK GDPR.
        </p>
        <p>
          UK residents may also lodge complaints with the{" "}
          <a
            href="https://ico.org.uk"
            target="_blank"
            rel="noopener noreferrer"
            className="underline font-medium hover:opacity-75 transition-opacity"
            style={{ color: FOREST }}
          >
            Information Commissioner&apos;s Office (ICO)
          </a>
          .
        </p>
      </PageSection>

      <PageDivider />

      <PageSection title="Children">
        <p>
          Our services are directed exclusively at adults aged 18 and over. We do not knowingly collect data
          from minors. If you believe a child has interacted with this site, please contact us and we will
          arrange prompt removal.
        </p>
      </PageSection>

      <PageDivider />

      <PageSection title="International Transfers">
        <p>
          Certain subprocessors operate outside the UK/EEA. Where this is the case, we rely on appropriate
          transfer mechanisms such as UK Standard Contractual Clauses as updated under UK GDPR.
        </p>
      </PageSection>

      <PageDivider />

      <PageSection title="Changes to This Policy">
        <p>
          Updates will be published here with a revised review date. Continued use of the site following
          material changes constitutes acceptance of the updated policy, unless fresh consent is required.
        </p>
      </PageSection>

      <PageDivider />

      <PageSection title="Contact">
        <p>
          For data-related enquiries, please write to{" "}
          <a
            href="mailto:info@eliteukbettingsites.com"
            className="underline font-medium hover:opacity-75 transition-opacity"
            style={{ color: FOREST }}
          >
            info@eliteukbettingsites.com
          </a>
          .
        </p>
        <p>
          For cookie-specific information, see our{" "}
          <Link
            href="/cookie-policy"
            className="underline font-medium hover:opacity-75 transition-opacity"
            style={{ color: FOREST }}
          >
            Cookie Policy
          </Link>
          .
        </p>
      </PageSection>
    </PageShell>
  )
}
