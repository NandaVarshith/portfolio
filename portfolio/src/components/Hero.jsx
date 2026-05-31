import { motion } from 'framer-motion'

const PROOF_POINTS = [
  { value: 'Full-Stack + AI', label: 'Primary focus' },
  { value: '9.0 CGPA', label: 'Academic strength' },
  { value: '300+ DSA', label: 'Problem solving' },
]

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] },
  }),
}

function Hero() {
  return (
    <section id="home" className="section-shell relative pt-32 pb-20 md:pt-36 md:pb-24">
      <div className="mx-auto max-w-4xl">
        <motion.p
          className="section-kicker"
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={0.01}
        >
          Full-Stack Developer exploring AI-powered applications
        </motion.p>

        <motion.h1
          className="mt-4 text-balance text-4xl font-semibold leading-[0.96] tracking-[-0.05em] text-[var(--color-text-primary)] sm:text-5xl md:text-7xl"
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={0.04}
        >
          Building intelligent and scalable software solutions.
        </motion.h1>

        <motion.p
          className="mt-6 max-w-2xl text-base text-[var(--color-text-muted)] sm:text-lg md:text-xl"
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={0.12}
        >
          I'm Nanda Varshith, a Computer Science student from Hyderabad focused on practical software, modern web development, and AI-driven experiences that feel useful and polished.
        </motion.p>

        <motion.div
          className="mt-8 flex flex-wrap gap-3"
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={0.2}
        >
          <a className="btn btn-primary h-12 px-6" href="#projects">
            Explore Projects
          </a>
          <a className="btn btn-secondary h-12 px-6" href="/resume.pdf" download>
            Download Resume
          </a>
          <a className="btn btn-ghost h-12 px-6" href="#contact">
            Contact Me
          </a>
        </motion.div>

        <motion.div
          className="mt-12 grid gap-3 rounded-[1.8rem] border border-[var(--color-border-soft)] bg-[var(--color-surface-soft)]/55 p-4 backdrop-blur-xl sm:grid-cols-3 sm:p-5"
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={0.28}
        >
          {PROOF_POINTS.map((item) => (
            <div
              key={item.label}
              className="rounded-[1.4rem] border border-[var(--color-border-soft)] bg-[var(--color-surface)]/72 px-4 py-4"
            >
              <p className="text-lg font-semibold tracking-tight text-[var(--color-text-primary)]">{item.value}</p>
              <p className="mt-1 text-[11px] uppercase tracking-[0.18em] text-[var(--color-text-dim)]">{item.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
