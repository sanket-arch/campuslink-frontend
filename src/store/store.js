import { configureStore } from '@reduxjs/toolkit';
import userReducers from "./reducers/userReducers";
import globalReducer from "./reducers/globalReducers";

const store = configureStore({
  reducer: {
    global: globalReducer,
    user: userReducers,
  },
  devTools: process.env.NODE_ENV !== 'production' // Enable Redux DevTools only in development
});

export default store;