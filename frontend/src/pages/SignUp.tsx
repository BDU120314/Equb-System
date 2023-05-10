import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
interface SignUpFormProps {
  // onSubmit: () => void
}
interface FormData {
  fname: string;
  lname: string;
  phone_number: any;
  password: string;
  address: string;
  id: any;
}

const SignUp: React.FC<SignUpFormProps> = () => {
  const [userData, setUserData] = useState<FormData>({
    fname: "",
    lname: "",
    phone_number: "",
    password: "",
    address: "",
    id: "",
  });
const navigate = useNavigate();
  const { fname, lname, phone_number, password, address, id } = userData;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      axios.post("http://localhost:5000/api/v1/users", userData);
      navigate("/login")
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="container w-[500px] bg-slate-300 flex justify-center items-center flex-col border-black border-1 ">
        <div className="text-center text-green- text-2xl font-bold m-4">
          <span className="text-black">Equb System</span>
        </div>
        <form
          onSubmit={handleSubmit}
          className="flex justify-center items-center flex-col"
        >
          <table className="table-auto">
            <tbody>
              <tr className="mb-5">
                <td className="text-right pr-2 py-2">
                  <label htmlFor="fname" className="inline-block align-middle">
                    First name
                  </label>
                </td>
                <td className="py-2">
                  <input
                    onChange={handleChange}
                    value={fname}
                    type="text"
                    placeholder="Enter your first name"
                    id="fname"
                    name="fname"
                    className="h-10 px-4 rounded-lg border-2 border-gray-100 w-80 outline-none "
                  />
                </td>
              </tr>
              <tr className="mb-5">
                <td className="text-right pr-2 py-2">
                  <label htmlFor="lname" className="inline-block align-middle">
                    Last name
                  </label>
                </td>
                <td className="py-2">
                  <input
                    onChange={handleChange}
                    value={lname}
                    type="text"
                    placeholder="Enter your last name"
                    id="lname"
                    name="lname"
                    className="h-10 px-4 rounded-lg border-2 border-gray-100 outline-none w-80"
                  />
                </td>
              </tr>
              <tr>
                <td className="text-right pr-2 py-2">
                  <label htmlFor="phone" className="inline-block align-middle">
                    Phone No
                  </label>
                </td>
                <td className="py-2">
                  <input
                    onChange={handleChange}
                    value={phone_number}
                    type="tel"
                    placeholder="Enter your phone number"
                    id="phone"
                    name="phone_number"
                    className="h-10 px-4 rounded-lg border-2 border-gray-100 outline-none w-80"
                  />
                </td>
              </tr>
              <tr>
                <td className="text-right pr-2 py-2">
                  <label
                    htmlFor="password"
                    className="inline-block align-middle"
                  >
                    Password
                  </label>
                </td>
                <td className="py-2">
                  <input
                    onChange={handleChange}
                    value={password}
                    type="password"
                    placeholder="Enter password"
                    id="password"
                    name="password"
                    className="h-10 px-4 rounded-lg border-2 border-gray-100 outline-none w-80"
                  />
                </td>
              </tr>
              <tr>
                <td className="text-right pr-2 py-2">
                  <label
                    htmlFor="address"
                    className="inline-block align-middle"
                  >
                    Address
                  </label>
                </td>
                <td className="py-2">
                  <input
                    onChange={handleChange}
                    value={address}
                    type="text"
                    placeholder="Enter your address"
                    id="address"
                    name="address"
                    className="h-10 px-4 rounded-lg border-2 border-gray-100 outline-none w-80"
                  />
                </td>
              </tr>
              <tr>
                <td className="text-right pr-2 py-2">
                  <label htmlFor="id" className="inline-block align-middle">
                    Identification
                  </label>
                </td>
                <td className="py-2">
                  <input
                  value={id}
                    accept=".png, .jpg, .jpeg"
                    type="file"
                    placeholder="choose file"
                    id="id"
                    name="id"
                    className="text-center text-gray-500"
                  />
                </td>
              </tr>
            </tbody>
          </table>
          <span className="text-sm text-left text-slate-500 px-5">
            <span>
              By signing up, you agree to our
              <Link to="/termofservice" className="text-blue-700 px-1">
                terms of service
              </Link>
              and
              <Link to="/privacypolicy" className="text-blue-700 px-1">
                privacy policy
              </Link>
              . for signUp page
            </span>
          </span>
          <div className=" flex justify-center items-center text-xl  mb-5">
            <button className="bg-green-500 w-[200px] h-10 rounded-md">
              SignUp
            </button>
          </div>
        </form>
        <div className="mb-4 flex justify-center items-center gap-2">
          <p className=" text-slate-500"> Already have an account?</p>
          <span className="text-blue-900 text-lg">
            <Link to="/login">Login</Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
