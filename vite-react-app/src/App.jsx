import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from "./layout/Header"
import PageContent from "./layout/PageContent"
import Footer from "./layout/Footer"
import HomePage from "./pages/HomePage"
import ShopPage from "./pages/ShopPage"
import ProductDetailPage from "./pages/ProductDetailPage"

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <PageContent>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/shop" element={<ShopPage />} />
             <Route path="/product/:id" element={<ProductDetailPage />} />
            <Route path="/about" element={<div className="p-8 text-center">About Page - Coming Soon</div>} />
            <Route path="/contact" element={<div className="p-8 text-center">Contact Page - Coming Soon</div>} />
          </Routes>
        </PageContent>
        <Footer />
      </div>
    </Router>
  )
}

export default App
