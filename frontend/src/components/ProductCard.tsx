import { Plus } from 'lucide-react';
import { Product } from '../types/product';
import { useCart } from '../context/CartContext';
import { useState } from 'react';

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart } = useCart();
  const [isAdding, setIsAdding] = useState(false);

  const handleAddToCart = () => {
    setIsAdding(true);
    addToCart(product);
    setTimeout(() => setIsAdding(false), 600);
  };

  return (
    <div className="group bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300 hover:border-gray-200">
      {/* Brand/Store Header */}
      <div className="px-4 pt-4 pb-2">
        <span className="text-sm font-semibold text-gray-900">{product.brand || 'Brand'}</span>
      </div>

      {/* Product Image */}
      <div className="px-4">
        <div className="relative aspect-square bg-gray-50 rounded-xl overflow-hidden">
          <img
            src={product.imageUrl}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      </div>

      {/* Product Info */}
      <div className="p-4 space-y-3">
        {/* Category */}
        <div className="mb-1">
          <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">
            {product.category}
          </span>
        </div>

        {/* Product Name */}
        <h3 className="text-sm font-semibold text-gray-900 line-clamp-2 leading-tight">
          {product.name}
        </h3>

        {/* Price Section */}
        <div className="flex items-center justify-between">
          <div className="flex items-baseline gap-2">
            <span className="text-lg font-bold text-gray-900">
              ₹{product.price.toFixed(0)}
            </span>
          </div>

          {/* Add to Cart Button */}
          <button
            onClick={handleAddToCart}
            disabled={isAdding}
            className={`
              flex items-center justify-center gap-1 px-3 py-2 rounded-lg font-medium text-sm
              transition-all duration-300 transform
              ${isAdding
                ? 'bg-green-500 text-white scale-95'
                : 'bg-blue-50 text-blue-600 hover:bg-blue-100 hover:scale-105 active:scale-95'
              }
              border border-blue-200
            `}
          >
            <Plus className={`w-4 h-4 ${isAdding ? 'scale-0 absolute' : 'scale-100'}`} />
            <span className={isAdding ? 'scale-110' : 'scale-100'}>
              {isAdding ? 'Added' : 'Add'}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};