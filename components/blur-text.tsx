"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

interface BlurTextProps {
  text: string
  className?: string
  delay?: number
  duration?: number
}

export default function BlurText({ text, className = "", delay = 0, duration = 1 }: BlurTextProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })

  return (
    <motion.div
      ref={ref}
      initial={{ filter: "blur(10px)", opacity: 0 }}
      animate={isInView ? { filter: "blur(0px)", opacity: 1 } : { filter: "blur(10px)", opacity: 0 }}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.25, 0, 1],
      }}
      className={className}
    >
      {text}
    </motion.div>
  )
}
