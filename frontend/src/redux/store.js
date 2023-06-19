import { configureStore } from "@reduxjs/toolkit";
import StateReducer from './state'
const store = configureStore({
  reducer: {
    states: StateReducer,
  },
});

export default store;
