import Hero from '../components/Hero'
import FeaturedProducts from '../components/FeaturedProducts'

export default function HomePage() {
  return (
    <main className="relative">
      {/* Full-page green nature background — darker overlay for readable text */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <img
          src="/images/ayurveda-scenic-bg.jpg"
          alt=""
          className="w-full h-full object-cover"
        />
        {/* Soft overlay to blend and soften background */}
        <div className="absolute inset-0 bg-gradient-to-b from-forest-950/10 via-transparent to-sage-950/15" />
      </div>

      {/* Page content */}
      <div className="relative z-10">
        <Hero />
        <FeaturedProducts />
      </div>
    </main>
  )
}
