"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

interface SplitBlurTextProps {
  text: string
  className?: string
  delay?: number
  duration?: number
  staggerDelay?: number
}

export default function SplitBlurText({
  text,
  className = "",
  delay = 0,
  duration = 0.8,
  staggerDelay = 0.02,
}: SplitBlurTextProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const words = text.split(" ")

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

  const wordVariants = {
    hidden: {
      filter: "blur(10px)",
      opacity: 0,
      y: 20,
    },
    visible: {
      filter: "blur(0px)",
      opacity: 1,
      y: 0,
      transition: {
        duration,
        ease: [0.25, 0.25, 0, 1],
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
    >
      {words.map((word, index) => (
        <motion.span key={index} variants={wordVariants} className="inline-block mr-2">
          {word}
        </motion.span>
      ))}
    </motion.div>
  )
}
