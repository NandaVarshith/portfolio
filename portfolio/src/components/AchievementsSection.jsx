import { motion } from 'framer-motion'
import SectionHeader from './SectionHeader'

const HIGHLIGHTS = [
  {
    title: 'Built full-stack applications with AI features',
    description:
      'Created projects that combine modern web development with LLaMA-3, Groq API integration, and practical user flows.',
  },
  {
    title: 'Maintained a 9.0 CGPA while staying active in technical programs',
    description:
      'Balanced academics with hackathons, structured problem-solving, and certification-based learning across software and data topics.',
  },
  {
    title: 'Solved 300+ DSA problems and completed Smart Interview training',
    description:
      'Kept a strong focus on core problem solving, interview preparation, and clean algorithmic thinking.',
  },
]

function AchievementsSection() {
  return (
    <section id="achievements" className="section-shell py-24 md:py-28">
      <SectionHeader
        kicker="Selected Highlights"
        title="A few proof points that tell the story better than counters."
        description="These highlights focus on the work, learning, and consistency behind the portfolio."
      />

      <div className="mt-12 grid gap-4 lg:grid-cols-3">
        {HIGHLIGHTS.map((item, index) => (
          <motion.article
            key={item.title}
            className="glass-panel rounded-[1.6rem] p-6 sm:p-7"
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: index * 0.08 }}
            whileHover={{ y: -4 }}
          >
            <p className="text-xs uppercase tracking-[0.2em] text-[var(--color-brand-strong)]">Highlight</p>
            <h3 className="mt-3 text-2xl font-semibold text-[var(--color-text-primary)]">{item.title}</h3>
            <p className="mt-4 text-sm leading-relaxed text-[var(--color-text-muted)]">{item.description}</p>
          </motion.article>
        ))}
      </div>
    </section>
  )
}

export default AchievementsSection
