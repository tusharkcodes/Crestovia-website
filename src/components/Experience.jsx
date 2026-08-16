import { portfolioData } from '../data/portfolioData'

export default function Experience() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-6 sm:px-6">
      <div className="organic-frame bg-white px-5 py-10 sm:px-10 lg:px-12 lg:py-14">
        <h2 className="font-display text-4xl italic text-navy sm:text-5xl">Work in the</h2>
        <div className="relative mt-10 grid gap-8 lg:grid-cols-4">
          {/* <div className="pointer-events-none absolute left-8 right-8 top-7 hidden h-px bg-navy/15 lg:block" /> */}
          {portfolioData.experience.map((item, index) => (
            <article key={item.industry} className="relative">
              <div className="mb-4 flex items-center gap-3">
                <span className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full bg-orange text-xs font-bold text-white">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className="font-display text-2xl text-navy">{item.industry}</h3>
              </div>
              <ul className="space-y-2 border-l border-navy/15 pl-5 lg:border-l-0 lg:pl-0">
                {item.focus.map((line) => (
                  <li key={line} className="text-sm text-navy/70">
                    → {line}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
