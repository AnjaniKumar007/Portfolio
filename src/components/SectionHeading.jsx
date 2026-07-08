import { motion } from 'framer-motion'

/**
 * Reusable Section Heading component with gradient underline.
 */
const SectionHeading = ({ title, subtitle, align = 'center' }) => {
  const alignment = align === 'center' ? 'text-center mx-auto' : 'text-left'
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`mb-12 ${alignment}`}
    >
      <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-3">
        <span className="gradient-text">{title}</span>
      </h2>
      {subtitle && (
        <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base">
          {subtitle}
        </p>
      )}
      <div className="mt-4 h-1 w-20 bg-gradient-to-r from-primary via-secondary to-accent rounded-full mx-auto" />
    </motion.div>
  )
}

export default SectionHeading
