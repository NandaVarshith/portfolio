import { motion } from 'framer-motion'
import SectionHeader from './SectionHeader'

const STATS = [
  { label: 'DSA Problems Solved', value: '300+' },
  { label: 'LeetCode Questions', value: '125+' },
  { label: 'Current CGPA', value: '9.0' },
  { label: 'Hackathon Finish', value: '4th Place' },
]

function AboutSection() {
  return (
    <section id="about" className="section-shell py-24 md:py-28">
      <SectionHeader
        kicker="About"
        title="Software engineer mindset with strong full stack execution."
        description="Inupamula Nanda Varshith, B.Tech CSE student at Anurag University, building scalable MERN applications with practical AI/ML exposure."
      />

      <div className="mt-12 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <motion.div
          className="glass-panel relative overflow-hidden rounded-3xl p-6 sm:p-8"
          initial={{ opacity: 0, x: -18 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="pointer-events-none absolute -left-12 -top-14 h-40 w-40 rounded-full bg-[var(--color-glow-cyan)] blur-[65px]" />
          <div className="pointer-events-none absolute -right-12 -bottom-16 h-48 w-48 rounded-full bg-[var(--color-glow-purple)] blur-[75px]" />
          <div className="relative rounded-2xl border border-[var(--color-border-strong)] bg-[var(--color-surface)]/80 p-6">
            <p className="text-xs uppercase tracking-[0.2em] text-[var(--color-text-dim)]">Developer Profile</p>
            <h3 className="mt-3 text-2xl font-semibold text-[var(--color-text-primary)]">MERN Stack + AI/ML Exposure</h3>
            <p className="mt-4 text-sm leading-relaxed text-[var(--color-text-muted)] sm:text-base">
              Hyderabad-based developer focused on reliable web products, clean frontend systems, and intelligent features powered by machine learning fundamentals.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-3 text-sm">
              {['Scalable Components', 'Responsive UX', 'JWT + REST APIs', 'Problem Solving First'].map((item) => (
                <div key={item} className="rounded-xl border border-[var(--color-border-soft)] bg-[var(--color-surface-soft)]/60 px-3 py-2 text-[var(--color-text-primary)]">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        <div>
          <motion.p
            className="section-copy text-base sm:text-lg"
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.08 }}
          >
            I focus on solving real engineering problems, from designing reusable React interfaces to building robust backend services with Node.js and Express.
          </motion.p>

          <motion.p
            className="section-copy mt-4 text-base sm:text-lg"
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            Alongside product engineering, I explore AI/ML integrations such as TensorFlow models, Flask APIs, and LLaMA-3 driven features for real-world use cases.
          </motion.p>

          <div className="mt-7 grid gap-3 sm:grid-cols-2">
            {STATS.map((item, index) => (
              <motion.div
                key={item.label}
                className="glass-panel rounded-2xl p-4 sm:p-5"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.45, delay: 0.2 + index * 0.08 }}
                whileHover={{ y: -4 }}
              >
                <p className="text-sm text-[var(--color-text-dim)]">{item.label}</p>
                <p className="mt-2 text-xl font-semibold text-[var(--color-text-primary)]">{item.value}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
