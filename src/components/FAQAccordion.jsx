import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { useState } from 'react'
import { fadeUp, viewportOnce } from '../animations/variants'

function FAQAccordion({ faqItems }) {
  const [openIndex, setOpenIndex] = useState(0)
  const shouldReduceMotion = useReducedMotion()

  return (
    <div className="space-y-3">
      {faqItems.map((item, index) => {
        const isOpen = index === openIndex

        return (
          <motion.article
            key={item.question}
            className="soft-card overflow-hidden"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <h3>
              <button
                type="button"
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-base font-semibold text-[var(--ink-900)]"
                onClick={() => setOpenIndex((prev) => (prev === index ? -1 : index))}
                aria-expanded={isOpen}
              >
                <span>{item.question}</span>
                <motion.span
                  animate={{ rotate: isOpen ? 45 : 0 }}
                  transition={shouldReduceMotion ? { duration: 0.1 } : { duration: 0.24 }}
                  className="text-xl leading-none text-[var(--pink-strong)]"
                >
                  +
                </motion.span>
              </button>
            </h3>
            <AnimatePresence initial={false}>
              {isOpen ? (
                <motion.div
                  key="answer"
                  initial={shouldReduceMotion ? { opacity: 0 } : { height: 0, opacity: 0 }}
                  animate={shouldReduceMotion ? { opacity: 1 } : { height: 'auto', opacity: 1 }}
                  exit={shouldReduceMotion ? { opacity: 0 } : { height: 0, opacity: 0 }}
                  transition={shouldReduceMotion ? { duration: 0.12 } : { duration: 0.28 }}
                >
                  <p className="px-5 pb-5 text-sm leading-relaxed text-[var(--ink-700)]">
                    {item.answer}
                  </p>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </motion.article>
        )
      })}
    </div>
  )
}

export default FAQAccordion
