import { motion } from 'framer-motion'
import { ShieldCheck, Clock, Tag, BadgeCheck, type LucideIcon } from 'lucide-react'
import SplitHeading from './SplitHeading'

type Card = {
  icon: LucideIcon
  title: string
  description: string
}

const CARDS: Card[] = [
  {
    icon: ShieldCheck,
    title: 'Licensed & Insured',
    description:
      'Fully licensed master electricians backed by comprehensive public liability cover. Zero shortcuts.',
  },
  {
    icon: Clock,
    title: '24/7 Availability',
    description:
      'Electrical faults do not keep business hours. Neither do we. Genuine round-the-clock response.',
  },
  {
    icon: Tag,
    title: 'Upfront Pricing',
    description:
      'Fixed, written quotes before any work begins. What we quote is what you pay — no surprises.',
  },
  {
    icon: BadgeCheck,
    title: 'Lifetime Guarantee',
    description:
      'Every installation is backed by our lifetime workmanship guarantee. We stand behind the work.',
  },
]

export default function WhyUs() {
  return (
    <section id="why" className="border-t border-ink-line bg-ink">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 md:px-8 md:py-28 lg:grid-cols-2 lg:gap-16">
        {/* Left: split-word heading */}
        <div className="lg:sticky lg:top-28 lg:self-start">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-primary">
            Why Elite
          </span>
          <SplitHeading
            text="Built On Trust And Tidy Work."
            highlight={[1]}
            className="mt-4 text-5xl font-extrabold leading-[0.95] tracking-tight md:text-7xl"
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-7 max-w-md text-lg text-white/55"
          >
            We are the electricians other tradies recommend. Reliable, clean,
            and straight with you from the first call to final sign-off.
          </motion.p>
        </div>

        {/* Right: 2x2 trust cards with hover glow */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {CARDS.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative border border-ink-line bg-ink-soft p-7 transition-all duration-300 hover:border-primary/60 hover:shadow-[0_0_40px_-8px_rgba(0,194,232,0.45)]"
            >
              <card.icon
                size={34}
                className="text-primary transition-transform duration-300 group-hover:scale-110"
                strokeWidth={1.5}
              />
              <h3 className="mt-5 text-xl font-bold">{card.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/55">
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
