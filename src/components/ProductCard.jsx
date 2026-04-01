import { Check } from 'lucide-react';
import { useState } from 'react';

const getTagStyles = (tagType) => {
  switch (tagType?.toLowerCase()) {
    case 'popular':
      return 'bg-blue-100 text-blue-700';
    case 'new':
      return 'bg-green-100 text-green-700';
    case 'best seller':
      return 'bg-orange-100 text-orange-700';
    default:
      return 'bg-purple-100 text-purple-700';
  }
};

const ProductCard = ({ product, onAddToCart }) => {
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = () => {
    onAddToCart(product);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  return (
    <div className="card bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col">
      <div className="card-body p-6 flex flex-col flex-1">
        <div className="flex items-start justify-between mb-4">
          <div className="bg-purple-50 p-2.5 rounded-xl">
            <img
              src={product.icon}
              alt={product.name}
              className="w-10 h-10 object-contain"
            />
          </div>
          <span className={`badge text-xs font-semibold px-2.5 py-1 rounded-full ${getTagStyles(product.tagType)}`}>
            {product.tag}
          </span>
        </div>

        <h3 className="text-lg font-bold text-gray-900 mb-1.5">{product.name}</h3>

        <p className="text-sm text-gray-500 mb-4 line-clamp-2">{product.description}</p>

        <div className="flex items-baseline gap-1.5 mb-4">
          <span className="text-2xl font-extrabold text-gray-900">${product.price}</span>
          <span className="text-sm text-gray-400">/ {product.period}</span>
        </div>

        <ul className="space-y-1.5 mb-6 flex-1">
          {product.features.map((feature, index) => (
            <li key={index} className="flex items-center gap-2">
              <Check size={14} className="text-purple-600 shrink-0" />
              <span className="text-sm text-gray-600">{feature}</span>
            </li>
          ))}
        </ul>

        <button
          onClick={handleAddToCart}
          className={`btn w-full py-2.5 rounded-xl font-semibold text-sm transition-all border-0 ${isAdded
              ? 'btn-success bg-green-500 text-white'
              : 'btn-primary bg-purple-600 hover:bg-purple-700 text-white'
            }`}
        >
          {isAdded ? '✓ Added to Cart!' : 'Buy Now'}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
