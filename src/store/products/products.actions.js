import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchProducts, fetchProduct } from "../../apis/product";

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

export const loadProduct = createAsyncThunk(
    'products/loadProduct',
    async(productId, thunkAPI) => {
        try {
            const response = await fetchProduct(productId);

            return {
                product: response
            }
        } catch(err) {
            throw(err);
        }

    }
)