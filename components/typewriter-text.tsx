"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

interface TypewriterTextProps {
  text: string
  className?: string
  delay?: number
  duration?: number
  staggerDelay?: number
}

export default function TypewriterText({
  text,
  className = "",
  delay = 0,
  duration = 0.05, // Duration per character
  staggerDelay = 0.05, // Stagger delay between characters
}: TypewriterTextProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })

  const characters = Array.from(text)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: delay,
      },
    },
  }

  const characterVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: duration,
        ease: "linear",
      },
    },
  }

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={className}
      aria-label={text} // For accessibility
    >
      {characters.map((char, index) => (
        <motion.span key={index} variants={characterVariants}>
          {char === " " ? "\u00A0" : char} {/* Preserve spaces */}
        </motion.span>
      ))}
    </motion.div>
  )
}
