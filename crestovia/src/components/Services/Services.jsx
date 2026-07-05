import { motion } from 'framer-motion';
import { services } from '../../data/services';
import { fadeInUp, staggerContainer } from '../../utils/animations';
import ServiceCard from './ServiceCard';

export default function Services() {
  return (
    <section id="services" className="section-padding bg-white">
      <div className="container-wide">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <motion.span
            variants={fadeInUp}
            custom={0}
            className="mb-4 inline-block rounded-md bg-gold/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-gold"
          >
            Our Services
          </motion.span>
          <motion.h2
            variants={fadeInUp}
            custom={0.1}
            className="text-3xl font-extrabold tracking-tight text-navy sm:text-4xl lg:text-5xl"
          >
            What Our Digital Marketing Agency{' '}
            <span className="text-gradient">Offers</span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            custom={0.2}
            className="mt-5 text-base leading-relaxed text-slate-500 sm:text-lg"
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
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8"
        >
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
