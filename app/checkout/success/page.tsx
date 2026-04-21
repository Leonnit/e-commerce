import Link from 'next/link';

export default function SuccessPage() {
  return (
    <main className="max-w-2xl mx-auto px-4 py-24 text-center">
      <div className="text-6xl mb-6">✅</div>
      <h1 className="text-3xl font-bold text-gray-900 mb-4">Commande confirmée !</h1>
      <p className="text-gray-600 mb-8">Merci pour votre achat. Vous recevrez un email de confirmation.</p>
      <Link href="/" className="bg-indigo-600 text-white px-8 py-3 rounded-full hover:bg-indigo-700">
        Retour à l'accueil
      </Link>
    </main>
  );
}