import { motion } from 'framer-motion';
import { fadeInUp } from '../../utils/animations';
import LogoMarquee from './LogoMarquee';

export default function Clients() {
  return (
    <section id="clients" className="section-padding overflow-hidden bg-navy">
      <div className="container-wide">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="mx-auto mb-16 max-w-2xl text-center lg:mb-20"
        >
          <motion.span
            variants={fadeInUp}
            custom={0}
            className="mb-4 inline-block text-xs font-bold uppercase tracking-widest text-gold"
          >
            Trusted Partners
          </motion.span>
          <motion.h2
            variants={fadeInUp}
            custom={0.1}
            className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl"
          >
            Our Trusted Clients
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            custom={0.2}
            className="mt-5 text-base text-white/60 sm:text-lg"
          >
            We&apos;ve worked with amazing brands.
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <LogoMarquee />
        </motion.div>
      </div>
    </section>
  );
}
