import { motion, useReducedMotion } from 'framer-motion'
import {
  fadeUp,
  scaleIn,
  staggerContainer,
  viewportOnce,
} from '../animations/variants'
import SectionHeading from './SectionHeading'

const stepBadges = ['IN', 'TM', 'OK', 'GO']

function BookingProcess({ bookingIntro, bookingSteps }) {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section className="relative bg-transparent">
      <div className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Booking Process"
          title="Easy booking in 4 steps."
          description={bookingIntro}
          className="mb-8 max-w-2xl"
        />

        <motion.ol
          className="relative space-y-4 pl-6 md:hidden"
          variants={staggerContainer(0.08, 0.03)}
          initial={shouldReduceMotion ? false : 'hidden'}
          whileInView={shouldReduceMotion ? undefined : 'visible'}
          viewport={viewportOnce}
        >
          <div className="absolute bottom-4 left-[17px] top-2 w-px bg-[var(--line-soft)]" />
          {bookingSteps.map((step, index) => (
            <motion.li key={step} variants={fadeUp} className="relative">
              <span className="absolute -left-6 top-5 inline-flex h-7 w-7 items-center justify-center rounded-full bg-[var(--pink-main)] text-[10px] font-bold text-white">
                {index + 1}
              </span>
              <article className="soft-card p-4">
                <p className="text-sm font-medium text-[var(--ink-700)]">{step}</p>
              </article>
            </motion.li>
          ))}
        </motion.ol>

        <motion.div
          className="relative hidden md:block"
          variants={staggerContainer(0.1, 0.04)}
          initial={shouldReduceMotion ? false : 'hidden'}
          whileInView={shouldReduceMotion ? undefined : 'visible'}
          viewport={viewportOnce}
        >
          <div className="absolute left-10 right-10 top-8 h-px bg-[var(--line-soft)] lg:left-12 lg:right-12" />
          <ol className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {bookingSteps.map((step, index) => (
              <motion.li key={step} variants={scaleIn}>
                <article className="soft-card relative h-full p-5 pt-8">
                  <span className="absolute left-5 top-[-14px] inline-flex h-8 w-8 items-center justify-center rounded-full bg-[var(--pink-main)] text-[11px] font-bold text-white shadow-sm">
                    {stepBadges[index]}
                  </span>
                  <p className="text-sm font-medium leading-relaxed text-[var(--ink-700)]">{step}</p>
                </article>
              </motion.li>
            ))}
          </ol>
        </motion.div>
      </div>
    </section>
  )
}

export default BookingProcess
