import logoUrl from '../assets/logo-full.png'

type LogoProps = {
  /**
   * Tailwind sizing classes for the logo image. Constrain ONE dimension
   * (e.g. "h-12" or "w-64") and the image keeps its aspect ratio.
   */
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
      className={`${className} shrink-0 select-none`}
      draggable={false}
    />
  )
}
