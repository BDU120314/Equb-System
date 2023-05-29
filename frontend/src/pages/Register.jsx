import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setFormData} from "../redux/reducers/registerReducer";
import { registerUser } from "../api/registerApi";
import { setError, setRegistrationStatus } from "../redux/reducers/registerReducer";

const Register = () => {

const dispatch = useDispatch();
const navigate = useNavigate();
const formData = useSelector((state) => state.register.formData);
// const registrationStatus = useSelector(
//   (state) => state.register.registrationStatus
// );
const error = useSelector((state) => state.register.error);

  // const handleChange = (e) => {
  //   const { name, value, files } = e.target;
  //   // Check if the input is a file (image input)
  //   if (files && files.length > 0) {
  //     setFormData((prevState) => ({
  //       ...prevState,
  //       [name]: files[0], // Only store the first selected file
  //     }));
  //   } else {
  //     setFormData((prevState) => ({
  //       ...prevState,
  //       [name]: value,
  //     }));
  //   }
  //    dispatch(setFormData(formData));
  // };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files && files.length > 0) {
      dispatch(setFormData({ ...formData, [name]: files[0] }));
    } else {
      dispatch(setFormData({ ...formData, [name]: value }));
    }
  };

  const validatePhoneNumber = (phoneNumber) => {
    const phoneNumberRegex = /^\d{10}$/;
    return phoneNumberRegex.test(phoneNumber);
  };

  const validatePassword = (password) => {
    return password.length > 6;
  };

  const validateFileExtension = (file) => {
    const allowedExtensions = ["jpg", "jpeg", "png"];
    const fileExtension = file.name.split(".").pop();
    return allowedExtensions.includes(fileExtension.toLowerCase());
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { phone_number, password, image } = formData;

    if (!validatePhoneNumber(phone_number)) {
      dispatch(setError("Phone number must be a 10-digit positive integer."));
      return;
    }

    if (!validatePassword(password)) {
      dispatch(setError("Password must be greater than 6 characters."));
      return;
    }

    if (image && !validateFileExtension(image)) {
      dispatch(setError("ID card must be in JPG, JPEG, or PNG format."));
      return;
    }

    const formDataToSend = new FormData();
    for (const key in formData) {
      formDataToSend.append(key, formData[key]);
    }

    try {
      const response = await registerUser(formData);
      dispatch(setRegistrationStatus(response.data));
      if (response.data.registrationStatus) {
        navigate("/login");
      }
    } catch (error) {
      dispatch(setError(error.message));
    }
  };

  return (
    <div>
      <div className="flex flex-col justify-center items-center w-screen min-h-screen pt-6 sm:justify-center sm:pt-0 bg-gray-100">
        <div className="shadow-xl">
          <h3 className="text-4xl font-bold text-blue-400">Equb</h3>
        </div>
        {
          error && (<div className="mt-5"><p className="text-red-500">{error}</p></div>)
        }
        <div className="w-[100vw] flex flex-col px-6 py-4 mt-6 overflow-hidden bg-gray-100 shadow-md border-t-gray-400 sm:max-w-lg sm:rounded-lg">
          <form className="" onSubmit={handleSubmit}>
            <div className="flex items-center justify-center gap-5">
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
                  className="block w-[150px] mt-1 pl-2 border-gray-400 border rounded-md shadow-sm outline-none items-center focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
              </div>
              <div>
                <label
                  htmlFor="mname"
                  className="block text-sm font-medium text-gray-700 undefined"
                >
                  Middle Name
                </label>

                <input
                  value={formData.mname}
                  onChange={handleChange}
                  type="text"
                  name="mname"
                  className="block w-[150px] mt-1 pl-2 outline-none border-gray-400 border rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
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
                  className="block w-[150px] mt-1 pl-2 outline-none border-gray-400 border rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
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
            <div className="mt-4">
              <label
                htmlFor="password_confirmation"
                className="block text-sm font-medium text-gray-700 undefined"
              >
                Address
              </label>
              <div className="flex flex-col items-start">
                <input
                  value={formData.address}
                  onChange={handleChange}
                  type="address"
                  name="address"
                  className="block w-full mt-1 pl-2 outline-none border-gray-400 border rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="id"
                className="block text-sm font-medium text-gray-700 undefined"
              >
                Add ID Card
              </label>
              <div className="flex flex-col items-start">
                <input
                  id="id"
                  type="file"
                  accept=".jpg, .jpeg, .png"
                  onChange={handleChange} // Add the onChange event handler
                  name="image" // Set the name to "image" to match the state key
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
