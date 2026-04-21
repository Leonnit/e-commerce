import products from '@/data/products.json';
import { Product } from '@/types';

export function getProducts(): Product[] {
  return products as Product[];
}

export function getProductById(id: string): Product | undefined {
  return (products as Product[]).find(p => p.id === id);
}