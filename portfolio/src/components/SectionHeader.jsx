import { motion } from 'framer-motion'

function SectionHeader({ kicker, title, description }) {
  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="mb-4 flex items-center gap-3">
        <span className="h-px w-10 bg-gradient-to-r from-[var(--color-brand)] to-transparent" />
        <p className="section-kicker">{kicker}</p>
      </div>
      <h2 className="section-title max-w-3xl">{title}</h2>
      {description ? <p className="section-copy mt-5 max-w-2xl">{description}</p> : null}
    </motion.div>
  )
}

export default SectionHeader
