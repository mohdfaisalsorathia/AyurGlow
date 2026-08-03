import { Link } from 'react-router-dom'
import { MessageCircle, ArrowRight, Leaf, Sparkles } from 'lucide-react'

const WHATSAPP_NUMBER = '8551057867'
const WHATSAPP_MSG = encodeURIComponent('Hi, I would like to book a consultation at Ayurglow Skin & Hair Clinic.')

export default function Hero() {
  return (
    <section className="relative min-h-screen pt-20 sm:pt-24 pb-16 sm:pb-20 flex items-center overflow-hidden">
      {/* Floating botanical decorations */}
      <div className="absolute top-20 right-10 w-32 h-32 sm:w-48 sm:h-48 opacity-15 animate-float-slow pointer-events-none">
        <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="100" cy="100" r="80" stroke="#B8D1B8" strokeWidth="1" strokeDasharray="4 8" />
          <circle cx="100" cy="100" r="60" stroke="#DCE8DC" strokeWidth="0.5" strokeDasharray="2 6" />
        </svg>
      </div>
      <div className="absolute top-1/3 left-4 animate-leaf-sway pointer-events-none">
        <Leaf size={28} className="text-sage-200 opacity-30" />
      </div>
      <div className="absolute bottom-1/4 right-16 animate-float-slower pointer-events-none">
        <Sparkles size={20} className="text-gold-light opacity-30" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 w-full">
        {/* Premium Wide liquid-glass Card containing Info and Image */}
        <div className="liquid-glass rounded-3xl border border-white/20 shadow-2xl overflow-hidden p-5 sm:p-8 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column (Info) */}
            <div className="lg:col-span-7 text-center lg:text-left order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-3 py-1.5 mb-5 sm:mb-7">
                <Leaf size={12} className="text-sage-200" />
                <p className="text-sage-100 text-[10px] sm:text-[11px] font-medium tracking-[0.14em] uppercase">
                  BAMS · MD Dermatology · Ayurvedic Expert
                </p>
              </div>

              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-white leading-[1.1] mb-1 drop-shadow-lg">
                Dr. Sana 
              </h1>
              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold italic leading-[1.1] mb-4 sm:mb-6 text-sage-200 drop-shadow-lg">
                Wanjara
              </h1>

              <span className="block h-[2px] w-12 bg-gradient-to-r from-sage-300 to-gold-light rounded-full mb-5 mx-auto lg:mx-0" />

              <p className="text-white/95 text-sm sm:text-[15px] leading-relaxed mb-7 sm:mb-9 max-w-sm sm:max-w-md mx-auto lg:mx-0" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.5)' }}>
                A board-certified dermatologist who harmonises modern science with
                ancient Ayurvedic wisdom. Dedicated to helping you achieve naturally
                radiant, healthy skin through holistic treatments rooted in nature.
              </p>

              <div className="flex flex-col sm:flex-row items-center lg:items-start sm:items-center gap-3 sm:gap-4 justify-center lg:justify-start">
                <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 bg-white/15 backdrop-blur-sm border border-white/25 hover:bg-white/25 text-white px-6 py-3 sm:py-3.5 rounded-full font-medium transition-all duration-300 text-sm shadow-lg w-full sm:w-auto justify-center">
                  <MessageCircle size={16} />
                  Chat on WhatsApp
                </a>
                <Link to="/products-services"
                  className="inline-flex items-center gap-2.5 bg-white/15 backdrop-blur-sm border border-white/25 hover:bg-white/25 text-white px-6 py-3 sm:py-3.5 rounded-full font-medium transition-all duration-300 text-sm shadow-lg w-full sm:w-auto justify-center">
                  View Products & Services
                  <ArrowRight size={15} />
                </Link>
              </div>
            </div>
            
            {/* Right Column (Logo) */}
            <div className="lg:col-span-5 flex justify-center order-1 lg:order-2">
              <div className="relative w-full max-w-[280px] sm:max-w-[320px]">
                {/* Visual Depth Card background */}
                <div className="absolute inset-0 rounded-3xl bg-white/10 backdrop-blur-[2px] translate-x-2.5 translate-y-2.5 sm:translate-x-3 sm:translate-y-3" />
                
                <div className="relative rounded-3xl border border-white/20 overflow-hidden shadow-2xl aspect-square w-full bg-forest-950/40 flex items-center justify-center p-3 sm:p-4">
                  <img src="/images/LOGO.png" alt="Ayurglow Logo"
                    className="w-full h-full object-contain rounded-2xl" />
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
