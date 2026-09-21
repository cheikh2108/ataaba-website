import IconifyIcon from './IconifyIcon'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="relative z-10 px-4 sm:px-6 md:pl-32 lg:pl-48 md:pr-6 lg:pr-12 py-12 md:py-20 border-t border-zinc-900/80 bg-zinc-950 overflow-hidden">
      <div className="absolute top-0 left-1/4 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent"></div>
      <div className="max-w-5xl flex flex-col gap-8 md:gap-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-10">
          <div className="col-span-1 md:col-span-2 flex flex-col gap-6">
            <div className="relative w-48 h-12 mb-2">
              <Image
                src="/logo-full.png"
                alt="ATAABA EXPERTISE"
                fill
                className="object-contain object-left"
                sizes="192px"
              />
            </div>
            <p className="text-xs text-zinc-500 font-thin max-w-sm leading-relaxed">
              Votre partenaire de confiance pour la gestion de projets et solutions digitales innovantes.
              Nous accompagnons les organisations dans l'optimisation de leurs processus.
            </p>
            <div className="flex flex-col gap-2 text-xs text-zinc-500">
              <div className="flex items-center gap-2">
                <IconifyIcon icon="solar:map-point-linear" className="text-cyan-400" />
                <span>Almadies 2, Rufisque, Dakar, Sénégal</span>
              </div>
              <div className="flex items-center gap-2">
                <IconifyIcon icon="solar:phone-linear" className="text-cyan-400" />
                <span>+221 78 751 72 72 / +221 76 806 88 87</span>
              </div>
              <div className="flex items-center gap-2">
                <IconifyIcon icon="solar:letter-linear" className="text-cyan-400" />
                <span>contact@ataabaexpertise.com</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <span className="text-[10px] tracking-widest text-zinc-500 uppercase font-thin mb-2 font-mono">
              SERVICES
            </span>
            <a href="/services" className="text-xs tracking-widest text-zinc-400 hover:text-cyan-400 transition-colors uppercase font-light">
              Technologies
            </a>
            <a href="/services" className="text-xs tracking-widest text-zinc-400 hover:text-cyan-400 transition-colors uppercase font-light">
              Expertise
            </a>
            <a href="/services" className="text-xs tracking-widest text-zinc-400 hover:text-cyan-400 transition-colors uppercase font-light">
              Immobilier
            </a>
          </div>
          <div className="flex flex-col gap-4">
            <span className="text-[10px] tracking-widest text-zinc-500 uppercase font-thin mb-2 font-mono">
              ENTREPRISE
            </span>
            <a href="/about" className="text-xs tracking-widest text-zinc-400 hover:text-cyan-400 transition-colors uppercase font-light">
              À propos
            </a>
            <a href="/formations" className="text-xs tracking-widest text-zinc-400 hover:text-cyan-400 transition-colors uppercase font-light">
              Formations
            </a>
            <a href="/ressources" className="text-xs tracking-widest text-zinc-400 hover:text-cyan-400 transition-colors uppercase font-light">
              Ressources
            </a>
            <a href="/contact" className="text-xs tracking-widest text-zinc-400 hover:text-cyan-400 transition-colors uppercase font-light">
              Contact
            </a>
          </div>
        </div>

        <div className="w-full h-[1px] bg-zinc-900 relative">
          <div className="absolute left-0 top-0 h-full w-1/4 bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent animate-logo-scan"></div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <span className="text-[10px] tracking-widest font-light text-zinc-500 uppercase">
            ATAABA EXPERTISE © 2025
          </span>
          <div className="flex items-center gap-8">
            <a href="#" className="text-[10px] tracking-widest text-zinc-500 hover:text-cyan-400 transition-colors uppercase font-thin">
              TERMS
            </a>
            <a href="#" className="text-[10px] tracking-widest text-zinc-500 hover:text-cyan-400 transition-colors uppercase font-thin">
              PRIVACY
            </a>
            <a href="#" className="text-[10px] tracking-widest text-zinc-500 hover:text-cyan-400 transition-colors uppercase font-thin">
              STATUS
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
