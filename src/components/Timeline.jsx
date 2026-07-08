import { motion } from 'framer-motion'
import { Briefcase, Calendar } from 'lucide-react'

const Timeline = ({ items, type = 'experience' }) => {
  return (
    <div className="relative">
      {/* Vertical Line */}
      <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent md:-translate-x-1/2" />

      <div className="space-y-12">
        {items.map((item, index) => (
          <motion.div
            key={item.id || index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`relative flex flex-col md:flex-row gap-6 ${
              index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
            }`}
          >
            {/* Dot */}
            <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-gradient-to-br from-primary to-accent md:-translate-x-1/2 mt-6 ring-4 ring-background pulse-glow" />

            {/* Spacer */}
            <div className="hidden md:block md:w-1/2" />

            {/* Card */}
            <div className="ml-12 md:ml-0 md:w-1/2">
              <motion.div
                whileHover={{ y: -5 }}
                className="glass rounded-2xl p-6 card-hover"
              >
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="flex items-center gap-2 text-xs text-accent">
                    <Calendar size={14} />
                    <span>{item.duration || item.date}</span>
                  </div>
                  <span className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20">
                    {item.type || type}
                  </span>
                </div>

                <h3 className="text-xl font-bold font-poppins mb-1">
                  {item.title || item.role}
                </h3>
                <p className="text-sm text-accent mb-3 flex items-center gap-2">
                  <Briefcase size={14} />
                  {item.organization || item.company}
                </p>
                <p className="text-gray-400 text-sm mb-3">{item.description}</p>

                {item.achievements && (
                  <ul className="space-y-1">
                    {item.achievements.map((ach, i) => (
                      <li key={i} className="text-xs text-gray-400 flex gap-2">
                        <span className="text-accent">▹</span>
                        <span>{ach}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {item.technologies && (
                  <div className="flex flex-wrap gap-2 mt-3">
                    {item.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs rounded-md bg-white/5 text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Timeline
