import { motion } from 'framer-motion';
import {
  HiOutlineLightBulb,
  HiOutlineUserGroup,
  HiOutlineExclamation,
  HiOutlineCheckCircle,
  HiOutlineCog,
  HiOutlineDocumentText,
  HiOutlineStar,
} from 'react-icons/hi';
import { fadeInUp } from '../../utils/animations';

function Section({ icon: Icon, title, children }) {
  return (
    <motion.div variants={fadeInUp} className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm sm:p-8">
      <div className="mb-4 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
          <Icon size={20} />
        </div>
        <h3 className="text-lg font-bold text-navy">{title}</h3>
      </div>
      {children}
    </motion.div>
  );
}

export default function ServiceDetails({ service }) {
  return (
    <section className="bg-slate-50/50 py-16 sm:py-20">
      <div className="container-wide px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
          className="mx-auto max-w-4xl space-y-6"
        >
          <Section icon={HiOutlineLightBulb} title="What It Is">
            <p className="text-sm leading-relaxed text-slate-500 sm:text-base">{service.whatItIs}</p>
          </Section>

          <Section icon={HiOutlineUserGroup} title="Who It's For">
            <p className="text-sm leading-relaxed text-slate-500 sm:text-base">{service.whoItIsFor}</p>
          </Section>

          <div className="grid gap-6 sm:grid-cols-2">
            <Section icon={HiOutlineExclamation} title="Problems We Solve">
              <ul className="space-y-2">
                {service.problems.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-slate-500">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </Section>

            <Section icon={HiOutlineCheckCircle} title="Benefits">
              <ul className="space-y-2">
                {service.benefits.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-slate-500">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                    {item}
                  </li>
                ))}
              </ul>
            </Section>
          </div>

          <Section icon={HiOutlineCog} title="Our Process">
            <div className="grid gap-4 sm:grid-cols-2">
              {service.process.map((step, index) => (
                <div
                  key={step.title}
                  className="rounded-xl border border-slate-100 bg-slate-50/80 p-4"
                >
                  <span className="text-xs font-bold uppercase tracking-widest text-gold">
                    Step {index + 1}
                  </span>
                  <h4 className="mt-1 font-bold text-navy">{step.title}</h4>
                  <p className="mt-1 text-sm text-slate-500">{step.description}</p>
                </div>
              ))}
            </div>
          </Section>

          <Section icon={HiOutlineDocumentText} title="Deliverables">
            <div className="flex flex-wrap gap-2">
              {service.deliverables.map((item) => (
                <span
                  key={item}
                  className="rounded-lg border border-primary/15 bg-primary/5 px-3 py-1.5 text-sm font-medium text-primary"
                >
                  {item}
                </span>
              ))}
            </div>
          </Section>

          <Section icon={HiOutlineStar} title="Why Choose Us">
            <p className="text-sm leading-relaxed text-slate-500 sm:text-base">{service.whyChooseUs}</p>
          </Section>
        </motion.div>
      </div>
    </section>
  );
}
