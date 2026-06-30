import markUrl from '../assets/logo-mark.png'

type LogoProps = {
  className?: string
  showWordmark?: boolean
  markClassName?: string
}

/**
 * Real Elite Electric Services brand mark: the double-E emblem with the
 * lightning bolt, alongside the wordmark.
 */
export default function Logo({
  className = '',
  showWordmark = true,
  markClassName = 'h-9',
}: LogoProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <img
        src={markUrl}
        alt="Elite Electric Services"
        className={`${markClassName} w-auto shrink-0`}
      />
      {showWordmark && (
        <div className="leading-none">
          <span className="block text-lg font-extrabold tracking-tight">
            ELITE ELECTRIC
          </span>
          <span className="block font-mono text-[10px] tracking-[0.42em] text-primary">
            SERVICES
          </span>
        </div>
      )}
    </div>
  )
}
