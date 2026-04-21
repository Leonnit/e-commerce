import Link from 'next/link';
import ProductCard from '@/components/ProductCard';
import { getProducts } from '@/lib/getProducts';

export default function Home() {
  const products = getProducts().slice(0, 3);

  return (
    <main>
      {/* Hero */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-24 px-4 text-center">
        <h1 className="text-5xl font-bold mb-4">La tech à portée de main</h1>
        <p className="text-xl mb-8 opacity-90">Les meilleurs produits électroniques au meilleur prix</p>
        <Link
          href="/products"
          className="bg-white text-indigo-600 font-semibold px-8 py-3 rounded-full hover:bg-indigo-50 transition-colors"
        >
          Voir tous les produits
        </Link>
      </section>

      {/* Produits en vedette */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Produits en vedette</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {products.map(p => <ProductCard key={p.id} product={p} />)}
        </div>
        <div className="text-center mt-10">
          <Link href="/products" className="bg-indigo-600 text-white px-8 py-3 rounded-full hover:bg-indigo-700">
            Voir tout le catalogue
          </Link>
        </div>
      </section>
    </main>
  );
}