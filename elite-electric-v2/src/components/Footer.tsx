import Logo from './Logo'
import { NAV_LINKS, SITE, scrollToId } from '../site'

export default function Footer() {
  return (
    <footer className="border-t border-ink-line bg-ink">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 py-12 md:flex-row md:items-center md:justify-between md:px-8">
        <Logo />

        <nav className="flex flex-wrap gap-x-8 gap-y-3">
          {NAV_LINKS.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToId(link.id)}
              className="font-mono text-xs uppercase tracking-[0.2em] text-white/50 transition-colors hover:text-primary"
            >
              {link.label}
            </button>
          ))}
        </nav>
      </div>

      <div className="border-t border-ink-line">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-6 text-center font-mono text-[11px] uppercase tracking-[0.15em] text-white/35 md:flex-row md:justify-between md:px-8 md:text-left">
          <span>
            © {new Date().getFullYear()} {SITE.name} Services · Lic. No. 000000C
          </span>
          <span>Power, Perfected.</span>
        </div>
      </div>
    </footer>
  )
}
