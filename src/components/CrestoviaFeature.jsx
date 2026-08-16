import { ArrowUpRight } from 'lucide-react'
import { portfolioData } from '../data/portfolioData'

export default function CrestoviaFeature() {
  const { crestovia } = portfolioData

  return (
    <section className="mx-auto max-w-6xl px-4 py-6 sm:px-6">
      <div className="relative overflow-hidden rounded-[2rem] bg-navy px-6 py-10 text-white sm:px-12 lg:py-14">
        <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-orange/30 blur-2xl" />
        <p className="inline-flex rounded-full border border-white/20 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-orange">
          {crestovia.name}
        </p>
        <h2 className="mt-5 max-w-2xl font-display text-3xl font-semibold sm:text-5xl">
          {crestovia.heading}
        </h2>
        <p className="mt-5 max-w-2xl text-sm leading-relaxed text-white/80 sm:text-base">
          {crestovia.copy}
        </p>
        <p className="mt-4 max-w-2xl text-sm text-white/60">{crestovia.verifiedNote}</p>
        <a
          href={crestovia.url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-orange px-5 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-navy"
        >
          Explore Crestovia <ArrowUpRight size={16} />
        </a>
      </div>
    </section>
  )
}
