"use client"

import { useState } from "react"
import { useParams, Link } from "react-router-dom"
import { Heart, ShoppingCart, Plus, Minus, Star, Truck, Shield, RotateCcw } from "lucide-react"
import ProductCard from "../components/ProductCard"

export default function ProductDetailPage() {
  const { id } = useParams()
  const [selectedImage, setSelectedImage] = useState(0)
  const [selectedColor, setSelectedColor] = useState(0)
  const [selectedSize, setSelectedSize] = useState("M")
  const [quantity, setQuantity] = useState(1)

  // Mock product data - in real app this would come from API
  const product = {
    id: id,
    title: "Graphic Design",
    price: 1200.53,
    originalPrice: 1500.0,
    discount: 20,
    rating: 4.8,
    reviews: 156,
    description:
      "This is a high-quality graphic design product that combines style and functionality. Perfect for modern professionals who value both aesthetics and performance.",
    features: [
      "Premium quality materials",
      "Modern design aesthetic",
      "Durable construction",
      "Available in multiple colors",
      "Professional grade quality",
    ],
    images: [
      "/placeholder.svg?height=500&width=500",
      "/placeholder.svg?height=500&width=500",
      "/placeholder.svg?height=500&width=500",
      "/placeholder.svg?height=500&width=500",
    ],
    colors: [
      { name: "Yellow", value: "#FCD34D" },
      { name: "Blue", value: "#3B82F6" },
      { name: "Green", value: "#10B981" },
      { name: "Red", value: "#EF4444" },
      { name: "Purple", value: "#8B5CF6" },
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    inStock: true,
    stockCount: 25,
  }

  const relatedProducts = [
    {
      id: 101,
      image: "/placeholder.svg?height=300&width=250",
      title: "Graphic Design Pro",
      price: 89.99,
      originalPrice: 120.0,
      discount: 25,
      rating: 4.5,
      reviews: 89,
    },
    {
      id: 102,
      image: "/placeholder.svg?height=300&width=250",
      title: "Creative Design",
      price: 79.99,
      rating: 4.8,
      reviews: 156,
      isNew: true,
    },
    {
      id: 103,
      image: "/placeholder.svg?height=300&width=250",
      title: "Graphic Design",
      price: 129.99,
      originalPrice: 159.99,
      discount: 19,
      rating: 4.6,
      reviews: 203,
    },
    {
      id: 104,
      image: "/placeholder.svg?height=300&width=250",
      title: "Creative Design",
      price: 69.99,
      rating: 4.3,
      reviews: 87,
    },
    {
      id: 105,
      image: "/placeholder.svg?height=300&width=250",
      title: "Graphic Design",
      price: 99.99,
      originalPrice: 129.99,
      discount: 23,
      rating: 4.7,
      reviews: 156,
    },
    {
      id: 106,
      image: "/placeholder.svg?height=300&width=250",
      title: "Creative Design",
      price: 89.99,
      rating: 4.4,
      reviews: 112,
      isNew: true,
    },
    {
      id: 107,
      image: "/placeholder.svg?height=300&width=250",
      title: "Graphic Design",
      price: 75.99,
      originalPrice: 95.99,
      discount: 21,
      rating: 4.5,
      reviews: 89,
    },
    {
      id: 108,
      image: "/placeholder.svg?height=300&width=250",
      title: "Creative Design",
      price: 119.99,
      rating: 4.9,
      reviews: 234,
    },
  ]

  const handleQuantityChange = (change) => {
    setQuantity(Math.max(1, quantity + change))
  }

  const renderStars = (rating) => {
    return (
      <div className="flex items-center gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`w-4 h-4 ${star <= rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
          />
        ))}
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <nav className="flex items-center space-x-2 text-sm">
            <Link to="/" className="text-gray-500 hover:text-gray-700">
              Home
            </Link>
            <span className="text-gray-400">/</span>
            <Link to="/shop" className="text-gray-500 hover:text-gray-700">
              Shop
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-900 font-medium">{product.title}</span>
          </nav>
        </div>
      </div>

      {/* Product Detail */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
              <img
                src={product.images[selectedImage] || "/placeholder.svg"}
                alt={product.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Thumbnail Images */}
            <div className="grid grid-cols-4 gap-2">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-square bg-gray-100 rounded-lg overflow-hidden border-2 ${
                    selectedImage === index ? "border-cyan-500" : "border-transparent"
                  }`}
                >
                  <img
                    src={image || "/placeholder.svg"}
                    alt={`${product.title} ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">{product.title}</h1>

              {/* Rating */}
              <div className="flex items-center gap-2 mb-4">
                {renderStars(product.rating)}
                <span className="text-sm text-gray-600">({product.reviews} reviews)</span>
              </div>

              {/* Price */}
              <div className="flex items-center gap-3 mb-6">
                <span className="text-3xl font-bold text-gray-900">${product.price}</span>
                {product.originalPrice && (
                  <>
                    <span className="text-xl text-gray-500 line-through">${product.originalPrice}</span>
                    <span className="bg-red-100 text-red-600 px-2 py-1 rounded text-sm font-medium">
                      -{product.discount}%
                    </span>
                  </>
                )}
              </div>
            </div>

            {/* Description */}
            <div>
              <p className="text-gray-600 leading-relaxed">{product.description}</p>
            </div>

            {/* Features */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Key Features:</h3>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2 text-gray-600">
                    <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Color Selection */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Color:</h3>
              <div className="flex items-center gap-3">
                {product.colors.map((color, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedColor(index)}
                    className={`w-8 h-8 rounded-full border-2 ${
                      selectedColor === index ? "border-gray-900" : "border-gray-300"
                    }`}
                    style={{ backgroundColor: color.value }}
                    title={color.name}
                  />
                ))}
              </div>
            </div>

            {/* Size Selection */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Size:</h3>
              <div className="flex items-center gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-4 py-2 border rounded-lg font-medium ${
                      selectedSize === size
                        ? "border-cyan-500 bg-cyan-50 text-cyan-600"
                        : "border-gray-300 text-gray-700 hover:border-gray-400"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity and Add to Cart */}
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Quantity:</h3>
                <div className="flex items-center gap-3">
                  <div className="flex items-center border border-gray-300 rounded-lg">
                    <button
                      onClick={() => handleQuantityChange(-1)}
                      className="p-2 hover:bg-gray-50"
                      disabled={quantity <= 1}
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="px-4 py-2 font-medium">{quantity}</span>
                    <button onClick={() => handleQuantityChange(1)} className="p-2 hover:bg-gray-50">
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                  <span className="text-sm text-gray-600">{product.stockCount} items available</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <button className="flex-1 bg-cyan-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-cyan-600 transition-colors flex items-center justify-center gap-2">
                  <ShoppingCart className="w-5 h-5" />
                  Add to Cart
                </button>
                <button className="px-6 py-3 border border-gray-300 rounded-lg font-semibold hover:bg-gray-50 transition-colors flex items-center justify-center gap-2">
                  <Heart className="w-5 h-5" />
                  Wishlist
                </button>
              </div>
            </div>

            {/* Product Benefits */}
            <div className="border-t pt-6 space-y-4">
              <div className="flex items-center gap-3">
                <Truck className="w-5 h-5 text-cyan-500" />
                <span className="text-sm text-gray-600">Free shipping on orders over $50</span>
              </div>
              <div className="flex items-center gap-3">
                <Shield className="w-5 h-5 text-cyan-500" />
                <span className="text-sm text-gray-600">2 year warranty included</span>
              </div>
              <div className="flex items-center gap-3">
                <RotateCcw className="w-5 h-5 text-cyan-500" />
                <span className="text-sm text-gray-600">30-day return policy</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Product Details Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            <div>
              <img
                src="/placeholder.svg?height=400&width=600"
                alt="Product detail"
                className="w-full h-64 md:h-80 object-cover rounded-lg"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">The quick fox jumps over</h2>
              <p className="text-gray-600 leading-relaxed">
                Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM
                RELIT Mollie. Excitation venial consequent sent nostrum met.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM
                RELIT Mollie. Excitation venial consequent sent nostrum met.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM
                RELIT Mollie. Excitation venial consequent sent nostrum met.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bestseller Products */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">BESTSELLER PRODUCTS</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
