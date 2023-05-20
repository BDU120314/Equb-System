import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div>
      <div className="flex flex-col items-center min-h-screen pt-6 sm:justify-center sm:pt-0 bg-gray-100">
        <div>
          <h3 className="text-4xl font-bold text-blue-400">Equb</h3>
        </div>
        <div className="w-full px-6 py-4 mt-6 overflow-hidden bg-gray-100 shadow-md sm:max-w-lg sm:rounded-lg">
          <form>
            <div>
              <label
                htmlFor="fname"
                classfname="block text-sm font-medium text-gray-700 undefined"
              >
                First Name
              </label>
              <div classfname="flex flex-col items-start">
                <input
                  type="text"
                  fname="fname"
                  className="block w-full mt-1 border-gray-400 border rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="mname"
                className="block text-sm font-medium text-gray-700 undefined"
              >
                Middle Name
              </label>
              <div className="flex flex-col items-start">
                <input
                  type="text"
                  name="mname"
                  className="block w-full mt-1 border-gray-400 border rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="lname"
                className="block text-sm font-medium text-gray-700 undefined"
              >
                Last Name
              </label>
              <div className="flex flex-col items-start">
                <input
                  type="text"
                  name="lname"
                  className="block w-full mt-1 border-gray-400 border rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
              </div>
            </div>
            <div className="mt-4">
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700 undefined"
              >
                Phone_number
              </label>
              <div className="flex flex-col items-start">
                <input
                  id="phone"
                  type="tel"
                  name="Phone_number"
                  className="block w-full mt-1 border-gray-400 border rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
              </div>
            </div>
            <div className="mt-4">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 undefined"
              >
                Password
              </label>
              <div className="flex flex-col items-start">
                <input
                  type="password"
                  name="password"
                  className="block w-full mt-1 border-gray-400 border rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
              </div>
            </div>
            <div className="mt-4">
              <label
                htmlFor="password_confirmation"
                className="block text-sm font-medium text-gray-700 undefined"
              >
                Address
              </label>
              <div className="flex flex-col items-start">
                <input
                  type="password"
                  name="password_confirmation"
                  className="block w-full mt-1 border-gray-400 border rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 undefined"
              >
                Add ID Card
              </label>
              <div className="flex flex-col items-start">
                <input
                  type="file"
                  accept=".jpg, .jpeg, .png"
                  name="name"
                  className="block w-full mt-1 border-gray-400 border rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
              </div>
            </div>

            <div className="flex items-center mt-4">
              <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-400 rounded-md hover:bg-blue-400 focus:outline-none focus:bg-blue-400">
                Register
              </button>
            </div>
          </form>
          <div className="mt-4 text-grey-600 mb-10">
            Already have an account?{" "}
            <span>
              <Link to="/login" className="text-blue-400 hover:underline">
                Login
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Register;
