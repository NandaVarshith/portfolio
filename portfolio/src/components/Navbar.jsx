import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useMemo, useState } from 'react'

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

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

function Navbar() {
  const [activeSection, setActiveSection] = useState('home')
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)

  const sectionIds = useMemo(() => NAV_LINKS.map((item) => item.href.replace('#', '')), [])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 18)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting)
        if (visible?.target?.id) {
          setActiveSection(visible.target.id)
        }
      },
      { rootMargin: '-35% 0px -45% 0px', threshold: 0.15 },
    )

    sectionIds.forEach((id) => {
      const section = document.getElementById(id)
      if (section) {
        observer.observe(section)
      }
    })

    return () => observer.disconnect()
  }, [sectionIds])

  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMobileOpen])

  const onNavClick = () => {
    setIsMobileOpen(false)
  }

  return (
    <motion.header
      className="fixed inset-x-0 top-0 z-50 px-4 pt-4 md:px-8"
      initial={{ y: -28, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
    >
      <nav
        className={[
          'mx-auto flex h-16 max-w-6xl items-center justify-between rounded-2xl border px-4 transition-all md:px-6',
          isScrolled
            ? 'border-[var(--color-border-strong)] bg-[var(--color-surface-soft)]/90 shadow-[0_24px_64px_-30px_rgba(15,23,42,0.9)] backdrop-blur-xl'
            : 'border-transparent bg-transparent',
        ].join(' ')}
      >
        <a className="text-sm font-semibold tracking-wide text-[var(--color-text-primary)] md:text-base" href="#home">
          Nanda Varshith
        </a>

        <div className="hidden items-center gap-2 rounded-full border border-[var(--color-border-soft)] bg-[var(--color-surface-soft)]/70 px-2 py-1 backdrop-blur-lg lg:flex">
          {NAV_LINKS.map((item) => {
            const sectionId = item.href.replace('#', '')
            const isActive = activeSection === sectionId

            return (
              <a
                key={item.href}
                href={item.href}
                className={[
                  'rounded-full px-3 py-2 text-sm font-medium transition',
                  isActive
                    ? 'bg-[var(--color-surface-strong)] text-[var(--color-text-primary)]'
                    : 'text-[var(--color-text-muted)] hover:bg-[var(--color-surface-soft)] hover:text-[var(--color-text-primary)]',
                ].join(' ')}
              >
                {item.label}
              </a>
            )
          })}
        </div>

        <div className="hidden items-center gap-2 lg:flex">
          <a className="btn btn-secondary h-10 px-4 py-2 text-sm" href="/resume.pdf" download>
            Resume
          </a>
          <a
            className="icon-btn"
            href="https://github.com/inandavarshith"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub profile"
          >
            <GitHubIcon />
          </a>
          <a
            className="icon-btn"
            href="https://linkedin.com/in/inandavarshith"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn profile"
          >
            <LinkedInIcon />
          </a>
        </div>

        <button
          type="button"
          className="icon-btn lg:hidden"
          aria-expanded={isMobileOpen}
          aria-controls="mobile-menu"
          aria-label="Toggle navigation menu"
          onClick={() => setIsMobileOpen((prev) => !prev)}
        >
          <span className="sr-only">Open navigation menu</span>
          <motion.span animate={isMobileOpen ? { rotate: 45, y: 1.5 } : { rotate: 0, y: 0 }} className="menu-line" />
          <motion.span animate={isMobileOpen ? { opacity: 0 } : { opacity: 1 }} className="menu-line" />
          <motion.span animate={isMobileOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }} className="menu-line" />
        </button>
      </nav>

      <AnimatePresence>
        {isMobileOpen ? (
          <motion.div
            id="mobile-menu"
            className="mt-3 rounded-2xl border border-[var(--color-border-strong)] bg-[var(--color-surface-soft)]/95 p-3 shadow-[0_20px_70px_-30px_rgba(11,17,32,0.95)] backdrop-blur-xl lg:hidden"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.24, ease: 'easeOut' }}
          >
            {NAV_LINKS.map((item) => {
              const sectionId = item.href.replace('#', '')
              const isActive = activeSection === sectionId

              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={onNavClick}
                  className={[
                    'block rounded-xl px-3 py-3 text-sm transition',
                    isActive
                      ? 'bg-[var(--color-surface-strong)] text-[var(--color-text-primary)]'
                      : 'text-[var(--color-text-muted)] hover:bg-[var(--color-surface)] hover:text-[var(--color-text-primary)]',
                  ].join(' ')}
                >
                  {item.label}
                </a>
              )
            })}
            <div className="mt-3 flex items-center gap-2 border-t border-[var(--color-border-soft)] pt-3">
              <a className="btn btn-secondary h-10 flex-1 justify-center text-sm" href="/resume.pdf" download onClick={onNavClick}>
                Resume
              </a>
              <a
                className="icon-btn"
                href="https://github.com/inandavarshith"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub profile"
              >
                <GitHubIcon />
              </a>
              <a
                className="icon-btn"
                href="https://linkedin.com/in/inandavarshith"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn profile"
              >
                <LinkedInIcon />
              </a>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.header>
  )
}

export default Navbar
