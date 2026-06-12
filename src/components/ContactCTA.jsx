import { MessageCircle } from 'lucide-react'

const WHATSAPP_NUMBER = '8551057867' // ← Replace with real number
const WHATSAPP_MSG = encodeURIComponent(
  'Hi, I would like to book a consultation at Ayurglow Skin & Hair Clinic.'
)

export default function ContactCTA() {
  return (
    <section id="contact" className="py-20 sm:py-28 bg-cream-100 relative overflow-hidden">
      {/* Soft decorative circles */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 sm:w-96 h-64 sm:h-96 rounded-full bg-gold/5 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-40 sm:w-64 h-40 sm:h-64 rounded-full bg-cream-300/60 translate-x-1/3 translate-y-1/3 pointer-events-none" />

      <div className="relative max-w-2xl mx-auto px-4 sm:px-6 text-center">
        {/* Eyebrow */}
        <p className="text-gold text-[10px] sm:text-[11px] font-medium tracking-[0.18em] sm:tracking-[0.22em] uppercase mb-4 sm:mb-5">
          Get In Touch
        </p>

        {/* Headline */}
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold text-charcoal leading-[1.2] mb-4 sm:mb-5">
          Ready to Begin Your{' '}
          <br className="hidden sm:block" />
          <em className="italic text-gold font-normal">Skin Journey?</em>
        </h2>

        {/* Subtext */}
        <p className="text-muted text-sm sm:text-[15px] leading-relaxed mb-8 sm:mb-10 max-w-md mx-auto">
          Reach us directly on WhatsApp — no forms, no waiting.
          Dr. Sharma's team typically responds within a few hours.
        </p>

        {/* WhatsApp button */}
        <a
          href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2.5 sm:gap-3 bg-[#25D366] hover:bg-[#1fbd5a] text-white font-medium px-6 sm:px-8 py-3.5 sm:py-4 rounded-full text-sm sm:text-[15px] transition-colors duration-200 shadow-md hover:shadow-lg w-full sm:w-auto active:scale-[0.97] touch-manipulation"
        >
          <MessageCircle size={18} className="sm:w-5 sm:h-5" />
          Chat with Us on WhatsApp
        </a>

        {/* Hours note */}
        <p className="mt-5 sm:mt-6 text-[10px] sm:text-xs text-muted/60 tracking-wide">
          Available Monday – Saturday &nbsp;·&nbsp; 10 AM – 7 PM
        </p>
      </div>
    </section>
  )
}
