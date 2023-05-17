import { createAsyncThunk } from "@reduxjs/toolkit";
import { register } from "../../apis/auth";

export const registerUser = createAsyncThunk(
    'auth/registerUser',
    async (credentials, thunkAPI) => {
        try {
            await register(credentials);
            return {};
        } catch(err) {
            throw err;
        }
    }
);