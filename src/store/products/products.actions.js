import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchProducts } from "../../apis/product";

export const loadProducts = createAsyncThunk(
    'products/loadProducts',
    async(params, thunkAPI) => {
        try {
            const response = await fetchProducts();

            return {
                products: response
            }
        } catch(err) {
            throw err;
        }
    }
)