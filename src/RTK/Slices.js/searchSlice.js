import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { STATUS } from "../../Utilts.js/Status";

export const fetchSearchItem =createAsyncThunk ("fetch-searchitem", async (searchTerm) => {
    const res = await fetch(
      `https://dummyjson.com/products/search?q=${searchTerm}`
    );
    const data = await res.json();
    return data.products;
  });
const initialState = {
  searchProducts: [],
  searchProductsStatus: STATUS.IDLE,
};
const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    clearSearch: (state, action) => {
        state.searchProducts = [];
    }
},
  extraReducers: (builder) => {
    builder
    .addCase(fetchSearchItem.pending, (state, action) => {
        state.searchProductsStatus = STATUS.LOADING;
    })

    .addCase(fetchSearchItem.fulfilled, (state, action) => {
        state.searchProducts = action.payload;
        state.searchProductsStatus = STATUS.SUCCEEDED;
    })

    .addCase(fetchSearchItem.rejected, (state, action) => {
        state.searchProductsStatus = STATUS.FAILED;
    })
}
});
export const { setSearchTerm, clearSearch } = searchSlice.actions;
export const getSearchProducts = (state) => state.search.searchProducts;
export const getSearchProductsStatus = (state) => state.search.searchProductsStatus;
export default searchSlice.reducer;
