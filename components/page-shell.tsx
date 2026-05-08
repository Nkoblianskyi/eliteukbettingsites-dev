import type React from "react"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

const FOREST = "#1A3A2A"
const AMBER = "#B8903A"
const WHITE = "#FFFFFF"
const CREAM = "#F7F4EF"
const CREAM_DARK = "#EDE8E0"
const BORDER = "#E2D9C9"

export function PageShell({
  title,
  subtitle,
  children,
}: {
  title: string
  subtitle?: string
  children: React.ReactNode
}) {
  return (
    <div className="section-container py-10 sm:py-14">
      {/* Back link */}
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-xs font-sans uppercase tracking-wider mb-8 transition-colors hover:text-forest"
        style={{ color: AMBER }}
      >
        <ArrowLeft className="w-3.5 h-3.5" />
        Return to Rankings
      </Link>

      <div
        className="rounded-sm border overflow-hidden"
        style={{
          backgroundColor: WHITE,
          borderColor: BORDER,
          boxShadow: "0 4px 24px 0 rgba(26,58,42,0.08)",
        }}
      >
        {/* Forest/amber top rule */}
        <div
          className="h-[4px]"
          style={{ background: `linear-gradient(to right, ${FOREST}, ${AMBER})` }}
        />

        <div className="px-6 py-8 sm:px-10 sm:py-10">
          {/* Page heading */}
          <div
            className="text-center mb-8 pb-7 border-b"
            style={{ borderColor: BORDER }}
          >
            <p
              className="text-[9px] font-sans font-bold uppercase tracking-[0.35em] mb-2"
              style={{ color: AMBER }}
            >
              eliteukbettingsites.com
            </p>
            <h1
              className="font-display font-bold text-3xl lg:text-4xl text-balance"
              style={{ color: FOREST }}
            >
              {title}
            </h1>
            {subtitle && (
              <p
                className="font-sans text-sm mt-3 max-w-xl mx-auto leading-relaxed"
                style={{ color: "#6B7560" }}
              >
                {subtitle}
              </p>
            )}
          </div>

          {children}
        </div>
      </div>
    </div>
  )
}

export function PageSection({
  title,
  number,
  children,
}: {
  title: string
  number?: string | number
  children: React.ReactNode
}) {
  return (
    <section className="mb-7">
      <div className="flex items-baseline gap-3 mb-3">
        {number !== undefined && (
          <span
            className="font-display font-bold text-xl shrink-0"
            style={{ color: "rgba(184,144,58,0.4)" }}
          >
            {number}.
          </span>
        )}
        <h2
          className={`font-display font-bold text-lg sm:text-xl ${number !== undefined ? "" : ""}`}
          style={{ color: FOREST }}
        >
          {title}
        </h2>
      </div>
      <div
        className={`font-sans text-sm leading-relaxed space-y-3 ${number !== undefined ? "pl-7" : ""}`}
        style={{ color: "#6B7560" }}
      >
        {children}
      </div>
    </section>
  )
}

export function PageDivider() {
  return (
    <div className="h-px my-5" style={{ background: BORDER }} />
  )
}

export function PageCallout({
  variant = "default",
  title,
  children,
}: {
  variant?: "default" | "warning" | "amber"
  title?: string
  children: React.ReactNode
}) {
  const styles = {
    default: { bg: CREAM, border: BORDER },
    warning: { bg: "#FEF3C7", border: "#F59E0B" },
    amber: { bg: "rgba(184,144,58,0.07)", border: AMBER },
  }
  const { bg, border } = styles[variant]

  return (
    <div
      className="rounded-sm border px-5 py-4"
      style={{ backgroundColor: bg, borderColor: border }}
    >
      {title && (
        <p className="font-sans font-semibold text-sm mb-1.5" style={{ color: FOREST }}>
          {title}
        </p>
      )}
      <div className="font-sans text-sm leading-relaxed" style={{ color: "#6B7560" }}>
        {children}
      </div>
    </div>
  )
}
