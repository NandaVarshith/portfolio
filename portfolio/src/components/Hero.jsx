import { motion } from 'framer-motion'

const BADGES = [
  { label: 'React', style: 'left-4 top-4 md:left-8 md:top-8' },
  { label: 'Node.js', style: 'right-4 top-14 md:right-8 md:top-10' },
  { label: 'MongoDB', style: 'left-3 bottom-14 md:left-8 md:bottom-16' },
  { label: 'Java', style: 'right-4 bottom-6 md:right-10 md:bottom-10' },
  { label: 'LLaMA-3', style: 'left-1/2 top-1/2 -translate-x-1/2 -translate-y-[145px] md:-translate-y-[170px]' },
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
      <div className="grid items-center gap-12 lg:grid-cols-[1.08fr_0.92fr]">
        <div>
          <motion.p
            className="section-kicker"
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0.04}
          >
            Full Stack Developer | MERN Stack Developer | Software Engineer | Problem Solver
          </motion.p>

          <motion.h1
            className="mt-5 text-balance text-4xl font-semibold leading-[1.06] tracking-[-0.03em] text-[var(--color-text-primary)] sm:text-5xl md:text-6xl"
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0.1}
          >
            I build scalable full stack products with modern web engineering and practical AI/ML integration.
          </motion.h1>

          <motion.p
            className="section-copy mt-7 max-w-2xl"
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0.16}
          >
            Hyderabad-based developer focused on MERN architecture, clean APIs, and intelligent application features that solve real user problems.
          </motion.p>

          <motion.div
            className="mt-9 flex flex-wrap items-center gap-3"
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0.22}
          >
            <a className="btn btn-primary h-12 px-6" href="#projects">
              View Projects
            </a>
            <a className="btn btn-secondary h-12 px-6" href="/resume.pdf" download>
              Download Resume
            </a>
            <a className="btn btn-ghost h-12 px-6" href="#contact">
              Contact Me
            </a>
          </motion.div>
        </div>

        <motion.div
          className="relative mx-auto w-full max-w-[520px]"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="relative overflow-hidden rounded-[2rem] border border-[var(--color-border-strong)] bg-[var(--color-surface-strong)]/55 p-7 shadow-[0_24px_70px_-28px_rgba(7,11,21,0.95)] backdrop-blur-xl sm:p-8">
            <motion.div
              className="pointer-events-none absolute -left-16 -top-20 h-52 w-52 rounded-full bg-[var(--color-glow-cyan)] blur-[80px]"
              animate={{ x: [0, 16, 0], y: [0, 10, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.div
              className="pointer-events-none absolute -right-16 -bottom-24 h-64 w-64 rounded-full bg-[var(--color-glow-purple)] blur-[95px]"
              animate={{ x: [0, -16, 0], y: [0, -10, 0] }}
              transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
            />

            <div className="relative rounded-2xl border border-[var(--color-border-soft)] bg-[var(--color-surface)]/70 p-6 sm:p-7">
              <p className="text-xs uppercase tracking-[0.18em] text-[var(--color-text-dim)]">Current Focus</p>
              <h3 className="mt-3 text-xl font-medium text-[var(--color-text-primary)] sm:text-2xl">
                Product-Focused Full Stack Engineering
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[var(--color-text-muted)] sm:text-base">
                Software systems built with reusable components, secure authentication, and AI/ML-assisted capabilities where they add measurable value.
              </p>

              <div className="mt-6 space-y-3">
                {['MERN Stack Applications', 'REST APIs + JWT Security', 'AI/ML Feature Integration'].map((item, index) => (
                  <motion.div
                    key={item}
                    className="rounded-xl border border-[var(--color-border-soft)] bg-[var(--color-surface-soft)]/50 px-4 py-3 text-sm text-[var(--color-text-primary)]"
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.34 + index * 0.1, duration: 0.45, ease: 'easeOut' }}
                  >
                    {item}
                  </motion.div>
                ))}
              </div>
            </div>

            {BADGES.map((badge, index) => (
              <motion.div
                key={badge.label}
                className={[
                  'absolute rounded-full border border-[var(--color-border-strong)] bg-[var(--color-surface)]/85 px-3 py-1 text-xs font-medium tracking-wide text-[var(--color-text-primary)] shadow-[0_10px_35px_-20px_rgba(8,14,29,0.95)] backdrop-blur',
                  badge.style,
                ].join(' ')}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45 + index * 0.1, duration: 0.45 }}
                whileHover={{ y: -3 }}
              >
                {badge.label}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
