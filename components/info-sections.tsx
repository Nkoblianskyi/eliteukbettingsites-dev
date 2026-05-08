"use client"

const FOREST = "#1A3A2A"
const FOREST_LIGHT = "#2C5A40"
const AMBER = "#B8903A"
const WHITE = "#FFFFFF"
const CREAM = "#F7F4EF"
const CREAM_DARK = "#EDE8E0"
const BORDER = "#E2D9C9"
const TEXT_MAIN = "#1A2420"
const TEXT_MUTED = "#6B7560"

const sections = [
  {
    title: "How We Select Britain's Premier Bookmakers",
    lead: "Our editorial process is independent, rigorous, and purpose-built for the serious UK punter.",
    body: "A strong bookmaker is more than a headline bonus figure. It is an operator that performs consistently across the dimensions that directly affect your long-term experience — competitive pricing, reliable platform, transparent settlement, and robust responsible gambling tools. EliteUKBettingSites.com spotlights the operators that demonstrate this sustained excellence for UK customers.",
  },
  {
    title: "Our Six-Pillar Assessment Framework",
    body: "Every operator is reviewed across six criteria: odds competitiveness on mainstream markets, breadth and quality of live-betting coverage, mobile and desktop platform stability, KYC and withdrawal smoothness, promotional transparency, and customer support responsiveness. Commercial relationships with any featured operator do not influence ranking positions.",
  },
  {
    title: "Matching a Bookmaker to Your Betting Style",
    body: "Start with the sports and leagues you wager on most frequently. If live streaming matters to you, prioritise operators with rights to your preferred competitions. If accumulator building is your strategy, focus on platforms with transparent acca rules and strong multi-leg tools. Marginal odds improvements repeated across hundreds of bets accumulate to a meaningful difference over time.",
  },
  {
    title: "Decoding Welcome Offers",
    body: "Introductory promotions are subject to continuous revision. The summaries shown beneath each operator logo reflect the current headline mechanic at time of review. The operator's own terms page is the binding document. Pay close attention to minimum qualifying stake, excluded payment methods, eligible bet types, expiry windows, and whether free-bet stakes are returned alongside winnings.",
  },
  {
    title: "Regulation and Player Protection",
    body: "Every operator listed holds a licence valid for UK customers issued by the UK Gambling Commission. UKGC-licensed firms are legally required to meet standards covering customer funds protection, game fairness certification, and responsible gambling tooling — including deposit limits, time-outs, and GAMSTOP self-exclusion. Regulation does not eliminate inherent risk, but it establishes a formal accountability framework.",
  },
  {
    title: "Platform Quality and Technology",
    body: "Modern bookmakers compete on cash-out logic accuracy, partial settlement options, bet-builder precision, and low-latency in-play pricing. We assess how reliably these features perform across both mobile browsers and dedicated apps, because platform friction during live events translates directly into missed value and a diminished experience.",
  },
  {
    title: "A Note on Responsible Gambling",
    body: "Disciplined wagering requires defined stakes, written session limits, and an unwavering refusal to chase losses. Promotional offers are onboarding tools — they are not a supplementary income stream. If gambling begins to feel compulsive rather than recreational, the organisations listed in our footer offer free, confidential, and immediately available support services.",
  },
]

export function InfoSections() {
  return (
    <div className="mt-14">
      {/* Section header */}
      <div className="flex items-center gap-4 mb-8">
        <div className="flex-1 h-px" style={{ background: BORDER }} />
        <div className="text-center px-2">
          <p
            className="text-[9px] font-sans font-bold uppercase tracking-[0.35em] mb-1"
            style={{ color: AMBER }}
          >
            Editorial Guide
          </p>
          <h2 className="font-display font-bold text-2xl sm:text-3xl" style={{ color: FOREST }}>
            Our Methodology
          </h2>
        </div>
        <div className="flex-1 h-px" style={{ background: BORDER }} />
      </div>

      {/* Lead section */}
      <div
        className="rounded-sm border px-6 py-6 sm:px-8 sm:py-7 mb-1"
        style={{
          backgroundColor: FOREST,
          borderColor: FOREST,
          boxShadow: "0 4px 20px 0 rgba(26,58,42,0.12)",
        }}
      >
        <h3 className="font-display font-bold text-xl sm:text-2xl mb-3 text-white">
          {sections[0].title}
        </h3>
        <p className="font-sans font-semibold text-sm mb-3" style={{ color: "#D4A94C" }}>
          {sections[0].lead}
        </p>
        <p className="font-sans text-sm leading-relaxed text-white/75">
          {sections[0].body}
        </p>
      </div>

      {/* Remaining sections */}
      <div className="space-y-px">
        {sections.slice(1).map((section, i) => (
          <article
            key={section.title}
            className="border-l border-r border-b px-6 py-5 sm:px-8 sm:py-6 transition-colors"
            style={{
              backgroundColor: i % 2 === 0 ? WHITE : CREAM,
              borderColor: BORDER,
            }}
          >
            <div className="flex items-start gap-4">
              {/* Number */}
              <span
                className="font-display font-bold text-2xl leading-none shrink-0 mt-0.5 w-6 text-right"
                style={{ color: "rgba(184,144,58,0.4)" }}
              >
                {i + 1}
              </span>
              <div>
                <h3
                  className="font-display font-bold text-base sm:text-lg mb-2"
                  style={{ color: FOREST }}
                >
                  {section.title}
                </h3>
                <p
                  className="font-sans text-sm leading-relaxed"
                  style={{ color: TEXT_MUTED }}
                >
                  {section.body}
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Disclaimer */}
      <div
        className="mt-3 rounded-b-sm border border-t-0 px-5 py-4 text-center"
        style={{ borderColor: BORDER, backgroundColor: CREAM_DARK }}
      >
        <p
          className="text-[10px] font-sans uppercase tracking-wider leading-relaxed"
          style={{ color: AMBER }}
        >
          Content &copy; eliteukbettingsites.com &nbsp;&middot;&nbsp; All promotions are for adults
          18+ in the United Kingdom. Identity and location verification applies.
        </p>
      </div>
    </div>
  )
}
