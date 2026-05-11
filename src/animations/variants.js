const easeOutExpo = [0.22, 1, 0.36, 1]

export const fadeUp = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.62,
      ease: easeOutExpo,
    },
  },
}

export const scaleIn = {
  hidden: {
    opacity: 0,
    scale: 0.96,
    y: 20,
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.58,
      ease: easeOutExpo,
    },
  },
}

export const softReveal = {
  hidden: {
    opacity: 0,
    filter: 'blur(10px)',
    y: 18,
  },
  visible: {
    opacity: 1,
    filter: 'blur(0px)',
    y: 0,
    transition: {
      duration: 0.72,
      ease: easeOutExpo,
    },
  },
}

export const staggerContainer = (staggerChildren = 0.12, delayChildren = 0) => ({
  hidden: {},
  visible: {
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
})

export const springSoft = {
  type: 'spring',
  stiffness: 110,
  damping: 24,
  mass: 0.78,
}

export const viewportOnce = {
  once: true,
  amount: 0.24,
}
