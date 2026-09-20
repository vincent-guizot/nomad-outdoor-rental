"use client";

import { Search, Bell, Heart, ShoppingCart } from "lucide-react";
import { useCartStore } from "@/store/cart-store";

export function Header() {
  // Cart count diambil dari Zustand — bukan fetch API, karena ini
  // client-side ephemeral state sebelum ada auth session sungguhan.
  const itemCount = useCartStore((state) => state.items.length);

  return (
    <header className="flex items-center gap-4 border-b border-nomad-100 bg-white px-6 py-4">
      <div className="flex-1 relative">
        <Search
          size={16}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-nomad-400"
        />
        <input
          type="text"
          placeholder="Search for gear, brands, or inspiration..."
          className="w-full rounded-full bg-nomad-50 pl-9 pr-4 py-2 text-sm outline-none focus:ring-2 focus:ring-nomad-400"
        />
      </div>

      <button aria-label="Wishlist" className="text-nomad-700 hover:text-nomad-950">
        <Heart size={20} />
      </button>
      <button aria-label="Notifications" className="text-nomad-700 hover:text-nomad-950">
        <Bell size={20} />
      </button>
      <button
        aria-label="Cart"
        className="relative text-nomad-700 hover:text-nomad-950"
      >
        <ShoppingCart size={20} />
        {itemCount > 0 && (
          <span className="absolute -top-2 -right-2 flex h-4 w-4 items-center justify-center rounded-full bg-nomad-600 text-[10px] text-white">
            {itemCount}
          </span>
        )}
      </button>
    </header>
  );
}
