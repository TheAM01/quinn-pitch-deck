"use client"

import { useState, useEffect } from "react"
import { Slide1 } from "./slides/slide-1"
import { Slide2 } from "./slides/slide-2"
import { Slide3 } from "./slides/slide-3"
import { Slide4 } from "./slides/slide-4"
import { Slide5 } from "./slides/slide-5"
import { Slide6 } from "./slides/slide-6"
import { Slide7 } from "./slides/slide-7"
import { Slide8 } from "./slides/slide-8"
import { Slide9 } from "./slides/slide-9"
import { Slide10 } from "./slides/slide-10"
import { Slide11 } from "./slides/slide-11"
import { Slide12 } from "./slides/slide-12"
import { Slide13 } from "./slides/slide-13"
import { Slide14 } from "./slides/slide-14"
import { Slide15 } from "./slides/slide-15"

const slides = [
  Slide1,
  Slide2,
  Slide3,
  Slide4,
  Slide5,
  Slide6,
  Slide7,
  Slide8,
  Slide9,
  Slide10,
  Slide11,
  Slide12,
  Slide13,
  Slide14,
  Slide15,
]

export default function Slideshow() {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState<"next" | "prev">("next")

  const CurrentSlide = slides[current]

  const handleNext = () => {
    setDirection("next")
    setCurrent((prev) => (prev + 1) % slides.length)
  }

  const handlePrev = () => {
    setDirection("prev")
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length)
  }

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") handleNext()
      if (e.key === "ArrowLeft") handlePrev()
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [])

  return (
    <div className="relative w-full h-full">
      <div
        key={current}
        className={`absolute inset-0 transition-all duration-700 ease-out ${
          direction === "next" ? "animate-slide-in-right" : "animate-slide-in-left"
        }`}
      >
        <CurrentSlide />
      </div>

      {/* Slide counter */}
      <div className="absolute bottom-8 left-8 text-sm font-light tracking-widest text-foreground/50 z-20">
        {String(current + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
      </div>

      {/* Navigation hints */}
      <div className="absolute bottom-8 right-8 text-xs font-light tracking-widest text-foreground/40 z-20">
        ← / → TO NAVIGATE
      </div>
    </div>
  )
}
