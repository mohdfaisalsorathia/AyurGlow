import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import {
  Leaf, Sparkles, ShieldCheck, Star, ArrowRight, MessageCircle,
  ImageIcon, Flower2
} from 'lucide-react'

const WHATSAPP_NUMBER = '8551057867'
const WHATSAPP_MSG = encodeURIComponent('Hi, I would like to know more about Ayurglow products and services.')

/* ─── Data ──────────────────────────────────────────────── */
const products = [
  {
    name: 'Kumkumadi Tailam',
    category: 'Face Oil',
    price: '₹1,199',
    description: 'A luxurious Ayurvedic face oil with saffron, sandalwood, and 16 potent herbs. Brightens skin, reduces pigmentation, and restores natural glow.',
    benefits: ['Reduces dark spots', 'Anti-aging properties', 'Natural glow booster'],
    tag: 'Bestseller',
    msg: 'Hi, I am interested in Kumkumadi Tailam from Ayurglow.',
  },
  {
    name: 'Neem & Turmeric Face Wash',
    category: 'Cleanser',
    price: '₹449',
    description: 'Gentle daily cleanser infused with neem, turmeric, and aloe vera. Purifies pores while maintaining the skin\'s natural moisture balance.',
    benefits: ['Deep cleansing', 'Anti-bacterial', 'Soothes irritation'],
    tag: 'Popular',
    msg: 'Hi, I am interested in Neem & Turmeric Face Wash from Ayurglow.',
  },
  {
    name: 'Bhringraj Hair Oil',
    category: 'Hair Care',
    price: '₹649',
    description: 'Traditional Bhringraj-infused oil enriched with amla and coconut. Strengthens roots, prevents premature greying, and promotes thick hair growth.',
    benefits: ['Reduces hair fall', 'Prevents greying', 'Nourishes scalp'],
    tag: null,
    msg: 'Hi, I am interested in Bhringraj Hair Oil from Ayurglow.',
  },
  {
    name: 'Aloe & Saffron Sunscreen',
    category: 'Sun Protection',
    price: '₹699',
    description: 'Lightweight, non-greasy SPF 50 sunscreen blended with aloe vera and saffron extracts. Protects while nourishing your skin naturally.',
    benefits: ['SPF 50 protection', 'Non-greasy formula', 'Herbal ingredients'],
    tag: 'New',
    msg: 'Hi, I am interested in Aloe & Saffron Sunscreen from Ayurglow.',
  },
  {
    name: 'Rose & Sandalwood Toner',
    category: 'Toner',
    price: '₹549',
    description: 'Alcohol-free floral toner with rose water and sandalwood. Balances skin pH, minimizes pores, and leaves a refreshing, dewy finish.',
    benefits: ['pH balancing', 'Pore minimizing', 'Hydrating mist'],
    tag: null,
    msg: 'Hi, I am interested in Rose & Sandalwood Toner from Ayurglow.',
  },
  {
    name: 'Ashwagandha Night Cream',
    category: 'Moisturizer',
    price: '₹899',
    description: 'Rich overnight repair cream with ashwagandha, manjistha, and shea butter. Deeply hydrates and repairs skin while you sleep.',
    benefits: ['Deep hydration', 'Overnight repair', 'Anti-stress formula'],
    tag: 'Popular',
    msg: 'Hi, I am interested in Ashwagandha Night Cream from Ayurglow.',
  },
]

const services = [
  { name: 'Customized Facial Treatments', price: 'From ₹1,500', duration: '60 min', description: 'Personalized facial using Ayurvedic herbs tailored to your skin type.', msg: 'Hi, I am interested in Customized Facial Treatments at Ayurglow.' },
  { name: 'Acne & Scar Therapy', price: 'From ₹2,000', duration: '45 min', description: 'Advanced treatments combining herbal formulations with modern dermatology.', msg: 'Hi, I am interested in Acne & Scar Therapy at Ayurglow.' },
  { name: 'Pigmentation Correction', price: 'From ₹2,500', duration: '50 min', description: 'Natural brightening treatments with kumkumadi and vitamin C serums.', msg: 'Hi, I am interested in Pigmentation Correction at Ayurglow.' },
  { name: 'Anti-Aging Rejuvenation', price: 'From ₹3,000', duration: '75 min', description: 'Holistic anti-aging with gold bhasma, saffron, and collagen boosters.', msg: 'Hi, I am interested in Anti-Aging Rejuvenation at Ayurglow.' },
  { name: 'PRP Hair Therapy', price: 'From ₹4,000', duration: '60 min', description: 'Platelet-rich plasma combined with herbal scalp treatment for regrowth.', msg: 'Hi, I am interested in PRP Hair Therapy at Ayurglow.' },
  { name: 'Scalp Detox Treatment', price: 'From ₹1,800', duration: '45 min', description: 'Deep cleansing scalp therapy with neem, tea tree, and bhringraj oils.', msg: 'Hi, I am interested in Scalp Detox Treatment at Ayurglow.' },
  { name: 'Hair Spa & Conditioning', price: 'From ₹1,200', duration: '50 min', description: 'Luxurious hair spa with Ayurvedic oils and herbal steam therapy.', msg: 'Hi, I am interested in Hair Spa & Conditioning at Ayurglow.' },
  { name: 'Dandruff Cure Program', price: 'From ₹1,500', duration: '40 min', description: 'Multi-session program using medicated herbal solutions for lasting relief.', msg: 'Hi, I am interested in Dandruff Cure Program at Ayurglow.' },
  { name: 'Chemical Peels', price: 'From ₹2,500', duration: '30 min', description: 'Medical-grade peels customized with herbal aftercare for optimal results.', msg: 'Hi, I am interested in Chemical Peels at Ayurglow.' },
  { name: 'Laser Hair Removal', price: 'From ₹3,000', duration: '30-60 min', description: 'Advanced laser technology for permanent reduction with herbal soothing.', msg: 'Hi, I am interested in Laser Hair Removal at Ayurglow.' },
  { name: 'Panchakarma Skin Detox', price: 'From ₹5,000', duration: '90 min', description: 'Traditional Panchakarma-inspired full-body detox for radiant skin.', msg: 'Hi, I am interested in Panchakarma Skin Detox at Ayurglow.' },
  { name: 'Herbal Body Wrap', price: 'From ₹2,000', duration: '60 min', description: 'Full body wrap with turmeric, neem, and sandalwood for skin nourishment.', msg: 'Hi, I am interested in Herbal Body Wrap at Ayurglow.' },
]

const testimonials = [
  { name: 'Priya M.', text: 'The Kumkumadi oil transformed my skin in just 3 weeks. My dark spots have visibly faded!', rating: 5 },
  { name: 'Rahul S.', text: 'PRP therapy combined with Bhringraj oil has given me incredible hair regrowth results.', rating: 5 },
  { name: 'Ananya K.', text: 'Love the natural approach here. The Panchakarma detox left my skin absolutely glowing.', rating: 5 },
]

/* ─── Animated Card Wrapper ──────────────────────────────── */
function AnimatedCard({ children, index, className = '' }) {
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

  return (
    <div
      ref={ref}
      style={{ transition: `opacity 0.5s ease ${(index || 0) * 0.06}s, transform 0.5s ease ${(index || 0) * 0.06}s` }}
      className={className}
    >
      {children}
    </div>
  )
}

/* ─── Main Page ────────────────────────────────────────── */
export default function ProductsServices() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <div className="min-h-screen relative">
      {/* ── Full-page nature background ── */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <img src="/images/uniform-sage-nature-bg.png" alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-forest-950/15 via-transparent to-sage-950/20" />
      </div>

      {/* ── Page Content ── */}
      <div className="relative z-10">
        {/* Back link */}
        <div className="pt-24 sm:pt-28 pb-2 max-w-6xl mx-auto px-4 sm:px-6">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sage-300 hover:text-white text-sm font-medium transition-colors"
          >
            <ArrowRight size={14} className="rotate-180" /> Back to Home
          </Link>
        </div>

        {/* ── Products Section ── */}
        <section className="py-8 sm:py-12">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-8 sm:mb-10">
              <div className="inline-flex items-center gap-2 mb-3">
                <div className="w-8 h-[1px] bg-sage-300/50" />
                <Leaf size={14} className="text-sage-300" />
                <div className="w-8 h-[1px] bg-sage-300/50" />
              </div>
              <p className="text-sage-200 text-[10px] sm:text-[11px] font-medium tracking-[0.22em] uppercase mb-2">
                Our Products
              </p>
              <h2 className="font-display text-3xl sm:text-4xl font-semibold text-white leading-tight mb-2 drop-shadow-lg">
                Ayurvedic{' '}
                <em className="italic text-sage-200 font-normal">Essentials</em>
              </h2>
              <p className="text-sage-100/80 text-sm max-w-md mx-auto leading-relaxed">
                Handcrafted formulations using pure, ethically-sourced herbs and botanicals.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
              {products.map((product, i) => (
                <AnimatedCard key={product.name} index={i}>
                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(product.msg)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block liquid-glass rounded-2xl p-5 sm:p-6 hover:bg-white/25 hover:border-white/40 hover:shadow-2xl hover:scale-[1.03] transition-all duration-300 group cursor-pointer active:scale-[0.98] h-full"
                  >
                    {/* Image Placeholder */}
                    <div className="image-placeholder w-full h-36 sm:h-40 rounded-xl mb-4">
                      <ImageIcon size={24} className="text-sage-200/60" strokeWidth={1.5} />
                      <span className="text-sage-200/50 text-[9px] font-medium tracking-wider uppercase">
                        Add Image
                      </span>
                    </div>

                    {/* Tag */}
                    {product.tag && (
                      <div className="inline-block bg-gradient-to-r from-sage-400 to-forest-400 text-white text-[9px] font-semibold px-2.5 py-1 rounded-full tracking-wide uppercase mb-2">
                        {product.tag}
                      </div>
                    )}

                    <p className="text-sage-200 text-[10px] font-semibold tracking-[0.15em] uppercase mb-1">
                      {product.category}
                    </p>
                    <h3 className="font-display text-lg sm:text-xl font-bold text-white mb-2 group-hover:text-sage-100 transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-white/90 text-[13.5px] leading-relaxed mb-3">
                      {product.description}
                    </p>

                    {/* Price */}
                    {product.price && (
                      <div className="mb-3">
                        <span className="text-white font-bold text-base bg-white/10 px-2.5 py-1 rounded-md inline-block">{product.price}</span>
                      </div>
                    )}

                    {/* Benefits */}
                    <div className="space-y-1.5 mb-3">
                      {product.benefits.map((b, j) => (
                        <div key={j} className="flex items-center gap-2">
                          <ShieldCheck size={12} className="text-sage-200 flex-shrink-0" />
                          <span className="text-white/90 text-[13px]">{b}</span>
                        </div>
                      ))}
                    </div>

                    <span className="inline-flex items-center gap-1.5 text-sage-200 group-hover:text-white text-xs font-semibold transition-colors">
                      <MessageCircle size={12} /> Enquire on WhatsApp
                    </span>
                  </a>
                </AnimatedCard>
              ))}
            </div>
          </div>
        </section>

        {/* ── Services Section ── */}
        <section className="py-8 sm:py-12">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-8 sm:mb-10">
              <div className="inline-flex items-center gap-2 mb-3">
                <div className="w-8 h-[1px] bg-sage-300/50" />
                <Sparkles size={14} className="text-sage-300" />
                <div className="w-8 h-[1px] bg-sage-300/50" />
              </div>
              <p className="text-sage-200 text-[10px] sm:text-[11px] font-medium tracking-[0.22em] uppercase mb-2">
                Our Services
              </p>
              <h2 className="font-display text-3xl sm:text-4xl font-semibold text-white leading-tight mb-2 drop-shadow-lg">
                Treatment{' '}
                <em className="italic text-sage-200 font-normal">Menu</em>
              </h2>
              <p className="text-white/90 text-sm max-w-md mx-auto leading-relaxed">
                Holistic treatments combining ancient Ayurvedic practices with modern clinical expertise.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
              {services.map((service, i) => (
                <AnimatedCard key={service.name} index={i}>
                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(service.msg)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block liquid-glass rounded-2xl p-5 sm:p-6 hover:bg-white/25 hover:border-white/40 hover:shadow-2xl hover:scale-[1.03] transition-all duration-300 group cursor-pointer active:scale-[0.98] h-full"
                  >
                    {/* Image Placeholder */}
                    <div className="image-placeholder w-full h-32 sm:h-36 rounded-xl mb-4">
                      <ImageIcon size={24} className="text-sage-200/60" strokeWidth={1.5} />
                      <span className="text-sage-200/50 text-[9px] font-medium tracking-wider uppercase">
                        Add Image
                      </span>
                    </div>

                    <h3 className="font-display text-base sm:text-lg font-bold text-white mb-2 group-hover:text-sage-100 transition-colors">
                      {service.name}
                    </h3>
                    <p className="text-white/90 text-[13.5px] leading-relaxed mb-3">
                      {service.description}
                    </p>

                    <span className="inline-flex items-center gap-1.5 text-sage-200 group-hover:text-white text-xs font-semibold transition-colors">
                      <MessageCircle size={12} /> Book on WhatsApp
                    </span>
                  </a>
                </AnimatedCard>
              ))}
            </div>
          </div>
        </section>

        {/* ── Testimonials ── */}
        <section className="py-10 sm:py-14 overflow-hidden">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-8 sm:mb-10">
              <p className="text-sage-200 text-[10px] sm:text-[11px] font-semibold tracking-[0.22em] uppercase mb-2">
                Testimonials
              </p>
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-semibold text-white leading-tight drop-shadow-lg">
                What Our{' '}
                <em className="italic text-sage-200 font-normal">Clients Say</em>
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5">
              {testimonials.map((t, i) => (
                <AnimatedCard key={i} index={i} className="liquid-glass rounded-2xl p-5 sm:p-6">
                  <div className="flex gap-0.5 mb-3">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <Star key={j} size={14} className="text-gold fill-gold" />
                    ))}
                  </div>
                  <p className="text-white/95 text-sm leading-relaxed mb-4">
                    "{t.text}"
                  </p>
                  <p className="text-white font-semibold text-sm">{t.name}</p>
                </AnimatedCard>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="py-10 sm:py-14 overflow-hidden">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
            <div className="liquid-glass rounded-3xl p-8 sm:p-12">
              <Leaf size={28} className="text-sage-200 mx-auto mb-4" />
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-semibold text-white leading-tight mb-4 drop-shadow-lg">
                Ready to Experience{' '}
                <em className="italic text-sage-200 font-normal">Natural Healing?</em>
              </h2>
              <p className="text-white/95 text-sm sm:text-[15px] leading-relaxed mb-8 max-w-md mx-auto">
                Book a consultation today to discover which products and treatments are perfect for your unique needs.
              </p>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 bg-gradient-to-r from-sage-500 to-forest-500 hover:from-sage-400 hover:to-forest-400 text-white font-semibold px-7 py-3.5 rounded-full text-sm transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <MessageCircle size={16} /> Book a Consultation
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
