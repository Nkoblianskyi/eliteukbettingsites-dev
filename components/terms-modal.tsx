"use client"

import { X, ShieldAlert } from "lucide-react"

const FOREST = "#1A3A2A"
const AMBER = "#B8903A"
const WHITE = "#FFFFFF"
const CREAM = "#F7F4EF"
const BORDER = "#E2D9C9"
const TEXT_MUTED = "#6B7560"
const TEXT_MAIN = "#1A2420"

interface TermsModalProps {
  isOpen: boolean
  onClose: () => void
}

export function TermsModal({ isOpen, onClose }: TermsModalProps) {
  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-[60] flex items-end sm:items-center justify-center p-0 sm:p-4 modal-scrim"
      role="dialog"
      aria-modal="true"
      aria-labelledby="terms-modal-title"
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
        {/* Forest/amber top rule */}
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
              <ShieldAlert className="w-5 h-5" style={{ color: FOREST }} strokeWidth={2} />
            </div>
            <div>
              <h2
                id="terms-modal-title"
                className="font-display font-bold text-xl"
                style={{ color: FOREST }}
              >
                Site Rules &amp; 18+
              </h2>
              <p
                className="text-[9px] font-sans uppercase tracking-[0.25em] mt-0.5"
                style={{ color: AMBER }}
              >
                Terms of Use
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
          className="flex-1 overflow-y-auto px-5 py-5 sm:px-7 space-y-4 font-sans text-sm leading-relaxed"
          style={{ color: TEXT_MAIN }}
        >
          <p>
            Accessing <strong style={{ color: FOREST }}>EliteUKBettingSites.com</strong> constitutes
            your acceptance of these rules, applicable across all devices and sessions.
          </p>

          <div
            className="rounded-sm border px-4 py-3"
            style={{ borderColor: BORDER, backgroundColor: CREAM }}
          >
            <p className="font-semibold mb-1" style={{ color: FOREST }}>
              Age Restriction
            </p>
            <p style={{ color: TEXT_MUTED }}>
              This website is strictly for adults aged 18 and over. It features information relating
              to gambling. If you are under 18, please leave immediately.
            </p>
          </div>

          <div>
            <p className="font-semibold mb-2" style={{ color: FOREST }}>
              Responsible Gambling
            </p>
            <ul className="space-y-1.5 list-none">
              {[
                "Establish firm time and financial limits before every session.",
                "Never pursue losses — accept that losing is an inherent part of wagering.",
                "Seek help early if gambling feels compulsive: GambleAware, GamCare, and Gamblers Anonymous are available 24/7.",
              ].map((item) => (
                <li key={item} className="flex gap-2" style={{ color: TEXT_MUTED }}>
                  <span style={{ color: AMBER }}>·</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <p style={{ color: TEXT_MUTED }}>
            We cannot guarantee permanent accuracy of operator offers; bookmakers update terms at any
            time. Third-party sites linked from this page operate under their own terms — we bear no
            responsibility for external content.
          </p>
          <p className="text-xs" style={{ color: TEXT_MUTED }}>
            No legal or financial advice is provided here. Consult our full Terms page for
            comprehensive rules.
          </p>
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
            18+ &middot; Wagering &amp; T&amp;Cs Apply &middot; Play Responsibly
          </p>
        </div>
      </div>
    </div>
  )
}
