import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading'
import ServiceCard from './ServiceCard'
import { services } from '../data/services'
import { staggerContainer, viewportConfig } from '../animations/variants'

const Services = () => {
  return (
    <section id="services" className="relative section-padding bg-bg-secondary/50">
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-purple-600/5 blur-[120px]" />
      </div>

      <div className="container-custom relative z-10">
        <SectionHeading
          title="Services We Offer"
          subtitle="Helping Real Estate Businesses Scale Digitally."
        />

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 md:gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Services
