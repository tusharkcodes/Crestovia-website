import { motion } from 'framer-motion';
import { company, stats } from '../../data/company';
import { fadeInUp, slideInLeft, slideInRight } from '../../utils/animations';
import StatCard from './StatCard';

export default function AboutCompany() {
  return (
    <section id="about" className="section-padding relative overflow-hidden bg-gradient-to-br from-navy via-navy-light to-navy">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(37,99,235,0.2),transparent_50%)]" />

      <div className="container-wide relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
          >
            <span className="mb-4 inline-block text-xs font-bold uppercase tracking-widest text-gold">
              Who We Are
            </span>
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
              About <span className="text-gradient">Company</span>
            </h2>

            <div className="mt-8 space-y-5">
              {company.about.map((paragraph, index) => (
                <motion.p
                  key={index}
                  variants={fadeInUp}
                  custom={0.1 + index * 0.1}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="text-base leading-relaxed text-white/70 sm:text-lg"
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="relative"
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-primary/20 to-cyan-500/10 p-8 shadow-2xl backdrop-blur-sm sm:p-12"
            >
              <div className="flex aspect-square items-center justify-center rounded-2xl bg-navy/50">
                <div className="text-center">
                  <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full border-2 border-gold/40 bg-primary/20">
                    <span className="text-3xl font-bold text-gold">AD</span>
                  </div>
                  <p className="text-xl font-bold text-white">{company.name}</p>
                </div>
              </div>
            </motion.div>

            <div className="absolute -inset-4 -z-10 rounded-3xl bg-primary/20 blur-3xl" />
          </motion.div>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-4 sm:gap-6 lg:mt-20 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <StatCard key={stat.label} stat={stat} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
