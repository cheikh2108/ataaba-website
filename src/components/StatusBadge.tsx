interface StatusBadgeProps {
  status: 'ready' | 'development'
}

export default function StatusBadge({ status }: StatusBadgeProps) {
  const isReady = status === 'ready'

  return (
    <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full ${
      isReady
        ? 'bg-cyan-400/10 border border-cyan-400/30'
        : 'bg-amber-500/10 border border-amber-500/30'
    }`}>
      <div className={`size-2 rounded-full ${
        isReady
          ? 'bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.6)]'
          : 'bg-amber-500'
      }`} />
      <span className={`text-xs font-mono font-semibold uppercase tracking-wider ${
        isReady ? 'text-cyan-400' : 'text-amber-500'
      }`}>
        {isReady ? 'Prêt' : 'En développement'}
      </span>
    </div>
  )
}
