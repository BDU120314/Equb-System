import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  setPhoneNumber,
  setPassword,
  setLoggedIn,
  resetLogin,
} from "../redux/reducers/loginReducer";
import { loginUser } from "../api/loginApi";
import { setError } from "../redux/reducers/registerReducer";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import logo from "../assets/equb.png";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const phoneNumber = useSelector((state) => state.login.phoneNumber);
  const password = useSelector((state) => state.login.password);
  const loggedIn = useSelector((state) => state.login.loggedIn);
  const error = useSelector((state) => state.login.error);
  const [rememberMe, setRememberMe] = useState(false); // Remember Me state

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(resetLogin()); // Clear login form after displaying the error
    }
  }, [error, dispatch]);

  useEffect(() => {
    // Check if the Remember Me value exists in local storage
    const rememberMeValue = localStorage.getItem("rememberMe");
    if (rememberMeValue) {
      setRememberMe(true); // Set the Remember Me state to true
    }
  }, []);

  const handleChange = (e) => {
    const { name, value, checked } = e.target;
    if (name === "phone") {
      dispatch(setPhoneNumber(value));
    } else if (name === "password") {
      dispatch(setPassword(value));
    } else if (name === "rememberMe") {
      setRememberMe(checked);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      if (phoneNumber.length !== 10) {
        throw new Error("Phone number must be a 10-digit number.");
      }

      if (password.length < 6) {
        throw new Error("Password must be at least 6 characters long.");
      }

      await loginUser(phoneNumber, password);
      dispatch(setLoggedIn(true));
      if (loggedIn) {
        if (rememberMe) {
          localStorage.setItem("rememberMe", "true"); // Store Remember Me value in local storage
        } else {
          localStorage.removeItem("rememberMe"); // Remove Remember Me value from local storage
        }
        navigate("/dashboard");
      }
    } catch (error) {
      let errorMessage = error.message;

      if ((error.message = "Password must be at least 6 characters long."))
        //{
        //   errorMessage =
        //     "Incorrect password.Password must be at least 6 characters long.";
        // }

        dispatch(setError(errorMessage));
      toast.error(errorMessage);
    }
  };

  return (
    <div className="bg-gray-100 h-[100vh]  flex flex-col items-center justify-center gap-5">
      <div className="flex gap-5">
        <img src={logo} alt="logo" height={30} width={50} />
        <span className="text-[#11d4bd] italic font-bold">Equb System</span>
      </div>
      <div className="p-[10px]">
        <span className="text-black text-[24px] font-bold">
          Sign in to your account
        </span>
      </div>
      <div className="flex justify-center items-center bg-white rounded-lg text-black shadow-xl p-14">
        <form
          onSubmit={handleLogin}
          action=""
          className="flex justify-center flex-col items-center w-full gap-8 px-4"
        >
          <div className="flex justify-start items-left flex-col gap-[10px]  ">
            <label htmlFor="phone">Phone Number</label>
            <input
              value={phoneNumber}
              name="phone"
              onChange={handleChange}
              type="tel"
              placeholder="Enter your Phone Number"
              className="w-[350px] h-8 bg-white border-2 pl-[10px] rounded-md border-gray-300 outline-none"
            />
          </div>
          <div className="flex justify-start items-left flex-col gap-[10px]  ">
            <label htmlFor="phone">Password</label>
            <input
              name="password"
              value={password}
              onChange={handleChange}
              autoComplete={false}
              type="password"
              placeholder="Enter your password"
              className="w-[350px] h-8 pl-[10px] bg-white border-2 rounded-md border-gray-300 outline-none  "
            />
          </div>
          <div className="flex justify-between items-center gap-[90px]">
            <div className="flex gap-3 items-center justify-start">
              <input
                type="checkbox"
                name="rememberMe"
                checked={rememberMe}
                value={rememberMe}
                onChange={handleChange}
              />
              <span>Remember me</span>
            </div>
            <div>
              <Link to="/forgotPassword" className="text-blue-400">
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
