import { Heart, ShoppingCart } from "lucide-react"

export default function ProductCard({ image, title, price, originalPrice, discount, isNew }) {
  return (
    <div className="flex flex-col bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <div className="relative">
        <img src={image || "/placeholder.svg"} alt={title} className="w-full h-48 sm:h-56 object-cover" />
        {isNew && <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">NEW</span>}
        {discount && (
          <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">-{discount}%</span>
        )}
        <div className="absolute top-2 right-2 flex flex-col gap-2">
          <button className="p-2 bg-white rounded-full shadow-sm hover:shadow-md transition-shadow">
            <Heart className="w-4 h-4" />
          </button>
          <button className="p-2 bg-white rounded-full shadow-sm hover:shadow-md transition-shadow">
            <ShoppingCart className="w-4 h-4" />
          </button>
        </div>
      </div>
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-sm font-medium text-gray-900 mb-2 line-clamp-2">{title}</h3>
        <div className="flex items-center gap-2 mt-auto">
          <span className="text-lg font-bold text-gray-900">${price}</span>
          {originalPrice && <span className="text-sm text-gray-500 line-through">${originalPrice}</span>}
        </div>
      </div>
    </div>
  )
}
