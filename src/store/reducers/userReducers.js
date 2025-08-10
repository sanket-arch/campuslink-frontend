// store/features/user/userSlice.js
import { createSlice } from "@reduxjs/toolkit";
import {
  checkUserexistsByUsername,
  insertUser,
  userLogin,
  userLogout,
} from "@/store/actions/userActions";
import { set } from "lodash";

const userReducers = createSlice({
  name: "user",
  initialState: {
    loading: false,
    error: null,
    loginData: null,
    isUserLoggedIn: false,
    isUserRegistered: false,
    usernameExists: false,
  },
  reducers: {
    setUserLoginStatus: (state, action) => {
      state.isUserLoggedIn = action.payload;
    },
    clearUserLoginData: (state) => {
      state.loginData = null;
      state.isUserLoggedIn = false;
      state.error = null;
    },
    setUsernameExists: (state, action) => {
      state.usernameExists = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(userLogin.pending, (state) => {
        state.loading = true;
        (state.loginData = null),
          (state.isUserLoggedIn = false),
          (state.error = null);
      })
      .addCase(userLogin.fulfilled, (state, action) => {
        state.loading = false;
        (state.loginData = action.payload), (state.isUserLoggedIn = true);
        state.error = null;
      })
      .addCase(userLogin.rejected, (state, action) => {
        state.loading = false;
        (state.loginData = null), (state.isUserLoggedIn = false);
        state.error = action.payload;
      })
      .addCase(userLogout.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(userLogout.fulfilled, (state) => {
        state.loading = false;
        state.loginData = null;
        state.isUserLoggedIn = false;
        state.error = null;
      })
      .addCase(userLogout.rejected, (state, action) => {
        state.loading = false;
        (state.loginData = null), (state.isUserLoggedIn = false);
        state.error = action.payload;
      })
      .addCase(insertUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(insertUser.fulfilled, (state, action) => {
        state.loading = false;
        state.isUserRegistered = true;
        state.error = null;
      })
      .addCase(insertUser.rejected, (state, action) => {
        state.loading = false;
        state.isUserRegistered = false;
        state.error = action.payload;
      })
      .addCase(checkUserexistsByUsername.pending, (state) => {
        state.loading = true;
        state.usernameExists = false;
        state.error = null;
      })
      .addCase(checkUserexistsByUsername.fulfilled, (state, action) => {
        state.loading = false;
        state.usernameExists = action.payload;
        state.error = null;
      })
      .addCase(checkUserexistsByUsername.rejected, (state, action) => {
        state.loading = false;
        state.usernameExists = false;
        state.error = action.payload;
      });
  },
});

export const { setUserLoginStatus, clearUserLoginData, setUsernameExists } =
  userReducers.actions;

export default userReducers.reducer;
