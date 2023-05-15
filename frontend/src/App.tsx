import React from "react";
import SignUp from "./pages/SignUp";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Profile from "./pages/Profile";

const App = () => {
  return (
    <div className=" bg-gray-50 h-screen flex justify-center items-center">
      <Routes>
        <Route path="/login"  element={<Login />}/>
        <Route path="/" element = {<SignUp />} />
      </Routes>
     {/* <Profile></Profile> */}
    </div>
  );
};

export default App;
