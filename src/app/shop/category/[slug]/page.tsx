import { products } from "@/lib/products";
import { notFound } from "next/navigation";
import ProductCard from "@/components/product/ProductCard";

export default function CategoryPage({ params }: { params: { slug: string } }) {
  const filtered = products.filter((p) => p.category === params.slug);

  if (!filtered.length) return notFound();

  return (
    <main className="min-h-screen bg-black text-white px-6 py-16">
      <h1 className="text-4xl font-serif text-yellow-500 capitalize mb-6">
        {params.slug.replace("-", " ")} Collection
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filtered.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </main>
  );
}
