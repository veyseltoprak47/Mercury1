"use client";

import Link from "next/link";
import CartDrawer from "@/components/cart/CartDrawer";

export default function Navbar() {
  return (
    <nav className="w-full flex items-center justify-between px-6 py-4 bg-black text-white border-b border-neutral-800">
      <Link href="/" className="text-2xl font-serif tracking-widest hover:opacity-90">
        ArkMercury
      </Link>
      <div className="flex items-center gap-6 text-sm uppercase">
        <Link href="/shop" className="hover:text-yellow-500 transition">Shop</Link>
        <Link href="/about" className="hover:text-yellow-500 transition">About</Link>
        <Link href="/contact" className="hover:text-yellow-500 transition">Contact</Link>
        <CartDrawer />
      </div>
    </nav>
  );
}
