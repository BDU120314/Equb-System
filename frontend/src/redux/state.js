import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  isClicked: false,
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
    },
  },
});

export const { menuBar, loginSuccess } = StateSlice.actions;
export default StateSlice.reducer;
