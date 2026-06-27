import { useMousePosition } from '../hooks'

const CursorGlow = () => {
  const { x, y } = useMousePosition()

  return (
    <div
      className="pointer-events-none fixed inset-0 z-30 hidden lg:block"
      aria-hidden="true"
    >
      <div
        className="absolute w-[500px] h-[500px] rounded-full opacity-[0.04] blur-[100px] transition-transform duration-300 ease-out"
        style={{
          background: 'radial-gradient(circle, #9333EA, #EC4899, transparent 70%)',
          transform: `translate(${x - 250}px, ${y - 250}px)`,
        }}
      />
    </div>
  )
}

export default CursorGlow
