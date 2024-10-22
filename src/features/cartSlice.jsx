import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchProducts as fetchProductsAPI } from '../api';

const initialState = {
  cartItems: [],
  totalQuantity: 0,
  totalAmount: 0,
  products: [],
  loading: false,
  error: null,
};

export const fetchProducts = createAsyncThunk(
  'cart/fetchProducts',
  async () => {
    const products = await fetchProductsAPI();
    return products;
  }
);

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
      const item = state.cartItems.find((item) => item.id === action.payload.id);
      if (item) {
        item.quantity++;
      } else {
        state.cartItems.push({ ...action.payload, quantity: 1 });
      }
      state.totalQuantity++;
      state.totalAmount += action.payload.price;
    },
    removeFromCart(state, action) {
      const item = state.cartItems.find((item) => item.id === action.payload.id);
      if (item && item.quantity > 1) {
        item.quantity--;
        state.totalQuantity--;
        state.totalAmount -= action.payload.price;
      }
    },
    removeItem(state, action) {
      const item = state.cartItems.find((item) => item.id === action.payload.id);
      if (item) {
        state.totalQuantity -= item.quantity;
        state.totalAmount -= item.quantity * item.price;
        state.cartItems = state.cartItems.filter((i) => i.id !== action.payload.id);
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { addToCart, removeFromCart, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
