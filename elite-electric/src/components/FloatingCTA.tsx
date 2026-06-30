import { AnimatePresence, motion, useScroll, useMotionValueEvent } from 'framer-motion'
import { useState } from 'react'
import { Phone } from 'lucide-react'
import { SITE } from '../site'

/**
 * "Call Now" button fixed bottom-right. Hidden during the hero, springs in
 * once the hero has scrolled ~85% out of view.
 */
export default function FloatingCTA() {
  const { scrollYProgress } = useScroll()
  const [visible, setVisible] = useState(false)

  useMotionValueEvent(scrollYProgress, 'change', (v) => {
    // Hero is roughly the first viewport; reveal after it's mostly gone.
    setVisible(v > 0.08)
  })

  return (
    <AnimatePresence>
      {visible && (
        <motion.a
          href={SITE.phoneHref}
          initial={{ scale: 0, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0, opacity: 0, y: 20 }}
          transition={{ type: 'spring', stiffness: 260, damping: 18 }}
          className="group fixed bottom-6 right-6 z-40 flex items-center gap-3 bg-primary px-5 py-4 font-semibold text-ink shadow-[0_0_30px_-4px_rgba(0,194,232,0.6)] transition-shadow duration-300 hover:shadow-[0_0_50px_0px_rgba(0,194,232,0.9)] md:bottom-8 md:right-8"
          aria-label={`Call ${SITE.phone}`}
        >
          <motion.span
            animate={{ rotate: [0, -12, 12, -12, 0] }}
            transition={{
              duration: 1.4,
              repeat: Infinity,
              repeatDelay: 1.2,
              ease: 'easeInOut',
            }}
          >
            <Phone size={20} fill="currentColor" />
          </motion.span>
          <span className="hidden font-mono text-xs uppercase tracking-[0.15em] sm:inline">
            Call Now
          </span>
        </motion.a>
      )}
    </AnimatePresence>
  )
}
