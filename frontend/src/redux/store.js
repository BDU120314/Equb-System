import { configureStore } from "@reduxjs/toolkit";
import registerReducer from "./reducers/registerReducer";
import loginReducer from "./reducers/loginReducer";
import authReducer from "./reducers/authReducer";
import equbTypeReducer from "./reducers/equbTypeReducer"

const store = configureStore({
  reducer: {
    register: registerReducer,
    login: loginReducer,
    auth: authReducer,
    equb: equbTypeReducer,
  },
});

export default store;
