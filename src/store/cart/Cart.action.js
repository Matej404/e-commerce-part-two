import { createAsyncThunk } from "@reduxjs/toolkit";
import { addToCart } from "../../apis/cart";

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
        } catch(err) {
            throw err;
        }
    }
)