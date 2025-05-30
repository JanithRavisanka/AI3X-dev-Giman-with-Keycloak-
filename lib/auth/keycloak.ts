import type { KeycloakConfig, KeycloakInitOptions } from "keycloak-js"

// Keycloak configuration
export const keycloakConfig: KeycloakConfig = {
  url: process.env.NEXT_PUBLIC_KEYCLOAK_URL || "https://auth.ai3x.tech/auth",
  realm: process.env.NEXT_PUBLIC_KEYCLOAK_REALM || "ai3x",
  clientId: process.env.NEXT_PUBLIC_KEYCLOAK_CLIENT_ID || "ai3x-web",
}

// Keycloak initialization options
export const keycloakInitOptions: KeycloakInitOptions = {
  onLoad: "check-sso",
  silentCheckSsoRedirectUri: typeof window !== "undefined" ? `${window.location.origin}/silent-check-sso.html` : "",
  pkceMethod: "S256",
  checkLoginIframe: false,
  enableLogging: process.env.NODE_ENV === "development",
}

// Keycloak roles mapping
export const ROLES = {
  ADMIN: "admin",
  USER: "user",
  MANAGER: "manager",
  GUEST: "guest",
}

// Helper functions for token handling
export const parseJwt = (token: string) => {
  try {
    return JSON.parse(atob(token.split(".")[1]))
  } catch (e) {
    return null
  }
}

export const isTokenExpired = (token: string) => {
  const decoded = parseJwt(token)
  if (!decoded) return true

  // Check if the token is expired (with 60 seconds buffer)
  const currentTime = Math.floor(Date.now() / 1000)
  return decoded.exp < currentTime + 60
}

export const getTokenRoles = (token: string) => {
  const decoded = parseJwt(token)
  if (!decoded) return []

  // Extract roles from the token
  const resourceAccess = decoded.resource_access || {}
  const clientRoles = resourceAccess[keycloakConfig.clientId]?.roles || []
  const realmRoles = decoded.realm_access?.roles || []

  return [...new Set([...clientRoles, ...realmRoles])]
}
