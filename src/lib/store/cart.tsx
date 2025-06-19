"use client";

import { create } from "zustand";
import { Product } from "@/lib/products";

export interface CartItem extends Product {
  quantity: number;
}

interface CartState {
  items: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (id: string) => void;
  clearCart: () => void;
  getTotalItems: () => number;
}

export const useCart = create<CartState>((set, get) => ({
  items: [],

  addToCart: (product) => {
    const existing = get().items.find((item) => item.id === product.id);

    if (existing) {
      set({
        items: get().items.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
      });
    } else {
      set({
        items: [...get().items, { ...product, quantity: 1 }],
      });
    }
  },

  removeFromCart: (id) => {
    set({
      items: get().items.filter((item) => item.id !== id),
    });
  },

  clearCart: () => set({ items: [] }),

  getTotalItems: () =>
    get().items.reduce((total, item) => total + item.quantity, 0),
}));
