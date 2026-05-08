import Link from "next/link"
import { SiteWordmark } from "@/components/site-wordmark"
import Image from "next/image"

const nav = [
  { href: "/about", label: "About" },
  { href: "/responsible-gaming", label: "Responsible Gambling" },
  { href: "/terms", label: "Terms" },
  { href: "/cookie-policy", label: "Cookies" },
  { href: "/privacy-policy", label: "Privacy" },
]

function FooterCrown() {
  return (
    <Image src="/favicon.ico" alt="Crown" width={32} height={32} priority  />
  )
}

export function Footer() {
  return (
    <footer className="mt-16 bg-[#112B1E] border-t-0">
      {/* Amber top rule */}
      <div className="h-[3px]" style={{ background: "linear-gradient(to right, #1A3A2A, #B8903A 40%, #D4A94C 50%, #B8903A 60%, #1A3A2A)" }} />

      <div className="section-container py-12">

        {/* Brand block */}
        <div className="flex flex-col items-center gap-3 mb-10">
          <FooterCrown />
          <SiteWordmark variant="footer" />
          <p className="text-[10px] font-sans uppercase tracking-[0.3em] text-[#D4A94C]/50 mt-1">
            eliteukbettingsites.com
          </p>
        </div>

        {/* Amber divider */}
        <div className="h-px mb-8" style={{ background: "linear-gradient(to right, transparent, rgba(212,169,76,0.3), transparent)" }} />

        {/* Navigation */}
        <nav className="mb-8 flex flex-wrap justify-center gap-x-6 gap-y-2" aria-label="Footer navigation">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-xs font-sans uppercase tracking-widest text-white/45 hover:text-[#D4A94C] transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Amber divider */}
        <div className="h-px mb-8" style={{ background: "linear-gradient(to right, transparent, rgba(212,169,76,0.15), transparent)" }} />

        {/* Responsible Gambling */}
        <div className="mb-10 text-center">
          <p className="text-[9px] font-sans font-semibold uppercase tracking-[0.3em] mb-4 text-[#D4A94C]/60">
            Responsible Gambling
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-5">
            {[
              { href: "https://www.begambleaware.org/", src: "/gamble.webp", alt: "BeGambleAware" },
              { href: "https://www.gamcare.org.uk/", src: "/gamecare.svg", alt: "GamCare" },
              { href: "https://www.gamblingtherapy.org/", src: "/gordon.png", alt: "Gambling Therapy" },
              { href: "https://www.gamblingcommission.gov.uk/", src: "/Gambling_Commission_logo.png", alt: "UK Gambling Commission" },
              { href: "https://www.gamstop.co.uk/", src: "/gamstop.svg", alt: "GamStop" },
            ].map(({ href, src, alt }) => (
              <Link key={alt} href={href} target="_blank" rel="noopener noreferrer" className="inline-block hover:opacity-90 transition-opacity">
                <img src={src} alt={alt} className="h-8 rounded px-2 py-1 object-contain" />
              </Link>
            ))}
          </div>
        </div>

        {/* Legal disclaimer */}
        <div className="mb-6 px-2 text-center">
          <p className="text-[10px] font-sans leading-relaxed text-white/30 max-w-2xl mx-auto">
            EliteUKBettingSites.com is an independent comparison service. All bookmakers listed are licensed by the UK Gambling Commission. Gambling involves risk — please play responsibly. This site does not accept wagers.
          </p>
        </div>

        {/* Copyright */}
        <div className="border-t pt-5 text-center" style={{ borderColor: "rgba(212,169,76,0.12)" }}>
          <p className="text-[10px] font-sans uppercase tracking-wider text-[#D4A94C]/30">
            &copy; {new Date().getFullYear()} eliteukbettingsites.com &nbsp;&middot;&nbsp; 18+ &nbsp;&middot;&nbsp; United Kingdom
          </p>
        </div>
      </div>
    </footer>
  )
}
