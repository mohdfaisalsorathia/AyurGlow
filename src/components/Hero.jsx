import { MessageCircle, ChevronDown } from 'lucide-react'

const WHATSAPP_NUMBER = '8551057867' // ← Replace with real number
const WHATSAPP_MSG = encodeURIComponent(
  'Hi, I would like to book a consultation at Ayurglow Skin & Hair Clinic.'
)

export default function Hero() {
  const scrollToServices = () => {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="min-h-screen bg-cream-100 pt-20 sm:pt-24 pb-16 sm:pb-20 flex items-center">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-14 lg:gap-8 items-center">

          {/* ── Left: Text ── */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            {/* Credentials tag */}
            <p className="text-gold text-[10px] sm:text-[11px] font-medium tracking-[0.18em] sm:tracking-[0.22em] uppercase mb-5 sm:mb-7">
              MBBS &middot; MD Dermatology &middot; 2+ Years Experience
            </p>

            {/* Name */}
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-charcoal leading-[1.1] mb-1">
              Dr. Sana 
            </h1>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold italic text-gold leading-[1.1] mb-4 sm:mb-6">
              Wanjara
            </h1>

            {/* Rose divider */}
            <span className="rose-divider mx-auto lg:mx-0" />

            {/* Bio */}
            <p className="text-muted text-sm sm:text-[15px] leading-relaxed mb-7 sm:mb-9 max-w-sm sm:max-w-md mx-auto lg:mx-0">
              A board-certified dermatologist dedicated to helping you achieve healthy,
              glowing skin and confident hair. With over a decade of expertise, Dr. Sana
              blends clinical precision with a deeply personalised approach to care.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center lg:items-start sm:items-center gap-3 sm:gap-4 justify-center lg:justify-start">
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 bg-gold hover:bg-gold-dark text-white px-6 py-3 sm:py-3.5 rounded-full font-medium transition-colors duration-200 text-sm shadow-sm w-full sm:w-auto justify-center"
              >
                <MessageCircle size={16} />
                Chat on WhatsApp
              </a>
              <button
                onClick={scrollToServices}
                className="inline-flex items-center gap-1.5 text-charcoal hover:text-gold text-sm font-medium transition-colors duration-200"
              >
                View Our Services
                <ChevronDown size={15} />
              </button>
            </div>
          </div>

          {/* ── Right: Doctor Photo ── */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative">
              {/* Shadow card behind */}
              <div className="absolute inset-0 rounded-3xl bg-gold/10 translate-x-3 translate-y-3 sm:translate-x-5 sm:translate-y-5" />

              {/* Main photo frame */}
              <div className="relative w-56 h-72 sm:w-72 sm:h-[400px] md:w-80 md:h-[460px] rounded-3xl border border-gold/20 overflow-hidden">
                <img
                  src="/images/doctor.png"
                  alt="Dr. Sana Wanjara — Dermatologist at Ayurglow Skin & Hair Clinic"
                  className="w-full h-full object-cover object-top"
                />
              </div>

              {/* Floating tag top-right */}
              <div className="absolute -top-2 -right-2 sm:-top-3 sm:-right-4 bg-gold text-white rounded-lg sm:rounded-xl px-2.5 py-1 sm:px-3 sm:py-1.5 text-[9px] sm:text-[11px] font-medium shadow-md">
                Board Certified
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
