import { useCounter } from '../hooks/useCounter'

const Counter = ({ value, suffix = '', label }) => {
  const { count, ref } = useCounter(value)

  return (
    <div ref={ref} className="text-center">
      <p className="text-3xl sm:text-4xl md:text-5xl font-extrabold gradient-text mb-2">
        {count}
        {suffix}
      </p>
      <p className="text-gray-600 text-sm md:text-base">{label}</p>
    </div>
  )
}

export default Counter
