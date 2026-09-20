import { create } from "zustand";
import type { CartItem } from "@/types";

interface CartState {
  items: CartItem[];
  setItems: (items: CartItem[]) => void;
  addItem: (item: CartItem) => void;
  removeItem: (id: number) => void;
  updateQty: (id: number, qty: number) => void;
  clear: () => void;
}

/**
 * Cart state di-mirror di sini supaya komponen seperti Header (badge counter)
 * tidak perlu re-fetch API tiap kali render. Sumber kebenaran tetap
 * json-server (`/cart`) — store ini di-sync via React Query hook
 * (lihat src/hooks/use-cart.ts, ditambahkan saat halaman cart dibangun).
 */
export const useCartStore = create<CartState>((set) => ({
  items: [],
  setItems: (items) => set({ items }),
  addItem: (item) =>
    set((state) => ({ items: [...state.items, item] })),
  removeItem: (id) =>
    set((state) => ({ items: state.items.filter((i) => i.id !== id) })),
  updateQty: (id, qty) =>
    set((state) => ({
      items: state.items.map((i) => (i.id === id ? { ...i, qty } : i)),
    })),
  clear: () => set({ items: [] }),
}));
