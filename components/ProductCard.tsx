'use client';
import Image from 'next/image';
import Link from 'next/link';
import { Product } from '@/types';
import { useCart } from '@/context/CartContext';

export default function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCart();

  return (
    <div className="bg-white rounded-xl shadow-sm border hover:shadow-md transition-shadow">
      <Link href={`/products/${product.id}`}>
        <div className="relative h-48 w-full">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover rounded-t-xl"
          />
        </div>
      </Link>
      <div className="p-4">
        <span className="text-xs text-indigo-600 font-medium bg-indigo-50 px-2 py-1 rounded-full">
          {product.category}
        </span>
        <Link href={`/products/${product.id}`}>
          <h3 className="font-semibold text-gray-900 mt-2 hover:text-indigo-600">
            {product.name}
          </h3>
        </Link>
        <p className="text-gray-500 text-sm mt-1 line-clamp-2">{product.description}</p>
        <div className="flex items-center justify-between mt-4">
          <span className="text-xl font-bold text-gray-900">{product.price} €</span>
          <button
            onClick={() => addItem(product)}
            className="bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-indigo-700 transition-colors"
          >
            Ajouter
          </button>
        </div>
      </div>
    </div>
  );
}