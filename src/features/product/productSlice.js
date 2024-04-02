import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchAllProducts } from "./ProductAPI";

const initialState = {
  products: [],
  status: "idle",
};

export const fetchAllProductsAsync = createAsyncThunk(
  "product/fetchCount",
  async () => {
    const response = await fetchAllProducts();
    return response.data;
  }
);

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllProductsAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAllProductsAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.products = action.payload;
      });
  },
});

export const selectProducts = (state) => state.product.products;

export default productSlice.reducer;
