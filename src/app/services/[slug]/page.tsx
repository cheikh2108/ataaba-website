import Link from 'next/link'
import { notFound } from 'next/navigation'
import Sidebar from '@/components/Sidebar'
import MobileNav from '@/components/MobileNav'
import Footer from '@/components/Footer'
import IconifyIcon from '@/components/IconifyIcon'
import SolutionPortfolio from '@/components/SolutionPortfolio'
import GrainOverlay from '@/components/GrainOverlay'
import ScrollProgress from '@/components/ScrollProgress'
import DecorativeLines from '@/components/DecorativeLines'
import { getSectorBySlug } from '@/data/solutions'

export default async function SectorDetailPage({
  params
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const sector = getSectorBySlug(slug)

  if (!sector) {
    notFound()
  }

  const readyCount = sector.solutions.filter(s => s.status === 'ready').length
  const devCount = sector.solutions.length - readyCount

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
              {/* Breadcrumb */}
              <div className="flex items-center gap-2 mb-8 text-sm">
                <Link
                  href="/services"
                  className="text-zinc-500 hover:text-cyan-400 transition-colors font-light"
                >
                  Services
                </Link>
                <IconifyIcon icon="solar:alt-arrow-right-linear" className="text-zinc-700 text-xs" />
                <span className="text-zinc-400 font-light">{sector.name}</span>
              </div>

              {/* Header */}
              <div className="flex items-start gap-6 mb-10">
                <div className="size-20 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center shrink-0">
                  <IconifyIcon icon={sector.icon} className="text-4xl text-cyan-400" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-xs tracking-widest text-cyan-400 uppercase font-light">
                      SECTEUR {sector.id}
                    </span>
                    <div className="h-[1px] w-12 bg-cyan-400/30"></div>
                  </div>
                  <h1 className="tracking-tighter text-2xl sm:text-3xl md:text-5xl lg:text-6xl leading-[0.9] text-zinc-100 mb-4 select-none font-thin">
                    {sector.name}
                  </h1>
                  <p className="text-base md:text-lg text-zinc-400 leading-relaxed font-thin">
                    {sector.description}
                  </p>
                </div>
              </div>

              {/* Stats */}
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-zinc-900/50 border border-zinc-800">
                  <IconifyIcon icon="solar:layers-linear" className="text-cyan-400 text-sm" />
                  <span className="text-xs text-zinc-400 font-light">
                    {sector.solutions.length} solution{sector.solutions.length > 1 ? 's' : ''}
                  </span>
                </div>
                {readyCount > 0 && (
                  <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-cyan-400/10 border border-cyan-400/30">
                    <div className="size-2 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.6)]"></div>
                    <span className="text-xs text-zinc-400 font-light">{readyCount} prête{readyCount > 1 ? 's' : ''}</span>
                  </div>
                )}
                {devCount > 0 && (
                  <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-amber-500/10 border border-amber-500/30">
                    <div className="size-2 rounded-full bg-amber-500"></div>
                    <span className="text-xs text-zinc-400 font-light">{devCount} en dév.</span>
                  </div>
                )}
              </div>
            </div>
          </section>

          {/* Solutions Portfolio */}
          <section className="relative px-4 sm:px-6 md:pl-32 lg:pl-48 md:pr-6 lg:pr-12 pb-20">
            <div className="max-w-7xl">
              <SolutionPortfolio solutions={sector.solutions} sectorName={sector.name} />
            </div>
          </section>

          {/* CTA Section */}
          <section className="relative px-4 sm:px-6 md:pl-32 lg:pl-48 md:pr-6 lg:pr-12 pb-32">
            <div className="max-w-4xl mx-auto text-center border border-zinc-800 rounded-2xl p-12 md:p-16 bg-zinc-950/40 backdrop-blur-sm">
              <h2 className="text-3xl md:text-4xl font-light text-zinc-100 mb-6 tracking-tight">
                Intéressé par une solution de ce secteur?
              </h2>
              <p className="text-zinc-400 font-thin mb-8 max-w-2xl mx-auto">
                Contactez-nous pour une démonstration personnalisée et découvrir comment nos solutions peuvent transformer votre activité.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <a
                  href="/contact"
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-lg bg-cyan-400 text-[#09090B] hover:bg-cyan-500 transition-colors duration-300"
                >
                  <span className="text-sm tracking-widest font-semibold uppercase">
                    Demander une démo
                  </span>
                  <IconifyIcon icon="solar:arrow-right-linear" className="text-lg" />
                </a>
                <Link
                  href="/services"
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-lg border border-zinc-800 bg-zinc-950/50 text-zinc-100 hover:bg-zinc-900 hover:border-cyan-400/30 transition-all duration-300"
                >
                  <IconifyIcon icon="solar:alt-arrow-left-linear" className="text-lg text-cyan-400" />
                  <span className="text-sm tracking-widest font-light uppercase">
                    Tous les secteurs
                  </span>
                </Link>
              </div>
            </div>
          </section>

        </div>
      </main>

      <Footer />
      <DecorativeLines />
    </>
  )
}
