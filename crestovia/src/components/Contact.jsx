import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaInstagram, FaLinkedin, FaFacebook, FaYoutube } from 'react-icons/fa'
import SectionHeading from './SectionHeading'
import Button from './Button'
import { CONTACT_INFO, SOCIAL_LINKS, SERVICE_OPTIONS } from '../constants'
import { fadeLeft, fadeRight, viewportConfig } from '../animations/variants'

const iconMap = {
  instagram: FaInstagram,
  linkedin: FaLinkedin,
  facebook: FaFacebook,
  youtube: FaYoutube,
}

const Contact = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: '',
  })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const validate = () => {
    const newErrors = {}
    if (!form.name.trim()) newErrors.name = 'Name is required'
    if (!form.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = 'Invalid email address'
    }
    if (!form.phone.trim()) newErrors.phone = 'Phone is required'
    if (!form.message.trim()) newErrors.message = 'Message is required'
    return newErrors
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const newErrors = validate()
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }
    setErrors({})
    setSubmitted(true)
    setForm({ name: '', email: '', phone: '', company: '', service: '', message: '' })
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }))
  }

  const inputClass = (field) =>
    `w-full px-4 py-3.5 rounded-2xl bg-gray-50 border ${
      errors[field] ? 'border-red-500/50' : 'border-gray-200'
    } text-gray-900 placeholder-gray-400 focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/30 transition-all duration-300`

  return (
    <section id="contact" className="relative section-padding">
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-pink-500/5 blur-[120px]" />
      </div>

      <div className="container-custom relative z-10">
        <SectionHeading title="Let's Build Something Amazing Together" />

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Info */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="space-y-8"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-purple-600/20 flex items-center justify-center flex-shrink-0">
                <FaEnvelope className="text-purple-400" />
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-1">Email</p>
                <a href={`mailto:${CONTACT_INFO.email}`} className="text-gray-900 font-medium hover:gradient-text transition-all duration-300">
                  {CONTACT_INFO.email}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-purple-600/20 flex items-center justify-center flex-shrink-0">
                <FaPhone className="text-purple-400" />
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-1">Phone</p>
                <a href={`tel:${CONTACT_INFO.phone.replace(/\s/g, '')}`} className="text-gray-900 font-medium hover:gradient-text transition-all duration-300">
                  {CONTACT_INFO.phone}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-purple-600/20 flex items-center justify-center flex-shrink-0">
                <FaMapMarkerAlt className="text-purple-400" />
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-1">Address</p>
                <p className="text-gray-900 font-medium">{CONTACT_INFO.address}</p>
              </div>
            </div>

            <div className="flex items-center gap-4 pt-4">
              {SOCIAL_LINKS.map((social) => {
                const Icon = iconMap[social.icon]
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 rounded-full bg-gray-50 border border-gray-200 flex items-center justify-center text-gray-500 hover:text-gray-900 hover:border-purple-500/50 hover:bg-purple-50 transition-all duration-300"
                    aria-label={social.label}
                  >
                    <Icon />
                  </a>
                )
              })}
            </div>
          </motion.div>

          {/* Right Form */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
            <form onSubmit={handleSubmit} className="glass-card p-6 md:p-8 space-y-5" noValidate>
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name *"
                    value={form.name}
                    onChange={handleChange}
                    className={inputClass('name')}
                    aria-label="Full Name"
                  />
                  {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email *"
                    value={form.email}
                    onChange={handleChange}
                    className={inputClass('email')}
                    aria-label="Email"
                  />
                  {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone *"
                    value={form.phone}
                    onChange={handleChange}
                    className={inputClass('phone')}
                    aria-label="Phone"
                  />
                  {errors.phone && <p className="text-red-400 text-xs mt-1">{errors.phone}</p>}
                </div>
                <div>
                  <input
                    type="text"
                    name="company"
                    placeholder="Company"
                    value={form.company}
                    onChange={handleChange}
                    className={inputClass('company')}
                    aria-label="Company"
                  />
                </div>
              </div>

              <div>
                <select
                  name="service"
                  value={form.service}
                  onChange={handleChange}
                  className={`${inputClass('service')} appearance-none cursor-pointer`}
                  aria-label="Service"
                >
                  <option value="" className="bg-white">Select a Service</option>
                  {SERVICE_OPTIONS.map((s) => (
                    <option key={s} value={s} className="bg-white">{s}</option>
                  ))}
                </select>
              </div>

              <div>
                <textarea
                  name="message"
                  placeholder="Your Message *"
                  rows={4}
                  value={form.message}
                  onChange={handleChange}
                  className={`${inputClass('message')} resize-none`}
                  aria-label="Message"
                />
                {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message}</p>}
              </div>

              <Button type="submit" className="w-full sm:w-auto">
                Send Message
              </Button>

              {submitted && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-green-600 text-sm"
                >
                  Thank you! We&apos;ll get back to you soon.
                </motion.p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
