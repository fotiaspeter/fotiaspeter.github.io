import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import SplitHeading from './SplitHeading'
import { scrollToId } from '../site'

type Service = {
  num: string
  title: string
  description: string
  image: string
  points: string[]
}

const SERVICES: Service[] = [
  {
    num: '01',
    title: 'Domestic Electrical',
    description:
      'Power points, lighting, ceiling fans, rewires and renovation work for homes and units. Whether it is one dodgy switch or a whole-house rewire, it gets done neat and to standard.',
    image:
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1400&q=80',
    points: ['Renovations & extensions', 'Power & lighting', 'Ceiling fans'],
  },
  {
    num: '02',
    title: 'Commercial Electrical',
    description:
      'Fit-outs and electrical work for offices, shops, cafes and warehouses. We work around your trading hours so the lights stay on and the business keeps running.',
    image:
      'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1400&q=80',
    points: ['Shop & office fit-outs', 'Three-phase power', 'After-hours work'],
  },
  {
    num: '03',
    title: 'Industrial Electrical',
    description:
      'Factories, plant and machinery, three-phase installs and fault-finding. Heavier work that needs to be done right the first time and signed off properly.',
    image:
      'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1400&q=80',
    points: ['Machine wiring', 'Three-phase installs', 'Plant maintenance'],
  },
  {
    num: '04',
    title: 'Switchboards & Safety',
    description:
      'Old ceramic fuses and failing boards swapped for modern switchboards with proper safety switches. Plus smoke alarms and compliance work to keep the family safe.',
    image:
      'https://images.unsplash.com/photo-1565608438257-fac3c27beb36?auto=format&fit=crop&w=1400&q=80',
    points: ['Safety switches (RCDs)', 'Board upgrades', 'Smoke alarms'],
  },
  {
    num: '05',
    title: 'EV Charger Installs',
    description:
      'Home and workplace EV charging, properly load-balanced so it plays nicely with the rest of the house. Certified for all the major charger brands.',
    image:
      'https://images.unsplash.com/photo-1647500666543-2d4f6cef5e54?auto=format&fit=crop&w=1400&q=80',
    points: ['All major brands', 'Load balancing', 'Rebate help'],
  },
  {
    num: '06',
    title: 'Repairs & Emergencies',
    description:
      'Lost power, tripping switches, burning smells or a board that keeps cutting out? Call any time — fault-finding and 24/7 callouts across Melbourne and Victoria.',
    image:
      'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1400&q=80',
    points: ['24/7 callouts', 'Fault finding', 'Test & tag'],
  },
]

function ServiceRow({ service, index }: { service: Service; index: number }) {
  const reversed = index % 2 === 1
  const origin = reversed ? 'right' : 'left'
  const textFromX = reversed ? -60 : 60

  return (
    <div className="grid items-stretch border-b border-ink-line lg:grid-cols-2">
      {/* Image side with curtain-wipe reveal */}
      <div
        className={`relative aspect-[4/3] overflow-hidden lg:aspect-auto lg:min-h-[480px] ${
          reversed ? 'lg:order-2' : 'lg:order-1'
        }`}
      >
        <img
          src={service.image}
          alt={service.title}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-ink/30" />
        <motion.div
          className="absolute inset-0 z-10 bg-primary"
          style={{ originX: reversed ? 1 : 0 }}
          initial={{ scaleX: 1 }}
          whileInView={{ scaleX: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.9, ease: [0.77, 0, 0.18, 1] }}
        />
        <span
          className={`absolute top-6 z-20 font-mono text-7xl font-bold text-white/15 ${
            reversed ? 'right-6' : 'left-6'
          }`}
          style={{ transformOrigin: origin }}
        >
          {service.num}
        </span>
      </div>

      {/* Text side slides in from opposite direction */}
      <motion.div
        className={`flex flex-col justify-center bg-ink-soft px-6 py-12 md:px-12 lg:px-16 lg:py-20 ${
          reversed ? 'lg:order-1' : 'lg:order-2'
        }`}
        initial={{ opacity: 0, x: textFromX }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
      >
        <span className="font-mono text-xs uppercase tracking-[0.3em] text-primary">
          Service / {service.num}
        </span>
        <h3 className="mt-4 text-4xl font-extrabold tracking-tight md:text-5xl">
          {service.title}
        </h3>
        <p className="mt-5 max-w-md text-base text-white/60 md:text-lg">
          {service.description}
        </p>
        <ul className="mt-7 flex flex-wrap gap-x-6 gap-y-3">
          {service.points.map((point) => (
            <li
              key={point}
              className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-white/70"
            >
              <span className="h-1.5 w-1.5 bg-primary" />
              {point}
            </li>
          ))}
        </ul>
        <button
          onClick={() => scrollToId('contact')}
          className="group mt-9 inline-flex w-fit items-center gap-2 border border-white/15 px-6 py-3 font-semibold text-white transition-colors hover:border-primary hover:text-primary"
        >
          Enquire
          <ArrowUpRight
            size={18}
            className="text-primary transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </button>
      </motion.div>
    </div>
  )
}

export default function Services() {
  return (
    <section id="services" className="border-t border-ink-line bg-ink">
      <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
        <span className="font-mono text-xs uppercase tracking-[0.3em] text-primary">
          What We Do
        </span>
        <SplitHeading
          text="Every Job. Done Right."
          highlight={[2]}
          className="mt-4 max-w-2xl text-5xl font-extrabold leading-[0.95] tracking-tight md:text-7xl"
        />
        <p className="mt-6 max-w-xl text-lg text-white/55">
          From a single power point to a full factory fit-out, you get the same
          thing every time: licensed work, a fair price, and a tidy site when we
          leave.
        </p>
      </div>

      <div className="border-t border-ink-line">
        {SERVICES.map((service, i) => (
          <ServiceRow key={service.num} service={service} index={i} />
        ))}
      </div>
    </section>
  )
}
