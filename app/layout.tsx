import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"
import { StructuredData } from "@/components/seo/structured-data"
import { KeycloakProvider } from "@/components/auth/keycloak-provider"
import { AuthLoading } from "@/components/auth/auth-loading"

// Optimize font loading
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  preload: true,
  variable: "--font-inter",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://ai3x.tech"),
  title: {
    default: "Enterprise Agentic GenAI Solutions and AI Consulting | AI3X by CodeGen",
    template: "%s | AI3X by CodeGen",
  },
  description:
    "AI3X by CodeGen accelerates enterprise AI adoption with our 3X Process: eXplore AI opportunities, eXperience rapid prototyping, eXecute at scale. Specializing in Agentic GenAI, RAG assistants & computer vision solutions.",
  keywords: [
    "Enterprise AI",
    "GenAI Solutions",
    "AI Consulting",
    "RAG Assistants",
    "Computer Vision",
    "AI Strategy",
    "AI Prototyping",
    "AI Implementation",
    "CodeGen",
    "AI3X",
    "Agentic AI",
    "Orion Platform",
    "Machine Learning",
    "Digital Transformation",
    "AI Integration",
    "Enterprise Automation",
    "AI Development",
    "MLOps",
    "AI Governance",
  ],
  authors: [{ name: "AI3X by CodeGen", url: "https://ai3x.tech" }],
  creator: "AI3X by CodeGen",
  publisher: "AI3X by CodeGen",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  category: "technology",
  classification: "Artificial Intelligence Services",
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
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: ["en_GB", "en_AE", "en_LK"],
    url: "https://ai3x.tech",
    title: "AI3X by CodeGen | Enterprise AI Solutions & GenAI Implementation",
    description:
      "Transform your enterprise with AI3X's 3X Process: eXplore, eXperience, eXecute AI solutions. Specialists in Agentic GenAI, RAG technology & computer vision for business transformation.",
    siteName: "AI3X by CodeGen",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "AI3X by CodeGen - Enterprise AI Solutions",
      },
      {
        url: "/og-image-square.jpg",
        width: 1200,
        height: 1200,
        alt: "AI3X by CodeGen - Enterprise AI Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@ai3x_tech",
    creator: "@ai3x_tech",
    title: "AI3X by CodeGen | Enterprise-Grade AI Solutions & Implementation",
    description:
      "Accelerate AI adoption with our proven 3X Process. From strategy to scalable implementation of GenAI, RAG systems & computer vision solutions for enterprises.",
    images: ["/twitter-image.jpg"],
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
    other: {
      "msvalidate.01": "your-bing-verification-code",
    },
  },
  alternates: {
    canonical: "https://ai3x.tech",
    languages: {
      "en-US": "https://ai3x.tech",
      "en-GB": "https://ai3x.tech",
      "en-AE": "https://ai3x.tech",
      "en-LK": "https://ai3x.tech",
    },
  },
  other: {
    contact: "info@ai3x.tech",
    coverage: "Worldwide",
    distribution: "Global",
    rating: "General",
    "revisit-after": "7 days",
    "geo.region": "US-FL",
    "geo.placename": "Orlando",
    "geo.position": "28.5383;-81.3792",
    ICBM: "28.5383, -81.3792",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className={inter.variable}>
      <head>
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://ipapi.co" />
        <link rel="preconnect" href={process.env.NEXT_PUBLIC_KEYCLOAK_URL || "https://auth.ai3x.tech"} />

        {/* DNS prefetch for external resources */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
        <link rel="dns-prefetch" href={process.env.NEXT_PUBLIC_KEYCLOAK_URL || "//auth.ai3x.tech"} />

        {/* Favicon and app icons */}
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />

        {/* Theme and app configuration */}
        <meta name="theme-color" content="#0066cc" />
        <meta name="msapplication-TileColor" content="#0066cc" />
        <meta name="application-name" content="AI3X" />
        <meta name="apple-mobile-web-app-title" content="AI3X" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />

        {/* Additional geo targeting */}
        <meta name="geo.region" content="GB-LND" />
        <meta name="geo.placename" content="London" />
        <meta name="geo.position" content="51.5074;-0.1278" />

        <meta name="geo.region" content="AE-DU" />
        <meta name="geo.placename" content="Dubai" />
        <meta name="geo.position" content="25.2048;55.2708" />

        <meta name="geo.region" content="LK-11" />
        <meta name="geo.placename" content="Colombo" />
        <meta name="geo.position" content="6.9271;79.8612" />
      </head>
      <body className={inter.className}>
        <KeycloakProvider>
          <AuthLoading>
            <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
              <Navigation />
              {children}
              <Footer />

              {/* Structured Data */}
              <StructuredData type="organization" />
              <StructuredData type="website" />
              <StructuredData type="service" />
            </ThemeProvider>
          </AuthLoading>
        </KeycloakProvider>
      </body>
    </html>
  )
}
