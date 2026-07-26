import { Link } from 'react-router-dom';
import crestoviaLogo from '../../assets/crestovia-logo.png';
import OptimizedImage from '../seo/OptimizedImage';

const sizes = {
  sm: 'h-9 sm:h-10',
  md: 'h-11 sm:h-12',
  lg: 'h-12 sm:h-14',
  xl: 'h-16 sm:h-20',
};

/**
 * Site-wide Crestovia brand mark — used in navbar, footer, and admin.
 */
export default function Logo({
  size = 'md',
  className = '',
  link = true,
  onClick,
}) {
  const img = (
    <span
      className={`inline-flex items-center justify-center rounded-xl bg-surface px-2 py-1 shadow-sm shadow-primary/10 ${className}`}
    >
      <OptimizedImage
        src={crestoviaLogo}
        alt="Crestovia — Digital Marketing Agency in Pune"
        title="Crestovia"
        width={200}
        height={200}
        loading="eager"
        fetchPriority="high"
        className={`${sizes[size]} w-auto max-w-[200px] object-contain transition-transform duration-300 group-hover:scale-105`}
      />
    </span>
  );

  if (!link) {
    return img;
  }

  return (
    <Link
      to="/"
      className="group inline-flex shrink-0 items-center"
      onClick={onClick}
      aria-label="Crestovia home"
    >
      {img}
    </Link>
  );
}
