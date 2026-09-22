import IconifyIcon from './IconifyIcon'
import Image from 'next/image'

export default function Sidebar() {
  return (
    <aside className="gsap-sidebar hidden md:flex fixed left-0 top-0 flex-col justify-between items-center w-20 md:w-24 h-screen border-r border-zinc-900 py-10 shrink-0 z-40 bg-[#09090B]/50 backdrop-blur-sm">
      <div className="flex flex-col items-center mb-8">
        <a
          href="/"
          className="relative w-14 h-14 hover:opacity-80 transition-opacity focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-[#09090B] rounded"
          aria-label="Retour à l'accueil ATAABA"
        >
          <Image
            src="/logo-symbol.png"
            alt="ATAABA"
            fill
            className="object-contain"
            sizes="56px"
          />
        </a>
      </div>

      <nav className="flex flex-col gap-8 items-center" aria-label="Navigation principale">
        <a
          href="/"
          className="relative group cursor-pointer flex items-center justify-center w-full min-h-[44px] focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-[#09090B] rounded"
          aria-current="page"
        >
          <span className="text-xs tracking-widest text-zinc-100 uppercase rotate-180 transition-colors select-none group-hover:text-cyan-400" style={{ writingMode: 'vertical-rl' }}>
            ACCUEIL
          </span>
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[2px] h-4 bg-cyan-400" aria-hidden="true"></div>
        </a>
        <a
          href="/services"
          className="relative group cursor-pointer flex items-center justify-center w-full min-h-[44px] focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-[#09090B] rounded"
        >
          <span className="text-xs tracking-widest text-zinc-400 group-hover:text-zinc-200 transition-colors uppercase rotate-180 select-none" style={{ writingMode: 'vertical-rl' }}>
            SERVICES
          </span>
        </a>
        <a
          href="/formations"
          className="relative group cursor-pointer flex items-center justify-center w-full min-h-[44px] focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-[#09090B] rounded"
        >
          <span className="text-xs tracking-widest text-zinc-400 group-hover:text-zinc-200 transition-colors uppercase rotate-180 select-none" style={{ writingMode: 'vertical-rl' }}>
            FORMATIONS
          </span>
        </a>
        <a
          href="/about"
          className="relative group cursor-pointer flex items-center justify-center w-full min-h-[44px] focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-[#09090B] rounded"
        >
          <span className="text-xs tracking-widest text-zinc-400 group-hover:text-zinc-200 transition-colors uppercase rotate-180 select-none" style={{ writingMode: 'vertical-rl' }}>
            À PROPOS
          </span>
        </a>
        <a
          href="/contact"
          className="relative group cursor-pointer flex items-center justify-center w-full min-h-[44px] focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-[#09090B] rounded"
        >
          <span className="text-xs tracking-widest text-zinc-400 group-hover:text-zinc-200 transition-colors uppercase rotate-180 select-none" style={{ writingMode: 'vertical-rl' }}>
            CONTACT
          </span>
        </a>
      </nav>

      <div className="flex flex-col items-center">
        <div className="w-11 h-11 rounded-full border border-zinc-800 flex items-center justify-center" aria-label="Statut en ligne" role="status">
          <div className="w-2 h-2 bg-cyan-400 rounded-full shadow-[0_0_8px_rgba(0,229,255,0.8)]"></div>
        </div>
      </div>
    </aside>
  )
}
