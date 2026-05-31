import { motion } from 'framer-motion'
import SectionHeader from './SectionHeader'

const CERTIFICATIONS = [
  {
    provider: 'IBM',
    title: 'Python for Data Science',
    detail: 'Applied learning in data science and software foundations.',
  },
  {
    provider: 'IBM',
    title: 'Enterprise Data Science',
    detail: 'Applied learning in data science and software foundations.',
  },
  {
    provider: 'Cisco',
    title: 'Data Analytics Essentials',
    detail: 'Networking and systems-oriented certification work.',
  },
  {
    provider: 'freeCodeCamp',
    title: 'Responsive Web Design',
    detail: 'Frontend and web development learning track.',
  },
  {
    provider: 'Coursera',
    title: 'Build AI Apps with ChatGPT & DALL-E',
    detail: 'Applied AI app development learning track.',
  },
  {
    provider: 'ServiceNow',
    title: 'ServiceNow Certified System Administrator (CSA)',
    detail: 'Platform administration and workflow fundamentals.',
  },
]

function CertificationsSection() {
  return (
    <section id="certifications" className="section-shell py-24 md:py-28">
      <SectionHeader
        kicker="Certifications"
        title="Structured learning across software, networking, and frontend development."
        description="These represent broader learning tracks that support the way I build and learn."
      />

      <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {CERTIFICATIONS.map((item, index) => (
          <motion.article
            key={`${item.provider}-${item.title}`}
            className="glass-panel rounded-2xl p-5 sm:p-6"
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: index * 0.08 }}
            whileHover={{ y: -4 }}
          >
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[var(--color-border-strong)] bg-[var(--color-surface)] text-sm font-semibold text-[var(--color-text-primary)]">
                {item.provider.slice(0, 2).toUpperCase()}
              </div>

              <div className="min-w-0 flex-1">
                <p className="text-xs uppercase tracking-[0.16em] text-[var(--color-brand-strong)]">{item.provider}</p>
                <h3 className="mt-1 text-base font-semibold text-[var(--color-text-primary)] sm:text-lg">{item.title}</h3>
                <p className="mt-2 text-sm text-[var(--color-text-muted)]">{item.detail}</p>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}

export default CertificationsSection
