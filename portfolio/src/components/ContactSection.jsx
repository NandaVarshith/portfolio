import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import SectionHeader from './SectionHeader'

const CONTACT_LINKS = [
  { label: 'Email', value: 'inandavarshith@gmail.com', href: 'mailto:inandavarshith@gmail.com' },
  { label: 'Phone', value: '+91 8125916712', href: 'tel:+918125916712' },
  { label: 'Location', value: 'Hyderabad', href: 'https://maps.google.com/?q=Hyderabad' },
  { label: 'GitHub', value: 'github.com/nandavarshith', href: 'https://github.com/nandavarshith' },
  { label: 'LinkedIn', value: 'linkedin.com/in/inandavarshith', href: 'https://linkedin.com/in/nandavarshith' },
]

function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [isSent, setIsSent] = useState(false)

  useEffect(() => {
    if (!isSent) {
      return
    }

    const timerId = setTimeout(() => setIsSent(false), 2800)
    return () => clearTimeout(timerId)
  }, [isSent])

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setIsSent(true)
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <section id="contact" className="section-shell py-24 md:py-28">
      <SectionHeader
        kicker="Contact"
        title="Open to software engineering internships and full stack opportunities."
        description="Available for roles focused on MERN development, scalable web systems, and practical AI/ML-enabled product features."
      />

      <div className="mt-12 grid gap-6 lg:grid-cols-[0.92fr_1.08fr]">
        <motion.div
          className="glass-panel rounded-3xl p-6 sm:p-7"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-2xl font-semibold text-[var(--color-text-primary)] sm:text-3xl">Start a conversation</h3>
          <p className="mt-3 text-sm text-[var(--color-text-muted)] sm:text-base">
            I am Inupamula Nanda Varshith, a Full Stack Developer and Software Engineer focused on clean architecture, maintainable code, and product quality.
          </p>

          <div className="mt-6 grid gap-3">
            {CONTACT_LINKS.map((item) => (
              <a
                key={item.label}
                className="rounded-xl border border-[var(--color-border-soft)] bg-[var(--color-surface)]/60 px-4 py-3 transition hover:border-[var(--color-border-strong)] hover:bg-[var(--color-surface-soft)]"
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
              >
                <p className="text-xs uppercase tracking-[0.14em] text-[var(--color-text-dim)]">{item.label}</p>
                <p className="mt-1 text-sm font-medium text-[var(--color-text-primary)] sm:text-base">{item.value}</p>
              </a>
            ))}
          </div>

          <a className="btn btn-secondary mt-6 h-11 px-5 py-2 text-sm" href="/resume.pdf" download>
            Download Resume
          </a>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          className="glass-panel rounded-3xl p-6 sm:p-7"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.08 }}
        >
          <div className="grid gap-4">
            <label className="grid gap-2">
              <span className="text-sm font-medium text-[var(--color-text-primary)]">Name</span>
              <input
                className="form-input"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                required
              />
            </label>

            <label className="grid gap-2">
              <span className="text-sm font-medium text-[var(--color-text-primary)]">Email</span>
              <input
                className="form-input"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your.email@example.com"
                required
              />
            </label>

            <label className="grid gap-2">
              <span className="text-sm font-medium text-[var(--color-text-primary)]">Message</span>
              <textarea
                className="form-input min-h-36 resize-y"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me a little about your project or role."
                required
              />
            </label>
          </div>

          <div className="mt-5 flex items-center justify-between gap-3">
            <p className="text-xs text-[var(--color-text-dim)]">EmailJS integration placeholder ready for deployment.</p>
            <button className="btn btn-primary h-11 px-5 py-2 text-sm" type="submit">
              Send Message
            </button>
          </div>

          <motion.p
            className="mt-4 rounded-xl border border-[var(--color-border-soft)] bg-[var(--color-surface)]/60 px-4 py-2 text-sm text-[var(--color-brand-strong)]"
            initial={false}
            animate={{ opacity: isSent ? 1 : 0, y: isSent ? 0 : 4, height: isSent ? 'auto' : 0 }}
          >
            Message queued successfully. I will get back soon.
          </motion.p>
        </motion.form>
      </div>
    </section>
  )
}

export default ContactSection
