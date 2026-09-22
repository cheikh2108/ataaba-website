'use client'

import IconifyIcon from './IconifyIcon'

export default function TrustedBy() {
  // ⚠️ IMPORTANT: Remplacer par les vrais clients/organisations autorisés à communiquer
  const clients = [
    {
      name: '[ONG Partenaire 1]',
      sector: 'ONG / Développement',
      description: 'Accompagnement suivi-évaluation projet agriculture',
      year: '2023-2024'
    },
    {
      name: '[Organisation Internationale]',
      sector: 'Coopération',
      description: 'Système d\'information et tableaux de bord',
      year: '2024'
    },
    {
      name: '[Entreprise Santé]',
      sector: 'Santé',
      description: 'Déploiement SALIHA HEALTH - Gestion clinique',
      year: '2024'
    },
    {
      name: '[PME Commerce]',
      sector: 'Commerce',
      description: 'Solution gestion commerciale PayTrack',
      year: '2023-2024'
    },
    {
      name: '[Institution Publique]',
      sector: 'Gouvernement',
      description: 'Formation équipes suivi-évaluation',
      year: '2023'
    },
    {
      name: '[Projet Éducation]',
      sector: 'Éducation',
      description: 'Système d\'information SALIHA EDUCATION',
      year: '2024-2025'
    }
  ]

  return (
    <section className="relative px-4 sm:px-6 md:pl-32 lg:pl-48 md:pr-6 lg:pr-12 py-12 md:py-20 bg-zinc-950/50">
      <div className="max-w-6xl">
        {/* Header */}
        <div className="gsap-fade-up flex items-center gap-3 mb-10">
          <span className="text-xs tracking-widest text-cyan-400 uppercase font-light">
            RÉFÉRENCES
          </span>
          <div className="h-[1px] w-12 bg-cyan-400/30"></div>
        </div>

        <h2 className="gsap-fade-up tracking-tighter text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[0.9] text-zinc-100 mb-6 select-none font-thin">
          Ils nous ont<br />
          <span className="italic font-extralight text-zinc-500">fait confiance.</span>
        </h2>

        <p className="gsap-fade-up text-sm md:text-base text-zinc-400 leading-relaxed max-w-2xl mb-12 font-thin">
          Des organisations de tous secteurs nous confient leurs projets de transformation digitale et leur accompagnement stratégique.
        </p>

        {/* Clients Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-8">
          {clients.map((client, index) => (
            <article
              key={index}
              className="group relative p-6 rounded-lg border border-zinc-900/80 bg-gradient-to-br from-zinc-950/50 to-zinc-950/30 hover:from-zinc-900/50 hover:to-zinc-950/50 hover:border-cyan-400/30 transition-all duration-300"
            >
              {/* Icon Badge */}
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-400/10 to-transparent border border-cyan-400/20 flex items-center justify-center mb-4">
                <IconifyIcon icon="solar:check-circle-bold" className="text-lg text-cyan-400" />
              </div>

              {/* Client Name */}
              <h3 className="text-lg md:text-xl font-light tracking-tight text-zinc-100 mb-2 group-hover:text-cyan-400 transition-colors">
                {client.name}
              </h3>

              {/* Sector Badge */}
              <div className="inline-block px-2 py-1 rounded bg-cyan-400/10 border border-cyan-400/30 mb-3">
                <span className="text-[0.6rem] tracking-widest text-cyan-400 uppercase font-semibold">
                  {client.sector}
                </span>
              </div>

              {/* Description */}
              <p className="text-xs md:text-sm text-zinc-400 leading-relaxed mb-3 font-thin">
                {client.description}
              </p>

              {/* Year */}
              <p className="text-[0.65rem] text-zinc-600 font-mono">
                {client.year}
              </p>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-lg"></div>
            </article>
          ))}
        </div>

        {/* Note importante */}
        <div className="p-4 rounded-lg border border-amber-500/30 bg-amber-500/5 backdrop-blur-sm">
          <div className="flex items-start gap-3">
            <IconifyIcon icon="solar:info-circle-bold" className="text-xl text-amber-500 flex-shrink-0 mt-0.5" />
            <div className="text-xs md:text-sm text-zinc-300 leading-relaxed">
              <p className="font-semibold text-amber-500 mb-1">⚠️ À METTRE À JOUR</p>
              <p>
                Remplacer les noms entre crochets par les <strong>vraies organisations/clients</strong> que vous êtes autorisé à mentionner.
                Supprimer cette note après mise à jour.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Bottom */}
        <div className="gsap-fade-up flex justify-center mt-12">
          <a
            href="/contact"
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-lg bg-cyan-400 text-[#09090B] hover:bg-cyan-500 transition-all duration-200 active:scale-[0.97]"
          >
            <span className="text-xs tracking-widest font-semibold uppercase">
              Rejoignez nos clients
            </span>
            <IconifyIcon icon="solar:arrow-right-linear" className="text-lg transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  )
}
