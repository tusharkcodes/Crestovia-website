/**
 * SEO-friendly image wrapper — preserves existing layout via className.
 * Prefer descriptive alt text; falls back to title or empty decorative alt.
 */
export default function OptimizedImage({
  src,
  alt = '',
  title,
  width,
  height,
  className = '',
  loading = 'lazy',
  decoding = 'async',
  fetchPriority,
  ...props
}) {
  return (
    <img
      src={src}
      alt={alt}
      title={title || alt}
      width={width}
      height={height}
      loading={loading}
      decoding={decoding}
      fetchPriority={fetchPriority}
      className={className}
      {...props}
    />
  );
}
