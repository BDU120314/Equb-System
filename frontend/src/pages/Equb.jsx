import React, { useEffect, useState } from "react";
import Card from "../comopnents/cards/Card";
import { useDispatch, useSelector } from "react-redux";
import { fetchEqubType } from "../redux/reducers/equbTypeReducer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaSearch } from "react-icons/fa";

const Equb = () => {
  const dispatch = useDispatch();
  const equbType = useSelector((state) => state.equb.equbType);
  const loading = useSelector((state) => state.equb.loading);
  const error = useSelector((state) => state.equb.error);

  const [queries, setQueries] = useState({
    amount: "",
    members: "",
    type: "",
  });
  const [filteredData, setFilteredData] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    
  };

  
  useEffect(() => {
    dispatch(fetchEqubType());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="flex flex-col items-center justify-center gap-10 h-full">
      <div className="flex items-center justify-center rounded-[5px]">
        <form
          onSubmit={handleSubmit}
          className="flex items-center fixed justify-center lg:mr-48 ml-48  lg:ml-0  -mt-[75px]  z-20 "
        >
          <input
            id="amount"
            name="amount"
            value={queries.amount}
            onChange={(e) =>
              setQueries((prevState) => ({
                ...prevState,
                amount: e.target.value,
              }))
            }
            type="text"
            className="bg-gray-100 w- outline-none border-2 border-gray-300 pl-3 lg:w-[350px] h-10 rounded-tl-[10px] rounded-bl-[10px] placeholder:text-[18px] leading-4 font-normal "
            placeholder="Enter amount of deposit"
          />

          <input
            id="members"
            name="members"
            value={queries.members}
            onChange={(e) =>
              setQueries((prevState) => ({
                ...prevState,
                members: e.target.value,
              }))
            }
            type="text"
            className="bg-gray-100 w- outline-none border-2 border-gray-300 pl-3 lg:w-[350px] h-10 rounded-tl-[10px] rounded-bl-[10px] placeholder:text-[18px] leading-4 font-normal "
            placeholder="Enter number of members"
          />

          <select
            id="type"
            name="type"
            value={queries.type}
            onChange={(e) =>
              setQueries((prevState) => ({
                ...prevState,
                type: e.target.value,
              }))
            }
            className="bg-gray-100 w- outline-none border-2 border-gray-300 pl-3 lg:w-[350px] h-10 rounded-tl-[10px] rounded-bl-[10px] placeholder:text-[18px] leading-4 font-normal "
          >
            <option value="">Select equb type</option>
            <option value="monthly">Monthly</option>
            <option value="weekly">Weekly</option>
            <option value="daily">Daily</option>
          </select>

          <button
            type="submit"
            className="bg-blue-400 h-10 flex px-[14px] justify-center items-center rounded-tr-[10px] rounded-br-[10px] cursor-pointer"
          >
            <FaSearch color="white" />
          </button>
        </form>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 p-4">
        {(filteredData.length > 0 ? filteredData : equbType).map((equbItem) => (
          <Card key={equbItem.id} equbItem={equbItem} />
        ))}
      </div>
      <ToastContainer />
    </div>
  );
};

export default Equb;
