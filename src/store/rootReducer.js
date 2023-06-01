import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./auth/Auth.reducers";
import productsReducer from "./products/products.reducers";

export default combineReducers({
    auth: authReducer,
    products: productsReducer
});