"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

interface Props {
  name: string;
  slug: string;
  image: string;
  count?: number;
}

export default function CategoryCard({ name, slug, image }: Props) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      initial={{ x: -60, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
      className="w-full h-80 rounded-lg overflow-hidden group border border-neutral-800"
    >
      <Link href={`/shop/category/${slug}`}>
        <div className="relative w-full h-full">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover object-center brightness-110 group-hover:brightness-125 transition duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-4 left-4 z-10">
            <h3 className="text-xl font-serif text-white group-hover:text-yellow-500">
              {name}
            </h3>

          </div>
        </div>
      </Link>
    </motion.div>
  );
}
