import { motion } from 'framer-motion'
import type { JSX } from 'react'

type SplitHeadingProps = {
  text: string
  className?: string
  /** Tailwind text colour class applied to highlighted words */
  highlightClassName?: string
  /** Words (by index, 0-based) to render in the highlight colour */
  highlight?: number[]
  as?: keyof JSX.IntrinsicElements
  delay?: number
}

/**
 * Splits text into words; each word clips up through an overflow-hidden
 * mask with a staggered delay and a subtle skew ease-out.
 */
export default function SplitHeading({
  text,
  className = '',
  highlightClassName = 'text-primary',
  highlight = [],
  as = 'h2',
  delay = 0,
}: SplitHeadingProps) {
  const Tag = motion[as as 'h2']
  const words = text.split(' ')

  return (
    <Tag
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
    >
      {words.map((word, i) => (
        <span
          key={`${word}-${i}`}
          className="inline-block overflow-hidden align-bottom"
          style={{ paddingBottom: '0.12em', marginRight: '0.28em' }}
        >
          <motion.span
            className={`inline-block ${highlight.includes(i) ? highlightClassName : ''}`}
            variants={{
              hidden: { y: '110%', skewY: 6 },
              visible: { y: '0%', skewY: 0 },
            }}
            transition={{
              duration: 0.8,
              delay: delay + i * 0.07,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </Tag>
  )
}
