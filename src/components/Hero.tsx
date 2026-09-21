'use client'

import IconifyIcon from './IconifyIcon'

export default function Hero() {
  return (
    <section className="flex-1 flex flex-col justify-start pt-24 md:pt-10 px-4 sm:px-6 md:pl-32 lg:pl-48 md:pr-6 lg:pr-12 max-w-5xl relative z-20 min-h-screen pb-[10vh]" id="main-content">
      <div className="gsap-scroll-element flex items-center gap-3 mb-8">
        <span className="text-xs tracking-widest text-cyan-400 uppercase font-light">
          GESTION DE PROJETS
        </span>
        <IconifyIcon icon="solar:close-linear" className="text-zinc-400 text-xs" />
        <span className="text-xs tracking-widest text-cyan-400 uppercase font-light">
          SOLUTIONS DIGITALES
        </span>
      </div>

      <h1 className="tracking-tighter text-4xl sm:text-5xl md:text-7xl lg:text-8xl leading-[0.9] text-zinc-100 mb-6 md:mb-8 select-none font-thin">
        <div className="gsap-reveal-container flex flex-col">
          <div className="overflow-hidden py-2">
            <span className="gsap-reveal inline-block">ATAABA</span>
          </div>
          <div className="overflow-hidden py-2">
            <span className="gsap-reveal inline-block">EXPERTISE</span>
          </div>
          <div className="overflow-hidden py-2">
            <span className="gsap-reveal inline-block italic font-extralight text-zinc-400">
              INNOVATION
            </span>
          </div>
        </div>
      </h1>

      <div className="gsap-scroll-element flex items-center gap-4 mb-8 w-64 opacity-50">
        <div className="h-[1px] flex-1 bg-gradient-to-r from-zinc-700 to-transparent"></div>
        <IconifyIcon icon="solar:chart-2-linear" className="text-cyan-400 text-sm" />
        <div className="h-[1px] flex-1 bg-gradient-to-l from-zinc-700 to-transparent"></div>
      </div>

      <p className="gsap-scroll-element text-sm md:text-base text-zinc-400 max-w-[22rem] sm:max-w-md leading-relaxed mb-12 font-thin">
        Chez ATAABA, nous nous engageons à être votre partenaire de confiance dans la gestion de vos projets,
        en apportant expertise, innovation et une approche rigoureuse à chaque mission.
      </p>

      <div className="gsap-scroll-element flex flex-wrap items-center gap-4">
        {/* Primary CTA */}
        <a
          href="/services"
          className="group inline-flex items-center gap-3 px-6 py-3.5 rounded-lg bg-cyan-400 text-[#09090B] hover:bg-cyan-500 transition-all duration-200 active:scale-[0.97] focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-[#09090B]"
        >
          <span className="text-xs tracking-widest font-semibold uppercase">
            Découvrir nos services
          </span>
          <IconifyIcon
            icon="solar:arrow-right-linear"
            className="text-base transition-transform duration-200 group-hover:translate-x-1"
          />
        </a>

        {/* Secondary CTA */}
        <a
          href="/contact"
          className="group inline-flex items-center gap-3 px-6 py-3.5 rounded-lg border border-zinc-800 bg-zinc-950/50 text-zinc-100 hover:bg-zinc-900 hover:border-cyan-400/30 transition-all duration-200 active:scale-[0.97] backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-[#09090B]"
        >
          <span className="text-xs tracking-widest font-light uppercase">
            Nous contacter
          </span>
          <IconifyIcon
            icon="solar:arrow-right-linear"
            className="text-base text-cyan-400 transition-transform duration-200 group-hover:translate-x-1"
          />
        </a>
      </div>
    </section>
  )
}
