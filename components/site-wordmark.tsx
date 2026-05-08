import { cn } from "@/lib/utils"

type WordmarkVariant = "header-compact" | "header-hero" | "footer"

export function SiteWordmark({ variant, className }: { variant: WordmarkVariant; className?: string }) {
  const isFooter = variant === "footer"

  return (
    <span
      className={cn(
        "font-display tracking-tight select-none",
        variant === "header-compact" && "text-xl sm:text-2xl",
        variant === "header-hero" && "text-2xl sm:text-3xl",
        variant === "footer" && "text-3xl sm:text-4xl",
        className,
      )}
      aria-label="Elite UK Betting Sites"
    >
      <span
        className="font-bold"
        style={{ color: isFooter ? "#D4A94C" : "#1A3A2A", letterSpacing: "-0.01em" }}
      >
        Elite
      </span>
      <span
        className="font-semibold"
        style={{ color: isFooter ? "#FFFFFF" : "#2C5A40", letterSpacing: "-0.01em" }}
      >
        {" "}UK
      </span>
      <span
        className="font-normal italic"
        style={{
          color: isFooter ? "rgba(255,255,255,0.7)" : "#B8903A",
          marginLeft: "0.25em",
          fontSize: "0.88em",
          letterSpacing: "0.01em",
        }}
      >
        Betting Sites
      </span>
    </span>
  )
}
