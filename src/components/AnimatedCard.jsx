import { motion, useReducedMotion } from 'framer-motion'
import { scaleIn, viewportOnce } from '../animations/variants'

function AnimatedCard({
  as = 'article',
  className = '',
  children,
  variants = scaleIn,
  index = 0,
}) {
  const shouldReduceMotion = useReducedMotion()
  const MotionTag = motion[as] || motion.article

  return (
    <MotionTag
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      transition={shouldReduceMotion ? { duration: 0.15 } : { delay: index * 0.04 }}
    >
      {children}
    </MotionTag>
  )
}

export default AnimatedCard
