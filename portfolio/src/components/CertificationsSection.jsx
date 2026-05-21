import { motion } from 'framer-motion'
import SectionHeader from './SectionHeader'

const CERTIFICATIONS = [
  {
    provider: 'IBM',
    title: 'Python for Data Science',
    link: 'https://www.ibm.com/training/',
  },
  {
    provider: 'IBM',
    title: 'Enterprise Data Science',
    link: 'https://www.ibm.com/training/',
  },
  {
    provider: 'Cisco',
    title: 'Data Analytics Essentials',
    link: 'https://www.netacad.com/',
  },
  {
    provider: 'freeCodeCamp',
    title: 'Responsive Web Design',
    link: 'https://www.freecodecamp.org/certification/',
  },
  {
    provider: 'Eduskills',
    title: 'Web Full Stack Development',
    link: 'https://www.eduskillsfoundation.org/',
  },
  {
    provider: 'Coursera',
    title: 'Build AI Apps with ChatGPT and DALL-E',
    link: 'https://www.coursera.org/',
  },
  {
    provider: 'ServiceNow',
    title: 'Certified System Administrator (CSA)',
    link: 'https://www.servicenow.com/services/training-and-certification.html',
  },
  {
    provider: 'NPTEL',
    title: 'Machine Learning',
    link: 'https://nptel.ac.in/',
  },
]

function CertificationsSection() {
  return (
    <section id="certifications" className="section-shell py-24 md:py-28">
      <SectionHeader
        kicker="Certifications"
        title="Industry-recognized credentials across software and data domains."
        description="Professional certification track aligned with full stack development, analytics, and applied machine learning."
      />

      <div className="mt-12 grid gap-4 md:grid-cols-2">
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
                <a
                  className="mt-4 inline-flex items-center text-sm font-medium text-[var(--color-brand-strong)] transition hover:text-[var(--color-text-primary)]"
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  Verify Credential
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}

export default CertificationsSection
