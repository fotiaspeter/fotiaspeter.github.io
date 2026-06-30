import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

type AnimatedCounterProps = {
  value: number
  duration?: number
  suffix?: string
  prefix?: string
}

const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3)

/**
 * Counts up from 0 to `value` using requestAnimationFrame with a cubic ease.
 * Fires once when scrolled into view.
 */
export default function AnimatedCounter({
  value,
  duration = 2000,
  suffix = '',
  prefix = '',
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.6 })
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!inView) return
    let raf = 0
    let start: number | null = null

    const tick = (now: number) => {
      if (start === null) start = now
      const progress = Math.min((now - start) / duration, 1)
      setDisplay(Math.round(easeOutCubic(progress) * value))
      if (progress < 1) raf = requestAnimationFrame(tick)
    }

    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [inView, value, duration])

  return (
    <span ref={ref}>
      {prefix}
      {display}
      {suffix}
    </span>
  )
}
