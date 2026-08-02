import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import FloatingLeaves from './components/FloatingLeaves'
import HomePage from './pages/HomePage'
import ProductsServices from './pages/ProductsServices'

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-forest-900 font-sans relative">
        <FloatingLeaves />
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products-services" element={<ProductsServices />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  )
}
