import type React from "react"
import type { Metadata } from "next"
import { Cormorant_Garamond, DM_Sans } from "next/font/google"
import "./globals.css"
import { Footer } from "../components/footer"
import { Header } from "../components/header"

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
})

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-dm-sans",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://eliteukbettingsites.com"),
  title: "Elite UK Betting Sites — Premier Bookmaker Rankings 2025",
  description:
    "EliteUKBettingSites.com curates the finest UK-licensed bookmakers with exclusive welcome offers, expert odds analysis, and independent ratings trusted by serious punters.",
  openGraph: {
    siteName: "EliteUKBettingSites",
    url: "https://eliteukbettingsites.com",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${dmSans.variable} bg-cream`}>
      <body className="font-sans bg-cream text-forest antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
