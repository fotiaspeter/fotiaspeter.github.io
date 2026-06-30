import { motion } from 'framer-motion'
import { Star } from 'lucide-react'
import SplitHeading from './SplitHeading'

type Testimonial = {
  quote: string
  name: string
  role: string
}

const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      'Switchboard died on a Sunday night with a newborn in the house. Elite had someone here in under 40 minutes and power restored before midnight. Lifesavers.',
    name: 'Sarah Whitman',
    role: 'Homeowner · Northbridge',
  },
  {
    quote:
      'We fit out three cafes a year and Elite handles every one. On time, on budget, immaculate work. They are the only sparkies we call now.',
    name: 'Daniel Roe',
    role: 'Director · Roe Hospitality Group',
  },
  {
    quote:
      'Quoted fixed, finished early, and left the site cleaner than they found it. The EV charger install was flawless. Genuinely impressed.',
    name: 'Priya Nair',
    role: 'Homeowner · Glebe',
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="border-t border-ink-line bg-ink">
      <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
        <span className="font-mono text-xs uppercase tracking-[0.3em] text-primary">
          Reviews
        </span>
        <SplitHeading
          text="Trusted Across The City."
          highlight={[1]}
          className="mt-4 max-w-2xl text-5xl font-extrabold leading-[0.95] tracking-tight md:text-7xl"
        />
      </div>

      {/* Flush grid — 1px border dividers, no gap */}
      <div className="grid border-t border-ink-line md:grid-cols-3">
        {TESTIMONIALS.map((t, i) => (
          <motion.figure
            key={t.name}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: i * 0.12 }}
            className="group flex flex-col border-b border-ink-line bg-ink p-8 transition-colors duration-300 hover:bg-ink-soft md:border-b-0 md:border-r md:p-12 md:last:border-r-0"
          >
            <div className="flex gap-1">
              {Array.from({ length: 5 }).map((_, s) => (
                <Star
                  key={s}
                  size={18}
                  className="fill-primary text-primary"
                />
              ))}
            </div>
            <blockquote className="mt-6 flex-1 text-lg leading-relaxed text-white/80 transition-colors group-hover:text-white">
              “{t.quote}”
            </blockquote>
            <figcaption className="mt-8 border-t border-ink-line pt-5">
              <div className="font-bold">{t.name}</div>
              <div className="mt-1 font-mono text-xs uppercase tracking-wider text-primary">
                {t.role}
              </div>
            </figcaption>
          </motion.figure>
        ))}
      </div>
    </section>
  )
}
