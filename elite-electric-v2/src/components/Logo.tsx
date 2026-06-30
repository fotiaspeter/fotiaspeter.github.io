import logoUrl from '../assets/logo-full.png'

type LogoProps = {
  /** Tailwind height class for the logo image, e.g. "h-12". */
  className?: string
}

/**
 * The real Elite Electric Services lockup — double-E emblem with the
 * lightning bolt, "ELITE ELECTRIC" and "SERVICES" — on a transparent
 * background.
 */
export default function Logo({ className = 'h-12' }: LogoProps) {
  return (
    <img
      src={logoUrl}
      alt="Elite Electric Services"
      className={`${className} w-auto shrink-0 select-none`}
      draggable={false}
    />
  )
}
