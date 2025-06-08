import { createAsyncThunk } from '@reduxjs/toolkit'
import api from '@/lib/api';
import {ACTION_TYPES} from "@/lib/constants";

export const userLogin = createAsyncThunk(
  ACTION_TYPES.LOGIN,
  async ({username, password}, thunkAPI) => {
    try {
      const response = await api.post(`/auth/login`,{username, password });
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response?.data?.message || err.message);
    }
  }
);
