import { Link } from 'react-router-dom';

/**
 * Compact breadcrumb for padded heroes.
 * @param {'light'|'dark'} tone — dark for navy heroes
 */
export default function InlineBreadcrumb({ items = [], tone = 'light' }) {
  if (!items.length) return null;

  const muted = tone === 'dark' ? 'text-white/60' : 'text-muted';
  const current = tone === 'dark' ? 'text-white' : 'text-foreground';
  const linkHover = tone === 'dark' ? 'hover:text-[#FF7A00]' : 'hover:text-primary';

  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol className={`flex flex-wrap items-center gap-2 text-xs ${muted}`}>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={`${item.path}-${item.name}`} className="inline-flex items-center gap-2">
              {index > 0 ? <span aria-hidden="true">/</span> : null}
              {isLast ? (
                <span className={`font-medium ${current}`} aria-current="page">
                  {item.name}
                </span>
              ) : (
                <Link to={item.path} className={linkHover}>
                  {item.name}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
