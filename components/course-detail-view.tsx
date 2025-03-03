"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Bookmark, ArrowLeft } from "lucide-react"
import Image from "next/image"

interface CourseDetailProps {
  course: {
    id: string
    title: string
    description: string
    image: string
    modules: {
      id: string
      title: string
      description: string
      isBookmarked: boolean
    }[]
  }
  onClose: () => void
}

export function CourseDetailView({ course, onClose }: CourseDetailProps) {
  return (
    <div className="min-h-screen bg-blue-50 text-gray-900">
      {/* Header */}
      <header className="bg-white border-b px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" onClick={onClose}>
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <h1 className="text-lg font-semibold">{course.title}</h1>
        </div>
        <Button variant="ghost" size="icon">
          <div className="h-3 w-3 bg-red-500 rounded-full" />
        </Button>
      </header>

      <div className="p-4 space-y-4">
        {/* Hero Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative h-48 rounded-xl overflow-hidden bg-gray-900"
          style={{
            background: `linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.7)), 
                        url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h100v100H0z' fill='%23000'/%3E%3Cpath d='M0 10h100M0 30h100M0 50h100M0 70h100M0 90h100' stroke='%23333' strokeWidth='1' fill='none'/%3E%3Cpath d='M10 0v100M30 0v100M50 0v100M70 0v100M90 0v100' stroke='%23333' strokeWidth='1' fill='none'/%3E%3C/svg%3E")`,
          }}
        >
          <Image
            src={course.image || "/placeholder.svg"}
            alt={course.title}
            width={400}
            height={200}
            className="w-full h-full object-contain p-8"
          />
        </motion.div>

        {/* Course Info */}
        <div className="bg-white rounded-xl p-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Image
              src="/placeholder.svg?height=32&width=32"
              alt="Author"
              width={32}
              height={32}
              className="rounded-full"
            />
            <div>
              <h2 className="font-medium">{course.title}</h2>
              <p className="text-sm text-gray-500">{course.description}</p>
            </div>
          </div>
          <Button size="sm">Follow</Button>
        </div>

        {/* Modules Grid */}
        <div className="grid grid-cols-2 gap-4">
          {course.modules.map((module, index) => (
            <motion.div
              key={module.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="bg-white overflow-hidden">
                <div
                  className="h-24 p-4 flex items-center justify-center text-white text-center font-semibold"
                  style={{
                    background: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), 
                                url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h100v100H0z' fill='%23000'/%3E%3Cpath d='M0 10h100M0 30h100M0 50h100M0 70h100M0 90h100' stroke='%23333' strokeWidth='1' fill='none'/%3E%3Cpath d='M10 0v100M30 0v100M50 0v100M70 0v100M90 0v100' stroke='%23333' strokeWidth='1' fill='none'/%3E%3C/svg%3E")`,
                  }}
                >
                  {module.title}
                </div>
                <div className="p-4">
                  <p className="text-sm text-gray-600 mb-2">{module.description}</p>
                  <Button
                    variant="ghost"
                    size="icon"
                    className={module.isBookmarked ? "text-blue-600" : "text-gray-400"}
                  >
                    <Bookmark className="h-4 w-4" />
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

