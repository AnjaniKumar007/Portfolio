import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { Search } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import BlogCard from '../components/BlogCard'
import blog from '../data/blog.json'

const Blog = () => {
  const [search, setSearch] = useState('')
  const [activeCategory, setActiveCategory] = useState('All')

  const categories = ['All', ...new Set(blog.map((b) => b.category))]

  const filtered = useMemo(() => {
    return blog.filter((post) => {
      const matchesSearch =
        post.title.toLowerCase().includes(search.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(search.toLowerCase())
      const matchesCategory = activeCategory === 'All' || post.category === activeCategory
      return matchesSearch && matchesCategory
    })
  }, [search, activeCategory])

  return (
    <div className="pt-28 pb-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <SectionHeading
          title="Blog"
          subtitle="Thoughts, tutorials, and insights on tech"
        />

        {/* SEARCH */}
        <div className="max-w-md mx-auto mb-6">
          <div className="relative">
            <Search
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
            />
            <input
              type="text"
              placeholder="Search posts..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-xl glass focus:outline-none focus:ring-2 focus:ring-accent/50"
            />
          </div>
        </div>

        {/* CATEGORIES */}
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

        {/* POSTS GRID */}
        <motion.div
          key={`${search}-${activeCategory}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filtered.map((post, i) => (
            <BlogCard key={post.id} post={post} index={i} />
          ))}
        </motion.div>

        {filtered.length === 0 && (
          <p className="text-center text-gray-400 py-12">
            No posts found matching your criteria.
          </p>
        )}
      </div>
    </div>
  )
}

export default Blog
