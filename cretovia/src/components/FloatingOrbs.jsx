const FloatingOrbs = ({ className = '' }) => {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`} aria-hidden="true">
      <div className="hero-orb absolute top-[10%] left-[5%] w-72 h-72 rounded-full bg-purple-600/20 blur-[100px] animate-pulse-glow" />
      <div className="hero-orb absolute bottom-[20%] right-[10%] w-96 h-96 rounded-full bg-pink-500/15 blur-[120px] animate-pulse-glow" style={{ animationDelay: '2s' }} />
      <div className="hero-orb absolute top-[50%] left-[40%] w-64 h-64 rounded-full bg-accent/10 blur-[80px] animate-float" />
    </div>
  )
}

export default FloatingOrbs
