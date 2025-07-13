"use client"

import { useEffect, useRef, useState } from "react"

interface DotGridBackgroundProps {
  dotSize?: number
  gap?: number
  proximityRadius?: number
  shockRadius?: number
  shockStrength?: number
  activeColor?: string
  baseColor?: string
  className?: string
}

interface Dot {
  x: number
  y: number
  originalX: number
  originalY: number
  scale: number
  opacity: number
  glowIntensity: number
}

export default function DotGridBackground({
  dotSize = 3,
  gap = 20,
  proximityRadius = 100,
  shockRadius = 200,
  shockStrength = 8,
  activeColor = "#00ffcc",
  baseColor = "#ffffff",
  className = "",
}: DotGridBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationRef = useRef<number>()
  const mouseRef = useRef({ x: 0, y: 0 })
  const dotsRef = useRef<Dot[]>([])
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })

  useEffect(() => {
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    updateDimensions()
    window.addEventListener("resize", updateDimensions)
    return () => window.removeEventListener("resize", updateDimensions)
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = dimensions.width
    canvas.height = dimensions.height

    // Initialize dots
    const dots: Dot[] = []
    const cols = Math.floor(dimensions.width / gap)
    const rows = Math.floor(dimensions.height / gap)

    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        const x = i * gap + gap / 2
        const y = j * gap + gap / 2
        dots.push({
          x,
          y,
          originalX: x,
          originalY: y,
          scale: 1,
          opacity: 0.2,
          glowIntensity: 0,
        })
      }
    }

    dotsRef.current = dots

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      }
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      dotsRef.current.forEach((dot) => {
        const dx = mouseRef.current.x - dot.originalX
        const dy = mouseRef.current.y - dot.originalY
        const distance = Math.sqrt(dx * dx + dy * dy)

        // Calculate proximity effect
        if (distance < proximityRadius) {
          const force = (proximityRadius - distance) / proximityRadius
          dot.scale = 1 + force * 1.5
          dot.opacity = 0.2 + force * 0.8
          dot.glowIntensity = force
        } else {
          dot.scale += (1 - dot.scale) * 0.1
          dot.opacity += (0.2 - dot.opacity) * 0.1
          dot.glowIntensity += (0 - dot.glowIntensity) * 0.1
        }

        // Calculate shock wave effect
        if (distance < shockRadius) {
          const shockForce = (shockRadius - distance) / shockRadius
          const angle = Math.atan2(dy, dx)
          const pushX = Math.cos(angle) * shockForce * shockStrength
          const pushY = Math.sin(angle) * shockForce * shockStrength

          dot.x += (dot.originalX + pushX - dot.x) * 0.15
          dot.y += (dot.originalY + pushY - dot.y) * 0.15
        } else {
          // Return to original position
          dot.x += (dot.originalX - dot.x) * 0.08
          dot.y += (dot.originalY - dot.y) * 0.08
        }

        // Draw glow effect
        if (dot.glowIntensity > 0.1) {
          const gradient = ctx.createRadialGradient(dot.x, dot.y, 0, dot.x, dot.y, dotSize * dot.scale * 4)
          gradient.addColorStop(
            0,
            `${activeColor}${Math.floor(dot.glowIntensity * 255)
              .toString(16)
              .padStart(2, "0")}`,
          )
          gradient.addColorStop(1, "transparent")
          ctx.fillStyle = gradient
          ctx.beginPath()
          ctx.arc(dot.x, dot.y, dotSize * dot.scale * 4, 0, Math.PI * 2)
          ctx.fill()
        }

        // Draw main dot
        ctx.save()
        ctx.globalAlpha = dot.opacity
        ctx.fillStyle = dot.glowIntensity > 0.1 ? activeColor : baseColor
        ctx.beginPath()
        ctx.arc(dot.x, dot.y, dotSize * dot.scale, 0, Math.PI * 2)
        ctx.fill()
        ctx.restore()
      })

      animationRef.current = requestAnimationFrame(animate)
    }

    canvas.addEventListener("mousemove", handleMouseMove)
    animate()

    return () => {
      canvas.removeEventListener("mousemove", handleMouseMove)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [dimensions, dotSize, gap, proximityRadius, shockRadius, shockStrength, activeColor, baseColor])

  return (
    <div className={`fixed inset-0 pointer-events-none ${className}`}>
      <canvas
        ref={canvasRef}
        className="w-full h-full opacity-30"
        style={{
          background: "transparent",
        }}
      />
    </div>
  )
}
