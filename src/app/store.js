import { configureStore } from '@reduxjs/toolkit';
import { apiDataSlice } from '../features/products/apiproductsSlice';

export const store = configureStore({
  reducer: {
    apiProducts: apiDataSlice.reducer

  },
});
