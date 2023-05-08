import React from "react";

const SignUp = () => {
  return (
    <div className="bg-gray-400 w-[400px] flex justify-center items-center flex-col text-white">
      <div className="text-center text-green text-2xl font-bold mt-3">
        <span className="text-white">Equb System</span>
      </div>

      <form
        action=""
        className="flex justify-center items-center flex-col gap-3 m-3"
      >
        <div className=" flex justify-center items-left text-sm flex-col gap-2">
          <label htmlFor="fname">First Name</label>
          <input
            className="w-[350px] h-8 pl-3 rounded outline-0 text-sm"
            type="text"
            placeholder="Enter your first name"
            id="fname"
            name="fname"
          />
        </div>
        <div className=" flex justify-center items-left text-sm flex-col gap-2">
          <label htmlFor="lname">Last Name</label>
          <input
            className="w-[350px] h-8 pl-3 rounded outline-0 text-sm"
            type="text"
            placeholder="Enter your last name"
            id="lname"
            name="lname"
          />
        </div>

        <div className=" flex justify-center items-left text-sm flex-col gap-2">
          <label htmlFor="phone">Phone Number</label>
          <input
            className="w-[350px] h-8 pl-3 rounded outline-0 text-sm"
            type="tel"
            placeholder="Enter phone number"
            id="phone"
            name="phone_number"
          />
        </div>

        <div className=" flex justify-center items-left text-sm flex-col gap-2">
          <label htmlFor="password">Password</label>
          <input
            className="w-[350px] h-8 pl-3 text-sm rounded outline-0"
            type="password"
            placeholder="Enter password"
            id="password"
            name="password"
          />
        </div>
        <div className=" flex justify-center items-left text-sm flex-col gap-2">
          <label htmlFor="address">Address </label>
          <input
            className="w-[350px] h-8 text-sm pl-3 rounded outline-0"
            type="text"
            placeholder="Enter your city name "
            id="address"
            name="address"
          />
        </div>
        <div className=" flex justify-center items-left text-sm flex-col gap-2">
          <label htmlFor="id">Identification </label>
          <input
            className="w-[350px] h-8 text-sm pl-3 rounded outline-0"
            type="file"
            placeholder="Choose file"
            id="id"
            name="id"
          />
        </div>

        <div className=" flex justify-center items-center text-xl  mt-3">
          <button className="bg-green-500 w-[350px] h-8">Login</button>
        </div>
      </form>
      <div className="mb-5">
        Don't have account ?
        <span className="text-blue-900 text-lg"> SignUp</span>
      </div>
    </div>
  );
};

export default SignUp;
