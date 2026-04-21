import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import { CartProvider } from '@/context/CartContext';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'TechShop - Électronique & Tech',
  description: 'Les meilleurs produits tech au meilleur prix',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <CartProvider>
          <Header />
          {children}
          <footer className="bg-gray-900 text-gray-400 text-center py-8 mt-16">
            <p>© 2025 TechShop — Tous droits réservés</p>
          </footer>
        </CartProvider>
      </body>
    </html>
  );
}