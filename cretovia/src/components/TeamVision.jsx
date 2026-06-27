import { motion } from 'framer-motion'
import { teamCards } from '../data/team'
import { staggerContainer, staggerItem, viewportConfig } from '../animations/variants'

const TeamVision = () => {
  return (
    <section className="relative section-padding">
      <div className="container-custom">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          {teamCards.map((card) => (
            <motion.div
              key={card.id}
              variants={staggerItem}
              className="group glass-card glass-card-hover p-8 md:p-10 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/0 to-pink-500/0 group-hover:from-purple-600/10 group-hover:to-pink-500/5 transition-all duration-500 rounded-3xl" />

              <div className="relative z-10">
                <div className="w-12 h-1 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 mb-6 group-hover:w-20 transition-all duration-500" />
                <h3 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-4 group-hover:gradient-text transition-all duration-300">
                  {card.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{card.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default TeamVision
