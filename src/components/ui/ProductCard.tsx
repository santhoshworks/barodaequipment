import Link from 'next/link';
import Image from 'next/image';
import type { Product } from '@/types';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="product-card">
      <div className="product-card-img">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 576px) 100vw, (max-width: 1024px) 50vw, 25vw"
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
