import { configureStore } from '@reduxjs/toolkit';
import { apiDataSlice } from '../features/products/apiproductsSlice';
// import productsReducer from '../features/products/productsSlice'; // Import correctly

export const store = configureStore({
  reducer: {
    apiProducts: apiDataSlice.reducer
    
    // products: productsReducer, // Add products reducer
  },
});
