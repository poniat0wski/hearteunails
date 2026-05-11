import { motion, useReducedMotion } from 'framer-motion'
import { fadeUp, softReveal, viewportOnce } from '../animations/variants'

function SectionHeading({
  eyebrow,
  title,
  description,
  centered = false,
  className = '',
}) {
  const shouldReduceMotion = useReducedMotion()
  const alignClasses = centered ? 'mx-auto text-center' : 'text-left'

  return (
    <motion.div
      className={`${alignClasses} ${className}`.trim()}
      variants={shouldReduceMotion ? fadeUp : softReveal}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
    >
      {eyebrow ? (
        <p className="text-sm font-semibold tracking-wide text-[var(--pink-strong)] uppercase">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="mt-2 text-3xl leading-tight sm:text-4xl">{title}</h2>
      {description ? (
        <p className="mt-3 text-base leading-relaxed text-[var(--ink-700)]">{description}</p>
      ) : null}
    </motion.div>
  )
}

export default SectionHeading
