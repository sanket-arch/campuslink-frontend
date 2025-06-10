// store/toastSlice.js
import { createSlice } from "@reduxjs/toolkit";

const toastSlice = createSlice({
  name: "global",
  initialState: {
    toastOpen: false,
    toastMessage: "",
    toastTitle: "",
    toastType: "info", // can be 'info', 'success', 'error', etc.
    toastDuration: 2000, // duration in milliseconds
  },
  reducers: {
    showToast: (state, action) => {
      console.log("showToast action payload:", action.payload);
      state.toastOpen = true;
      state.toastMessage = action.payload.message;
      state.toastTitle = action.payload.title || "Notification";
      state.toastType = action.payload.type || "info"; // default to 'info'
      state.toastDuration = action.payload.duration || 2000; // default to 3000ms
    },
    hideToast: (state) => {
      state.toastOpen = false;
      state.toastMessage = "";
      state.toastTitle = "";
      state.toastType = "info"; // reset to default
      state.toastDuration = 2000; // reset to default
    },
  },
});

export const { showToast, hideToast } = toastSlice.actions;
export default toastSlice.reducer;
