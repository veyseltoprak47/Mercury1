"use client";

import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { useCart } from "@/lib/store/cart";

export default function CartDrawer() {
  const { items, removeFromCart, clearCart, getTotalItems } = useCart();

  return (
    <Sheet>
            <SheetTrigger asChild>
        <Button
            variant="ghost"
            className="relative px-4 py-2 border border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black transition rounded-full uppercase text-xs tracking-wide"
        >
            Cart ({getTotalItems()})
        </Button>
        </SheetTrigger>

      <SheetContent side="right" className="w-[90vw] sm:w-[400px] bg-neutral-900 text-white border-l border-neutral-700 px-6 py-8 overflow-y-auto">

        <SheetHeader>
          <SheetTitle className="text-amber-100">Your Cart</SheetTitle>
        </SheetHeader>

        <div className="mt-4 flex flex-col gap-4">
          {items.length === 0 ? (
            <p className="text-sm text-gray-500">Your cart is empty.</p>
          ) : (
            items.map((item) => (
              <div key={item.id} className="border-b pb-2">
                    <h3 className="text-lg font-medium tracking-wide">{item.name}</h3>
                    <p className="text-sm text-gray-400">Qty: {item.quantity}</p>
                    <p className="text-sm text-gray-400">${item.price}</p>
                <Button
                  variant="ghost"
                  onClick={() => removeFromCart(item.id)}
                  className="mt-1 text-red-500 hover:underline"
                >
                  Remove
                </Button>
              </div>
            ))
          )}
        </div>

        {items.length > 0 && (
          <div className="mt-6 flex flex-col gap-3">
            <Button variant="default" className="w-full mt-4 bg-yellow-500 text-black hover:bg-yellow-400">
              Checkout
            </Button>
            <Button variant="outline" onClick={clearCart}>
              Clear Cart
            </Button>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
}
