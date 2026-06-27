import { useScrollProgress } from '../hooks'

const ScrollProgress = () => {
  const progress = useScrollProgress()

  return (
    <div
      className="fixed top-0 left-0 right-0 h-[3px] z-[100] bg-gray-100"
      role="progressbar"
      aria-valuenow={Math.round(progress)}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label="Page scroll progress"
    >
      <div
        className="h-full bg-gradient-to-r from-purple-600 via-purple-500 to-pink-500 transition-[width] duration-150 ease-out shadow-[0_0_10px_rgba(147,51,234,0.5)]"
        style={{ width: `${progress}%` }}
      />
    </div>
  )
}

export default ScrollProgress
