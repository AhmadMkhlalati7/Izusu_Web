// store.ts
import { create } from "zustand";

import { toast } from "@/hooks/use-toast";
import { Product } from "@/types";


interface CartItem extends Product {
  quantity: number;
}

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
        (item) => item.id === product.id,
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
          ...state.cart[existingItemIndex],
          quantity,
        };
        console.log(updatedCart);
        return { cart: updatedCart };
      }

      console.log([...state.cart, { ...product, quantity }]);

      return {
        cart: [...state.cart, { ...product, quantity }],
      };
    });
    toast({
      title: "Success !!",
      description: "Product has been added successfully.",
    });
  },
}));
