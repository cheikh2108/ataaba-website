'use client'

import { useEffect, useRef } from 'react'

export default function ScrollProgress() {
  const progressRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0

      if (progressRef.current) {
        progressRef.current.style.transform = `scaleX(${progress / 100})`
      }
    }

    window.addEventListener('scroll', updateProgress, { passive: true })
    updateProgress()

    return () => window.removeEventListener('scroll', updateProgress)
  }, [])

  return (
    <div className="fixed top-0 inset-x-0 z-[97] h-[1px] bg-zinc-900/30 pointer-events-none">
      <div
        ref={progressRef}
        className="h-full bg-gradient-to-r from-cyan-500 to-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.6)]"
        style={{ transform: 'scaleX(0)', transformOrigin: 'left center' }}
      />
    </div>
  )
}
