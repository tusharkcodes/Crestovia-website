import { useState } from 'react'
import { motion } from 'framer-motion'

const getFanConfig = (count, compact = false) => {
  const spread = compact ? 11 : 14
  const offsetX = compact ? 28 : 38
  const baseY = compact ? 8 : 12

  if (count <= 1) return [{ rotate: 0, x: 0, y: 0, z: 1 }]

  const mid = (count - 1) / 2
  return Array.from({ length: count }, (_, i) => ({
    rotate: (i - mid) * spread,
    x: (i - mid) * offsetX,
    y: Math.abs(i - mid) * baseY,
    z: i + 1,
  }))
}

const FanCardStack = ({
  images,
  alt = 'Building',
  compact = false,
  className = '',
}) => {
  const [hovered, setHovered] = useState(null)
  const [isHovered, setIsHovered] = useState(false)
  const configs = getFanConfig(images.length, compact)

  const cardW = compact
    ? 'w-[135px] sm:w-[155px] md:w-[175px]'
    : 'w-[175px] sm:w-[205px] md:w-[230px] lg:w-[250px]'
  const cardH = compact
    ? 'h-[190px] sm:h-[220px] md:h-[245px]'
    : 'h-[250px] sm:h-[290px] md:h-[325px] lg:h-[350px]'

  return (
    <div
      className={`relative flex items-end justify-center ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false)
        setHovered(null)
      }}
    >
      {/* Decorative glow lines behind cards */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 400 300"
        fill="none"
        preserveAspectRatio="xMidYMid meet"
        aria-hidden="true"
      >
        <path
          d="M30,220 C120,160 200,260 300,180 C340,150 370,200 390,170"
          stroke="url(#fanLine1)"
          strokeWidth="1.5"
          opacity="0.5"
        />
        <path
          d="M10,250 C100,190 220,270 320,200 C360,170 380,220 400,190"
          stroke="url(#fanLine2)"
          strokeWidth="1"
          opacity="0.35"
        />
        <defs>
          <linearGradient id="fanLine1" x1="0" y1="0" x2="400" y2="0">
            <stop stopColor="#a78bfa" stopOpacity="0" />
            <stop offset="0.5" stopColor="#c4b5fd" />
            <stop offset="1" stopColor="#f0abfc" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="fanLine2" x1="0" y1="0" x2="400" y2="0">
            <stop stopColor="#ddd6fe" stopOpacity="0" />
            <stop offset="0.5" stopColor="#e9d5ff" />
            <stop offset="1" stopColor="#fbcfe8" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>

      <div className="relative h-full w-full flex items-end justify-center pb-2">
        {images.map((src, i) => {
          const cfg = configs[i]
          const isActive = hovered === i
          const spread = isHovered ? 1.35 : 1

          return (
            <motion.div
              key={`${src}-${i}`}
              className={`absolute ${cardW} ${cardH} cursor-pointer`}
              style={{
                transformOrigin: 'bottom center',
                zIndex: isActive ? 20 : cfg.z,
              }}
              initial={false}
              animate={{
                rotate: cfg.rotate * spread,
                x: cfg.x * spread,
                y: isActive ? cfg.y - 20 : cfg.y,
                scale: isActive ? 1.06 : 1,
              }}
              transition={{ type: 'spring', stiffness: 260, damping: 22 }}
              onMouseEnter={() => setHovered(i)}
            >
              <div className="w-full h-full rounded-[1.5rem] sm:rounded-[1.75rem] overflow-hidden bg-white border border-gray-100 shadow-[0_24px_60px_-14px_rgba(124,58,237,0.28)] ring-1 ring-black/[0.04]">
                <img
                  src={src}
                  alt={`${alt} ${i + 1}`}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}

export default FanCardStack
