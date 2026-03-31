import { Link } from 'react-router-dom'
import logoWhite from '../assets/logo-white.png'

const footerLinks = [
  { label: 'Services', to: '/services' },
  { label: 'How It Works', to: '/how-it-works' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
]

export default function Footer() {
  return (
    <footer className="bg-dark2 border-t border-[#222]">
      <div className="max-w-[1320px] mx-auto px-6 lg:px-20 py-9 lg:py-[52px] flex flex-col lg:flex-row items-center justify-between gap-6">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5 shrink-0">
          <img src={logoWhite} alt="Accentricity" className="h-6 w-auto" />
          <span className="text-t1 font-semibold text-sm tracking-tight">Accentricity</span>
        </Link>

        {/* Links */}
        <div className="flex items-center gap-6 lg:gap-8">
          {footerLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="text-t3 text-xs lg:text-[13px] font-medium hover:text-t2 transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Copyright */}
        <p className="text-t4 text-xs lg:text-[13px]">
          © 2025 Accentricity Corporation. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
