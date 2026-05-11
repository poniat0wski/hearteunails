import { motion, useReducedMotion } from 'framer-motion'
import {
  fadeUp,
  scaleIn,
  staggerContainer,
  viewportOnce,
} from '../animations/variants'
import SectionHeading from './SectionHeading'

function BookingPolicies({ policiesIntro, policyGroups }) {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section id="policies" className="relative bg-transparent">
      <div className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewportOnce}>
          <SectionHeading
            eyebrow="Before Booking"
            title={policiesIntro.title}
            description={policiesIntro.subtitle}
            className="mb-8 max-w-2xl"
          />
        </motion.div>

        <motion.div
          className="grid gap-4 md:grid-cols-2"
          variants={staggerContainer(0.08, 0.04)}
          initial={shouldReduceMotion ? false : 'hidden'}
          whileInView={shouldReduceMotion ? undefined : 'visible'}
          viewport={viewportOnce}
        >
          {policyGroups.map((group) => (
            <motion.article
              key={group.title}
              variants={scaleIn}
              className="soft-card rounded-[1.4rem] border border-white/75 bg-white/78 p-5 shadow-[0_18px_40px_-28px_rgba(129,43,95,0.46)]"
            >
              <h3 className="text-xl text-[var(--ink-900)]">{group.title}</h3>
              <ul className="mt-3 space-y-2.5">
                {group.items.map((item) => (
                  <li
                    key={`${group.title}-${item.text}`}
                    className={`rounded-xl px-3.5 py-3 text-sm leading-relaxed ${
                      item.highlight
                        ? 'bg-[#ffeef7] text-[var(--pink-strong)] ring-1 ring-[#f4c7df]/80'
                        : 'bg-white/85 text-[var(--ink-700)] ring-1 ring-[#f7d2e7]/60'
                    }`}
                  >
                    {item.text}
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default BookingPolicies
