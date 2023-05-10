import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface ProfileProps {}

interface ProfileData {
  full_name: string;
  Account_no: string;
  password: string;
  payment: string;
  address: string;
  payment_history: string;
}

const Profile: React.FC<ProfileProps> = () => {
  const [userData, setUserData] = useState<ProfileData>({
    full_name: "",
    Account_no: "",
    password: "",
    payment: "",
    address: "",
    payment_history: "",
  });

  // useEffect(() => {
  //   // Fetch user data from the server and update the state
  //   axios.get("http://localhost:5000/api/v1/users/profile").then((response) => {
  //     setUserData(response.data);
  //   });
  // }, []);

  const handleUpdate = (name: keyof ProfileData, value: any) => {
    setUserData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSave = () => {
    // Send updated user data to the server
    axios
      .put("http://localhost:5000/api/v1/users/profile", userData)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const { full_name, Account_no, password, payment, address, payment_history } =
    userData;

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="container w-[350px] bg-slate-300 flex justify-center items-center flex-col border-black border-1 p-3">
        <img
          src="logo192.png"
          alt="profile"
          className="rounded-full m-3 bg-blue-500 w-[120px] h-[120px]"
        />
        <p
          className="text-xl m-3"
          onClick={() =>
            handleUpdate("full_name", prompt("Enter new full name"))
          }
        >
          Full Name{full_name}
        </p>
        <p
          className="text-md m-3"
          onClick={() =>
            handleUpdate("Account_no", prompt("Enter new account number"))
          }
        >
          Account No{Account_no}
        </p>
        <div className="text-blue-700 text-md m-3 flex justify-between items-center gap-5">
          <Link to="/pass">password</Link> <Link to="/pay">payment</Link>{" "}
          <Link to="/address">address</Link>
        </div>
        <div>
          <Link to="/payment" className="text-blue-700 text-md">
            payment history
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Profile;
