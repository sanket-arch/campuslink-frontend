import { createSlice } from "@reduxjs/toolkit";
import { getAllRoles } from "../actions/roleActions";

const roleReducer = createSlice({
  name: "role",
  initialState: {
    loading: false,
    error: null,
    roles: [],
  },
  reducers: {
    setRoles: (state, action) => {
      state.roles = action.payload;
    },
    clearRoles: (state) => {
      state.roles = [];
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllRoles.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAllRoles.fulfilled, (state, action) => {
        state.loading = false;
        state.roles = action.payload;
        state.error = null;
      })
      .addCase(getAllRoles.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { setRoles, clearRoles } = roleReducer.actions;
export default roleReducer.reducer;
