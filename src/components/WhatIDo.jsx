import {
  BarChart3,
  FileText,
  Globe,
  Share2,
  Target,
  Users,
} from 'lucide-react'
import { portfolioData } from '../data/portfolioData'

const icons = {
  target: Target,
  users: Users,
  share: Share2,
  chart: BarChart3,
  file: FileText,
  globe: Globe,
}

export default function WhatIDo() {
  return (
    <section id="what-i-do" className="mx-auto max-w-6xl px-4 py-6 sm:px-6">
      <div className="organic-frame bg-white px-5 py-10 sm:px-10 lg:px-12 lg:py-14">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <h2 className="font-display text-4xl font-semibold tracking-tight text-navy sm:text-5xl">
            What I do<span className="text-orange">.</span>
          </h2>
          <p className="max-w-md text-sm leading-relaxed text-navy/65 sm:text-base">
            Digital marketing focused on visibility, growth, leads and conversion.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {portfolioData.services.map((service) => {
            const Icon = icons[service.icon] ?? Globe
            return (
              <article
                key={service.id}
                className="organic-card group bg-white p-5 transition duration-300 hover:-translate-y-1 hover:border-orange/50 hover:shadow-lg"
              >
                <div className="flex items-start justify-between">
                  <span className="text-sm font-semibold text-orange">{service.id}</span>
                  <Icon className="h-5 w-5 text-navy/50 transition group-hover:text-orange" aria-hidden="true" />
                </div>
                <h3 className="mt-4 text-lg font-bold tracking-wide text-navy">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-navy/70">
                  {service.description}
                </p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
