import { useState } from 'react';
import { motion } from 'framer-motion';
import { HiArrowRight, HiOutlineCheckCircle } from 'react-icons/hi';
import { serviceOptions, budgetOptions } from '../../data/contact';
import { FormInput, FormSelect, FormTextarea } from './FormField';

const initialForm = {
  fullName: '',
  email: '',
  phone: '',
  service: '',
  company: '',
  budget: '',
  message: '',
};

function validate(values) {
  const errors = {};

  if (!values.fullName.trim()) {
    errors.fullName = 'Full name is required';
  } else if (values.fullName.trim().length < 2) {
    errors.fullName = 'Please enter a valid name';
  }

  if (!values.email.trim()) {
    errors.email = 'Email is required';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = 'Please enter a valid email address';
  }

  if (!values.phone.trim()) {
    errors.phone = 'Phone number is required';
  } else if (!/^[\d\s+\-()]{8,}$/.test(values.phone)) {
    errors.phone = 'Please enter a valid phone number';
  }

  if (!values.service) {
    errors.service = 'Please select a service';
  }

  if (!values.budget) {
    errors.budget = 'Please select a budget range';
  }

  if (!values.message.trim()) {
    errors.message = 'Message is required';
  } else if (values.message.trim().length < 20) {
    errors.message = 'Please provide at least 20 characters';
  }

  return errors;
}

export default function ContactForm() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const apiBase = import.meta.env.VITE_API_URL || '';

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate(form);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    setSubmitError('');

    try {
      const response = await fetch(`${apiBase}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const data = await response.json().catch(() => ({}));

      if (!response.ok) {
        if (data.errors) {
          setErrors(data.errors);
        }
        setSubmitError(data.message || 'Something went wrong. Please try again.');
        return;
      }

      setSubmitted(true);
      setForm(initialForm);
      setErrors({});
    } catch {
      setSubmitError('Network error. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex h-full flex-col items-center justify-center rounded-2xl border border-primary/20 bg-primary/5 p-10 text-center sm:rounded-3xl"
      >
        <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
          <HiOutlineCheckCircle size={28} />
        </div>
        <h3 className="text-xl font-bold text-navy">Message Sent Successfully</h3>
        <p className="mt-2 max-w-sm text-sm text-slate-500">
          Thank you for reaching out. Our team will get back to you within 24 hours.
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="mt-6 text-sm font-semibold text-primary transition-colors hover:text-primary-dark"
        >
          Send another message
        </button>
      </motion.div>
    );
  }

  return (
    <div className="h-full p-6 sm:p-8 lg:p-10">
      <h2 className="text-2xl font-extrabold text-navy sm:text-3xl">Get in Touch</h2>
      <p className="mt-2 text-sm text-slate-500">
        Tell us about your project and we&apos;ll craft a tailored solution for you.
      </p>

      <form onSubmit={handleSubmit} noValidate className="mt-8 space-y-5">
        <div className="grid gap-5 sm:grid-cols-2">
          <FormInput
            label="Full Name"
            id="fullName"
            name="fullName"
            type="text"
            placeholder="John Doe"
            value={form.fullName}
            onChange={handleChange}
            error={errors.fullName}
            required
          />
          <FormInput
            label="Email Address"
            id="email"
            name="email"
            type="email"
            placeholder="john@company.com"
            value={form.email}
            onChange={handleChange}
            error={errors.email}
            required
          />
        </div>

        <FormInput
          label="Phone Number"
          id="phone"
          name="phone"
          type="tel"
          placeholder="+91 98765 43210"
          value={form.phone}
          onChange={handleChange}
          error={errors.phone}
          required
        />

        <div className="grid gap-5 sm:grid-cols-2">
          <FormSelect
            label="Service"
            id="service"
            name="service"
            value={form.service}
            onChange={handleChange}
            error={errors.service}
            required
          >
            <option value="">Select a service</option>
            {serviceOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </FormSelect>

          <FormInput
            label="Company Name"
            id="company"
            name="company"
            type="text"
            placeholder="Your company (optional)"
            value={form.company}
            onChange={handleChange}
          />
        </div>

        <FormSelect
          label="Project Budget"
          id="budget"
          name="budget"
          value={form.budget}
          onChange={handleChange}
          error={errors.budget}
          required
        >
          <option value="">Select budget range</option>
          {budgetOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </FormSelect>

        <FormTextarea
          label="Message"
          id="message"
          name="message"
          placeholder="Tell us about your project..."
          value={form.message}
          onChange={handleChange}
          error={errors.message}
          required
        />

        {submitError && (
          <p className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600" role="alert">
            {submitError}
          </p>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-blue-600 px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-primary/25 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-primary/35 disabled:cursor-not-allowed disabled:opacity-70"
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
          {!isSubmitting && (
            <HiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" size={18} />
          )}
        </button>
      </form>
    </div>
  );
}
