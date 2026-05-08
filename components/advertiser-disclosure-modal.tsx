"use client"

import { X, Megaphone } from "lucide-react"

const FOREST = "#1A3A2A"
const AMBER = "#B8903A"
const WHITE = "#FFFFFF"
const CREAM = "#F7F4EF"
const BORDER = "#E2D9C9"
const TEXT_MUTED = "#6B7560"
const TEXT_MAIN = "#1A2420"

interface AdvertiserDisclosureModalProps {
  isOpen: boolean
  onClose: () => void
}

export function AdvertiserDisclosureModal({ isOpen, onClose }: AdvertiserDisclosureModalProps) {
  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-[60] flex items-end sm:items-center justify-center p-0 sm:p-4 modal-scrim"
      role="dialog"
      aria-modal="true"
      aria-labelledby="adv-disclosure-title"
      onClick={onClose}
    >
      <div
        className="w-full sm:max-w-lg max-h-[92vh] sm:max-h-[88vh] flex flex-col overflow-hidden rounded-t-xl sm:rounded-xl border"
        style={{
          backgroundColor: WHITE,
          borderColor: BORDER,
          boxShadow: "0 20px 60px 0 rgba(26,58,42,0.25)",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Forest top rule */}
        <div
          className="h-[4px] shrink-0 rounded-t-xl"
          style={{ background: `linear-gradient(to right, ${FOREST}, ${AMBER})` }}
        />

        {/* Header */}
        <div
          className="shrink-0 flex items-start justify-between gap-3 px-5 py-5 sm:px-7 border-b"
          style={{ borderColor: BORDER }}
        >
          <div className="flex items-center gap-3">
            <div
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm border"
              style={{ borderColor: BORDER, backgroundColor: "rgba(26,58,42,0.06)" }}
            >
              <Megaphone className="w-5 h-5" style={{ color: FOREST }} strokeWidth={2} />
            </div>
            <div>
              <h2
                id="adv-disclosure-title"
                className="font-display font-bold text-xl"
                style={{ color: FOREST }}
              >
                Advertiser Disclosure
              </h2>
              <p
                className="text-[9px] font-sans uppercase tracking-[0.25em] mt-0.5"
                style={{ color: AMBER }}
              >
                How We Are Funded
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-sm border transition-colors hover:bg-[#F7F4EF]"
            style={{ borderColor: BORDER, color: TEXT_MUTED }}
            aria-label="Close"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Body */}
        <div
          className="flex-1 overflow-y-auto px-5 py-5 sm:px-7 space-y-5 font-sans text-sm leading-relaxed"
          style={{ color: TEXT_MAIN }}
        >
          <div
            className="rounded-sm border px-4 py-4"
            style={{ borderColor: BORDER, backgroundColor: CREAM }}
          >
            <h3 className="font-semibold mb-2" style={{ color: FOREST }}>
              Commercial Links
            </h3>
            <p style={{ color: TEXT_MUTED }}>
              EliteUKBettingSites.com may receive remuneration when you navigate to a bookmaker via
              our comparison links. That revenue funds our editorial research, platform costs, and
              ongoing licence reviews.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-2" style={{ color: FOREST }}>
              Editorial Independence
            </h3>
            <p className="mb-3" style={{ color: TEXT_MUTED }}>
              Affiliate relationships do not determine ranking order. Positions are established by
              objective criteria including:
            </p>
            <ul className="space-y-1.5 list-none">
              {[
                "Full UK Gambling Commission licence held",
                "Competitive odds margins across major markets",
                "Transparent bonus terms and withdrawal timeframes",
                "Platform reliability and customer support quality",
              ].map((item) => (
                <li key={item} className="flex gap-2" style={{ color: TEXT_MUTED }}>
                  <span style={{ color: AMBER }}>·</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div
            className="rounded-sm border px-4 py-4"
            style={{ borderColor: BORDER, backgroundColor: CREAM }}
          >
            <h3 className="font-semibold mb-2" style={{ color: FOREST }}>
              Your Responsibility
            </h3>
            <p style={{ color: TEXT_MUTED }}>
              Always confirm current offer terms directly on the operator&apos;s own website before
              depositing. Only stake what you can genuinely afford to lose.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div
          className="shrink-0 border-t px-5 py-3 sm:px-7 text-center"
          style={{ borderColor: BORDER, backgroundColor: CREAM }}
        >
          <p
            className="font-sans text-xs font-semibold uppercase tracking-wider"
            style={{ color: AMBER }}
          >
            18+ &middot; United Kingdom &middot; Responsible Gambling
          </p>
        </div>
      </div>
    </div>
  )
}
