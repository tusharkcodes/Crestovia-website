import { useEffect, useRef } from 'react'

const HeroBackground = () => {
  const canvasRef = useRef(null)
  const svgRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const svg = svgRef.current
    if (!canvas || !svg) return

    const ctx = canvas.getContext('2d')
    const pathEls = svg.querySelectorAll('[data-electron-path]')
    let animationId
    let electrons = []
    let paths = []
    let w = 0
    let h = 0
    let dpr = 1

    const samplePath = (el, samples = 200) => {
      const len = el.getTotalLength()
      const pts = []
      for (let i = 0; i <= samples; i++) {
        const p = el.getPointAtLength((len * i) / samples)
        pts.push({ x: p.x, y: p.y })
      }
      return { points: pts, length: len, el }
    }

    const pointOnPath = (points, t) => {
      const pos = Math.max(0, Math.min(1, t)) * (points.length - 1)
      const i = Math.floor(pos)
      const f = pos - i
      const a = points[i]
      const b = points[Math.min(i + 1, points.length - 1)]
      return { x: a.x + (b.x - a.x) * f, y: a.y + (b.y - a.y) * f }
    }

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2)
      const rect = canvas.parentElement.getBoundingClientRect()
      w = rect.width
      h = rect.height
      canvas.width = w * dpr
      canvas.height = h * dpr
      canvas.style.width = `${w}px`
      canvas.style.height = `${h}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

      paths = Array.from(pathEls).map((el) => {
        const sampled = samplePath(el)
        sampled.points = sampled.points.map((p) => ({
          x: (p.x / 1440) * w,
          y: (p.y / 900) * h,
        }))
        return sampled
      })

      electrons = paths.flatMap((_, pathIndex) =>
        Array.from({ length: 2 }, (_, i) => ({
          pathIndex,
          progress: i * 0.45 + 0.05,
          speed: 0.00012 + pathIndex * 0.00002,
          size: 2 + Math.random() * 1.5,
          opacity: 0.5 + Math.random() * 0.3,
        }))
      )
    }

    const drawElectron = (e) => {
      const { points } = paths[e.pathIndex]
      const pos = pointOnPath(points, e.progress)

      const glow = ctx.createRadialGradient(pos.x, pos.y, 0, pos.x, pos.y, 12)
      glow.addColorStop(0, `rgba(255,255,255,${e.opacity})`)
      glow.addColorStop(0.4, `rgba(196,181,253,${e.opacity * 0.5})`)
      glow.addColorStop(1, 'rgba(147,51,234,0)')

      ctx.beginPath()
      ctx.arc(pos.x, pos.y, 12, 0, Math.PI * 2)
      ctx.fillStyle = glow
      ctx.fill()

      ctx.beginPath()
      ctx.arc(pos.x, pos.y, e.size, 0, Math.PI * 2)
      ctx.fillStyle = `rgba(255,255,255,${e.opacity + 0.3})`
      ctx.fill()
    }

    const animate = () => {
      ctx.clearRect(0, 0, w, h)
      electrons.forEach((e) => {
        e.progress += e.speed
        if (e.progress > 1) e.progress = 0
        drawElectron(e)
      })
      animationId = requestAnimationFrame(animate)
    }

    resize()
    animate()
    window.addEventListener('resize', resize)
    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none bg-white" aria-hidden="true">
      {/* Organic gradient blobs — bottom-left & top-right */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
      >
        <defs>
          <linearGradient id="blobBL" x1="0%" y1="100%" x2="80%" y2="20%">
            <stop offset="0%" stopColor="#a78bfa" stopOpacity="0.45" />
            <stop offset="50%" stopColor="#c4b5fd" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#e9d5ff" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="blobTR" x1="100%" y1="0%" x2="20%" y2="80%">
            <stop offset="0%" stopColor="#f0abfc" stopOpacity="0.4" />
            <stop offset="50%" stopColor="#e9d5ff" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#ddd6fe" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Bottom-left lavender bloom */}
        <ellipse cx="180" cy="780" rx="420" ry="320" fill="url(#blobBL)" className="hero-orb" />
        <ellipse cx="320" cy="680" rx="300" ry="220" fill="url(#blobBL)" opacity="0.5" className="hero-orb" />

        {/* Top-right pink bloom */}
        <ellipse cx="1280" cy="120" rx="380" ry="280" fill="url(#blobTR)" className="hero-orb" />
        <ellipse cx="1150" cy="200" rx="260" ry="180" fill="url(#blobTR)" opacity="0.45" className="hero-orb" />

        {/* White topographic contour lines */}
        <g stroke="white" strokeWidth="1.2" fill="none" opacity="0.55">
          <path d="M-50,680 C150,580 350,750 550,620 C750,490 950,700 1150,580 C1300,490 1450,620 1500,550" />
          <path d="M-30,720 C180,620 380,790 580,660 C780,530 980,740 1180,620 C1330,530 1470,660 1520,590" opacity="0.4" />
          <path d="M-20,640 C200,540 400,710 600,580 C800,450 1000,660 1200,540 C1350,450 1480,580 1530,510" opacity="0.35" />
          <path d="M-40,160 C200,60 450,240 700,120 C950,0 1150,200 1400,80 C1480,40 1540,100 1580,60" />
          <path d="M-20,200 C220,100 470,280 720,160 C970,40 1170,240 1420,120 C1500,80 1560,140 1600,100" opacity="0.4" />
          <path d="M0,120 C240,20 490,200 740,80 C990,-40 1190,160 1440,40 C1520,0 1580,60 1620,20" opacity="0.3" />
        </g>
      </svg>

      {/* Hidden paths for electron animation */}
      <svg ref={svgRef} className="absolute w-0 h-0 overflow-hidden" viewBox="0 0 1440 900">
        <path data-electron-path d="M-50,680 C150,580 350,750 550,620 C750,490 950,700 1150,580 C1300,490 1450,620 1500,550" />
        <path data-electron-path d="M-20,640 C200,540 400,710 600,580 C800,450 1000,660 1200,540 C1350,450 1480,580 1530,510" />
        <path data-electron-path d="M-40,160 C200,60 450,240 700,120 C950,0 1150,200 1400,80 C1480,40 1540,100 1580,60" />
        <path data-electron-path d="M0,120 C240,20 490,200 740,80 C990,-40 1190,160 1440,40 C1520,0 1580,60 1620,20" />
      </svg>

      {/* Electron glow canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

      {/* Dot grid — top left */}
      <div className="absolute top-[6.5rem] left-6 sm:left-12 grid grid-cols-4 gap-[7px]">
        {Array.from({ length: 12 }).map((_, i) => (
          <div key={i} className="w-[5px] h-[5px] rounded-full bg-gray-300/70" />
        ))}
      </div>

      {/* Soft glowing orbs */}
      <div className="hero-orb absolute top-[30%] left-[15%] w-3 h-3 rounded-full bg-white/80 shadow-[0_0_12px_rgba(255,255,255,0.9)] blur-[1px]" />
      <div className="hero-orb absolute top-[55%] right-[25%] w-2 h-2 rounded-full bg-purple-200/60 shadow-[0_0_10px_rgba(196,181,253,0.8)]" />
      <div className="hero-orb absolute bottom-[30%] left-[40%] w-2.5 h-2.5 rounded-full bg-white/70 shadow-[0_0_14px_rgba(255,255,255,0.8)]" />
    </div>
  )
}

export default HeroBackground
