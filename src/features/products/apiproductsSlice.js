import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
export const initialState = { // multiple states
    data: [],
    status: '',
    error: false,
}

//api calling
export const apiData = createAsyncThunk("data/fetch", async () => {
    try {
        const response = await axios.get("https://dummyjson.com/products")
        return response.data
    }
    catch (error) { 
        throw (error)
    }
}) 

//
export const apiDataSlice = createSlice({
    initialState,
    name: "apiproducts", // slicename
    reducers: { 

    },
    extraReducers: (builder) => {
        builder
            .addCase(apiData.pending, (state) => {
                state.status = "Loading"
            })
            .addCase(apiData.fulfilled, (state, action) => {
                state.data = action.payload
                state.status = "Success"
            })
            .addCase(apiData.rejected, (state, action) => {
                state.error = action.error.message
                state.status = "error"
            })
    }
})

export default apiDataSlice.reducer;
