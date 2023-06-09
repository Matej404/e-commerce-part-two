import { createSlice } from "@reduxjs/toolkit";
import { addItem, removeItem } from "./Cart.action"; 

const initialState = {};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(addItem.fulfilled, (state, action) => {
            const item = action.payload;
            state.item.push(item);
        })
        .addCase(removeItem.fulfilled, (state, action) => {
            const { item } = action.payload;
            state.items = state.items.filter((product) => product.cartItemId !== item);
        })
    }
})

export default cartSlice.reducer;