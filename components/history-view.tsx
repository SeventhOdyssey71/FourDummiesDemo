"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { BookOpen, Star, CheckCircle, XCircle, Gift } from "lucide-react"

const notifications = [
  {
    id: 1,
    icon: BookOpen,
    text: "You joined Introduction to DeFi classroom!",
    type: "classroom",
  },
  {
    id: 2,
    icon: Star,
    text: "You have received a new rating",
    type: "rating",
  },
  {
    id: 3,
    icon: CheckCircle,
    text: "Attendance taken successfully!",
    type: "attendance",
  },
  {
    id: 4,
    icon: XCircle,
    text: "You missed a class Sale?!",
    type: "missed",
  },
  {
    id: 5,
    icon: Gift,
    text: "You received 250 $DUMMY",
    type: "reward",
  },
  // Duplicate notifications for scrolling effect
  {
    id: 6,
    icon: BookOpen,
    text: "You joined Introduction to DeFi classroom!",
    type: "classroom",
  },
  {
    id: 7,
    icon: Star,
    text: "You have received a new rating",
    type: "rating",
  },
  {
    id: 8,
    icon: CheckCircle,
    text: "Attendance taken successfully!",
    type: "attendance",
  },
]

const getIconColor = (type: string) => {
  switch (type) {
    case "classroom":
      return "text-blue-600"
    case "rating":
      return "text-yellow-500"
    case "attendance":
      return "text-green-500"
    case "missed":
      return "text-red-500"
    case "reward":
      return "text-purple-500"
    default:
      return "text-gray-500"
  }
}

export function HistoryView() {
  return (
    <div className="min-h-screen bg-blue-50/50 dark:bg-gray-900 p-4 pb-20">
      <div className="max-w-4xl mx-auto space-y-4">
        <h1 className="text-3xl font-bold mb-6">Notifications</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {notifications.map((notification, index) => (
            <motion.div
              key={notification.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="p-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm hover:bg-white dark:hover:bg-gray-800 transition-colors">
                <motion.div
                  className="flex items-start gap-3"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <notification.icon className={`w-5 h-5 mt-1 ${getIconColor(notification.type)}`} />
                  <div className="flex-1">
                    <p className="text-sm text-gray-800 dark:text-gray-200">{notification.text}</p>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-xs text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300"
                  >
                    Read more →
                  </Button>
                </motion.div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

