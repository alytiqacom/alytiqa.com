import React from "react"
import type { Metadata, Viewport } from 'next'
import Script from 'next/script'
import { Source_Sans_3 } from 'next/font/google'

import './globals.css'

const sourceSans3 = Source_Sans_3({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-source-sans-3',
  display: 'swap',
  adjustFontFallback: true,
})

export const metadata: Metadata = {
  title: 'Alytiqa — Recurring analysis, automated',
  description:
    'Alytiqa automates recurring analysis for growth and revenue teams. It all starts with website analytics for B2B SaaS.',
}

export const viewport: Viewport = {
  themeColor: '#02302B',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={sourceSans3.variable}>
      <body className={`${sourceSans3.className} antialiased`}>
        <Script
          id="matomo-tag-manager"
          strategy="beforeInteractive"
        >
          {`var _mtm = window._mtm = window._mtm || [];
_mtm.push({'mtm.startTime': (new Date().getTime()), 'event': 'mtm.Start'});
(function() {
  var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
  g.async=true; g.src='https://m.extellio.com/js/container_7SGuIrt2.js'; s.parentNode.insertBefore(g,s);
})();`}
        </Script>
        {children}
      </body>
    </html>
  )
}
