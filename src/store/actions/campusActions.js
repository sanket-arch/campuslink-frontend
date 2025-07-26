import api from "@/lib/api";
import { ACTION_TYPES } from "@/lib/constants";
import { getAllCampusesUrl } from "@/lib/constants/urls";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getAllCampuses = createAsyncThunk(
ACTION_TYPES.GET_ALL_CAMPUSES,
  async (_, thunkAPI) => { 
    try {
      const response = await api.get(getAllCampusesUrl);
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(
        err.response?.data?.message || err.message
      );
    }
  }
);