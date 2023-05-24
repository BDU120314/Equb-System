import React, { useState } from "react";
import axios from "axios"; // Import Axios library

const Login = () => {
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isForgotPassword, setIsForgotPassword] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    if (isForgotPassword) {
      if (email && email.length > 0) {
        // Placeholder for forgot password logic using email
        console.log("Password reset instructions sent to your email.");
        // Perform the necessary actions after sending password reset instructions via email
      } else {
        console.log("Email is required for password reset.");
        // Perform the necessary actions if email is not provided for password reset
      }
    } else if (password.length <= 6) {
      setErrorMessage("Password must be greater than six characters.");
    } else if (!validatePhoneNumber(phone)) {
      setErrorMessage("Invalid phone number.");
    } else {
      // Placeholder for login logic using phone number and password
      axios
        .post("/login", { phone, password })
        .then((response) => {
          if (response.data.success) {
            console.log("Login successful!");
            // Perform the necessary actions after successful login
          } else {
            console.log("Login failed!");
            // Perform the necessary actions after failed login
          }
        })
        .catch((error) => {
          console.error("An error occurred during login:", error);
          // Handle the login error
        });
    }
  };

const validatePhoneNumber = (phone) => {
  // Remove any non-digit characters from the phone number
  const cleanPhoneNumber = phone.replace(/\D/g, "");

  // Check if the phone number is greater than ten digits and contains only digits
  if (cleanPhoneNumber.length > 10 && /^\d+$/.test(cleanPhoneNumber)) {
    return true; // Valid phone number
  } else {
    return false; // Invalid phone number
  }
};



  return (
    <div className="flex justify-center items-center h-screen border-2 bg-gray-500">
      <div className="border-2  p-4">
        <form className="-mx-2" onSubmit={handleLogin}>
          <h2 className="text-2xl mb-6 font-serif font-bold">Login</h2>
          {!isForgotPassword && (
            <div className="mb-4">
              <label
                className="block text-white-700 text-sm font-bold mb-2"
                htmlFor="phone"
              >
                Phone Number:
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-white-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                id="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
          )}
          {!isForgotPassword && (
            <div className="mb-4">
              <label
                className="block text-white-700 text-sm font-bold mb-2"
                htmlFor="password"
              >
                Password:
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-white-700 leading-tight focus:outline-none focus:shadow-outline"
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          )}
          {isForgotPassword && (
            <div className="mb-4">
              <label
                className="block text-white-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email:
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-white-700 leading-tight focus:outline-none focus:shadow-outline"
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          )}
          {errorMessage && (
            <p className="text-red-400 text-sm mb-4">{errorMessage}</p>
          )}
          {!isForgotPassword && (
            <div className="flex items-center">
              <input
                className="mr-2 leading-tight"
                type="checkbox"
                id="forgotPassword"
                checked={isForgotPassword}
                onChange={() => setIsForgotPassword(!isForgotPassword)}
              />
              <label className="text-sm" htmlFor="forgotPassword">
                Forgot password?
              </label>
            </div>
          )}
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
