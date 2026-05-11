import { motion, useReducedMotion } from 'framer-motion'
import { fadeUp, scaleIn, staggerContainer, viewportOnce } from '../animations/variants'
import SectionHeading from './SectionHeading'

function About({ aboutContent }) {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section className="relative bg-transparent">
      <motion.div
        className="mx-auto grid w-full max-w-6xl gap-8 px-4 pt-20 pb-16 sm:px-6 sm:pt-24 md:grid-cols-[minmax(0,1fr)_minmax(0,0.95fr)] md:items-center lg:px-8"
        variants={staggerContainer(0.16, 0.04)}
        initial={shouldReduceMotion ? false : 'hidden'}
        whileInView={shouldReduceMotion ? undefined : 'visible'}
        viewport={viewportOnce}
      >
        <motion.div variants={fadeUp}>
          <SectionHeading
            eyebrow="About Hearteu Nails"
            title={aboutContent.title}
            description={aboutContent.text}
          />
        </motion.div>

        <motion.figure variants={scaleIn} className="relative">
          <div className="pointer-events-none absolute -inset-2 rounded-[1.5rem] bg-gradient-to-br from-[#ffd9eb]/60 to-[#ffe9d0]/55 blur-xl" />
          <div className="soft-card relative overflow-hidden">
            <img
              src={aboutContent.image}
              alt={aboutContent.imageAlt}
              className="h-64 w-full object-cover sm:h-80"
              loading="lazy"
            />
          </div>
        </motion.figure>
      </motion.div>
    </section>
  )
}

export default About
