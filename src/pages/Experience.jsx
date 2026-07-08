import { useState } from 'react'
import { motion } from 'framer-motion'
import SectionHeading from '../components/SectionHeading'
import Timeline from '../components/Timeline'
import experience from '../data/experience.json'

const Experience = () => {
  const [activeType, setActiveType] = useState('All')

  const types = ['All', ...new Set(experience.map((e) => e.type))]
  const filtered = activeType === 'All'
    ? experience
    : experience.filter((e) => e.type === activeType)

  return (
    <div className="pt-28 pb-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <SectionHeading
          title="Experience & Activities"
          subtitle="Internships, hackathons, workshops, and leadership"
        />

        {/* FILTER */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {types.map((type) => (
            <button
              key={type}
              onClick={() => setActiveType(type)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                activeType === type
                  ? 'gradient-btn text-white'
                  : 'glass hover:bg-white/10'
              }`}
            >
              {type}
            </button>
          ))}
        </div>

        {/* TIMELINE */}
        <motion.div
          key={activeType}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
        >
          <Timeline items={filtered} />
        </motion.div>

        {filtered.length === 0 && (
          <p className="text-center text-gray-400 py-12">
            No experience entries in this category.
          </p>
        )}
      </div>
    </div>
  )
}

export default Experience
