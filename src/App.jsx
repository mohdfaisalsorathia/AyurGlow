import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import ContactCTA from './components/ContactCTA'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-cream-100 font-sans">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <ContactCTA />
      </main>
      <Footer />
    </div>
  )
}
