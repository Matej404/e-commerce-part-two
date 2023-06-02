import { createSlice } from "@reduxjs/toolkit";
import { loadProducts } from "./products.actions";

const initialState = {};

const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
        .addCase(loadProducts.fulfilled, (state, action) => {
            const { products } = action.payload;
            products.forEach((product) => {
                const { id } = product;
                state[id] = product;
            })
        })
    }
})

export default productSlice.reducer;