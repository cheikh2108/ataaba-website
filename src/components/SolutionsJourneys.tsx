'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import IconifyIcon from './IconifyIcon'

interface Journey {
  id: string
  sector: string
  title: string
  description: string
  icon: string
  category: string
  count: number
  image: string
}

export default function SolutionsJourneys() {
  const pinRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)
  const barRef = useRef<HTMLElement>(null)
  const [isMobile, setIsMobile] = useState(false)

  const journeys: Journey[] = [
    {
      id: '01',
      sector: 'Entreprises & Projets',
      title: 'Gestion de Projets & RH',
      description: 'Planora360, GoodRH, Finora360, SatisClient',
      icon: 'solar:case-round-bold',
      category: 'ENTREPRISE',
      count: 4,
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800&auto=format&fit=crop'
    },
    {
      id: '02',
      sector: 'Commerces & PME',
      title: 'Gestion Commerciale',
      description: 'PayTrack, NAATALIX - Ventes, stocks, encaissements',
      icon: 'solar:cart-large-bold',
      category: 'COMMERCE',
      count: 2,
      image: 'https://images.unsplash.com/photo-1556742111-a301076d9d18?q=80&w=800&auto=format&fit=crop'
    },
    {
      id: '03',
      sector: 'Santé',
      title: 'Gestion Hospitalière',
      description: 'SALIHA HEALTH - Cliniques, cabinets médicaux, structures paramédicales',
      icon: 'solar:health-bold',
      category: 'SANTÉ',
      count: 1,
      image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=800&auto=format&fit=crop'
    },
    {
      id: '04',
      sector: 'Éducation',
      title: 'Gestion Scolaire',
      description: 'SALIHA EDUCATION, EduKids - Élèves, notes, pédagogie',
      icon: 'solar:book-bold',
      category: 'ÉDUCATION',
      count: 2,
      image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=800&auto=format&fit=crop'
    },
    {
      id: '05',
      sector: 'Immobilier & BTP',
      title: 'Investissement & Construction',
      description: 'ImmoClair, ProjetInvest, SafeBuild',
      icon: 'solar:home-2-bold',
      category: 'IMMOBILIER',
      count: 3,
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=800&auto=format&fit=crop'
    },
    {
      id: '06',
      sector: 'Événementiel',
      title: 'Gestion d\'Événements',
      description: 'SéminairePro, Ñewal - Formations, invitations digitales',
      icon: 'solar:calendar-mark-bold',
      category: 'ÉVÉNEMENTS',
      count: 2,
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=800&auto=format&fit=crop'
    },
    {
      id: '07',
      sector: 'Restauration',
      title: 'Services Alimentaires',
      description: 'Teranga Food - Gestion digitale de la restauration',
      icon: 'solar:chef-hat-bold',
      category: 'FOOD',
      count: 1,
      image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=800&auto=format&fit=crop'
    },
    {
      id: '08',
      sector: 'Communautés',
      title: 'Services & Mise en Relation',
      description: 'TFC Supporters, BrancheMoi, JëfBaraka',
      icon: 'solar:users-group-rounded-bold',
      category: 'SOCIAL',
      count: 3,
      image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=800&auto=format&fit=crop'
    },
    {
      id: '09',
      sector: 'Transport',
      title: 'Mobilité Digitale',
      description: 'YOBBU - Mise en relation chauffeurs et clients',
      icon: 'solar:bus-bold',
      category: 'TRANSPORT',
      count: 1,
      image: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=800&auto=format&fit=crop'
    }
  ]

  useEffect(() => {
    if (typeof window === 'undefined') return

    gsap.registerPlugin(ScrollTrigger)

    // Check mobile
    const mediaQuery = window.matchMedia('(max-width: 860px)')
    setIsMobile(mediaQuery.matches)

    const handleResize = () => setIsMobile(mediaQuery.matches)
    mediaQuery.addEventListener('change', handleResize)

    const pin = pinRef.current
    const track = trackRef.current
    const bar = barRef.current

    if (!pin || !track || isMobile) {
      return () => mediaQuery.removeEventListener('change', handleResize)
    }

    // Check for reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) return () => mediaQuery.removeEventListener('change', handleResize)

    // Calculate overflow
    const getDist = () => Math.max(0, track.scrollWidth - window.innerWidth)

    // Main horizontal scroll animation
    const moveTimeline = gsap.to(track, {
      x: () => -getDist(),
      ease: 'none',
      scrollTrigger: {
        trigger: pin.parentElement,
        start: 'top top',
        end: () => `+=${getDist()}`,
        pin: pin,
        scrub: 1,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          if (bar) {
            gsap.set(bar, { scaleX: self.progress })
          }
        }
      }
    })

    // Card animations
    const cards = track.querySelectorAll('.journey-card')
    cards.forEach((card) => {
      // Parallax on images
      const img = card.querySelector('.journey-img')
      if (img) {
        gsap.fromTo(
          img,
          { xPercent: -4 },
          {
            xPercent: 4,
            ease: 'none',
            scrollTrigger: {
              trigger: card,
              containerAnimation: moveTimeline,
              start: 'left right',
              end: 'right left',
              scrub: true
            }
          }
        )
      }
    })

    return () => {
      mediaQuery.removeEventListener('change', handleResize)
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.vars.trigger === pin.parentElement || trigger.vars.containerAnimation === moveTimeline) {
          trigger.kill()
        }
      })
    }
  }, [isMobile])

  return (
    <section className={`relative bg-[#09090B] ${isMobile ? 'mobile' : ''}`}>
      {/* Horizontal scroll: mobile = swipe, desktop = GSAP pinned */}
      <div ref={pinRef} className={isMobile ? 'py-8' : 'h-[100svh] overflow-hidden flex items-center'}>
        <div
          ref={trackRef}
          className={`flex gap-6 md:gap-10 pl-4 sm:pl-6 md:pl-32 lg:pl-48 pr-4 sm:pr-6 md:pr-12 items-stretch will-change-transform ${
            isMobile ? 'overflow-x-auto snap-x snap-mandatory pb-5' : ''
          }`}
          style={isMobile ? { WebkitOverflowScrolling: 'touch' } : {}}
        >
          {/* Intro Panel */}
          <div className={`flex-shrink-0 w-[85vw] md:w-[560px] flex flex-col justify-center ${isMobile ? 'snap-center' : ''}`}>
            <div className="flex items-center gap-3 mb-5">
              <span className="text-xs tracking-widest text-cyan-400/70 uppercase font-light">
                / NOS SOLUTIONS
              </span>
              <div className="h-[1px] w-12 bg-cyan-400/30"></div>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-6xl lg:text-7xl font-thin tracking-tighter leading-[0.95] text-zinc-100 mb-4 md:mb-6">
              9 secteurs.<br />
              <span className="text-zinc-500 italic font-extralight">19 solutions.</span>
            </h2>
            <p className="text-sm md:text-base text-zinc-400 leading-relaxed max-w-md font-thin">
              Des solutions digitales adaptées aux réalités et besoins de chaque secteur d'activité.
            </p>
          </div>

          {/* Journey Cards */}
          {journeys.map((journey, index) => (
            <article
              key={journey.id}
              className={`journey-card flex-shrink-0 w-[80vw] md:w-[440px] relative flex flex-col justify-end ${
                isMobile ? 'snap-center' : ''
              }`}
            >
              {/* Frame */}
              <div className="relative w-full aspect-[3/4] overflow-hidden rounded-sm bg-zinc-950">
                <Image
                  src={journey.image}
                  alt={journey.title}
                  fill
                  className="journey-img object-cover"
                  style={{ willChange: 'transform' }}
                  sizes="(max-width: 1024px) 80vw, 440px"
                  priority={index < 6}
                  loading="eager"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#09090B]/90" />

                {/* Index badge */}
                <span className="absolute top-3 md:top-4 left-4 md:left-6 z-10 text-[0.65rem] md:text-xs tracking-wider text-zinc-300/70 font-mono font-semibold">
                  {journey.id} / 09
                </span>

                {/* Category badge */}
                <div className="absolute top-3 md:top-4 right-4 md:right-6 z-10 px-2.5 md:px-3 py-0.5 md:py-1 rounded bg-cyan-400/10 backdrop-blur-sm border border-cyan-400/30">
                  <span className="text-[0.6rem] md:text-[0.65rem] tracking-widest text-cyan-400 font-semibold">
                    {journey.category}
                  </span>
                </div>

                {/* Meta - overlay at bottom */}
                <div className="absolute left-4 md:left-6 right-4 md:right-6 bottom-4 md:bottom-6 z-10">
                  <div className="flex items-center gap-2 mb-2">
                    <IconifyIcon icon={journey.icon} className="text-cyan-400 text-base md:text-lg" />
                    <p className="text-[0.65rem] md:text-[0.7rem] tracking-[0.18em] text-cyan-400/90 uppercase font-semibold">
                      {journey.sector}
                    </p>
                  </div>
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-light tracking-tight text-zinc-100 mb-1.5 md:mb-2">
                    {journey.title}
                  </h3>
                  <p className="text-xs md:text-sm text-zinc-300/80 font-light leading-relaxed line-clamp-2">
                    {journey.description}
                  </p>
                  <div className="mt-2 md:mt-3 flex items-center gap-2">
                    <div className="h-[1px] w-6 md:w-8 bg-cyan-400/60"></div>
                    <span className="text-[0.65rem] md:text-xs text-cyan-400/80 font-mono">
                      {journey.count} {journey.count > 1 ? 'solutions' : 'solution'}
                    </span>
                  </div>
                </div>
              </div>
            </article>
          ))}

          {/* Outro Panel */}
          <div className={`flex-shrink-0 w-[85vw] md:w-[560px] flex flex-col justify-center ${isMobile ? 'snap-center' : ''}`}>
            <div className="flex items-center gap-3 mb-5">
              <span className="text-xs tracking-widest text-cyan-400/70 uppercase font-light">
                / PARLONS-EN
              </span>
              <div className="h-[1px] w-12 bg-cyan-400/30"></div>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-6xl lg:text-7xl font-thin tracking-tighter leading-[0.95] text-zinc-100 mb-6 md:mb-8">
              Vous avez un besoin?<br />
              <span className="text-zinc-500 italic font-extralight">Construisons la solution adaptée.</span>
            </h2>
            <a
              href="/contact"
              className="inline-flex items-center gap-3 px-6 md:px-8 py-3 md:py-4 rounded-lg bg-cyan-400 text-[#09090B] hover:bg-cyan-500 transition-all duration-200 active:scale-[0.97] self-start group"
            >
              <span className="text-xs md:text-sm tracking-widest font-semibold uppercase">
                Discutons de votre projet
              </span>
              <IconifyIcon
                icon="solar:arrow-right-linear"
                className="text-lg group-hover:translate-x-1 transition-transform duration-200"
              />
            </a>
          </div>
        </div>

        {/* Progress hint (desktop only) */}
        {!isMobile && (
          <div className="hidden lg:flex absolute bottom-8 right-6 md:right-12 z-20 text-zinc-500 text-[0.65rem] tracking-[0.26em] uppercase items-center gap-3">
            <span>Scroll pour explorer</span>
            <span className="w-11 h-[1px] bg-zinc-800 relative overflow-hidden">
              <i
                ref={barRef}
                className="absolute inset-0 bg-cyan-400 origin-left"
                style={{ transform: 'scaleX(0)' }}
              />
            </span>
          </div>
        )}
      </div>
    </section>
  )
}
