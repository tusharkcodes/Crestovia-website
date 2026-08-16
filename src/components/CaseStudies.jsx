import { useEffect, useState } from 'react'
import { Building2, Factory, GraduationCap, Layers, X } from 'lucide-react'
import { portfolioData } from '../data/portfolioData'

const icons = {
  building: Building2,
  factory: Factory,
  graduation: GraduationCap,
  layers: Layers,
}

export default function CaseStudies() {
  const [active, setActive] = useState(null)

  useEffect(() => {
    if (!active) return undefined
    const onKey = (event) => {
      if (event.key === 'Escape') setActive(null)
    }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [active])

  return (
    <section id="work" className="mx-auto max-w-6xl px-4 py-6 sm:px-6">
      <div className="organic-frame bg-white px-5 py-10 sm:px-10 lg:px-12 lg:py-14">
        <h2 className="font-display text-4xl font-semibold text-navy sm:text-5xl">
          Case Studies
        </h2>
        <p className="mt-3 max-w-xl text-sm text-navy/65 sm:text-base">
          Industries I&apos;ve worked with and helped grow through digital marketing.
        </p>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {portfolioData.industries.map((item) => {
            const Icon = icons[item.icon] ?? Layers
            return (
              <article
                key={item.id}
                className="organic-card flex flex-col bg-paper p-6 transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex items-start justify-between">
                  <span className="text-sm font-semibold text-orange">{item.id}</span>
                  <Icon className="h-6 w-6 text-navy/50" aria-hidden="true" />
                </div>
                <h3 className="mt-4 font-display text-2xl text-navy">{item.name}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-navy/70">
                  {item.summary}
                </p>
                <button
                  type="button"
                  className="mt-6 self-start text-sm font-semibold text-orange hover:text-navy"
                  onClick={() => setActive(item)}
                >
                  View Case Study →
                </button>
              </article>
            )
          })}
        </div>
      </div>

      {active && (
        <div
          className="fixed inset-0 z-[60] flex items-end justify-center bg-navy/40 p-4 backdrop-blur-sm sm:items-center"
          onClick={() => setActive(null)}
          role="presentation"
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="case-title"
            className="max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-[2rem] bg-white p-6 shadow-2xl sm:p-8"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-orange">
                  {active.id} · Industry
                </p>
                <h3 id="case-title" className="mt-2 font-display text-3xl text-navy">
                  {active.name}
                </h3>
              </div>
              <button
                type="button"
                className="rounded-full border border-navy/15 p-2"
                aria-label="Close case study"
                onClick={() => setActive(null)}
              >
                <X size={18} />
              </button>
            </div>
            <dl className="mt-6 space-y-4 text-sm">
              <div>
                {/* <dt className="font-semibold text-navy">Challenge</dt>
                <dd className="mt-1 text-navy/70">{active.challenge}</dd> */}
              </div>
              <div>
                {/* <dt className="font-semibold text-navy">Approach</dt>
                <dd className="mt-1 text-navy/70">{active.approach}</dd> */}
              </div>
              <div>
                <dt className="font-semibold text-navy">Services</dt>
                <dd className="mt-2 flex flex-wrap gap-2">
                  {active.services.map((service) => (
                    <span
                      key={service}
                      className="rounded-full bg-orange-soft px-3 py-1 text-xs font-medium text-navy"
                    >
                      {service}
                    </span>
                  ))}
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-navy">Outcome</dt>
                <dd className="mt-1 text-navy/70">{active.outcome}</dd>
              </div>
            </dl>
            <a
              href="#contact"
              className="mt-8 inline-flex rounded-full bg-navy px-5 py-2.5 text-sm font-semibold text-white"
              onClick={() => setActive(null)}
            >
              Discuss Your Growth
            </a>
          </div>
        </div>
      )}
    </section>
  )
}
