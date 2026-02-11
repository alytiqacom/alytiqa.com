import React from "react"
import type { Metadata, Viewport } from 'next'
import Script from 'next/script'
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
      <body className="font-sans antialiased">
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
