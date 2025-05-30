"use client"

import type React from "react"

import { useEffect } from "react"
import { useAuth } from "./keycloak-provider"
import { useRouter, usePathname } from "next/navigation"

interface ProtectedRouteProps {
  children: React.ReactNode
  roles?: string[]
  redirectTo?: string
}

export function ProtectedRoute({ children, roles = [], redirectTo = "/signin" }: ProtectedRouteProps) {
  const { isAuthenticated, isLoading, hasRole } = useAuth()
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    if (!isLoading) {
      // If not authenticated, redirect to login
      if (!isAuthenticated) {
        router.push(redirectTo)
        return
      }

      // If roles are specified, check if user has required roles
      if (roles.length > 0 && !hasRole(roles)) {
        router.push("/unauthorized")
        return
      }
    }
  }, [isAuthenticated, isLoading, hasRole, roles, router, redirectTo])

  // Show nothing while loading
  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600 dark:border-cyan-400"></div>
      </div>
    )
  }

  // If not authenticated or doesn't have required roles, don't render children
  if (!isAuthenticated || (roles.length > 0 && !hasRole(roles))) {
    return null
  }

  // Otherwise, render children
  return <>{children}</>
}
