import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export const useHeroAnimation = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

      tl.from('.hero-badge', { opacity: 0, y: 20, duration: 0.6 })
        .from('.hero-heading', { opacity: 0, y: 40, duration: 0.8 }, '-=0.3')
        .from('.hero-sub', { opacity: 0, y: 30, duration: 0.7 }, '-=0.4')
        .from('.hero-buttons', { opacity: 0, y: 20, duration: 0.6 }, '-=0.3')
        .from('.hero-visual', { opacity: 0, scale: 0.9, duration: 1 }, '-=0.6')
        .from('.hero-stat-card', { opacity: 0, y: 30, stagger: 0.15, duration: 0.6 }, '-=0.5')
        .from('.hero-orb', { opacity: 0, scale: 0.8, stagger: 0.15, duration: 1.4, ease: 'power2.out' }, '-=0.9')
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return containerRef
}
