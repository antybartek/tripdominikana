import type React from "react"
import type { Metadata } from "next"
import { cookies } from "next/headers"
import { GeistSans, GeistMono } from "geist/font"
import "./globals.css"
import { LanguageProvider } from "@/contexts/language-context"

const geistSans = GeistSans
const geistMono = GeistMono

// Language-aware metadata
const titles: Record<string, { title: string; description: string }> = {
  en: {
    title: "Trip Dominikana - Your Dominican Republic Experts",
    description:
      "Discover the most beautiful places in the Dominican Republic with our local guides. Unforgettable adventures await!",
  },
  pl: {
    title: "Trip Dominikana - Twoi eksperci od Dominikany",
    description:
      "Odkryj najpiękniejsze miejsca Republiki Dominikańskiej z naszymi lokalnymi przewodnikami. Niezapomniane przygody czekają!",
  },
  es: {
    title: "Trip Dominikana - Tus expertos en República Dominicana",
    description:
      "Descubre los lugares más hermosos de República Dominicana con nuestros guías locales. ¡Te esperan aventuras inolvidables!",
  },
}

export async function generateMetadata(): Promise<Metadata> {
  const cookieStore = await cookies()
  const lang = (cookieStore.get("site_lang")?.value || "en").toLowerCase()
  const meta = titles[lang] || titles.en
  return {
    title: meta.title,
    description: meta.description,
    icons: {
      icon: [
        { url: "/favicon.ico", sizes: "any" },
        { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
        { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      ],
      apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
      other: [
        { rel: "android-chrome-192x192", url: "/android-chrome-192x192.png" },
        { rel: "android-chrome-512x512", url: "/android-chrome-512x512.png" },
      ],
    },
    manifest: "/site.webmanifest",
    generator: "v0.app",
  }
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const cookieStore = await cookies()
  const lang = (cookieStore.get("site_lang")?.value || "en").toLowerCase()
  return (
    <html lang={lang === 'pl' || lang === 'es' || lang === 'en' ? lang : 'en'}>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  )
}
