/** Public site URL (SEO, absolute links). Override via VITE_SITE_URL. */
export const siteUrl = (import.meta.env.VITE_SITE_URL || 'https://crestovia.in').replace(
  /\/$/,
  '',
);

/**
 * Backend API base URL.
 * - Development: http://localhost:8000
 * - Production:  https://crestovia.in/api
 */
export const API_URL = (import.meta.env.VITE_API_URL || '').replace(/\/$/, '');
