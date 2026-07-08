import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import gallery from '../data/gallery.json'

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('All')
  const [lightboxIndex, setLightboxIndex] = useState(null)

  const categories = ['All', ...new Set(gallery.map((g) => g.category))]
  const filtered = activeCategory === 'All'
    ? gallery
    : gallery.filter((g) => g.category === activeCategory)

  const openLightbox = (index) => setLightboxIndex(index)
  const closeLightbox = () => setLightboxIndex(null)
  const next = () => setLightboxIndex((i) => (i + 1) % filtered.length)
  const prev = () => setLightboxIndex((i) => (i - 1 + filtered.length) % filtered.length)

  return (
    <div className="pt-28 pb-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <SectionHeading
          title="Gallery"
          subtitle="Moments captured from events, projects, and journeys"
        />

        {/* FILTER */}
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

        {/* MASONRY GRID */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4"
        >
          {filtered.map((img, i) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              whileHover={{ scale: 1.02 }}
              onClick={() => openLightbox(i)}
              className="relative overflow-hidden rounded-2xl cursor-pointer group break-inside-avoid"
            >
              <img
                src={img.url}
                alt={img.title}
                loading="lazy"
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <div>
                  <p className="text-white font-semibold">{img.title}</p>
                  <p className="text-xs text-gray-300">{img.category}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {filtered.length === 0 && (
          <p className="text-center text-gray-400 py-12">
            No images in this category.
          </p>
        )}
      </div>

      {/* LIGHTBOX */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4"
          >
            <button
              onClick={(e) => { e.stopPropagation(); closeLightbox() }}
              className="absolute top-4 right-4 w-12 h-12 rounded-full glass flex items-center justify-center hover:bg-red-500/20 z-10"
              aria-label="Close"
            >
              <X size={20} />
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); prev() }}
              className="absolute left-4 w-12 h-12 rounded-full glass flex items-center justify-center hover:bg-white/20 z-10"
              aria-label="Previous"
            >
              <ChevronLeft size={24} />
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); next() }}
              className="absolute right-4 w-12 h-12 rounded-full glass flex items-center justify-center hover:bg-white/20 z-10"
              aria-label="Next"
            >
              <ChevronRight size={24} />
            </button>

            <motion.img
              key={lightboxIndex}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={filtered[lightboxIndex].url}
              alt={filtered[lightboxIndex].title}
              onClick={(e) => e.stopPropagation()}
              className="max-w-full max-h-[85vh] rounded-2xl object-contain"
            />

            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 glass rounded-full px-5 py-2 text-sm">
              {filtered[lightboxIndex].title} · {lightboxIndex + 1}/{filtered.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Gallery
