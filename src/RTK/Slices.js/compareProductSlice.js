import { createSlice } from "@reduxjs/toolkit";
import {  toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const initialState = {
  compareItems: localStorage.getItem("compareItems")
    ? JSON.parse(localStorage.getItem("compareItems"))
    : [],
    quantity: 0,
    totalPrice: 0,
};
const compareProductSlice = createSlice({
  name: "compare",
  initialState,
  reducers: {
    addToCompare: (state, action) => {
      const findIndex = state.compareItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (findIndex >= 0) {
        state.compareItems[findIndex].quantity += 1;
        toast.info("Already You are added This Product !", {
          position: toast.POSITION.TOP_RIGHT,
        });
      } else {
        const product = { ...action.payload, quantity: 1 };
        state.compareItems.push(product);
        toast.success(`you are added ${action.payload.title} to Compare Page`, {
          position: toast.POSITION.TOP_RIGHT,
        });
      }
      localStorage.setItem("compareItems", JSON.stringify(state.compareItems));
    },
    removeFromCompare: (state, action) => {
      const deletItem = state.compareItems.filter(
        (item) => item.id !== action.payload.id
      );
      state.compareItems = deletItem;
      localStorage.setItem("compareItems", JSON.stringify(state.compareItems));
      toast.error(`you are removed ${action.payload.title} from Compare Page`, {
        position: toast.POSITION.TOP_RIGHT,
      });
    },
    // decreaseCart: (state, action) => {
    //   const findIndex = state.favoriteItems.findIndex(
    //     (item) => item.id === action.payload.id
    //   );
    //   if (state.favoriteItems[findIndex].quantity > 1) {
    //     state.favoriteItems[findIndex].quantity -= 1;
    //   } else if (state.favoriteItems[findIndex].quantity === 1) {
    //     const deletItem = state.favoriteItems.filter(
    //       (item) => item.id !== action.payload.id
    //     );
    //     state.favoriteItems = deletItem;
    //     toast.error(`you are removed ${action.payload.title} from cart`, {
    //       position: toast.POSITION.TOP_RIGHT,
    //     });
    //   }
    //   toast.error(`you are decreased ${action.payload.title} cart quantity`, {
    //     position: toast.POSITION.TOP_RIGHT,
    //   });
    //   localStorage.setItem("favoriteItems", JSON.stringify(state.favoriteItems));
    // },
    clearCompare: (state) => {
      state.compareItems = [];
      toast.error("Compare Product Page Cleared", {
        position: toast.POSITION.TOP_RIGHT,
      });
      localStorage.setItem("compareItems", JSON.stringify(state.compareItems));
    },
    subTotal: (state, action) => {
      let { total, quantity } = state.compareItems.reduce(
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
export default compareProductSlice.reducer;
export const { addToCompare , subTotal, removeFromCompare, clearCompare } =
  compareProductSlice.actions;
