import React from "react";
import {
  FaCube,
  FaMoneyBill,
  FaUsers,
  FaDice,
  FaCheckCircle,
  FaQuestionCircle,
} from "react-icons/fa";
import { Outlet } from "react-router-dom";

const EqubDetail = () => {
  return (
    <div>
      <div className="flex justify-center gap-4 mt-4 ml-[20%]">
        <LinkCard
          to="/dashboard/equbdetail/equbjoined"
          icon={<FaCube />}
          title="Equb"
        />
        <LinkCard
          to="/dashboard/equbdetail/payment"
          icon={<FaMoneyBill />}
          title="Payment"
        />
        <LinkCard
          to="/dashboard/equbdetail/equbmembers"
          icon={<FaUsers />}
          title="Equb Members"
        />
        <LinkCard
          to="/dashboard/equbdetail/lottery"
          icon={<FaDice />}
          title="Lottery"
        />
        <LinkCard
          to="/dashboard/equbdetail/completed"
          icon={<FaCheckCircle />}
          title="Completed"
        />
        <LinkCard
          to="/dashboard/equbdetail/help"
          icon={<FaQuestionCircle />}
          title="Help"
        />
      </div>

      <Outlet />
    </div>
  );
};

const LinkCard = ({ to, icon, title }) => {
  return (
    <a
      href={to}
      className="flex flex-col items-center justify-center bg-gray-200 rounded-md p-4 w-40 h-40 text-center"
    >
      <div className="text-4xl mb-2">{icon}</div>
      <span className="text-lg font-semibold">{title}</span>
    </a>
  );
};

export default EqubDetail;