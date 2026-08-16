import { portfolioData } from '../data/portfolioData'

function isPlaceholder(value) {
  return !value || value.startsWith('ADD_')
}

export default function Footer() {
  const { contact } = portfolioData
  const socials = [
    { label: 'LinkedIn', href: contact.linkedin },
    { label: 'Instagram', href: contact.instagram },
  ].filter((item) => !isPlaceholder(item.href))

  return (
    <footer className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
      <div className="grid gap-8 border-t border-navy/10 pt-8 text-sm text-navy/70 md:grid-cols-3">
        <div>
          <p className="font-display text-lg text-navy">{portfolioData.name}</p>
          <p>{portfolioData.role}</p>
        </div>
        <div>
          <a
            href={portfolioData.crestovia.url}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-navy"
          >
            {portfolioData.crestovia.name}
          </a>
          <p className="mt-1 max-w-xs">{portfolioData.crestovia.tagline}</p>
        </div>
        <div className="flex flex-wrap gap-x-4 gap-y-2 md:justify-end">
          {portfolioData.nav.map((item) => (
            <a key={item.href} href={item.href} className="hover:text-orange">
              {item.label === 'Work' ? 'Case Studies' : item.label}
            </a>
          ))}
          {socials.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-orange"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
      <p className="py-6 text-xs text-navy/50">© 2026 {portfolioData.name}. All rights reserved.</p>
    </footer>
  )
}
