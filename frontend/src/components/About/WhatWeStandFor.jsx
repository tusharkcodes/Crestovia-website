import { motion } from 'framer-motion';
import { values } from '../../data/about';
import { fadeInUp, staggerContainer } from '../../utils/animations';

export default function WhatWeStandFor() {
  return (
    <section className="section-padding relative overflow-hidden bg-gradient-to-br from-navy via-navy-light to-primary/80">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(37,99,235,0.25),transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,rgba(212,175,55,0.08),transparent_45%)]" />

      <div className="container-wide relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={fadeInUp}
          className="mx-auto mb-12 max-w-2xl text-center sm:mb-16"
        >
          <span className="mb-4 inline-block text-sm font-bold uppercase tracking-widest text-gold">
            Our Values
          </span>
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            What We Stand For
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={staggerContainer}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {values.map((value) => {
            const Icon = value.icon;
            return (
              <motion.article
                key={value.title}
                variants={fadeInUp}
                className="group rounded-2xl border border-slate-100 bg-white p-6 shadow-lg shadow-navy/5 transition-all duration-300 hover:scale-[1.03] hover:border-gold/40 hover:shadow-xl hover:shadow-gold/10 sm:p-8"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-gold/10 group-hover:text-gold">
                  <Icon size={24} />
                </div>
                <h3 className="text-lg font-bold text-navy">{value.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-500">
                  {value.description}
                </p>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
