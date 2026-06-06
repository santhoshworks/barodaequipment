import Link from 'next/link';
import type { Product } from '@/types';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="product-card">
      <div className="product-card-img">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          decoding="async"
        />
      </div>
      <div className="card-body">
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <Link href={product.href}>Learn More →</Link>
      </div>
    </article>
  );
}
