import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import {
  ArrowUpRight,
  Home,
  Building2,
  Factory,
  ShieldCheck,
  BatteryCharging,
  Siren,
  type LucideIcon,
} from 'lucide-react'
import SplitHeading from './SplitHeading'
import { scrollToId } from '../site'

type Service = {
  num: string
  title: string
  description: string
  image: string
  icon: LucideIcon
  points: string[]
}

const SERVICES: Service[] = [
  {
    num: '01',
    title: 'Domestic Electrical',
    description:
      'Power points, lighting, ceiling fans, rewires and renovation work for homes and units. Whether it is one dodgy switch or a whole-house rewire, it gets done neat and to standard.',
    image:
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1800&q=80',
    icon: Home,
    points: ['Renovations & extensions', 'Power & lighting', 'Ceiling fans'],
  },
  {
    num: '02',
    title: 'Commercial Electrical',
    description:
      'Fit-outs and electrical work for offices, shops, cafes and warehouses. We work around your trading hours so the lights stay on and the business keeps running.',
    image:
      'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1800&q=80',
    icon: Building2,
    points: ['Shop & office fit-outs', 'Three-phase power', 'After-hours work'],
  },
  {
    num: '03',
    title: 'Industrial Electrical',
    description:
      'Factories, plant and machinery, three-phase installs and fault-finding. Heavier work that needs to be done right the first time and signed off properly.',
    image:
      'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1800&q=80',
    icon: Factory,
    points: ['Machine wiring', 'Three-phase installs', 'Plant maintenance'],
  },
  {
    num: '04',
    title: 'Switchboards & Safety',
    description:
      'Old ceramic fuses and failing boards swapped for modern switchboards with proper safety switches. Plus smoke alarms and compliance work to keep the family safe.',
    image:
      'https://images.unsplash.com/photo-1565608438257-fac3c27beb36?auto=format&fit=crop&w=1800&q=80',
    icon: ShieldCheck,
    points: ['Safety switches (RCDs)', 'Board upgrades', 'Smoke alarms'],
  },
  {
    num: '05',
    title: 'EV Charger Installs',
    description:
      'Home and workplace EV charging, properly load-balanced so it plays nicely with the rest of the house. Certified for all the major charger brands.',
    image:
      'https://images.unsplash.com/photo-1647500666543-2d4f6cef5e54?auto=format&fit=crop&w=1800&q=80',
    icon: BatteryCharging,
    points: ['All major brands', 'Load balancing', 'Rebate help'],
  },
  {
    num: '06',
    title: 'Repairs & Emergencies',
    description:
      'Lost power, tripping switches, burning smells or a board that keeps cutting out? Call any time — fault-finding and 24/7 callouts across Melbourne and Victoria.',
    image:
      'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1800&q=80',
    icon: Siren,
    points: ['24/7 callouts', 'Fault finding', 'Test & tag'],
  },
]

/** Full-width image that fades + settles in as it scrolls through the viewport. */
function ServiceImage({ service }: { service: Service }) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.95', 'center 0.6'],
  })
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1])
  // Slides to the right (starts shifted left) while fading in. A constant
  // slight zoom keeps the edges covered through the whole slide.
  const x = useTransform(scrollYProgress, [0, 1], ['-8%', '0%'])

  return (
    <div
      ref={ref}
      className="relative aspect-[4/3] w-full overflow-hidden bg-ink-soft sm:aspect-[16/9] lg:aspect-[21/9]"
    >
      <motion.img
        src={service.image}
        alt={service.title}
        style={{ opacity, x, scale: 1.16 }}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/15 to-ink/40" />
      <span className="pointer-events-none absolute bottom-6 right-6 font-mono text-[12vw] font-bold leading-none text-white/10 lg:text-[7rem]">
        {service.num}
      </span>
    </div>
  )
}

function ServiceBlock({ service }: { service: Service }) {
  return (
    <article className="border-t border-ink-line">
      <ServiceImage service={service} />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="mx-auto max-w-7xl px-5 py-12 md:px-8 md:py-16"
      >
        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center border border-primary/40 text-primary">
            <service.icon size={22} strokeWidth={1.6} />
          </div>
          <span className="font-mono text-sm tracking-[0.3em] text-white/40">
            {service.num}
          </span>
        </div>

        <h3 className="mt-6 text-4xl font-extrabold uppercase tracking-tight md:text-6xl">
          {service.title}
        </h3>
        <p className="mt-4 max-w-2xl text-lg text-white/60">
          {service.description}
        </p>

        <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-3">
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
          className="group mt-8 inline-flex items-center gap-2 font-mono text-sm uppercase tracking-[0.2em] text-primary transition-colors hover:text-white"
        >
          Enquire
          <ArrowUpRight
            size={18}
            className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </button>
      </motion.div>
    </article>
  )
}

export default function Services() {
  return (
    <section id="services" className="border-t border-ink-line bg-ink">
      <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
        <span className="font-mono text-xs uppercase tracking-[0.3em] text-primary">
          Our Expertise
        </span>
        <SplitHeading
          text="What We Do"
          className="mt-4 max-w-2xl text-5xl font-extrabold uppercase leading-[0.95] tracking-tight md:text-7xl"
        />
        <p className="mt-6 max-w-xl text-lg text-white/55">
          From a single power point to a full factory fit-out, you get the same
          thing every time: licensed work, a fair price, and a tidy site when we
          leave.
        </p>
      </div>

      {SERVICES.map((service) => (
        <ServiceBlock key={service.num} service={service} />
      ))}
    </section>
  )
}
