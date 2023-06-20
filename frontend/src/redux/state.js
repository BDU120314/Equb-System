import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  isClicked: false,
  isLogin :false,
};

const StateSlice = createSlice({
  name: "states",
  initialState: initialState,
  reducers: {
    menuBar: (state) => {
      state.isClicked = !state.isClicked;
    },
    loginSuccess: (state, action) => {
      state.user = action.payload;
      state.isLogin = true
    },
    logoutSuccess: (state) => {
      state.user = null; // Clear the user data from the state
      localStorage.clear();
    },
  },
});

export const { menuBar, loginSuccess, logoutSuccess } = StateSlice.actions;
export default StateSlice.reducer;
