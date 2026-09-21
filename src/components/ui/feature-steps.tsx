"use client"

import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { cn } from "@/lib/utils"

interface Feature {
  step: string
  title?: string
  content: string
  image: string
}

interface FeatureStepsProps {
  features: Feature[]
  className?: string
  title?: string
  autoPlayInterval?: number
  imageHeight?: string
}

export function FeatureSteps({
  features,
  className,
  title = "Comment ça marche",
  autoPlayInterval = 3000,
  imageHeight = "h-[400px]",
}: FeatureStepsProps) {
  const [currentFeature, setCurrentFeature] = useState(0)
  const [progress, setProgress] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    if (isPaused) return

    const timer = setInterval(() => {
      if (progress < 100) {
        setProgress((prev) => prev + 100 / (autoPlayInterval / 100))
      } else {
        setCurrentFeature((prev) => (prev + 1) % features.length)
        setProgress(0)
      }
    }, 100)

    return () => clearInterval(timer)
  }, [progress, features.length, autoPlayInterval, isPaused])

  return (
    <div className={cn("relative z-10 pl-24 sm:pl-28 md:pl-40 lg:pl-48 pr-6 sm:pr-10 md:pr-24 lg:pr-32 pb-32 pt-10", className)}>
      <div className="max-w-6xl border-t border-zinc-900 pt-16">
        <div className="gsap-fade-up flex items-center gap-3 mb-10">
          <span className="text-xs tracking-widest text-cyan-400 uppercase font-light">
            PROCESSUS
          </span>
          <div className="h-[1px] w-12 bg-cyan-400/30"></div>
        </div>

        <div className="flex items-center justify-between mb-16">
          <h2 className="gsap-fade-up tracking-tighter text-4xl md:text-6xl leading-[0.9] text-zinc-100 select-none font-thin">
            <span className="italic font-extralight text-zinc-500">{title.split(' ')[0]}</span>
            <br />
            {title.split(' ').slice(1).join(' ').toUpperCase()}
          </h2>

          <button
            onClick={() => setIsPaused(!isPaused)}
            className="flex items-center justify-center w-11 h-11 rounded-full border border-zinc-800 bg-zinc-900/50 hover:bg-zinc-800 hover:border-cyan-400/50 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-[#09090B]"
            aria-label={isPaused ? 'Reprendre le défilement automatique' : 'Mettre en pause le défilement automatique'}
          >
            {isPaused ? (
              <svg className="w-5 h-5 text-cyan-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z"/>
              </svg>
            ) : (
              <svg className="w-5 h-5 text-cyan-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"/>
              </svg>
            )}
          </button>
        </div>

        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-10 lg:gap-16">
          <div className="order-2 lg:order-1 space-y-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="flex items-start gap-6 cursor-pointer group"
                initial={{ opacity: 0.3 }}
                animate={{ opacity: index === currentFeature ? 1 : 0.4 }}
                transition={{ duration: 0.3 }}
                onClick={() => {
                  setCurrentFeature(index)
                  setProgress(0)
                }}
              >
                <motion.div
                  className={cn(
                    "flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center border-2 transition-all duration-300",
                    index === currentFeature
                      ? "bg-cyan-400 border-cyan-400 text-[#09090B] scale-110"
                      : index < currentFeature
                      ? "bg-zinc-900 border-cyan-400/50 text-cyan-400"
                      : "bg-zinc-900 border-zinc-800 text-zinc-500"
                  )}
                >
                  {index < currentFeature ? (
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  ) : (
                    <span className="text-lg font-mono font-light">{(index + 1).toString().padStart(2, '0')}</span>
                  )}
                </motion.div>

                <div className="flex-1 pt-1">
                  <h3 className={cn(
                    "text-xl md:text-2xl font-light mb-2 transition-colors duration-300",
                    index === currentFeature ? "text-zinc-100" : "text-zinc-400 group-hover:text-zinc-200"
                  )}>
                    {feature.title || feature.step}
                  </h3>
                  <p className={cn(
                    "text-sm md:text-base font-thin transition-colors duration-300",
                    index === currentFeature ? "text-zinc-300" : "text-zinc-500"
                  )}>
                    {feature.content}
                  </p>

                </div>
              </motion.div>
            ))}
          </div>

          <div className="order-1 lg:order-2 relative h-[300px] md:h-[400px] lg:h-[500px] overflow-hidden rounded-xl border border-zinc-800">
            <AnimatePresence mode="wait">
              {features.map(
                (feature, index) =>
                  index === currentFeature && (
                    <motion.div
                      key={index}
                      className="absolute inset-0 rounded-xl overflow-hidden"
                      initial={{ y: 100, opacity: 0, scale: 1.1 }}
                      animate={{ y: 0, opacity: 1, scale: 1 }}
                      exit={{ y: -100, opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                    >
                      <Image
                        src={feature.image}
                        alt={feature.title || feature.step}
                        className="w-full h-full object-cover"
                        width={800}
                        height={600}
                        priority={index === 0}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#09090B] via-[#09090B]/20 to-transparent" />

                      {/* Floating badge */}
                      <motion.div
                        className="absolute top-6 right-6 px-4 py-2 rounded-lg bg-zinc-900/80 backdrop-blur-sm border border-zinc-800"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                      >
                        <span className="text-xs font-mono text-cyan-400">
                          {(index + 1).toString().padStart(2, '0')} / {features.length.toString().padStart(2, '0')}
                        </span>
                      </motion.div>
                    </motion.div>
                  ),
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  )
}
