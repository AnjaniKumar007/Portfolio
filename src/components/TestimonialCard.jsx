import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'

const TestimonialCard = ({ testimonial, index = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="glass rounded-2xl p-6 card-hover relative"
    >
      <Quote className="absolute top-4 right-4 text-accent/20" size={40} />

      <p className="text-gray-300 text-sm italic mb-6 leading-relaxed">
        "{testimonial.message}"
      </p>

      <div className="flex items-center gap-3">
        <img
          src={testimonial.avatar}
          alt={testimonial.name}
          loading="lazy"
          className="w-12 h-12 rounded-full object-cover border-2 border-accent/30"
        />
        <div>
          <h4 className="font-semibold text-sm">{testimonial.name}</h4>
          <p className="text-xs text-gray-400">
            {testimonial.role} · {testimonial.company}
          </p>
        </div>
      </div>
    </motion.div>
  )
}

export default TestimonialCard
