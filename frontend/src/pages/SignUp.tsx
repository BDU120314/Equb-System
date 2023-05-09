import axios from "axios";
import React, {useState} from "react";
interface SignUpFormProps {
  // onSubmit: () => void
};
interface FormData {
  fname:String,
  lname:String,
  phone_number:Number,
  password:String,
  address:String,
  id:any
}

const SignUp:React.FC<SignUpFormProps> = () => {
  const [userData, setUserData] = useState<FormData>({
    fname: "",
    lname: "",
    phone_number: 0,
    password: "",
    address: "",
    id: "",
  });
 
  const {fname, lname, phone_number, password, address, id} = userData;

const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
 const { name, value } = e.target;
     setUserData((prevState) => ({
       ...prevState,
       [name]: value,
     }));
};

const handleSubmit= (e:React.FormEvent<HTMLFormElement>) => { 
  e.preventDefault();
 try {
   axios.post("url", userData);
 } catch (error) {
  console.log(error)
 }

 }

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="container w-[500px] bg-slate-100 flex justify-center items-center flex-col border-black border-1 ">
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
                <td className="text-right pr-2">
                  <label htmlFor="fname" className="inline-block align-middle">
                    First name
                  </label>
                </td>
                <td>
                  <input
                    onChange={handleChange}
                    type="text"
                    placeholder="Enter your first name"
                    id="fname"
                    name="fname"
                    className="h-10 px-4 rounded-lg border-2 border-gray-100 w-80 outline-none"
                  />
                </td>
              </tr>
              <tr className="mb-5">
                <td className="text-right pr-2 py-1">
                  <label htmlFor="lname" className="inline-block align-middle">
                    Last name
                  </label>
                </td>
                <td className="py-1">
                  <input
                    onChange={handleChange}
                    type="text"
                    placeholder="Enter your last name"
                    id="lname"
                    name="lname"
                    className="h-10 px-4 rounded-lg border-2 border-gray-100 outline-none w-80"
                  />
                </td>
              </tr>
              <tr>
                <td className="text-right pr-2 py-1">
                  <label htmlFor="phone" className="inline-block align-middle">
                    Phone No
                  </label>
                </td>
                <td className="py-1">
                  <input
                    onChange={handleChange}
                    type="tel"
                    placeholder="Enter your phone number"
                    id="phone"
                    name="phone"
                    className="h-10 px-4 rounded-lg border-2 border-gray-100 outline-none w-80"
                  />
                </td>
              </tr>
              <tr>
                <td className="text-right pr-2 py-1">
                  <label
                    htmlFor="password"
                    className="inline-block align-middle"
                  >
                    Password
                  </label>
                </td>
                <td className="py-1">
                  <input
                    onChange={handleChange}
                    type="password"
                    placeholder="Enter password"
                    id="password"
                    name="password"
                    className="h-10 px-4 rounded-lg border-2 border-gray-100 outline-none w-80"
                  />
                </td>
              </tr>
              <tr>
                <td className="text-right pr-2 py-1">
                  <label
                    htmlFor="address"
                    className="inline-block align-middle"
                  >
                    Address
                  </label>
                </td>
                <td className="py-1">
                  <input
                    onChange={handleChange}
                    type="text"
                    placeholder="Enter your address"
                    id="address"
                    name="address"
                    className="h-10 px-4 rounded-lg border-2 border-gray-100 outline-none w-80"
                  />
                </td>
              </tr>
              <tr>
                <td className="text-right pr-2 py-1">
                  <label htmlFor="id" className="inline-block align-middle">
                    Identification
                  </label>
                </td>
                <td className="py-1">
                  <input
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
          <span className="text-sm text-left text-slate-400 px-5">
            By signing up, you agree to our terms of service and privacy policy.
            for signUp page
          </span>
          <div className=" flex justify-center items-center text-xl  mb-5">
            <button className="bg-green-500 w-[200px] h-10 rounded-md">
              SignUp
            </button>
          </div>
        </form>
        <div className="mb-4 flex justify-center items-center gap-2">
          <p className=" text-slate-400"> Already have an account?</p>
          <span className="text-blue-900 text-lg"> Login</span>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
