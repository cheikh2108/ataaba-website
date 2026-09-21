'use client'

import { useState } from 'react'
import Image from 'next/image'
import IconifyIcon from './IconifyIcon'
import StatusBadge from './StatusBadge'
import type { Solution } from '@/data/solutions'

interface SolutionPortfolioProps {
  solutions: Solution[]
  sectorName: string
}

export default function SolutionPortfolio({ solutions, sectorName }: SolutionPortfolioProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const currentSolution = solutions[currentIndex]

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % solutions.length)
  }

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + solutions.length) % solutions.length)
  }

  return (
    <div className="relative w-full">
      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-8 lg:gap-16 items-start">
        {/* Image Section */}
        <div className="relative aspect-[4/3] lg:aspect-[16/10] overflow-hidden rounded-lg bg-zinc-900 group">
          {currentSolution.image ? (
            <>
              <Image
                src={currentSolution.image}
                alt={currentSolution.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 60vw"
                priority
              />
              {/* Overlay gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#09090B]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </>
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <IconifyIcon
                icon={currentSolution.icon}
                className="text-zinc-700 text-8xl"
              />
            </div>
          )}

          {/* Navigation Arrows */}
          {solutions.length > 1 && (
            <div className="absolute top-1/2 -translate-y-1/2 left-4 right-4 flex justify-between pointer-events-none">
              <button
                onClick={goToPrev}
                className="size-12 rounded-full bg-zinc-900/80 backdrop-blur-sm border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-cyan-400 hover:border-cyan-500/50 transition-all duration-300 pointer-events-auto opacity-0 group-hover:opacity-100"
                aria-label="Projet précédent"
              >
                <IconifyIcon icon="solar:alt-arrow-left-linear" className="text-xl" />
              </button>
              <button
                onClick={goToNext}
                className="size-12 rounded-full bg-zinc-900/80 backdrop-blur-sm border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-cyan-400 hover:border-cyan-500/50 transition-all duration-300 pointer-events-auto opacity-0 group-hover:opacity-100"
                aria-label="Projet suivant"
              >
                <IconifyIcon icon="solar:alt-arrow-right-linear" className="text-xl" />
              </button>
            </div>
          )}

          {/* Dot indicator */}
          {solutions.length > 1 && (
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2">
              {solutions.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-1 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'w-8 bg-cyan-400'
                      : 'w-1 bg-zinc-600 hover:bg-zinc-500'
                  }`}
                  aria-label={`Aller au projet ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>

        {/* Info Section */}
        <div className="flex flex-col justify-center lg:sticky lg:top-32">
          {/* Number */}
          <div className="flex items-center gap-4 mb-6">
            <span className="text-5xl md:text-6xl font-thin text-zinc-800 select-none font-mono">
              {String(currentIndex + 1).padStart(2, '0')}
            </span>
            <StatusBadge status={currentSolution.status} />
          </div>

          {/* Title */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-thin tracking-tight text-zinc-100 mb-4 leading-none">
            {currentSolution.name}
          </h2>

          {/* Year & Sector */}
          {(currentSolution.year || sectorName) && (
            <div className="flex items-center gap-2 mb-6 text-sm text-zinc-500 font-light">
              {currentSolution.year && <span>{currentSolution.year}</span>}
              {currentSolution.year && sectorName && (
                <span className="text-zinc-700">·</span>
              )}
              {sectorName && <span>{sectorName}</span>}
            </div>
          )}

          {/* Tagline */}
          {currentSolution.tagline && (
            <p className="text-lg md:text-xl text-zinc-400 font-light leading-relaxed mb-8 italic">
              {currentSolution.tagline}
            </p>
          )}

          {/* Description */}
          <p className="text-base text-zinc-500 font-thin leading-relaxed mb-8">
            {currentSolution.description}
          </p>

          {/* Features */}
          {currentSolution.features && currentSolution.features.length > 0 && (
            <div className="mb-10">
              <div className="flex flex-wrap gap-2">
                {currentSolution.features.map((feature, idx) => (
                  <div
                    key={idx}
                    className="px-3 py-1.5 rounded-full bg-zinc-900/50 border border-zinc-800/50 text-xs text-zinc-500 uppercase tracking-wider font-mono"
                  >
                    {feature}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* CTA */}
          {currentSolution.url ? (
            <a
              href={currentSolution.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 py-3.5 rounded-lg bg-cyan-400 text-[#09090B] hover:bg-cyan-500 transition-colors duration-300 group w-fit"
            >
              <span className="text-sm tracking-widest font-semibold uppercase">
                Visiter le site
              </span>
              <IconifyIcon
                icon="solar:arrow-right-up-linear"
                className="text-lg group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
              />
            </a>
          ) : (
            <div className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-amber-500/10 border border-amber-500/30 w-fit">
              <IconifyIcon icon="solar:code-circle-linear" className="text-sm text-amber-500" />
              <span className="text-sm font-light text-amber-500/80">
                Bientôt disponible
              </span>
            </div>
          )}

          {/* Navigation counter (mobile) */}
          {solutions.length > 1 && (
            <div className="mt-8 lg:hidden flex items-center justify-between border-t border-zinc-800 pt-6">
              <button
                onClick={goToPrev}
                className="flex items-center gap-2 text-zinc-400 hover:text-cyan-400 transition-colors"
              >
                <IconifyIcon icon="solar:alt-arrow-left-linear" className="text-xl" />
                <span className="text-sm font-light">Précédent</span>
              </button>
              <span className="text-sm text-zinc-600 font-mono">
                {currentIndex + 1} / {solutions.length}
              </span>
              <button
                onClick={goToNext}
                className="flex items-center gap-2 text-zinc-400 hover:text-cyan-400 transition-colors"
              >
                <span className="text-sm font-light">Suivant</span>
                <IconifyIcon icon="solar:alt-arrow-right-linear" className="text-xl" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
