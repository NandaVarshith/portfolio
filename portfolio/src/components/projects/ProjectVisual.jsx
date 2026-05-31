import { motion } from 'framer-motion'

const VISUAL_STYLES = {
  cinetrack: {
    gradient: 'from-[#1a2234] via-[#24314a] to-[#432d3f]',
    chip: 'AI Recs',
    lineOne: 'Personal Watchlist',
    lineTwo: 'Smart Similar Picks',
  },
  urbanpulse: {
    gradient: 'from-[#172230] via-[#22344a] to-[#31455a]',
    chip: 'Geo Insights',
    lineOne: 'Role-Based Dashboards',
    lineTwo: 'Issue Heatmap + Analytics',
  },
  plants: {
    gradient: 'from-[#182734] via-[#203f4b] to-[#32435d]',
    chip: 'EfficientNetB3',
    lineOne: 'Image Classification',
    lineTwo: 'Flask Prediction API',
  },
}

function ProjectVisual({ visualKey, title }) {
  const style = VISUAL_STYLES[visualKey] ?? VISUAL_STYLES.cinetrack

  return (
    <div className={`relative h-56 overflow-hidden rounded-2xl border border-[var(--color-border-soft)] bg-gradient-to-br ${style.gradient} p-5 sm:h-64`}>
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.06),transparent_30%,transparent_70%,rgba(255,255,255,0.04))]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(230,183,107,0.14),transparent_18%),radial-gradient(circle_at_80%_70%,rgba(73,206,191,0.12),transparent_20%)]" />
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
        className="relative h-full rounded-xl border border-white/15 bg-[rgba(10,13,21,0.55)] p-4 backdrop-blur"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex items-center justify-between">
          <p className="text-xs uppercase tracking-[0.16em] text-[#f5ede1]/80">{title}</p>
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
