import type React from "react"
import { PageShell, PageSection, PageDivider, PageCallout } from "@/components/page-shell"

const FOREST = "#1A3A2A"
const AMBER = "#B8903A"
const CREAM = "#F7F4EF"
const BORDER = "#E2D9C9"

export default function AboutPage() {
  return (
    <PageShell
      title="About Us"
      subtitle="EliteUKBettingSites.com is an independent editorial platform built to help British punters choose the right licensed bookmaker with confidence."
    >
      <PageSection title="Why We Exist">
        <p>
          The UK sports betting market is large, competitive, and — for anyone approaching it without a guide — often
          confusing. Each operator promotes its headline free-bet while the fine print shifts weekly. EliteUKBettingSites.com
          exists to cut through that noise: one authoritative comparison table, consistent scoring criteria, and
          plain-English editorial notes so you can evaluate operators on equal terms before opening a single account.
        </p>
      </PageSection>

      <PageDivider />

      <PageSection title="Our Editorial Standards">
        <p>
          Rankings are constructed on six independent pillars: odds competitiveness on mainstream markets, live
          coverage depth, platform stability across devices, KYC and withdrawal smoothness, promotional transparency,
          and customer support quality. Commercial affiliate relationships help fund this publication but do not
          influence positions in the table — when an operator&apos;s performance falls, the score follows.
        </p>
        <div
          className="border mt-4 rounded-sm px-5 py-4"
          style={{ borderColor: BORDER, backgroundColor: CREAM }}
        >
          <ul className="space-y-2 text-xs" style={{ color: "#6B7560" }}>
            {[
              ["Licensing", "Only operators appropriately authorised for UK customers are considered."],
              ["Player Safety", "Deposit limits, reality checks, and self-exclusion access are verified."],
              ["Product Breadth", "Live betting, bet builders, and streaming are assessed where applicable."],
              ["Payment Rails", "Common UK banking methods and withdrawal speed are evaluated end-to-end."],
              ["Support Quality", "Availability and responsiveness of live chat and telephone channels are assessed."],
            ].map(([term, def]) => (
              <li key={term as string}>
                <strong className="font-semibold" style={{ color: FOREST }}>
                  {term}:{" "}
                </strong>
                {def}
              </li>
            ))}
          </ul>
        </div>
      </PageSection>

      <PageDivider />

      <PageSection title="How We Work">
        <p>
          Where practicable, our editors open genuine accounts, complete KYC procedures, and time withdrawal journeys
          first-hand. We also monitor specialist forums, Gambling Commission bulletins, and verified consumer
          feedback. When an operator changes a headline offer or alters payout terms materially, we aim to reflect
          that change within the same week.
        </p>
      </PageSection>

      <PageDivider />

      <PageSection title="Commercial Transparency">
        <p>
          Outbound links to listed operators may carry affiliate identifiers. This commercial arrangement does not
          alter our ranking methodology. A full explanation of our financial relationships is available via the
          Advertiser Disclosure link on the homepage.
        </p>
      </PageSection>

      <PageDivider />

      <PageSection title="Responsible Gambling">
        <p>
          Wagering should be a leisure activity conducted within clearly defined financial limits. If it becomes
          compulsive, escapist, or you notice yourself chasing losses, we strongly urge you to step away and contact
          one of the free, confidential organisations listed in the site footer.
        </p>
      </PageSection>

      <PageCallout variant="amber" title="18+ Only">
        <p>
          EliteUKBettingSites.com does not accept wagers or hold player funds. All betting activity takes place on
          licensed third-party platforms subject to their own terms and conditions.
        </p>
      </PageCallout>
    </PageShell>
  )
}
