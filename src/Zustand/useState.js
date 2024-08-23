import { create } from "zustand";
import { confirmAlert } from 'react-confirm-alert'; // Ensure this is imported
import 'react-confirm-alert/src/react-confirm-alert.css'; // Ensure the CSS is imported

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
            confirmAlert({
              title: 'Confirm to delete',
              message: 'Are you sure you want to delete this item?',
              buttons: [
                {
                  label: 'Yes',
                  onClick: () => {
                    set((state) => ({
                      cart: state.cart.filter((item) => item.id !== id)
                    }));
                  }
                },
                {
                  label: 'No',
                  onClick: () => {
                    return;  // Do nothing, just close the dialog
                  }
                }
              ]
            });
            return item; // Temporarily return item until confirmation is handled
          }
        }
        return item;
      });
      
      return { cart: updatedCart };
    });
  },
}));

export default useCart;
