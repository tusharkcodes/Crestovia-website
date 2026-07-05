/** Production site URL (https://crestovia.in). Override via VITE_SITE_URL. */
export const siteUrl = (import.meta.env.VITE_SITE_URL || 'https://crestovia.in').replace(/\/$/, '');

/**
 * Formspree (or compatible) endpoint for contact submissions.
 * Create a form at https://formspree.io and paste the URL here before deploying.
 */
export const contactFormUrl = (import.meta.env.VITE_CONTACT_FORM_URL || '').replace(/\/$/, '');
