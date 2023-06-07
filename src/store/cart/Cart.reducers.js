import { createSlice } from "@reduxjs/toolkit";
import { addItem } from "./Cart.action"; 

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
    }
})

export default cartSlice.reducer;