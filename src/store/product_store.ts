// store.ts
import { create } from "zustand";

import { toast } from "@/hooks/use-toast";
import { CartItem, Product } from "@/types";




interface ProductStore {
  cart: CartItem[];
  favorites: Product[];
  toggleFavorite: (product: Product) => void;
  updateCartQuantity: (product: Product, quantity: number) => void;
}

export const useProductStore = create<ProductStore>((set) => ({
  cart: [],
  favorites: [],
  toggleFavorite: (product) =>
    set((state) => ({
      favorites: state.favorites.some((fav) => fav.id === product.id)
        ? state.favorites.filter((fav) => fav.id !== product.id)
        : [...state.favorites, product],
    })),
  updateCartQuantity: (product, quantity) => {
  set((state) => {
    const existingItemIndex = state.cart.findIndex(
      (item) => item.id === product.id
    );

    if (quantity === 0) {
      return {
        cart: state.cart.filter((item) => item.id !== product.id),
      };
    }

    if (existingItemIndex > -1) {
      // Update the quantity if the item already exists in the cart
      const updatedCart = [...state.cart];
      updatedCart[existingItemIndex] = {
        ...updatedCart[existingItemIndex],
        quantity,
      };

      return { cart: updatedCart };
    }

    return {
      cart: [...state.cart, { ...product, quantity }],
    };
  });

  // Toast notification (ensure this runs after set)
  toast({
    title: "Success!",
    description: `Product ${product.name} has been added successfully.`,
  });
},

}));
