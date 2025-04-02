import { createSlice } from "@reduxjs/toolkit";

import products from "../../data/products";

export const GlobalState = {

    products: products,
}

export const productsSlice = createSlice({
    name: 'products',
    initialState: GlobalState,
    reducers: {
    },

}

);

export const  selectAllProducts  = (GlobalState) => GlobalState.products.products;
export default productsSlice.reducer; 