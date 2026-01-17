"use client"

import { useEffect, useState } from "react"

export default function Controls() {
  const [show, setShow] = useState(true)

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>
    const handleMouseMove = () => {
      setShow(true)
      clearTimeout(timeout)
      timeout = setTimeout(() => setShow(false), 3000)
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      clearTimeout(timeout)
    }
  }, [])

  return (
    <div
      className={`fixed bottom-8 left-1/2 -translate-x-1/2 flex gap-4 transition-opacity duration-300 z-30 ${
        show ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <button
        onClick={() => window.dispatchEvent(new KeyboardEvent("keydown", { key: "ArrowLeft" }))}
        className="w-12 h-12 rounded-full border border-foreground/30 hover:border-foreground/60 flex items-center justify-center transition-all hover:bg-foreground/5"
        aria-label="Previous slide"
      >
        <span className="text-xl">←</span>
      </button>
      <button
        onClick={() => window.dispatchEvent(new KeyboardEvent("keydown", { key: "ArrowRight" }))}
        className="w-12 h-12 rounded-full border border-foreground/30 hover:border-foreground/60 flex items-center justify-center transition-all hover:bg-foreground/5"
        aria-label="Next slide"
      >
        <span className="text-xl">→</span>
      </button>
    </div>
  )
}
