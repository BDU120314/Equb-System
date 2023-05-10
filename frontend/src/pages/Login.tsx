import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

interface FormData {
  phone_number: any;
  password: string;
}

const Login: React.FC = () => {
  const [loginData, setLoginData] = useState<FormData>({
    phone_number: "",
    password: "",
  });

  const { phone_number, password } = loginData;

  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit= (e:React.FormEvent<HTMLFormElement>) => { 
    e.preventDefault()
    try {
      axios.post("http://localhost:5000/api/v1/users/login", loginData);
navigate("/dashboard")
    } catch (error) {
      console.log(error)
    }
   }

  return (
    <div className="bg-slate-300 w-[400px] flex justify-center items-center flex-col text-black">
      <div className="text-center text-green text-2xl font-bold mt-5">
        <span className="text-black">Equb System</span>
      </div>

      <form onSubmit={handleSubmit} className="flex justify-center items-center flex-col gap-5 m-5">
        <div className=" flex justify-center items-left text-md flex-col gap-2">
          <label htmlFor="phone">Phone Number</label>
          <input
          value={phone_number}
          onChange={handleChange}
            className="w-[350px] h-10 pl-3 rounded outline-0"
            type="tel"
            placeholder="Enter phone number"
            id="phone"
            name="phone_number"
          />
        </div>

        <div className=" flex justify-center items-left text-md flex-col gap-2">
          <label htmlFor="password">Password</label>
          <input
          value={password}
          onChange={handleChange}
            className="w-[350px] h-10 pl-3 rounded outline-0"
            type="password"
            placeholder="Enter password"
            id="password"
            name="password"
          />
        </div>

        <div className="flex justify-center items-center gap-3 ">
          <input
            type="checkbox"
            name="remember"
            id="remember"
            className="w-4
          "
          />
          <label htmlFor="remember" className="text-[16px]">
            remember me{" "}
          </label>
        </div>

        <div className=" flex justify-center items-center text-xl  mt-3">
          <button className="bg-green-500 w-[350px] h-10">Login</button>
        </div>
      </form>

      <div className="flex justify-center items-left mb-3 text-slate-500">
        <span className="text-md text-left flex justify-center items-end">
          <Link to="/phonenumber">forgot password ?</Link>
        </span>
      </div>
      <div className="mb-5">
        Don't have account ?
        <span className="text-blue-900 text-lg">
          <Link to="/"> SignUp</Link>
        </span>
      </div>
    </div>
  );
};
export default Login;
