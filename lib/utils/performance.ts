// Performance utility functions

/**
 * Dynamically import a component with loading state
 * @param importFunc - The import function
 * @returns The component with loading state
 */
export const dynamicImport = (importFunc: () => Promise<any>) => {
  return {
    loading: () => <div>Loading...</div>,
    loader: importFunc,
  }
}

/**
 * Debounce a function
 * @param func - The function to debounce
 * @param wait - The wait time in milliseconds
 * @returns The debounced function
 */
export function debounce<T extends (...args: any[]) => any>(func: T, wait: number): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout | null = null

  return (...args: Parameters<T>) => {
    const later = () => {
      timeout = null
      func(...args)
    }

    if (timeout) clearTimeout(timeout)
    timeout = setTimeout(later, wait)
  }
}

/**
 * Throttle a function
 * @param func - The function to throttle
 * @param limit - The limit time in milliseconds
 * @returns The throttled function
 */
export function throttle<T extends (...args: any[]) => any>(func: T, limit: number): (...args: Parameters<T>) => void {
  let inThrottle = false

  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args)
      inThrottle = true
      setTimeout(() => {
        inThrottle = false
      }, limit)
    }
  }
}

/**
 * Measure the performance of a function
 * @param func - The function to measure
 * @param label - The label for the performance measurement
 * @returns The result of the function
 */
export function measurePerformance<T extends (...args: any[]) => any>(
  func: T,
  label: string,
): (...args: Parameters<T>) => ReturnType<T> {
  return (...args: Parameters<T>): ReturnType<T> => {
    const start = performance.now()
    const result = func(...args)
    const end = performance.now()
    console.log(`${label} took ${end - start}ms`)
    return result
  }
}

/**
 * Memoize a function
 * @param func - The function to memoize
 * @returns The memoized function
 */
export function memoize<T extends (...args: any[]) => any>(func: T): (...args: Parameters<T>) => ReturnType<T> {
  const cache = new Map()

  return (...args: Parameters<T>): ReturnType<T> => {
    const key = JSON.stringify(args)
    if (cache.has(key)) {
      return cache.get(key)
    }

    const result = func(...args)
    cache.set(key, result)
    return result
  }
}

/**
 * Lazy load an image
 * @param src - The image source
 * @returns A promise that resolves when the image is loaded
 */
export function lazyLoadImage(src: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const img = new Image()
    img.src = src
    img.onload = () => resolve(img)
    img.onerror = reject
    img.loading = "lazy"
    img.decoding = "async"
    img.crossOrigin = "anonymous"
  })
}

/**
 * Preload critical resources
 * @param resources - The resources to preload
 */
export function preloadResources(resources: string[]): void {
  resources.forEach((resource) => {
    const link = document.createElement("link")
    link.rel = "preload"
    link.href = resource

    if (resource.endsWith(".js")) {
      link.as = "script"
    } else if (resource.endsWith(".css")) {
      link.as = "style"
    } else if (/\.(png|jpe?g|gif|svg|webp)$/.test(resource)) {
      link.as = "image"
    } else if (/\.(woff2?|ttf|otf|eot)$/.test(resource)) {
      link.as = "font"
      link.crossOrigin = "anonymous"
    }

    document.head.appendChild(link)
  })
}

/**
 * Detect if the browser supports a feature
 * @param feature - The feature to detect
 * @returns Whether the feature is supported
 */
export function supportsFeature(feature: string): boolean {
  switch (feature) {
    case "webp":
      const canvas = document.createElement("canvas")
      if (canvas.getContext && canvas.getContext("2d")) {
        return canvas.toDataURL("image/webp").indexOf("data:image/webp") === 0
      }
      return false
    case "avif":
      const img = new Image()
      img.src =
        "data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAAB0AAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAIAAAACAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQ0MAAAAABNjb2xybmNseAACAAIAAYAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAACVtZGF0EgAKCBgANogQEAwgMg8f8D///8WfhwB8+ErK"
      return img.complete
    case "lazy-loading":
      return "loading" in HTMLImageElement.prototype
    case "intersection-observer":
      return "IntersectionObserver" in window
    default:
      return false
  }
}

/**
 * Get the connection speed
 * @returns The connection speed
 */
export function getConnectionSpeed(): string {
  if ("connection" in navigator && navigator.connection) {
    const connection = navigator.connection as any
    if (connection.effectiveType) {
      return connection.effectiveType // 'slow-2g', '2g', '3g', or '4g'
    }
  }
  return "unknown"
}

/**
 * Optimize images based on connection speed
 * @param imageSrc - The original image source
 * @param options - The optimization options
 * @returns The optimized image source
 */
export function optimizeImage(
  imageSrc: string,
  options: {
    quality?: number
    width?: number
    format?: "webp" | "avif" | "jpeg"
  } = {},
): string {
  const connectionSpeed = getConnectionSpeed()
  let quality = options.quality || 75
  let width = options.width || 1200
  let format = options.format || "webp"

  // Adjust based on connection speed
  if (connectionSpeed === "slow-2g" || connectionSpeed === "2g") {
    quality = 60
    width = Math.min(width, 800)
  } else if (connectionSpeed === "3g") {
    quality = 70
    width = Math.min(width, 1000)
  }

  // Check format support
  if (format === "avif" && !supportsFeature("avif")) {
    format = "webp"
  }
  if (format === "webp" && !supportsFeature("webp")) {
    format = "jpeg"
  }

  // For a real implementation, you would use an image optimization service
  // This is just a placeholder
  return `${imageSrc}?width=${width}&quality=${quality}&format=${format}`
}
