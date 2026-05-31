import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import SectionHeader from './SectionHeader'

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
        title="Let's build something useful, polished, and technically solid."
        description="I'm open to software engineering, AI/ML, and full-stack opportunities where I can learn fast and ship meaningful work."
      />

      <div className="mt-12 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <motion.div
          className="glass-panel rounded-[2rem] p-6 sm:p-7"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
        >
          <div className="rounded-[1.5rem] border border-[var(--color-border-soft)] bg-[linear-gradient(180deg,rgba(230,183,107,0.08),rgba(255,255,255,0.02))] p-5">
            <p className="text-xs uppercase tracking-[0.24em] text-[var(--color-text-dim)]">Contact preference</p>
            <h3 className="mt-3 text-2xl font-semibold text-[var(--color-text-primary)] sm:text-3xl">
              I prefer clear briefs, honest feedback, and real product goals.
            </h3>
            <p className="mt-3 text-sm text-[var(--color-text-muted)] sm:text-base">
              If you're hiring for an internship or project collaboration, send a message and I'll respond with the next step.
            </p>

            <div className="mt-5 grid gap-3">
              {[
                { label: 'Location', value: 'Hyderabad, India' },
                { label: 'Email', value: 'inandavarshith@gmail.com' },
                { label: 'Phone', value: '+91 8125916712' },
                { label: 'Career goal', value: 'Software Engineering and AI/ML internships' },
                { label: 'Working style', value: 'Clean, scalable, maintainable code' },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-[var(--color-border-soft)] bg-[var(--color-surface)]/65 px-4 py-3"
                >
                  <p className="text-[11px] uppercase tracking-[0.2em] text-[var(--color-text-dim)]">{item.label}</p>
                  <p className="mt-1 text-sm font-medium text-[var(--color-text-primary)]">{item.value}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 rounded-[1.2rem] border border-[var(--color-border-soft)] bg-[var(--color-surface)]/60 px-4 py-4 text-sm text-[var(--color-text-muted)]">
            Direct contact:
            <span className="block text-[var(--color-text-primary)]">inandavarshith@gmail.com</span>
            <span className="block text-[var(--color-text-primary)]">+91 8125916712</span>
          </div>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          className="glass-panel rounded-[2rem] p-6 sm:p-7"
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
                className="form-input min-h-40 resize-y"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about the opportunity or project."
                required
              />
            </label>
          </div>

          <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
            <p className="text-xs text-[var(--color-text-dim)]">The form is ready to connect to your preferred backend or email service.</p>
            <button className="btn btn-primary h-11 px-5 py-2 text-sm" type="submit">
              Send Message
            </button>
          </div>

          <motion.p
            className="mt-4 overflow-hidden rounded-2xl border border-[var(--color-border-soft)] bg-[var(--color-surface)]/60 px-4 py-2 text-sm text-[var(--color-brand-strong)]"
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
