import { motion } from 'framer-motion'
import SectionHeader from './SectionHeader'

const EXPERIENCES = [
  {
    type: 'Internship',
    role: 'Frontend Developer Intern',
    company: 'Landmine Soft',
    points: [
      'Redesigned the company website using React with a cleaner and more modern UI.',
      'Improved the user experience through research-driven design decisions.',
      'Built responsive interfaces that felt more polished and production-ready.',
      'Focused on clear hierarchy, layout consistency, and usable frontend components.',
    ],
  },
]

function ExperienceSection() {
  return (
    <section id="experience" className="section-shell py-24 md:py-28">
      <SectionHeader
        kicker="Experience"
        title="Real frontend experience with a focus on design quality and execution."
        description="My internship work centered on improving the website experience through better structure, responsiveness, and interface polish."
      />

      <div className="mt-12 space-y-6">
        {EXPERIENCES.map((experience, experienceIndex) => (
          <div key={experience.role} className="relative pl-8 sm:pl-10">
            <div className="absolute left-2 top-8 h-[calc(100%+24px)] w-px bg-gradient-to-b from-[var(--color-brand)]/60 via-[var(--color-brand)]/20 to-transparent sm:left-3" />
            <motion.article
              className="glass-panel relative rounded-[1.6rem] p-6 sm:p-7"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.55, delay: experienceIndex * 0.08, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -4 }}
            >
              <motion.span
                className="absolute -left-[2.1rem] top-7 h-3.5 w-3.5 rounded-full border border-[var(--color-brand)] bg-[var(--color-bg)] shadow-[0_0_0_5px_rgba(124,168,255,0.15)] sm:-left-[2.45rem]"
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + experienceIndex * 0.08, duration: 0.3 }}
              />

              <p className="text-xs uppercase tracking-[0.18em] text-[var(--color-text-dim)]">{experience.type}</p>
              <h3 className="mt-2 text-2xl font-semibold text-[var(--color-text-primary)]">{experience.role}</h3>
              <p className="mt-1 text-sm font-medium text-[var(--color-brand-strong)]">{experience.company}</p>

              <div className="mt-6 grid gap-2.5">
                {experience.points.map((item, index) => (
                  <motion.p
                    key={item}
                    className="rounded-xl border border-[var(--color-border-soft)] bg-[var(--color-surface)]/55 px-4 py-3 text-sm text-[var(--color-text-muted)]"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.35, delay: 0.1 + index * 0.08 }}
                  >
                    {item}
                  </motion.p>
                ))}
              </div>
            </motion.article>
          </div>
        ))}
      </div>
    </section>
  )
}

export default ExperienceSection
