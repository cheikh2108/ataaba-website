import IconifyIcon from './IconifyIcon'

export default function FinalCTA() {
  return (
    <>
      {/* Vertical divider */}
      <div className="relative z-10 w-full flex justify-center py-6 opacity-20">
        <div className="w-[1px] h-24 bg-gradient-to-b from-transparent via-cyan-400 to-transparent"></div>
      </div>

      {/* Final CTA Section */}
      <section className="relative z-10 px-4 sm:px-6 md:pl-32 lg:pl-48 md:pr-6 lg:pr-12 pb-12 md:pb-20 pt-8 md:pt-10">
        <div className="max-w-6xl border-t border-zinc-900 pt-16">
          {/* Header */}
          <div className="flex items-center gap-3 mb-10">
            <span className="text-xs tracking-widest text-cyan-400 uppercase font-light">
              PRÊT À DÉMARRER
            </span>
            <div className="h-[1px] w-12 bg-cyan-400/30"></div>
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-12 lg:gap-20 items-center">
            {/* Left: Text */}
            <div>
              <h2 className="tracking-tighter text-3xl sm:text-4xl md:text-5xl lg:text-7xl leading-[0.95] text-zinc-100 mb-6 md:mb-8 select-none font-thin">
                <span className="italic font-extralight text-zinc-500">Transformons</span>
                <br />
                VOS AMBITIONS
                <br />
                <span className="text-cyan-400">EN RÉALITÉ.</span>
              </h2>
              <p className="text-sm md:text-base text-zinc-400 leading-relaxed max-w-xl font-thin mb-8">
                9 secteurs. 19 solutions. Une expertise multidisciplinaire au service de votre transformation digitale.
                Parlons de votre projet.
              </p>
            </div>

            {/* Right: CTA Buttons */}
            <div className="flex flex-col gap-4">
              {/* Primary CTA */}
              <a
                href="/contact"
                className="group flex items-center justify-between gap-4 px-8 py-5 rounded-lg bg-cyan-400 text-[#09090B] hover:bg-cyan-500 transition-all duration-300 active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-[#09090B]"
              >
                <div className="flex-1">
                  <div className="text-xs tracking-widest font-semibold uppercase mb-1">
                    Contact
                  </div>
                  <div className="text-sm font-light opacity-80">
                    Discutons de votre projet
                  </div>
                </div>
                <IconifyIcon
                  icon="solar:arrow-right-linear"
                  className="text-[#09090B] text-2xl group-hover:translate-x-1 transition-transform duration-200"
                />
              </a>

              {/* Secondary CTA */}
              <a
                href="/services"
                className="group flex items-center justify-between gap-4 px-8 py-6 rounded-lg border border-zinc-800 bg-zinc-950/50 backdrop-blur-sm text-zinc-100 hover:bg-zinc-900 hover:border-cyan-400/30 transition-all duration-300 active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-[#09090B]"
              >
                <div className="flex-1">
                  <div className="text-xs tracking-widest font-light uppercase mb-1">
                    Solutions
                  </div>
                  <div className="text-sm font-thin opacity-80">
                    Découvrir nos services
                  </div>
                </div>
                <IconifyIcon
                  icon="solar:arrow-right-linear"
                  className="text-cyan-400 text-xl group-hover:translate-x-1 transition-transform duration-200"
                />
              </a>

              {/* Info badges */}
              <div className="flex items-center gap-4 mt-4 pt-4 border-t border-zinc-900">
                <div className="flex items-center gap-2">
                  <div className="size-2 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.6)]"></div>
                  <span className="text-[10px] text-zinc-500 uppercase tracking-wider font-mono">
                    Disponible maintenant
                  </span>
                </div>
                <div className="h-3 w-[1px] bg-zinc-800"></div>
                <div className="flex items-center gap-2">
                  <IconifyIcon icon="solar:map-point-linear" className="text-cyan-400 text-sm" />
                  <span className="text-[10px] text-zinc-500 uppercase tracking-wider font-mono">
                    Dakar, Sénégal
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
