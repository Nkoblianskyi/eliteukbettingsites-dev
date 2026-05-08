import Link from "next/link"
import { PageShell, PageSection, PageDivider } from "@/components/page-shell"

const FOREST = "#1A3A2A"
const AMBER = "#B8903A"
const CREAM = "#F7F4EF"
const BORDER = "#E2D9C9"

export default function CookiePolicyPage() {
  const effectiveDate = new Date().toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  })

  return (
    <PageShell title="Cookie Policy">
      <p className="text-center font-sans text-xs mb-8" style={{ color: "#6B7560" }}>
        Effective: <time>{effectiveDate}</time>
      </p>

      <PageSection title="What Is a Cookie?" number={1}>
        <p>
          A cookie is a small text file placed on your device when a web page loads. It may remember your
          preferences, maintain a session state, or provide us with aggregate traffic data — and it does so
          transparently, consistent with our obligations under UK law.
        </p>
      </PageSection>

      <PageDivider />

      <PageSection title="How EliteUKBettingSites Uses Cookies" number={2}>
        <ul className="space-y-2">
          {[
            [
              "Strictly Necessary",
              "Stores your consent preference and any security tokens required to operate the site. These cannot be disabled without disrupting core functionality.",
            ],
            [
              "Analytics (if accepted)",
              "Anonymous page-view counts used exclusively to identify sections of the site that may benefit from editorial improvement.",
            ],
            [
              "Functional",
              "Retains light UI state such as dismissed notifications where this feature is implemented.",
            ],
            [
              "Referral / Affiliate",
              "When you navigate to a listed bookmaker, that operator's network may set its own cookies under its own policy — these are outside our control.",
            ],
          ].map(([term, def]) => (
            <li key={term as string} className="flex gap-2">
              <span style={{ color: AMBER }}>·</span>
              <span>
                <strong className="font-semibold" style={{ color: FOREST }}>
                  {term}:{" "}
                </strong>
                {def}
              </span>
            </li>
          ))}
        </ul>
      </PageSection>

      <PageDivider />

      <PageSection title="Session vs Persistent Cookies" number={3}>
        <p>
          Session cookies are erased automatically when you close your browser. Persistent cookies remain
          until their expiry date or until you delete them manually. We keep cookie lifetimes as short as
          practical for each stated purpose.
        </p>
      </PageSection>

      <PageDivider />

      <PageSection title="Third-Party Cookies" number={4}>
        <p>
          Embedded widgets, analytics platforms, or partner scripts may set their own cookies under separate
          privacy policies. We recommend consulting those third-party documents for full detail regarding their
          data practices.
        </p>
      </PageSection>

      <PageDivider />

      <PageSection title="Your Controls" number={5}>
        <p>
          Every major browser allows you to block, delete, or auto-expire cookies at any time. Private or
          Incognito mode prevents most persistent cookies from being written to your device.
        </p>
        <p>
          Blocking all cookies may affect site functionality — for example, the consent preference banner may
          reappear on each visit if its storage cookie cannot be written.
        </p>
      </PageSection>

      <PageDivider />

      <PageSection title="Policy Updates" number={6}>
        <p>
          We revise this notice when our technical infrastructure changes. The effective date at the top of
          this page reflects the most recent revision. Material changes may also be indicated briefly on the
          homepage.
        </p>
      </PageSection>

      <PageDivider />

      <PageSection title="Contact" number={7}>
        <p>
          For questions about this notice, write to{" "}
          <a
            href="mailto:info@eliteukbettingsites.com"
            className="underline font-medium hover:opacity-75 transition-opacity"
            style={{ color: FOREST }}
          >
            info@eliteukbettingsites.com
          </a>
          . See also our{" "}
          <Link
            href="/privacy-policy"
            className="underline font-medium hover:opacity-75 transition-opacity"
            style={{ color: FOREST }}
          >
            Privacy Policy
          </Link>
          .
        </p>
      </PageSection>
    </PageShell>
  )
}
