import { create } from "zustand";

const useCart = create((set) => ({
  cart: [],
  addToCart: (item) => {
    set((state) => ({
      cart: [...state.cart, item],
    }));
  },
  removeFromCart: (id) => {
    set((state) => ({
      cart: state.cart.filter((item) => item.id !== id),
    }));
  },
  increaseQuantity: (id) => {
    set((state) => ({
      cart: state.cart.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      ),
    }));
  },
  decreaseQuantity: (id) => {
    set((state) => {
      const updatedCart = state.cart.map((item) => {
        if (item.id === id) {
          if (item.quantity > 1) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return null;
          }
        }
        return item;
      }).filter(Boolean);

      return { cart: updatedCart };
    });
  },
}));

export default useCart;
