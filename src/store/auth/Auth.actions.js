import { createAsyncThunk } from "@reduxjs/toolkit";
import { register, login } from "../../apis/auth";

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