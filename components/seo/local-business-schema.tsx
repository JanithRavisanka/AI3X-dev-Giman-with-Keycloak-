import Script from "next/script"

export function LocalBusinessSchema() {
  const localBusinessData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "AI3X by CodeGen",
    image: "https://ai3x.tech/logo.png",
    description: "Enterprise-grade AI solutions and consulting services",
    url: "https://ai3x.tech",
    telephone: "+1-689-304-5252",
    email: "info@ai3x.tech",
    priceRange: "$$$$",
    serviceArea: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: 28.5383,
        longitude: -81.3792,
      },
      geoRadius: "50000",
    },
    areaServed: [
      {
        "@type": "Country",
        name: "United States",
      },
      {
        "@type": "Country",
        name: "United Kingdom",
      },
      {
        "@type": "Country",
        name: "United Arab Emirates",
      },
      {
        "@type": "Country",
        name: "Sri Lanka",
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
    ],
    geo: {
      "@type": "GeoCoordinates",
      latitude: 28.5383,
      longitude: -81.3792,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "18:00",
      },
    ],
    sameAs: ["https://linkedin.com/company/ai3x", "https://twitter.com/ai3x", "https://github.com/ai3x"],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "AI Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Enterprise AI Consulting",
            description: "Strategic AI implementation and consulting services",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "AI Platform Development",
            description: "Custom AI platform development and integration",
          },
        },
      ],
    },
  }

  return (
    <Script
      id="local-business-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(localBusinessData),
      }}
    />
  )
}
