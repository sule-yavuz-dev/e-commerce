"use client"

import { useState } from "react"
import { Filter, Grid, List, ChevronLeft, ChevronRight } from "lucide-react"

export default function ShopPage() {
  const [currentPage, setCurrentPage] = useState(1)
  const [sortBy, setSortBy] = useState("featured")
  const [viewMode, setViewMode] = useState("grid")
  const [showFilters, setShowFilters] = useState(false)

  const categories = [
    {
      id: 1,
      name: "Women's Fashion",
      image: "/placeholder.svg?height=200&width=150",
      color: "bg-pink-100",
    },
    {
      id: 2,
      name: "Men's Fashion",
      image: "/placeholder.svg?height=200&width=150",
      color: "bg-blue-100",
    },
    {
      id: 3,
      name: "Accessories",
      image: "/placeholder.svg?height=200&width=150",
      color: "bg-purple-100",
    },
    {
      id: 4,
      name: "Shoes",
      image: "/placeholder.svg?height=200&width=150",
      color: "bg-yellow-100",
    },
    {
      id: 5,
      name: "Bags",
      image: "/placeholder.svg?height=200&width=150",
      color: "bg-green-100",
    },
  ]

  const products = [
    {
      id: 1,
      image: "/placeholder.svg?height=300&width=250",
      title: "Elegant Sweater",
      price: 89.99,
      originalPrice: 120.0,
      discount: 25,
      rating: 4.5,
      reviews: 128,
    },
    {
      id: 2,
      image: "/placeholder.svg?height=300&width=250",
      title: "Casual Cardigan",
      price: 79.99,
      rating: 4.8,
      reviews: 95,
      isNew: true,
    },
    {
      id: 3,
      image: "/placeholder.svg?height=300&width=250",
      title: "Designer Sweater",
      price: 129.99,
      originalPrice: 159.99,
      discount: 19,
      rating: 4.6,
      reviews: 203,
    },
    {
      id: 4,
      image: "/placeholder.svg?height=300&width=250",
      title: "Graphic Sweater",
      price: 69.99,
      rating: 4.3,
      reviews: 87,
    },
    {
      id: 5,
      image: "/placeholder.svg?height=300&width=250",
      title: "Classic Sweater",
      price: 99.99,
      originalPrice: 129.99,
      discount: 23,
      rating: 4.7,
      reviews: 156,
    },
    {
      id: 6,
      image: "/placeholder.svg?height=300&width=250",
      title: "Oversized Sweater",
      price: 89.99,
      rating: 4.4,
      reviews: 112,
      isNew: true,
    },
    {
      id: 7,
      image: "/placeholder.svg?height=300&width=250",
      title: "Striped Sweater",
      price: 75.99,
      originalPrice: 95.99,
      discount: 21,
      rating: 4.5,
      reviews: 89,
    },
    {
      id: 8,
      image: "/placeholder.svg?height=300&width=250",
      title: "Cozy Sweater",
      price: 119.99,
      rating: 4.9,
      reviews: 234,
    },
    {
      id: 9,
      image: "/placeholder.svg?height=300&width=250",
      title: "Vintage Sweater",
      price: 85.99,
      originalPrice: 110.99,
      discount: 23,
      rating: 4.2,
      reviews: 67,
    },
    {
      id: 10,
      image: "/placeholder.svg?height=300&width=250",
      title: "Modern Sweater",
      price: 95.99,
      rating: 4.6,
      reviews: 145,
    },
    {
      id: 11,
      image: "/placeholder.svg?height=300&width=250",
      title: "Luxury Sweater",
      price: 149.99,
      originalPrice: 199.99,
      discount: 25,
      rating: 4.8,
      reviews: 178,
    },
    {
      id: 12,
      image: "/placeholder.svg?height=300&width=250",
      title: "Casual Sweater",
      price: 65.99,
      rating: 4.3,
      reviews: 92,
      isNew: true,
    },
  ]

  const totalPages = 5
  const productsPerPage = 12

  const handlePageChange = (page) => {
    setCurrentPage(page)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const renderStars = (rating) => {
    return (
      <div className="flex items-center gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <span key={star} className={`text-sm ${star <= rating ? "text-yellow-400" : "text-gray-300"}`}>
            ★
          </span>
        ))}
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <nav className="flex items-center space-x-2 text-sm">
            <a href="/" className="text-gray-500 hover:text-gray-700">
              Home
            </a>
            <span className="text-gray-400">/</span>
            <span className="text-gray-900 font-medium">Shop</span>
          </nav>
        </div>
      </div>

      {/* Page Header */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Shop</h1>
          <p className="text-gray-600">Discover our complete collection of premium products</p>
        </div>
      </div>

      {/* Categories Section */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <h2 className="text-xl font-semibold mb-6">Shop by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {categories.map((category) => (
              <div
                key={category.id}
                className={`${category.color} rounded-lg p-4 cursor-pointer hover:shadow-md transition-shadow`}
              >
                <div className="aspect-square mb-3 rounded-lg overflow-hidden">
                  <img
                    src={category.image || "/placeholder.svg"}
                    alt={category.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-sm font-medium text-center">{category.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Filters and Sort */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex items-center gap-4">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
              >
                <Filter className="w-4 h-4" />
                Filters
              </button>
              <span className="text-sm text-gray-600">
                Showing {(currentPage - 1) * productsPerPage + 1}-
                {Math.min(currentPage * productsPerPage, products.length)} of {products.length} results
              </span>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <label className="text-sm text-gray-600">Sort by:</label>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="border border-gray-300 rounded px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500"
                >
                  <option value="featured">Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="newest">Newest</option>
                  <option value="rating">Highest Rated</option>
                </select>
              </div>

              <div className="flex items-center border border-gray-300 rounded">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`p-2 ${viewMode === "grid" ? "bg-cyan-500 text-white" : "text-gray-600"}`}
                >
                  <Grid className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  className={`p-2 ${viewMode === "list" ? "bg-cyan-500 text-white" : "text-gray-600"}`}
                >
                  <List className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div
          className={`grid gap-6 ${
            viewMode === "grid" ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" : "grid-cols-1"
          }`}
        >
          {products.map((product) => (
            <div key={product.id} className={viewMode === "list" ? "flex gap-4 bg-white p-4 rounded-lg shadow-sm" : ""}>
              {viewMode === "grid" ? (
                <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden">
                  <div className="relative">
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.title}
                      className="w-full h-64 object-cover"
                    />
                    {product.isNew && (
                      <span className="absolute top-2 left-2 bg-green-500 text-white text-xs px-2 py-1 rounded">
                        NEW
                      </span>
                    )}
                    {product.discount && (
                      <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                        -{product.discount}%
                      </span>
                    )}
                  </div>
                  <div className="p-4">
                    <h3 className="font-medium text-gray-900 mb-2">{product.title}</h3>
                    <div className="flex items-center gap-2 mb-2">
                      {renderStars(product.rating)}
                      <span className="text-sm text-gray-500">({product.reviews})</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-lg font-bold text-gray-900">${product.price}</span>
                      {product.originalPrice && (
                        <span className="text-sm text-gray-500 line-through">${product.originalPrice}</span>
                      )}
                    </div>
                  </div>
                </div>
              ) : (
                <>
                  <div className="relative w-32 h-32 flex-shrink-0">
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.title}
                      className="w-full h-full object-cover rounded"
                    />
                    {product.isNew && (
                      <span className="absolute top-1 left-1 bg-green-500 text-white text-xs px-1 py-0.5 rounded">
                        NEW
                      </span>
                    )}
                    {product.discount && (
                      <span className="absolute top-1 left-1 bg-red-500 text-white text-xs px-1 py-0.5 rounded">
                        -{product.discount}%
                      </span>
                    )}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium text-gray-900 mb-2">{product.title}</h3>
                    <div className="flex items-center gap-2 mb-2">
                      {renderStars(product.rating)}
                      <span className="text-sm text-gray-500">({product.reviews})</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-lg font-bold text-gray-900">${product.price}</span>
                      {product.originalPrice && (
                        <span className="text-sm text-gray-500 line-through">${product.originalPrice}</span>
                      )}
                    </div>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center mt-12 gap-2">
          <button
            onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
            disabled={currentPage === 1}
            className="p-2 border border-gray-300 rounded hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          {[...Array(totalPages)].map((_, index) => {
            const page = index + 1
            return (
              <button
                key={page}
                onClick={() => handlePageChange(page)}
                className={`px-4 py-2 border rounded ${
                  currentPage === page ? "bg-cyan-500 text-white border-cyan-500" : "border-gray-300 hover:bg-gray-50"
                }`}
              >
                {page}
              </button>
            )
          })}

          <button
            onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
            disabled={currentPage === totalPages}
            className="p-2 border border-gray-300 rounded hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  )
}
