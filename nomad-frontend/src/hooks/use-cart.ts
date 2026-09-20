import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { apiClient } from "@/lib/api";
import { useCartStore } from "@/store/cart-store";
import type { CartItem } from "@/types";

const CART_KEY = ["cart"];

/**
 * Fetch cart milik userId tertentu dari json-server, lalu sync ke Zustand
 * supaya komponen non-React-Query (misal Header badge) tetap dapat data
 * tanpa subscribe ke query cache-nya.
 */
export function useCart(userId: number) {
  const setItems = useCartStore((state) => state.setItems);

  return useQuery({
    queryKey: [...CART_KEY, userId],
    queryFn: async () => {
      const data = await apiClient<CartItem[]>(`/cart?userId=${userId}`);
      setItems(data);
      return data;
    },
    enabled: !!userId,
  });
}

export function useAddToCart() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (item: Omit<CartItem, "id">) =>
      apiClient<CartItem>("/cart", {
        method: "POST",
        body: JSON.stringify(item),
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: CART_KEY });
    },
  });
}

export function useUpdateCartQty() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, qty }: { id: number; qty: number }) =>
      apiClient<CartItem>(`/cart/${id}`, {
        method: "PATCH",
        body: JSON.stringify({ qty }),
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: CART_KEY });
    },
  });
}

export function useRemoveFromCart() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: number) =>
      apiClient<void>(`/cart/${id}`, { method: "DELETE" }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: CART_KEY });
    },
  });
}
