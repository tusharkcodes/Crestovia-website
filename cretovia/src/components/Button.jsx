import { motion } from 'framer-motion'
import { useRef } from 'react'

const Button = ({
  children,
  variant = 'primary',
  href,
  onClick,
  type = 'button',
  className = '',
  magnetic = false,
}) => {
  const ref = useRef(null)

  const handleMouseMove = (e) => {
    if (!magnetic || !ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2
    ref.current.style.transform = `translate(${x * 0.25}px, ${y * 0.25}px)`
  }

  const handleMouseLeave = () => {
    if (ref.current) ref.current.style.transform = 'translate(0, 0)'
  }

  const baseStyles =
    'relative inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-semibold text-sm md:text-base transition-all duration-300 overflow-hidden group'

  const variants = {
    primary:
      'bg-gradient-to-r from-purple-600 via-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 hover:scale-105',
    outline:
      'border border-gray-300 text-gray-900 hover:border-purple-500/50 hover:bg-purple-50 backdrop-blur-sm',
    ghost: 'text-gray-600 hover:text-gray-900 hover:bg-gray-100',
  }

  const combinedClass = `${baseStyles} ${variants[variant]} ${className}`

  const content = (
    <>
      <span className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <span className="relative z-10">{children}</span>
      <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/10" />
    </>
  )

  const motionProps = {
    ref,
    className: combinedClass,
    onMouseMove: magnetic ? handleMouseMove : undefined,
    onMouseLeave: magnetic ? handleMouseLeave : undefined,
    whileTap: { scale: 0.97 },
  }

  if (href) {
    return (
      <motion.a href={href} {...motionProps}>
        {content}
      </motion.a>
    )
  }

  return (
    <motion.button type={type} onClick={onClick} {...motionProps}>
      {content}
    </motion.button>
  )
}

export default Button
