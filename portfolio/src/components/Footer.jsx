import { motion } from 'framer-motion'

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
      <path d="M12 2C6.477 2 2 6.581 2 12.233c0 4.522 2.865 8.359 6.839 9.714.5.096.682-.222.682-.494 0-.244-.009-.89-.014-1.746-2.782.617-3.369-1.384-3.369-1.384-.454-1.179-1.109-1.493-1.109-1.493-.908-.637.069-.624.069-.624 1.003.072 1.531 1.055 1.531 1.055.892 1.568 2.341 1.115 2.91.852.091-.664.349-1.115.635-1.372-2.221-.26-4.555-1.138-4.555-5.064 0-1.119.39-2.034 1.029-2.752-.103-.261-.446-1.313.098-2.737 0 0 .84-.276 2.75 1.051a9.303 9.303 0 0 1 5 0c1.909-1.327 2.748-1.051 2.748-1.051.546 1.424.203 2.476.1 2.737.64.718 1.028 1.633 1.028 2.752 0 3.936-2.338 4.8-4.566 5.055.359.318.678.945.678 1.905 0 1.375-.012 2.484-.012 2.822 0 .274.18.595.688.493A10.269 10.269 0 0 0 22 12.233C22 6.58 17.523 2 12 2Z" />
    </svg>
  )
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554V14.89c0-1.327-.026-3.036-1.849-3.036-1.85 0-2.133 1.445-2.133 2.939v5.659H9.356V9h3.414v1.561h.048c.476-.9 1.637-1.849 3.371-1.849 3.604 0 4.268 2.372 4.268 5.455v6.285ZM5.337 7.433a2.061 2.061 0 1 1 0-4.121 2.061 2.061 0 0 1 0 4.121ZM7.114 20.452H3.556V9h3.558v11.452Z" />
    </svg>
  )
}

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
          <p className="text-base font-semibold text-[var(--color-text-primary)]">Aditya AI</p>
          <p className="mt-1 text-sm text-[var(--color-text-dim)]">Full Stack Developer | Building reliable modern products</p>
        </div>

        <div className="flex items-center gap-2">
          <a className="icon-btn" href="https://github.com" target="_blank" rel="noreferrer" aria-label="GitHub profile">
            <GitHubIcon />
          </a>
          <a className="icon-btn" href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn profile">
            <LinkedInIcon />
          </a>
        </div>

        <p className="text-xs text-[var(--color-text-dim)]">(c) {new Date().getFullYear()} Aditya AI. All rights reserved.</p>
      </motion.div>
    </footer>
  )
}

export default Footer
