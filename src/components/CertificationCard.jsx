import { motion } from 'framer-motion'
import { Award, ExternalLink } from 'lucide-react'

const CertificationCard = ({ cert }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -8 }}
      className="glass rounded-2xl overflow-hidden card-hover group"
    >
      <div className="relative h-40 overflow-hidden">
        <img
          src={cert.image}
          alt={cert.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        <div className="absolute top-3 right-3 w-10 h-10 rounded-full glass flex items-center justify-center">
          <Award size={18} className="text-accent" />
        </div>
      </div>

      <div className="p-5">
        <h3 className="text-lg font-bold font-poppins mb-2 group-hover:text-accent transition-colors line-clamp-2">
          {cert.title}
        </h3>
        <p className="text-gray-400 text-sm mb-1">{cert.organization}</p>
        <p className="text-gray-500 text-xs mb-3">{cert.date}</p>
        <p className="text-xs text-gray-500 mb-4 font-mono">
          ID: {cert.credentialId}
        </p>
        <a
          href={cert.verifyUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm text-accent hover:underline"
        >
          <ExternalLink size={14} />
          Verify Certificate
        </a>
      </div>
    </motion.div>
  )
}

export default CertificationCard
