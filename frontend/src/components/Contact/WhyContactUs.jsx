import { motion } from 'framer-motion';
import { whyContactUs } from '../../data/contact';
import { fadeInUp, staggerContainer } from '../../utils/animations';

export default function WhyContactUs() {
  return (
    <section className="section-padding bg-white">
      <div className="container-wide">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={fadeInUp}
          className="mx-auto mb-12 max-w-2xl text-center sm:mb-16"
        >
          <span className="mb-4 inline-block text-sm font-bold uppercase tracking-widest text-gold">
            Why Reach Out
          </span>
          <h2 className="text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
            Why Contact Us
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={staggerContainer}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {whyContactUs.map((item) => {
            const Icon = item.icon;
            return (
              <motion.article
                key={item.title}
                variants={fadeInUp}
                className="group rounded-2xl border border-slate-100 bg-white p-6 shadow-lg shadow-navy/5 transition-all duration-300 hover:scale-[1.02] hover:border-primary/20 hover:shadow-xl sm:p-8"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-gold/10 group-hover:text-gold">
                  <Icon size={24} />
                </div>
                <h3 className="text-lg font-bold text-navy">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-500">{item.description}</p>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
