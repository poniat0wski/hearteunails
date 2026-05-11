import { motion, useReducedMotion } from 'framer-motion'
import {
  fadeUp,
  scaleIn,
  staggerContainer,
  viewportOnce,
} from '../animations/variants'
import SectionHeading from './SectionHeading'

function Pricing({ pricingGroups, pricingNotes }) {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section id="pricing" className="relative bg-transparent">
      <div className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewportOnce}>
          <SectionHeading
            eyebrow="Price List"
            title="Real menu before you book."
            description="Based on Hearteu Nails current price list. Bring your inspo and we'll confirm the final total with you."
            className="mb-8 max-w-2xl"
          />
        </motion.div>

        <motion.div
          className="grid gap-4 lg:grid-cols-2"
          variants={staggerContainer(0.08, 0.04)}
          initial={shouldReduceMotion ? false : 'hidden'}
          whileInView={shouldReduceMotion ? undefined : 'visible'}
          viewport={viewportOnce}
        >
          {pricingGroups.map((group) => (
            <motion.article
              key={group.title}
              variants={scaleIn}
              className="soft-card rounded-[1.4rem] border border-white/75 bg-white/78 p-5 shadow-[0_18px_40px_-28px_rgba(129,43,95,0.46)]"
            >
              <h3 className="text-xl text-[var(--ink-900)]">{group.title}</h3>
              <ul className="mt-4 space-y-2.5">
                {group.items.map((item) => (
                  <li
                    key={`${group.title}-${item.name}`}
                    className="rounded-xl bg-white/88 px-3.5 py-3 ring-1 ring-[#f7d2e7]/60"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="min-w-0">
                        <p className="text-sm font-semibold text-[var(--ink-900)]">{item.name}</p>
                        {item.description ? (
                          <p className="mt-1 text-xs leading-relaxed text-[var(--ink-500)]">
                            {item.description}
                          </p>
                        ) : null}
                      </div>
                      <p className="shrink-0 pl-2 text-sm font-semibold text-[var(--pink-strong)]">
                        {item.price}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
              {group.note ? (
                <p className="mt-3 text-xs font-medium text-[var(--pink-strong)]">{group.note}</p>
              ) : null}
            </motion.article>
          ))}
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial={shouldReduceMotion ? false : 'hidden'}
          whileInView={shouldReduceMotion ? undefined : 'visible'}
          viewport={viewportOnce}
          className="mt-5 rounded-2xl border border-[var(--line-soft)] bg-[#fff1f8]/88 p-4 sm:p-5"
        >
          <p className="text-sm font-semibold text-[var(--pink-strong)]">Please note</p>
          <ul className="mt-2 space-y-1.5 text-sm text-[var(--ink-600)]">
            {pricingNotes.map((note) => (
              <li key={note}>â€¢ {note}</li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  )
}

export default Pricing
