import CategoryCard from "@/components/shop/CategoryCard";

const categories = [
  { name: "Men's", slug: "men", image: "/images/categories/men.jpg" },
  { name: "Women's", slug: "women", image: "/images/categories/women.jpg" },
  { name: "Unisex", slug: "unisex", image: "/images/categories/unisex.jpg" },
  { name: "Niche", slug: "niche", image: "/images/categories/niche.jpg" },
  { name: "Diffusers", slug: "diffusers", image: "/images/categories/diffusers.jpg" },
  { name: "Auto Parfum", slug: "auto-parfum", image: "/images/categories/auto.jpg" },
  { name: "Body Mist", slug: "body-mist", image: "/images/categories/bodymist.jpg" },
];

export default function CategoriesPage() {
  // const getCount = (slug: string) =>
  //   products.filter((p) => p.category === slug).length;

  return (
    <main className="min-h-screen bg-black text-white px-6 py-16">
      <h1 className="text-4xl font-serif text-yellow-500 mb-10">Explore Our Categories</h1>

      <div className="overflow-x-auto no-scrollbar">
        <div className="flex gap-6 min-w-max pr-4">
          {categories.map((cat) => (
            <CategoryCard
              key={cat.slug}
              name={cat.name}
              slug={cat.slug}
              image={cat.image}
              // count={getCount(cat.slug)}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
