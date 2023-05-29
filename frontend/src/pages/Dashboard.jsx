import React from "react";
import DashHeader from "../comopnents/dashboard/DashHeader";
import SideBar from "../comopnents/dashboard/SideBar";
import MainContent from "../comopnents/dashboard/MainContent";

const Dashboard = () => {
  return (
    <div>
      <DashHeader />
      <SideBar />
      <MainContent />
    </div>
  );
};

export default Dashboard;
