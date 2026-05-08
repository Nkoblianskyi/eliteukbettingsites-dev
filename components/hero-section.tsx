"use client"

import { ShieldCheck, Clock, Award } from "lucide-react"

interface HeroSectionProps {
  onAdvertiserModalOpen: () => void
  onTermsModalOpen: () => void
}

function getRatingsRevisedDate() {
  const d = new Date()
  return {
    iso: d.toISOString().slice(0, 10),
    label: d.toLocaleDateString("en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric",
    }),
  }
}

export function HeroSection({ onAdvertiserModalOpen, onTermsModalOpen }: HeroSectionProps) {
  const { iso, label } = getRatingsRevisedDate()

  return (
    <div
      className="w-full mb-6 relative overflow-hidden"
      style={{ borderBottom: "2px solid #B8903A" }}
    >
      {/* Background image */}
      <img
        src="/hero-sports-bg.jpg"
        alt=""
        aria-hidden
        className="absolute inset-0 w-full h-full object-cover object-center"
      />

      {/* Elegant light overlay — cream-to-transparent */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to right, rgba(247,244,239,0.97) 0%, rgba(247,244,239,0.88) 45%, rgba(247,244,239,0.55) 70%, rgba(247,244,239,0.15) 100%)",
        }}
        aria-hidden
      />

      {/* Amber top rule */}
      <div
        className="absolute top-0 left-0 right-0 h-[3px]"
        style={{ background: "linear-gradient(to right, #1A3A2A, #B8903A, #1A3A2A)" }}
        aria-hidden
      />

      {/* Content */}
      <div className="relative px-5 py-8 md:px-10 md:py-10 lg:px-14">
        <div className="max-w-2xl">
          {/* Eyebrow */}
          <p className="font-sans text-[9px] font-bold uppercase tracking-[0.38em] mb-3 text-[#B8903A]">
            eliteukbettingsites.com &nbsp;&middot;&nbsp; United Kingdom
          </p>

          {/* Headline */}
          <h1
            className="font-display font-bold leading-[1.1] tracking-tight mb-3 text-balance text-forest"
            style={{ fontSize: "clamp(1.55rem, 3.5vw, 2.2rem)" }}
          >
            Britain&apos;s Elite Betting Sites —{" "}
            <span className="text-[#B8903A]">Ranked &amp; Rated</span>
          </h1>

          {/* Subtitle */}
          <p className="font-sans text-xs leading-relaxed mb-5 max-w-lg text-[#3D6B50]">
            Six UK-licensed bookmakers independently assessed on bonus value, platform quality, odds
            competitiveness, and verified withdrawal speed. Always review terms with each operator.
          </p>

          {/* Trust chips + disclosure row */}
          <div className="flex flex-wrap items-center gap-2">
            {[
              {
                icon: <img src="/flag-uk.svg" alt="" width={18} height={11} aria-hidden />,
                label: "UK Licensed",
              },
              {
                icon: <ShieldCheck className="w-3 h-3 text-[#B8903A]" aria-hidden />,
                label: "GC Regulated",
              },
              {
                icon: <Award className="w-3 h-3 text-[#B8903A]" aria-hidden />,
                label: "Expert Rated",
              },
              {
                icon: <Clock className="w-3 h-3 text-[#B8903A]" aria-hidden />,
                label: "Fast Payouts",
              },
            ].map((chip) => (
              <span
                key={chip.label}
                className="inline-flex items-center gap-1.5 border rounded px-2.5 py-1 bg-white/70"
                style={{ borderColor: "rgba(184,144,58,0.4)" }}
              >
                {chip.icon}
                <span className="font-sans text-[9px] font-semibold uppercase tracking-[0.16em] text-[#1A3A2A]">
                  {chip.label}
                </span>
              </span>
            ))}

            <span className="hidden md:block w-px h-4 mx-1 bg-[#B8903A]/30" />

          
          </div>

          {/* Revised date */}
          <p className="font-sans text-[9px] mt-3 text-[#3D6B50]/60">
            Ratings last revised:{" "}
            <time dateTime={iso} className="text-[#3D6B50]/80">
              {label}
            </time>
          </p>
        </div>
      </div>
    </div>
  )
}
