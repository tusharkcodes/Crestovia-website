import { motion } from 'framer-motion'
import { viewportConfig } from '../animations/variants'

const AnimatedWord = ({ children, index, className = '' }) => (
  <motion.span
    className={`inline-block ${className}`}
    initial={{ opacity: 0, y: 50, rotateX: -40 }}
    whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
    viewport={viewportConfig}
    transition={{
      duration: 0.6,
      delay: index * 0.08,
      ease: [0.22, 1, 0.36, 1],
    }}
  >
    {children}
  </motion.span>
)

const GrowthStatement = () => {
  const line1 = [
    { text: 'We', gradient: false },
    { text: "Don't", gradient: false },
    { text: 'Chase', gradient: false },
    { text: 'Growth', gradient: 'purple' },
  ]
  const line2 = [
    { text: 'We', gradient: false },
    { text: 'Engineer', gradient: 'pink' },
    { text: 'It.', gradient: 'pink' },
  ]
  const line3 = ['Our', 'Work', "Doesn't", 'Imagine', 'Dreams']
  const line4 = ['It', 'Shares', 'Them.']

  let wordIndex = 0

  return (
    <section className="relative section-padding bg-bg-secondary overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-purple-600/5 blur-[150px]" />
      </div>

      <div className="container-custom relative z-10 space-y-20 md:space-y-32">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-extrabold leading-tight text-balance">
            {line1.map((item) => {
              const idx = wordIndex++
              const gradientClass =
                item.gradient === 'purple'
                  ? 'gradient-text'
                  : item.gradient === 'pink'
                    ? 'gradient-text-animated'
                    : 'text-gray-900'
              return (
                <AnimatedWord key={item.text} index={idx} className={`mr-3 sm:mr-4 ${gradientClass}`}>
                  {item.text}
                </AnimatedWord>
              )
            })}
            <br className="hidden sm:block" />
            {line2.map((item) => {
              const idx = wordIndex++
              const gradientClass =
                item.gradient === 'pink'
                  ? 'gradient-text-animated'
                  : 'text-gray-900'
              return (
                <AnimatedWord
                  key={item.text}
                  index={idx}
                  className={`mr-3 sm:mr-4 ${gradientClass}`}
                >
                  {item.text}
                </AnimatedWord>
              )
            })}
          </h2>
        </div>

        <div className="flex items-center justify-center gap-4">
          <div className="h-px flex-1 max-w-xs bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />
          <div className="w-2 h-2 rounded-full bg-pink-500" />
          <div className="h-px flex-1 max-w-xs bg-gradient-to-r from-transparent via-pink-500/50 to-transparent" />
        </div>

        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-balance">
            {line3.map((word) => {
              const idx = wordIndex++
              return (
                <AnimatedWord key={word} index={idx} className="text-gray-600 mr-3 sm:mr-4">
                  {word}
                </AnimatedWord>
              )
            })}
            <br className="hidden sm:block" />
            {line4.map((word) => {
              const idx = wordIndex++
              return (
                <AnimatedWord key={word} index={idx} className="gradient-text mr-3 sm:mr-4">
                  {word}
                </AnimatedWord>
              )
            })}
          </h2>
        </div>
      </div>
    </section>
  )
}

export default GrowthStatement
