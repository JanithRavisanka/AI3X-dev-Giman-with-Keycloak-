"use client"

import { createContext, useContext, useEffect, useState, type ReactNode } from "react"
import Keycloak from "keycloak-js"
import { keycloakConfig, keycloakInitOptions } from "@/lib/auth/keycloak"
import { useRouter, usePathname } from "next/navigation"

interface AuthContextType {
  keycloak: Keycloak | null
  initialized: boolean
  isAuthenticated: boolean
  isLoading: boolean
  token: string | null
  userProfile: any | null
  login: () => void
  logout: () => void
  hasRole: (roles: string | string[]) => boolean
  updateToken: () => Promise<string | null>
}

const AuthContext = createContext<AuthContextType>({
  keycloak: null,
  initialized: false,
  isAuthenticated: false,
  isLoading: true,
  token: null,
  userProfile: null,
  login: () => {},
  logout: () => {},
  hasRole: () => false,
  updateToken: async () => null,
})

export const useAuth = () => useContext(AuthContext)

interface KeycloakProviderProps {
  children: ReactNode
  initOptions?: any
}

export function KeycloakProvider({ children, initOptions = {} }: KeycloakProviderProps) {
  const [keycloak, setKeycloak] = useState<Keycloak | null>(null)
  const [initialized, setInitialized] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [userProfile, setUserProfile] = useState<any>(null)
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    // Initialize Keycloak
    const initKeycloak = async () => {
      try {
        const keycloakInstance = new Keycloak(keycloakConfig)

        const authenticated = await keycloakInstance.init({
          ...keycloakInitOptions,
          ...initOptions,
        })

        // Set up token refresh
        if (authenticated) {
          // Set minimum validity to 70 seconds
          keycloakInstance.onTokenExpired = () => {
            keycloakInstance.updateToken(70).catch(() => {
              console.log("Token refresh failed")
              keycloakInstance.logout()
            })
          }

          // Load user profile
          try {
            const profile = await keycloakInstance.loadUserProfile()
            setUserProfile(profile)
          } catch (err) {
            console.error("Failed to load user profile", err)
          }
        }

        setKeycloak(keycloakInstance)
        setInitialized(true)
        setIsLoading(false)
      } catch (error) {
        console.error("Keycloak initialization error:", error)
        setInitialized(true)
        setIsLoading(false)
      }
    }

    initKeycloak()

    // Cleanup
    return () => {
      // Nothing to clean up for Keycloak
    }
  }, [initOptions])

  // Handle login
  const login = () => {
    if (keycloak) {
      keycloak.login({ redirectUri: window.location.origin + (pathname || "/") })
    }
  }

  // Handle logout
  const logout = () => {
    if (keycloak) {
      keycloak.logout({ redirectUri: window.location.origin })
    }
  }

  // Check if user has specific role(s)
  const hasRole = (roles: string | string[]) => {
    if (!keycloak || !keycloak.authenticated) return false

    const rolesToCheck = Array.isArray(roles) ? roles : [roles]
    return rolesToCheck.some((role) => keycloak.hasRealmRole(role) || keycloak.hasResourceRole(role))
  }

  // Update token
  const updateToken = async (): Promise<string | null> => {
    if (!keycloak) return null

    try {
      const refreshed = await keycloak.updateToken(70)
      if (refreshed) {
        console.log("Token refreshed")
      }
      return keycloak.token || null
    } catch (error) {
      console.error("Failed to refresh token", error)
      logout()
      return null
    }
  }

  const value = {
    keycloak,
    initialized,
    isAuthenticated: !!keycloak?.authenticated,
    isLoading,
    token: keycloak?.token || null,
    userProfile,
    login,
    logout,
    hasRole,
    updateToken,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
