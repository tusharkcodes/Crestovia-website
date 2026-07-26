import { motion } from 'framer-motion';
import { services } from '../../data/services';
import { fadeInUp, staggerContainer } from '../../utils/animations';
import ServiceCard from './ServiceCard';

export default function Services() {
  return (
    <section id="services" className="bg-surface px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="container-wide">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="mx-auto mb-10 max-w-2xl text-center sm:mb-12 lg:mb-14"
        >
          <motion.span
            variants={fadeInUp}
            custom={0}
            className="mb-3 inline-block rounded-md bg-accent/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest text-accent sm:text-xs"
          >
            Our Services
          </motion.span>
          <motion.h2
            variants={fadeInUp}
            custom={0.1}
            className="text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl lg:text-4xl"
          >
            What Our Digital Marketing Agency{' '}
            <span className="text-gradient">Offers</span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            custom={0.2}
            className="mt-3 text-sm leading-relaxed text-muted sm:mt-4 sm:text-base"
          >
            End-to-end digital solutions engineered to elevate your brand, amplify
            your reach, and deliver measurable business growth.
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4"
        >
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} compact />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
