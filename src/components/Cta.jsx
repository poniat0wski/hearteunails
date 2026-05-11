import { motion, useReducedMotion } from 'framer-motion'
import { fadeUp, scaleIn, staggerContainer, viewportOnce } from '../animations/variants'

function Cta({ brandInfo, ctaImages = [] }) {
  const shouldReduceMotion = useReducedMotion()
  const decorativeImages = ctaImages.slice(0, 2)

  return (
    <section id="book" className="relative bg-transparent px-4 py-16 sm:px-6 lg:px-8">
      <motion.div
        className="mx-auto w-full max-w-4xl"
        variants={staggerContainer(0.12, 0.06)}
        initial={shouldReduceMotion ? false : 'hidden'}
        whileInView={shouldReduceMotion ? undefined : 'visible'}
        viewport={viewportOnce}
      >
        <motion.div
          variants={scaleIn}
          className="relative overflow-hidden rounded-[2rem] border border-[#f4bedc] bg-gradient-to-br from-[#ffdced] via-[#fff4fa] to-[#ffe9d2] p-8 text-center shadow-[var(--shadow-soft)] sm:p-11"
        >
          {decorativeImages[0] && (
            <motion.figure
              className="pointer-events-none absolute -left-5 top-5 hidden w-24 rotate-[-10deg] overflow-hidden rounded-2xl border border-white/85 shadow-lg sm:block md:w-28"
              animate={shouldReduceMotion ? { opacity: 1 } : { y: [0, -6, 0] }}
              transition={
                shouldReduceMotion
                  ? { duration: 0.1 }
                  : { duration: 4.2, repeat: Infinity, ease: 'easeInOut' }
              }
            >
              <img
                src={decorativeImages[0].src}
                alt={decorativeImages[0].alt}
                className="h-24 w-full object-cover md:h-28"
                loading="lazy"
              />
            </motion.figure>
          )}
          {decorativeImages[1] && (
            <motion.figure
              className="pointer-events-none absolute -right-5 bottom-5 hidden w-24 rotate-[9deg] overflow-hidden rounded-2xl border border-white/85 shadow-lg sm:block md:w-28"
              animate={shouldReduceMotion ? { opacity: 1 } : { y: [0, 7, 0] }}
              transition={
                shouldReduceMotion
                  ? { duration: 0.1 }
                  : { duration: 4.6, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }
              }
            >
              <img
                src={decorativeImages[1].src}
                alt={decorativeImages[1].alt}
                className="h-24 w-full object-cover md:h-28"
                loading="lazy"
              />
            </motion.figure>
          )}

          <motion.p variants={fadeUp} className="mb-3 text-sm font-semibold tracking-wide text-[var(--pink-strong)] uppercase">
            Book Now
          </motion.p>
          <motion.h2 variants={fadeUp} className="text-3xl leading-tight sm:text-4xl">
            Ready for your next cute set?
          </motion.h2>
          <motion.p variants={fadeUp} className="mx-auto mt-3 max-w-md text-base text-[var(--ink-700)]">
            Send your inspo and book your appointment today.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <a
              href={brandInfo.instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-[var(--pink-main)] px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[var(--pink-strong)]"
            >
              Book via Instagram
            </a>
            <a
              href={brandInfo.whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-[var(--line-soft)] bg-white px-6 py-3 text-sm font-semibold text-[var(--ink-700)] transition hover:-translate-y-0.5 hover:bg-[var(--pink-soft)]"
            >
              Chat on WhatsApp
            </a>
          </motion.div>

          <motion.p variants={fadeUp} className="mt-5 text-xs font-medium text-[var(--ink-500)]">
            Studio appointments only <span aria-hidden="true">&middot;</span> Panjer, Denpasar
            Selatan <span aria-hidden="true">&middot;</span> No home service
          </motion.p>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Cta
