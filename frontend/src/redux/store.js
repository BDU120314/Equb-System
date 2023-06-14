import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./reducers/loginReducer";
import authReducer from "./reducers/authReducer";
import equbTypeReducer from "./reducers/equbTypeReducer"

const store = configureStore({
  reducer: {
    login: loginReducer,
    auth: authReducer,
    equb: equbTypeReducer,
  },
});

export default store;
