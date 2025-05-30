"use client"

import { useEffect } from "react"
import { useAuth } from "@/components/auth/keycloak-provider"
import { useRouter, useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function SignInPage() {
  const { login, isAuthenticated, isLoading } = useAuth()
  const router = useRouter()
  const searchParams = useSearchParams()
  const redirectTo = searchParams.get("redirectTo") || "/"

  useEffect(() => {
    // If already authenticated, redirect to the intended destination
    if (!isLoading && isAuthenticated) {
      router.push(redirectTo)
    }
  }, [isAuthenticated, isLoading, router, redirectTo])

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900 px-4">
      <Card className="w-full max-w-md shadow-lg">
        <CardHeader className="space-y-1 text-center">
          <CardTitle className="text-3xl font-bold tracking-tight text-blue-600 dark:text-cyan-400">Sign In</CardTitle>
          <CardDescription className="text-gray-600 dark:text-gray-400">
            Access your AI3X account to manage your AI solutions
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2 text-center">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Sign in with your enterprise credentials to access the AI3X platform
            </p>
          </div>
          <Button
            onClick={login}
            className="w-full bg-blue-600 hover:bg-blue-700 dark:bg-cyan-600 dark:hover:bg-cyan-700"
          >
            Sign in with Keycloak
          </Button>
        </CardContent>
        <CardFooter className="flex flex-col space-y-2">
          <div className="text-sm text-center text-gray-600 dark:text-gray-400">
            <p>
              Don&apos;t have an account?{" "}
              <a href="/signup" className="text-blue-600 dark:text-cyan-400 hover:underline">
                Contact us
              </a>
            </p>
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}
