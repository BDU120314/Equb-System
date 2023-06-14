import { createSlice } from "@reduxjs/toolkit";

const initialState ={

  isClicked:false

}

const StateSlice = createSlice({
  name:"state",
  initialState:initialState,
  reducers:{
    menuBar: (state) => { 
      state.isClicked =!state.isClicked
     }
  }
})

export const {menuBar} = StateSlice.actions
export default StateSlice.reducer