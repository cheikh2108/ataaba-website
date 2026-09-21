'use client'

import IconifyIcon from './IconifyIcon'

interface Solution {
  name: string
  description: string
  category: string
  icon: string
  features: string[]
}

export default function SolutionsPhares() {
  const solutions: Solution[] = [
    {
      name: 'Planora360',
      description: 'Planification, suivi-évaluation et gestion de projets pour ONG, bailleurs et institutions',
      category: 'Gestion de Projets',
      icon: 'solar:chart-2-bold',
      features: ['Cadre logique', 'Indicateurs S&E', 'Rapports automatiques']
    },
    {
      name: 'GoodRH',
      description: 'Gestion complète des ressources humaines, paie, présences et congés',
      category: 'Ressources Humaines',
      icon: 'solar:users-group-rounded-bold',
      features: ['Paie automatisée', 'Pointage', 'Congés & absences']
    },
    {
      name: 'Finora360',
      description: 'Gestion financière et comptable pour entreprises et projets',
      category: 'Finance & Comptabilité',
      icon: 'solar:wallet-money-bold',
      features: ['Comptabilité', 'Budget', 'Trésorerie']
    },
    {
      name: 'PayTrack',
      description: 'Gestion commerciale, stocks, ventes et encaissements pour PME et commerces',
      category: 'Commerce & Ventes',
      icon: 'solar:cart-large-bold',
      features: ['Point de vente', 'Gestion stocks', 'Facturation']
    },
    {
      name: 'SALIHA HEALTH',
      description: 'Gestion hospitalière complète pour cliniques, cabinets médicaux et structures de santé',
      category: 'Santé',
      icon: 'solar:health-bold',
      features: ['Dossier médical', 'Pharmacie', 'Rendez-vous']
    },
    {
      name: 'NAATALIX',
      description: 'Plateforme e-commerce complète pour boutiques en ligne et marketplaces',
      category: 'E-commerce',
      icon: 'solar:bag-4-bold',
      features: ['Boutique en ligne', 'Paiement mobile', 'Livraison']
    }
  ]

  return (
    <section className="relative z-10 px-4 sm:px-6 md:pl-32 lg:pl-48 md:pr-6 lg:pr-12 py-12 md:py-20">
      <div className="max-w-6xl">
        {/* Header */}
        <div className="gsap-fade-up flex items-center gap-3 mb-10">
          <span className="text-xs tracking-widest text-cyan-400 uppercase font-light">
            NOS SOLUTIONS PHARES
          </span>
          <div className="h-[1px] w-12 bg-cyan-400/30"></div>
        </div>

        <h2 className="gsap-fade-up tracking-tighter text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[0.9] text-zinc-100 mb-4 select-none font-thin">
          6 solutions<br />
          <span className="italic font-extralight text-zinc-500">pour accélérer votre activité.</span>
        </h2>

        <p className="gsap-fade-up text-sm md:text-base text-zinc-400 leading-relaxed max-w-2xl mb-12 font-thin">
          Des outils métiers prêts à l'emploi, conçus pour répondre aux besoins spécifiques de votre secteur d'activité.
        </p>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-12">
          {solutions.map((solution, index) => (
            <article
              key={solution.name}
              className="group relative p-6 rounded-lg border border-zinc-900/80 bg-gradient-to-br from-zinc-950/50 to-zinc-950/30 hover:from-zinc-900/50 hover:to-zinc-950/50 hover:border-cyan-400/30 transition-all duration-300 cursor-pointer"
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-400/10 to-transparent border border-cyan-400/20 flex items-center justify-center mb-4 group-hover:border-cyan-400/40 transition-colors">
                <IconifyIcon icon={solution.icon} className="text-2xl text-cyan-400" />
              </div>

              {/* Category Badge */}
              <span className="inline-block text-[0.65rem] tracking-widest text-cyan-400/70 uppercase font-semibold mb-3">
                {solution.category}
              </span>

              {/* Name */}
              <h3 className="text-xl md:text-2xl font-light tracking-tight text-zinc-100 mb-2 group-hover:text-cyan-400 transition-colors">
                {solution.name}
              </h3>

              {/* Description */}
              <p className="text-xs md:text-sm text-zinc-400 leading-relaxed mb-4 font-thin">
                {solution.description}
              </p>

              {/* Features */}
              <ul className="space-y-2">
                {solution.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-xs text-zinc-500">
                    <div className="w-1 h-1 rounded-full bg-cyan-400/60"></div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-lg"></div>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="gsap-fade-up flex flex-col sm:flex-row gap-4 items-center justify-center">
          <a
            href="/services"
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-lg border border-zinc-800 bg-zinc-950/50 text-zinc-100 hover:bg-zinc-900 hover:border-cyan-400/50 transition-all duration-200 active:scale-[0.97]"
          >
            <span className="text-xs tracking-widest font-light uppercase">
              Découvrir toutes nos solutions
            </span>
            <IconifyIcon icon="solar:arrow-right-linear" className="text-lg text-cyan-400 transition-transform group-hover:translate-x-1" />
          </a>

          <a
            href="/contact"
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-lg bg-cyan-400 text-[#09090B] hover:bg-cyan-500 transition-all duration-200 active:scale-[0.97]"
          >
            <span className="text-xs tracking-widest font-semibold uppercase">
              Demander une démonstration
            </span>
            <IconifyIcon icon="solar:play-circle-bold" className="text-lg transition-transform group-hover:scale-110" />
          </a>
        </div>
      </div>
    </section>
  )
}
