import { createSlice } from "@reduxjs/toolkit";
import { registerUser, loginUser } from "./Auth.actions";

const initialState = {
    isFetching: false,
    isAuthenticated: false,
    error: null
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
          // Registration success
          .addCase(registerUser.fulfilled, (state, action) => {
            const { isAuthenticated, error } = action.payload;
            state.isAuthenticated = isAuthenticated;
            state.error = error;
          })
          // Registration failure
          .addCase(registerUser.rejected, (state, action) => {
            const { error } = action.payload;
            state.isAuthenticated = false;
            state.error = error;
          })

          //Login success
          .addCase(loginUser.fulfilled, (state, action) => {
            const { isAuthenticated } = action.payload;
            state.isAuthenticated = isAuthenticated;
          })
          //Login failure
          .addCase(loginUser.rejected, (state, action) => {
            const { error } = action.payload;
            state.isAuthenticated = false;
            state.error = error;
          })
    }
})

export default authSlice.reducer;