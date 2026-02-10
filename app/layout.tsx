import React from "react"
import type { Metadata, Viewport } from 'next'
import { IBM_Plex_Sans } from 'next/font/google'

import './globals.css'

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-ibm-plex-sans',
})

export const metadata: Metadata = {
  title: 'Alytiqa — Growth intelligence, without human limits',
  description:
    'An intelligence platform designed to deliver analyst-level growth judgment at a speed and scale no human team can match.',
}

export const viewport: Viewport = {
  themeColor: '#05322E',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={ibmPlexSans.variable}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
