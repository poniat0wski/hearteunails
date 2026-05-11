import { motion, useReducedMotion } from 'framer-motion'
import {
  fadeUp,
  scaleIn,
  staggerContainer,
  viewportOnce,
} from '../animations/variants'
import SectionHeading from './SectionHeading'

function GalleryMoodboard({ title, subtitle, galleryItems }) {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section id="looks" className="relative bg-transparent">
      <div className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewportOnce}>
          <SectionHeading
            eyebrow="Looks Gallery"
            title={title}
            description={subtitle}
            className="mb-7 max-w-2xl"
          />
        </motion.div>

        <motion.div
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-12 md:auto-rows-[11rem]"
          variants={staggerContainer(0.09, 0.05)}
          initial={shouldReduceMotion ? false : 'hidden'}
          whileInView={shouldReduceMotion ? undefined : 'visible'}
          viewport={viewportOnce}
        >
          {galleryItems.map((item, index) => {
            return (
              <motion.article
                key={`${item.src}-${index}`}
                variants={scaleIn}
                className={`soft-card group relative overflow-hidden rounded-[1.6rem] bg-white/70 shadow-[0_18px_36px_-26px_rgba(129,43,95,0.5)] ${item.className ?? 'md:col-span-4 md:row-span-1'} aspect-[4/5] md:aspect-auto md:h-full`}
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  className="h-full w-full object-cover transition duration-500 md:group-hover:scale-[1.03]"
                  loading="lazy"
                />
              </motion.article>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default GalleryMoodboard
