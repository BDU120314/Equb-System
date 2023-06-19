import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import logo from "../assets/equb.png";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { loginSuccess } from "../redux/state";

const Login = () => {
  const [formData, setFormData] = useState({
    phone_number: "",
    password: "",
  });
  const { phone_number, password } = formData;
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const user = useSelector((state) => state.states.user);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      if (phone_number.length !== 10) {
        throw new Error("Phone number must be a 10-digit number.");
      }

      if (password.length < 6) {
        throw new Error("Password must be at least 6 characters long.");
      }

      const response = await axios.post(
        "http://localhost:5003/api/v1/users/login",
        {
          phone_number,
          password,
        }
      );

      dispatch(loginSuccess(response.data));

      if (location.state && location.state.from === "/equb") {
        const equbId = location.state.equbId;

        // Redirect the user back to the Equb page after login
        navigate(`/equb/${equbId}`);
      } else {
        // Redirect the user to the appropriate page after login
        navigate("/dashboard");
      }
    } catch (error) {
      let errorMessage = error.message;

      if (error.message === "Password must be at least 6 characters long.") {
        toast.error(errorMessage);
      }
    }
  };

  useEffect(() => {
    if (user) {
      localStorage.setItem("user_id", JSON.stringify(user));
      navigate("/dashboard");
    }
  }, [user, navigate]);


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
              value={phone_number}
              name="phone_number"
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
