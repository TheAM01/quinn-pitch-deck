"use client"

import { useEffect, useRef, useState } from "react"
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

export default function ScrollPresentation() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isScrolling, setIsScrolling] = useState(false)

  useEffect(() => {
    const container = scrollContainerRef.current
    if (!container) return

    let scrollTimeout: NodeJS.Timeout

    const handleScroll = () => {
      setIsScrolling(true)
      clearTimeout(scrollTimeout)

      const scrollPosition = container.scrollTop
      const slideHeight = container.offsetHeight
      const newSlide = Math.round(scrollPosition / slideHeight)

      setCurrentSlide(Math.min(newSlide, slides.length - 1))

      scrollTimeout = setTimeout(() => {
        setIsScrolling(false)
      }, 150)
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown" || e.key === " ") {
        e.preventDefault()
        const nextSlide = Math.min(currentSlide + 1, slides.length - 1)
        container.scrollTo({
          top: nextSlide * container.offsetHeight,
          behavior: "smooth",
        })
      }
      if (e.key === "ArrowUp") {
        e.preventDefault()
        const prevSlide = Math.max(currentSlide - 1, 0)
        container.scrollTo({
          top: prevSlide * container.offsetHeight,
          behavior: "smooth",
        })
      }
    }

    container.addEventListener("scroll", handleScroll)
    window.addEventListener("keydown", handleKeyDown)

    return () => {
      container.removeEventListener("scroll", handleScroll)
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [currentSlide])

  return (
    <div className="relative w-full h-full overflow-hidden">
      <div
        ref={scrollContainerRef}
        className="flex flex-col w-full h-full overflow-y-scroll snap-y snap-mandatory scroll-smooth"
        style={{ scrollBehavior: "smooth" }}
      >
        {slides.map((Slide, index) => (
          <div key={index} className="flex-shrink-0 w-full h-full snap-center snap-always">
            <Slide />
          </div>
        ))}
      </div>

      {/* Slide counter - positioned top left */}
      <div className="fixed top-8 left-8 text-sm font-light tracking-widest text-foreground/50 z-20">
        {String(currentSlide + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
      </div>

      {/* Navigation hints - positioned top right */}
      <div className="fixed top-8 right-8 text-xs font-light tracking-widest text-foreground/40 z-20 text-right">
        <div>↑ / ↓ TO NAVIGATE</div>
        <div className="mt-1">SPACE TO ADVANCE</div>
      </div>

      {/* Progress bar - right side of screen (vertical) */}
      <div className="fixed right-0 top-0 w-1 h-full bg-foreground/20 z-20">
        <div
          className="w-full bg-foreground transition-all duration-300 ease-out"
          style={{
            height: `${((currentSlide + 1) / slides.length) * 100}%`,
          }}
        />
      </div>

      {/* Scroll indicator - bottom center (fades out after scrolling) */}
      <div
        className={`fixed bottom-8 left-1/2 -translate-x-1/2 z-20 transition-opacity duration-500 ${
          isScrolling ? "opacity-0" : "opacity-100"
        }`}
      >
        <div className="text-xs font-light tracking-widest text-foreground/30 animate-pulse">SCROLL TO EXPLORE</div>
      </div>
    </div>
  )
}
