import { motion } from 'framer-motion'
import { ArrowUpRight, BadgeCheck, MapPin, User } from 'lucide-react'
import SplitHeading from './SplitHeading'
import { SITE, scrollToId } from '../site'
import vanRear from '../assets/van-rear.jpg'

const FACTS = [
  { icon: User, label: 'Owner operated' },
  { icon: BadgeCheck, label: `Licensed ${SITE.licence}` },
  { icon: MapPin, label: 'Melbourne & all of VIC' },
]

export default function About() {
  return (
    <section id="about" className="border-t border-ink-line bg-ink">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 md:px-8 md:py-28 lg:grid-cols-2 lg:gap-16">
        {/* Real van photo with curtain-wipe reveal */}
        <div className="relative aspect-[4/3] overflow-hidden border border-ink-line">
          <img
            src={vanRear}
            alt="The Elite Electric Services van"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <motion.div
            className="absolute inset-0 z-10 bg-primary"
            style={{ originX: 0 }}
            initial={{ scaleX: 1 }}
            whileInView={{ scaleX: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.9, ease: [0.77, 0, 0.18, 1] }}
          />
        </div>

        {/* Story */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-primary">
            About
          </span>
          <SplitHeading
            text="Meet Dimitry."
            highlight={[1]}
            className="mt-4 text-5xl font-extrabold leading-[0.95] tracking-tight md:text-6xl"
          />
          <div className="mt-6 space-y-4 text-lg text-white/60">
            <p>
              Elite Electric Services is owned and run by{' '}
              <span className="text-white">Dimitry Lag</span>, a licensed
              Melbourne electrician ({SITE.licence}). After years on the tools
              under other people&apos;s names, Dimitry started Elite in{' '}
              {SITE.established} to do things properly — turn up when he says,
              charge a fair price, and leave every job clean and safe.
            </p>
            <p>
              When you call, you get Dimitry or one of his team — not a stranger
              from a call centre. From a single power point to a full industrial
              fit-out, across Melbourne and regional Victoria.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3">
            {FACTS.map((f) => (
              <div
                key={f.label}
                className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-white/75"
              >
                <f.icon size={16} className="text-primary" />
                {f.label}
              </div>
            ))}
          </div>

          <button
            onClick={() => scrollToId('contact')}
            className="group mt-9 inline-flex w-fit items-center gap-2 border border-white/15 px-6 py-3 font-semibold text-white transition-colors hover:border-primary hover:text-primary"
          >
            Get in touch
            <ArrowUpRight
              size={18}
              className="text-primary transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </button>
        </motion.div>
      </div>
    </section>
  )
}
