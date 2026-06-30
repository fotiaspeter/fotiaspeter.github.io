type LogoProps = {
  className?: string
  showWordmark?: boolean
}

/**
 * Double-E emblem with a lightning bolt cut between the two E's.
 * White strokes with a cyan lightning bolt.
 */
export default function Logo({ className = '', showWordmark = true }: LogoProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <svg
        viewBox="0 0 48 48"
        className="h-9 w-9 shrink-0"
        fill="none"
        aria-hidden="true"
      >
        <rect x="1" y="1" width="46" height="46" stroke="white" strokeWidth="2" />
        {/* Left E */}
        <path
          d="M9 12H20M9 24H17M9 36H20M9 12V36"
          stroke="white"
          strokeWidth="2.5"
          strokeLinecap="square"
        />
        {/* Right E */}
        <path
          d="M30 12H41M30 24H38M30 36H41M30 12V36"
          stroke="white"
          strokeWidth="2.5"
          strokeLinecap="square"
        />
        {/* Lightning bolt */}
        <path
          d="M26 9L20 25H25L22 39L31 21H25.5L26 9Z"
          fill="#00c2e8"
          stroke="#00c2e8"
          strokeWidth="1"
          strokeLinejoin="miter"
        />
      </svg>
      {showWordmark && (
        <div className="leading-none">
          <span className="block text-lg font-extrabold tracking-tight">
            ELITE<span className="text-primary">ELECTRIC</span>
          </span>
          <span className="block font-mono text-[10px] tracking-[0.35em] text-white/40">
            POWER · PERFECTED
          </span>
        </div>
      )}
    </div>
  )
}
