import { PageShell, PageSection, PageDivider, PageCallout } from "@/components/page-shell"
import { Shield, Phone, Globe, AlertTriangle } from "lucide-react"

const FOREST = "#1A3A2A"
const AMBER = "#B8903A"
const CREAM = "#F7F4EF"
const BORDER = "#E2D9C9"

const principles = [
  {
    title: "Set Time Limits",
    body: "Decide in advance how long each session will last and honour that commitment regardless of results.",
  },
  {
    title: "Set Financial Limits",
    body: "Only wager money you can genuinely afford to lose. Never borrow funds to cover gambling activity.",
  },
  {
    title: "Take Regular Breaks",
    body: "Step away from the platform at regular intervals to maintain perspective and prevent impulsive decisions.",
  },
  {
    title: "Never Chase Losses",
    body: "Accept losses as an inherent cost of the entertainment. Increasing stakes to recover previous losses accelerates harm.",
  },
]

const warningSigns = [
  "Spending more time or money gambling than originally planned",
  "Feeling anxious, irritable, or guilty when not gambling or when attempting to stop",
  "Concealing gambling activity from close family or friends",
  "Borrowing money, selling possessions, or missing bills to fund gambling",
  "Neglecting professional responsibilities, family commitments, or personal health",
  "Inability to reduce or stop gambling despite repeated attempts",
  "Using gambling as an escape from stress, anxiety, or low mood",
  "Needing to stake increasing amounts to achieve the same level of excitement",
]

const selfHelpTools = [
  ["Deposit Limits", "Set daily, weekly, or monthly caps on how much can be deposited into your account."],
  ["Loss Limits", "Restrict how much you can lose within a defined time period."],
  ["Session Time Limits", "Cap the duration of any single playing session."],
  ["Reality Checks", "Receive on-screen reminders showing elapsed session time at regular intervals."],
  ["Cool-Off Periods", "Temporarily suspend account access for a defined period of days or weeks."],
  ["Self-Exclusion", "Register for GAMSTOP to exclude yourself from all UK-licensed gambling platforms simultaneously."],
]

const organisations = [
  {
    name: "GambleAware",
    icon: Globe,
    description:
      "The leading UK charity providing information, advice, and free treatment referrals for anyone affected by gambling-related harm.",
    website: "www.gambleaware.org",
    helpline: "0808 8020 133",
  },
  {
    name: "GamCare",
    icon: Phone,
    description:
      "Delivers practical information, advice, and free counselling to anyone dealing with gambling problems in the UK.",
    website: "www.gamcare.org.uk",
    helpline: "0808 8020 133",
  },
  {
    name: "Gamblers Anonymous",
    icon: Shield,
    description:
      "A peer-support fellowship offering structured group meetings for anyone seeking to overcome a gambling problem.",
    website: "www.gamblersanonymous.org.uk",
    helpline: "Local meeting finder on website",
  },
  {
    name: "Gordon Moody Association",
    icon: AlertTriangle,
    description:
      "Provides specialist residential and day-care treatment programmes for people with severe gambling addictions.",
    website: "www.gordonmoody.org.uk",
    helpline: "01384 241292",
  },
]

export default function ResponsibleGamingPage() {
  return (
    <PageShell
      title="Responsible Gambling"
      subtitle="EliteUKBettingSites.com is committed to promoting safe wagering. If gambling stops being enjoyable, help is always available."
    >
      {/* Key principles grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
        {principles.map((p) => (
          <div
            key={p.title}
            className="rounded-sm border p-4"
            style={{ backgroundColor: CREAM, borderColor: BORDER }}
          >
            <h3 className="font-display font-bold text-base mb-1.5" style={{ color: FOREST }}>
              {p.title}
            </h3>
            <p className="font-sans text-sm leading-relaxed" style={{ color: "#6B7560" }}>
              {p.body}
            </p>
          </div>
        ))}
      </div>

      <PageDivider />

      <PageSection title="Gambling Responsibly">
        <p>
          Responsible gambling means treating wagering as a form of paid entertainment — like a theatre ticket or a
          restaurant meal — with a predetermined budget and a firm decision to stop when that budget is exhausted.
          Understanding that the house margin means losses are the statistical norm over time is the foundation of a
          healthy relationship with betting.
        </p>
      </PageSection>

      <PageDivider />

      <PageSection title="Warning Signs to Watch For">
        <ul className="space-y-2">
          {warningSigns.map((sign) => (
            <li key={sign} className="flex gap-2">
              <span className="mt-0.5 shrink-0 text-sm" style={{ color: AMBER }}>
                ·
              </span>
              <span>{sign}</span>
            </li>
          ))}
        </ul>
      </PageSection>

      <PageDivider />

      <PageSection title="Self-Help Tools Available at Licensed Operators">
        <p className="mb-3">
          All UKGC-licensed bookmakers are legally required to offer the following tools — they are not optional extras.
          If you cannot easily locate them on a platform&apos;s account settings page, contact their support team directly.
        </p>
        <div
          className="rounded-sm border p-4"
          style={{ backgroundColor: CREAM, borderColor: BORDER }}
        >
          <ul className="space-y-2">
            {selfHelpTools.map(([tool, desc]) => (
              <li key={tool} className="flex gap-2 text-sm">
                <span style={{ color: AMBER }} className="shrink-0 mt-0.5">·</span>
                <span>
                  <strong className="font-semibold" style={{ color: FOREST }}>
                    {tool}:{" "}
                  </strong>
                  {desc}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </PageSection>

      <PageDivider />

      <PageSection title="Support Organisations">
        <p className="mb-5">
          If you are concerned about your gambling or that of someone close to you, the following organisations provide
          free, confidential, and immediately available assistance.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {organisations.map(({ name, icon: Icon, description, website, helpline }) => (
            <div
              key={name}
              className="rounded-sm border p-4"
              style={{ backgroundColor: CREAM, borderColor: BORDER }}
            >
              <div className="flex items-center gap-2 mb-2">
                <Icon className="w-4 h-4 shrink-0" style={{ color: FOREST }} />
                <h3 className="font-display font-bold text-base" style={{ color: FOREST }}>
                  {name}
                </h3>
              </div>
              <p className="font-sans text-xs leading-relaxed mb-3" style={{ color: "#6B7560" }}>
                {description}
              </p>
              <p className="font-sans text-xs" style={{ color: "#6B7560" }}>
                <strong style={{ color: FOREST }}>Web:</strong> {website}
              </p>
              <p className="font-sans text-xs mt-0.5" style={{ color: "#6B7560" }}>
                <strong style={{ color: FOREST }}>Helpline:</strong> {helpline}
              </p>
            </div>
          ))}
        </div>
      </PageSection>

      <PageDivider />

      <PageSection title="For Family and Friends">
        <p>
          Gambling problems reach beyond the individual — they affect partners, parents, and children too. If someone
          close to you is experiencing difficulty:
        </p>
        <ul className="space-y-1.5 mt-2">
          {[
            "Do not dismiss or minimise the problem — early intervention makes a significant difference.",
            "Encourage professional help without issuing ultimatums that may cause withdrawal.",
            "Avoid lending money or covering gambling debts regardless of circumstances.",
            "Safeguard your own wellbeing — GamCare offers support for affected family members.",
          ].map((item) => (
            <li key={item} className="flex gap-2">
              <span style={{ color: AMBER }}>·</span>
              {item}
            </li>
          ))}
        </ul>
      </PageSection>

      <PageDivider />

      <PageSection title="What EliteUKBettingSites Expects from Listed Operators">
        <p>
          Every bookmaker featured on this site must demonstrate that its responsible gambling tools are prominently
          accessible — not concealed in policy documents. We verify that deposit limits, cooling-off periods, and
          self-exclusion options can be reached within two or three navigation steps.
        </p>
      </PageSection>

      {/* Helpline callout */}
      <div
        className="mt-8 rounded-sm border text-center py-8 px-5"
        style={{ backgroundColor: FOREST, borderColor: FOREST }}
      >
        <h3 className="font-display font-bold text-xl text-white mb-2">
          Need Immediate Support?
        </h3>
        <p className="font-sans text-sm text-white/70 mb-4">
          Help is available around the clock — you do not need to wait.
        </p>
        <p className="font-display font-bold text-2xl" style={{ color: "#D4A94C" }}>
          National Gambling Helpline: 0808 8020 133
        </p>
        <p className="font-sans text-xs text-white/50 mt-1">
          Free &middot; Confidential &middot; Available 24 hours a day
        </p>
      </div>
    </PageShell>
  )
}
