"use client"

import { useState, useEffect } from "react"
import ScrollPresentation from "@/components/scroll-presentation"

export default function Home() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <main className="w-full h-screen bg-background overflow-hidden">
      <ScrollPresentation />
    </main>
  )
}
