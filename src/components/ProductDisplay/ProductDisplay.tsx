import React from 'react';
import type {ProductDisplayProps} from '../../types';

export const ProductDisplay: React.FC<ProductDisplayProps> = ({
  product,
  showDescription = true,
  showStockStatus = true,
  onAddToCart,
  children
}) => {
  return (
    <div className="border p-4 rounded shadow">
      {product.imageUrl && (
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-32 h-32 object-cover mb-2"
        />
      )}
      <h2 className="text-lg font-bold">{product.name}</h2>
      <p className="text-gray-700">${product.price}</p>
      {showDescription && <p className="text-sm text-gray-500">{product.description}</p>}
      {showStockStatus && (
        <p className={`text-sm ${product.inStock ? 'text-green-500' : 'text-red-500'}`}>
          {product.inStock ? 'In Stock' : 'Out of Stock'}
        </p>
      )}
      {onAddToCart && (
        <button
          onClick={() => onAddToCart(product.id)}
          className="mt-2 bg-green-500 text-white px-2 py-1 rounded"
        >
          Add to Cart
        </button>
      )}
      {children}
    </div>
  );
};
