import SectionHeader from '@/components/ui/SectionHeader';
import ProductCard from '@/components/ui/ProductCard';
import { products } from '@/data/products';

export default function ProductGrid() {
  return (
    <section className="section products-section" id="products">
      <div className="container-inner">
        <SectionHeader
          label="Our Expertise"
          title="Products &amp; Solutions"
          subtitle="We manufacture specialized equipment for oil &amp; gas, chemicals, pharmaceuticals, and power sectors."
        />
        <div className="products-grid">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
