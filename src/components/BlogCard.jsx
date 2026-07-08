import { motion } from 'framer-motion'
import { Clock, Calendar } from 'lucide-react'
import { Link } from 'react-router-dom'

const BlogCard = ({ post }) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -8 }}
      className="glass rounded-2xl overflow-hidden card-hover group"
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
        <span className="absolute top-3 left-3 px-3 py-1 text-xs rounded-full glass text-accent font-medium">
          {post.category}
        </span>
      </div>

      <div className="p-5">
        <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
          <span className="flex items-center gap-1">
            <Calendar size={12} />
            {new Date(post.date).toLocaleDateString('en-US', {
              month: 'short',
              day: 'numeric',
              year: 'numeric',
            })}
          </span>
          <span className="flex items-center gap-1">
            <Clock size={12} />
            {post.readTime}
          </span>
        </div>

        <h3 className="text-lg font-bold font-poppins mb-2 group-hover:text-accent transition-colors line-clamp-2">
          {post.title}
        </h3>
        <p className="text-gray-400 text-sm mb-4 line-clamp-3">
          {post.excerpt}
        </p>

        <Link
          to={`/blog/${post.id}`}
          className="text-sm text-accent hover:underline font-medium"
        >
          Read More →
        </Link>
      </div>
    </motion.article>
  )
}

export default BlogCard
