"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import clsx from "clsx";
import { Search } from "lucide-react";
import CartDrawer from "@/components/cart/CartDrawer";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={clsx(
        "fixed top-0 left-0 w-full z-50 bg-black border-b border-neutral-800 backdrop-blur-md transition-all duration-300",
        scrolled ? "py-2 shadow-md" : "py-4"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between relative">
        {/* Left: Search Toggle */}
        <div className="flex-1 flex items-center gap-2">
          {showSearch ? (
            <input
              type="text"
              autoFocus
              placeholder="Search"
              className="bg-neutral-800 text-sm text-white px-3 py-1 rounded-md placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition w-full max-w-xs"
              onBlur={() => setShowSearch(false)}
            />
          ) : (
            <button
              onClick={() => setShowSearch(true)}
              aria-label="Open search"
              className="text-neutral-400 hover:text-white transition"
            >
              <Search size={20} />
            </button>
          )}
        </div>

        {/* Center: Brand */}
        <Link
          href="/"
          className="absolute left-1/2 -translate-x-1/2 text-white font-serif text-lg"
        >
          ArkMercury
        </Link>

        {/* Right: Cart */}
        <div className="flex-1 flex justify-end">
          <CartDrawer />
        </div>
      </div>
    </header>
  );
}
