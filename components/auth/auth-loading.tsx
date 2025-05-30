"use client"

import type React from "react"

import { useAuth } from "./keycloak-provider"

interface AuthLoadingProps {
  children: React.ReactNode
  fallback?: React.ReactNode
}

export function AuthLoading({ children, fallback }: AuthLoadingProps) {
  const { isLoading, initialized } = useAuth()

  if (isLoading || !initialized) {
    return (
      fallback || (
        <div className="flex items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600 dark:border-cyan-400 mx-auto mb-4"></div>
            <p className="text-gray-600 dark:text-gray-400">Initializing authentication...</p>
          </div>
        </div>
      )
    )
  }

  return <>{children}</>
}
