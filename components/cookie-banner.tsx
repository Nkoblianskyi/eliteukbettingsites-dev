"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Cookie, X } from "lucide-react"

const FOREST = "#1A3A2A"
const AMBER = "#B8903A"
const WHITE = "#FFFFFF"
const CREAM = "#F7F4EF"
const BORDER = "#E2D9C9"
const TEXT_MUTED = "#6B7560"

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent")
    if (!consent) setIsVisible(true)
  }, [])

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "accepted")
    setIsVisible(false)
  }

  const handleDecline = () => {
    localStorage.setItem("cookieConsent", "declined")
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div
      className="fixed bottom-4 left-4 right-4 z-50 rounded-xl border max-w-2xl mx-auto"
      style={{
        backgroundColor: WHITE,
        borderColor: BORDER,
        boxShadow: "0 8px 40px 0 rgba(26,58,42,0.16), 0 2px 8px 0 rgba(26,58,42,0.08)",
      }}
    >
      {/* Forest top accent */}
      <div
        className="h-[3px] rounded-t-xl"
        style={{ background: `linear-gradient(to right, ${FOREST}, ${AMBER})` }}
      />

      <div className="px-4 py-4 sm:px-5 sm:py-4">
        <div className="flex items-start gap-3">
          {/* Icon */}
          <div
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-sm border mt-0.5"
            style={{ borderColor: BORDER, backgroundColor: "rgba(26,58,42,0.06)" }}
          >
            <Cookie className="w-4 h-4" style={{ color: FOREST }} />
          </div>

          {/* Content */}
          <div className="flex-1 min-w-0">
            <p
              className="text-[10px] font-sans font-bold uppercase tracking-[0.22em] mb-1"
              style={{ color: AMBER }}
            >
              Cookie Notice
            </p>
            <p
              className="font-sans text-[11px] sm:text-xs leading-relaxed"
              style={{ color: TEXT_MUTED }}
            >
              EliteUKBettingSites.com uses essential cookies to operate this site and, with your
              consent, analytics cookies to improve your experience. Declining restricts non-essential
              scripts only.{" "}
              <Link
                href="/cookie-policy"
                className="font-medium underline underline-offset-2 hover:text-forest transition-colors"
                style={{ color: FOREST }}
              >
                Cookie Policy
              </Link>
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap items-center gap-2 mt-3">
              <button
                type="button"
                onClick={handleAccept}
                className="px-4 py-2 text-[11px] font-sans font-bold uppercase tracking-wider rounded-sm transition-opacity hover:opacity-85"
                style={{ backgroundColor: FOREST, color: WHITE }}
              >
                Accept All
              </button>
              <button
                type="button"
                onClick={handleDecline}
                className="px-4 py-2 text-[11px] font-sans font-semibold uppercase tracking-wider rounded-sm border transition-colors hover:bg-[#F7F4EF]"
                style={{ borderColor: BORDER, color: TEXT_MUTED }}
              >
                Essential Only
              </button>
            </div>
          </div>

          {/* Dismiss */}
          <button
            type="button"
            onClick={handleDecline}
            className="flex h-7 w-7 shrink-0 items-center justify-center rounded-sm border transition-colors hover:bg-[#F7F4EF]"
            style={{ borderColor: BORDER, color: TEXT_MUTED }}
            aria-label="Dismiss"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  )
}
