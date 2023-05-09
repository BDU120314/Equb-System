import React from 'react'
import { Link } from 'react-router-dom'
const Profile = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="container w-[350px] bg-slate-300 flex justify-center items-center flex-col border-black border-1 p-3">
        <img src="logo192.png" alt="profile" className="rounded-full m-3 bg-blue-500 w-[120px] h-[120px]"  />
        <p className="text-xl m-3">Full Name</p>
        <p className="text-md m-3">Account No</p>
        <div className="text-blue-700 text-md m-3 flex justify-between items-center gap-5">
          <Link to="/pass">password</Link> <Link to="/pay">payment</Link>{" "}
          <Link to="/address">address</Link>
        </div>
        <div>
          <Link to="/payment" className='text-blue-700 text-md'>payment history</Link>
        </div>
      </div>
      {/* fetch the personal in from database and display 
      using axios.get("url").then(setdat({update})) use map method and dispaly
      //user can update personal information 
      
      //
      */}
    </div>
  );
}

export default Profile