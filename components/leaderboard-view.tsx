"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import Image from "next/image"

const leaderboardData = [
  {
    id: 1,
    name: "SuiNetworkNG",
    points: 1923,
    flag: "🇳🇬",
    logo: "/placeholder.svg?height=100&width=100&text=NG",
    teamPhoto:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202024-12-23%20122751-BxJrRtHpmbXKnGe8HfPSGmaE8L0Nid.png",
    gradient: "from-green-600 to-green-800",
  },
  {
    id: 2,
    name: "SuiNetworkPT",
    points: 423,
    flag: "🇵🇹",
    logo: "/placeholder.svg?height=100&width=100&text=PT",
    teamPhoto:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202024-12-23%20122751-BxJrRtHpmbXKnGe8HfPSGmaE8L0Nid.png",
    gradient: "from-red-600 to-red-800",
  },
  {
    id: 3,
    name: "SuiNetworkGH",
    points: 413,
    flag: "🇬🇭",
    logo: "/placeholder.svg?height=100&width=100&text=GH",
    teamPhoto:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202024-12-23%20122751-BxJrRtHpmbXKnGe8HfPSGmaE8L0Nid.png",
    gradient: "from-yellow-500 via-red-500 to-green-600",
  },
]

export function LeaderboardView() {
  return (
    <div className="min-h-screen bg-blue-50 dark:bg-blue-900 p-4">
      <div className="max-w-md mx-auto">
        <h1 className="text-2xl font-bold mb-6 dark:text-white">Leaderboard</h1>
        <div className="space-y-4">
          {leaderboardData.map((entry, index) => (
            <motion.div
              key={entry.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="p-4 bg-white dark:bg-gray-800">
                <div className="flex items-center gap-4">
                  <span className="text-xl font-bold text-gray-400 dark:text-gray-500">{entry.id}.</span>
                  <div className="grid grid-cols-2 gap-2 flex-1">
                    <div
                      className={`bg-gradient-to-br ${entry.gradient} rounded-lg p-4 flex items-center justify-center`}
                    >
                      <span className="text-white text-2xl">{entry.flag}</span>
                    </div>
                    <div className="relative h-20 rounded-lg overflow-hidden">
                      <Image
                        src={entry.teamPhoto || "/placeholder.svg"}
                        alt={`${entry.name} team`}
                        layout="fill"
                        objectFit="cover"
                        className="rounded-lg"
                      />
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="font-mono font-bold dark:text-white">{entry.points}pts</span>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

