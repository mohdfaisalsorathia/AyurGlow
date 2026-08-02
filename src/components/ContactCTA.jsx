import { MessageCircle, Leaf } from 'lucide-react'

const WHATSAPP_NUMBER = '8551057867'
const WHATSAPP_MSG = encodeURIComponent('Hi, I would like to book a consultation at Ayurglow Skin & Hair Clinic.')

export default function ContactCTA() {
  return (
    <section id="contact" className="relative py-20 sm:py-28 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 sm:w-96 h-64 sm:h-96 rounded-full bg-white/5 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-40 sm:w-64 h-40 sm:h-64 rounded-full bg-white/5 translate-x-1/3 translate-y-1/3 pointer-events-none" />
      <div className="absolute top-1/4 left-8 animate-leaf-sway pointer-events-none opacity-20"><Leaf size={40} className="text-sage-200" /></div>
      <div className="absolute bottom-1/3 right-12 animate-float pointer-events-none opacity-15 rotate-90"><Leaf size={28} className="text-sage-300" /></div>

      <div className="relative z-10 max-w-2xl mx-auto px-4 sm:px-6 text-center">
        {/* Glass card container */}
        <div className="bg-white/10 backdrop-blur-md border border-white/15 rounded-3xl p-8 sm:p-12 shadow-2xl">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-6 h-[1px] bg-sage-300/50" /><Leaf size={14} className="text-sage-300" /><div className="w-6 h-[1px] bg-sage-300/50" />
          </div>
          <p className="text-sage-200 text-[10px] sm:text-[11px] font-medium tracking-[0.18em] sm:tracking-[0.22em] uppercase mb-4 sm:mb-5">Get In Touch</p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold text-white leading-[1.2] mb-4 sm:mb-5 drop-shadow-lg">
            Ready to Begin Your <br className="hidden sm:block" />
            <em className="italic text-sage-200 font-normal">Healing Journey?</em>
          </h2>
          <p className="text-sage-200/80 text-sm sm:text-[15px] leading-relaxed mb-8 sm:mb-10 max-w-md mx-auto">
            Reach us directly on WhatsApp — no forms, no waiting. Dr. Wanjara's team typically responds within a few hours.
          </p>
          <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 sm:gap-3 bg-[#25D366] hover:bg-[#1fbd5a] text-white font-medium px-6 sm:px-8 py-3.5 sm:py-4 rounded-full text-sm sm:text-[15px] transition-colors duration-200 shadow-lg hover:shadow-xl w-full sm:w-auto active:scale-[0.97] touch-manipulation">
            <MessageCircle size={18} className="sm:w-5 sm:h-5" />
            Chat with Us on WhatsApp
          </a>
          <p className="mt-5 sm:mt-6 text-[10px] sm:text-xs text-sage-300/60 tracking-wide">
            Available Monday – Saturday &nbsp;·&nbsp; 10 AM – 7 PM
          </p>
        </div>
      </div>
    </section>
  )
}
