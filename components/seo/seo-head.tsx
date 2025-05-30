import Head from "next/head"
import { StructuredData } from "./structured-data"
import { GeoTargetingMeta } from "./geo-targeting"

interface SEOHeadProps {
  title?: string
  description?: string
  keywords?: string
  canonical?: string
  ogImage?: string
  structuredDataType?: "organization" | "website" | "service"
}

export function SEOHead({
  title = "Enterprise Agentic GenAI Solutions and AI Consulting | AI3X by CodeGen",
  description = "AI3X by CodeGen accelerates enterprise AI adoption with our 3X Process: eXplore AI opportunities, eXperience rapid prototyping, eXecute at scale. Specializing in Agentic GenAI, RAG assistants & computer vision solutions.",
  keywords = "Enterprise AI, GenAI Solutions, AI Consulting, RAG Assistants, Computer Vision, AI Strategy, AI Prototyping, AI Implementation, CodeGen, AI3X, Agentic AI, Orion Platform",
  canonical = "https://ai3x.tech",
  ogImage = "https://ai3x.tech/og-image.jpg",
  structuredDataType = "organization",
}: SEOHeadProps) {
  return (
    <>
      <Head>
        {/* Basic Meta Tags */}
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content="AI3X by CodeGen" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow" />

        {/* Canonical URL */}
        <link rel="canonical" href={canonical} />

        {/* Language and Locale */}
        <meta httpEquiv="content-language" content="en-US" />
        <meta name="language" content="English" />

        {/* Open Graph Meta Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={canonical} />
        <meta property="og:site_name" content="AI3X by CodeGen" />
        <meta property="og:image" content={ogImage} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="AI3X by CodeGen - Enterprise AI Solutions" />
        <meta property="og:locale" content="en_US" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@ai3x_tech" />
        <meta name="twitter:creator" content="@ai3x_tech" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={ogImage} />
        <meta name="twitter:image:alt" content="AI3X by CodeGen - Enterprise AI Solutions" />

        {/* Additional SEO Meta Tags */}
        <meta name="theme-color" content="#0066cc" />
        <meta name="msapplication-TileColor" content="#0066cc" />
        <meta name="application-name" content="AI3X" />
        <meta name="apple-mobile-web-app-title" content="AI3X" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />

        {/* Favicon and Icons */}
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />

        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Hreflang for international SEO */}
        <link rel="alternate" hrefLang="en-us" href="https://ai3x.tech" />
        <link rel="alternate" hrefLang="en-gb" href="https://ai3x.tech" />
        <link rel="alternate" hrefLang="en-ae" href="https://ai3x.tech" />
        <link rel="alternate" hrefLang="en-lk" href="https://ai3x.tech" />
        <link rel="alternate" hrefLang="x-default" href="https://ai3x.tech" />

        {/* Business Information */}
        <meta name="contact" content="info@ai3x.tech" />
        <meta name="coverage" content="Worldwide" />
        <meta name="distribution" content="Global" />
        <meta name="rating" content="General" />
        <meta name="revisit-after" content="7 days" />

        {/* Geo Targeting */}
        <GeoTargetingMeta />
      </Head>

      {/* Structured Data */}
      <StructuredData type={structuredDataType} />
    </>
  )
}
