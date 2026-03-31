import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import logoWhite from '../assets/logo-white.png'

const links = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'How It Works', to: '/how-it-works' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location.pathname])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
      className={`fixed top-0 left-0 right-0 z-[100] transition-colors duration-300 ${
        scrolled
          ? 'bg-[rgba(10,10,10,0.97)] backdrop-blur-md border-b border-border-color'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1320px] mx-auto px-6 lg:px-10 flex items-center justify-between h-16 lg:h-[72px]">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5 shrink-0">
          <img src={logoWhite} alt="Accentricity" className="h-7 w-auto" />
          <span className="text-t1 font-semibold text-[15px] tracking-tight">Accentricity</span>
        </Link>

        {/* Desktop links */}
        <div className="hidden lg:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`relative text-[13px] font-medium tracking-wide transition-colors duration-200 group ${
                location.pathname === link.to ? 'text-t1' : 'text-t3 hover:text-t1'
              }`}
            >
              {link.label}
              <span
                className={`absolute -bottom-1 left-0 h-[1.5px] bg-blue transition-all duration-300 ${
                  location.pathname === link.to ? 'w-full' : 'w-0 group-hover:w-full'
                }`}
              />
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <Link
          to="/contact"
          className="hidden lg:inline-flex items-center px-5 py-2.5 bg-blue text-white text-[13px] font-semibold rounded-full hover:-translate-y-0.5 hover:shadow-[0_4px_24px_rgba(0,111,255,0.35)] transition-all duration-200"
        >
          Book a Free Call
        </Link>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden text-t1 p-1"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 top-16 bg-dark z-[99] lg:hidden"
          >
            <div className="flex flex-col items-start px-8 pt-10 gap-6">
              {links.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`text-2xl font-semibold ${
                    location.pathname === link.to ? 'text-blue' : 'text-t2'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/contact"
                className="mt-4 inline-flex items-center px-8 py-3.5 bg-blue text-white text-base font-semibold rounded-full"
              >
                Book a Free Call
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
