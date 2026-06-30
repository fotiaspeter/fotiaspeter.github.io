import { useRef, useState } from 'react'
import { MoveHorizontal } from 'lucide-react'

type Props = {
  before: string
  after: string
  beforeLabel?: string
  afterLabel?: string
}

/**
 * Before/after comparison. The "before" image sits on top and is clipped to
 * the slider position; drag (or move the cursor) left/right to reveal the
 * "after" image underneath. Works with mouse and touch via pointer events.
 */
export default function BeforeAfterSlider({
  before,
  after,
  beforeLabel = 'Before',
  afterLabel = 'After',
}: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const [pos, setPos] = useState(55)

  const update = (clientX: number) => {
    const el = ref.current
    if (!el) return
    const r = el.getBoundingClientRect()
    const p = ((clientX - r.left) / r.width) * 100
    setPos(Math.max(0, Math.min(100, p)))
  }

  return (
    <div
      ref={ref}
      className="relative mx-auto aspect-[3/4] w-full max-w-md cursor-ew-resize select-none overflow-hidden border border-ink-line"
      style={{ touchAction: 'none' }}
      onPointerDown={(e) => update(e.clientX)}
      onPointerMove={(e) => {
        // Follow the cursor on hover; follow the finger while dragging.
        if (e.pointerType === 'mouse' || e.buttons > 0) update(e.clientX)
      }}
    >
      {/* Base: the clean "after" board */}
      <img
        src={after}
        alt={afterLabel}
        draggable={false}
        className="pointer-events-none absolute inset-0 h-full w-full object-cover"
      />
      {/* Top: the messy "before" board, clipped to the slider position */}
      <img
        src={before}
        alt={beforeLabel}
        draggable={false}
        className="pointer-events-none absolute inset-0 h-full w-full object-cover"
        style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
      />

      {/* Labels */}
      <span className="pointer-events-none absolute left-3 top-3 border border-white/20 bg-ink/70 px-2 py-1 font-mono text-[10px] uppercase tracking-wider text-white/80 backdrop-blur-sm">
        {beforeLabel}
      </span>
      <span className="pointer-events-none absolute right-3 top-3 border border-primary/40 bg-ink/70 px-2 py-1 font-mono text-[10px] uppercase tracking-wider text-primary backdrop-blur-sm">
        {afterLabel}
      </span>

      {/* Divider + handle */}
      <div
        className="pointer-events-none absolute inset-y-0 z-10 w-0.5 bg-primary"
        style={{ left: `${pos}%` }}
      >
        <div className="is-dot absolute left-1/2 top-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center bg-primary text-ink shadow-[0_0_20px_-2px_rgba(26,168,232,0.8)]">
          <MoveHorizontal size={20} />
        </div>
      </div>
    </div>
  )
}
