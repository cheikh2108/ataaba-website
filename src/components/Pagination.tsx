import IconifyIcon from './IconifyIcon'

export default function Pagination() {
  return (
    <div className="gsap-pagination hidden lg:flex fixed right-8 top-1/2 -translate-y-1/2 flex-col gap-6 items-center z-40">
      <div className="flex flex-col items-center gap-2">
        <span className="text-xs text-cyan-400 tracking-widest font-thin font-mono">
          01
        </span>
        <div className="w-4 h-[2px] bg-cyan-400 shadow-[0_0_8px_rgba(0,229,255,0.6)]"></div>
      </div>
      <div className="flex flex-col items-center gap-2 group cursor-pointer">
        <IconifyIcon icon="solar:programming-linear" className="text-zinc-600 text-xs opacity-0 group-hover:opacity-100 transition-opacity mb-1" />
        <span className="text-xs text-zinc-600 tracking-widest transition-colors group-hover:text-zinc-200 font-thin font-mono">
          02
        </span>
      </div>
      <div className="flex flex-col items-center gap-2 group cursor-pointer">
        <span className="text-xs text-zinc-600 tracking-widest transition-colors group-hover:text-zinc-200 font-thin font-mono">
          03
        </span>
      </div>
      <div className="flex flex-col items-center gap-2 group cursor-pointer">
        <span className="text-xs text-zinc-600 tracking-widest transition-colors group-hover:text-zinc-200 font-thin font-mono">
          04
        </span>
      </div>
    </div>
  )
}
