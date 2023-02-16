import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { STATUS } from "../../Utilts.js/Status";
const initialState = {
  categories: [],
  categoriesStatus: STATUS.IDLE,
  categoriesProducts: [],
  categoriesProductsStatus: STATUS.IDLE,
};
// Fetch Category............
export const fetchCategories = createAsyncThunk("category/fetch", async () => {
  const res = await fetch("https://dummyjson.com/products/categories");
  const data = await res.json();
  return data;
});
// Fetch Category Products............
export const fetchProductsOfCategory = createAsyncThunk(
  "category-products/fetch",
  async (category) => {
    const response = await fetch(
      `https://dummyjson.com/products/category/${category}`
    );
    const data = await response.json();
    return data.products;
  }
);
const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.pending, (state, action) => {
        state.categoriesStatus = STATUS.LOADING;
      })

      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.categories = action.payload;
        state.categoriesStatus = STATUS.SUCCEEDED;
      })

      .addCase(fetchCategories.rejected, (state, action) => {
        state.categoriesStatus = STATUS.FAILED;
      })
      .addCase(fetchProductsOfCategory.pending, (state, action) => {
        state.categoriesProductsStatus = STATUS.LOADING;
      })

      .addCase(fetchProductsOfCategory.fulfilled, (state, action) => {
        state.categoriesProducts = action.payload;
        state.categoriesProductsStatus = STATUS.SUCCEEDED;
      })

      .addCase(fetchProductsOfCategory.rejected, (state, action) => {
        state.categoriesProductsStatus = STATUS.FAILED;
      });
  },
});

export const getAllCategory = (state) => state.category.categories;
export const getAllProductsByCategory = (state) =>
  state.category.categoriesProducts;
export const getAllProductsByCategoryStatus = (state) =>
  state.category.categoriesProductsStatus;
export default categorySlice.reducer;
