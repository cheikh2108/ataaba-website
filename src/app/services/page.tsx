'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import Sidebar from '@/components/Sidebar'
import MobileNav from '@/components/MobileNav'
import Footer from '@/components/Footer'
import IconifyIcon from '@/components/IconifyIcon'
import GrainOverlay from '@/components/GrainOverlay'
import ScrollProgress from '@/components/ScrollProgress'
import DecorativeLines from '@/components/DecorativeLines'
import { sectors, getStats } from '@/data/solutions'

type FilterType = 'all' | 'ready' | 'development'

export default function ServicesPage() {
  const stats = getStats()
  const [activeFilter, setActiveFilter] = useState<FilterType>('all')

  // Filtrer les secteurs selon le filtre actif
  const filteredSectors = useMemo(() => {
    if (activeFilter === 'all') return sectors

    return sectors.map(sector => ({
      ...sector,
      solutions: sector.solutions.filter(solution => solution.status === activeFilter)
    })).filter(sector => sector.solutions.length > 0) // Ne garder que les secteurs avec des solutions
  }, [activeFilter])

  return (
    <>
      <GrainOverlay />
      <ScrollProgress />

      <main className="relative z-10 flex w-full min-h-screen">
        <Sidebar />
        <MobileNav />

        <div className="flex-1 flex flex-col">
          {/* Hero Section */}
          <section className="relative px-4 sm:px-6 md:pl-32 lg:pl-48 md:pr-6 lg:pr-12 pt-24 md:pt-32 pb-20">
            <div className="max-w-6xl">
              <div className="flex items-center gap-3 mb-10">
                <span className="text-xs tracking-widest text-cyan-400 uppercase font-light">
                  NOS SECTEURS D'ACTIVITÉ
                </span>
                <div className="h-[1px] w-12 bg-cyan-400/30"></div>
              </div>

              <h1 className="tracking-tighter text-3xl sm:text-4xl md:text-6xl lg:text-7xl leading-[0.9] text-zinc-100 mb-6 md:mb-8 select-none font-thin">
                <span className="italic font-extralight text-zinc-500">9 secteurs.</span>
                <br />
                18 SOLUTIONS DIGITALES
              </h1>

              <p className="text-base md:text-lg text-zinc-400 leading-relaxed max-w-3xl font-thin mb-12">
                ATAABA conçoit des solutions digitales adaptées aux réalités et aux besoins de chaque secteur d'activité.
                Explorez nos solutions par secteur.
              </p>

              <div className="flex flex-wrap gap-3">
                {/* Filtre: Tous */}
                <button
                  onClick={() => setActiveFilter('all')}
                  className={`group flex items-center gap-2 px-4 py-2.5 rounded-lg transition-all duration-300 ${
                    activeFilter === 'all'
                      ? 'bg-zinc-100 border-2 border-zinc-100 shadow-[0_0_20px_rgba(255,255,255,0.1)]'
                      : 'bg-zinc-900/50 border border-zinc-800 hover:border-zinc-700 hover:bg-zinc-900'
                  }`}
                >
                  <span className={`text-xs font-light transition-colors ${
                    activeFilter === 'all' ? 'text-zinc-900 font-semibold' : 'text-zinc-400 group-hover:text-zinc-300'
                  }`}>
                    Tous ({stats.totalSolutions})
                  </span>
                </button>

                {/* Filtre: Solutions prêtes */}
                <button
                  onClick={() => setActiveFilter('ready')}
                  className={`group flex items-center gap-2 px-4 py-2.5 rounded-lg transition-all duration-300 ${
                    activeFilter === 'ready'
                      ? 'bg-cyan-400/20 border-2 border-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.2)]'
                      : 'bg-cyan-400/10 border border-cyan-400/30 hover:bg-cyan-400/15 hover:border-cyan-400/50'
                  }`}
                >
                  <div className={`size-2 rounded-full transition-all ${
                    activeFilter === 'ready'
                      ? 'bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)] scale-110'
                      : 'bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.6)]'
                  }`}></div>
                  <span className={`text-xs font-light transition-colors ${
                    activeFilter === 'ready' ? 'text-cyan-300 font-semibold' : 'text-zinc-400 group-hover:text-cyan-400'
                  }`}>
                    {stats.readySolutions} solutions prêtes
                  </span>
                </button>

                {/* Filtre: En développement */}
                <button
                  onClick={() => setActiveFilter('development')}
                  className={`group flex items-center gap-2 px-4 py-2.5 rounded-lg transition-all duration-300 ${
                    activeFilter === 'development'
                      ? 'bg-amber-500/20 border-2 border-amber-500 shadow-[0_0_20px_rgba(245,158,11,0.2)]'
                      : 'bg-amber-500/10 border border-amber-500/30 hover:bg-amber-500/15 hover:border-amber-500/50'
                  }`}
                >
                  <div className={`size-2 rounded-full transition-all ${
                    activeFilter === 'development'
                      ? 'bg-amber-500 scale-110'
                      : 'bg-amber-500'
                  }`}></div>
                  <span className={`text-xs font-light transition-colors ${
                    activeFilter === 'development' ? 'text-amber-400 font-semibold' : 'text-zinc-400 group-hover:text-amber-400'
                  }`}>
                    {stats.devSolutions} en développement
                  </span>
                </button>
              </div>
            </div>
          </section>

          {/* Sectors Grid */}
          <section className="relative px-4 sm:px-6 md:pl-32 lg:pl-48 md:pr-6 lg:pr-12 pb-32">
            <div className="max-w-6xl">
              {/* Message si aucun résultat */}
              {filteredSectors.length === 0 && (
                <div className="text-center py-20">
                  <IconifyIcon icon="solar:folder-open-linear" className="text-6xl text-zinc-700 mb-4 mx-auto" />
                  <p className="text-zinc-500 font-light">
                    Aucune solution trouvée pour ce filtre
                  </p>
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredSectors.map((sector) => (
                  <Link
                    key={sector.id}
                    href={`/services/${sector.slug}`}
                    className="group relative overflow-hidden rounded-xl border border-zinc-800/80 bg-zinc-950/40 backdrop-blur-sm hover:border-cyan-500/50 transition-all duration-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-[#09090B]"
                  >
                    {/* Gradient on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    {/* Content */}
                    <div className="relative z-10 p-8">
                      {/* Icon & Badge */}
                      <div className="flex items-start justify-between mb-6">
                        <div className="size-14 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center group-hover:border-cyan-500/50 group-hover:shadow-[0_0_20px_rgba(34,211,238,0.15)] transition-all duration-500">
                          <IconifyIcon
                            icon={sector.icon}
                            className="text-3xl text-zinc-500 group-hover:text-cyan-400 transition-colors duration-500"
                          />
                        </div>
                        <div className="px-3 py-1 rounded-full bg-zinc-900/80 border border-zinc-800">
                          <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider">
                            {sector.id}
                          </span>
                        </div>
                      </div>

                      {/* Title */}
                      <h3 className="text-2xl font-light text-zinc-100 mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                        {sector.name}
                      </h3>

                      {/* Description */}
                      <p className="text-sm text-zinc-500 leading-relaxed font-thin group-hover:text-zinc-400 transition-colors duration-300 mb-6">
                        {sector.description}
                      </p>

                      {/* Solutions count */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="size-1.5 rounded-full bg-cyan-400/60"></div>
                          <span className="text-xs text-zinc-600 font-mono">
                            {sector.solutions.length} solution{sector.solutions.length > 1 ? 's' : ''}
                          </span>
                        </div>
                        <IconifyIcon
                          icon="solar:arrow-right-linear"
                          className="text-cyan-400 text-xl group-hover:translate-x-1 transition-transform duration-300"
                        />
                      </div>
                    </div>

                    {/* Decorative line */}
                    <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-zinc-800 to-transparent group-hover:via-cyan-500/50 transition-colors duration-500" />
                  </Link>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="relative px-4 sm:px-6 md:pl-32 lg:pl-48 md:pr-6 lg:pr-12 pb-32">
            <div className="max-w-4xl mx-auto text-center border border-zinc-800 rounded-2xl p-12 md:p-16 bg-zinc-950/40 backdrop-blur-sm">
              <h2 className="text-3xl md:text-4xl font-light text-zinc-100 mb-6 tracking-tight">
                Une solution sur mesure pour votre secteur
              </h2>
              <p className="text-zinc-400 font-thin mb-8 max-w-2xl mx-auto">
                Discutons de vos besoins et trouvons la solution digitale adaptée à votre organisation.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-lg bg-cyan-400 text-[#09090B] hover:bg-cyan-500 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-[#09090B]"
              >
                <span className="text-sm tracking-widest font-semibold uppercase">
                  Nous contacter
                </span>
                <IconifyIcon icon="solar:arrow-right-linear" className="text-lg" />
              </a>
            </div>
          </section>

        </div>
      </main>

      <Footer />
      <DecorativeLines />
    </>
  )
}
