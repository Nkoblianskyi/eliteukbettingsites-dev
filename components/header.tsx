import Link from "next/link"
import { SiteWordmark } from "@/components/site-wordmark"
import Image from "next/image"

/* Crown monogram SVG — unique to EliteUKBettingSites */
function CrownMark({ size = 32 }: { size?: number }) {
  return (
    <Image src="/favicon.ico" alt="Crown" width={size} height={size} priority />

  )
}

export function Header() {
  return (
    <header className="sticky top-0 z-40 bg-white border-b border-[#E2D9C9]" style={{ boxShadow: "0 1px 12px 0 rgba(26,58,42,0.07)" }}>
      {/* Thin amber top line */}
      <div className="h-[3px] w-full" style={{ background: "linear-gradient(to right, #1A3A2A, #B8903A, #1A3A2A)" }} />

      <div className="section-container py-3 md:py-4">
        <div className="flex items-center justify-center relative">
          {/* Left decorative rule */}
          <div
            className="hidden md:block absolute left-0 flex-1 h-px"
            style={{ width: "calc(50% - 220px)", background: "linear-gradient(to right, transparent, rgba(184,144,58,0.3))" }}
          />

          <Link
            href="/"
            className="flex items-center gap-3 transition-opacity hover:opacity-80 group"
            aria-label="Elite UK Betting Sites — Home"
          >
            {/* Crown icon */}
            <div className="shrink-0">
              <CrownMark size={30} />
            </div>

            {/* Wordmark */}
            <div className="flex flex-col leading-none gap-[1px]">
              <SiteWordmark variant="header-compact" className="md:hidden" />
              <SiteWordmark variant="header-hero" className="hidden md:inline" />
              {/* Tagline — desktop only */}
              <span className="hidden md:block text-[9px] font-sans uppercase tracking-[0.28em] text-[#B8903A] opacity-80 mt-0.5">
                UK&apos;s Finest Bookmaker Rankings
              </span>
            </div>
          </Link>

          {/* Right decorative rule */}
          <div
            className="hidden md:block absolute right-0 h-px"
            style={{ width: "calc(50% - 220px)", background: "linear-gradient(to left, transparent, rgba(184,144,58,0.3))" }}
          />
        </div>
      </div>

      {/* Bottom amber hairline */}
      <div
        className="h-px w-full opacity-40"
        style={{ background: "linear-gradient(to right, transparent, #B8903A 30%, #B8903A 70%, transparent)" }}
      />
    </header>
  )
}
