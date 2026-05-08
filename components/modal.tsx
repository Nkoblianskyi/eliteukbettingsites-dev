"use client"

import { useState, useEffect } from "react"
import { X, Star, Shield, Zap, Trophy } from "lucide-react"
import Link from "next/link"
import type { BettingSite } from "../types"

interface Top3ModalProps {
  bettingSites: BettingSite[]
  casinoSites: BettingSite[]
}

const FOREST = "#1A3A2A"
const AMBER = "#B8903A"
const AMBER_LIGHT = "#D4A94C"
const WHITE = "#FFFFFF"
const CREAM = "#F7F4EF"
const BORDER = "#E2D9C9"
const TEXT_MUTED = "#6B7560"

const highlights = [
  { icon: Trophy, label: "Editor's Top Pick" },
  { icon: Shield, label: "Licensed & Safe" },
  { icon: Zap, label: "Fast Payouts" },
]

export function Modal({ bettingSites, casinoSites: _casinoSites }: Top3ModalProps) {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsOpen(true), 8000)
    return () => clearTimeout(timer)
  }, [])

  if (!isOpen) return null

  const site = bettingSites[0]
  if (!site) return null

  return (
    <div className="hidden md:flex fixed inset-0 z-50 items-center justify-center p-4 modal-scrim">
      {/* Close button */}
      <button
        type="button"
        onClick={() => setIsOpen(false)}
        className="absolute top-5 right-5 z-[60] flex h-10 w-10 items-center justify-center rounded-sm border transition-colors hover:bg-white/10"
        style={{ borderColor: "rgba(255,255,255,0.2)", color: WHITE }}
        aria-label="Close"
      >
        <X className="w-5 h-5" />
      </button>

      {/* Modal panel */}
      <div
        className="w-full max-w-sm rounded-sm overflow-hidden shadow-2xl"
        style={{ backgroundColor: WHITE, border: `1px solid ${BORDER}` }}
      >
        {/* Top gradient bar */}
        <div
          className="h-1.5"
          style={{ background: `linear-gradient(to right, ${FOREST}, ${AMBER})` }}
        />

        {/* Header band */}
        <div
          className="flex items-center justify-center gap-2 py-3 px-6"
          style={{ backgroundColor: FOREST }}
        >
          <Trophy className="w-3.5 h-3.5" style={{ color: AMBER }} />
          <p className="font-sans text-[10px] font-bold uppercase tracking-[0.3em]" style={{ color: AMBER }}>
            #1 Pick — eliteukbettingsites.com
          </p>
          <Trophy className="w-3.5 h-3.5" style={{ color: AMBER }} />
        </div>

        {/* Logo area */}
        <div
          className="flex items-center justify-center py-8 px-8 border-b"
          style={{ borderColor: BORDER, backgroundColor: CREAM }}
        >
          <img
            src={site.logo || "/placeholder.svg"}
            alt={site.name}
            className="max-h-16 max-w-[200px] object-contain"
          />
        </div>

        {/* Stars + score */}
        <div className="flex items-center justify-center gap-3 pt-5 px-6">
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4" style={{ fill: AMBER, color: AMBER }} />
            ))}
          </div>
          <span
            className="font-display font-bold text-xl"
            style={{ color: FOREST }}
          >
            {site.score?.toFixed(1)}
          </span>
          <span className="font-sans text-xs" style={{ color: TEXT_MUTED }}>
            / 10
          </span>
        </div>

        {/* Bonus headline */}
        <div className="text-center px-8 pt-3 pb-4">
          <p
            className="font-display font-bold text-2xl leading-tight"
            style={{ color: FOREST }}
          >
            {site.bonus}
          </p>
          <p className="font-sans text-xs mt-1.5" style={{ color: TEXT_MUTED }}>
            {site.welcomeOffer}
          </p>
        </div>

        {/* Feature pills */}
        <div className="flex items-center justify-center gap-2 px-6 pb-5 flex-wrap">
          {highlights.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-sm border"
              style={{ borderColor: BORDER, backgroundColor: CREAM }}
            >
              <Icon className="w-3 h-3" style={{ color: AMBER }} />
              <span className="font-sans text-[10px] font-semibold uppercase tracking-wider" style={{ color: FOREST }}>
                {label}
              </span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="px-6 pb-4">
          <Link
            href={site.link || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-full py-3.5 font-sans font-bold text-sm uppercase tracking-widest rounded-sm transition-opacity hover:opacity-85"
            style={{ backgroundColor: FOREST, color: WHITE }}
          >
            Claim Offer Now
          </Link>
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="block w-full text-center font-sans text-[10px] mt-3 underline underline-offset-2 transition-opacity hover:opacity-70"
            style={{ color: TEXT_MUTED }}
          >
            No thanks, close this
          </button>
        </div>

        {/* Terms footer */}
        <div
          className="px-6 py-3 border-t text-center"
          style={{ borderColor: BORDER, backgroundColor: CREAM }}
        >
          <p className="font-sans text-[9px] leading-relaxed" style={{ color: TEXT_MUTED }}>
            {site.terms ?? "18+ | New customers only | T&Cs apply | BeGambleAware.org"}
          </p>
        </div>
      </div>
    </div>
  )
}
