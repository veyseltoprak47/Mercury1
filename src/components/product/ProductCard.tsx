import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface Props {
  name: string;
  image: string;
  price: number;
  slug: string;
}

export default function ProductCard({ name, image, price, slug }: Props) {
  return (
    <div className="bg-white text-black rounded-lg shadow-md p-4 hover:shadow-lg transition duration-300">
      <Image src={image} alt={name} width={400} height={400} className="rounded" />
      <h3 className="mt-4 text-xl font-serif">{name}</h3>
      <p className="text-gray-600">${price}</p>
      <Link href={`/shop/${slug}`}>
        <Button variant="outline" className="mt-3">
          View Product
        </Button>
      </Link>
    </div>
  );
}
