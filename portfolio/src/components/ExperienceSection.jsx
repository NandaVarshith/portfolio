import { motion } from 'framer-motion'
import SectionHeader from './SectionHeader'

const EXPERIENCES = [
  {
    type: 'Internship',
    role: 'Frontend Developer Intern',
    company: 'Landmine Soft',
    points: [
      'Redesigned the responsive company website with modern UI/UX patterns.',
      'Conducted research on 15+ industry websites to inform implementation decisions.',
      'Built reusable React components with clean, scalable frontend architecture.',
      'Improved layout consistency, usability, and interaction quality across screens.',
    ],
  },
  {
    type: 'Virtual Internship',
    role: 'ServiceNow Virtual Internship',
    company: 'ServiceNow',
    points: [
      'Worked on ServiceNow administration fundamentals and platform workflows.',
      'Practiced reporting modules and system-level configuration essentials.',
      'Covered CSA-aligned concepts through guided labs and practical exercises.',
    ],
  },
  {
    type: 'Virtual Internship',
    role: 'Cisco AICTE Virtual Internship',
    company: 'Cisco',
    points: [
      'Strengthened networking fundamentals including routing and switching.',
      'Worked with IP addressing and core network security concepts.',
      'Used Cisco Packet Tracer for lab-based simulation and hands-on practice.',
    ],
  },
]

function ExperienceSection() {
  return (
    <section id="experience" className="section-shell py-24 md:py-28">
      <SectionHeader
        kicker="Experience"
        title="Internship experience focused on practical engineering delivery."
        description="Hands-on exposure across frontend product development, platform workflows, and networking fundamentals."
      />

      <div className="mt-12 space-y-6">
        {EXPERIENCES.map((experience, experienceIndex) => (
          <div key={experience.role} className="relative pl-8 sm:pl-10">
            {experienceIndex !== EXPERIENCES.length - 1 ? (
              <div className="absolute left-2 top-8 h-[calc(100%+24px)] w-px bg-gradient-to-b from-[var(--color-brand)]/60 via-[var(--color-brand)]/20 to-transparent sm:left-3" />
            ) : null}
            <motion.article
              className="glass-panel relative rounded-2xl p-6 sm:p-7"
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
