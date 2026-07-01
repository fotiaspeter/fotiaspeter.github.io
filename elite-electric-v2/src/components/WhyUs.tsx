import { motion } from 'framer-motion'
import { ShieldCheck, Clock, Tag, Sparkles, type LucideIcon } from 'lucide-react'
import SplitHeading from './SplitHeading'
import {
  CardsContainer,
  CardTransformed,
  ContainerScroll,
} from './blocks/animated-cards-stack'
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

function Heading() {
  return (
    <div>
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
        first phone call to the final sign-off — and we treat your place like
        it is our own.
      </motion.p>
    </div>
  )
}

export default function WhyUs() {
  return (
    <section id="why" className="border-t border-ink-line bg-ink">
      {/* Mobile / tablet: simple static cards — the scroll-pinned stack below is desktop-only */}
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 md:px-8 md:py-28 lg:hidden">
        <Heading />
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {CARDS.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="border border-ink-line bg-ink-soft p-7"
            >
              <card.icon size={34} className="text-primary" strokeWidth={1.5} />
              <h3 className="mt-5 text-xl font-bold">{card.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/55">
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Desktop: heading pinned on the left while the trust cards fan and stack on scroll */}
      <div className="mx-auto hidden max-w-7xl px-5 lg:block lg:px-8">
        <ContainerScroll className="grid min-h-0 grid-cols-2 gap-16 py-28 lg:min-h-[240vh]">
          <div className="sticky top-28 h-svh self-start pt-16">
            <Heading />
          </div>

          <div className="sticky top-28 flex h-svh items-center">
            <CardsContainer className="mx-auto h-[380px] w-full max-w-sm">
              {CARDS.map((card, i) => (
                <CardTransformed
                  key={card.title}
                  arrayLength={CARDS.length}
                  index={i + 1}
                  variant="dark"
                  className="items-start justify-between gap-5 rounded-none border-ink-line bg-ink-soft/95 p-8 text-left backdrop-blur-md"
                >
                  <div className="flex h-12 w-12 items-center justify-center border border-primary/40 text-primary">
                    <card.icon size={22} strokeWidth={1.6} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">{card.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-white/55">
                      {card.description}
                    </p>
                  </div>
                </CardTransformed>
              ))}
            </CardsContainer>
          </div>
        </ContainerScroll>
      </div>
    </section>
  )
}
