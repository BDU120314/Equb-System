import React from "react";
import logo from "../assets/equb.png";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div className="bg-gray-100 h-[100vh]  flex flex-col items-center justify-center gap-5">
      <div className="flex gap-5">
        <img src={logo} alt="logo" height={30} width={30} />
        <span className="text-green-300 italic font-bold">Equb System</span>
      </div>
      <div className="p-[10px]">
        <span className="text-black text-[24px] font-bold">
          Sign in to your account
        </span>
      </div>
      <div className="flex justify-center items-center bg-white rounded-lg text-black shadow-xl p-14">
        <form
          action=""
          className="flex justify-center flex-col items-center w-full gap-8 px-5"
        >
          <div className="flex justify-start items-left flex-col gap-[10px]  ">
            <label htmlFor="phone">Phone Number</label>
            <input
              type="tel"
              className="w-[350px] h-8 bg-white border-2 rounded-md border-gray-300 outline-none"
            />
          </div>
          <div className="flex justify-start items-left flex-col gap-[10px]  ">
            <label htmlFor="phone">Password</label>
            <input
              type="password"
              className="w-[350px] h-8 bg-white border-2 rounded-md border-gray-300 outline-none"
            />
          </div>
          <div className="flex justify-between items-center gap-[90px]">
            <div className="flex gap-3">
              <input type="checkbox" />
              <span>Remember me</span>
            </div>
            <div>
              <Link to="/forget" className="text-blue-400">
                Forgot password ?
              </Link>
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="w-[350px] bg-blue-700 h-8 text-center rounded-md text-white hover:bg-blue-500"
            >
              Login
            </button>
          </div>
          <div>
            <span>Have't an account ? </span>
            <Link to="/signup" className="text-blue-500">
              Register
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
