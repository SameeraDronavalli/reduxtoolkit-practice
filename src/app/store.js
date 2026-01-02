import { configureStore } from '@reduxjs/toolkit';
import { apiDataSlice } from '../features/products/apiproductsSlice';// This slice handles API products data, including loading, success, and error states

// The store holds the global state of the application

export const store = configureStore({
  reducer: {
    apiProducts: apiDataSlice.reducer

  },
});
