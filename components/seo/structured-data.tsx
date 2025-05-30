import Script from "next/script"

interface StructuredDataProps {
  type?: "organization" | "website" | "service"
}

export function StructuredData({ type = "organization" }: StructuredDataProps) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "AI3X by CodeGen",
    alternateName: "AI3X",
    url: "https://ai3x.tech",
    logo: "https://ai3x.tech/logo.png",
    description:
      "Enterprise-grade AI solutions for seamless integration and deployment. Transform your business with cutting-edge artificial intelligence technology.",
    foundingDate: "2024",
    parentOrganization: {
      "@type": "Organization",
      name: "CodeGen",
      url: "https://codegen.co.uk",
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+1-689-304-5252",
        contactType: "customer service",
        areaServed: "US",
        availableLanguage: "English",
      },
      {
        "@type": "ContactPoint",
        telephone: "+44-7946-629-423",
        contactType: "customer service",
        areaServed: "GB",
        availableLanguage: "English",
      },
      {
        "@type": "ContactPoint",
        telephone: "+971-52-916-3580",
        contactType: "customer service",
        areaServed: "AE",
        availableLanguage: ["English", "Arabic"],
      },
      {
        "@type": "ContactPoint",
        telephone: "+94-11-202-4400",
        contactType: "customer service",
        areaServed: "LK",
        availableLanguage: "English",
      },
    ],
    address: [
      {
        "@type": "PostalAddress",
        streetAddress: "4700 Millenia Blvd Suite 500",
        addressLocality: "Orlando",
        addressRegion: "FL",
        postalCode: "32829",
        addressCountry: "US",
      },
      {
        "@type": "PostalAddress",
        streetAddress: "87-89 Baker Street",
        addressLocality: "London",
        postalCode: "W1U 6RJ",
        addressCountry: "GB",
      },
      {
        "@type": "PostalAddress",
        streetAddress: "#5, 29th Floor Al Saqr Business Tower, Sheikh Zayed Rd",
        addressLocality: "Dubai",
        addressCountry: "AE",
      },
      {
        "@type": "PostalAddress",
        streetAddress: "Bay 1-5, Trace Expert City",
        addressLocality: "Colombo",
        postalCode: "10",
        addressCountry: "LK",
      },
    ],
    sameAs: [
      "https://linkedin.com/company/ai3x",
      "https://twitter.com/ai3x",
      "https://github.com/ai3x",
      "https://youtube.com/@ai3x",
      "https://medium.com/@ai3x",
    ],
    email: "info@ai3x.tech",
    industry: "Artificial Intelligence",
    numberOfEmployees: "51-200",
    knowsAbout: [
      "Artificial Intelligence",
      "Machine Learning",
      "Enterprise AI Solutions",
      "AI Integration",
      "Digital Transformation",
      "Computer Vision",
      "Natural Language Processing",
      "AI Consulting",
    ],
  }

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "AI3X by CodeGen",
    url: "https://ai3x.tech",
    description: "Enterprise-grade AI solutions for seamless integration and deployment",
    publisher: {
      "@type": "Organization",
      name: "AI3X by CodeGen",
    },
    potentialAction: {
      "@type": "SearchAction",
      target: "https://ai3x.tech/search?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  }

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Enterprise AI Solutions",
    description:
      "Comprehensive AI solutions including AI augmentation, digital assistants, data consolidation, computer vision, and AI model management",
    provider: {
      "@type": "Organization",
      name: "AI3X by CodeGen",
    },
    serviceType: "AI Consulting and Implementation",
    areaServed: ["US", "GB", "AE", "LK"],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "AI Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "AI Augmentation for Enterprise",
            description: "Integrate advanced AI capabilities into existing systems",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "24/7 Multilingual AI Digital Assistants",
            description: "AI-driven digital collaborators for customer service and employee support",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Data Consolidation for AI & Analytics",
            description: "Consolidate data sources into secure, scalable data lakes",
          },
        },
      ],
    },
  }

  const getSchema = () => {
    switch (type) {
      case "website":
        return websiteSchema
      case "service":
        return serviceSchema
      default:
        return organizationSchema
    }
  }

  return (
    <Script
      id={`structured-data-${type}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(getSchema()),
      }}
    />
  )
}
