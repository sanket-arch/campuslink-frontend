import api from "@/lib/api";
import { ACTION_TYPES } from "@/lib/constants";
import { getAllQueriesUrl } from "@/lib/constants/urls";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getAllQueries = createAsyncThunk(
  ACTION_TYPES.GET_ALL_QUERIES,
  async (_, thunkAPI) => {
    try {
      const response = await api.get(getAllQueriesUrl);
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);
