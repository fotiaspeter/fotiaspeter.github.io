import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, Phone, Zap } from 'lucide-react'
import { SITE, scrollToId } from '../site'

const HERO_IMAGE =
  'https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&w=2000&q=80'

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

  // Background moves at ~40% rate and scales up slightly.
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '40%'])
  const bgScale = useTransform(scrollYProgress, [0, 1], [1.05, 1.2])

  // Text block drifts up and fades out as you scroll away.
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '-30%'])
  const textOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])
  const hintOpacity = useTransform(scrollYProgress, [0, 0.25], [1, 0])

  return (
    <section
      id="top"
      ref={ref}
      className="relative flex h-screen min-h-[640px] items-center overflow-hidden"
    >
      {/* Parallax background */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{ y: bgY, scale: bgScale }}
      >
        <img
          src={HERO_IMAGE}
          alt="Electrician working on a commercial installation"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-ink/60" />
      </motion.div>

      <motion.div
        style={{ y: textY, opacity: textOpacity }}
        className="relative z-10 mx-auto w-full max-w-7xl px-5 md:px-8"
      >
        {/* Badge */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.7, delay: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-7 inline-flex items-center gap-2.5 border border-primary/40 bg-primary/10 px-4 py-2"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping bg-primary opacity-75" />
            <span className="relative inline-flex h-2 w-2 bg-primary" />
          </span>
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
            24/7 Emergency Service Available
          </span>
        </motion.div>

        {/* Headline */}
        <h1 className="text-[18vw] font-extrabold leading-[0.85] tracking-tighter sm:text-[15vw] md:text-[12rem] lg:text-[13rem]">
          <span className="block overflow-hidden">
            <motion.span
              className="block"
              variants={maskReveal}
              initial="hidden"
              animate="visible"
              transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              POWER
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
              PERFECTED.
            </motion.span>
          </span>
        </h1>

        {/* Subtext */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.7, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mt-7 max-w-xl text-lg text-white/70 md:text-xl"
        >
          Premium residential and commercial electrical work. Licensed,
          insured, and obsessive about doing it right the first time.
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.7, delay: 1.05, ease: [0.16, 1, 0.3, 1] }}
          className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center"
        >
          <button
            onClick={() => scrollToId('contact')}
            className="group flex items-center justify-center gap-3 bg-primary px-8 py-4 text-base font-semibold text-ink transition-colors hover:bg-white"
          >
            <Zap size={18} />
            Request Quote
            <ArrowRight
              size={18}
              className="transition-transform group-hover:translate-x-1"
            />
          </button>
          <a
            href={SITE.phoneHref}
            className="group flex items-center justify-center gap-3 border border-white/20 px-8 py-4 text-base font-semibold text-white transition-colors hover:border-primary hover:text-primary"
          >
            <Phone size={18} className="text-primary" />
            {SITE.phone}
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll hint */}
      <motion.div
        style={{ opacity: hintOpacity }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
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
