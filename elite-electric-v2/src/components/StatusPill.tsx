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

function melbourneStamp(now: Date) {
  return now
    .toLocaleString('en-AU', {
      timeZone: TZ,
      weekday: 'short',
      day: 'numeric',
      month: 'short',
      hour: 'numeric',
      minute: '2-digit',
      hour12: true,
    })
    .toUpperCase()
}

export default function StatusPill() {
  const [now, setNow] = useState(() => new Date())

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 30000)
    return () => clearInterval(id)
  }, [])

  const mins = melbourneMinutes(now)
  const open = mins >= OPEN_MIN && mins < CLOSE_MIN
  const stamp = melbourneStamp(now)

  const base =
    'flex items-center gap-2.5 border border-ink-line bg-ink-soft/80 px-3 py-1.5 backdrop-blur-sm'

  if (open) {
    return (
      <div className={base}>
        <span className="relative flex h-2.5 w-2.5">
          <span className="absolute inline-flex h-full w-full animate-ping bg-green-400 opacity-75" />
          <span className="relative inline-flex h-2.5 w-2.5 bg-green-400" />
        </span>
        <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-green-400">
          Now Open!
        </span>
        <span className="hidden font-mono text-[11px] uppercase tracking-wider text-white/40 sm:inline">
          · {stamp}
        </span>
      </div>
    )
  }

  return (
    <a
      href={SITE.phoneHref}
      className={`${base} group transition-colors hover:border-red-500/60`}
      aria-label={`After hours — emergencies only. Call ${SITE.phone}`}
    >
      <span className="relative flex h-2.5 w-2.5">
        <span className="absolute inline-flex h-full w-full animate-ping bg-red-500 opacity-60" />
        <span className="relative inline-flex h-2.5 w-2.5 bg-red-500" />
      </span>
      <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-red-400">
        Emergencies only
      </span>
      <span className="flex items-center gap-1 font-mono text-[11px] uppercase tracking-wider text-white/70 group-hover:text-white">
        <span className="hidden sm:inline">·</span>
        <Phone size={12} className="text-primary" />
        Call now
      </span>
      <span className="hidden font-mono text-[11px] uppercase tracking-wider text-white/40 lg:inline">
        · {stamp}
      </span>
    </a>
  )
}
