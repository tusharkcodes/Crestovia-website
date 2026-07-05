import { Link } from 'react-router-dom';
import crestoviaLogo from '../../assets/crestovia-logo.png';

const sizes = {
  sm: 'h-8',
  md: 'h-10',
  lg: 'h-12',
};

export default function Logo({ size = 'md', className = '', link = true, onClick }) {
  const img = (
    <img
      src={crestoviaLogo}
      alt="Crestovia"
      className={`${sizes[size]} w-auto object-contain transition-transform duration-300 group-hover:scale-105 ${className}`}
    />
  );

  if (!link) {
    return img;
  }

  return (
    <Link to="/" className="group inline-flex shrink-0 items-center" onClick={onClick}>
      {img}
    </Link>
  );
}
