import CategoryCard from "@/components/shop/CategoryCard";

const categories = [
  { name: "Men", slug: "men", image: "/images/categories/men.jpg" },
  { name: "Women", slug: "women", image: "/images/categories/women.jpg" },
  { name: "Unisex", slug: "unisex", image: "/images/categories/unisex.jpg" },
  { name: "Niche", slug: "niche", image: "/images/categories/niche.jpg" },
  { name: "Diffusers", slug: "diffusers", image: "/images/categories/diffusers.jpg" },
  { name: "Auto Parfum", slug: "auto-parfum", image: "/images/categories/auto.jpg" },
  { name: "Body Mist", slug: "body-mist", image: "/images/categories/bodymist.jpg" },
];


export default function HomePage() {
  return (
    <main className="bg-black text-white">
      {/* Hero, intro, etc… */}

      <section className="px-6 py-12">
        <h2 className="text-3xl font-serif text-yellow-500 mb-6">Shop by Category</h2>

        <div className="overflow-x-auto no-scrollbar">
         <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
  {categories.map((cat) => (
    <CategoryCard
      key={cat.slug}
      name={cat.name}
      slug={cat.slug}
      image={cat.image}
      
    />
  ))}
</div>

        </div>
      </section>

      {/* Other homepage sections */}
    </main>
  );
}
