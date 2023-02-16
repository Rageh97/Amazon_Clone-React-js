import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { STATUS } from "../../Utilts.js/Status";
import SingleProduct from "./../../Pages/SingleProduct";
const initialState = {
  products: [],
  productsStatus: STATUS.IDLE,
  productSingle: [],
  productSingleStatus: STATUS.IDLE,
};
// Fetch products limit............
export const fetchProducts = createAsyncThunk("products/fetch", async (limit) => {
  const res = await fetch(`https://dummyjson.com/products?limit=${limit}`);
  const data = await res.json();
  return data.products;
});
// Fetch single Product............
export const fetchSingleProduct = createAsyncThunk(
  "single-product/fetch",
  async (id) => {
    const res = await fetch(`https://dummyjson.com/products/${id}`);
    const data = await res.json();
    return data;
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state, action) => {
        state.productsStatus = STATUS.LOADING;
      })

      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.products = action.payload;
        state.productsStatus = STATUS.SUCCEEDED;
      })

      .addCase(fetchProducts.rejected, (state, action) => {
        state.productsStatus = STATUS.FAILED;
      })
      .addCase(fetchSingleProduct.pending, (state, action) => {
        state.productSingleStatus = STATUS.LOADING;
      })

      .addCase(fetchSingleProduct.fulfilled, (state, action) => {
        state.productSingle = action.payload;
        state.productSingleStatus = STATUS.SUCCEEDED;
      })

      .addCase(fetchSingleProduct.rejected, (state, action) => {
        state.productSingleStatus = STATUS.FAILED;
      });
  },
});
export default productsSlice.reducer;
export const getAllProducts = (state) => state.products.products;
export const getAllProductsStatus = (state) => state.products.productsStatus;
export const getSingleProduct = (state) => state.products.productSingle;
export const getSingleProductStatus = (state) =>
  state.products.productSingleStatus;

