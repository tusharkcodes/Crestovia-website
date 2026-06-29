import logo from '../assets/logo.png'

const Logo = ({ showText = true, size = 'md', className = '' }) => {
  const sizes = {
    sm: 'w-8 h-8',
    md: 'w-9 h-9',
    lg: 'w-11 h-11',
  }

  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <img
        src={logo}
        alt="Crestovia"
        className={`${sizes[size]} rounded-xl object-cover shadow-lg shadow-purple-500/20 group-hover:scale-105 transition-transform duration-300`}
      />
      {showText && (
        <span className="text-xl font-extrabold text-gray-900 tracking-tight">
          Crest<span className="gradient-text">ovia</span>
        </span>
      )}
    </span>
  )
}

export default Logo
