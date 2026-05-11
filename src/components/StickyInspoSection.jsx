import { motion, useReducedMotion } from 'framer-motion'
import {
  fadeUp,
  scaleIn,
  staggerContainer,
  viewportOnce,
} from '../animations/variants'
import AnimatedCard from './AnimatedCard'
import SectionHeading from './SectionHeading'

function StickyInspoSection({ inspoCards }) {
  const shouldReduceMotion = useReducedMotion()
  const beforeBookingChecklist = [
    'Send your nail inspo',
    'Pick your preferred date & time',
    'Mention charms, length, or removal',
    'Wait for confirmation',
  ]

  return (
    <section className="relative -mt-12 bg-transparent">
      <div className="mx-auto w-full max-w-6xl px-4 pt-24 pb-14 sm:px-6 sm:pt-28 lg:px-8">
        <div className="grid gap-7 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:gap-8">
          <motion.div
            className="space-y-4 lg:sticky lg:top-24 lg:self-start"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <SectionHeading
              eyebrow="Inspo Flow"
              title="Your inspo, turned into a set."
              description="From screenshot to final details, every set gets shaped around your vibe and what works best for your nails."
            />
            <motion.div
              variants={scaleIn}
              className="soft-card rounded-2xl border border-white/75 bg-white/80 p-4 shadow-[0_18px_38px_-28px_rgba(129,43,95,0.45)]"
            >
              <p className="text-sm font-semibold text-[var(--ink-900)]">Before you book</p>
              <ul className="mt-2.5 space-y-1.5 text-sm text-[var(--ink-700)]">
                {beforeBookingChecklist.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span
                      aria-hidden="true"
                      className="mt-1 inline-block h-2 w-2 shrink-0 rounded-full bg-[var(--pink-main)]"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>

          <motion.div
            className="space-y-4"
            variants={staggerContainer(0.14, 0.08)}
            initial={shouldReduceMotion ? false : 'hidden'}
            whileInView={shouldReduceMotion ? undefined : 'visible'}
            viewport={viewportOnce}
          >
            {inspoCards.map((card, index) => (
              <AnimatedCard
                key={card.title}
                className="soft-card relative overflow-hidden border border-white/75 bg-white/78 p-0 shadow-[0_22px_46px_-30px_rgba(129,43,95,0.42)]"
                variants={scaleIn}
                index={index}
              >
                {card.image && (
                  <figure className="relative overflow-hidden border-b border-white/80 bg-[#fff6fb]">
                    <span className="absolute right-3 top-3 z-10 rounded-full bg-white/92 px-2.5 py-1 text-[10px] font-semibold tracking-wide text-[var(--pink-strong)] uppercase shadow-sm ring-1 ring-[#f6c5e2]/80">
                      Step {index + 1}
                    </span>
                    <img
                      src={card.image}
                      alt={card.imageAlt || `${card.title} nail art reference`}
                      className="aspect-[16/10] h-full w-full object-cover"
                      loading="lazy"
                    />
                  </figure>
                )}
                <div className="px-5 py-4 sm:px-6 sm:py-5">
                  <h3 className="text-xl text-[var(--ink-900)]">{card.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--ink-700)]">{card.text}</p>
                </div>
              </AnimatedCard>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default StickyInspoSection
