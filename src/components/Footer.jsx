import { Leaf } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="nature-gradient py-8 sm:py-10 relative overflow-hidden">
      {/* Leaf decorations */}
      <div className="absolute top-4 left-8 opacity-10 pointer-events-none"><Leaf size={40} className="text-sage-200 rotate-45" /></div>
      <div className="absolute bottom-4 right-12 opacity-10 pointer-events-none"><Leaf size={32} className="text-sage-200 -rotate-12" /></div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-3">
          {/* Brand */}
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="w-7 h-7 rounded-full bg-white/15 flex items-center justify-center">
              <Leaf size={14} className="text-sage-200" />
            </div>
            <div className="flex items-baseline gap-1.5">
              <span className="font-display text-white font-semibold text-base sm:text-lg">Ayurglow</span>
              <span className="text-white/40 text-[10px] sm:text-xs tracking-wider uppercase">Skin &amp; Hair Clinic</span>
            </div>
          </Link>

          {/* Quick links */}
          <div className="flex items-center gap-5">
            <Link to="/" className="text-white/50 hover:text-white/80 text-xs transition-colors">Home</Link>
            <Link to="/products-services" className="text-white/50 hover:text-white/80 text-xs transition-colors">Products & Services</Link>
          </div>

          {/* Copyright */}
          <p className="text-white/40 text-[10px] sm:text-xs text-center sm:text-right">
            &copy; {new Date().getFullYear()} Ayurglow. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
