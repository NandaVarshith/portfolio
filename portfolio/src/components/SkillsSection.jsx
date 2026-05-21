import { motion } from 'framer-motion'
import SectionHeader from './SectionHeader'

const SKILL_GROUPS = [
  {
    title: 'Programming',
    items: ['Java (OOP, DSA)', 'Python (Machine Learning)', 'JavaScript (ES6+)'],
  },
  {
    title: 'Web Development',
    items: ['HTML', 'CSS', 'React', 'Node.js', 'Express.js', 'REST APIs', 'JWT Authentication'],
  },
  {
    title: 'Databases',
    items: ['MongoDB', 'Oracle SQL'],
  },
  {
    title: 'Tools',
    items: ['Git', 'GitHub', 'Postman', 'VS Code'],
  },
  {
    title: 'AI/ML Exposure',
    items: ['TensorFlow', 'CNN', 'EfficientNetB3', 'Flask APIs', 'LLaMA-3 Integration', 'Machine Learning Basics'],
  },
]

function SkillsSection() {
  return (
    <section id="skills" className="section-shell py-24 md:py-28">
      <SectionHeader
        kicker="Skills"
        title="Technical toolkit for product-grade software development."
        description="Strong foundations in full stack engineering, API-first development, and practical machine learning implementation."
      />

      <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-2">
        {SKILL_GROUPS.map((group, index) => (
          <motion.article
            key={group.title}
            className="glass-panel rounded-2xl p-5 sm:p-6"
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
