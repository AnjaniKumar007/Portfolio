import { useState } from 'react'
import { motion } from 'framer-motion'
import SectionHeading from '../components/SectionHeading'
import CertificationCard from '../components/CertificationCard'
import certifications from '../data/certifications.json'

const Certifications = () => {
  const [activeCategory, setActiveCategory] = useState('All')

  const categories = ['All', ...new Set(certifications.map((c) => c.category))]
  const filtered = activeCategory === 'All'
    ? certifications
    : certifications.filter((c) => c.category === activeCategory)

  return (
    <div className="pt-28 pb-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <SectionHeading
          title="Certifications"
          subtitle="Professional certifications and courses I've completed"
        />

        {/* FILTER */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === cat
                  ? 'gradient-btn text-white'
                  : 'glass hover:bg-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* GRID */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filtered.map((cert, i) => (
            <CertificationCard key={cert.id} cert={cert} index={i} />
          ))}
        </motion.div>

        {filtered.length === 0 && (
          <p className="text-center text-gray-400 py-12">
            No certifications in this category.
          </p>
        )}
      </div>
    </div>
  )
}

export default Certifications
