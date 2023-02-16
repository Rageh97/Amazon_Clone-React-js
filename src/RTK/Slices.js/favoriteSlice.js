import { createSlice } from "@reduxjs/toolkit";
import {  toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const initialState = {
  favoriteItems: localStorage.getItem("favoriteItems")
    ? JSON.parse(localStorage.getItem("favoriteItems"))
    : [],
    quantity: 0,
    totalPrice: 0,
};
const favoriteSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    addToFavorite: (state, action) => {
      const findIndex = state.favoriteItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (findIndex >= 0) {
        state.favoriteItems[findIndex].quantity += 1;
        toast.info("Already You are added This Product !", {
          position: toast.POSITION.TOP_RIGHT,
        });
      } else {
        const product = { ...action.payload, quantity: 1 };
        state.favoriteItems.push(product);
        toast.success(`you are added ${action.payload.title} to Favorite`, {
          position: toast.POSITION.TOP_RIGHT,
        });
      }
      localStorage.setItem("favoriteItems", JSON.stringify(state.favoriteItems));
    },
    removeFromFavorite: (state, action) => {
      const deletItem = state.favoriteItems.filter(
        (item) => item.id !== action.payload.id
      );
      state.favoriteItems = deletItem;
      localStorage.setItem("favoriteItems", JSON.stringify(state.favoriteItems));
      toast.error(`you are removed ${action.payload.title} from cart`, {
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
    clearFavorite: (state) => {
      state.favoriteItems = [];
      toast.error("Cart Cleared", {
        position: toast.POSITION.TOP_RIGHT,
      });
      localStorage.setItem("favoriteItems", JSON.stringify(state.favoriteItems));
    },
    subTotal: (state, action) => {
      let { total, quantity } = state.favoriteItems.reduce(
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
export default favoriteSlice.reducer;
export const { addToFavorite , subTotal, removeFromFavorite, clearFavorite } =
  favoriteSlice.actions;
