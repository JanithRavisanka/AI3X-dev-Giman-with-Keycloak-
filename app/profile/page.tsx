"use client"

import { ProtectedRoute } from "@/components/auth/protected-route"
import { useAuth } from "@/components/auth/keycloak-provider"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import { User, Mail, Calendar, Shield, Edit, X, Settings } from "lucide-react"
import { useState } from "react"

export default function ProfilePage() {
  const { userProfile, keycloak, hasRole } = useAuth()
  const [isEditing, setIsEditing] = useState(false)

  if (!userProfile) {
    return (
      <ProtectedRoute>
        <div className="container mx-auto px-4 py-24">
          <div className="text-center">
            <p className="text-gray-600 dark:text-gray-400">Loading profile...</p>
          </div>
        </div>
      </ProtectedRoute>
    )
  }

  const getInitials = (firstName?: string, lastName?: string) => {
    return `${firstName?.charAt(0) || ""}${lastName?.charAt(0) || ""}`.toUpperCase() || "U"
  }

  const getUserRoles = () => {
    if (!keycloak?.tokenParsed) return []
    const token = keycloak.tokenParsed as any
    const resourceAccess = token.resource_access || {}
    const clientRoles = resourceAccess[keycloak.clientId || ""]?.roles || []
    const realmRoles = token.realm_access?.roles || []
    return [...new Set([...clientRoles, ...realmRoles])].filter((role) => !role.startsWith("default-"))
  }

  const formatDate = (timestamp?: number) => {
    if (!timestamp) return "Not available"
    return new Date(timestamp * 1000).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  return (
    <ProtectedRoute>
      <div className="container mx-auto px-4 py-24 max-w-4xl">
        <div className="space-y-8">
          {/* Header */}
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-blue-600 dark:text-cyan-400">Profile</h1>
              <p className="text-gray-600 dark:text-gray-400 mt-2">Manage your account information and preferences</p>
            </div>
            <Button
              variant={isEditing ? "destructive" : "outline"}
              onClick={() => setIsEditing(!isEditing)}
              className="flex items-center gap-2"
            >
              {isEditing ? (
                <>
                  <X className="h-4 w-4" />
                  Cancel
                </>
              ) : (
                <>
                  <Edit className="h-4 w-4" />
                  Edit Profile
                </>
              )}
            </Button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Profile Card */}
            <div className="lg:col-span-1">
              <Card>
                <CardHeader className="text-center">
                  <div className="flex justify-center mb-4">
                    <Avatar className="h-24 w-24">
                      <AvatarImage src={userProfile.picture || "/placeholder.svg"} alt={userProfile.username} />
                      <AvatarFallback className="bg-blue-600 text-white text-xl">
                        {getInitials(userProfile.firstName, userProfile.lastName)}
                      </AvatarFallback>
                    </Avatar>
                  </div>
                  <CardTitle className="text-xl">
                    {userProfile.firstName} {userProfile.lastName}
                  </CardTitle>
                  <CardDescription>@{userProfile.username}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4 text-gray-500" />
                    <span className="text-sm">{userProfile.email}</span>
                  </div>
                  {userProfile.emailVerified && (
                    <Badge variant="secondary" className="w-fit">
                      Email Verified
                    </Badge>
                  )}
                  <Separator />
                  <div className="space-y-2">
                    <h4 className="text-sm font-medium">Roles</h4>
                    <div className="flex flex-wrap gap-2">
                      {getUserRoles().map((role) => (
                        <Badge key={role} variant="outline" className="text-xs">
                          <Shield className="h-3 w-3 mr-1" />
                          {role}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Account Information */}
            <div className="lg:col-span-2 space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <User className="h-5 w-5" />
                    Account Information
                  </CardTitle>
                  <CardDescription>Your personal account details</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="text-sm font-medium text-gray-700 dark:text-gray-300">First Name</label>
                      <div className="mt-1 p-3 border border-gray-200 dark:border-gray-700 rounded-md bg-gray-50 dark:bg-gray-800">
                        {userProfile.firstName || "Not provided"}
                      </div>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Last Name</label>
                      <div className="mt-1 p-3 border border-gray-200 dark:border-gray-700 rounded-md bg-gray-50 dark:bg-gray-800">
                        {userProfile.lastName || "Not provided"}
                      </div>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Username</label>
                      <div className="mt-1 p-3 border border-gray-200 dark:border-gray-700 rounded-md bg-gray-50 dark:bg-gray-800">
                        {userProfile.username}
                      </div>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
                      <div className="mt-1 p-3 border border-gray-200 dark:border-gray-700 rounded-md bg-gray-50 dark:bg-gray-800">
                        {userProfile.email}
                      </div>
                    </div>
                  </div>

                  <Separator />

                  <div className="space-y-4">
                    <h4 className="text-lg font-medium">Account Status</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex items-center justify-between p-3 border border-gray-200 dark:border-gray-700 rounded-md">
                        <span className="text-sm">Email Verified</span>
                        <Badge variant={userProfile.emailVerified ? "default" : "destructive"}>
                          {userProfile.emailVerified ? "Verified" : "Not Verified"}
                        </Badge>
                      </div>
                      <div className="flex items-center justify-between p-3 border border-gray-200 dark:border-gray-700 rounded-md">
                        <span className="text-sm">Account Enabled</span>
                        <Badge variant="default">Enabled</Badge>
                      </div>
                    </div>
                  </div>

                  {keycloak?.tokenParsed && (
                    <>
                      <Separator />
                      <div className="space-y-4">
                        <h4 className="text-lg font-medium">Session Information</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                          <div>
                            <span className="font-medium">Session Started:</span>
                            <div className="text-gray-600 dark:text-gray-400">
                              {formatDate((keycloak.tokenParsed as any).iat)}
                            </div>
                          </div>
                          <div>
                            <span className="font-medium">Session Expires:</span>
                            <div className="text-gray-600 dark:text-gray-400">
                              {formatDate((keycloak.tokenParsed as any).exp)}
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                </CardContent>
              </Card>

              {/* Actions */}
              <Card>
                <CardHeader>
                  <CardTitle>Account Actions</CardTitle>
                  <CardDescription>Manage your account settings and preferences</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex flex-wrap gap-4">
                    <Button
                      variant="outline"
                      onClick={() => keycloak?.accountManagement()}
                      className="flex items-center gap-2"
                    >
                      <Settings className="h-4 w-4" />
                      Manage Account
                    </Button>
                    <Button variant="outline" className="flex items-center gap-2">
                      <Shield className="h-4 w-4" />
                      Security Settings
                    </Button>
                    <Button variant="outline" className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      Activity Log
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </ProtectedRoute>
  )
}
