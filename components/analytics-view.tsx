"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Star, Calendar, BookOpen, XCircle } from "lucide-react"

const analyticsData = {
  favoriteCourseName: "Walrus Protocol",
  favoriteCoursePlays: 42,
  attendanceRate: 95,
  coursesTaken: 12,
  totalCourses: 50,
  classesSkipped: 3,
  weeklyProgress: [70, 85, 90, 75, 95, 80, 88],
  monthlyStats: {
    completed: 8,
    inProgress: 4,
    notStarted: 38,
  },
}

export function AnalyticsView() {
  return (
    <div className="min-h-screen bg-blue-50/50 dark:bg-gray-900 p-4 pb-20">
      <div className="max-w-4xl mx-auto space-y-6">
        <h1 className="text-3xl font-bold mb-6">Analytics</h1>

        {/* Key Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            {
              icon: Star,
              label: "Favorite Course",
              value: analyticsData.favoriteCourseName,
              subValue: `${analyticsData.favoriteCoursePlays} plays`,
              color: "text-yellow-500",
            },
            {
              icon: Calendar,
              label: "Attendance Rate",
              value: `${analyticsData.attendanceRate}%`,
              subValue: "Last 30 days",
              color: "text-green-500",
            },
            {
              icon: BookOpen,
              label: "Courses Taken",
              value: analyticsData.coursesTaken,
              subValue: `of ${analyticsData.totalCourses} courses`,
              color: "text-blue-500",
            },
            {
              icon: XCircle,
              label: "Classes Skipped",
              value: analyticsData.classesSkipped,
              subValue: "This month",
              color: "text-red-500",
            },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="p-4">
                <stat.icon className={`h-6 w-6 ${stat.color} mb-2`} />
                <h3 className="text-sm text-gray-600">{stat.label}</h3>
                <p className="text-xl font-bold">{stat.value}</p>
                <p className="text-xs text-gray-500">{stat.subValue}</p>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Weekly Progress */}
        <Card className="p-4 dark:bg-gray-800">
          <h3 className="font-semibold mb-4">Weekly Progress</h3>
          <div className="grid grid-cols-7 gap-2">
            {analyticsData.weeklyProgress.map((progress, index) => (
              <div key={index} className="space-y-2">
                <div className="h-24 bg-gray-100 rounded-lg relative">
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: `${progress}%` }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    className="absolute bottom-0 w-full bg-blue-500 rounded-lg"
                  />
                </div>
                <p className="text-xs text-center">{["M", "T", "W", "T", "F", "S", "S"][index]}</p>
              </div>
            ))}
          </div>
        </Card>

        {/* Course Completion */}
        <Card className="p-4 dark:bg-gray-800">
          <h3 className="font-semibold mb-4">Course Completion</h3>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>Completed</span>
                <span>{analyticsData.monthlyStats.completed}</span>
              </div>
              <Progress value={(analyticsData.monthlyStats.completed / analyticsData.totalCourses) * 100} />
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>In Progress</span>
                <span>{analyticsData.monthlyStats.inProgress}</span>
              </div>
              <Progress value={(analyticsData.monthlyStats.inProgress / analyticsData.totalCourses) * 100} />
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>Not Started</span>
                <span>{analyticsData.monthlyStats.notStarted}</span>
              </div>
              <Progress value={(analyticsData.monthlyStats.notStarted / analyticsData.totalCourses) * 100} />
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}

