'use client'

import IconifyIcon from './IconifyIcon'
// import ProjectPreviewCursor from './ProjectPreviewCursor' // Disabled until real project images

export default function ProjectsPreview() {
  const projects = [
    {
      id: 'proj-001',
      number: '01',
      name: 'Planora360',
      category: 'Gestion de Projets & Suivi-Évaluation',
      year: '2024',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800&auto=format&fit=crop'
    },
    {
      id: 'proj-002',
      number: '02',
      name: 'SALIHA HEALTH',
      category: 'Gestion Hospitalière & Santé',
      year: '2024',
      image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=800&auto=format&fit=crop'
    },
    {
      id: 'proj-003',
      number: '03',
      name: 'GoodRH',
      category: 'Ressources Humaines & Paie',
      year: '2025',
      image: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&w=800&auto=format&fit=crop'
    }
  ]

  return (
    <section className="relative px-4 sm:px-6 md:pl-32 lg:pl-48 md:pr-6 lg:pr-12 py-12 md:py-20">
      {/* ProjectPreviewCursor disabled until we have real project images */}
      {/* <ProjectPreviewCursor projects={projects} /> */}

      <div className="max-w-5xl border-t border-zinc-900 pt-16">
        <div className="gsap-fade-up flex items-center gap-3 mb-10">
          <span className="text-xs tracking-widest text-cyan-400 uppercase font-light">
            NOS PRODUITS
          </span>
          <div className="h-[1px] w-12 bg-cyan-400/30"></div>
        </div>

        <h2 className="gsap-fade-up tracking-tighter text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[0.9] text-zinc-100 mb-8 md:mb-16 select-none font-thin">
          Solutions<br />
          <span className="italic font-extralight text-zinc-500">déployées.</span>
        </h2>

        <div className="space-y-0">
          {projects.map((project) => (
            <a
              key={project.id}
              href="/services"
              data-project-id={project.id}
              className="group relative grid grid-cols-[4rem_1fr_auto] md:grid-cols-[4rem_1fr_auto_auto] items-baseline gap-4 md:gap-8 py-6 md:py-8 border-b border-zinc-900/80 cursor-pointer transition-opacity duration-200 hover:opacity-100"
            >
              {/* Number */}
              <span className="text-xs tracking-[0.2em] text-cyan-400 font-mono font-light">
                {project.number}
              </span>

              {/* Name */}
              <h3 className="text-2xl md:text-4xl lg:text-5xl font-light tracking-tight text-zinc-100 transition-[color,letter-spacing,transform] duration-200 will-change-transform group-hover:tracking-wide group-hover:text-cyan-400 group-hover:translate-x-5">
                {project.name}
              </h3>

              {/* Category - hidden on mobile */}
              <span className="hidden md:block text-xs tracking-[0.2em] uppercase text-zinc-500 font-mono font-light">
                {project.category}
              </span>

              {/* Year */}
              <span className="text-xs tracking-[0.2em] text-zinc-600 font-mono font-light">
                {project.year}
              </span>

              {/* Mobile thumbnail - shown only on mobile */}
              <div className="md:hidden absolute right-0 top-1/2 -translate-y-1/2 w-16 h-20 rounded-md bg-zinc-900 border border-zinc-800 overflow-hidden flex items-center justify-center">
                <IconifyIcon icon="solar:folder-open-linear" className="text-3xl text-cyan-400/30" />
              </div>
            </a>
          ))}
        </div>

        <div className="gsap-fade-up flex justify-center mt-16">
          <a
            href="/services"
            className="group flex items-center gap-3 text-zinc-400 hover:text-cyan-400 transition-colors duration-300 border border-zinc-800 hover:border-cyan-400/50 px-8 py-4 rounded-lg"
          >
            <span className="text-xs tracking-widest font-light uppercase">
              Voir toutes nos solutions
            </span>
            <IconifyIcon icon="solar:arrow-right-linear" className="text-lg transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  )
}
