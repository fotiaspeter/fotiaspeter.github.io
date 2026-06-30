const PHRASES = [
  'Licensed REC 36000',
  'Fully Insured',
  'Domestic · Commercial · Industrial',
  '24/7 Emergency Callouts',
  'Free Written Quotes',
  'Melbourne & All of Victoria',
  'Owner Operated',
  'No Mess Left Behind',
]

function Row() {
  return (
    <div className="flex shrink-0 items-center">
      {PHRASES.map((phrase) => (
        <span key={phrase} className="flex items-center">
          <span className="px-6 py-4 font-mono text-sm font-bold uppercase tracking-[0.15em] text-ink md:text-base">
            {phrase}
          </span>
          <span className="text-ink/60">/</span>
        </span>
      ))}
    </div>
  )
}

export default function Marquee() {
  return (
    <div className="relative overflow-hidden border-y border-primary bg-primary">
      <div className="flex w-max animate-marquee">
        <Row />
        <Row />
      </div>
    </div>
  )
}
