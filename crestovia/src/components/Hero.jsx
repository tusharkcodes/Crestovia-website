import { motion } from 'framer-motion'
import { FaArrowTrendUp, FaChartLine, FaUsers, FaStar, FaArrowRight } from 'react-icons/fa6'
import HeroBackground from './HeroBackground'
import { useHeroAnimation } from '../animations/gsapAnimations'

const heroStats = [
  {
    icon: FaArrowTrendUp,
    value: '+450%',
    label: 'Lead Growth',
    className: 'absolute -top-6 -left-8 sm:-left-12 z-20',
    delay: 0,
  },
  {
    icon: FaChartLine,
    value: '95%',
    label: 'Campaign Success',
    className: 'absolute -right-8 sm:-right-12 top-[36%] z-20',
    delay: 1.2,
  },
  {
    icon: FaUsers,
    value: '120K+',
    label: 'Qualified Leads',
    className: 'absolute -bottom-6 left-[22%] z-20',
    delay: 2.4,
  },
]

const barHeights = [38, 62, 44, 78, 52, 92, 66]

const Hero = () => {
  const containerRef = useHeroAnimation()

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-screen flex items-center overflow-hidden bg-white pt-[5.5rem] pb-12 md:pt-28 md:pb-16"
    >
      <HeroBackground />

      <div className="container-custom px-5 sm:px-8 lg:px-10 relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-8 xl:gap-14 items-center">
          {/* Left — copy */}
          <div>
            <div className="hero-badge inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#f3efff] border border-purple-100 mb-8">
              <FaStar className="text-purple-500 text-[11px]" />
              <span className="text-[13px] text-purple-700 font-medium">
                Premium Real Estate Digital Marketing
              </span>
            </div>

            <h1 className="hero-heading text-[2.1rem] sm:text-[2.75rem] md:text-5xl lg:text-[3.15rem] xl:text-[3.4rem] font-extrabold leading-[1.15] mb-6 tracking-tight">
              <span className="text-gray-900">We Don&apos;t Chase Growth,</span>
              <br />
              <span className="relative inline-block gradient-text">
                We Engineer It.
                <svg
                  className="absolute -bottom-1 left-0 w-full h-3 overflow-visible"
                  viewBox="0 0 280 12"
                  fill="none"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <path
                    d="M4,8 C70,2 140,10 210,5 C240,3 265,6 276,7"
                    stroke="url(#heroUnderline)"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                  <defs>
                    <linearGradient id="heroUnderline" x1="0" y1="0" x2="280" y2="0">
                      <stop stopColor="#7c3aed" />
                      <stop offset="1" stopColor="#ec4899" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
            </h1>

            <p className="hero-sub text-gray-500 text-[15px] sm:text-base leading-[1.75] max-w-[480px] mb-9">
              Crestovia is a premium digital marketing agency helping Real Estate brands
              generate more leads, better branding, higher sales, and measurable business
              growth through creative strategies and AI-powered marketing.
            </p>

            <div className="hero-buttons flex flex-wrap items-center gap-3 sm:gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm sm:text-[15px] font-semibold text-white bg-gradient-to-r from-[#7c3aed] via-[#9333ea] to-[#ec4899] shadow-[0_8px_30px_rgba(124,58,237,0.35)] hover:shadow-[0_12px_36px_rgba(124,58,237,0.45)] hover:scale-[1.03] transition-all duration-300"
              >
                Get Started
                <FaArrowRight className="text-xs" />
              </a>
              <a
                href="#portfolio"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm sm:text-[15px] font-semibold text-gray-800 bg-white border border-gray-200 hover:border-purple-200 hover:bg-purple-50/50 transition-all duration-300"
              >
                Our Work
                <FaArrowRight className="text-xs" />
              </a>
            </div>
          </div>

          {/* Right — dashboard illustration */}
          <div className="hero-visual relative flex justify-center lg:justify-end mt-4 lg:mt-0">
            <div className="relative w-full max-w-[500px]">
              {/* Main dashboard */}
              <div className="relative bg-white rounded-[1.75rem] border border-gray-100/80 p-6 sm:p-7 shadow-[0_30px_90px_-20px_rgba(124,58,237,0.22)]">
                <div className="flex items-center gap-2 mb-5">
                  <div className="w-[11px] h-[11px] rounded-full bg-[#ff5f57]" />
                  <div className="w-[11px] h-[11px] rounded-full bg-[#febc2e]" />
                  <div className="w-[11px] h-[11px] rounded-full bg-[#28c840]" />
                  <span className="ml-auto text-xs text-gray-400 font-medium">
                    Analytics Dashboard
                  </span>
                </div>

                {/* Bar chart */}
                <div className="h-40 sm:h-48 rounded-2xl bg-gradient-to-br from-purple-50/90 to-pink-50/50 flex items-end px-5 pb-5 gap-2.5 sm:gap-3">
                  {barHeights.map((height, i) => (
                    <motion.div
                      key={i}
                      className="flex-1 rounded-t-[6px] bg-gradient-to-t from-[#7c3aed] via-[#a855f7] to-[#ec4899]"
                      initial={{ height: 0 }}
                      animate={{ height: `${height}%` }}
                      transition={{ duration: 0.9, delay: 0.6 + i * 0.07, ease: [0.22, 1, 0.36, 1] }}
                    />
                  ))}
                </div>

                {/* Placeholder widgets */}
                <div className="grid grid-cols-2 gap-3 mt-4">
                  <div className="h-[72px] rounded-xl bg-gray-50/90 border border-gray-100" />
                  <div className="h-[72px] rounded-xl bg-gray-50/90 border border-gray-100" />
                </div>
              </div>

              {/* Floating stat cards */}
              {heroStats.map((stat) => {
                const Icon = stat.icon
                return (
                  <motion.div
                    key={stat.label}
                    className={`hero-stat-card ${stat.className} bg-white rounded-2xl px-4 py-3 flex items-center gap-3 border border-gray-100/90 shadow-[0_16px_48px_-10px_rgba(124,58,237,0.18)]`}
                    animate={{ y: [0, -7, 0] }}
                    transition={{
                      duration: 4.5,
                      repeat: Infinity,
                      ease: 'easeInOut',
                      delay: stat.delay,
                    }}
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#f3efff] flex items-center justify-center flex-shrink-0">
                      <Icon className="text-[#7c3aed] text-[15px]" />
                    </div>
                    <div>
                      <p className="text-[17px] font-extrabold gradient-text leading-none mb-0.5">
                        {stat.value}
                      </p>
                      <p className="text-[11px] text-gray-500 font-medium">{stat.label}</p>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
