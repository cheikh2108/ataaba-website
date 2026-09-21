'use client'

import IconifyIcon from './IconifyIcon'

export default function WhyATAABA() {
  const reasons = [
    {
      icon: 'solar:calendar-mark-bold',
      title: "+14 ans d'expérience",
      description: "du fondateur dans la gestion de projets et le suivi-évaluation"
    },
    {
      icon: 'solar:chart-2-bold',
      title: 'Expertise reconnue',
      description: "en suivi-évaluation, systèmes d'information et pilotage stratégique"
    },
    {
      icon: 'solar:map-point-bold',
      title: 'Solutions développées au Sénégal',
      description: 'adaptées aux réalités et besoins du terrain africain'
    },
    {
      icon: 'solar:users-group-rounded-bold',
      title: 'Accompagnement complet',
      description: 'formation, support technique et maintenance inclus'
    },
    {
      icon: 'solar:settings-bold',
      title: 'Solutions personnalisables',
      description: 'adaptées à la taille et aux besoins de votre organisation'
    }
  ]

  return (
    <section className="relative z-10 px-4 sm:px-6 md:pl-32 lg:pl-48 md:pr-6 lg:pr-12 py-12 md:py-20 bg-zinc-950/30">
      <div className="max-w-6xl">
        {/* Header */}
        <div className="gsap-fade-up flex items-center gap-3 mb-10">
          <span className="text-xs tracking-widest text-cyan-400 uppercase font-light">
            NOS ATOUTS
          </span>
          <div className="h-[1px] w-12 bg-cyan-400/30"></div>
        </div>

        <h2 className="gsap-fade-up tracking-tighter text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[0.9] text-zinc-100 mb-6 select-none font-thin">
          Pourquoi choisir<br />
          <span className="italic font-extralight text-zinc-500">ATAABA?</span>
        </h2>

        <p className="gsap-fade-up text-sm md:text-base text-zinc-400 leading-relaxed max-w-2xl mb-12 font-thin">
          Une expertise éprouvée, des solutions adaptées et un accompagnement de bout en bout pour garantir le succès de vos projets.
        </p>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {reasons.map((reason, index) => (
            <article
              key={index}
              className="group relative p-6 rounded-lg border border-zinc-900/80 bg-gradient-to-br from-zinc-950/50 to-zinc-950/30 hover:from-zinc-900/50 hover:to-zinc-950/50 hover:border-cyan-400/30 transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-400/10 to-transparent border border-cyan-400/20 flex items-center justify-center mb-4 group-hover:border-cyan-400/40 transition-colors">
                <IconifyIcon icon={reason.icon} className="text-2xl text-cyan-400" />
              </div>

              {/* Title */}
              <h3 className="text-lg md:text-xl font-light tracking-tight text-zinc-100 mb-2">
                {reason.title}
              </h3>

              {/* Description */}
              <p className="text-xs md:text-sm text-zinc-400 leading-relaxed font-thin">
                {reason.description}
              </p>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-lg"></div>
            </article>
          ))}

          {/* CTA Card */}
          <article className="group relative p-6 rounded-lg border border-cyan-400/30 bg-gradient-to-br from-cyan-400/5 to-transparent hover:from-cyan-400/10 hover:to-transparent transition-all duration-300 flex flex-col justify-center items-center text-center">
            <IconifyIcon icon="solar:check-circle-bold" className="text-4xl text-cyan-400 mb-3" />
            <h3 className="text-lg font-light text-zinc-100 mb-2">
              Prêt à démarrer?
            </h3>
            <p className="text-xs text-zinc-400 font-thin mb-4">
              Discutons de votre projet
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 text-xs tracking-widest text-cyan-400 hover:text-cyan-300 transition-colors uppercase font-semibold"
            >
              Contactez-nous
              <IconifyIcon icon="solar:arrow-right-linear" className="text-base" />
            </a>
          </article>
        </div>

        {/* Bottom Stats Bar */}
        <div className="gsap-fade-up grid grid-cols-2 md:grid-cols-4 gap-4 p-6 md:p-8 rounded-lg border border-zinc-900/80 bg-zinc-950/30">
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-thin text-cyan-400 mb-1">50+</p>
            <p className="text-xs text-zinc-500 font-light">Projets réalisés</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-thin text-cyan-400 mb-1">100+</p>
            <p className="text-xs text-zinc-500 font-light">Personnes formées</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-thin text-cyan-400 mb-1">95%</p>
            <p className="text-xs text-zinc-500 font-light">Taux satisfaction</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-thin text-cyan-400 mb-1">9</p>
            <p className="text-xs text-zinc-500 font-light">Secteurs couverts</p>
          </div>
        </div>
      </div>
    </section>
  )
}
