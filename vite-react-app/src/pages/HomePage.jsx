import ProductCard from "../components/ProductCard"
import Slider from "../components/Slider"
import { ArrowRight } from "lucide-react"

export default function HomePage() {
  const heroSlides = [
    {
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
      title: "NEW COLLECTION",
      subtitle: "Discover our latest fashion trends",
      buttonText: "SHOP NOW",
    },
    {
      image: "https://images.unsplash.com/photo-1495121605193-b116b5b09a9f?auto=format&fit=crop&w=800&q=80",
      title: "SUMMER SALE",
      subtitle: "Up to 50% off on selected items",
      buttonText: "EXPLORE DEALS",
    },
    {
      image: "https://images.unsplash.com/photo-1521334884684-d80222895322?auto=format&fit=crop&w=800&q=80",
      title: "PREMIUM QUALITY",
      subtitle: "Crafted with care and attention to detail",
      buttonText: "LEARN MORE",
    },
  ]

  const featuredProducts = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=250&q=80",
      title: "Elegant Summer Dress",
      price: 89.99,
      originalPrice: 120.0,
      discount: 25,
      isNew: false,
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=250&q=80",
      title: "Classic Denim Jacket",
      price: 79.99,
      isNew: true,
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=250&q=80",
      title: "Casual Cotton T-Shirt",
      price: 29.99,
      originalPrice: 39.99,
      discount: 25,
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=250&q=80",
      title: "Stylish Sneakers",
      price: 129.99,
      isNew: true,
    },
  ]

  const bestSellers = [
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=250&q=80",
      title: "Premium Wool Coat",
      price: 199.99,
      originalPrice: 249.99,
      discount: 20,
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=250&q=80",
      title: "Designer Handbag",
      price: 159.99,
      isNew: true,
    },
    {
      id: 7,
      image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=250&q=80",
      title: "Comfortable Jeans",
      price: 69.99,
      originalPrice: 89.99,
      discount: 22,
    },
    {
      id: 8,
      image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=250&q=80",
      title: "Silk Blouse",
      price: 89.99,
      isNew: true,
    },
  ]

  const blogPosts = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=300&q=80",
      title: "Summer Fashion Trends 2024",
      excerpt: "Discover the hottest trends for this summer season",
      date: "May 15, 2024",
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1495121605193-b116b5b09a9f?auto=format&fit=crop&w=300&q=80",
      title: "How to Style Your Wardrobe",
      excerpt: "Tips and tricks for creating perfect outfits",
      date: "May 10, 2024",
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1521334884684-d80222895322?auto=format&fit=crop&w=300&q=80",
      title: "Sustainable Fashion Guide",
      excerpt: "Making eco-friendly choices in fashion",
      date: "May 5, 2024",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Slider */}
      <section className="mb-12">
        <Slider slides={heroSlides} />
      </section>

      {/* Categories */}
      <section className="max-w-7xl mx-auto px-4 mb-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-gray-100 rounded-lg p-6 text-center hover:bg-gray-200 transition-colors cursor-pointer">
            <div className="w-16 h-16 bg-cyan-500 rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-white font-bold text-xl">W</span>
            </div>
            <h3 className="font-semibold">Women</h3>
          </div>
          <div className="bg-gray-100 rounded-lg p-6 text-center hover:bg-gray-200 transition-colors cursor-pointer">
            <div className="w-16 h-16 bg-cyan-500 rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-white font-bold text-xl">M</span>
            </div>
            <h3 className="font-semibold">Men</h3>
          </div>
          <div className="bg-gray-100 rounded-lg p-6 text-center hover:bg-gray-200 transition-colors cursor-pointer">
            <div className="w-16 h-16 bg-cyan-500 rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-white font-bold text-xl">K</span>
            </div>
            <h3 className="font-semibold">Kids</h3>
          </div>
          <div className="bg-gray-100 rounded-lg p-6 text-center hover:bg-gray-200 transition-colors cursor-pointer">
            <div className="w-16 h-16 bg-cyan-500 rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-white font-bold text-xl">A</span>
            </div>
            <h3 className="font-semibold">Accessories</h3>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="max-w-7xl mx-auto px-4 mb-16">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold">Featured Products</h2>
          <button className="flex items-center gap-2 text-cyan-500 hover:text-cyan-600 font-semibold">
            View All <ArrowRight className="w-4 h-4" />
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </section>

      {/* Promotional Banner */}
      <section className="bg-cyan-500 text-white py-16 mb-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">WEB CLASSIC PRODUCT</h2>
              <p className="text-xl mb-6">Discover timeless pieces that never go out of style</p>
              <button className="bg-white text-cyan-500 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                SHOP NOW
              </button>
            </div>
            <div className="flex justify-center">
              <img
                src="https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=300&q=80"
                alt="Classic Product"
                className="rounded-lg shadow-lg max-w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Best Sellers */}
      <section className="max-w-7xl mx-auto px-4 mb-16">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold">Best Sellers</h2>
          <button className="flex items-center gap-2 text-cyan-500 hover:text-cyan-600 font-semibold">
            View All <ArrowRight className="w-4 h-4" />
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {bestSellers.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </section>

      {/* Deal of the Week */}
      <section className="bg-gradient-to-r from-pink-500 to-red-500 text-white py-16 mb-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Deal of the Week!</h2>
            <p className="text-xl">Limited time offer - Don't miss out!</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="flex justify-center">
              <img
                src="https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=600&q=80"
                alt="Deal of the Week"
                className="rounded-lg shadow-lg max-w-full h-auto"
              />
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold mb-4">Up to 70% OFF</h3>
              <p className="text-lg mb-6">Selected items from our premium collection</p>
              <div className="flex justify-center md:justify-start gap-4 mb-6">
                <div className="bg-white bg-opacity-20 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold">02</div>
                  <div className="text-sm">Days</div>
                </div>
                <div className="bg-white bg-opacity-20 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold">14</div>
                  <div className="text-sm">Hours</div>
                </div>
                <div className="bg-white bg-opacity-20 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold">35</div>
                  <div className="text-sm">Minutes</div>
                </div>
              </div>
              <button className="bg-white text-red-500 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                SHOP NOW
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="max-w-7xl mx-auto px-4 mb-16">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold">Featured Posts</h2>
          <button className="flex items-center gap-2 text-cyan-500 hover:text-cyan-600 font-semibold">
            View All <ArrowRight className="w-4 h-4" />
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden"
            >
              <img src={post.image || "/placeholder.svg"} alt={post.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">{post.date}</span>
                  <button className="text-cyan-500 hover:text-cyan-600 font-semibold">Read More</button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}
