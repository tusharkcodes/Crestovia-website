import { ArrowUpRight } from 'lucide-react'
import { portfolioData } from '../data/portfolioData'
import portrait from '../assets/prajakta.jpg'

function Spark({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 40 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M2 18 C10 4, 18 4, 22 12"
        stroke="#f47414"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
      <path
        d="M18 20 C24 8, 32 7, 38 14"
        stroke="#f47414"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
    </svg>
  )
}

export default function Hero() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-4 pb-10 pt-4 sm:px-6">
      <div className="relative overflow-visible px-2 py-6 sm:py-8">
        <div className="flex justify-center">
          <span className="relative inline-flex items-center rounded-full bg-white px-5 py-2 text-sm font-semibold text-navy shadow-sm">
            Hello!
            <Spark className="absolute -right-10 -top-4 h-6 w-10" />
            <Spark className="absolute -left-10 -top-3 h-6 w-10 rotate-180" />
          </span>
        </div>

        <h1 className="relative mx-auto mt-6 max-w-4xl text-center text-3xl font-extrabold tracking-tight text-navy sm:text-5xl lg:text-6xl">
          I&apos;m <span className="text-orange">{portfolioData.name}</span>
          <span aria-hidden="true"> 👋</span>
          <br />
          <span className="text-[0.72em] font-bold">Digital Growth &amp; AI
          Marketing Specialist</span>
          <Spark className="absolute right-[8%] top-2 hidden h-7 w-12 sm:block" />
        </h1>

        <div className="relative mx-auto mt-8 grid max-w-5xl items-center gap-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(280px,1.2fr)_minmax(0,0.9fr)]">
          <blockquote className="hidden text-left text-sm leading-relaxed text-navy/55 lg:block">
            <span className="block font-serif text-4xl leading-none text-orange">&ldquo;</span>
            {portfolioData.intro}
          </blockquote>

          <div className="relative mx-auto w-full max-w-[740px]">
            <div className="relative mx-auto flex h-[360px] w-[240px] items-end justify-center sm:h-[430px] sm:w-[280px]">
              <div
                className="absolute bottom-8 left-1/2 h-[240px] w-[240px] -translate-x-1/2 rounded-full sm:h-[280px] sm:w-[280px]"
                aria-hidden="true"
              />
              <img
                src={portrait}
                alt="Prajakta Pawar, Digital Marketing Specialist, wearing a navy blazer"
                width={680}
                height={920}
                className="sticker-photo reveal relative z-[1] h-[340px] w-[220px] rounded-[1.6rem] object-cover object-[center_12%] sm:h-[410px] sm:w-[250px]"
              />
            </div>

            <div className="pointer-events-none absolute inset-0 hidden md:block">
              {portfolioData.specialties.map((item, index) => (
                <span
                  key={item.label}
                  className={`pointer-events-auto absolute z-10 inline-flex items-center gap-1.5 rounded-full bg-navy px-3 py-2 text-xs font-semibold text-white shadow-lg ${
                    index % 2 === 0 ? 'float-a' : 'float-b'
                  } ${item.pos}`}
                >
                  <span aria-hidden="true">{item.emoji}</span>
                  {item.label}
                </span>
              ))}
            </div>
          </div>

          <div className="hidden text-right lg:block">
            <p className="text-lg font-extrabold text-navy">Crestovia</p>
            <p className="mt-1 text-sm text-navy/55">
              Digital Marketing &amp; AI Automation
            </p>
            <a
              href={portfolioData.crestovia.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center justify-end gap-1 text-sm font-semibold text-orange"
            >
              Explore Crestovia <ArrowUpRight size={14} />
            </a>
          </div>
        </div>

        <div className="mt-6 flex flex-wrap justify-center gap-2 md:hidden">
          {portfolioData.specialties.map((item) => (
            <span
              key={item.label}
              className="inline-flex items-center gap-1.5 rounded-full bg-navy px-3 py-2 text-xs font-semibold text-white"
            >
              <span aria-hidden="true">{item.emoji}</span>
              {item.label}
            </span>
          ))}
        </div>

        <p className="mx-auto mt-5 max-w-md text-center text-sm text-navy/60 lg:hidden">
          {portfolioData.intro}
        </p>

        {/* <div className="relative z-20 mt-8 flex flex-col items-center justify-center gap-3 sm:-mt-8 sm:flex-row">
          <a
            href="#work"
            className="inline-flex min-w-40 items-center justify-center gap-2 rounded-full bg-orange px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-orange/30 transition hover:-translate-y-0.5"
          >
            Portfolio <ArrowUpRight size={16} />
          </a>
          <a
            href="#contact"
            className="inline-flex min-w-40 items-center justify-center rounded-full bg-navy px-7 py-3.5 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-orange"
          >
            Hire me
          </a>
        </div> */}
      </div>
    </section>
  )
}
