import { useState } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { portfolioData } from '../data/portfolioData'

function isPlaceholder(value) {
  return !value || value.startsWith('ADD_')
}

const emptyForm = {
  name: '',
  email: '',
  phone: '',
  service: '',
  company: '',
  budget: '',
  message: '',
}

export default function Contact() {
  const { contact, formServices, formBudgets } = portfolioData
  const [form, setForm] = useState(emptyForm)
  const [status, setStatus] = useState('')
  const [error, setError] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  function updateField(event) {
    const { name, value } = event.target
    setForm((current) => ({ ...current, [name]: value }))
  }

  async function handleSubmit(event) {
    event.preventDefault()
    setStatus('')
    setError(false)
    setSubmitting(true)

    try {
      const response = await fetch(contact.formEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name.trim(),
          email: form.email.trim(),
          phone: form.phone.trim(),
          service: form.service,
          company: form.company.trim(),
          budget: form.budget,
          message: form.message.trim(),
        }),
      })

      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`)
      }

      setForm(emptyForm)
      setStatus('Your message has been sent. Prajakta will get back to you soon.')
    } catch {
      setError(true)
      setStatus('The message could not be sent. Please try again in a moment.')
    } finally {
      setSubmitting(false)
    }
  }

  const fieldClass =
    'mt-1 w-full rounded-2xl border border-navy/15 bg-white px-4 py-3 outline-none focus:border-orange'

  return (
    <section id="contact" className="mx-auto max-w-6xl px-4 py-6 sm:px-6">
      <div className="organic-frame bg-white px-5 py-10 sm:px-10 lg:px-12 lg:py-14">
        <h2 className="font-display text-4xl font-semibold text-navy sm:text-5xl">
          Let&apos;s work together<span className="text-orange">.</span>
        </h2>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-navy/70 sm:text-base">
          Have a business that needs better digital visibility, stronger lead generation or a more
          effective marketing strategy? Let&apos;s talk.
        </p>

        <div className="mt-10 grid gap-10 lg:grid-cols-2">
          <div className="space-y-4 text-sm">
            <p>
              <span className="block text-xs uppercase tracking-[0.16em] text-navy/50">Name</span>
              {portfolioData.name}
            </p>
            <p>
              <span className="block text-xs uppercase tracking-[0.16em] text-navy/50">Role</span>
              {portfolioData.role}
            </p>
            <p>
              <span className="block text-xs uppercase tracking-[0.16em] text-navy/50">Crestovia</span>
              {portfolioData.crestovia.label}
            </p>
            <p>
              <span className="block text-xs uppercase tracking-[0.16em] text-navy/50">Website</span>
              <a
                href={contact.website}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 font-semibold text-orange"
              >
                Crestovia website <ArrowUpRight size={14} />
              </a>
            </p>
            <p>
              <span className="block text-xs uppercase tracking-[0.16em] text-navy/50">Email</span>
              {isPlaceholder(contact.email) ? (
                <span className="text-navy/45">contact@crestovia.in</span>
              ) : (
                <a href={`mailto:${contact.email}`}>{contact.email}</a>
              )}
            </p>
            <p>
              <span className="block text-xs uppercase tracking-[0.16em] text-navy/50">Phone</span>
              {isPlaceholder(contact.phone) ? (
                <span className="text-navy/45">+91 9623409666</span>
              ) : (
                <a href={`tel:${contact.phone}`}>{contact.phone}</a>
              )}
            </p>
            <p>
              <span className="block text-xs uppercase tracking-[0.16em] text-navy/50">LinkedIn</span>
              <a
                href={contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-orange hover:text-navy"
              >
                LinkedIn
              </a>
            </p>
            <p>
              <span className="block text-xs uppercase tracking-[0.16em] text-navy/50">Instagram</span>
              <a
                href={contact.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-orange hover:text-navy"
              >
                Instagram
              </a>
            </p>
          </div>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <label className="block text-sm font-medium">
              Name
              <input
                required
                name="name"
                autoComplete="name"
                value={form.name}
                onChange={updateField}
                className={fieldClass}
              />
            </label>
            <label className="block text-sm font-medium">
              Email
              <input
                required
                type="email"
                name="email"
                autoComplete="email"
                value={form.email}
                onChange={updateField}
                className={fieldClass}
              />
            </label>
            <label className="block text-sm font-medium">
              Phone
              <input
                required
                type="tel"
                name="phone"
                autoComplete="tel"
                value={form.phone}
                onChange={updateField}
                className={fieldClass}
              />
            </label>
            <label className="block text-sm font-medium">
              Company
              <input
                required
                name="company"
                autoComplete="organization"
                value={form.company}
                onChange={updateField}
                className={fieldClass}
              />
            </label>
            <label className="block text-sm font-medium">
              Service
              <select
                required
                name="service"
                value={form.service}
                onChange={updateField}
                className={fieldClass}
              >
                <option value="" disabled>
                  Select a service
                </option>
                {formServices.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </label>
            <label className="block text-sm font-medium">
              Budget
              <select
                required
                name="budget"
                value={form.budget}
                onChange={updateField}
                className={fieldClass}
              >
                <option value="" disabled>
                  Select a budget
                </option>
                {formBudgets.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </label>
            <label className="block text-sm font-medium">
              Message
              <textarea
                required
                name="message"
                rows={4}
                value={form.message}
                onChange={updateField}
                className={fieldClass}
              />
            </label>
            <button
              type="submit"
              disabled={submitting}
              className="inline-flex rounded-full bg-orange px-6 py-3 text-sm font-semibold text-white transition hover:bg-navy disabled:opacity-60"
            >
              {submitting ? 'Sending…' : 'Start a Conversation →'}
            </button>
            {status ? (
              <p className={`text-sm ${error ? 'text-orange' : 'text-navy/70'}`} role="status">
                {status}
              </p>
            ) : null}
          </form>
        </div>
      </div>
    </section>
  )
}
