import { motion } from 'framer-motion';
import { fadeInUp } from '../../utils/animations';
import ContactInfo from './ContactInfo';
import ContactForm from './ContactForm';

export default function ContactSection() {
  return (
    <section className="section-padding bg-slate-50/50">
      <div className="container-wide px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={fadeInUp}
          className="overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-2xl shadow-navy/10"
        >
          <div className="grid lg:grid-cols-[2fr_3fr]">
            <div className="p-4 sm:p-6 lg:p-8">
              <ContactInfo />
            </div>
            <div className="border-t border-slate-100 lg:border-l lg:border-t-0">
              <ContactForm />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
