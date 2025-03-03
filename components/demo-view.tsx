"use client"

import { useState, useEffect } from "react"
import { Home, Search, Clock, BarChart2, User, Menu, X, Moon, Sun, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { CoursesView } from "./courses-view"
import { ProfileView } from "./profile-view"
import { Card } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import Image from "next/image"
import Link from "next/link"
import { HistoryView } from "./history-view"
import { Input } from "@/components/ui/input"
import { SearchIcon } from "lucide-react"
import { CourseDetailView } from "./course-detail-view"
import { LeaderboardView } from "./leaderboard-view"
import { AnalyticsView } from "./analytics-view"
import { useTheme } from "../contexts/ThemeContext"
import { Switch } from "@/components/ui/switch"
import { useRouter } from "next/navigation"

const recommendedCourses = [
  {
    id: 1,
    title: "Introduction to Web3 Gaming",
    image: "https://pbs.twimg.com/media/GenUvUiXEAAKs1O?format=jpg&name=large",
    students: 1234,
    instructors: ["John D.", "Sarah M."],
  },
  {
    id: 2,
    title: "Introduction to DeFi",
    image: "https://pbs.twimg.com/media/GkuFM83XYAAfVOG?format=jpg&name=medium",
    students: 2345,
    instructors: ["Mike R.", "Emma S."],
  },
]

const myCourses = [
  {
    id: 1,
    title: "Sui Move Dynamic NFTs",
    progress: 100,
  },
  {
    id: 2,
    title: "Getting to Sui",
    progress: 45,
  },
  {
    id: 3,
    title: "Content Writing on Sui",
    progress: 75,
  },
]

const categories = [
  { id: "all", name: "All" },
  { id: "web3", name: "Web3" },
  { id: "defi", name: "DeFi" },
  { id: "nft", name: "NFT" },
  { id: "metaverse", name: "Metaverse" },
]

const navItems = [
  { icon: Home, label: "Home", view: "home" },
  { icon: Search, label: "Courses", view: "courses" },
  { icon: Clock, label: "History", view: "history" },
  { icon: BarChart2, label: "Analytics", view: "analytics" },
  { icon: User, label: "Profile", view: "profile" },
]

export function DemoView() {
  const [currentView, setCurrentView] = useState<"home" | "courses" | "history" | "analytics" | "profile">("home")
  const [selectedCourse, setSelectedCourse] = useState<any>(null)
  const [showLeaderboard, setShowLeaderboard] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [walletConnected, setWalletConnected] = useState(false)
  const [sidebarExpanded, setSidebarExpanded] = useState(true)
  const { isDarkMode, toggleDarkMode } = useTheme()
  const router = useRouter()

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024)
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  const toggleWallet = () => setWalletConnected(!walletConnected)

  const toggleSidebar = () => {
    setSidebarExpanded(!sidebarExpanded)
  }

  const handleSignOut = () => {
    // Here you would typically handle the sign out logic
    // For now, we'll just redirect to the landing page
    router.push("/")
  }

  const renderView = () => {
    switch (currentView) {
      case "courses":
        return <CoursesView />
      case "profile":
        return <ProfileView onThemeToggle={toggleDarkMode} onSignOut={handleSignOut} />
      case "history":
        return <HistoryView />
      case "analytics":
        return <AnalyticsView />
      case "home":
        return (
          <div className="space-y-8">
            {/* Category Header - Only on HomePage */}
            <div className="mb-4">
              <div className="flex gap-2 overflow-x-auto pb-2">
                {categories.map((category) => (
                  <Button
                    key={category.id}
                    variant={category.id === "all" ? "default" : "outline"}
                    className="rounded-full"
                  >
                    {category.name}
                  </Button>
                ))}
              </div>
            </div>

            {/* Weekly Task */}
            <Card className="p-4 bg-blue-50 dark:bg-blue-900">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h2 className="font-semibold mb-1">Weekly Task</h2>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    DeFi | Suilend | Borrowing and Lending
                  </p>
                </div>
                <Button size="sm" className="bg-blue-600 text-white">
                  5 $SUI
                </Button>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex -space-x-2">
                  {[1, 2].map((i) => (
                    <Image
                      key={i}
                      src={`https://pbs.twimg.com/profile_images/1886480198654418944/chQ4YYIZ_400x400.jpg`}
                      alt={`User ${i}`}
                      width={32}
                      height={32}
                      className="rounded-full border-2 border-white"
                    />
                  ))}
                </div>
                <Link
                  href="#"
                  className="text-sm text-blue-600 dark:text-blue-400 hover:underline ml-auto"
                  onClick={(e) => {
                    e.preventDefault()
                    setShowLeaderboard(true)
                  }}
                >
                  View leaderboards
                </Link>
              </div>
            </Card>

            {/* Recommended Courses */}
            <section>
              <h2 className="text-xl font-bold mb-4">Recommended Courses</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {recommendedCourses.map((course) => (
                  <Card key={course.id} className="overflow-hidden">
                    <Image
                      src={course.image || "https://pbs.twimg.com/profile_images/1886480198654418944/chQ4YYIZ_400x400.jpg"}
                      alt={course.title}
                      width={300}
                      height={200}
                      className="w-full object-cover h-40"
                    />
                    <div className="p-4">
                      <h3 className="font-semibold mb-2">{course.title}</h3>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="flex -space-x-2">
                            {course.instructors.map((instructor, i) => (
                              <Image
                                key={i}
                                src={`https://pbs.twimg.com/profile_images/1886480198654418944/chQ4YYIZ_400x400.jpg`}
                                alt={instructor}
                                width={24}
                                height={24}
                                className="rounded-full border-2 border-white"
                              />
                            ))}
                          </div>
                          <span className="text-sm text-gray-600 dark:text-gray-400">{course.students} students</span>
                        </div>
                        <Button variant="outline" size="sm">
                          View
                        </Button>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </section>

            {/* My Courses */}
            <section>
              <h2 className="text-xl font-bold mb-4">My Courses</h2>
              <div className="space-y-4">
                {myCourses.map((course) => (
                  <Card key={course.id} className="p-4">
                    <div className="flex items-center gap-4">
                      <div className="flex-1">
                        <h3 className="font-medium mb-2">{course.title}</h3>
                        <Progress value={course.progress} className="h-2" />
                      </div>
                      <Button variant="outline" size="sm">
                        Resume
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>
            </section>
          </div>
        )
      default:
        return <div className="p-4 text-center">Coming Soon</div>
    }
  }

  if (selectedCourse) {
    return <CourseDetailView course={selectedCourse} onClose={() => setSelectedCourse(null)} />
  }

  if (showLeaderboard) {
    return (
      <div className="min-h-screen bg-white dark:bg-gray-900 flex flex-col">
        <header className="bg-white dark:bg-gray-800 border-b px-4 py-3 flex items-center">
          <Button variant="ghost" onClick={() => setShowLeaderboard(false)}>
            <X className="h-6 w-6 mr-2" />
            Back
          </Button>
          <h1 className="text-xl font-bold ml-4">Leaderboard</h1>
        </header>
        <LeaderboardView />
      </div>
    )
  }

  return (
    <div className={`min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 flex font-sans`}>
      {/* Sidebar for desktop */}
      {!isMobile && (
        <aside
          className={`bg-gray-100 dark:bg-gray-800 ${
            sidebarExpanded ? "w-64" : "w-16"
          } p-4 flex-shrink-0 transition-all duration-300 fixed left-0 top-0 bottom-0 z-50`}
        >
          <div className="flex items-center justify-between mb-8">
            <Image src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/horizontal%20gradient%20variant%202-Nx4ItZU4io9M6sjcfyZtVle8phG6Sd.png" alt="Logo" width={40} height={40}
            
            
            
            />

            
          </div>

 

          <nav className="space-y-2">
            {navItems.map((item) => (
              <Button
                key={item.view}
                variant={currentView === item.view ? "default" : "ghost"}
                className={`w-full justify-start ${sidebarExpanded ? "" : "px-0 justify-center"}`}
                onClick={() => setCurrentView(item.view as any)}
              >
                <item.icon className={`h-5 w-5 ${sidebarExpanded ? "mr-2" : ""}`} />
                {sidebarExpanded && <span>{item.label}</span>}
              </Button>
            ))}
          </nav>
        </aside>
      )}

      {/* Main content */}
      <main
        className={`flex-1 flex flex-col h-screen overflow-hidden ${!isMobile ? (sidebarExpanded ? "ml-64" : "ml-16") : ""}`}
      >
        {/* Header */}
        <header className="bg-white dark:bg-gray-800 border-b px-4 py-3 flex items-center justify-between">
          {isMobile ? (
            <Button variant="ghost" size="icon" onClick={() => setSidebarOpen(true)}>
              <Menu className="h-6 w-6" />
            </Button>
          ) : (
            <Button variant="ghost" size="icon" onClick={toggleSidebar}>
              {sidebarExpanded ? <ChevronLeft className="h-6 w-6" /> : <ChevronRight className="h-6 w-6" />}
            </Button>
          )}
          <div className="flex items-center gap-2">
            <div className="relative">
              <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500 dark:text-gray-400" />
              <Input
                type="search"
                placeholder="Search..."
                className="pl-10 w-full lg:w-64 bg-gray-100 dark:bg-gray-700"
              />
            </div>
            <Button
              variant={walletConnected ? "default" : "outline"}
              onClick={toggleWallet}
              className="hidden sm:inline-flex"
            >
              {walletConnected ? "1000 $MOVE" : "Connect Wallet"}
            </Button>
            <div className="flex items-center space-x-2">
              <Switch
                checked={isDarkMode}
                onCheckedChange={toggleDarkMode}
                className="data-[state=checked]:bg-blue-600"
              />
              <span className="text-sm font-medium">
                {isDarkMode ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
              </span>
            </div>
          </div>
        </header>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-4">{renderView()}</div>

        {/* Bottom Navigation for mobile */}
        {isMobile && (
          <nav className="bg-white dark:bg-gray-800 border-t py-2">
            <div className="flex justify-around">
              {navItems.map((item) => (
                <Button
                  key={item.view}
                  variant="ghost"
                  size="icon"
                  className={`flex flex-col items-center gap-1 ${
                    currentView === item.view ? "text-blue-600 dark:text-blue-400" : ""
                  }`}
                  onClick={() => setCurrentView(item.view as any)}
                >
                  <item.icon className="h-5 w-5" />
                  <span className="text-xs">{item.label}</span>
                </Button>
              ))}
            </div>
          </nav>
        )}
      </main>
    </div>
  )
}

