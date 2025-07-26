import { createSlice } from "@reduxjs/toolkit";
import { getAllCampuses } from "../actions/campusActions";

const campusReducer = createSlice({
  name: "campus",
  initialState: {
    loading: false,
    error: null,
    campuses: [],
  },
  reducers: {
    setCampuses: (state, action) => {
      state.campuses = action.payload;
    },
    clearCampuses: (state) => {
      state.campuses = [];
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllCampuses.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAllCampuses.fulfilled, (state, action) => {
        state.loading = false;
        state.campuses = action.payload;
        state.error = null;
      })
      .addCase(getAllCampuses.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  }
});

export const { setCampuses, clearCampuses } = campusReducer.actions;
export default campusReducer.reducer;