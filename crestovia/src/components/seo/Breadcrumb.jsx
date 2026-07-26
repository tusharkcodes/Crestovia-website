import { Link } from 'react-router-dom';
import { BreadcrumbSchema } from './Schema';

/**
 * Visual + schema breadcrumbs.
 * @param {'light'|'dark'} tone — dark for navy heroes
 */
export default function Breadcrumb({ items = [], className = 'mb-6', tone = 'light' }) {
  if (!items.length) return null;

  const muted = tone === 'dark' ? 'text-white/60' : 'text-muted';
  const current = tone === 'dark' ? 'text-white' : 'text-foreground';
  const linkHover =
    tone === 'dark'
      ? 'hover:text-[#FF7A00] focus-visible:outline-white'
      : 'hover:text-primary focus-visible:outline-primary';

  return (
    <>
      <BreadcrumbSchema items={items} />
      <nav aria-label="Breadcrumb" className={className}>
        <ol className={`flex flex-wrap items-center gap-2 text-xs sm:text-sm ${muted}`}>
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
                  <Link
                    to={item.path}
                    className={`transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${linkHover}`}
                  >
                    {item.name}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
