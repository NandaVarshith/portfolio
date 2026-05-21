import { motion, useInView } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import SectionHeader from './SectionHeader'

const ACHIEVEMENTS = [
  {
    value: 300,
    suffix: '+',
    label: 'DSA Problems Solved',
    detail: 'Strong consistency across core data structures and algorithms.',
  },
  {
    value: 125,
    suffix: '+',
    label: 'LeetCode Questions',
    detail: 'Focused practice on interview-grade problem patterns.',
  },
  {
    value: 4,
    suffix: 'th',
    label: 'College Hackathon Rank',
    detail: 'Achieved top placement through rapid execution and teamwork.',
  },
  {
    value: 1,
    suffix: '',
    label: 'Smart Interview DSA Completion',
    detail: 'Completed structured DSA preparation with disciplined progress.',
  },
  {
    value: 5,
    suffix: '+',
    label: 'Full Stack Projects Built',
    detail: 'Built practical end-to-end applications with product focus.',
  },
]

function CounterValue({ value, suffix }) {
  const [count, setCount] = useState(0)
  const nodeRef = useRef(null)
  const isInView = useInView(nodeRef, { once: true, amount: 0.7 })

  useEffect(() => {
    if (!isInView) {
      return
    }

    let frameId
    const duration = 1100
    const start = performance.now()

    const animate = (now) => {
      const elapsed = now - start
      const progress = Math.min(elapsed / duration, 1)
      setCount(Math.round(value * progress))

      if (progress < 1) {
        frameId = requestAnimationFrame(animate)
      }
    }

    frameId = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(frameId)
  }, [isInView, value])

  return (
    <span ref={nodeRef}>
      {count}
      {suffix}
    </span>
  )
}

function AchievementsSection() {
  return (
    <section id="achievements" className="section-shell py-24 md:py-28">
      <SectionHeader
        kicker="Achievements"
        title="Technical consistency backed by measurable problem-solving outcomes."
        description="Focused progress across coding practice, project implementation, and competitive execution."
      />

      <div className="mt-12 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {ACHIEVEMENTS.map((item, index) => (
          <motion.article
            key={item.label}
            className="glass-panel group relative overflow-hidden rounded-2xl p-5 sm:p-6"
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: index * 0.07 }}
            whileHover={{ y: -4 }}
          >
            <div className="absolute inset-0 -z-10 rounded-2xl bg-[radial-gradient(circle_at_top_right,rgba(124,168,255,0.2),transparent_60%)] opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100" />
            <p className="text-4xl font-semibold tracking-tight text-[var(--color-text-primary)] sm:text-5xl">
              <CounterValue value={item.value} suffix={item.suffix} />
            </p>
            <p className="mt-3 text-base font-medium text-[var(--color-text-primary)]">{item.label}</p>
            <p className="mt-2 text-sm text-[var(--color-text-muted)]">{item.detail}</p>
          </motion.article>
        ))}
      </div>
    </section>
  )
}

export default AchievementsSection
