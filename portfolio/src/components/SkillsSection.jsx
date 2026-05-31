import { motion } from 'framer-motion'
import SectionHeader from './SectionHeader'

const SKILL_GROUPS = [
  {
    title: 'Programming',
    items: ['Java', 'Python', 'JavaScript'],
  },
  {
    title: 'Frontend',
    items: ['React.js', 'HTML5', 'CSS3', 'Tailwind CSS', 'Bootstrap'],
  },
  {
    title: 'Backend',
    items: ['Node.js', 'Express.js', 'REST APIs', 'JWT Authentication'],
  },
  {
    title: 'Database',
    items: ['MongoDB', 'MySQL', 'Oracle SQL'],
  },
  {
    title: 'AI / ML',
    items: ['Machine Learning', 'Deep Learning', 'CNNs', 'EfficientNet', 'LLM Integration', 'Flask'],
  },
  {
    title: 'Tools',
    items: ['Git', 'GitHub', 'Postman', 'VS Code', 'Vercel'],
  },
]

function SkillsSection() {
  return (
    <section id="skills" className="section-shell py-24 md:py-28">
      <SectionHeader
        kicker="Skills"
        title="A toolkit built for full-stack delivery and AI-enabled work."
        description="My stack spans frontend polish, backend APIs, databases, and machine learning tools that support practical product development."
      />

      <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-2">
        {SKILL_GROUPS.map((group, index) => (
          <motion.article
            key={group.title}
            className="glass-panel rounded-[1.6rem] p-5 sm:p-6"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: index * 0.07 }}
            whileHover={{ y: -4 }}
          >
            <h3 className="text-lg font-semibold text-[var(--color-text-primary)]">{group.title}</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {group.items.map((skill) => (
                <span key={skill} className="skill-badge">
                  {skill}
                </span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}

export default SkillsSection
