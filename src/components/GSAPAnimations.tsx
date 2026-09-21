'use client'

import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default function GSAPAnimations() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (prefersReducedMotion) {
      // Keep opacity transitions, remove all movement
      gsap.set('.gsap-bg-img', { opacity: 0.3 })
      gsap.set('.gsap-curve', { scaleX: 1 })
      gsap.set('.gsap-sidebar', { opacity: 1 })
      gsap.set('.gsap-reveal', { yPercent: 0 })
      gsap.set('.gsap-scroll-element', { opacity: 1 })
      gsap.set('.gsap-card', { opacity: 1, scale: 1 })
      gsap.set('.gsap-pagination', { opacity: 1 })
      gsap.set('.gsap-fade-up', { opacity: 1 })
      return
    }

    // Initial setup
    gsap.set('.gsap-bg-img', { scale: 1.1, opacity: 0 })
    gsap.set('.gsap-curve', { scaleX: 1.2, transformOrigin: 'left center' })
    gsap.set('.gsap-sidebar', { x: -50, opacity: 0 })
    gsap.set('.gsap-reveal', { yPercent: 100 })
    gsap.set('.gsap-scroll-element', { y: 20, opacity: 0 })
    gsap.set('.gsap-card', { y: 40, opacity: 0, scale: 0.95 })
    gsap.set('.gsap-pagination', { x: 20, opacity: 0 })

    // Initial entrance animation - triggered after loader completes
    const startHeroAnimation = () => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
      tl.to('.gsap-bg-img', { duration: 1.2, scale: 1, opacity: 0.3, ease: 'power2.out' }, 0)
        .to('.gsap-curve', { duration: 1, scaleX: 1, ease: 'power4.inOut' }, 0.15)
        .to('.gsap-sidebar', { duration: 0.8, x: 0, opacity: 1 }, 0.5)
    }

    // Listen for loader completion to start hero animation
    const handleLoaderComplete = () => {
      startHeroAnimation()
    }

    window.addEventListener('loaderComplete', handleLoaderComplete)

    // Main content scroll trigger
    ScrollTrigger.create({
      trigger: '#main-content',
      start: 'top 85%',
      onEnter: () => {
        gsap.to('.gsap-reveal', { duration: 1.2, yPercent: 0, stagger: 0.15, ease: 'expo.out' })
        gsap.to('.gsap-scroll-element', { duration: 1, y: 0, opacity: 1, stagger: 0.1, delay: 0.4 })
        gsap.to('.gsap-card', { duration: 1.2, y: 0, opacity: 1, scale: 1, ease: 'back.out(1.2)', delay: 0.8 })
        gsap.to('.gsap-pagination', { duration: 1, x: 0, opacity: 1, delay: 1 })
      }
    })

    // Batch scroll animations for other elements
    gsap.set('.gsap-fade-up', { y: 40, opacity: 0 })
    ScrollTrigger.batch('.gsap-fade-up', {
      onEnter: batch => gsap.to(batch, { opacity: 1, y: 0, stagger: 0.15, duration: 1.2, ease: 'power3.out', overwrite: true }),
      start: 'top 85%'
    })

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
      window.removeEventListener('loaderComplete', handleLoaderComplete)
    }
  }, [])

  return null
}
