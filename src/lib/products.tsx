// src/lib/products.ts
export interface Product {
  category: string;
  id: string;
  name: string;
  image: string;
  description: string;
  price: number;
  slug: string;
}

export const products: Product[] = [
  {
    id: "1",
    name: "Aurora Noire",
    image: "/images/aurora.jpg",
    description: "Mystical blend of blackcurrant, jasmine, and amber wood.",
    price: 89,
    slug: "aurora-noire",
    category: ""
  },
  {
    id: "2",
    name: "Solar Veil",
    image: "/images/solar.jpg",
    description: "Warm citrus top notes veiled in golden musk.",
    price: 95,
    slug: "solar-veil",
    category: ""
  },
  {
    id: "3",
    name: "Celestial Mist",
    image: "/images/mist.jpg",
    description: "A clean, powdery fragrance kissed with orchid and ozone.",
    price: 102,
    slug: "celestial-mist",
    category: ""
  },
];

