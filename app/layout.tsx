import type React from "react"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

// Import Nunito for body text
import { Nunito } from "next/font/google"

// Try Manrope as an alternative to Nourd - it has a cleaner, lighter geometric style
import { Manrope } from "next/font/google"

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
  display: "swap",
})

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
})

export const metadata = {
  title: "Alytiqa - AI Web Analyst",
  description: "Save time and get better results with Alytiqa, the AI web analyst.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${nunito.variable} ${manrope.variable} font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}


import './globals.css'