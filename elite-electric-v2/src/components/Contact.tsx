import { useState, type FormEvent } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Check, Clock, MapPin, Phone } from 'lucide-react'
import SplitHeading from './SplitHeading'
import { SITE } from '../site'

const SERVICES = [
  'Residential Wiring',
  'Commercial Fit-out',
  'EV Charger Install',
  'Emergency Callout',
  'Switchboard Upgrade',
  'Safety Inspection',
  'Something Else',
]

type Status = 'idle' | 'submitting' | 'success'

export default function Contact() {
  const [status, setStatus] = useState<Status>('idle')

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (status !== 'idle') return
    setStatus('submitting')
    // Cosmetic only — no backend.
    setTimeout(() => setStatus('success'), 1500)
  }

  return (
    <section id="contact" className="border-t border-ink-line bg-ink-soft">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 md:px-8 md:py-28 lg:grid-cols-2 lg:gap-20">
        {/* Left: heading + details */}
        <div>
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-primary">
            Get a Quote
          </span>
          <SplitHeading
            text="Let's Get You Powered."
            highlight={[3]}
            className="mt-4 text-5xl font-extrabold leading-[0.95] tracking-tight md:text-7xl"
          />
          <p className="mt-6 max-w-md text-lg text-white/55">
            Tell us about your project and we will get back to you with a fixed,
            upfront quote — usually the same day.
          </p>

          <div className="mt-10 space-y-px border border-ink-line">
            <a
              href={SITE.phoneHref}
              className="group flex items-center gap-4 border-b border-ink-line p-5 transition-colors hover:bg-primary/5"
            >
              <Phone size={22} className="text-primary" />
              <div>
                <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/40">
                  Call Anytime
                </div>
                <div className="text-lg font-semibold group-hover:text-primary">
                  {SITE.phone}
                </div>
              </div>
            </a>
            <div className="flex items-center gap-4 border-b border-ink-line p-5">
              <MapPin size={22} className="text-primary" />
              <div>
                <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/40">
                  Service Area
                </div>
                <div className="text-lg font-semibold">{SITE.area}</div>
              </div>
            </div>
            <div className="flex items-center gap-4 p-5">
              <Clock size={22} className="text-primary" />
              <div>
                <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/40">
                  Hours
                </div>
                <div className="text-lg font-semibold">{SITE.hours}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right: form */}
        <div className="relative border border-ink-line bg-ink p-6 md:p-10">
          <AnimatePresence mode="wait">
            {status === 'success' ? (
              <motion.div
                key="success"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex min-h-[520px] flex-col items-center justify-center text-center"
              >
                <motion.div
                  initial={{ scale: 0, rotate: -20 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ type: 'spring', stiffness: 220, damping: 14 }}
                  className="flex h-20 w-20 items-center justify-center bg-primary"
                >
                  <Check size={44} className="text-ink" strokeWidth={3} />
                </motion.div>
                <h3 className="mt-8 text-3xl font-extrabold">Request Sent.</h3>
                <p className="mt-3 max-w-xs text-white/55">
                  Thanks — one of our electricians will be in touch shortly to
                  confirm your quote.
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="mt-8 font-mono text-xs uppercase tracking-[0.2em] text-primary hover:text-white"
                >
                  Send another request
                </button>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit}
                className="flex flex-col gap-5"
              >
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Name">
                    <input
                      required
                      type="text"
                      placeholder="Jane Smith"
                      className="form-input"
                    />
                  </Field>
                  <Field label="Phone">
                    <input
                      required
                      type="tel"
                      placeholder="0400 000 000"
                      className="form-input"
                    />
                  </Field>
                </div>
                <Field label="Email">
                  <input
                    required
                    type="email"
                    placeholder="jane@email.com"
                    className="form-input"
                  />
                </Field>
                <Field label="Service Needed">
                  <select required defaultValue="" className="form-input">
                    <option value="" disabled>
                      Select a service…
                    </option>
                    {SERVICES.map((s) => (
                      <option key={s} value={s} className="bg-ink">
                        {s}
                      </option>
                    ))}
                  </select>
                </Field>
                <Field label="Project Details">
                  <textarea
                    rows={4}
                    placeholder="Tell us what you need…"
                    className="form-input resize-none"
                  />
                </Field>

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="relative mt-2 h-14 overflow-hidden border border-primary font-semibold text-ink"
                >
                  {/* Animated blue fill */}
                  <motion.span
                    className="absolute inset-0 z-0 bg-primary"
                    initial={{ x: '-101%' }}
                    animate={{ x: status === 'submitting' ? '0%' : '-101%' }}
                    transition={{ duration: 1.4, ease: [0.65, 0, 0.35, 1] }}
                  />
                  {/* Base fill so idle button is solid primary */}
                  <span className="absolute inset-0 z-0 bg-primary" />
                  <span className="relative z-10 flex h-full items-center justify-center gap-2 uppercase tracking-wider">
                    {status === 'submitting' ? 'Sending…' : 'Request My Quote'}
                  </span>
                </button>
                <p className="text-center font-mono text-[10px] uppercase tracking-[0.2em] text-white/30">
                  No obligation · Free quote · Fast response
                </p>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </div>

      <style>{`
        .form-input {
          width: 100%;
          background: #080c12;
          border: 1px solid #1b2530;
          color: #fff;
          padding: 0.85rem 1rem;
          font-size: 0.95rem;
          outline: none;
          transition: border-color 0.2s, box-shadow 0.2s;
        }
        .form-input::placeholder { color: rgba(255,255,255,0.3); }
        .form-input:focus {
          border-color: #00c2e8;
          box-shadow: 0 0 0 1px #00c2e8;
        }
      `}</style>
    </section>
  )
}

function Field({
  label,
  children,
}: {
  label: string
  children: React.ReactNode
}) {
  return (
    <label className="block">
      <span className="mb-2 block font-mono text-[10px] uppercase tracking-[0.25em] text-white/45">
        {label}
      </span>
      {children}
    </label>
  )
}
