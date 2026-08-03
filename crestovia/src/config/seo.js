/** Absolute site origin (no trailing slash). */
export const SITE_URL = (import.meta.env.VITE_SITE_URL || 'https://crestovia.in').replace(
  /\/$/,
  '',
);

export const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image-v2.png`;
export const FAVICON_URL = `${SITE_URL}/favicon-v3.png`;
export const SITE_NAME = 'Crestovia';
export const SITE_LOCALE = 'en_IN';
export const THEME_COLOR = '#0A3478';

/** Map SEO-friendly root paths → internal service ids */
export const SERVICE_SEO_ALIASES = {
  'website-development': 'web-development',
  'seo-services': 'seo',
  'google-ads': 'meta-ads',
  'meta-ads': 'meta-ads',
  branding: 'graphic-design',
  'social-media-marketing': 'social-media-campaigns',
  'ai-automation': 'ai-development',
};

export function absoluteUrl(path = '/') {
  if (!path || path === '/') return `${SITE_URL}/`;
  const normalized = path.startsWith('/') ? path : `/${path}`;
  return `${SITE_URL}${normalized}`;
}

export function resolveServiceId(slug) {
  if (!slug) return null;
  if (SERVICE_SEO_ALIASES[slug]) return SERVICE_SEO_ALIASES[slug];
  return slug;
}
