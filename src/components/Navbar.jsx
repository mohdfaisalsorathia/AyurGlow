import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const NAV_LINKS = [
  { label: 'Home', id: 'top' },
  { label: 'Services', id: 'services' },
  { label: 'Contact', id: 'contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const scrollTo = (id) => {
    setMobileOpen(false)
    if (id === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
          scrolled
            ? 'bg-cream-100/95 backdrop-blur-sm shadow-sm border-b border-cream-300/60'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3.5 sm:py-4 flex items-center justify-between">
          {/* Logo */}
          <button onClick={() => scrollTo('top')} className="flex items-baseline gap-2">
            <span className="font-display text-lg sm:text-xl font-semibold text-charcoal tracking-wide">
              Ayurglow
            </span>
            <span className="text-[10px] sm:text-xs text-muted font-sans hidden sm:inline tracking-wider uppercase">
              Skin &amp; Hair Clinic
            </span>
          </button>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className="text-sm text-muted hover:text-charcoal font-medium transition-colors duration-200"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => scrollTo('contact')}
              className="bg-gold hover:bg-gold-dark text-white text-sm font-medium px-5 py-2.5 rounded-full transition-colors duration-200 shadow-sm"
            >
              Book Consultation
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 -mr-2 text-charcoal hover:text-gold transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* ── Mobile drawer overlay ── */}
      <div
        className={`fixed inset-0 z-40 bg-charcoal/30 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setMobileOpen(false)}
      />

      {/* ── Mobile drawer ── */}
      <div
        className={`fixed top-0 right-0 z-50 h-full w-72 bg-cream-50 shadow-2xl transition-transform duration-300 ease-out md:hidden ${
          mobileOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Close button */}
        <div className="flex justify-end p-4">
          <button
            onClick={() => setMobileOpen(false)}
            className="p-2 text-muted hover:text-charcoal transition-colors"
            aria-label="Close menu"
          >
            <X size={22} />
          </button>
        </div>

        {/* Drawer links */}
        <div className="flex flex-col px-6 pt-4 gap-1">
          {NAV_LINKS.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className="text-left py-3.5 text-base font-medium text-charcoal hover:text-gold border-b border-cream-200 transition-colors duration-200"
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* Drawer CTA */}
        <div className="px-6 mt-8">
          <button
            onClick={() => scrollTo('contact')}
            className="w-full bg-gold hover:bg-gold-dark text-white text-sm font-medium px-5 py-3.5 rounded-full transition-colors duration-200 shadow-sm"
          >
            Book Consultation
          </button>
        </div>

        {/* Drawer footer */}
        <div className="absolute bottom-8 left-0 right-0 px-6">
          <p className="text-xs text-muted/50 text-center">
            Ayurglow Skin &amp; Hair Clinic
          </p>
        </div>
      </div>
    </>
  )
}
