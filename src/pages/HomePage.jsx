import Hero from '../components/Hero'
import FeaturedProducts from '../components/FeaturedProducts'

export default function HomePage() {
  return (
    <main className="relative">
      {/* Full-page green nature background — darker overlay for readable text */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <img
          src="/images/green-nature-bg.png"
          alt=""
          className="w-full h-full object-cover brightness-[1.25] contrast-[0.95]"
        />
        {/* Soft green-tinted overlay: bright nature feel + readable text */}
        <div className="absolute inset-0 bg-gradient-to-b from-forest-900/10 via-forest-800/5 to-forest-900/15" />
      </div>

      {/* Page content */}
      <div className="relative z-10">
        <Hero />
        <FeaturedProducts />
      </div>
    </main>
  )
}
