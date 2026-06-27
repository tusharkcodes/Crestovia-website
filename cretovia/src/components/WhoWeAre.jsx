import { motion } from 'framer-motion'
import Counter from './Counter'
import FanCardStack from './FanCardStack'
import { stats } from '../data/team'
import { fadeLeft, fadeRight, staggerContainer, viewportConfig } from '../animations/variants'
import { collageImages } from '../data/about'

const WhoWeAre = () => {
  return (
    <section id="about" className="relative section-padding">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Fanned building cards */}
          <motion.div
            className="relative h-[400px] sm:h-[460px] md:h-[500px] lg:h-[540px]"
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
            <FanCardStack
              images={collageImages}
              alt="Real Estate Project"
              className="h-full"
            />
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full bg-purple-100/60 blur-[80px]" />
          </motion.div>

          {/* Content */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
              Who We Are
            </h2>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-10">
              Crestovia is a modern digital marketing agency specializing in Real Estate
              marketing. We combine creativity, technology, AI, branding, and performance
              marketing to deliver measurable growth and high-quality leads.
            </p>

            <motion.div
              className="grid grid-cols-2 sm:grid-cols-4 gap-6 md:gap-8"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
            >
              {stats.map((stat) => (
                <Counter
                  key={stat.label}
                  value={stat.value}
                  suffix={stat.suffix}
                  label={stat.label}
                />
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default WhoWeAre
