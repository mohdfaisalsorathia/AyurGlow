import { useEffect, useRef } from 'react'
import { Sparkles, Droplets, Zap, FlaskConical, Leaf, Wind } from 'lucide-react'

const services = [
  {
    icon: Sparkles,
    title: 'Acne & Scar Treatment',
    desc: 'Advanced therapies to clear active acne and visibly reduce scarring, restoring smooth, even skin tone.',
  },
  {
    icon: Droplets,
    title: 'Hair Loss & PRP Therapy',
    desc: 'Platelet-rich plasma treatments to stimulate natural hair regrowth and strengthen follicles from within.',
  },
  {
    icon: Zap,
    title: 'Laser Hair Removal',
    desc: 'Safe, precise laser sessions for silky-smooth skin — long-lasting results for face and body.',
  },
  {
    icon: FlaskConical,
    title: 'Chemical Peels',
    desc: 'Customised peels to brighten skin tone, reduce pigmentation, and refine texture for a luminous finish.',
  },
  {
    icon: Leaf,
    title: 'Anti-Aging Treatments',
    desc: 'From Botox to dermal fillers — personalised plans crafted to restore youthful radiance naturally.',
  },
  {
    icon: Wind,
    title: 'Dandruff Control',
    desc: 'Evidence-based scalp treatments to eliminate dandruff and improve overall scalp health long-term.',
  },
]

function ServiceCard({ icon: Icon, title, desc, index }) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    el.style.opacity = '0'
    el.style.transform = 'translateY(28px)'

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = '1'
          el.style.transform = 'translateY(0)'
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      style={{ transition: `opacity 0.55s ease ${index * 0.08}s, transform 0.55s ease ${index * 0.08}s` }}
      className="bg-white rounded-2xl p-5 sm:p-6 border border-cream-300 hover:border-gold/40 hover:shadow-md transition-shadow duration-300 group active:scale-[0.98] touch-manipulation"
    >
      {/* Icon */}
      <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-cream-200 flex items-center justify-center mb-4 sm:mb-5 group-hover:bg-gold/10 transition-colors duration-300">
        <Icon size={18} className="text-gold sm:w-[19px] sm:h-[19px]" strokeWidth={1.8} />
      </div>

      {/* Title */}
      <h3 className="font-display text-base sm:text-[17px] font-semibold text-charcoal mb-1.5 sm:mb-2">
        {title}
      </h3>

      {/* Description */}
      <p className="text-muted text-[13px] sm:text-sm leading-relaxed">{desc}</p>
    </div>
  )
}

export default function Services() {
  return (
    <section id="services" className="py-16 sm:py-24 bg-cream-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Section heading */}
        <div className="text-center mb-10 sm:mb-14">
          <p className="text-gold text-[10px] sm:text-[11px] font-medium tracking-[0.18em] sm:tracking-[0.22em] uppercase mb-2 sm:mb-3">
            What We Offer
          </p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold text-charcoal leading-tight mb-3 sm:mb-4">
            Our{' '}
            <em className="italic text-gold font-normal">Treatments</em>
          </h2>
          <p className="text-muted text-sm sm:text-[15px] max-w-sm mx-auto leading-relaxed">
            Clinically proven treatments tailored to your unique skin and hair goals.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {services.map((s, i) => (
            <ServiceCard key={s.title} {...s} index={i} />
          ))}
        </div>

      </div>
    </section>
  )
}
