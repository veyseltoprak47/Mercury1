import ProductCard from "@/components/product/ProductCard";
import { products } from "@/lib/products";

export default function Shop() {
  return (
    <section className="min-h-screen bg-black text-white px-8 py-12">
      <h1 className="text-4xl font-serif mb-8">Shop ArkMercury</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </section>
  );
}
