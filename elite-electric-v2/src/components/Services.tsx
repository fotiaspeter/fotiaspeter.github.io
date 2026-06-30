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
    title: 'Residential Wiring',
    description:
      'Full rewires, new circuits, lighting design and smart-home integration for homes built to last. Tidy, certified, code-perfect work.',
    image:
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1400&q=80',
    points: ['New builds & renovations', 'Smart lighting', 'Surge protection'],
  },
  {
    num: '02',
    title: 'Commercial Fit-outs',
    description:
      'Office, retail and hospitality fit-outs delivered on schedule. Three-phase power, data, and lighting that keep your business running.',
    image:
      'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1400&q=80',
    points: ['Three-phase power', 'Data & comms', 'Project managed'],
  },
  {
    num: '03',
    title: 'EV Charger Installs',
    description:
      'Home and workplace EV charging, properly load-balanced and future-proofed. Certified installers for all major charger brands.',
    image:
      'https://images.unsplash.com/photo-1647500666543-2d4f6cef5e54?auto=format&fit=crop&w=1400&q=80',
    points: ['All major brands', 'Load balancing', 'Rebate assistance'],
  },
  {
    num: '04',
    title: 'Emergency Callouts',
    description:
      'Power out? Burning smell? Tripped board at 2am? We answer. Rapid response electricians on call around the clock, every day.',
    image:
      'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1400&q=80',
    points: ['45-minute response', 'Available 24/7', 'Fault finding'],
  },
  {
    num: '05',
    title: 'Switchboard Upgrades',
    description:
      'Old fuses and failing boards replaced with modern, safety-switched switchboards. Protect your property and meet current standards.',
    image:
      'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1400&q=80',
    points: ['Safety switches', 'Compliance upgrades', 'Capacity expansion'],
  },
  {
    num: '06',
    title: 'Safety Inspections',
    description:
      'Pre-purchase, rental compliance and periodic safety inspections with detailed reporting. Know your wiring is safe — with proof.',
    image:
      'https://images.unsplash.com/photo-1565608438257-fac3c27beb36?auto=format&fit=crop&w=1400&q=80',
    points: ['Detailed reporting', 'Rental compliance', 'Thermal imaging'],
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
          From a single power point to a full commercial fit-out, our master
          electricians bring the same standard to every project.
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
