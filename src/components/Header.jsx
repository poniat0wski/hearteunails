import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { fadeUp } from '../animations/variants'
import Logo from './Logo'

function Header({ brandName, navLinks }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const shouldReduceMotion = useReducedMotion()

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 16)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  const closeMenu = () => {
    setMenuOpen(false)
  }

  return (
    <header
      className={`sticky top-0 z-50 border-b border-[var(--line-soft)] transition ${
        isScrolled
          ? 'bg-[rgba(255,247,251,0.84)] shadow-[0_10px_24px_-22px_rgba(126,47,92,0.7)] backdrop-blur-xl'
          : 'bg-[rgba(255,247,251,0.65)] backdrop-blur-md'
      }`}
    >
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <a
          href="#top"
          className="inline-flex items-center rounded-full bg-white/55 px-2 py-1 text-lg font-semibold text-[var(--ink-900)] transition hover:opacity-90"
          aria-label={brandName}
        >
          <Logo className="h-10 sm:h-11 md:h-12 drop-shadow-[0_8px_14px_rgba(164,76,128,0.22)]" />
          <span className="sr-only">{brandName}</span>
        </a>

        <button
          type="button"
          onClick={() => setMenuOpen((prev) => !prev)}
          className="inline-flex h-10 items-center justify-center rounded-full border border-[var(--line-soft)] bg-white/70 px-4 text-xs font-semibold tracking-wide text-[var(--ink-900)] uppercase md:hidden"
          aria-label="Toggle menu"
          aria-controls="mobile-menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? 'Close' : 'Menu'}
        </button>

        <nav aria-label="Main navigation" className="hidden md:block">
          <ul className="flex items-center gap-2 text-sm font-medium text-[var(--ink-700)] lg:gap-3">
            {navLinks.map((link) => (
              <motion.li key={link.label} variants={fadeUp} initial="hidden" animate="visible">
                <a
                  href={link.href}
                  className={
                    link.isBook
                      ? 'inline-flex rounded-full bg-[var(--pink-main)] px-4 py-2 text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-[var(--pink-strong)]'
                      : 'inline-flex rounded-full px-4 py-2 transition hover:bg-[var(--pink-soft)]'
                  }
                >
                  {link.label}
                </a>
              </motion.li>
            ))}
          </ul>
        </nav>
      </div>

      <AnimatePresence initial={false}>
        {menuOpen ? (
          <motion.nav
            id="mobile-menu"
            aria-label="Mobile navigation"
            className="md:hidden"
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, height: 0 }}
            animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, height: 'auto' }}
            exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, height: 0 }}
            transition={shouldReduceMotion ? { duration: 0.12 } : { duration: 0.25 }}
          >
            <ul className="space-y-2 border-t border-[var(--line-soft)] bg-[rgba(255,253,255,0.98)] px-4 py-4 sm:px-6">
              {navLinks.map((link, index) => (
                <motion.li
                  key={link.label}
                  initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 12 }}
                  animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
                  transition={shouldReduceMotion ? { duration: 0.08 } : { delay: index * 0.04 }}
                >
                  <a
                    href={link.href}
                    onClick={closeMenu}
                    className={
                      link.isBook
                        ? 'inline-flex w-full items-center justify-center rounded-full bg-[var(--pink-main)] px-4 py-3 text-sm font-semibold text-white'
                        : 'inline-flex w-full rounded-xl bg-white px-4 py-3 text-sm font-medium text-[var(--ink-700)]'
                    }
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.nav>
        ) : null}
      </AnimatePresence>
    </header>
  )
}

export default Header
