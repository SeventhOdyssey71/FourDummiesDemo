"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { CourseDetailView } from "./course-detail-view"

const protocols = [
  {
    id: "walrus",
    title: "Walrus Protocol",
    description: "Decentralized storage, built on the Sui Blockchain",
    image: "https://pbs.twimg.com/profile_banners/1803816329553850368/1723558406/1500x500",
    instructors: ["Alex K.", "Lisa P."],
    students: 1234,
    modules: [
      {
        id: "security",
        title: "Security of Walrus",
        description: "Learn about the security features and best practices",
        isBookmarked: false,
      },
      {
        id: "programmability1",
        title: "Programmability of Walrus",
        description: "Explore the programming interfaces and capabilities",
        isBookmarked: true,
      },
      {
        id: "universality",
        title: "Universality of Walrus",
        description: "Understand cross-chain compatibility and integration",
        isBookmarked: false,
      },
      {
        id: "programmability2",
        title: "Advanced Programmability",
        description: "Deep dive into advanced programming concepts",
        isBookmarked: true,
      },
    ],
  },
  {
    id: "deepbook",
    title: "DeepBook Protocol",
    description: "Decentralized order book for efficient trading",
    image: "https://pbs.twimg.com/profile_banners/1630298367350968321/1711645315/1500x500",
    instructors: ["Mike R.", "Emma S."],
    students: 892,
    modules: [
      {
        id: "basics",
        title: "DeepBook Basics",
        description: "Introduction to order book fundamentals",
        isBookmarked: false,
      },
      {
        id: "trading",
        title: "Trading Mechanics",
        description: "Learn about order types and execution",
        isBookmarked: false,
      },
      {
        id: "integration",
        title: "Integration Guide",
        description: "How to integrate DeepBook in your dApp",
        isBookmarked: true,
      },
      {
        id: "advanced",
        title: "Advanced Features",
        description: "Advanced order book functionalities",
        isBookmarked: false,
      },
    ],
  },
  {
    id: "bucket",
    title: "Bucket Protocol",
    description: "Innovative DeFi lending protocol",
    image: "https://pbs.twimg.com/profile_banners/1638453442640506883/1737352754/1500x500",
    instructors: ["John D.", "Sarah M."],
    students: 567,
    modules: [
      {
        id: "lending",
        title: "Lending Basics",
        description: "Understanding lending and borrowing",
        isBookmarked: true,
      },
      {
        id: "liquidity",
        title: "Liquidity Pools",
        description: "How liquidity pools work in Bucket",
        isBookmarked: false,
      },
      {
        id: "risks",
        title: "Risk Management",
        description: "Understanding and managing risks",
        isBookmarked: false,
      },
      {
        id: "strategies",
        title: "Yield Strategies",
        description: "Advanced yield optimization strategies",
        isBookmarked: true,
      },
    ],
  },
]

export function CoursesView() {
  const [selectedCourse, setSelectedCourse] = useState<any>(null)

  if (selectedCourse) {
    return <CourseDetailView course={selectedCourse} onClose={() => setSelectedCourse(null)} />
  }

  return (
    <div className="min-h-screen bg-blue-50 p-4">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Previous sections remain the same */}

        {/* Sui Protocols - Updated to match Introductory Courses style */}
        <section>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">Sui Protocols</h2>
            <Button variant="ghost" className="text-sm text-blue-600">
              See all →
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {protocols.map((protocol) => (
              <Card key={protocol.id} className="overflow-hidden bg-white">
                <Image
                  src={protocol.image || "https://pbs.twimg.com/profile_images/1886843780193828864/ygTIiVEC_400x400.jpg"}
                  alt={protocol.title}
                  width={300}
                  height={200}
                  className="w-full h-40 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-semibold mb-2">{protocol.title}</h3>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="flex -space-x-2">
                        {protocol.instructors.map((instructor, i) => (
                          <Image
                            key={i}
                            src={`https://pbs.twimg.com/profile_images/1886843780193828864/ygTIiVEC_400x400.jpg`}
                            alt={instructor}
                            width={24}
                            height={24}
                            className="rounded-full border-2 border-white"
                          />
                        ))}
                      </div>
                      <span className="text-sm text-gray-600">{protocol.students} students</span>
                    </div>
                    <Button variant="outline" size="sm" onClick={() => setSelectedCourse(protocol)}>
                      View
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}

