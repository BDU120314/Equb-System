import { configureStore } from "@reduxjs/toolkit";
import StateReducer from './state'
const store = configureStore({
  reducer: {
    state: StateReducer,
  },
});

export default store;
