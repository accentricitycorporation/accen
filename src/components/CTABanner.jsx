import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import ScrollReveal from './ScrollReveal'

export default function CTABanner({
  eyebrow = "LET'S BUILD SOMETHING",
  headlineLine1 = "Ready to scale",
  headlineLine2 = "your business?",
  subline = "Book a free call. We'll map out exactly what your business needs.",
  showSecondary = false,
  secondaryLabel = "See Our Services",
  secondaryTo = "/services",
}) {
  return (
    <section className="relative bg-blue overflow-hidden py-20 md:py-28">
      {/* Morphing glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[600px] bg-white/10 rounded-full blur-[120px] cta-glow-morph" />
      </div>

      <div className="relative z-10 max-w-[1320px] mx-auto px-6 lg:px-20 text-center">
        <ScrollReveal>
          <p className="text-white/70 text-xs font-semibold tracking-[0.2em] uppercase mb-5">
            {eyebrow}
          </p>
          <h2 className="text-white text-4xl md:text-5xl lg:text-[56px] font-extrabold leading-[1.1] mb-5">
            {headlineLine1}
            <br />
            {headlineLine2}
          </h2>
          <p className="text-white/80 text-sm md:text-base max-w-lg mx-auto mb-8">
            {subline}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }}>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-3.5 bg-dark text-white text-sm font-semibold rounded-full hover:shadow-[0_4px_24px_rgba(0,0,0,0.4)] transition-all duration-200"
              >
                Book a Free Call →
              </Link>
            </motion.div>
            {showSecondary && (
              <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }}>
                <Link
                  to={secondaryTo}
                  className="inline-flex items-center px-8 py-3.5 bg-white text-dark text-sm font-semibold rounded-full hover:shadow-lg transition-all duration-200"
                >
                  {secondaryLabel}
                </Link>
              </motion.div>
            )}
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
