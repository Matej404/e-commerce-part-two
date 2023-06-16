import { createAsyncThunk } from "@reduxjs/toolkit";
import { register, login, logout, isLoggedIn } from "../../apis/auth";

export const registerUser = createAsyncThunk(
    'auth/registerUser',
    async (credentials, thunkAPI) => {
        try {
            await register(credentials);
            return {
                isAuthenticated: true
            };
        } catch(err) {
            throw err;
        }
    }
);

export const loginUser = createAsyncThunk(
    'auth/loginUser',
    async(credentials, thunkAPI) => {
        try {
            const response = await login(credentials);
            return {
                user: response,
                isAuthenticated: true
            }
        } catch(err) {
            throw(err);
        }
    }
);

export const checkLoginStatus = createAsyncThunk(
    'auth/checkLogin',
    async(param, thunkAPI) => {
        try {
            const response = await isLoggedIn();

            return {
                user: response.user,
                isAuthenticated: true,
                cart: response.cart
            }
        } catch(err) {
            throw err
        }
    }
)

// logout user
export const logoutUser = createAsyncThunk(
    'auth/logautUser',
    async(credentials, thunkAPI) => {
        try {
            await logout();

            return {
                isAuthenticated: false
            }
        } catch(err) {
            throw(err);
        }
    }
)