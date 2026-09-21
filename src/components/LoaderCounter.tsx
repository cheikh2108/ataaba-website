'use client'

import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import Image from 'next/image'

export default function LoaderCounter() {
  const loaderRef = useRef<HTMLDivElement>(null)
  const counterRef = useRef<HTMLParagraphElement>(null)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // Prevent scroll during loader
    document.body.style.overflow = 'hidden'

    const counter = { value: 0 }
    const tl = gsap.timeline({
      onComplete: () => {
        // Mark as done
        window.__ataaba_intro_done = true

        // Fade out + slide up loader simultaneously
        gsap.to(loaderRef.current, {
          yPercent: -100,
          opacity: 0,
          duration: 1,
          ease: 'power2.inOut',
          onStart: () => {
            // Dispatch event at START of loader exit to trigger hero animations
            // This creates a smooth overlap between loader exit and hero entrance
            window.dispatchEvent(new CustomEvent('loaderComplete'))
          },
          onComplete: () => {
            setIsLoaded(true)
            document.body.style.overflow = ''
          }
        })
      }
    })

    // Count from 0 to 100 - accelerates toward end for excitement
    tl.to(counter, {
      value: 100,
      duration: 1.8,
      ease: 'power3.in',
      onUpdate: () => {
        if (counterRef.current) {
          counterRef.current.textContent = Math.round(counter.value).toString().padStart(3, '0')
        }
      }
    })

    // Fail-safe: force complete after 3s
    const failsafe = setTimeout(() => {
      if (!window.__ataaba_intro_done) {
        console.warn('[ATAABA] Loader fail-safe triggered')
        window.__ataaba_intro_done = true
        window.dispatchEvent(new CustomEvent('loaderComplete'))
        setIsLoaded(true)
        if (loaderRef.current) {
          loaderRef.current.style.display = 'none'
        }
        document.body.style.overflow = ''
      }
    }, 3000)

    return () => {
      clearTimeout(failsafe)
      document.body.style.overflow = ''
    }
  }, [])

  return (
    <div
      ref={loaderRef}
      className="fixed inset-0 z-[99] bg-[#09090B] text-zinc-100 flex flex-col justify-end"
      style={{ display: isLoaded ? 'none' : 'flex' }}
    >
      <div className="px-4 sm:px-6 md:px-12 pb-8 md:pb-14 flex items-center justify-between border-t border-cyan-400/20 pt-5 md:pt-6 mx-4 sm:mx-6 md:mx-12 gap-4">
        <div className="relative w-24 h-24 sm:w-28 sm:h-28 md:w-36 md:h-36 flex-shrink-0">
          <Image
            src="/logo-vertical.png"
            alt="ATAABA EXPERTISE"
            fill
            className="object-contain"
            sizes="(max-width: 640px) 96px, (max-width: 768px) 112px, 144px"
            priority
          />
        </div>
        <p
          ref={counterRef}
          className="text-4xl sm:text-5xl md:text-7xl font-thin tracking-tight tabular-nums leading-none text-cyan-400"
        >
          000
        </p>
      </div>
    </div>
  )
}

// Type augmentation for window
declare global {
  interface Window {
    __ataaba_intro_done?: boolean
  }
}
