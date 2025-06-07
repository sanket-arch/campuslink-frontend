import { configureStore } from '@reduxjs/toolkit';
import userReducers from "./reducers/userReducers";

const store = configureStore({
  reducer: {
        user: userReducers,
  },
  devTools: process.env.NODE_ENV !== 'production' // Enable Redux DevTools only in development
});

export default store;