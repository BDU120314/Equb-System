import { configureStore } from "@reduxjs/toolkit";
import registerReducer from "./reducers/registerReducer";
import loginReducer from "./reducers/loginReducer";
import authReducer from "./reducers/authReducer";

const store = configureStore({
  reducer: {
    register: registerReducer,
    login: loginReducer,
    auth: authReducer,
  },
});

export default store;
