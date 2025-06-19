import { products } from "@/lib/products";
import { useCart } from "@/lib/store/cart";
import { notFound } from "next/navigation";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = products.find((p) => p.slug === params.slug);
  const addToCart = useCart((state) => state.addToCart);

  if (!product) return notFound();

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="min-h-screen bg-black text-white px-6 py-16"
    >
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        <Image
          src={product.image}
          alt={product.name}
          width={500}
          height={500}
          className="rounded"
        />
        <div>
          <h1 className="text-4xl font-serif mb-2">{product.name}</h1>
          <p className="text-yellow-500 text-xl mb-4">${product.price}</p>
          <p className="text-gray-300 mb-6">{product.description}</p>
          <Button
            onClick={() => addToCart(product)}
            className="bg-yellow-500 text-black hover:bg-yellow-400 transition"
          >
            Add to Cart
          </Button>
        </div>
      </div>
    </motion.div>
  );
}
