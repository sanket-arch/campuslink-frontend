import { createAsyncThunk } from '@reduxjs/toolkit'
import api from '@/lib/api';
import {ACTION_TYPES} from "@/lib/constants";
import { userLoginUrl, userLogoutUrl } from '@/lib/constants/urls';
import Cookies from 'js-cookie';

export const userLogin = createAsyncThunk(
  ACTION_TYPES.LOGIN,
  async ({username, password}, thunkAPI) => {
    try {
      const response = await api.post(userLoginUrl,{username, password });
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response?.data?.message || err.message);
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
      return thunkAPI.rejectWithValue(err.response?.data?.message || err.message);
    }
  }
);
