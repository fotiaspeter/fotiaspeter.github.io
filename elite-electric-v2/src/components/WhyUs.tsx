import { motion } from 'framer-motion'
import { ShieldCheck, Clock, Tag, Sparkles, type LucideIcon } from 'lucide-react'
import SplitHeading from './SplitHeading'
import { SITE } from '../site'

type Card = {
  icon: LucideIcon
  title: string
  description: string
}

const CARDS: Card[] = [
  {
    icon: ShieldCheck,
    title: 'Licensed & insured',
    description:
      `Registered electrical contractor (${SITE.licence}) with full public liability cover. Every job is done to standard and signed off properly.`,
  },
  {
    icon: Clock,
    title: 'Turn up when we say',
    description:
      'You get a real time window, not a vague "sometime today". And if it is an emergency, we pick up 24/7.',
  },
  {
    icon: Tag,
    title: 'Honest, upfront prices',
    description:
      'A written quote before we start. The number we give you is the number you pay — no surprise extras at the end.',
  },
  {
    icon: Sparkles,
    title: 'Clean, careful work',
    description:
      'Drop sheets down, boots off inside, and the site left tidy. You should barely know we were there — except the power works.',
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
            text="A sparky you can actually count on."
            highlight={[5]}
            className="mt-4 text-5xl font-extrabold leading-[0.95] tracking-tight md:text-7xl"
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-7 max-w-md text-lg text-white/55"
          >
            No call centres, no runaround. You deal with the same team from the
            first phone call to the final sign-off — and we treat your place
            like it is our own.
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
              className="group relative border border-ink-line bg-ink-soft p-7 transition-all duration-300 hover:border-primary/60 hover:shadow-[0_0_40px_-8px_rgba(26,168,232,0.5)]"
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
