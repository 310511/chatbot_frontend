"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu"
import { Upload, MessageSquare, Brain, Zap, FileText, Sparkles, ArrowRight, Bot, ChevronDown, X } from "lucide-react"

import DotGridBackground from "./dot-grid-background"
import BlurText from "./blur-text"
import SplitBlurText from "./split-blur-text"
import TypewriterText from "./typewriter-text" // Import the new component

export default function RAGBotLanding() {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([])
  const [question, setQuestion] = useState("")
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null)

  const [selectedProvider, setSelectedProvider] = useState<string>("Gemini")

  const handleProviderChange = (provider: string) => {
    setSelectedProvider(provider)
  }

  const features = [
    {
      icon: Brain,
      title: "AI-Powered Analysis",
      description: "Advanced language models understand your documents contextually",
      color: "from-purple-400 to-pink-500",
      glowColor: "rgba(168, 85, 247, 0.4)",
    },
    {
      icon: Zap,
      title: "Instant Responses",
      description: "Get immediate answers from your uploaded PDF documents",
      color: "from-yellow-400 to-orange-500",
      glowColor: "rgba(251, 191, 36, 0.4)",
    },
    {
      icon: FileText,
      title: "Multi-Document Support",
      description: "Upload and query multiple PDFs simultaneously",
      color: "from-blue-400 to-cyan-500",
      glowColor: "rgba(59, 130, 246, 0.4)",
    },
    {
      icon: MessageSquare,
      title: "Natural Conversations",
      description: "Chat naturally with your documents using plain language",
      color: "from-green-400 to-emerald-500",
      glowColor: "rgba(34, 197, 94, 0.4)",
    },
  ]

  const scrollToUploadSection = () => {
    const uploadSection = document.getElementById("upload-section")
    if (uploadSection) {
      uploadSection.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900 relative overflow-hidden">
      {/* Dot Grid Background */}
      <DotGridBackground
        dotSize={2}
        gap={25}
        proximityRadius={120}
        shockRadius={200}
        shockStrength={6}
        activeColor="#00ffcc"
        baseColor="#ffffff"
      />

      {/* Enhanced Animated Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/70 via-slate-800/60 to-emerald-900/70" />

      {/* Radial Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-radial from-teal-500/15 via-transparent to-transparent" />

      {/* Enhanced Animated Background Blobs */}
      <motion.div
        className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-teal-400/40 to-emerald-500/40 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.4, 1],
          opacity: [0.6, 0.9, 0.6],
          x: [-20, 20, -20],
          y: [-10, 10, -10],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-emerald-400/40 to-teal-500/40 rounded-full blur-3xl"
        animate={{
          scale: [1.3, 1, 1.3],
          opacity: [0.7, 0.5, 0.7],
          x: [20, -20, 20],
          y: [10, -10, 10],
        }}
        transition={{
          duration: 10,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      {/* Additional floating orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-br from-teal-400/30 to-emerald-500/30 rounded-full blur-2xl"
        animate={{
          scale: [0.8, 1.2, 0.8],
          opacity: [0.5, 0.8, 0.5],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 12,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute top-3/4 right-1/4 w-48 h-48 bg-gradient-to-br from-blue-400/30 to-cyan-500/30 rounded-full blur-2xl"
        animate={{
          scale: [1.2, 0.9, 1.2],
          opacity: [0.6, 0.4, 0.6],
          rotate: [360, 180, 0],
        }}
        transition={{
          duration: 9,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      {/* Enhanced Floating Particles */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-teal-400/60"
          style={{
            left: `${5 + i * 8}%`,
            top: `${15 + i * 6}%`,
          }}
          animate={{
            y: [-30, 30, -30],
            opacity: [0.4, 1, 0.4],
            rotate: [0, 180, 360],
            scale: [0.8, 1.2, 0.8],
          }}
          transition={{
            duration: 4 + i * 0.5,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: i * 0.3,
          }}
        >
          <Sparkles size={10 + (i % 3) * 2} />
        </motion.div>
      ))}

      {/* Background Blur Overlay for Hover Effect */}
      <motion.div
        className="absolute inset-0 backdrop-blur-sm bg-slate-900/20 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: hoveredFeature !== null ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Header */}
        <motion.header
          className="p-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-teal-400 to-emerald-500 rounded-lg flex items-center justify-center">
              <Bot className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-teal-400 to-emerald-500 bg-clip-text text-transparent">
              RAGBot
            </span>
          </div>
        </motion.header>

        {/* Hero Section */}
        <div className="flex-1 flex items-center justify-center px-6">
          <div className="max-w-6xl mx-auto text-center">
            {/* Main Headline */}
            <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <SplitBlurText
                text="Chat with Your PDFs"
                className="bg-gradient-to-r from-teal-400 to-emerald-500 bg-clip-text text-transparent block"
                delay={0.2}
                duration={1.2} // Increased duration
                staggerDelay={0.12} // Increased stagger delay
                style={{
                  textShadow: "0 0 30px rgba(255, 255, 255, 0.3), 0 0 60px rgba(56, 178, 172, 0.2)",
                }}
              />
              <TypewriterText
                text="Using Advanced AI"
                className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl block mt-2"
                delay={1.5} // Adjusted delay to start slightly later
                staggerDelay={0.08} // Increased stagger delay for slower typing
                duration={0.08} // Increased duration per character slightly
              />
            </div>

            {/* Subheadline */}
            <BlurText
              text="Upload your documents and get instant, intelligent answers through natural conversation"
              className="text-lg sm:text-xl md:text-2xl mb-12 text-teal-200/70 max-w-3xl mx-auto leading-relaxed"
              delay={2.5} // Adjusted delay to follow TypewriterText
              duration={1.2} // Increased duration
            />

            {/* Floating Tags */}
            <motion.div
              className="flex flex-wrap justify-center gap-4 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {["AI-Powered", "Real-time", "Multi-PDF"].map((tag, i) => (
                <motion.div
                  key={tag}
                  className="px-4 py-2 bg-slate-800/40 backdrop-blur-sm border border-teal-400/20 rounded-full text-sm text-teal-300/80"
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(56, 178, 172, 0.1)" }}
                  transition={{ duration: 0.3 }}
                  animate={{
                    y: [-2, 2, -2],
                  }}
                  style={{
                    animationDelay: `${i * 0.2}s`,
                    animationDuration: "3s",
                    animationIterationCount: "infinite",
                  }}
                >
                  {tag}
                </motion.div>
              ))}
            </motion.div>

            {/* Main Chat Interface */}
            <motion.div
              id="upload-section" // Added ID for scrolling
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Card className="max-w-4xl mx-auto bg-slate-800/40 backdrop-blur-xl border border-teal-400/20 p-8 rounded-3xl shadow-2xl">
                <div className="space-y-6">
                  {/* File Upload Section */}
                  <div className="text-center">
                    <motion.div
                      className="border-2 border-dashed border-teal-400/30 rounded-2xl p-8 hover:border-teal-400/50 transition-colors duration-300"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Upload className="w-12 h-12 text-teal-400 mx-auto mb-4" />
                      <h3 className="text-xl font-semibold text-white mb-2">Upload Your PDFs</h3>
                      <p className="text-gray-300 mb-4">Drag and drop or click to select your documents</p>

                      <div className="flex gap-4 justify-center">
                        <input
                          id="file-upload"
                          type="file"
                          multiple
                          className="hidden"
                          onChange={(e) => {
                            if (e.target.files) {
                              setSelectedFiles(Array.from(e.target.files))
                            }
                          }}
                          accept=".pdf"
                        />
                        <Button
                          className="bg-gradient-to-r from-teal-500/20 to-emerald-500/20 border border-teal-400/30 text-white hover:border-teal-400/60 transition-all duration-300 rounded-full px-6"
                          style={{
                            boxShadow: "0 0 20px rgba(56, 178, 172, 0.2)",
                          }}
                          onClick={() => document.getElementById("file-upload")?.click()}
                        >
                          Choose Files
                        </Button>
                        <Button
                          className="bg-gradient-to-r from-teal-500 to-emerald-500 text-white hover:scale-105 transition-all duration-300 rounded-full px-6"
                          style={{
                            boxShadow: "0 0 20px rgba(56, 178, 172, 0.4)",
                          }}
                          onClick={() => {
                            if (selectedFiles.length > 0) {
                              console.log(
                                "Uploading files:",
                                selectedFiles.map((f) => f.name),
                              )
                              // In a real app, you would send these files to a server
                              alert(`Uploading ${selectedFiles.length} file(s)! Check console for details.`)
                              setSelectedFiles([]) // Clear selected files after "upload"
                            } else {
                              alert("Please select files to upload.")
                            }
                          }}
                          disabled={selectedFiles.length === 0}
                        >
                          Upload
                        </Button>
                      </div>
                      {selectedFiles.length > 0 && (
                        <div className="mt-4 text-left text-gray-300 text-sm">
                          <p className="font-semibold">Selected Files:</p>
                          <ul className="list-disc list-inside">
                            {selectedFiles.map((file, index) => (
                              <li key={index} className="flex items-center justify-between">
                                <span>{file.name}</span>
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  onClick={() =>
                                    setSelectedFiles((prevFiles) => prevFiles.filter((_, i) => i !== index))
                                  }
                                  className="text-red-400 hover:text-red-500 p-1 h-auto"
                                >
                                  <X className="w-4 h-4" />
                                  <span className="sr-only">Remove {file.name}</span>
                                </Button>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </motion.div>
                  </div>

                  {/* Chat Interface */}
                  <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 min-h-[200px] border border-white/10">
                    <div className="text-gray-400 text-center py-8">
                      <MessageSquare className="w-16 h-16 mx-auto mb-4 text-teal-400/50" />
                      <p>Your conversation will appear here...</p>
                    </div>
                  </div>

                  {/* Enhanced Search Input with Model Selection */}
                  <motion.div className="relative" whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }}>
                    <div className="flex gap-3">
                      {/* Provider Dropdown */}
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button
                            variant="outline"
                            className="bg-gradient-to-r from-teal-500/20 to-emerald-500/20 border border-teal-400/30 text-white hover:bg-teal-500/30 rounded-full px-4 py-2 text-sm"
                          >
                            {selectedProvider} <ChevronDown className="ml-2 h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="bg-slate-800/90 border border-teal-400/20 text-white">
                          <DropdownMenuLabel>Select Provider</DropdownMenuLabel>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem onClick={() => handleProviderChange("Gemini")}>Gemini</DropdownMenuItem>
                          <DropdownMenuItem onClick={() => handleProviderChange("Groq")}>Groq</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>

                      <div className="flex-1 relative">
                        <Input
                          placeholder="Ask a question about your PDFs..."
                          value={question}
                          onChange={(e) => setQuestion(e.target.value)}
                          className="bg-white/5 backdrop-blur-sm border border-white/20 rounded-full px-6 py-4 text-white placeholder-gray-400 focus:border-teal-400/50 focus:ring-2 focus:ring-teal-400/20 transition-all duration-300"
                          style={{
                            boxShadow: "0 0 20px rgba(56, 178, 172, 0.1)",
                          }}
                        />
                        <motion.div
                          className="absolute inset-0 rounded-full bg-gradient-to-r from-teal-400/10 to-emerald-500/10 opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                          whileHover={{
                            boxShadow: "0 0 30px rgba(56, 178, 172, 0.2)",
                          }}
                        />
                      </div>
                      <Button
                        className="bg-gradient-to-r from-teal-500 to-emerald-500 text-white hover:scale-105 transition-all duration-300 rounded-full px-8"
                        style={{
                          boxShadow: "0 0 20px rgba(56, 178, 172, 0.4)",
                        }}
                      >
                        Ask
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  </motion.div>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>

        {/* Features Section */}
        <motion.section
          className="py-20 px-6 relative"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <SplitBlurText
                text="Powerful AI Features"
                className="text-3xl md:text-4xl font-bold text-white mb-4"
                delay={0.2}
                duration={1.0} // Increased duration
                staggerDelay={0.1} // Increased stagger delay
              />
              <BlurText
                text="Experience the future of document interaction with our advanced AI capabilities"
                className="text-xl text-gray-300 max-w-2xl mx-auto"
                delay={0.8}
                duration={1.0} // Increased duration
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                  onHoverStart={() => setHoveredFeature(index)}
                  onHoverEnd={() => setHoveredFeature(null)}
                  className="group relative h-full" // Added h-full here
                >
                  {/* Glow effect behind card */}
                  <motion.div
                    className={`absolute -inset-4 bg-gradient-to-r ${feature.color} rounded-3xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`}
                    animate={{
                      scale: hoveredFeature === index ? [1, 1.1, 1] : 1,
                    }}
                    transition={{
                      duration: 2,
                      repeat: hoveredFeature === index ? Number.POSITIVE_INFINITY : 0,
                      ease: "easeInOut",
                    }}
                  />

                  <motion.div
                    whileHover={{
                      scale: 1.05,
                      y: -10,
                    }}
                    transition={{ duration: 0.3 }}
                    className="relative h-full" // Added h-full here
                  >
                    <Card
                      className="bg-slate-800/60 backdrop-blur-xl border border-teal-400/20 p-6 rounded-2xl h-full hover:border-teal-400/60 transition-all duration-500 relative overflow-hidden group-hover:bg-slate-800/80 flex flex-col justify-between" // Added h-full and flex properties
                      style={{
                        boxShadow: hoveredFeature === index ? `0 0 40px ${feature.glowColor}` : "none",
                      }}
                    >
                      <div className="text-center relative z-10">
                        <motion.div
                          className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                          animate={{
                            scale: [1, 1.1, 1], // Breathe in-out scale
                            opacity: [1, 0.8, 1], // Breathe in-out opacity
                          }}
                          transition={{
                            duration: 3, // Duration of one breathe cycle
                            repeat: Number.POSITIVE_INFINITY, // Repeat indefinitely
                            ease: "easeInOut", // Smooth easing
                          }}
                          style={{
                            boxShadow: hoveredFeature === index ? `0 0 30px ${feature.glowColor}` : "none",
                          }}
                        >
                          <feature.icon className="w-8 h-8 text-white" />
                        </motion.div>

                        <motion.h3
                          className="text-xl font-semibold text-white mb-3 group-hover:bg-gradient-to-r group-hover:bg-clip-text transition-all duration-300"
                          style={{
                            backgroundImage:
                              hoveredFeature === index
                                ? `linear-gradient(to right, ${feature.color.split(" ")[1]}, ${feature.color.split(" ")[3]})`
                                : undefined,
                          }}
                        >
                          {feature.title}
                        </motion.h3>

                        <p className="text-gray-300 leading-relaxed group-hover:text-white transition-colors duration-300">
                          {feature.description}
                        </p>
                      </div>

                      {/* Floating particles inside card */}
                      {hoveredFeature === index && (
                        <>
                          {[...Array(6)].map((_, i) => (
                            <motion.div
                              key={i}
                              className="absolute w-1 h-1 rounded-full"
                              style={{
                                background: `linear-gradient(to right, ${feature.color.split(" ")[1]}, ${feature.color.split(" ")[3]})`,
                                left: `${20 + i * 15}%`,
                                top: `${30 + i * 10}%`,
                              }}
                              animate={{
                                y: [-10, 10, -10],
                                opacity: [0.3, 1, 0.3],
                                scale: [0.5, 1, 0.5],
                              }}
                              transition={{
                                duration: 2 + i * 0.3,
                                repeat: Number.POSITIVE_INFINITY,
                                ease: "easeInOut",
                                delay: i * 0.2,
                              }}
                            />
                          ))}
                        </>
                      )}
                    </Card>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  )
}
