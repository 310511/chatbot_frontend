"use client"

import type React from "react"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

interface ScrollFloatTextProps {
  children: React.ReactNode
  className?: string
  startY?: number // Starting Y position (e.g., 50 for floating up)
  endY?: number // Ending Y position (e.g., 0 for settled)
  startOpacity?: number // Starting opacity (e.g., 0 for fading in)
  endOpacity?: number // Ending opacity (e.g., 1 for fully visible)
  offset?: string[] // Scroll offset, e.g., ["start end", "end start"]
}

export default function ScrollFloatText({
  children,
  className = "",
  startY = 50,
  endY = 0,
  startOpacity = 0,
  endOpacity = 1,
  offset = ["start end", "end start"],
}: ScrollFloatTextProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: offset,
  })

  const y = useTransform(scrollYProgress, [0, 1], [startY, endY])
  const opacity = useTransform(scrollYProgress, [0, 1], [startOpacity, endOpacity])

  return (
    <motion.div ref={ref} style={{ y, opacity }} className={className}>
      {children}
    </motion.div>
  )
}
