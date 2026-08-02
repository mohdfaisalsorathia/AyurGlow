import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import {
  Leaf, ShieldCheck, MessageCircle, ArrowRight, ImageIcon
} from 'lucide-react'

const WHATSAPP_NUMBER = '8551057867'

const featuredItems = [
  {
    type: 'product',
    name: 'Kumkumadi Tailam',
    category: 'Face Oil',
    price: '₹1,199',
    description: 'Luxurious Ayurvedic face oil with saffron, sandalwood, and 16 potent herbs for natural glow.',
    benefits: ['Reduces dark spots', 'Anti-aging', 'Natural glow'],
    tag: 'Bestseller',
    msg: 'Hi, I am interested in Kumkumadi Tailam from Ayurglow.',
  },
  {
    type: 'service',
    name: 'Acne & Scar Treatment',
    category: 'Skin Care',
    description: 'Advanced therapies combining herbal formulations with modern dermatology for clear, smooth skin.',
    benefits: ['Clear active acne', 'Reduce scarring', 'Even skin tone'],
    tag: null,
    msg: 'Hi, I am interested in Acne & Scar Treatment at Ayurglow.',
  },
  {
    type: 'product',
    name: 'Neem & Turmeric Face Wash',
    category: 'Cleanser',
    price: '₹449',
    description: 'Gentle daily cleanser with neem, turmeric, and aloe vera that purifies while moisturizing.',
    benefits: ['Deep cleansing', 'Anti-bacterial', 'Soothes skin'],
    tag: 'Popular',
    msg: 'Hi, I am interested in Neem & Turmeric Face Wash from Ayurglow.'
  },
  {
    type: 'service',
    name: 'PRP Hair Therapy',
    category: 'Hair Restoration',
    description: 'Platelet-rich plasma combined with herbal scalp treatment for natural hair regrowth.',
    benefits: ['Stimulates regrowth', 'Strengthens follicles', 'Natural approach'],
    tag: 'Popular',
    msg: 'Hi, I am interested in PRP Hair Therapy at Ayurglow.',
  },
  {
    type: 'product',
    name: 'Bhringraj Hair Oil',
    category: 'Hair Care',
    price: '₹649',
    description: 'Traditional Bhringraj-infused oil enriched with amla for thick, healthy hair growth.',
    benefits: ['Reduces hair fall', 'Prevents greying', 'Nourishes scalp'],
    tag: null,
    msg: 'Hi, I am interested in Bhringraj Hair Oil from Ayurglow.'
  },
  {
    type: 'service',
    name: 'Ayurvedic Skin Therapy',
    category: 'Holistic Care',
    description: 'Traditional herbal formulations combined with modern dermatology for radiant, healthy skin.',
    benefits: ['Natural ingredients', 'Holistic healing', 'Lasting results'],
    tag: null,
    msg: 'Hi, I am interested in Ayurvedic Skin Therapy at Ayurglow.',
  },
]

function FeaturedCard({ item, index }) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    el.style.opacity = '0'
    el.style.transform = 'translateY(24px)'
    const observer = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        el.style.opacity = '1'
        el.style.transform = 'translateY(0)'
        observer.disconnect()
      }
    }, { threshold: 0.1 })
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(item.msg)}`

  return (
    <div
      ref={ref}
      style={{ transition: `opacity 0.5s ease ${index * 0.08}s, transform 0.5s ease ${index * 0.08}s` }}
      className="h-full"
    >
      <a
        href={waLink}
        target="_blank"
        rel="noopener noreferrer"
        className="block liquid-glass rounded-2xl p-5 sm:p-6 hover:bg-white/25 hover:border-white/40 hover:shadow-2xl hover:scale-[1.03] transition-all duration-300 group cursor-pointer active:scale-[0.98] h-full"
      >
        {/* Image Placeholder */}
        <div className="image-placeholder w-full h-40 sm:h-44 rounded-xl mb-4">
          <ImageIcon size={28} className="text-sage-200/60" strokeWidth={1.5} />
          <span className="text-sage-200/50 text-[10px] font-medium tracking-wider uppercase">Add Image</span>
        </div>

        {/* Tag + Type */}
        <div className="flex items-center gap-2 flex-wrap mb-2">
          {item.tag && (
            <span className="bg-gradient-to-r from-sage-400 to-forest-400 text-white text-[9px] font-semibold px-2.5 py-1 rounded-full tracking-wide uppercase">
              {item.tag}
            </span>
          )}
          <span
            className={`text-[9px] font-semibold tracking-[0.12em] uppercase px-2 py-0.5 rounded-full ${
              item.type === 'product'
                ? 'bg-sage-500/30 text-white'
                : 'bg-gold/30 text-white'
            }`}
          >
            {item.type === 'product' ? '🌿 Product' : '✨ Service'}
          </span>
        </div>

        {/* Content */}
        <p className="text-sage-200 text-[10px] font-semibold tracking-[0.15em] uppercase mb-1">
          {item.category}
        </p>
        <h3 className="font-display text-lg sm:text-xl font-bold text-white mb-2 group-hover:text-sage-100 transition-colors">
          {item.name}
        </h3>
        <p className="text-white/90 text-[13.5px] leading-relaxed mb-3">
          {item.description}
        </p>

        {/* Price — products only */}
        {item.price && (
          <div className="mb-3">
            <span className="text-white font-bold text-base bg-white/10 px-2.5 py-1 rounded-md">{item.price}</span>
          </div>
        )}

        {/* Benefits */}
        <div className="space-y-1.5 mb-4">
          {item.benefits.map((b, j) => (
            <div key={j} className="flex items-center gap-2">
              <ShieldCheck size={12} className="text-sage-200 flex-shrink-0" />
              <span className="text-white/90 text-[13px]">{b}</span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <span className="inline-flex items-center gap-1.5 text-sage-200 group-hover:text-white text-xs font-semibold transition-colors">
          <MessageCircle size={12} />
          {item.type === 'product' ? 'Enquire on WhatsApp' : 'Book on WhatsApp'}
        </span>
      </a>
    </div>
  )
}

export default function FeaturedProducts() {
  return (
    <section className="relative py-12 sm:py-16 overflow-hidden">
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 mb-3">
            <div className="w-8 h-[1px] bg-sage-300/50" />
            <Leaf size={14} className="text-sage-300" />
            <div className="w-8 h-[1px] bg-sage-300/50" />
          </div>
          <p className="text-sage-200 text-[10px] sm:text-[11px] font-medium tracking-[0.22em] uppercase mb-2">
            What We Offer
          </p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold text-white leading-tight mb-3 drop-shadow-lg">
            Featured Products &{' '}
            <em className="italic text-sage-200 font-normal">Services</em>
          </h2>
          <p className="text-sage-100/80 text-sm sm:text-[15px] max-w-md mx-auto leading-relaxed">
            Handcrafted formulations and holistic treatments for naturally radiant, healthy skin.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {featuredItems.map((item, i) => (
            <FeaturedCard key={item.name} item={item} index={i} />
          ))}
        </div>

        {/* See All Link */}
        <div className="text-center mt-10">
          <Link
            to="/products-services"
            className="inline-flex items-center gap-2 liquid-glass hover:bg-white/20 text-white font-medium px-6 py-3 rounded-full text-sm transition-all duration-300 shadow-lg"
          >
            View All Products & Services <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  )
}
