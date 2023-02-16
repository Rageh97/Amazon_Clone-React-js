import { createSlice } from "@reduxjs/toolkit";
import {  toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const initialState = {
  cartItems: localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [],
  quantity: 0,
  totalPrice: 0,
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const findIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (findIndex >= 0) {
        state.cartItems[findIndex].quantity += 1;
        toast.info("Increased your product !", {
          position: toast.POSITION.TOP_RIGHT,
        });
      } else {
        const product = { ...action.payload, quantity: 1 };
        state.cartItems.push(product);
        toast.success(`you are added ${action.payload.title} to cart`, {
          position: toast.POSITION.TOP_RIGHT,
        });
      }
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    removeFromCart: (state, action) => {
      const deletItem = state.cartItems.filter(
        (item) => item.id !== action.payload.id
      );
      state.cartItems = deletItem;
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      toast.error(`you are removed ${action.payload.title} from cart`, {
        position: toast.POSITION.TOP_RIGHT,
      });
    },
    decreaseCart: (state, action) => {
      const findIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (state.cartItems[findIndex].quantity > 1) {
        state.cartItems[findIndex].quantity -= 1;
      } else if (state.cartItems[findIndex].quantity === 1) {
        const deletItem = state.cartItems.filter(
          (item) => item.id !== action.payload.id
        );
        state.cartItems = deletItem;
        toast.error(`you are removed ${action.payload.title} from cart`, {
          position: toast.POSITION.TOP_RIGHT,
        });
      }
      toast.error(`you are decreased ${action.payload.title} cart quantity`, {
        position: toast.POSITION.TOP_RIGHT,
      });
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    clearCart: (state) => {
      state.cartItems = [];
      toast.error("Cart Cleared", {
        position: toast.POSITION.TOP_RIGHT,
      });
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    subTotal: (state, action) => {
      let { total, quantity } = state.cartItems.reduce(
        (total, item) => {
          const { price, quantity } = item;
          const itemTotal = price * quantity;
          total.total += itemTotal;
          total.quantity += quantity;
          return total;
        },
        {
          total: 0,
          quantity: 0,
        }
      );
      state.quantity = quantity
      state.totalPrice = total
    },
  },
});
export default cartSlice.reducer;
export const { addToCart , subTotal, removeFromCart, clearCart, decreaseCart } =
  cartSlice.actions;
