"use client"

import { Card } from "@/components/ui/card"
import React from "react"

export function AboutBento() {
  return (
    <section className="relative z-10 px-4 sm:px-6 md:pl-32 lg:pl-48 md:pr-6 lg:pr-12 py-12 md:py-20">
      <div className="max-w-6xl border-t border-zinc-900 pt-16">
        {/* Header */}
        <div className="flex items-center gap-3 mb-10">
          <span className="text-xs tracking-widest text-cyan-400 uppercase font-light">
            NOTRE IMPACT
          </span>
          <div className="h-[1px] w-12 bg-cyan-400/30"></div>
        </div>

        <div className="mb-20">
          <h2 className="tracking-tighter text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[0.9] text-zinc-100 mb-6 select-none font-thin">
            <span className="italic font-extralight text-zinc-500">Notre</span>
            <br />
            IMPACT EN CHIFFRES
          </h2>
          <p className="text-sm md:text-base text-zinc-300 leading-relaxed max-w-2xl font-thin">
            Plus d'une décennie d'expertise au service de projets d'envergure internationale.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
          {/* Large Feature Card - 2x2 */}
          <Card className="md:col-span-2 md:row-span-2 bg-zinc-950/50 rounded-lg p-10 md:p-12 flex flex-col justify-between border border-zinc-800/50 relative overflow-hidden group backdrop-blur-sm">
            {/* Decorative background star */}
            <svg
              width="377"
              height="368"
              className="w-80 md:w-96 fill-zinc-900/30 absolute -bottom-16 group-hover:rotate-180 duration-[2000ms] ease-in-out -right-16 transition-transform"
              viewBox="0 0 377 368"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M179.692 5.79814C182.635 -1.93287 193.572 -1.93285 196.515 5.79816L229.505 92.466C231.206 96.9342 236.103 99.2928 240.657 97.8366L328.986 69.5929C336.865 67.0735 343.684 75.6242 339.474 82.7452L292.284 162.574C289.851 166.69 291.061 171.99 295.038 174.642L372.192 226.091C379.075 230.68 376.641 241.343 368.449 242.491L276.613 255.369C271.878 256.033 268.489 260.283 268.895 265.047L276.776 357.445C277.479 365.688 267.625 370.433 261.619 364.744L194.293 300.973C190.821 297.686 185.386 297.686 181.914 300.973L114.588 364.744C108.582 370.433 98.7281 365.688 99.4311 357.445L107.312 265.047C107.718 260.283 104.329 256.033 99.5941 255.369L7.7582 242.491C-0.433812 241.343 -2.86746 230.68 4.01488 226.091L81.1687 174.642C85.1465 171.99 86.3561 166.69 83.9231 162.574L36.7325 82.7452C32.523 75.6242 39.342 67.0735 47.2212 69.5929L135.55 97.8366C140.104 99.2928 145.001 96.9342 146.702 92.4659L179.692 5.79814Z" />
            </svg>

            <div className="space-y-5 relative z-10">
              <div className="inline-flex px-3 py-1.5 rounded-full bg-cyan-400/10 border border-cyan-400/30 backdrop-blur-sm">
                <span className="text-[10px] font-mono font-semibold uppercase tracking-widest text-cyan-400">
                  Portée Internationale
                </span>
              </div>
              <h3 className="text-4xl md:text-5xl font-thin text-zinc-100 tracking-tighter leading-[1.1]">
                14+ années
                <br />
                <span className="text-zinc-500">d'expérience</span>
              </h3>
            </div>
            <div className="mt-8 relative z-10">
              <p className="text-base md:text-lg text-zinc-400 leading-relaxed font-thin">
                Une expertise reconnue dans l'accompagnement de 50+ projets complexes.
              </p>
            </div>
          </Card>

          {/* Stat Card - 360° */}
          <Card className="bg-cyan-400 rounded-lg p-8 text-[#09090B] flex flex-col border-none justify-between">
            <span className="text-[10px] font-mono font-semibold uppercase tracking-widest opacity-70">
              Accompagnement
            </span>
            <div className="space-y-2">
              <span className="text-5xl md:text-6xl font-thin tracking-tighter">360°</span>
              <p className="text-xs font-light leading-relaxed opacity-80">
                Stratégique et<br />opérationnel
              </p>
            </div>
          </Card>

          {/* Expertise Card */}
          <Card className="bg-zinc-950/50 rounded-lg p-8 text-zinc-100 flex flex-col border border-zinc-800/50 justify-between backdrop-blur-sm">
            <span className="text-[10px] font-mono font-semibold uppercase tracking-widest text-zinc-500">
              Expertise
            </span>
            <div className="space-y-3">
              <span className="text-5xl md:text-6xl font-thin tracking-tighter">100%</span>
              <div className="h-1 w-full bg-zinc-800 rounded-full overflow-hidden">
                <div className="h-full w-full bg-cyan-400 rounded-full shadow-[0_0_8px_rgba(34,211,238,0.4)]" />
              </div>
              <p className="text-[10px] text-zinc-500 font-thin leading-relaxed pt-1">
                Systèmes d'information<br />& Suivi-Évaluation
              </p>
            </div>
          </Card>

          {/* CTA Card - 2x1 */}
          <a
            href="/contact"
            className="md:col-span-2 rounded-lg p-6 md:p-8 border border-zinc-800/50 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 cursor-pointer bg-zinc-950/30 hover:bg-zinc-900/50 hover:border-cyan-400/30 transition-all duration-300 backdrop-blur-sm group focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-[#09090B]"
          >
            <div className="space-y-1 flex-1">
              <h4 className="text-xl md:text-2xl font-thin tracking-tight text-zinc-100">
                Discutons de votre projet
              </h4>
              <p className="text-xs md:text-sm text-zinc-400 font-thin">
                Transformons vos ambitions digitales
              </p>
            </div>
            <div className="size-14 md:size-16 rounded-full flex items-center justify-center bg-cyan-400 text-[#09090B] group-hover:scale-105 transition-transform duration-300">
              <span className="text-2xl">→</span>
            </div>
          </a>

          {/* Solutions Count Card */}
          <Card className="bg-gradient-to-br from-cyan-400/90 to-cyan-500 rounded-lg p-8 text-[#09090B] flex flex-col justify-between border-none">
            <span className="text-[10px] font-mono font-semibold uppercase tracking-widest opacity-70">
              Solutions
            </span>
            <div className="space-y-2">
              <span className="text-5xl md:text-6xl font-thin tracking-tighter">19</span>
              <p className="text-xs font-light leading-relaxed opacity-80">
                Digitales<br />adaptées
              </p>
            </div>
          </Card>

          {/* Dark System Card */}
          <Card className="bg-zinc-900/50 rounded-lg p-8 text-zinc-100 flex flex-col justify-center gap-3 border border-zinc-800/50 backdrop-blur-sm">
            <div className="size-9 rounded-lg bg-cyan-400/10 border border-cyan-400/30 flex items-center justify-center">
              <div className="size-3 bg-cyan-400 rounded-full shadow-[0_0_8px_rgba(34,211,238,0.6)]" />
            </div>
            <h4 className="text-base font-light leading-tight text-zinc-300">Neural Grid</h4>
            <p className="text-[10px] text-zinc-600 font-mono uppercase tracking-wider">
              V2.4.0
            </p>
          </Card>
        </div>
      </div>
    </section>
  )
}

export default AboutBento
