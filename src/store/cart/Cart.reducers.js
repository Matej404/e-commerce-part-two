import { createSlice } from "@reduxjs/toolkit";
import { addItem, removeItem, loadCart } from "./Cart.action"; 

const initialState = {};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(addItem.fulfilled, (state, action) => {
            const { item } = action.payload;
            state.items.push(item);
        })
        .addCase(removeItem.fulfilled, (state, action) => {
            const { item } = action.payload;
            state.items = state.items.filter((product) => product.cartItemId !== item);
        })
        .addCase(loadCart.fulfilled, (state, action) => {
            const { cart } = action.payload;
            Object.assign(state, cart);
        })
    }
})

export default cartSlice.reducer;