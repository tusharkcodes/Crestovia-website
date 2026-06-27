import { motion } from 'framer-motion'
import { useState } from 'react'
import { staggerItem } from '../animations/variants'

const ServiceCard = ({ service, index }) => {
  const [tilt, setTilt] = useState({ x: 0, y: 0 })
  const Icon = service.icon

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = (e.clientY - rect.top - rect.height / 2) / 20
    const y = -(e.clientX - rect.left - rect.width / 2) / 20
    setTilt({ x, y })
  }

  const handleMouseLeave = () => setTilt({ x: 0, y: 0 })

  return (
    <motion.div
      variants={staggerItem}
      className="group relative"
      style={{
        transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        transition: 'transform 0.15s ease-out',
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="glass-card glass-card-hover p-6 md:p-8 h-full relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/0 to-pink-500/0 group-hover:from-purple-600/10 group-hover:to-pink-500/10 transition-all duration-500 rounded-3xl" />

        <div className="relative z-10">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-600/20 to-pink-500/20 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
            <Icon className="text-2xl text-purple-400 group-hover:text-pink-400 transition-colors duration-300" />
          </div>

          <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3 group-hover:gradient-text transition-all duration-300">
            {service.title}
          </h3>

          <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
        </div>

        <div className="absolute -bottom-px -right-px w-24 h-24 bg-gradient-to-tl from-purple-500/20 to-transparent rounded-tl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
    </motion.div>
  )
}

export default ServiceCard
