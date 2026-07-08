import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'

const ProjectCard = ({ project, onClick }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -8 }}
      className="glass rounded-2xl overflow-hidden card-hover group cursor-pointer"
      onClick={() => onClick && onClick(project)}
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
        <span className="absolute top-3 right-3 px-3 py-1 text-xs rounded-full glass text-accent font-medium">
          {project.category}
        </span>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-xl font-bold font-poppins mb-2 group-hover:text-accent transition-colors">
          {project.title}
        </h3>
        <p className="text-gray-400 text-sm mb-4 line-clamp-2">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 text-xs rounded-md bg-primary/10 text-primary border border-primary/20"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="flex gap-3">
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg gradient-btn text-white text-sm font-medium"
          >
            <ExternalLink size={14} />
            Live Demo
          </a>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="flex items-center justify-center gap-2 px-4 py-2 rounded-lg glass text-sm font-medium hover:bg-white/10"
            aria-label="GitHub"
          >
            <Github size={14} />
          </a>
        </div>
      </div>
    </motion.div>
  )
}

export default ProjectCard
