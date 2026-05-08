"use client"

import { Card } from "./card"
import { bettingSites } from "../data/mock-data"
import type { BettingSite } from "../types"

const FOREST = "#1A3A2A"
const AMBER = "#B8903A"
const BORDER = "#E2D9C9"

export function SitesList() {
  return (
    <div className="w-full">
      {/* Section header */}
      <div className="flex items-center gap-4 mb-5">
        <div className="flex-1 h-px" style={{ background: BORDER }} />
        <div className="text-center px-2">
          <p
            className="text-[9px] font-sans font-bold uppercase tracking-[0.35em] mb-0.5"
            style={{ color: AMBER }}
          >
            Current Rankings
          </p>
          <h2
            className="font-display font-bold text-xl sm:text-2xl leading-tight"
            style={{ color: FOREST }}
          >
            Top UK Betting Sites
          </h2>
        </div>
        <div className="flex-1 h-px" style={{ background: BORDER }} />
      </div>

      {/* Operator list */}
      <div className="space-y-2 w-full">
        {bettingSites.map((site: BettingSite, index: number) => (
          <div key={site.id} className="w-full">
            <Card site={site} rank={index + 1} />
          </div>
        ))}
      </div>

      {/* Footer note */}
      <p
        className="text-center mt-4 text-[9px] font-sans uppercase tracking-wider"
        style={{ color: AMBER }}
      >
        18+ &middot; Licensed operators only &middot; T&amp;Cs apply
      </p>
    </div>
  )
}
