"use client"

import { useState, useEffect, useRef } from "react"
import NextImage, { type ImageProps as NextImageProps } from "next/image"
import { cn } from "@/lib/utils"

interface OptimizedImageProps extends Omit<NextImageProps, "onLoad" | "onError"> {
  fallback?: string
  lowQualitySrc?: string
  loadingClassName?: string
  onLoad?: () => void
  onError?: () => void
}

export function OptimizedImage({
  src,
  alt,
  width,
  height,
  className,
  fallback = "/placeholder.svg",
  lowQualitySrc,
  loadingClassName,
  onLoad,
  onError,
  ...props
}: OptimizedImageProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(false)
  const imageRef = useRef<HTMLImageElement>(null)
  const [currentSrc, setCurrentSrc] = useState(lowQualitySrc || src)

  useEffect(() => {
    // Reset state when src changes
    setIsLoading(true)
    setError(false)
    setCurrentSrc(lowQualitySrc || src)
  }, [src, lowQualitySrc])

  // Use Intersection Observer for lazy loading
  useEffect(() => {
    if (!imageRef.current) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && lowQualitySrc && !error) {
            // When the image is in view, load the high quality version
            setCurrentSrc(src)
          }
        })
      },
      { rootMargin: "200px" },
    )

    observer.observe(imageRef.current)

    return () => {
      if (imageRef.current) {
        observer.unobserve(imageRef.current)
      }
    }
  }, [src, lowQualitySrc, error])

  const handleLoad = () => {
    setIsLoading(false)
    onLoad?.()
  }

  const handleError = () => {
    setError(true)
    setCurrentSrc(fallback)
    onError?.()
  }

  return (
    <div className="relative overflow-hidden" style={{ width, height }}>
      <NextImage
        ref={imageRef}
        src={error ? fallback : currentSrc}
        alt={alt}
        width={width}
        height={height}
        className={cn("transition-opacity duration-500", isLoading ? "opacity-0" : "opacity-100", className)}
        onLoadingComplete={handleLoad}
        onError={handleError}
        priority={props.priority}
        sizes={props.sizes || `(max-width: 768px) 100vw, ${width}px`}
        {...props}
      />
      {isLoading && (
        <div
          className={cn(
            "absolute inset-0 flex items-center justify-center bg-gray-100 dark:bg-gray-800 animate-pulse",
            loadingClassName,
          )}
        >
          <span className="sr-only">Loading image: {alt}</span>
        </div>
      )}
    </div>
  )
}
