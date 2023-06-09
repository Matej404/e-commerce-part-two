import { createAsyncThunk } from "@reduxjs/toolkit";
import { addToCart, removeFromCart } from "../../apis/cart";

export const addItem = createAsyncThunk(
    'cart/addItem',
    async({product, qty}, thunkAPI) => {
        try {
            const response = await addToCart(product.id, qty);

            const item = {
                ...product,
                cartItemId: response.id,
                qty
            }

            return { item }
        } catch(err) {
            throw err;
        }
    }
)

export const removeItem = createAsyncThunk(
    'cart/removeItem',
    async(cartItemId, thunkAPI) => {
        try {
            await removeFromCart(cartItemId);

            return {
                item: cartItemId
            }
        } catch(err) {
            throw err;
        }
    }
)