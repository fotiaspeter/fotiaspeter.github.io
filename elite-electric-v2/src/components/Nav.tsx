import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X, Zap } from 'lucide-react'
import Logo from './Logo'
import { NAV_LINKS, scrollToId } from '../site'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const go = (id: string) => {
    setMenuOpen(false)
    scrollToId(id)
  }

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-ink-line bg-ink/80 backdrop-blur-md'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
        <button
          onClick={() => go('top')}
          className="cursor-pointer"
          aria-label="Elite Electric — back to top"
        >
          <Logo className="h-11 md:h-12" />
        </button>

        <div className="hidden items-center gap-9 md:flex">
          {NAV_LINKS.map((link) => (
            <button
              key={link.id}
              onClick={() => go(link.id)}
              className="group relative font-mono text-xs uppercase tracking-[0.2em] text-white/70 transition-colors hover:text-white"
            >
              {link.label}
              <span className="absolute -bottom-1.5 left-0 h-px w-full origin-left scale-x-0 bg-primary transition-transform duration-300 group-hover:scale-x-100" />
            </button>
          ))}
          <button
            onClick={() => go('contact')}
            className="group flex items-center gap-2 bg-primary px-5 py-2.5 font-semibold text-ink transition-colors hover:bg-white"
          >
            <Zap size={16} className="transition-transform group-hover:scale-110" />
            Get a Quote
          </button>
        </div>

        <button
          className="md:hidden text-white"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ clipPath: 'inset(0 0 100% 0)' }}
            animate={{ clipPath: 'inset(0 0 0% 0)' }}
            exit={{ clipPath: 'inset(0 0 100% 0)' }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden border-t border-ink-line bg-ink md:hidden"
          >
            <div className="flex flex-col px-5 py-4">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.id}
                  onClick={() => go(link.id)}
                  className="border-b border-ink-line py-4 text-left font-mono text-sm uppercase tracking-[0.2em] text-white/80"
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={() => go('contact')}
                className="mt-5 flex items-center justify-center gap-2 bg-primary px-5 py-3.5 font-semibold text-ink"
              >
                <Zap size={16} />
                Get a Quote
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
