import { useState } from 'react'
import { motion } from 'framer-motion'
import SectionHeading from '../components/SectionHeading'
import { SkillCard, CircularProgress } from '../components/SkillCard'
import skills from '../data/skills.json'

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState(skills[0]?.category || 'All')

  const categories = ['All', ...skills.map((s) => s.category)]
  const filteredSkills = activeCategory === 'All'
    ? skills.flatMap((cat) => cat.skills.map((s) => ({ ...s, category: cat.category })))
    : skills.find((s) => s.category === activeCategory)?.skills || []

  // Top skills for circular display
  const topSkills = skills.flatMap((cat) => cat.skills).slice(0, 6)

  return (
    <div className="pt-28 pb-20 px-4">
      <div className="container mx-auto max-w-6xl space-y-16">
        <SectionHeading
          title="Skills & Expertise"
          subtitle="Technologies and tools I work with"
        />

        {/* TOP SKILLS - Circular */}
        <section>
          <h3 className="text-2xl font-bold font-poppins mb-8 text-center">
            <span className="gradient-text">Core Competencies</span>
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {topSkills.map((skill, i) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass rounded-2xl p-4 flex flex-col items-center card-hover"
              >
                <CircularProgress value={skill.level} size={100} strokeWidth={6} />
                <p className="mt-3 font-semibold text-sm text-center">{skill.name}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CATEGORY FILTER */}
        <section>
          <div className="flex flex-wrap justify-center gap-3 mb-10">
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

          {/* SKILL CARDS */}
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {filteredSkills.map((skill, i) => (
              <SkillCard key={skill.name} skill={skill} index={i} />
            ))}
          </motion.div>
        </section>

        {/* SOFT SKILLS */}
        <section>
          <SectionHeading
            title="Soft Skills"
            subtitle="Beyond technical expertise"
          />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {skills.find((s) => s.category === 'Soft Skills')?.skills.map((skill, i) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                whileHover={{ y: -5 }}
                className="glass rounded-2xl p-5 text-center card-hover"
              >
                <div className="text-3xl mb-2">✨</div>
                <h4 className="font-semibold mb-1">{skill.name}</h4>
                <p className="text-xs text-gray-400">{skill.levelLabel}</p>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}

export default Skills
