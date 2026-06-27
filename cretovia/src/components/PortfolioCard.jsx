import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaMapMarkerAlt, FaArrowRight } from 'react-icons/fa'
import { staggerItem } from '../animations/variants'

const PortfolioCard = ({ project }) => {
  const gallery = project.images?.length ? project.images : [project.image]
  const [activeIndex, setActiveIndex] = useState(0)
  const hasGallery = gallery.length > 1

  useEffect(() => {
    if (!hasGallery) return

    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % gallery.length)
    }, 4000)

    return () => clearInterval(timer)
  }, [hasGallery, gallery.length])

  return (
    <motion.article
      variants={staggerItem}
      className="group glass-card overflow-hidden glass-card-hover"
    >
      <div className="relative overflow-hidden aspect-[4/3]">
        <AnimatePresence mode="wait">
          <motion.img
            key={gallery[activeIndex]}
            src={gallery[activeIndex]}
            alt={`${project.name} — Real Estate Project`}
            loading="lazy"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
        </AnimatePresence>

        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 via-gray-900/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

        <div className="absolute top-4 left-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-xs font-medium text-white">
            <FaMapMarkerAlt className="text-pink-400 text-[10px]" />
            {project.location}
          </span>
        </div>

        {hasGallery && (
          <div className="absolute bottom-4 left-4 flex gap-1.5">
            {gallery.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={(e) => {
                  e.stopPropagation()
                  setActiveIndex(i)
                }}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === activeIndex ? 'w-6 bg-white' : 'w-1.5 bg-white/50 hover:bg-white/80'
                }`}
                aria-label={`View ${project.name} image ${i + 1}`}
              />
            ))}
          </div>
        )}

        <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
          <span className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 flex items-center justify-center">
            <FaArrowRight className="text-white text-sm" />
          </span>
        </div>
      </div>

      <div className="p-5 md:p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:gradient-text transition-all duration-300">
          {project.name}
        </h3>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.campaigns.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 rounded-full text-[11px] font-medium bg-purple-50 text-purple-700 border border-purple-200"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-600/20 to-pink-500/20 border border-purple-500/30">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span className="text-sm font-semibold gradient-text">{project.achievement}</span>
        </div>
      </div>
    </motion.article>
  )
}

export default PortfolioCard
