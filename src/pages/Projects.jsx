import { useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ExternalLink, Github } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import ProjectCard from '../components/ProjectCard'
import projects from '../data/projects.json'

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All')
  const [selectedProject, setSelectedProject] = useState(null)

  const categories = useMemo(
    () => ['All', ...new Set(projects.map((p) => p.category))],
    []
  )

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter((p) => p.category === activeFilter)

  return (
    <div className="pt-28 pb-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <SectionHeading
          title="My Projects"
          subtitle="A collection of my recent work and experiments"
        />

        {/* FILTER */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                activeFilter === cat
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
          key={activeFilter}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredProjects.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={i}
              onClick={setSelectedProject}
            />
          ))}
        </motion.div>

        {filteredProjects.length === 0 && (
          <p className="text-center text-gray-400 py-12">
            No projects found in this category.
          </p>
        )}
      </div>

      {/* MODAL */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="glass rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
            >
              <div className="relative">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-64 object-cover rounded-t-3xl"
                />
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-red-500/20"
                  aria-label="Close"
                >
                  <X size={18} />
                </button>
                <span className="absolute bottom-4 left-4 px-3 py-1 text-xs rounded-full glass text-accent font-medium">
                  {selectedProject.category}
                </span>
              </div>

              <div className="p-6 md:p-8">
                <h2 className="text-3xl font-bold font-poppins mb-3">
                  {selectedProject.title}
                </h2>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {selectedProject.longDescription || selectedProject.description}
                </p>

                <div className="mb-6">
                  <h3 className="text-sm font-semibold text-accent mb-3 uppercase tracking-wider">
                    Technologies Used
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-sm rounded-md bg-primary/10 text-primary border border-primary/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3">
                  <a
                    href={selectedProject.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-5 py-3 rounded-xl gradient-btn text-white font-medium"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl glass font-medium hover:bg-white/10"
                  >
                    <Github size={16} />
                    Source Code
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Projects
