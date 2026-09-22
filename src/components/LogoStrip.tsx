'use client'

export default function LogoStrip() {
  const companies = ['Gestion de Projets', 'Transformation Digitale', 'Formation', 'Immobilier', 'Conseil', 'Solutions IT']

  return (
    <section className="relative px-4 sm:px-6 md:pl-32 lg:pl-48 md:pr-6 lg:pr-12 py-8 md:py-12 overflow-hidden">
      <div className="max-w-6xl border-t border-zinc-900 pt-6">
        <p className="mb-5 text-xs tracking-[0.34em] text-zinc-600 uppercase font-thin font-mono">
          Nos domaines d'expertise
        </p>

        <div className="logo-strip relative overflow-hidden border border-zinc-900/80 bg-zinc-950/20 backdrop-blur-sm rounded-xl">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[#09090B] to-transparent"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[#09090B] to-transparent"></div>

          <div className="flex">
            <div className="logo-marquee-track flex items-center gap-3 py-4 px-3">
              {companies.map((company, index) => (
                <div
                  key={`first-${index}`}
                  className="logo-card relative overflow-hidden flex items-center justify-center w-60 px-5 py-5 rounded-lg border border-zinc-800/80 bg-[#030303]/70 text-zinc-400 flex-shrink-0"
                >
                  <span className="text-[0.65rem] tracking-wider uppercase font-light text-zinc-300 text-center">
                    {company}
                  </span>
                </div>
              ))}
            </div>

            <div className="logo-marquee-track flex items-center gap-3 py-4 px-3">
              {companies.map((company, index) => (
                <div
                  key={`second-${index}`}
                  className="logo-card relative overflow-hidden flex items-center justify-center w-60 px-5 py-5 rounded-lg border border-zinc-800/80 bg-[#030303]/70 text-zinc-400 flex-shrink-0"
                  aria-hidden="true"
                >
                  <span className="text-[0.65rem] tracking-wider uppercase font-light text-zinc-300 text-center">
                    {company}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
