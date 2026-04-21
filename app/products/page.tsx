import ProductCard from '@/components/ProductCard';
import { getProducts } from '@/lib/getProducts';

export default function ProductsPage() {
  const products = getProducts();
  const categories = [...new Set(products.map(p => p.category))];

  return (
    <main className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Tous nos produits</h1>
      <div className="flex gap-3 mb-8 flex-wrap">
        <span className="bg-indigo-600 text-white px-4 py-1.5 rounded-full text-sm">Tous</span>
        {categories.map(cat => (
          <span key={cat} className="bg-gray-100 text-gray-700 px-4 py-1.5 rounded-full text-sm cursor-pointer hover:bg-indigo-100">
            {cat}
          </span>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map(p => <ProductCard key={p.id} product={p} />)}
      </div>
    </main>
  );
}