"use client"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { ChevronDown, Edit2, LogOut } from "lucide-react"
import Image from "next/image"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useTheme } from "../contexts/ThemeContext"
import { useRouter } from "next/navigation"

interface ProfileViewProps {
  onThemeToggle: () => void
}

export function ProfileView({ onThemeToggle }: ProfileViewProps) {
  const { isDarkMode } = useTheme()
  const router = useRouter()

  const handleSignOut = () => {
    // Here you would typically handle the sign out logic
    // For now, we'll just redirect to the landing page
    router.push("/")
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 p-4">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Profile Picture */}
        <div className="text-center">
          <div className="relative inline-block">
            <div className="w-24 h-24 rounded-full bg-white relative mx-auto">
              <Image
                src="https://pbs.twimg.com/profile_images/1886269733559025664/SbgUWkPS_400x400.jpg"
                alt="Profile"
                width={96}
                height={96}
                className="rounded-full"
              />
              <Button size="icon" variant="secondary" className="absolute bottom-0 right-0 rounded-full">
                <Edit2 className="h-4 w-4" />
              </Button>
            </div>
          </div>
          <h2 className="mt-4 text-xl font-semibold">Sele Odigie</h2>
          <p className="text-sm text-gray-600">Sui Move Dev, Next.js</p>
        </div>

        {/* Profile Information */}
        <div className="grid md:grid-cols-2 gap-4">
          <Card className="p-4 bg-blue-50 dark:bg-blue-900">
            <div className="flex justify-between items-center">
              <span className="text-sm">Username</span>
              <div className="flex items-center gap-2">
                <span>Sele71</span>
                <Edit2 className="h-4 w-4" />
              </div>
            </div>
          </Card>

          <Card className="p-4 bg-blue-50 dark:bg-blue-900">
            <div className="flex justify-between items-center">
              <span className="text-sm">Gender</span>
              <Select defaultValue="male">
                <SelectTrigger className="w-[180px] bg-transparent border-none">
                  <SelectValue placeholder="Select gender" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="male">Male</SelectItem>
                  <SelectItem value="female">Female</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </Card>

          <Card className="p-4 bg-blue-50 dark:bg-blue-900">
            <div className="flex justify-between items-center">
              <span className="text-sm">Location</span>
              <div className="flex items-center gap-2">
                <span>Nigeria</span>
                <Image src="https://static.vecteezy.com/system/resources/previews/016/328/903/original/nigeria-flat-rounded-flag-icon-with-transparent-background-free-png.png" alt="Nigeria flag" width={30} height={20} />
              </div>
            </div>
          </Card>
        </div>

        {/* App Preferences */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">App Preferences</h3>
          <Card className="p-4 bg-blue-50 dark:bg-blue-900">
            <div className="flex justify-between items-center">
              <span className="text-sm">Theme</span>
              <Switch checked={isDarkMode} onCheckedChange={onThemeToggle} />
            </div>
          </Card>

          <Card className="p-4 bg-blue-50 dark:bg-blue-900">
            <div className="flex justify-between items-center">
              <span className="text-sm">Privacy</span>
              <ChevronDown className="h-4 w-4" />
            </div>
          </Card>
        </div>

        {/* Support and Feedback */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Support and Feedback</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <Card className="p-4 bg-blue-50 dark:bg-blue-900">
              <span className="text-sm">Help Center and FAQs</span>
            </Card>
            <Card className="p-4 bg-blue-50 dark:bg-blue-900">
              <span className="text-sm">Contact Support</span>
            </Card>
            <Card className="p-4 bg-blue-50 dark:bg-blue-900">
              <span className="text-sm">Feedback Section</span>
            </Card>
          </div>
        </div>

        {/* Sign Out Button */}
        <Button
          variant="destructive"
          className="w-full bg-blue-600 hover:bg-blue-700 dark:bg-red-600 dark:hover:bg-red-700"
          onClick={handleSignOut}
        >
          <LogOut className="w-4 h-4 mr-2" />
          Sign Out
        </Button>
      </div>
    </div>
  )
}

