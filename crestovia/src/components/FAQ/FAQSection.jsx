import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiChevronDown } from 'react-icons/hi';
import { faqs as defaultFaqs } from '../../data/faq';
import { FAQPageSchema } from '../seo/Schema';

export default function FAQSection({
  faqs = defaultFaqs,
  title = 'Frequently Asked Questions',
  subtitle = 'Answers about Crestovia — a digital marketing and AI automation agency in Pune, Maharashtra, India.',
  withSchema = true,
}) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="section-padding bg-surface-alt/60" aria-labelledby="faq-heading">
      {withSchema ? <FAQPageSchema faqs={faqs} /> : null}
      <div className="container-wide">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <p className="mb-3 text-xs font-bold uppercase tracking-widest text-accent">FAQ</p>
          <h2 id="faq-heading" className="text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl">
            {title}
          </h2>
          <p className="mt-3 text-sm text-muted sm:text-base">{subtitle}</p>
        </div>

        <div className="mx-auto max-w-3xl space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            const panelId = `faq-panel-${index}`;
            const buttonId = `faq-button-${index}`;
            return (
              <div
                key={faq.question}
                className="overflow-hidden rounded-2xl border border-border bg-surface shadow-sm"
              >
                <h3 className="text-base font-semibold text-foreground">
                  <button
                    id={buttonId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition-colors hover:bg-primary-light/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                  >
                    <span>{faq.question}</span>
                    <HiChevronDown
                      className={`h-5 w-5 shrink-0 text-primary transition-transform duration-300 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                      aria-hidden="true"
                    />
                  </button>
                </h3>
                <AnimatePresence initial={false}>
                  {isOpen ? (
                    <motion.div
                      id={panelId}
                      role="region"
                      aria-labelledby={buttonId}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <p className="border-t border-border px-5 py-4 text-sm leading-relaxed text-muted">
                        {faq.answer}
                      </p>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
