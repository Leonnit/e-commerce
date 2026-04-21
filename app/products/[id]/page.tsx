'use client';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import { getProductById } from '@/lib/getProducts';
import { useCart } from '@/context/CartContext';

export default function ProductPage() {
  const { id } = useParams();
  const product = getProductById(id as string);
  const { addItem } = useCart();

  if (!product) return <div className="p-8 text-center">Produit introuvable</div>;

  return (
    <main className="max-w-5xl mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="relative h-96 rounded-2xl overflow-hidden">
          <Image src={product.image} alt={product.name} fill className="object-cover" />
        </div>
        <div>
          <span className="text-sm text-indigo-600 font-medium bg-indigo-50 px-3 py-1 rounded-full">
            {product.category}
          </span>
          <h1 className="text-3xl font-bold text-gray-900 mt-4">{product.name}</h1>
          <p className="text-gray-600 mt-4 leading-relaxed">{product.description}</p>
          <div className="mt-6">
            <span className="text-4xl font-bold text-gray-900">{product.price} €</span>
          </div>
          <p className="text-green-600 text-sm mt-2">✓ En stock ({product.stock} disponibles)</p>
          <button
            onClick={() => addItem(product)}
            className="mt-6 w-full bg-indigo-600 text-white py-3 rounded-xl font-semibold hover:bg-indigo-700 transition-colors"
          >
            Ajouter au panier
          </button>
        </div>
      </div>
    </main>
  );
}