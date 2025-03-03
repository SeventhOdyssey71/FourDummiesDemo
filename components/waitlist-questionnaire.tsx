"use client"

import type React from "react"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { CheckCircle2, X } from "lucide-react"

const questions = [
  {
    id: 1,
    question: "What is your level of knowledge on Sui?",
    options: ["Beginner", "Intermediate", "Expert"],
  },
  {
    id: 2,
    question: "What aspect of Sui Blockchain are you most interested in?",
    options: ["DeFi", "NFTs", "DAOs", "Gaming", "Smart Contracts"],
  },
  {
    id: 3,
    question: "Have you used any other Web3 educational platforms on the past?",
    options: ["Yes", "No"],
  },
  {
    id: 4,
    question: "What's your primary motivation for using 4dummies?",
    options: ["Career opportunities", "Investment", "Building projects", "Curiosity", "Other"],
  },
  {
    id: 5,
    question: "How do you prefer to learn?",
    options: [
      "Video tutorials",
      "Interactive coding",
      "Reading documentation",
      "Hands-on projects",
      "Community forums",
    ],
  },
]

export function WaitlistQuestionnaire({ onClose }: { onClose: () => void }) {
  const [stage, setStage] = useState<"wallet" | "questionnaire" | "success">("wallet")
  const [walletAddress, setWalletAddress] = useState("")
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<string[]>(Array(questions.length).fill(""))

  const handleWalletSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (walletAddress) {
      // Here you would typically validate the wallet address
      console.log("Wallet address submitted:", walletAddress)
      setStage("questionnaire")
    }
  }

  const handleAnswer = (answer: string) => {
    const newAnswers = [...answers]
    newAnswers[currentQuestion] = answer
    setAnswers(newAnswers)
  }

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      handleSubmit()
    }
  }

  const handleSubmit = () => {
    setStage("success")
    // Here you would typically send the wallet address and answers to your backend
    console.log("Wallet address:", walletAddress)
    console.log("Answers submitted:", answers)
    // Simulate API call
    setTimeout(() => {
      onClose()
    }, 2000)
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="bg-white rounded-lg p-8 max-w-2xl w-full mx-4 relative"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          aria-label="Close"
        >
          <X size={24} />
        </button>
        <AnimatePresence mode="wait">
          {stage === "wallet" && (
            <motion.form
              key="wallet"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              onSubmit={handleWalletSubmit}
            >
              <h2 className="text-2xl font-bold mb-4 text-gray-900">Join the Waitlist</h2>
              <p className="mb-4 text-gray-600">Please enter your wallet address to get started.</p>
              <Input
                type="text"
                placeholder="Enter your wallet address"
                value={walletAddress}
                onChange={(e) => setWalletAddress(e.target.value)}
                className="mb-4"
                required
              />
              <Button type="submit" className="w-full bg-blue-600 text-white hover:bg-blue-700">
                Continue
              </Button>
            </motion.form>
          )}

          {stage === "questionnaire" && (
            <motion.div
              key="question"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
            >
              <h2 className="text-2xl font-bold mb-4 text-gray-900">{questions[currentQuestion].question}</h2>
              <RadioGroup onValueChange={handleAnswer} value={answers[currentQuestion]} className="space-y-2">
                {questions[currentQuestion].options.map((option) => (
                  <div key={option} className="flex items-center space-x-2">
                    <RadioGroupItem value={option} id={option} />
                    <Label htmlFor={option}>{option}</Label>
                  </div>
                ))}
              </RadioGroup>
              <div className="mt-6 flex justify-between items-center">
                <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 mr-4">
                  <div
                    className="bg-blue-600 h-2.5 rounded-full"
                    style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                  ></div>
                </div>
                <Button
                  onClick={handleNext}
                  disabled={!answers[currentQuestion]}
                  className="bg-blue-600 text-white hover:bg-blue-700"
                >
                  {currentQuestion === questions.length - 1 ? "Submit" : "Next"}
                </Button>
              </div>
            </motion.div>
          )}

          {stage === "success" && (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center"
            >
              <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto mb-4" />
              <h2 className="text-2xl font-bold mb-2 text-gray-900">Successfully Joined Waitlist</h2>
              <p className="text-gray-600">Thank you for joining our waitlist!</p>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  )
}

