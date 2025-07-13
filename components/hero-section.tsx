"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"

export default function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900">
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-slate-800/80 to-emerald-900/90" />

      {/* Radial Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-radial from-teal-500/10 via-transparent to-transparent" />

      {/* Animated Background Blobs */}
      <motion.div
        className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-teal-400/20 to-emerald-500/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-emerald-400/20 to-teal-500/20 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.4, 0.2, 0.4],
        }}
        transition={{
          duration: 10,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      {/* Abstract Pattern Overlays */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 opacity-30">
        <motion.div
          className="w-full h-full bg-gradient-to-bl from-teal-400/30 via-emerald-500/20 to-transparent"
          style={{
            clipPath: "polygon(20% 0%, 100% 0%, 100% 80%, 0% 100%)",
          }}
          animate={{
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 6,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 opacity-25">
        <motion.div
          className="w-full h-full bg-gradient-to-tr from-emerald-400/30 via-teal-500/20 to-transparent"
          style={{
            clipPath: "polygon(0% 20%, 80% 0%, 100% 100%, 0% 100%)",
          }}
          animate={{
            opacity: [0.3, 0.1, 0.3],
          }}
          transition={{
            duration: 7,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Floating Sparkles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-teal-400/40"
          style={{
            left: `${20 + i * 15}%`,
            top: `${30 + i * 10}%`,
          }}
          animate={{
            y: [-20, 20, -20],
            opacity: [0.2, 0.6, 0.2],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 4 + i,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: i * 0.5,
          }}
        >
          <Sparkles size={16} />
        </motion.div>
      ))}

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-5xl mx-auto">
          {/* Main Heading */}
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            style={{
              textShadow: "0 0 30px rgba(255, 255, 255, 0.3), 0 0 60px rgba(56, 178, 172, 0.2)",
            }}
          >
            <span className="text-white">Animated </span>
            <span className="bg-gradient-to-r from-teal-400 to-emerald-500 bg-clip-text text-transparent">AI</span>
            <span className="text-white"> Components</span>
            <br />
            <span className="text-white">for </span>
            <span className="bg-gradient-to-r from-teal-400 to-emerald-500 bg-clip-text text-transparent">
              Innovative Developers
            </span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            className="text-lg sm:text-xl md:text-2xl mb-12 text-teal-200/70 max-w-3xl mx-auto leading-relaxed font-outfit"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            Eighty-plus animated blocks, ready to power your next generation UI.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="inline-block">
              <Button
                size="lg"
                className="group relative px-8 py-4 text-lg font-semibold bg-gradient-to-r from-teal-500/20 to-emerald-500/20 border-2 border-teal-400/30 text-white rounded-full hover:border-teal-400/60 transition-all duration-300 backdrop-blur-sm font-space-grotesk"
                style={{
                  boxShadow: "0 0 20px rgba(56, 178, 172, 0.2)",
                }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-teal-400/10 to-emerald-500/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  whileHover={{
                    boxShadow: "0 0 40px rgba(56, 178, 172, 0.4)",
                  }}
                />
                <span className="relative flex items-center gap-2">
                  Browse Components
                  <motion.div
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                  >
                    <ArrowRight size={20} />
                  </motion.div>
                </span>
              </Button>
            </motion.div>
          </motion.div>

          {/* Floating Code Snippets */}
          <motion.div
            className="absolute top-1/4 left-8 hidden lg:block"
            animate={{
              y: [-10, 10, -10],
              rotate: [-2, 2, -2],
            }}
            transition={{
              duration: 6,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          >
            <div className="bg-slate-800/40 backdrop-blur-sm border border-teal-400/20 rounded-lg p-3 text-sm font-mono text-teal-300/80">
              {"<motion.div />"}
            </div>
          </motion.div>

          <motion.div
            className="absolute top-1/3 right-12 hidden lg:block"
            animate={{
              y: [10, -10, 10],
              rotate: [2, -2, 2],
            }}
            transition={{
              duration: 8,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          >
            <div className="bg-slate-800/40 backdrop-blur-sm border border-emerald-400/20 rounded-lg p-3 text-sm font-mono text-emerald-300/80">
              {"animate={{ scale: 1.1 }}"}
            </div>
          </motion.div>

          <motion.div
            className="absolute bottom-1/4 left-16 hidden lg:block"
            animate={{
              y: [-8, 8, -8],
              rotate: [-1, 1, -1],
            }}
            transition={{
              duration: 7,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          >
            <div className="bg-slate-800/40 backdrop-blur-sm border border-teal-400/20 rounded-lg p-3 text-sm font-mono text-teal-300/80">
              {"transition={{ duration: 0.3 }}"}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-900 to-transparent" />
    </section>
  )
}
