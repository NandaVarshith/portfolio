import { motion } from 'framer-motion'

const VISUAL_STYLES = {
  cinetrack: {
    gradient: 'from-[#1d2f57] via-[#1b3d6f] to-[#35245f]',
    chip: 'AI Recs',
    lineOne: 'Personal Watchlist',
    lineTwo: 'Smart Similar Picks',
  },
  urbanpulse: {
    gradient: 'from-[#1f2a45] via-[#244560] to-[#2e3e66]',
    chip: 'Geo Insights',
    lineOne: 'Role-Based Dashboards',
    lineTwo: 'Issue Heatmap + Analytics',
  },
  plants: {
    gradient: 'from-[#1f3141] via-[#204959] to-[#2d395f]',
    chip: 'EfficientNetB3',
    lineOne: 'Image Classification',
    lineTwo: 'Flask Prediction API',
  },
}

function ProjectVisual({ visualKey, title }) {
  const style = VISUAL_STYLES[visualKey] ?? VISUAL_STYLES.cinetrack

  return (
    <div className={`relative h-56 overflow-hidden rounded-2xl border border-[var(--color-border-soft)] bg-gradient-to-br ${style.gradient} p-5 sm:h-64`}>
      <motion.div
        className="pointer-events-none absolute -left-14 -top-10 h-28 w-28 rounded-full bg-[var(--color-glow-cyan)] blur-[42px]"
        animate={{ x: [0, 10, 0], y: [0, 8, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="pointer-events-none absolute -right-10 -bottom-12 h-36 w-36 rounded-full bg-[var(--color-glow-purple)] blur-[54px]"
        animate={{ x: [0, -10, 0], y: [0, -8, 0] }}
        transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut' }}
      />

      <motion.div
        className="relative h-full rounded-xl border border-white/15 bg-[rgba(8,16,34,0.55)] p-4 backdrop-blur"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex items-center justify-between">
          <p className="text-xs uppercase tracking-[0.16em] text-[#d7e3ff]/80">{title}</p>
          <span className="rounded-full border border-white/20 bg-white/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-white/85">
            {style.chip}
          </span>
        </div>

        <div className="mt-5 grid gap-3">
          <div className="rounded-lg border border-white/15 bg-white/10 p-3">
            <div className="h-2.5 w-2/3 rounded-full bg-white/75" />
            <div className="mt-2 h-2 w-1/2 rounded-full bg-white/40" />
          </div>
          <div className="rounded-lg border border-white/15 bg-white/10 p-3">
            <div className="h-2.5 w-3/4 rounded-full bg-white/70" />
            <div className="mt-2 h-2 w-2/3 rounded-full bg-white/40" />
          </div>
        </div>

        <div className="mt-4 grid grid-cols-2 gap-2">
          <div className="rounded-md border border-white/15 bg-white/10 px-2.5 py-2 text-[11px] text-white/85">{style.lineOne}</div>
          <div className="rounded-md border border-white/15 bg-white/10 px-2.5 py-2 text-[11px] text-white/85">{style.lineTwo}</div>
        </div>
      </motion.div>
    </div>
  )
}

export default ProjectVisual
