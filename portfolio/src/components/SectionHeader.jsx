import { motion } from 'framer-motion'

function SectionHeader({ kicker, title, description }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
    >
      <p className="section-kicker">{kicker}</p>
      <h2 className="section-title mt-4 max-w-3xl">{title}</h2>
      {description ? <p className="section-copy mt-5 max-w-2xl">{description}</p> : null}
    </motion.div>
  )
}

export default SectionHeader
