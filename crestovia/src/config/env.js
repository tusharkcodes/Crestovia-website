/** Site URL. Defaults to localhost in dev, production domain otherwise. Override via VITE_SITE_URL. */
const defaultSiteUrl = import.meta.env.DEV ? 'http://localhost:5173' : 'https://crestovia.in';
export const siteUrl = (import.meta.env.VITE_SITE_URL || defaultSiteUrl).replace(/\/$/, '');

/**
 * Formspree (or compatible) endpoint for contact submissions.
 * Leave empty for local dev (form logs to console). Set before deploying.
 */
export const contactFormUrl = (import.meta.env.VITE_CONTACT_FORM_URL || '').replace(/\/$/, '');
