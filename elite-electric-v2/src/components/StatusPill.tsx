import { useEffect, useState } from 'react'
import { Phone } from 'lucide-react'
import { SITE } from '../site'

const TZ = 'Australia/Melbourne'
const OPEN_MIN = 7 * 60 // 7:00am
const CLOSE_MIN = 17 * 60 // 5:00pm

function melbourneMinutes(now: Date) {
  const parts = new Intl.DateTimeFormat('en-AU', {
    timeZone: TZ,
    hour: '2-digit',
    minute: '2-digit',
    hourCycle: 'h23',
  }).formatToParts(now)
  const hh = Number(parts.find((p) => p.type === 'hour')?.value ?? 0)
  const mm = Number(parts.find((p) => p.type === 'minute')?.value ?? 0)
  return hh * 60 + mm
}

const fmt = (now: Date, opts: Intl.DateTimeFormatOptions) =>
  now.toLocaleString('en-AU', { timeZone: TZ, ...opts }).toUpperCase()

export default function StatusPill() {
  const [now, setNow] = useState(() => new Date())

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 30000)
    return () => clearInterval(id)
  }, [])

  const mins = melbourneMinutes(now)
  const open = mins >= OPEN_MIN && mins < CLOSE_MIN

  const weekday = fmt(now, { weekday: 'short' })
  const date = `${fmt(now, { day: 'numeric' })} ${fmt(now, { month: 'short' }).slice(0, 3)}`
  const time = fmt(now, { hour: 'numeric', minute: '2-digit', hour12: true })

  const base =
    'is-pill flex items-center gap-1.5 border border-ink-line bg-ink-soft/85 px-2 py-1 backdrop-blur-sm whitespace-nowrap sm:gap-2 sm:px-3 sm:py-1.5'
  const label =
    'font-mono text-[9px] font-bold uppercase tracking-wide sm:text-[10px] sm:tracking-wider'
  const meta =
    'font-mono text-[9px] uppercase tracking-wide text-white/45 sm:text-[10px] sm:tracking-wider'

  // Weekday only shows on wider screens to keep narrow phones tidy.
  const Stamp = () => (
    <span className={meta}>
      · <span className="hidden sm:inline">{weekday}, </span>
      {date}, {time}
    </span>
  )

  if (open) {
    return (
      <div className={base}>
        <span className="relative flex h-2 w-2">
          <span className="is-dot absolute inline-flex h-full w-full animate-ping bg-green-400 opacity-75" />
          <span className="is-dot relative inline-flex h-2 w-2 bg-green-400" />
        </span>
        <span className={`${label} text-green-400`}>Now Open!</span>
        <Stamp />
      </div>
    )
  }

  return (
    <a
      href={SITE.phoneHref}
      className={`${base} group transition-colors hover:border-red-500/60`}
      aria-label={`After hours — emergencies only. Call ${SITE.phone}`}
    >
      <span className="relative flex h-2 w-2">
        <span className="is-dot absolute inline-flex h-full w-full animate-ping bg-red-500 opacity-60" />
        <span className="is-dot relative inline-flex h-2 w-2 bg-red-500" />
      </span>
      <span className={`${label} text-red-400`}>Emergencies only</span>
      <span className="flex items-center gap-1 font-mono text-[9px] uppercase tracking-wide text-white/70 group-hover:text-white sm:text-[10px] sm:tracking-wider">
        <Phone size={10} className="text-primary" />
        <span className="hidden sm:inline">Call now</span>
      </span>
      <Stamp />
    </a>
  )
}
