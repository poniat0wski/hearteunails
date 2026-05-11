import { motion, useReducedMotion } from 'framer-motion'
import { useRef } from 'react'
import {
  fadeUp,
  scaleIn,
  staggerContainer,
  viewportOnce,
} from '../animations/variants'

function Hero({ heroContent, heroImages = [] }) {
  const sectionRef = useRef(null)
  const shouldReduceMotion = useReducedMotion()
  const headlineLines = ['Nails that look like', 'your Pinterest board', 'came to life.']
  const activeHeroImages = heroImages.length > 0 ? heroImages : []

  const floatingCardSlots = [
    {
      key: 'slot-1',
      className: 'left-[2%] top-[5%] w-40 xl:w-48 rotate-[-8deg]',
    },
    {
      key: 'slot-2',
      className: 'right-[2%] top-[6%] w-36 xl:w-44 rotate-[8deg]',
    },
    {
      key: 'slot-3',
      className: 'left-[4%] top-[68%] hidden w-32 rotate-[6deg] lg:block xl:w-40',
    },
    {
      key: 'slot-4',
      className: 'right-[4%] top-[67%] hidden w-32 rotate-[-6deg] lg:block xl:w-40',
    },
  ]

  return (
    <section
      id="top"
      ref={sectionRef}
      className="relative overflow-hidden bg-transparent"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(90%_65%_at_50%_12%,rgba(255,233,245,0.5)_0%,rgba(255,247,251,0.2)_48%,rgba(255,247,251,0)_100%)]" />

      <div className="relative mx-auto flex min-h-[100svh] w-full max-w-6xl flex-col items-center justify-center px-4 pt-16 pb-20 text-center sm:px-6 sm:pt-20 sm:pb-24 lg:px-8">
        <div className="pointer-events-none absolute inset-0 hidden lg:block" aria-hidden="true">
          {activeHeroImages.length > 0 &&
            floatingCardSlots.map((slot, index) => {
              const item = activeHeroImages[index % activeHeroImages.length]
              if (!item) return null

              return (
                <motion.figure
                  key={slot.key}
                  className={`soft-card absolute z-10 overflow-hidden opacity-95 shadow-[0_24px_50px_-28px_rgba(129,43,95,0.7)] ${slot.className}`}
                  variants={scaleIn}
                  initial="hidden"
                  animate="visible"
                  transition={shouldReduceMotion ? { duration: 0.12 } : { delay: 0.2 + index * 0.09 }}
                >
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="h-32 w-full object-cover lg:h-40"
                    loading="lazy"
                  />
                </motion.figure>
              )
            })}
        </div>

        <motion.div
          className="relative z-20 mx-auto max-w-4xl space-y-6 px-2 md:px-10 lg:px-14"
          variants={staggerContainer(0.1, 0.02)}
          initial="hidden"
          animate="visible"
        >
          <h1 className="mx-auto max-w-4xl text-[clamp(2.15rem,7.4vw,6.3rem)] leading-[0.95] font-semibold tracking-[-0.02em]">
            <span className="sr-only">{heroContent.title}</span>
            <span aria-hidden="true" className="block">
              {headlineLines.map((line, index) => (
                <motion.span
                  key={line}
                  className="block"
                  initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 24 }}
                  animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
                  transition={
                    shouldReduceMotion
                      ? { duration: 0.15 }
                      : {
                          duration: 0.55,
                          delay: 0.15 + index * 0.11,
                          ease: [0.22, 1, 0.36, 1],
                        }
                  }
                >
                  {line}
                </motion.span>
              ))}
            </span>
          </h1>

          <motion.p
            variants={fadeUp}
            className="mx-auto max-w-xl text-base leading-relaxed text-[var(--ink-700)] sm:text-lg"
          >
            {heroContent.subtitle}
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-3 pt-2">
            <a
              href={heroContent.primaryCta.href}
              className="rounded-full bg-[var(--pink-main)] px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-[var(--pink-strong)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--pink-strong)]"
            >
              {heroContent.primaryCta.text}
            </a>
            <a
              href={heroContent.secondaryCta.href}
              className="rounded-full border border-[var(--line-soft)] bg-white px-6 py-3 text-sm font-semibold text-[var(--ink-700)] transition hover:-translate-y-0.5 hover:bg-[var(--pink-soft)]"
            >
              {heroContent.secondaryCta.text}
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          className="relative z-20 mt-9 w-full lg:hidden"
          variants={staggerContainer(0.12, 0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {activeHeroImages.slice(0, 4).map((item, index) => (
              <motion.figure
                key={item.src}
                className="soft-card overflow-hidden"
                variants={scaleIn}
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  className="h-44 w-full object-cover"
                  loading={index === 0 ? 'eager' : 'lazy'}
                />
              </motion.figure>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
