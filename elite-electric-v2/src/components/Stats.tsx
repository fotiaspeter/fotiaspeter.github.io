import { motion } from 'framer-motion'
import AnimatedCounter from './AnimatedCounter'

type Stat = {
  value: number
  suffix: string
  label: string
}

const STATS: Stat[] = [
  { value: 120, suffix: '+', label: 'Local jobs completed' },
  { value: 24, suffix: '/7', label: 'Emergency callouts' },
  { value: 60, suffix: ' min', label: 'Typical response time' },
  { value: 100, suffix: '%', label: 'Licensed & insured' },
]

export default function Stats() {
  return (
    <section className="relative overflow-hidden bg-primary text-ink">
      {/* Animated vertical lines in background */}
      <div className="pointer-events-none absolute inset-0">
        {Array.from({ length: 12 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute top-0 h-full w-px bg-ink/10"
            style={{ left: `${(i + 1) * (100 / 13)}%` }}
            initial={{ scaleY: 0, originY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 1,
              delay: i * 0.05,
              ease: [0.16, 1, 0.3, 1],
            }}
          />
        ))}
      </div>

      <div className="relative mx-auto grid max-w-7xl grid-cols-2 gap-y-12 px-5 py-16 md:px-8 md:py-20 lg:grid-cols-4">
        {STATS.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="flex flex-col items-center text-center lg:items-start lg:text-left"
          >
            <span className="text-6xl font-extrabold tracking-tighter md:text-7xl lg:text-8xl">
              <AnimatedCounter value={stat.value} suffix={stat.suffix} />
            </span>
            <span className="mt-3 font-mono text-xs uppercase tracking-[0.25em] text-ink/70">
              {stat.label}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
