import Link from "next/link"
import { PageShell, PageSection, PageDivider, PageCallout } from "@/components/page-shell"

const AMBER = "#B8903A"
const FOREST = "#1A3A2A"

export default function TermsPage() {
  const updated = new Date().toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  })

  return (
    <PageShell title="Terms of Use">
      <p className="text-center font-sans text-xs mb-8" style={{ color: "#6B7560" }}>
        Last updated:{" "}
        <time>{updated}</time>
      </p>

      <PageSection title="Agreement" number={1}>
        <p>
          By accessing EliteUKBettingSites.com you agree to be bound by these Terms of Use in their entirety.
          If you do not accept them, please leave this site immediately.
        </p>
      </PageSection>

      <PageDivider />

      <PageSection title="Nature of the Service" number={2}>
        <p>
          We publish independent editorial comparisons and expert ratings of third-party bookmakers licensed by the
          UK Gambling Commission. We are not a bookmaker, we do not accept wagers, and we do not hold or process
          player funds at any time.
        </p>
      </PageSection>

      <PageDivider />

      <PageSection title="Age Restriction" number={3}>
        <p>
          You must be 18 years of age or older to use this site. All content is directed exclusively at adults
          in Great Britain who are legally entitled to view gambling-related advertising and information.
        </p>
      </PageSection>

      <PageDivider />

      <PageSection title="Accuracy of Information" number={4}>
        <p>
          Bonus offers, odds, terms, and operator details are subject to change without notice. Our editorial copy
          may not always reflect the most recent modifications made by individual operators. Always verify all
          information directly on the operator&apos;s official website before making any deposit.
        </p>
      </PageSection>

      <PageDivider />

      <PageSection title="External Links" number={5}>
        <p>
          Outbound links lead to independent third-party platforms. Each operates under its own terms, privacy
          policy, and regulatory licence. We accept no responsibility for the conduct, content, pricing, or
          availability of any linked external site.
        </p>
      </PageSection>

      <PageDivider />

      <PageSection title="Responsible Gambling" number={6}>
        <p>
          Gambling must remain an enjoyable leisure activity conducted within strict financial limits. Never
          chase losses or borrow money to fund wagers. Free confidential support is available from GambleAware,
          GamCare, and Gambling Therapy — see our site footer for direct links.
        </p>
      </PageSection>

      <PageDivider />

      <PageSection title="Intellectual Property" number={7}>
        <p>
          All editorial text, layout, and visual assets produced by EliteUKBettingSites.com remain our exclusive
          intellectual property. Third-party logos and trademarks are used solely for nominative identification
          and remain the exclusive property of their respective owners.
        </p>
      </PageSection>

      <PageDivider />

      <PageSection title="Limitation of Liability" number={8}>
        <p>
          To the fullest extent permitted under English law, we exclude all liability for any loss arising from
          reliance on content published on this site. Nothing in these terms limits liability that cannot lawfully
          be excluded under applicable law.
        </p>
      </PageSection>

      <PageDivider />

      <PageSection title="Privacy" number={9}>
        <p>
          The collection and use of personal data is governed by our{" "}
          <Link
            href="/privacy-policy"
            className="font-semibold underline underline-offset-2 transition-opacity hover:opacity-75"
            style={{ color: FOREST }}
          >
            Privacy Policy
          </Link>
          , which forms part of these Terms of Use and should be read alongside them.
        </p>
      </PageSection>

      <PageDivider />

      <PageSection title="Amendments" number={10}>
        <p>
          We reserve the right to amend these terms at any time. Revised terms will be published on this page
          with an updated date. Continued use of the site following publication constitutes your acceptance of
          the revised terms.
        </p>
      </PageSection>

      <PageDivider />

      <PageSection title="Governing Law" number={11}>
        <p>
          These terms are governed by the laws of England and Wales. The courts of England and Wales shall have
          non-exclusive jurisdiction to resolve any dispute arising under or in connection with these terms.
        </p>
      </PageSection>

      <div className="mt-8">
        <PageCallout variant="amber" title="18+ Only — Please Gamble Responsibly">
          <p>
            EliteUKBettingSites.com does not accept wagers or hold player funds. All betting activity takes place
            on licensed third-party platforms subject to their own terms and conditions. Commercial links on this
            site may generate affiliate revenue which does not influence our editorial rankings.
          </p>
        </PageCallout>
      </div>
    </PageShell>
  )
}
