import { motion } from 'framer-motion'
import { fadeUp, viewportConfig } from '../animations/variants'

const SectionHeading = ({ title, subtitle, align = 'center', className = '' }) => {
  const alignClass = {
    center: 'text-center mx-auto',
    left: 'text-left',
    right: 'text-right ml-auto',
  }

  return (
    <motion.div
      className={`max-w-3xl mb-14 md:mb-16 ${alignClass[align]} ${className}`}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewportConfig}
    >
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 text-balance">
        {title}
      </h2>
      {subtitle && (
        <p className="text-gray-600 text-base md:text-lg leading-relaxed">{subtitle}</p>
      )}
    </motion.div>
  )
}

export default SectionHeading
