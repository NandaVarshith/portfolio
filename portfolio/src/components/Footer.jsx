import { motion } from 'framer-motion'

function Footer() {
  return (
    <footer className="section-shell border-t border-[var(--color-border-soft)] py-8">
      <motion.div
        className="flex flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.8 }}
        transition={{ duration: 0.45 }}
      >
        <div>
          <p className="text-base font-semibold text-[var(--color-text-primary)]">Nanda Varshith</p>
          <p className="mt-1 text-sm text-[var(--color-text-dim)]">AI & Full-Stack Developer focused on practical, polished products.</p>
        </div>

        <div className="flex items-center gap-2">
          <a className="icon-btn" href="mailto:inandavarshith@gmail.com" aria-label="Email Nanda Varshith">
            <span className="text-[11px] font-semibold uppercase tracking-[0.14em]">@</span>
          </a>
          <a className="icon-btn" href="https://github.com/NandaVarshith" target="_blank" rel="noreferrer" aria-label="GitHub profile">
            <span className="text-[11px] font-semibold uppercase tracking-[0.14em]">GH</span>
          </a>
          <a
            className="icon-btn"
            href="https://linkedin.com/in/nanda-varshith-inupamula-02b092315"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn profile"
          >
            <span className="text-[11px] font-semibold uppercase tracking-[0.14em]">in</span>
          </a>
        </div>

        <p className="text-xs text-[var(--color-text-dim)]">© {new Date().getFullYear()} Nanda Varshith. All rights reserved.</p>
      </motion.div>
    </footer>
  )
}

export default Footer
