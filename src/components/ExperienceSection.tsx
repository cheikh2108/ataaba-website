'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

interface ExperienceStep {
  number: string
  title: string
  description: string
  image: string
}

export default function ExperienceSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [activeStep, setActiveStep] = useState(0)

  const steps: ExperienceStep[] = [
    {
      number: '01',
      title: 'Expertise Confirmée',
      description: 'Une équipe multidisciplinaire mobilisant des compétences complémentaires, portée par plus de 14 ans d\'expérience professionnelle du fondateur.',
      image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=800&auto=format&fit=crop'
    },
    {
      number: '02',
      title: 'Approche Agile',
      description: 'Méthodologie transparente et flexible qui s\'adapte à vos besoins spécifiques et garantit une livraison efficace.',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop'
    },
    {
      number: '03',
      title: 'Solutions Sur Mesure',
      description: 'Chaque projet est unique. Nous concevons des solutions digitales évolutives adaptées à votre contexte et vos objectifs.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop'
    },
    {
      number: '04',
      title: 'Accompagnement Continu',
      description: 'Support post-déploiement avec formation des équipes, maintenance et optimisation pour garantir votre succès durable.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop'
    },
  ]

  useEffect(() => {
    if (typeof window === 'undefined') return

    gsap.registerPlugin(ScrollTrigger)

    const section = sectionRef.current
    if (!section) return

    // Check for reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) return

    // Initialize first image as active
    const images = section.querySelectorAll('[data-exp-img]')
    if (images[0]) {
      images[0].classList.add('active')
    }

    // Create ScrollTrigger for each step
    const triggers = steps.map((_, index) => {
      const stepElement = section.querySelector(`[data-step="${index}"]`)
      if (!stepElement) return null

      return ScrollTrigger.create({
        trigger: stepElement,
        start: 'top center',
        end: 'bottom center',
        onEnter: () => {
          if (index !== activeStep) {
            // Remove active class from all images
            images.forEach(img => img.classList.remove('active'))
            // Add active class to current image
            const currentImg = section.querySelector(`[data-exp-img="${index}"]`)
            if (currentImg) {
              currentImg.classList.add('active')
            }
            setActiveStep(index)
          }
        },
        onEnterBack: () => {
          if (index !== activeStep) {
            // Remove active class from all images
            images.forEach(img => img.classList.remove('active'))
            // Add active class to current image
            const currentImg = section.querySelector(`[data-exp-img="${index}"]`)
            if (currentImg) {
              currentImg.classList.add('active')
            }
            setActiveStep(index)
          }
        },
      })
    })

    return () => {
      triggers.forEach(trigger => trigger?.kill())
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative px-4 sm:px-6 md:pl-32 lg:pl-48 md:pr-6 lg:pr-12 py-12 md:py-20"
    >
      <div className="max-w-6xl border-t border-zinc-900 pt-16">
        {/* Header */}
        <div className="mb-16 max-w-3xl">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-xs tracking-widest text-cyan-400 uppercase font-light">
              NOTRE APPROCHE
            </span>
            <div className="h-[1px] w-12 bg-cyan-400/30"></div>
          </div>
          <h2 className="tracking-tighter text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[0.9] text-zinc-100 mb-6 select-none font-thin">
            <span className="italic font-extralight text-zinc-500">Quatre piliers.</span>
            <br />
            C'EST TOUTE NOTRE MÉTHODOLOGIE.
          </h2>
        </div>

        {/* Experience Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-20 items-start">
          {/* Sticky Media Container - Hidden on mobile, shown on desktop */}
          <div className="hidden lg:block relative lg:sticky lg:top-[14vh] h-[50vh] lg:h-[72vh] rounded-sm overflow-hidden bg-zinc-950 order-2 lg:order-1">
            {steps.map((step, index) => (
              <div
                key={index}
                data-exp-img={index}
                className="exp-img absolute inset-0 w-full h-full opacity-0"
                style={{
                  transition: 'opacity 900ms cubic-bezier(0.22, 1, 0.36, 1), transform 6s linear',
                  transform: 'scale(1.04)',
                }}
              >
                <Image
                  src={step.image}
                  alt={step.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority={index === 0}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#09090B] via-transparent to-transparent opacity-60" />

                {/* Bottom caption */}
                <div className="absolute left-6 bottom-5 z-10">
                  <span className="text-xs uppercase tracking-[0.18em] text-cyan-400 font-mono font-semibold">
                    {step.number} — {step.title}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Steps Container */}
          <div className="flex flex-col order-1 lg:order-2">
            {steps.map((step, index) => (
              <div
                key={index}
                data-step={index}
                className={`estep min-h-[64vh] flex flex-col justify-center border-t border-zinc-800/50 py-8 first:border-t-0 transition-opacity duration-500 ${
                  index === activeStep ? 'opacity-100' : 'lg:opacity-40'
                }`}
              >
                {/* Number */}
                <div className="text-5xl md:text-7xl text-cyan-400 font-thin tracking-tighter leading-none mb-4">
                  {step.number}
                </div>

                {/* Title */}
                <h3 className="text-3xl md:text-4xl font-thin tracking-tight text-zinc-100 mb-4 leading-tight">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-sm md:text-base text-zinc-400 font-thin leading-relaxed max-w-md mb-6">
                  {step.description}
                </p>

                {/* Mobile Image - shown only on mobile */}
                <div className="lg:hidden relative h-64 rounded-lg overflow-hidden bg-zinc-950 mt-4">
                  <Image
                    src={step.image}
                    alt={step.title}
                    fill
                    className="object-cover"
                    sizes="100vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#09090B] via-transparent to-transparent opacity-60" />
                  <div className="absolute left-4 bottom-4 z-10">
                    <span className="text-xs uppercase tracking-[0.18em] text-cyan-400 font-mono font-semibold">
                      {step.number} — {step.title}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Inline styles for active state */}
      <style jsx>{`
        .exp-img.active {
          opacity: 1 !important;
          transform: scale(1.1) !important;
        }
      `}</style>
    </section>
  )
}
