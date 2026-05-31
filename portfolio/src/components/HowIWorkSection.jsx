import { motion } from 'framer-motion'
import SectionHeader from './SectionHeader'

const WORK_STEPS = [
  {
    title: 'Build fast',
    description:
      'I move quickly from idea to working UI, using simple structure and reusable parts so the product can evolve without friction.',
  },
  {
    title: 'Think product',
    description:
      'I pay attention to user flow, hierarchy, and clarity so the final experience feels purposeful instead of just technically complete.',
  },
  {
    title: 'Ship clean',
    description:
      'I care about readable code, stable behavior, and polished interfaces so the work is easy to maintain and good to present.',
  },
]

function HowIWorkSection() {
  return (
    <section id="process" className="section-shell py-24 md:py-28">
      <SectionHeader
        kicker="How I Work"
        title="Three habits that shape how I build."
        description="My process stays simple: move fast, make it useful, and keep the result clean enough to scale."
      />

      <div className="mt-12 grid gap-4 lg:grid-cols-3">
        {WORK_STEPS.map((item, index) => (
          <motion.article
            key={item.title}
            className="glass-panel rounded-[1.6rem] p-6 sm:p-7"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.45, delay: index * 0.08 }}
            whileHover={{ y: -4 }}
          >
            <p className="text-xs uppercase tracking-[0.2em] text-[var(--color-brand-strong)]">
              {String(index + 1).padStart(2, '0')}
            </p>
            <h3 className="mt-3 text-2xl font-semibold text-[var(--color-text-primary)]">{item.title}</h3>
            <p className="mt-4 text-sm leading-relaxed text-[var(--color-text-muted)]">{item.description}</p>
          </motion.article>
        ))}
      </div>
    </section>
  )
}

export default HowIWorkSection
