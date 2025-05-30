"use client"
import { ProtectedRoute } from "@/components/auth/protected-route"
import { useAuth } from "@/components/auth/keycloak-provider"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BarChart, LineChart, PieChart, Activity, Users, Database, Settings } from "lucide-react"

export default function DashboardPage() {
  const { userProfile } = useAuth()

  return (
    <ProtectedRoute>
      <div className="container mx-auto px-4 py-24">
        <div className="flex flex-col space-y-8">
          <div>
            <h1 className="text-3xl font-bold text-blue-600 dark:text-cyan-400">
              Welcome, {userProfile?.firstName || "User"}
            </h1>
            <p className="text-gray-600 dark:text-gray-400 mt-2">
              Manage your AI solutions and monitor performance from your dashboard
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Active Projects</CardTitle>
                <Activity className="h-4 w-4 text-blue-600 dark:text-cyan-400" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">12</div>
                <p className="text-xs text-gray-600 dark:text-gray-400">+2 from last month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">AI Assistants</CardTitle>
                <Users className="h-4 w-4 text-blue-600 dark:text-cyan-400" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">8</div>
                <p className="text-xs text-gray-600 dark:text-gray-400">+1 from last month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Data Sources</CardTitle>
                <Database className="h-4 w-4 text-blue-600 dark:text-cyan-400" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">24</div>
                <p className="text-xs text-gray-600 dark:text-gray-400">+3 from last month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">API Usage</CardTitle>
                <Settings className="h-4 w-4 text-blue-600 dark:text-cyan-400" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">85%</div>
                <p className="text-xs text-gray-600 dark:text-gray-400">+12% from last month</p>
              </CardContent>
            </Card>
          </div>

          <Tabs defaultValue="overview" className="w-full">
            <TabsList>
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="analytics">Analytics</TabsTrigger>
              <TabsTrigger value="reports">Reports</TabsTrigger>
              <TabsTrigger value="settings">Settings</TabsTrigger>
            </TabsList>
            <TabsContent value="overview">
              <Card>
                <CardHeader>
                  <CardTitle>Performance Overview</CardTitle>
                  <CardDescription>View your AI platform performance metrics</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="h-[300px] bg-gray-100 dark:bg-gray-800 rounded-md flex items-center justify-center">
                    <LineChart className="h-8 w-8 text-gray-400" />
                    <span className="ml-2 text-gray-500">Performance Chart</span>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="analytics">
              <Card>
                <CardHeader>
                  <CardTitle>Usage Analytics</CardTitle>
                  <CardDescription>Detailed breakdown of your AI usage</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="h-[300px] bg-gray-100 dark:bg-gray-800 rounded-md flex items-center justify-center">
                    <BarChart className="h-8 w-8 text-gray-400" />
                    <span className="ml-2 text-gray-500">Usage Analytics Chart</span>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="reports">
              <Card>
                <CardHeader>
                  <CardTitle>Monthly Reports</CardTitle>
                  <CardDescription>Download and view your monthly reports</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="h-[300px] bg-gray-100 dark:bg-gray-800 rounded-md flex items-center justify-center">
                    <PieChart className="h-8 w-8 text-gray-400" />
                    <span className="ml-2 text-gray-500">Reports Chart</span>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="settings">
              <Card>
                <CardHeader>
                  <CardTitle>Account Settings</CardTitle>
                  <CardDescription>Manage your account preferences</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium">Email Notifications</label>
                      <div className="flex items-center mt-2">
                        <input type="checkbox" className="mr-2" defaultChecked />
                        <span className="text-sm">Receive email notifications</span>
                      </div>
                    </div>
                    <div>
                      <label className="text-sm font-medium">Two-Factor Authentication</label>
                      <div className="flex items-center mt-2">
                        <input type="checkbox" className="mr-2" />
                        <span className="text-sm">Enable 2FA</span>
                      </div>
                    </div>
                  </div>
                  <Button className="mt-4">Save Settings</Button>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </ProtectedRoute>
  )
}
