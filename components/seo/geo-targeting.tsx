"use client"

import { useEffect, useState } from "react"

interface GeoData {
  country: string
  region: string
  city: string
  timezone: string
}

export function useGeoTargeting() {
  const [geoData, setGeoData] = useState<GeoData | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const getGeoData = async () => {
      try {
        // Using a free IP geolocation service
        const response = await fetch("https://ipapi.co/json/")
        const data = await response.json()

        setGeoData({
          country: data.country_code || "US",
          region: data.region || "",
          city: data.city || "",
          timezone: data.timezone || "UTC",
        })
      } catch (error) {
        console.error("Error fetching geo data:", error)
        // Fallback to default
        setGeoData({
          country: "US",
          region: "",
          city: "",
          timezone: "UTC",
        })
      } finally {
        setLoading(false)
      }
    }

    getGeoData()
  }, [])

  const getLocalizedContent = () => {
    if (!geoData) return null

    const localizations = {
      US: {
        phone: "+1 689 304 5252",
        office: "Orlando, Florida",
        currency: "USD",
        language: "en-US",
      },
      GB: {
        phone: "+44 (0) 7946 629 423",
        office: "London, UK",
        currency: "GBP",
        language: "en-GB",
      },
      AE: {
        phone: "+971 52 916 3580",
        office: "Dubai, UAE",
        currency: "AED",
        language: "en-AE",
      },
      LK: {
        phone: "+94 11 202 4400",
        office: "Colombo, Sri Lanka",
        currency: "LKR",
        language: "en-LK",
      },
    }

    return localizations[geoData.country as keyof typeof localizations] || localizations.US
  }

  return { geoData, loading, getLocalizedContent }
}

export function GeoTargetingMeta() {
  return (
    <>
      <meta name="geo.region" content="US-FL" />
      <meta name="geo.placename" content="Orlando" />
      <meta name="geo.position" content="28.5383;-81.3792" />
      <meta name="ICBM" content="28.5383, -81.3792" />

      {/* Additional geo tags for other offices */}
      <meta name="geo.region" content="GB-LND" />
      <meta name="geo.placename" content="London" />
      <meta name="geo.position" content="51.5074;-0.1278" />

      <meta name="geo.region" content="AE-DU" />
      <meta name="geo.placename" content="Dubai" />
      <meta name="geo.position" content="25.2048;55.2708" />

      <meta name="geo.region" content="LK-11" />
      <meta name="geo.placename" content="Colombo" />
      <meta name="geo.position" content="6.9271;79.8612" />
    </>
  )
}
