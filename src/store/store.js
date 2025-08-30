import { configureStore } from "@reduxjs/toolkit";
import userReducers from "./reducers/userReducers";
import globalReducer from "./reducers/globalReducers";
import roleReducer from "./reducers/roleReducer";
import campusReducer from "./reducers/campusReducer";
import queryReducer from "./reducers/queryReducer";

const store = configureStore({
  reducer: {
    global: globalReducer,
    user: userReducers,
    role: roleReducer,
    campus: campusReducer,
    query: queryReducer,
  },
  devTools: process.env.NODE_ENV !== "production", // Enable Redux DevTools only in development
});

export default store;
