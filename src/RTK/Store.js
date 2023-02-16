import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "./Slices.js/categorySlice";
import cartReducer from "./Slices.js/CartSlice";
import productsReducer from "./Slices.js/productsSlice";
import searchReducer from "./Slices.js/searchSlice";
import favoriteReducer from "./Slices.js/favoriteSlice";
import compareProductReducer from "./Slices.js/compareProductSlice";
const store = configureStore({
  reducer: {
    category: categoryReducer,
    cart: cartReducer,
    products: productsReducer,
    search: searchReducer,
    favorite: favoriteReducer,
    compare: compareProductReducer,
  },
});
export default store;
