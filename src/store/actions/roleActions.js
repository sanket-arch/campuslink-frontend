import api from "@/lib/api";
import { ACTION_TYPES } from "@/lib/constants";
import { getAllRolesUrl } from "@/lib/constants/urls";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getAllRoles = createAsyncThunk(
  ACTION_TYPES.GET_ALL_ROLES,
  async (_, thunkAPI) => {
    try {
      const response = await api.get(getAllRolesUrl);
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(
        err.response?.data?.message || err.message
      );
    }
  }
);
