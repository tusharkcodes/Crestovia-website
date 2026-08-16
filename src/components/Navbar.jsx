import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { portfolioData } from '../data/portfolioData'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-navy/10 bg-paper/80 shadow-sm backdrop-blur-xl'
          : 'bg-transparent'
      }`}
    >
      <nav
        className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6"
        aria-label="Primary"
      >
        <a href="#about" className="text-lg font-extrabold tracking-tight text-navy">
          {portfolioData.name}
        </a>

        <ul className="hidden items-center gap-8 text-sm font-medium text-navy/80 lg:flex">
          {portfolioData.nav.map((item) => (
            <li key={item.href}>
              <a className="transition hover:text-orange" href={item.href}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden rounded-full bg-orange px-4 py-2 text-sm font-semibold text-white transition hover:bg-navy lg:inline-flex"
        >
          Let&apos;s Work Together
        </a>

        <button
          type="button"
          className="inline-flex rounded-full border border-navy/20 p-2 lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      <div
        id="mobile-menu"
        className={`overflow-hidden border-t border-navy/10 bg-paper transition-[max-height,opacity] duration-300 lg:hidden ${
          open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <ul className="flex flex-col gap-4 px-6 py-5 text-base font-medium">
          {portfolioData.nav.map((item) => (
            <li key={item.href}>
              <a href={item.href} onClick={() => setOpen(false)}>
                {item.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              className="inline-flex rounded-full bg-orange px-4 py-2 text-white"
              onClick={() => setOpen(false)}
            >
              Let&apos;s Work Together
            </a>
          </li>
        </ul>
      </div>
    </header>
  )
}
