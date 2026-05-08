"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Star } from "lucide-react"
import type { BettingSite } from "../types"
import Link from "next/link"

interface SiteCardProps {
  site: BettingSite
  rank: number
}

const FOREST = "#1A3A2A"
const FOREST_LIGHT = "#2C5A40"
const AMBER = "#B8903A"
const AMBER_LIGHT = "#D4A94C"
const WHITE = "#FFFFFF"
const CREAM = "#F7F4EF"
const TEXT_MAIN = "#1A2420"
const TEXT_MUTED = "#6B7560"
const BORDER = "#E2D9C9"

const BADGE_LABELS: Record<number, string> = {
  1: "EDITORS' CHOICE",
  2: "EXCLUSIVE OFFER",
  3: "HIGHLY RATED",
}

export function Card({ site, rank }: SiteCardProps) {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768)
    check()
    window.addEventListener("resize", check)
    return () => window.removeEventListener("resize", check)
  }, [])

  const termsText = site.terms ?? ""
  const welcomeOffer = site.welcomeOffer ?? site.bonus

  const formatVotes = (v: number) => v.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
  const starRating = site.score / 2
  const getStarFill = (i: number) => Math.round(Math.max(0, Math.min(1, starRating - i)) * 5) / 5

  const hasBadge = rank in BADGE_LABELS

  const TermsBlock = ({ mobile = false }: { mobile?: boolean }) => (
    <div
      className="border-t px-3 py-2"
      style={{ borderColor: BORDER, backgroundColor: CREAM }}
    >
      <div className="text-center max-w-4xl mx-auto">
        <p
          className="text-[7px] font-sans font-bold uppercase tracking-wider mb-0.5"
          style={{ color: TEXT_MUTED }}
        >
          Terms &amp; Conditions
        </p>
        <div
          className={`font-sans leading-tight line-clamp-1 ${mobile ? "text-[9px]" : "text-[10px]"}`}
          style={{ color: TEXT_MUTED }}
        >
          {termsText}
        </div>
      </div>
    </div>
  )

  return (
    <div className="block">
      {/* ——— Desktop ——— */}
      <div
        className="hidden lg:block border overflow-hidden transition-all duration-200 hover:shadow-md"
        style={{
          backgroundColor: WHITE,
          borderColor: BORDER,
          boxShadow: "0 2px 10px 0 rgba(26,58,42,0.06)",
        }}
      >
        <div className="flex items-stretch">
          {/* Rank column */}
          <div
            className="w-[5.5rem] shrink-0 flex flex-col items-center justify-center py-4 gap-1.5 border-r"
            style={{ backgroundColor: FOREST, borderColor: BORDER }}
          >
            <span className="text-[8px] font-sans font-bold uppercase tracking-[0.25em] text-white/60">
              Rank
            </span>
            <span className="font-display font-bold text-4xl leading-none text-white">
              #{rank}
            </span>
            {hasBadge && (
              <span
                className="text-[7px] font-sans font-bold uppercase tracking-tight text-center leading-tight px-2 py-0.5 border mt-1 rounded-sm"
                style={{ borderColor: "rgba(212,169,76,0.6)", color: AMBER_LIGHT }}
              >
                {BADGE_LABELS[rank]}
              </span>
            )}
          </div>

          <Link
            href={site.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-stretch group/card"
          >
            {/* Logo */}
            <div
              className="flex-[0_0_20%] flex items-center justify-center px-4 py-3 border-r bg-white"
              style={{ borderColor: BORDER }}
            >
              <img
                src={site.logo || "/placeholder.svg"}
                alt={site.name}
                className="max-h-[5rem] w-full object-contain"
              />
            </div>

            {/* Bonus */}
            <div
              className="flex-1 flex flex-col justify-center px-5 py-3 border-r text-center"
              style={{ borderColor: BORDER }}
            >
              <p
                className="text-[9px] font-sans font-bold uppercase tracking-[0.2em] mb-1.5"
                style={{ color: AMBER }}
              >
                Welcome Offer
              </p>
              <p
                className="font-display font-bold text-2xl leading-tight"
                style={{ color: FOREST }}
              >
                {site.bonus}
              </p>
              <p className="font-sans text-xs mt-1" style={{ color: TEXT_MUTED }}>
                {welcomeOffer}
              </p>
            </div>

            {/* Score */}
            <div
              className="flex-[0_0_16%] flex flex-col items-center justify-center gap-1.5 px-4 border-r"
              style={{ borderColor: BORDER }}
            >
              <div
                className="w-16 h-16 border-2 flex flex-col items-center justify-center rounded-sm"
                style={{ borderColor: AMBER, backgroundColor: "rgba(184,144,58,0.07)" }}
              >
                <span
                  className="font-display font-bold text-2xl leading-none"
                  style={{ color: FOREST }}
                >
                  {site.score.toFixed(1)}
                </span>
                <span
                  className="text-[7px] font-sans uppercase tracking-wider mt-0.5"
                  style={{ color: AMBER }}
                >
                  Score
                </span>
              </div>
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => {
                  const fill = getStarFill(i)
                  return (
                    <span key={i} className="relative inline-block w-3 h-3 shrink-0">
                      <Star
                        className="absolute inset-0 w-3 h-3"
                        style={{ fill: "none", stroke: AMBER, strokeWidth: 1.5 }}
                      />
                      <Star
                        className="absolute inset-0 w-3 h-3"
                        style={{
                          fill: AMBER,
                          stroke: AMBER,
                          strokeWidth: 0,
                          clipPath: `inset(0 ${(1 - fill) * 100}% 0 0)`,
                        }}
                      />
                    </span>
                  )
                })}
              </div>
              <span className="text-[8px] font-sans" style={{ color: TEXT_MUTED }}>
                {formatVotes(site.reviews)} votes
              </span>
            </div>

            {/* CTA */}
            <div className="flex-[0_0_13%] flex items-center justify-center px-4">
              <div className="flex flex-col items-center gap-2 w-full">
                <span
                  className="w-full text-center font-sans font-bold text-xs py-3.5 transition-all rounded-sm"
                  style={{ backgroundColor: FOREST, color: WHITE }}
                >
                  CLAIM OFFER
                </span>
                <span
                  className="text-[9px] font-sans group-hover/card:underline"
                  style={{ color: AMBER }}
                >
                  {site.name} →
                </span>
              </div>
            </div>
          </Link>
        </div>
        <TermsBlock />
      </div>

      {/* ——— Tablet ——— */}
      <div
        className="hidden md:block lg:hidden border overflow-hidden transition-all duration-200 hover:shadow-md"
        style={{
          backgroundColor: WHITE,
          borderColor: BORDER,
          boxShadow: "0 2px 8px 0 rgba(26,58,42,0.06)",
        }}
      >
        <div className="flex items-stretch min-h-[140px]">
          <div
            className="w-14 shrink-0 flex flex-col items-center justify-center border-r"
            style={{ backgroundColor: FOREST, borderColor: BORDER }}
          >
            <span className="font-display font-bold text-2xl text-white">
              #{rank}
            </span>
          </div>
          <Link
            href={site.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-stretch min-w-0"
          >
            <div
              className="flex-[0_0_30%] flex items-center justify-center p-3 border-r bg-white"
              style={{ borderColor: BORDER }}
            >
              <img
                src={site.logo || "/placeholder.svg"}
                alt={site.name}
                className="max-h-[4rem] w-full object-contain"
              />
            </div>
            <div className="flex-1 flex flex-col justify-center px-3 py-2 gap-2">
              {hasBadge && (
                <span
                  className="self-start text-[8px] font-sans font-bold uppercase border px-2 py-0.5 rounded-sm"
                  style={{ borderColor: AMBER, color: AMBER }}
                >
                  {BADGE_LABELS[rank]}
                </span>
              )}
              <div
                className="border px-2 py-1.5 text-center rounded-sm"
                style={{ borderColor: BORDER, backgroundColor: CREAM }}
              >
                <p
                  className="text-[8px] font-sans uppercase tracking-wider mb-0.5"
                  style={{ color: AMBER }}
                >
                  Offer
                </p>
                <p
                  className="font-display font-bold text-base leading-tight"
                  style={{ color: FOREST }}
                >
                  {site.bonus}
                </p>
                <p className="font-sans text-xs" style={{ color: TEXT_MUTED }}>
                  {welcomeOffer}
                </p>
              </div>
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <div
                    className="w-10 h-10 border-2 flex flex-col items-center justify-center shrink-0 rounded-sm"
                    style={{ borderColor: AMBER, backgroundColor: "rgba(184,144,58,0.07)" }}
                  >
                    <span
                      className="font-display font-bold text-sm leading-none"
                      style={{ color: FOREST }}
                    >
                      {site.score.toFixed(1)}
                    </span>
                  </div>
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => {
                      const fill = getStarFill(i)
                      return (
                        <span key={i} className="relative inline-block w-2.5 h-2.5 shrink-0">
                          <Star
                            className="absolute inset-0 w-2.5 h-2.5"
                            style={{ fill: "none", stroke: AMBER, strokeWidth: 1.5 }}
                          />
                          <Star
                            className="absolute inset-0 w-2.5 h-2.5"
                            style={{
                              fill: AMBER,
                              stroke: AMBER,
                              strokeWidth: 0,
                              clipPath: `inset(0 ${(1 - fill) * 100}% 0 0)`,
                            }}
                          />
                        </span>
                      )
                    })}
                  </div>
                </div>
                <span
                  className="px-5 py-2.5 text-[10px] font-sans font-bold rounded-sm"
                  style={{ backgroundColor: FOREST, color: WHITE }}
                >
                  CLAIM
                </span>
              </div>
            </div>
          </Link>
        </div>
        <TermsBlock />
      </div>

      {/* ——— Mobile ——— */}
      <div
        className={`md:hidden border overflow-hidden transition-all duration-200 ${hasBadge ? "mt-5" : "mt-2"}`}
        style={{
          backgroundColor: WHITE,
          borderColor: BORDER,
          boxShadow: "0 2px 8px 0 rgba(26,58,42,0.06)",
        }}
      >
        {hasBadge && (
          <div
            className="text-center py-1.5 text-[8px] font-sans font-bold uppercase tracking-[0.2em] border-b"
            style={{ backgroundColor: FOREST, borderColor: BORDER, color: AMBER_LIGHT }}
          >
            {BADGE_LABELS[rank]}
          </div>
        )}

        <Link href={site.link} target="_blank" rel="noopener noreferrer" className="block">
          <div className="grid grid-cols-[1fr_1fr]">
            {/* Left: logo + score/stars */}
            <div className="flex flex-col border-r" style={{ borderColor: BORDER }}>
              {/* Logo — white bg */}
              <div className="flex items-center justify-center px-2 py-3 bg-white min-h-[80px]">
                <img
                  src={site.logo || "/placeholder.svg"}
                  alt={site.name}
                  className="h-14 w-auto max-w-full object-contain"
                />
              </div>
              {/* Stars + score + rank pill */}
              <div
                className="flex flex-col items-center justify-center gap-1 py-2 flex-1"
                style={{ backgroundColor: CREAM }}
              >
                <div
                  className="flex items-center gap-1 px-2 py-0.5 rounded-full border"
                  style={{ borderColor: BORDER }}
                >
                  <span
                    className="font-display font-bold text-sm leading-none"
                    style={{ color: FOREST }}
                  >
                    {site.score.toFixed(1)}
                  </span>
                  <span className="text-[9px] font-sans" style={{ color: TEXT_MUTED }}>
                    /10
                  </span>
                </div>
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => {
                    const fill = getStarFill(i)
                    return (
                      <span key={i} className="relative inline-block w-3 h-3 shrink-0">
                        <Star
                          className="absolute inset-0 w-3 h-3"
                          style={{ fill: "none", stroke: AMBER, strokeWidth: 1.5 }}
                        />
                        <Star
                          className="absolute inset-0 w-3 h-3"
                          style={{
                            fill: AMBER,
                            stroke: AMBER,
                            strokeWidth: 0,
                            clipPath: `inset(0 ${(1 - fill) * 100}% 0 0)`,
                          }}
                        />
                      </span>
                    )
                  })}
                </div>
                <span className="text-[9px] font-sans" style={{ color: TEXT_MUTED }}>
                  ({formatVotes(site.reviews)})
                </span>
              </div>
            </div>

            {/* Right: bonus + CTA */}
            <div
              className="flex flex-col items-center justify-between py-3 px-3"
              style={{ backgroundColor: WHITE }}
            >
              {/* Rank badge */}
              <div
                className="self-stretch text-center text-[8px] font-sans font-semibold uppercase tracking-wider mb-2 py-0.5 rounded-sm"
                style={{ backgroundColor: "rgba(26,58,42,0.08)", color: FOREST }}
              >
                #{rank}
              </div>
              {/* Bonus */}
              <div className="text-center flex-1 flex flex-col justify-center">
                <p
                  className="text-[9px] font-sans uppercase tracking-wider mb-0.5"
                  style={{ color: AMBER }}
                >
                  Welcome Offer
                </p>
                <p
                  className="font-display font-bold text-base leading-tight"
                  style={{ color: FOREST }}
                >
                  {site.bonus}
                </p>
                <p className="font-sans text-[11px] mt-0.5" style={{ color: TEXT_MUTED }}>
                  {welcomeOffer}
                </p>
              </div>
              {/* CTA */}
              <div
                className="text-center py-2.5 mt-3 w-full font-sans font-bold text-sm rounded-sm"
                style={{ backgroundColor: FOREST, color: WHITE }}
              >
                CLAIM OFFER
              </div>
            </div>
          </div>
        </Link>
        <TermsBlock mobile />
      </div>
    </div>
  )
}
