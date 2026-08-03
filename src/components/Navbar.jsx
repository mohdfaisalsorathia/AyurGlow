import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Leaf } from 'lucide-react'

const WHATSAPP_NUMBER = '8551057867'
const WHATSAPP_MSG = encodeURIComponent('Hi, I would like to book a consultation at Ayurglow Skin & Hair Clinic.')

const NAV_LINKS = [
  { label: 'Home', path: '/' },
  { label: 'Products & Services', path: '/products-services' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 bg-forest-900/80 backdrop-blur-xl shadow-lg border-b border-sage-600/20"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 sm:py-3.5 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2.5 sm:gap-3 group">
            <img src="/images/LOGO.png" alt="Ayurglow Logo" className="h-9 sm:h-11 w-auto object-contain rounded-lg" />
            <span className="font-display text-lg sm:text-xl font-semibold text-white tracking-wider uppercase drop-shadow-sm">Ayurglow</span>
          </Link>

          <div className="hidden md:flex items-center gap-7">
            {NAV_LINKS.map((link) => (
              <Link key={link.path} to={link.path}
                className={`text-sm font-medium transition-colors duration-200 ${
                  location.pathname === link.path ? 'text-sage-300' : 'text-sage-100/80 hover:text-white'
                }`}>
                {link.label}
              </Link>
            ))}
            <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`} target="_blank" rel="noopener noreferrer"
              className="bg-gradient-to-r from-sage-500 to-forest-500 hover:from-sage-400 hover:to-forest-400 text-white text-sm font-medium px-5 py-2.5 rounded-full transition-all duration-300 shadow-md hover:shadow-lg">
              Book Consultation
            </a>
          </div>

          <button onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 -mr-2 text-white hover:text-sage-300 transition-colors" aria-label="Toggle menu">
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      <div className={`fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
        mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`} onClick={() => setMobileOpen(false)} />

      {/* Mobile drawer — dark glass */}
      <div className={`fixed top-0 right-0 z-50 h-full w-72 bg-forest-900/95 backdrop-blur-xl shadow-2xl transition-transform duration-300 ease-out md:hidden ${
        mobileOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="flex justify-end p-4">
          <button onClick={() => setMobileOpen(false)} className="p-2 text-sage-300 hover:text-white transition-colors" aria-label="Close menu">
            <X size={22} />
          </button>
        </div>
        <div className="flex flex-col px-6 pt-4 gap-1">
          {NAV_LINKS.map((link) => (
            <Link key={link.path} to={link.path} onClick={() => setMobileOpen(false)}
              className={`text-left py-3.5 text-base font-medium border-b border-sage-700/30 transition-colors duration-200 ${
                location.pathname === link.path ? 'text-sage-300' : 'text-white hover:text-sage-300'
              }`}>
              {link.label}
            </Link>
          ))}
        </div>
        <div className="px-6 mt-8">
          <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`} target="_blank" rel="noopener noreferrer"
            className="block w-full text-center bg-gradient-to-r from-sage-500 to-forest-500 hover:from-sage-400 hover:to-forest-400 text-white text-sm font-medium px-5 py-3.5 rounded-full transition-all duration-300 shadow-md">
            Book Consultation
          </a>
        </div>
        <div className="absolute bottom-8 left-0 right-0 px-6 text-center">
          <Leaf size={16} className="text-sage-400 mx-auto mb-2" />
          <p className="text-xs text-sage-300/50">Ayurglow Skin &amp; Hair Clinic</p>
        </div>
      </div>
    </>
  )
}
