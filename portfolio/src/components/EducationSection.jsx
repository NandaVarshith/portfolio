import { motion } from 'framer-motion'
import SectionHeader from './SectionHeader'

const COURSEWORK = ['Data Structures & Algorithms', 'DBMS', 'Operating Systems', 'Computer Networks', 'Web Development']

function EducationSection() {
  return (
    <section id="education" className="section-shell py-24 md:py-28">
      <SectionHeader
        kicker="Education"
        title="Academic journey with strong computer science fundamentals."
        description="Consistent performance in engineering academics supported by practical software development implementation."
      />

      <motion.article
        className="glass-panel mt-12 rounded-3xl p-6 sm:p-8"
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-[var(--color-brand-strong)]">Anurag University</p>
            <h3 className="mt-2 text-2xl font-semibold text-[var(--color-text-primary)] sm:text-3xl">
              Bachelor of Technology in Computer Science
            </h3>
            <p className="mt-4 text-sm text-[var(--color-text-muted)] sm:text-base">
              Duration: Dec 2023 - Present. Current status: 3rd Year, 2nd Semester with continued focus on software engineering and scalable web systems.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
            <div className="rounded-2xl border border-[var(--color-border-soft)] bg-[var(--color-surface)]/60 p-4">
              <p className="text-xs uppercase tracking-[0.14em] text-[var(--color-text-dim)]">CGPA</p>
              <p className="mt-2 text-3xl font-semibold text-[var(--color-text-primary)]">9.0</p>
            </div>
            <div className="rounded-2xl border border-[var(--color-border-soft)] bg-[var(--color-surface)]/60 p-4">
              <p className="text-xs uppercase tracking-[0.14em] text-[var(--color-text-dim)]">Academic Stage</p>
              <p className="mt-2 text-lg font-semibold text-[var(--color-text-primary)]">3rd Year, 2nd Semester</p>
            </div>
          </div>
        </div>

        <div className="mt-7">
          <p className="text-xs uppercase tracking-[0.16em] text-[var(--color-text-dim)]">Relevant Coursework</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {COURSEWORK.map((course) => (
              <span key={course} className="skill-badge">
                {course}
              </span>
            ))}
          </div>
        </div>
      </motion.article>
    </section>
  )
}

export default EducationSection
