import { FaInstagram, FaLinkedin, FaFacebook, FaYoutube } from 'react-icons/fa'
import { FOOTER_LINKS, SOCIAL_LINKS } from '../constants'

const iconMap = {
  instagram: FaInstagram,
  linkedin: FaLinkedin,
  facebook: FaFacebook,
  youtube: FaYoutube,
}

const Footer = () => {
  return (
    <footer className="relative border-t border-gray-200 bg-bg-secondary">
      <div className="container-custom px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <a href="#home" className="flex items-center gap-2 mb-4">
              <span className="w-9 h-9 rounded-xl bg-gradient-to-br from-purple-600 to-pink-500 flex items-center justify-center font-extrabold text-sm text-white">
                C
              </span>
              <span className="text-xl font-extrabold text-gray-900">
                Crest<span className="gradient-text">ovia</span>
              </span>
            </a>
            <p className="text-gray-600 text-sm leading-relaxed max-w-xs">
              Premium digital marketing agency specializing in Real Estate growth, branding, and lead generation.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-gray-900 font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2.5">
              {FOOTER_LINKS.quick.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-gray-600 text-sm hover:text-gray-900 hover:translate-x-1 inline-block transition-all duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-gray-900 font-bold mb-4">Services</h4>
            <ul className="space-y-2.5">
              {FOOTER_LINKS.services.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-600 text-sm hover:text-gray-900 hover:translate-x-1 inline-block transition-all duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-gray-900 font-bold mb-4">Follow Us</h4>
            <div className="flex items-center gap-3">
              {SOCIAL_LINKS.map((social) => {
                const Icon = iconMap[social.icon]
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-500 hover:text-gray-900 hover:border-purple-500/50 hover:bg-purple-50 transition-all duration-300"
                    aria-label={social.label}
                  >
                    <Icon className="text-sm" />
                  </a>
                )
              })}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm text-center sm:text-left">
            &copy; 2026 Crestovia. All Rights Reserved.
          </p>
          <p className="text-gray-400 text-xs">
            Engineered with precision.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
