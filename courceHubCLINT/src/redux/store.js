import { configureStore } from "@reduxjs/toolkit";
import  userDetailSlice from './reducers/userReducer.js'
export const store = configureStore({
  reducer: {
    user: userDetailSlice,
  },
});

