import React from "react";

const Login = () => {
  return (
    <div className="bg-gray-400 w-[400px] flex justify-center items-center flex-col text-white">
      <div className="text-center text-green text-2xl font-bold mt-5">
        <span className="text-white">Equb System</span>
      </div>

      <form
        action=""
        className="flex justify-center items-center flex-col gap-5 m-5"
      >
        <div className=" flex justify-center items-left text-xl flex-col gap-2">
          <label htmlFor="phone">Phone Number</label>
          <input
            className="w-[350px] h-10 pl-3 rounded outline-0"
            type="tel"
            placeholder="Enter phone number"
            id="phone"
            name="phone_number"
          />
        </div>

        <div className=" flex justify-center items-left text-xl flex-col gap-2">
          <label htmlFor="password">Password</label>
          <input
            className="w-[350px] h-10 pl-3 rounded outline-0"
            type="password"
            placeholder="Enter password"
            id="password"
            name="password"
          />
        </div>

        <div className=" flex justify-center items-center text-xl  mt-5">
          <button className="bg-green-500 w-[350px] h-10">Login</button>
        </div>
      </form>
      <div className="flex items-left justify-start mb-3 text-blue-100">
        <span className="text-md text-left">forgot password</span>
      </div>
      <div className="mb-5">
        Don't have account ? 
        <span className="text-blue-900 text-lg"> SignUp</span>
      </div>
    </div>
  );
};
export default Login;
