import { createSlice } from "@reduxjs/toolkit";
import { getAllQueries } from "../actions/queryAction";

const queryReducer = createSlice({
  name: "query",
  initialState: {
    loading: false,
    error: null,
    queries: [],
  },
  reducers: {
    setQueries: (state, action) => {
      state.queries = action.payload;
    },
    clearQueries: (state) => {
      state.queries = [];
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllQueries.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAllQueries.fulfilled, (state, action) => {
        state.loading = false;
        state.queries = action.payload;
        state.error = null;
      })
      .addCase(getAllQueries.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});
export const { setQueries, clearQueries } = queryReducer.actions;
export default queryReducer.reducer;
