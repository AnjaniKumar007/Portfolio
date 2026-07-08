import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

/**
 * Animated counter that counts up to a target value when in view.
 */
const Counter = ({ end, duration = 2, suffix = '' }) => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let start = 0
    const increment = end / (duration * 60)
    const timer = setInterval(() => {
      start += increment
      if (start >= end) {
        setCount(end)
        clearInterval(timer)
      } else {
        setCount(Math.ceil(start))
      }
    }, 1000 / 60)
    return () => clearInterval(timer)
  }, [end, duration])

  return (
    <span>
      {count}
      {suffix}
    </span>
  )
}

const StatCard = ({ stat, index }) => {
  // Extract numeric value and suffix (e.g., "20+" -> 20, "+")
  const numericValue = parseInt(stat.value.replace(/[^0-9]/g, '')) || 0
  const suffix = stat.value.replace(/[0-9]/g, '')

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className="glass rounded-2xl p-6 text-center card-hover"
    >
      <div className="text-4xl md:text-5xl font-bold gradient-text font-poppins mb-2">
        <Counter end={numericValue} suffix={suffix} />
      </div>
      <p className="text-gray-400 text-sm uppercase tracking-wider">
        {stat.label}
      </p>
    </motion.div>
  )
}

export default StatCard
