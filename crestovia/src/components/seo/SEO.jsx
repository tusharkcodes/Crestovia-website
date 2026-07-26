import { Helmet } from 'react-helmet-async';
import {
  absoluteUrl,
  DEFAULT_OG_IMAGE,
  SITE_LOCALE,
  SITE_NAME,
  THEME_COLOR,
} from '../../config/seo';

/**
 * Reusable page SEO head tags.
 *
 * @example
 * <SEO title="..." description="..." keywords="..." canonical="/about" image="" type="website" />
 */
export default function SEO({
  title,
  description,
  keywords = '',
  canonical = '/',
  image = DEFAULT_OG_IMAGE,
  type = 'website',
  noindex = false,
  publishedTime,
  modifiedTime,
  author = 'Crestovia',
}) {
  const fullTitle = title?.includes(SITE_NAME) ? title : `${title} | ${SITE_NAME}`;
  const canonicalUrl = canonical.startsWith('http') ? canonical : absoluteUrl(canonical);
  const ogImage = image?.startsWith('http') ? image : absoluteUrl(image || '/crestovia-logo.png');
  const robots = noindex ? 'noindex, nofollow' : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1';

  return (
    <Helmet prioritizeSeoTags>
      <html lang="en" />
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords ? <meta name="keywords" content={keywords} /> : null}
      <meta name="author" content={author} />
      <meta name="robots" content={robots} />
      <meta name="googlebot" content={robots} />
      <meta name="language" content="English" />
      <meta httpEquiv="content-language" content="en-IN" />
      <meta name="theme-color" content={THEME_COLOR} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph */}
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content={SITE_LOCALE} />
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:alt" content={fullTitle} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {type === 'article' && publishedTime ? (
        <meta property="article:published_time" content={publishedTime} />
      ) : null}
      {type === 'article' && modifiedTime ? (
        <meta property="article:modified_time" content={modifiedTime} />
      ) : null}
      {type === 'article' ? <meta property="article:author" content={author} /> : null}
    </Helmet>
  );
}

/** Thin alias kept for maintainability / STEP 23 checklist */
export function MetaTags(props) {
  return <SEO {...props} />;
}

export function Canonical({ path }) {
  const href = path?.startsWith('http') ? path : absoluteUrl(path || '/');
  return (
    <Helmet>
      <link rel="canonical" href={href} />
    </Helmet>
  );
}
