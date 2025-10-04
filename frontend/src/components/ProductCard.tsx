import { ShoppingCart } from 'lucide-react';
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

    setTimeout(() => {
      setIsAdding(false);
    }, 600);
  };

  return (
    <div className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1">
      <div className="relative overflow-hidden aspect-square bg-gray-100">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      <div className="p-6">
        <div className="mb-2">
          <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">
            {product.category}
          </span>
        </div>

        <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
          {product.name}
        </h3>

        <p className="text-sm text-gray-600 mb-4 line-clamp-2">
          {product.description}
        </p>

        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-gray-900">
            ${product.price.toFixed(2)}
          </span>

          <button
            onClick={handleAddToCart}
            disabled={isAdding}
            className={`
              flex items-center gap-2 px-5 py-2.5 rounded-xl font-medium
              transition-all duration-300 transform
              ${isAdding
                ? 'bg-green-500 text-white scale-95'
                : 'bg-blue-600 text-white hover:bg-blue-700 hover:scale-105 active:scale-95'
              }
              shadow-md hover:shadow-lg
            `}
          >
            <ShoppingCart className={`w-4 h-4 transition-transform duration-300 ${isAdding ? 'scale-0' : 'scale-100'}`} />
            <span className="text-sm">
              {isAdding ? 'Added!' : 'Add to Cart'}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};
