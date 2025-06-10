// store/features/user/userSlice.js
import { createSlice } from '@reduxjs/toolkit'
import { userLogin } from '@/store/actions/userActions';

const userReducers = createSlice({
  name: 'user',
  initialState: {
    loading: false,
    error: null,
    loginData: null,
    isUserLoggedIn: false
  },
  reducers: {
    setUserLoginStatus: (state, action) => {
      state.isUserLoggedIn = action.payload;
    },
    clearUserLoginData: (state) => {
      state.loginData = null;
      state.isUserLoggedIn = false;
      state.error = null;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(userLogin.pending, (state) => {
        state.loading = true
        state.loginData = null,
        state.error = null
      })
      .addCase(userLogin.fulfilled, (state, action) => {
        state.loading = false
        state.loginData = action.payload,
        state.error = null
      })
      .addCase(userLogin.rejected, (state, action) => {
        console.error("Login failed:", action.payload);
        state.loading = false
        state.loginData = null,
        state.error = action.payload
      })
  }
})

export const { setUserLoginStatus, clearUserLoginData } = userReducers.actions;

export default userReducers.reducer
