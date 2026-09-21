'use client'

import { useEffect, useRef } from 'react'
import IconifyIcon from './IconifyIcon'

interface SystemCardProps {
  isMobile?: boolean
}

export default function SystemCard({ isMobile = false }: SystemCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const progressBars = cardRef.current?.querySelectorAll('.card-progress-fill')
    const progressValues = cardRef.current?.querySelectorAll('.card-progress-value')

    if (!progressBars || !progressValues) return

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          progressBars.forEach((bar) => {
            const target = Number((bar as HTMLElement).dataset.progressTarget || 92)
            ;(bar as HTMLElement).style.width = target + '%'
            bar.classList.add('is-filling')
            setTimeout(() => bar.classList.remove('is-filling'), 1700)
          })

          progressValues.forEach((value) => {
            const target = Number((value as HTMLElement).dataset.progressTarget || 92)
            let current = 0
            const increment = target / 60
            const timer = setInterval(() => {
              current += increment
              if (current >= target) {
                value.textContent = target + '%'
                value.classList.remove('is-counting')
                clearInterval(timer)
              } else {
                value.textContent = Math.round(current) + '%'
                value.classList.add('is-counting')
              }
            }, 22)
          })

          observer.unobserve(entry.target)
        }
      })
    })

    if (cardRef.current) observer.observe(cardRef.current)

    return () => observer.disconnect()
  }, [])

  const containerClass = isMobile
    ? "gsap-card system-card relative z-30 mt-12 p-[1px] rounded-lg group overflow-hidden bg-gradient-to-br from-cyan-500/40 via-zinc-800/80 to-transparent shadow-[0_20px_40px_-15px_rgba(0,229,255,0.08)] backdrop-blur-xl block xl:hidden w-full max-w-[22rem] sm:max-w-sm"
    : "gsap-card system-card absolute top-[calc(100vh-16rem)] right-24 z-30 p-[1px] rounded-lg group overflow-hidden bg-gradient-to-br from-cyan-500/40 via-zinc-800/80 to-transparent shadow-[0_20px_40px_-15px_rgba(0,229,255,0.08)] backdrop-blur-xl hidden xl:block"

  return (
    <div ref={cardRef} className={containerClass}>
      <div className="bg-[#030303]/95 w-80 h-full p-6 flex flex-col gap-5 relative z-10 rounded-lg">
        <div className="flex justify-between items-center w-full">
          <div className="flex items-center gap-2">
            <div className="card-status-dot w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(0,229,255,0.8)]"></div>
            <span className="text-xs tracking-widest text-cyan-400 uppercase font-light">
              ACTIVE
            </span>
          </div>
          <span className="text-xs tracking-widest text-zinc-500 uppercase cursor-pointer hover:text-zinc-100 transition-colors font-light">
            VIEW ALL
          </span>
        </div>

        <div className="flex gap-4 items-center">
          <div className="card-image w-20 h-16 rounded bg-gradient-to-br from-zinc-900 to-zinc-950 border border-zinc-800 flex items-center justify-center">
            <IconifyIcon icon="solar:chart-2-linear" className="text-2xl text-cyan-400/50" />
          </div>
          <div className="flex flex-col gap-1.5">
            <h3 className="text-sm tracking-wide text-zinc-100 font-light uppercase">
              PLATEFORME ATAABA
            </h3>
            <p className="text-xs text-zinc-500 font-thin">Gestion de Projets</p>
            <p className="text-xs text-zinc-600 tracking-widest font-thin font-mono">
              REACT • NODE.JS
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-2 w-full mt-2">
          <div className="flex justify-between items-center text-xs text-zinc-500 tracking-widest uppercase font-thin font-mono">
            <span>AVANCEMENT PROJET</span>
            <span className="card-progress-value text-zinc-200" data-progress-target="78">
              0%
            </span>
          </div>
          <div className="w-full h-[2px] bg-zinc-800 relative rounded-full">
            <div
              className="card-progress-fill absolute left-0 top-0 h-full bg-gradient-to-r from-cyan-600 to-cyan-400 rounded-full shadow-[0_0_10px_rgba(0,229,255,0.4)]"
              data-progress-target="78"
            ></div>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0 pointer-events-none rounded-lg"></div>
    </div>
  )
}
