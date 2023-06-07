import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./auth/Auth.reducers";
import productsReducer from "./products/products.reducers";
import cartReducer from "./cart/Cart.reducers";

export default combineReducers({
    auth: authReducer,
    products: productsReducer,
    cart: cartReducer
});