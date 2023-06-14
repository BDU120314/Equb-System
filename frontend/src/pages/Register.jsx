import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { registerUser } from "../api/registerApi";

const Register = () => {
  const [formData, setFormData] = useState({
    fname: "",
    mname: "",
    lname: "",
    phone_number: "",
    password: "",
    address: "",
    image: null,
    imageUrl: null,
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "image") {
      setFormData((prev) => ({
        ...prev,
        [name]: files[0],
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const validatePhoneNumber = (phoneNumber) => {
    const phoneNumberRegex = /^\d{10}$/;
    return phoneNumberRegex.test(phoneNumber);
  };

  const validatePassword = (password) => {
    return password.length > 6;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { phone_number, password, image } = formData;

    if (!validatePhoneNumber(phone_number)) {
      console.log("Phone number must be a 10-digit positive integer.");
      return;
    }

    if (!validatePassword(password)) {
      console.log("Password must be greater than 6 characters.");
      return;
    }

    try {
      const formDataToSend = new FormData();
      formDataToSend.append("file", image);
      formDataToSend.append("upload_preset", "chachu"); // Replace with your upload preset name

      const cloudinaryResponse = await axios.post(
        "https://api.cloudinary.com/v1_1/dig01gy61/image/upload",
        formDataToSend
      );

      const imageUrl = cloudinaryResponse.data.secure_url;

      setFormData((prev) => ({
        ...prev,
        imageUrl: imageUrl,
      }));

      const response = await registerUser(formData);
      navigate("/dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="flex flex-col justify-center items-center w-screen min-h-screen pt-6 sm:justify-center sm:pt-0 bg-gray-100">
        <div className="shadow-xl">
          <h3 className="text-4xl font-bold text-blue-400">Equb</h3>
        </div>
        <div className="w-[100vw] flex flex-col px-6 py-4 mt-6 overflow-hidden bg-gray-100 shadow-md border-t-gray-400 sm:max-w-lg sm:rounded-lg">
          <form className="" onSubmit={handleSubmit}>
            <div className="flex items-center justify-center gap-10">
              <div>
                <label
                  htmlFor="fname"
                  className="block text-sm font-medium text-gray-700 undefined"
                >
                  First Name
                </label>

                <input
                  value={formData.fname}
                  onChange={handleChange}
                  type="text"
                  name="fname"
                  className="block w-half mt-1 pl-2 border-gray-400 border rounded-md shadow-sm outline-none items-center focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
              </div>
              <div>
                <label
                  htmlFor="lname"
                  className="block text-sm font-medium text-gray-700 undefined"
                >
                  Last Name
                </label>

                <input
                  value={formData.lname}
                  onChange={handleChange}
                  type="text"
                  name="lname"
                  className="block w-half mt-1 pl-2 outline-none border-gray-400 border rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
              </div>
            </div>
            <div className="flex items-center justify-center gap-10">
              <div className="mt-4">
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 undefined"
                >
                  Phone_number
                </label>
                <div className="flex flex-col items-start">
                  <input
                    value={formData.phone_number}
                    onChange={handleChange}
                    id="phone"
                    type="tel"
                    name="phone_number"
                    className="block w-full mt-1 pl-2 outline-none border-gray-400 border rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
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
                    value={formData.password}
                    onChange={handleChange}
                    autoComplete="false"
                    type="password"
                    name="password"
                    className="block w-full mt-1 pl-2 outline-none border-gray-400 border rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  />
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center gap-10">
              <div className="mt-4">
                <label
                  htmlFor="address"
                  className="block text-sm font-medium text-gray-700 undefined"
                >
                  Address
                </label>
                <div className="flex flex-col items-start">
                  <input
                    value={formData.address}
                    onChange={handleChange}
                    type="text"
                    name="address"
                    className="block w-full mt-1 pl-2 outline-none border-gray-400 border rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  />
                </div>
              </div>
              <div className="mt-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 undefined"
                >
                  Email
                </label>
                <div className="flex flex-col items-start">
                  <input
                    value={formData.email}
                    onChange={handleChange}
                    type="email"
                    name="email"
                    className="block w-full mt-1 pl-2 outline-none border-gray-400 border rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  />
                </div>
              </div>
            </div>

            <div className="mt-4">
              <label
                htmlFor="bank_account_no"
                className="block text-sm font-medium text-gray-700 undefined"
              >
                bank_account_no
              </label>
              <div className="flex flex-col items-start">
                <input
                  value={formData.bank_account_no}
                  onChange={handleChange}
                  type="text"
                  name="bank_account_no"
                  className="block w-full mt-1 mb-3 pl-2 outline-none border-gray-400 border rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
              </div>
            </div>

            <div className="mt-4">
              <label
                htmlFor="ID"
                className="block text-sm font-medium text-gray-700 undefined"
              >
                ID
              </label>
              <div className="flex flex-col items-start">
                <input
                  onChange={handleChange}
                  type="file"
                  name="image"
                  accept="image/*"
                  className="block w-full mt-1 mb-3 pl-2 outline-none border-gray-400 border rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
              </div>
            </div>
            <div className="flex items-center mt-4">
              <button
                type="submit"
                className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-400 rounded-md hover:bg-blue-400 focus:outline-none focus:bg-blue-400"
              >
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
