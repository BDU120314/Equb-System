import React from "react";

import { Outlet } from "react-router-dom";
import DashHeader from "../comopnents/dashboard/DashHeader";
import SideBar from "../comopnents/dashboard/SideBar";


const Dashboard = () => {
  const isLogin = JSON.parse(localStorage.getItem("isLogin"));
console.log(isLogin)
  return (
    <>
      {isLogin && (
        <div>
          <DashHeader />
          <SideBar />
          <div className="mt-[70px]">
          <Outlet />
          </div>
        </div>
      )}
    </>
  );
};

export default Dashboard;
