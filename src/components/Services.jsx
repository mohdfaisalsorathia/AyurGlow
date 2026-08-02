import { useEffect, useRef } from 'react'
import { Sparkles, Droplets, Zap, FlaskConical, Leaf, Wind, MessageCircle } from 'lucide-react'

const WHATSAPP_NUMBER = '8551057867'

const services = [
  { icon: Sparkles, title: 'Acne & Scar Treatment', desc: 'Advanced therapies to clear active acne and visibly reduce scarring, restoring smooth, even skin tone.', msg: 'Hi, I am interested in Acne & Scar Treatment at Ayurglow.' },
  { icon: Droplets, title: 'Hair Loss & PRP Therapy', desc: 'Platelet-rich plasma treatments to stimulate natural hair regrowth and strengthen follicles from within.', msg: 'Hi, I am interested in Hair Loss & PRP Therapy at Ayurglow.' },
  { icon: Zap, title: 'Laser Hair Removal', desc: 'Safe, precise laser sessions for silky-smooth skin — long-lasting results for face and body.', msg: 'Hi, I am interested in Laser Hair Removal at Ayurglow.' },
  { icon: FlaskConical, title: 'Chemical Peels', desc: 'Customised peels to brighten skin tone, reduce pigmentation, and refine texture for a luminous finish.', msg: 'Hi, I am interested in Chemical Peels at Ayurglow.' },
  { icon: Leaf, title: 'Ayurvedic Skin Therapy', desc: 'Traditional herbal formulations combined with modern dermatology for naturally radiant, healthy skin.', msg: 'Hi, I am interested in Ayurvedic Skin Therapy at Ayurglow.' },
  { icon: Wind, title: 'Scalp & Hair Wellness', desc: 'Holistic scalp treatments using natural botanicals to eliminate dandruff and restore hair vitality.', msg: 'Hi, I am interested in Scalp & Hair Wellness at Ayurglow.' },
]

function ServiceCard({ icon: Icon, title, desc, msg, index }) {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    el.style.opacity = '0'
    el.style.transform = 'translateY(28px)'
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { el.style.opacity = '1'; el.style.transform = 'translateY(0)'; observer.disconnect() }
    }, { threshold: 0.1 })
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`

  return (
    <a href={waLink} target="_blank" rel="noopener noreferrer"
      ref={ref} style={{ transition: `opacity 0.55s ease ${index * 0.08}s, transform 0.55s ease ${index * 0.08}s` }}
      className="block bg-white/10 backdrop-blur-md border border-white/15 rounded-2xl p-5 sm:p-6 hover:bg-white/20 hover:border-white/30 hover:shadow-xl transition-all duration-300 group active:scale-[0.98] touch-manipulation relative overflow-hidden cursor-pointer">
      <div className="absolute -bottom-4 -right-4 opacity-[0.06] pointer-events-none"><Leaf size={80} className="text-white" /></div>
      <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-white/10 flex items-center justify-center mb-4 sm:mb-5 group-hover:bg-white/20 transition-colors duration-300">
        <Icon size={18} className="text-sage-200 sm:w-[19px] sm:h-[19px]" strokeWidth={1.8} />
      </div>
      <h3 className="font-display text-base sm:text-[17px] font-semibold text-white mb-1.5 sm:mb-2">{title}</h3>
      <p className="text-sage-200/80 text-[13px] sm:text-sm leading-relaxed mb-3">{desc}</p>
      <span className="inline-flex items-center gap-1.5 text-sage-300 group-hover:text-white text-xs font-medium transition-colors">
        <MessageCircle size={12} /> Enquire on WhatsApp
      </span>
    </a>
  )
}

export default function Services() {
  return (
    <section id="services" className="relative py-16 sm:py-24 overflow-hidden">
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 mb-3">
            <div className="w-8 h-[1px] bg-sage-300/50" /><Leaf size={14} className="text-sage-300" /><div className="w-8 h-[1px] bg-sage-300/50" />
          </div>
          <p className="text-sage-200 text-[10px] sm:text-[11px] font-medium tracking-[0.18em] sm:tracking-[0.22em] uppercase mb-2 sm:mb-3">What We Offer</p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold text-white leading-tight mb-3 sm:mb-4 drop-shadow-lg">
            Our <em className="italic text-sage-200 font-normal">Treatments</em>
          </h2>
          <p className="text-sage-200/70 text-sm sm:text-[15px] max-w-sm mx-auto leading-relaxed">Nature-inspired treatments clinically proven and tailored to your unique skin and hair goals.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {services.map((s, i) => (<ServiceCard key={s.title} {...s} index={i} />))}
        </div>
      </div>
    </section>
  )
}
