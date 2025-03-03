import type React from "react"
import { Space_Grotesk } from "next/font/google"
import { ThemeProvider } from "../contexts/ThemeContext"
import "@/styles/globals.css"

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
})

export const metadata = {
  title: "4dummies - Learn Web3 The Right Way",
  description: "The ultimate platform for learning about blockchain gaming, DeFi, and more",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable}`}>
      <head>
        <link
          rel="preload"
          href="/fonts/SpaceGrotesk-Regular.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </head>
      <ThemeProvider>
        <body className={`${spaceGrotesk.className} font-sans`}>{children}</body>
      </ThemeProvider>
    </html>
  )
}



import './globals.css'