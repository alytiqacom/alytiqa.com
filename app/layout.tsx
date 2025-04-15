import type React from "react";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { SEO } from "@/components/SEO";

// Import Nunito for body text
import { Nunito } from "next/font/google";

// Try Manrope as an alternative to Nourd - it has a cleaner, lighter geometric style
import { Manrope } from "next/font/google";

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata = {
  title: "Alytiqa - AI Web Analyst",
  description:
    "Save time and get better results with Alytiqa, the AI web analyst. Get automated insights, competitor analysis, and actionable recommendations for your website.",
  keywords:
    "AI web analyst, website analytics, competitor analysis, automated insights, web performance, conversion optimization, digital marketing, web analytics",
  authors: [{ name: "Alytiqa" }],
  creator: "Alytiqa",
  publisher: "Alytiqa",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/images/brain.png",
    shortcut: "/images/brain.png",
    apple: "/images/brain.png",
  },
  openGraph: {
    title: "Alytiqa - AI Web Analyst",
    description:
      "Save time and get better results with Alytiqa, the AI web analyst. Get automated insights, competitor analysis, and actionable recommendations for your website.",
    url: "https://alytiqa.com",
    siteName: "Alytiqa",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alytiqa - AI Web Analyst",
    description:
      "Save time and get better results with Alytiqa, the AI web analyst. Get automated insights, competitor analysis, and actionable recommendations for your website.",
    creator: "@alytiqa",
  },
  alternates: {
    canonical: "https://alytiqa.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <SEO />
      </head>
      <body className={`${nunito.variable} ${manrope.variable} font-sans`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

import "./globals.css";
