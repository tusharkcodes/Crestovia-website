import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { services } from '../../data/services';
import { fadeInUp, staggerContainer } from '../../utils/animations';

export default function ServicesGrid({ activeServiceId, compact = false }) {
  return (
    <section className={`bg-white ${compact ? 'py-16 sm:py-20' : 'section-padding'}`} id="services">
      <div className="container-wide">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="mx-auto mb-12 max-w-3xl text-center"
        >
          <motion.span
            variants={fadeInUp}
            custom={0}
            className="mb-4 inline-block rounded-md bg-gold/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-gold"
          >
            Explore More
          </motion.span>
          <motion.h2
            variants={fadeInUp}
            custom={0.1}
            className="text-3xl font-extrabold tracking-tight text-navy sm:text-4xl"
          >
            Our <span className="text-gradient">Services</span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            custom={0.2}
            className="mt-4 text-base leading-relaxed text-slate-500"
          >
            Discover the full range of solutions we offer to elevate your brand.
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6"
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            const isActive = activeServiceId === service.id;

            return (
              <motion.div key={service.id} variants={fadeInUp} custom={index * 0.05}>
                <Link
                  to={`/services/${service.id}`}
                  className={`group flex h-full flex-col rounded-2xl border p-6 transition-all duration-300 sm:p-7 ${
                    isActive
                      ? 'border-primary/30 bg-primary/5 shadow-lg shadow-primary/10 ring-1 ring-primary/20'
                      : 'border-slate-100 bg-white shadow-md shadow-navy/5 hover:-translate-y-1 hover:border-primary/20 hover:shadow-xl hover:shadow-primary/10'
                  }`}
                >
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-slate-50">
                    <Icon size={40} />
                  </div>
                  <h3 className="mb-2 text-lg font-bold text-navy">{service.name}</h3>
                  <p className="flex-1 text-sm leading-relaxed text-slate-500 line-clamp-2">
                    {service.description}
                  </p>
                  <span
                    className={`mt-4 text-sm font-semibold transition-colors ${
                      isActive ? 'text-primary' : 'text-slate-400 group-hover:text-primary'
                    }`}
                  >
                    {isActive ? 'Currently viewing' : 'Learn more →'}
                  </span>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
