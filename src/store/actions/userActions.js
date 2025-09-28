import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "@/lib/api";
import { ACTION_TYPES } from "@/lib/constants";
import {
  checkUserExistsUrl,
  insertUserUrl,
  redirectUrl,
  userLoginUrl,
  userLogoutUrl,
} from "@/lib/constants/urls";
import Cookies from "js-cookie";

export const userLogin = createAsyncThunk(
  ACTION_TYPES.LOGIN,
  async ({ username, password }, thunkAPI) => {
    try {
      const response = await api.post(userLoginUrl, { username, password });
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(
        err.response?.data?.message || err.message
      );
    }
  }
);

export const userLogout = createAsyncThunk(
  ACTION_TYPES.LOGOUT,
  async (_, thunkAPI) => {
    try {
      const response = await api.post(userLogoutUrl);
      Cookies.remove("auth_token");
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(
        err.response?.data?.message || err.message
      );
    }
  }
);
export const insertUser = createAsyncThunk(
  ACTION_TYPES.REGISTER,
  async (userData, thunkAPI) => {
    try {
      const response = await api.post(insertUserUrl, userData);
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(
        err.response?.data?.message || err.message
      );
    }
  }
);
export const checkUserexistsByUsername = createAsyncThunk(
  ACTION_TYPES.CHECK_USER_EXISTS,
  async (username, thunkAPI) => {
    try {
      const response = await api.get(checkUserExistsUrl, {
        params: { username },
      });
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(
        err.response?.data?.message || err.message
      );
    }
  }
);

export const redirect = createAsyncThunk(
  ACTION_TYPES.REDIRECT,
  async (url, thunkAPI) => {
    try {
      // Instead of making an API call, just set window.location.href
      window.location.href = `http://localhost:8082/api/auth/redirect?url=${encodeURIComponent(url)}`;
      return true;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);
