import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, Phone, Zap } from 'lucide-react'
import { SITE, scrollToId } from '../site'
import vanSide from '../assets/van-side.jpg'

const maskReveal = {
  hidden: { y: '115%', skewY: 7 },
  visible: { y: '0%', skewY: 0 },
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
}

export default function Hero() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })

  // Van panel drifts and scales slightly on scroll (parallax).
  const vanY = useTransform(scrollYProgress, [0, 1], ['0%', '18%'])
  const vanScale = useTransform(scrollYProgress, [0, 1], [1.04, 1.14])

  // Text block drifts up and fades out as you scroll away.
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '-25%'])
  const textOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])
  const hintOpacity = useTransform(scrollYProgress, [0, 0.25], [1, 0])

  return (
    <section
      id="top"
      ref={ref}
      className="relative h-screen min-h-[680px] overflow-hidden bg-ink"
    >
      {/* Van panel — bottom half on mobile, right side on desktop */}
      <div className="absolute inset-x-0 bottom-0 top-[54%] lg:inset-y-0 lg:left-[55%] lg:right-0 lg:top-0">
        <motion.div
          className="absolute inset-0"
          style={{ y: vanY, scale: vanScale }}
        >
          <img
            src={vanSide}
            alt="The Elite Electric Services van"
            className="h-full w-full object-cover"
            style={{ objectPosition: '38% 50%' }}
          />
        </motion.div>
        {/* Blend the van into the dark panel toward the text */}
        <div className="absolute inset-0 bg-gradient-to-t from-ink/30 via-transparent to-ink lg:bg-gradient-to-r lg:from-ink lg:via-ink/30 lg:to-ink/10" />
      </div>

      {/* Text */}
      <motion.div
        style={{ y: textY, opacity: textOpacity }}
        className="relative z-10 mx-auto flex h-full max-w-7xl items-start px-5 pt-28 md:px-8 lg:items-center lg:pt-0"
      >
        <div className="w-full lg:max-w-2xl">
          {/* Business name */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="mb-4 flex items-center gap-3"
          >
            <span className="h-6 w-1 bg-primary" />
            <span className="text-xl font-extrabold uppercase tracking-tight sm:text-2xl">
              Elite Electric <span className="text-primary">Services</span>
            </span>
          </motion.div>

          {/* Badge */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.7, delay: 0.95, ease: [0.16, 1, 0.3, 1] }}
            className="mb-6 inline-flex items-center gap-2.5 border border-primary/40 bg-primary/10 px-4 py-2"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping bg-primary opacity-75" />
              <span className="relative inline-flex h-2 w-2 bg-primary" />
            </span>
            <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-primary sm:text-xs">
              Available 7 days · Melbourne &amp; all of Victoria
            </span>
          </motion.div>

          {/* Headline */}
          <h1 className="text-[12vw] font-extrabold leading-[0.85] tracking-tighter lg:text-[5rem] xl:text-[5.75rem]">
            <span className="block overflow-hidden">
              <motion.span
                className="block"
                variants={maskReveal}
                initial="hidden"
                animate="visible"
                transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              >
                POWERING
              </motion.span>
            </span>
            <span className="block overflow-hidden">
              <motion.span
                className="block bg-gradient-to-r from-primary via-primary to-cyan-200 bg-clip-text text-transparent"
                variants={maskReveal}
                initial="hidden"
                animate="visible"
                transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              >
                MELBOURNE.
              </motion.span>
            </span>
          </h1>

          {/* Subtext */}
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.7, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 max-w-md text-base text-white/75 md:text-lg"
          >
            Domestic, commercial and industrial electrical work done properly —
            and cleaned up after. Licensed ({SITE.licence}), fully insured, and
            on the tools across Melbourne and regional Victoria.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.7, delay: 1.05, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <button
              onClick={() => scrollToId('contact')}
              className="group flex items-center justify-center gap-3 bg-primary px-7 py-4 text-base font-semibold text-ink transition-colors hover:bg-white"
            >
              <Zap size={18} />
              Get a Quote
              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </button>
            <a
              href={SITE.phoneHref}
              className="group flex items-center justify-center gap-3 border border-white/25 bg-ink/40 px-7 py-4 text-base font-semibold text-white backdrop-blur-sm transition-colors hover:border-primary hover:text-primary"
            >
              <Phone size={18} className="text-primary" />
              {SITE.phone}
            </a>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll hint */}
      <motion.div
        style={{ opacity: hintOpacity }}
        className="absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 lg:block"
      >
        <div className="flex flex-col items-center gap-3">
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/40">
            Scroll
          </span>
          <div className="relative h-12 w-px overflow-hidden bg-white/15">
            <motion.div
              className="absolute inset-x-0 top-0 h-1/2 bg-primary"
              animate={{ y: ['-100%', '200%'] }}
              transition={{
                duration: 1.6,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          </div>
        </div>
      </motion.div>
    </section>
  )
}
