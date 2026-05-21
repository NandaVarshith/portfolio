import { motion } from 'framer-motion'
import ProjectVisual from './ProjectVisual'

function ProjectCard({ project, index, variant = 'featured' }) {
  if (variant === 'compact') {
    return (
      <motion.article
        className="glass-panel group rounded-2xl p-5 transition-colors hover:border-[var(--color-border-strong)] sm:p-6"
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.4, delay: index * 0.06 }}
        whileHover={{ y: -4 }}
      >
        <p className="text-xs uppercase tracking-[0.16em] text-[var(--color-text-dim)]">{project.label}</p>
        <h3 className="mt-2 text-xl font-semibold text-[var(--color-text-primary)]">{project.title}</h3>
        <p className="mt-3 text-sm text-[var(--color-text-muted)]">{project.description}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.tech.map((item) => (
            <span key={item} className="skill-badge text-xs">
              {item}
            </span>
          ))}
        </div>

        <div className="mt-5 flex items-center gap-2">
          <a
            className="btn btn-secondary h-10 px-4 py-2 text-sm"
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            aria-label={`${project.title} GitHub repository`}
          >
            GitHub
          </a>
          <a
            className="btn btn-ghost h-10 px-4 py-2 text-sm"
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            aria-label={`${project.title} live demo`}
          >
            Demo
          </a>
        </div>
      </motion.article>
    )
  }

  return (
    <motion.article
      className="glass-panel group rounded-3xl p-5 transition-colors hover:border-[var(--color-border-strong)] sm:p-6 lg:p-7"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ y: -5 }}
    >
      <div className={`grid gap-6 ${index % 2 === 1 ? 'lg:grid-cols-[0.86fr_1.14fr]' : 'lg:grid-cols-[1.14fr_0.86fr]'}`}>
        <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
          <motion.div className="transition-transform duration-300 group-hover:scale-[1.01]">
            <ProjectVisual visualKey={project.visualKey} title={project.title} />
          </motion.div>
        </div>

        <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
          <p className="text-xs uppercase tracking-[0.16em] text-[var(--color-brand-strong)]">Featured Project</p>
          <h3 className="mt-2 text-2xl font-semibold text-[var(--color-text-primary)] sm:text-3xl">{project.title}</h3>
          <p className="mt-2 text-sm font-medium text-[var(--color-text-dim)] sm:text-base">{project.tagline}</p>
          <p className="mt-4 text-sm text-[var(--color-text-muted)] sm:text-base">{project.description}</p>

          <div className="mt-5 grid gap-2">
            {project.features.map((feature) => (
              <p
                key={feature}
                className="rounded-xl border border-[var(--color-border-soft)] bg-[var(--color-surface)]/65 px-3 py-2 text-sm text-[var(--color-text-muted)]"
              >
                {feature}
              </p>
            ))}
          </div>

          <div className="mt-5 flex flex-wrap gap-2">
            {project.tech.map((item) => (
              <span key={item} className="skill-badge">
                {item}
              </span>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            <a
              className="btn btn-secondary h-11 px-5 py-2 text-sm"
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              aria-label={`${project.title} GitHub repository`}
            >
              GitHub
            </a>
            <a
              className="btn btn-primary h-11 px-5 py-2 text-sm"
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              aria-label={`${project.title} live demo`}
            >
              Live Demo
            </a>
          </div>
        </div>
      </div>
    </motion.article>
  )
}

export default ProjectCard
