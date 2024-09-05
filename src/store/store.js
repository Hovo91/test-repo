import { configureStore } from '@reduxjs/toolkit';
import { searchSlice } from './searchSlice';
import { productsSlice } from './products/productsSlice';

export const store = configureStore({
  reducer: {
    search: searchSlice.reducer,
    products: productsSlice.reducer,
  },
});
