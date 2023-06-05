import React, { useEffect, useState } from "react";
import Card from "../comopnents/cards/Card";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaSearch } from "react-icons/fa";
import axios from "axios";

const Equb = () => {
  const [isSearched, setIsSearched] = useState(false);
  const [equbType, setEqubType] = useState([]);
  const [queries, setQueries] = useState({});
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5003/api/v1/types");
        setEqubType(response.data);
      } catch (error) {
        console.log("Failed to fetch equbType data:", error);
      }
    };
    fetchData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(
        "http://localhost:5003/api/v1/types/search",
        {
          params: queries,
        }
      );
      setFilteredData(response.data);
    } catch (error) {
      console.log("Failed to fetch filtered data:", error);
    }
    setIsSearched(true);
  };

  return (
    <div className="flex flex-col relative justify-center items-center pt-[100px] pb-20">
      <div className="justify-center z-[20] items-center flex fixed top-[80px] left-auto">
        <form
          action=""
          onSubmit={handleSubmit}
          className="flex items-center justify-center gap-2"
        >
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
            className="bg-gray-100 outline-none border-2 border-gray-300 pl-3 lg:w-[250px] h-10 rounded-tl-[10px] rounded-bl-[10px] placeholder:text-[18px] leading-4 font-normal"
          >
            <option value="">Select equb type</option>
            <option value="Monthly">Monthly</option>
            <option value="Weekly">Weekly</option>
            <option value="Daily">Daily</option>
          </select>
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
            type="number"
            className="bg-gray-100 outline-none border-2 border-gray-300 pl-3 lg:w-[250px] h-10 rounded-tl-[10px] rounded-bl-[10px] placeholder:text-[18px] leading-4 font-normal"
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
            type="number"
            className="bg-gray-100 outline-none border-2 border-gray-300 pl-3 lg:w-[250px] h-10 rounded-tl-[10px] rounded-bl-[10px] placeholder:text-[18px] leading-4 font-normal"
            placeholder="Enter number of members"
          />

          <button
            type="submit"
            className="bg-blue-400 h-10 flex px-[14px] justify-center items-center rounded-tr-[5px] rounded-br-[5px] cursor-pointer"
          >
            <FaSearch color="white" />
          </button>
        </form>
      </div>
      <div className="grid md:grid-cols-2 overflow-x-hidden lg:grid-cols-3 xl:grid-cols-4 place-items-center gap-10 px-5 align-middle">
        {filteredData.length > 0 ? (
          filteredData.map((equbItem) => (
            <Card
              key={equbItem._id}
              amount={equbItem.amount_of_deposit}
              type={equbItem.equb_type_name}
              No_member={equbItem.number_of_members}
            />
          ))
        ) : isSearched ? (
          <p>No result found</p>
        ) : (
          equbType.map((equbItem) => (
            <Card
              key={equbItem._id}
              amount={equbItem.amount_of_deposit}
              type={equbItem.equb_type_name}
              No_member={equbItem.number_of_members}
            />
          ))
        )}

        {/* { (filteredData.length > 0 ? filteredData :
        {filteredData.length === 0
        ? toast.info("no result found"):
        
        
        
        
        equbType).map(
              (equbItem) => (
                <Card
                  key={equbItem._id}
                  amount={equbItem.amount_of_deposit}
                  type={equbItem.equb_type_name}
                  No_member={equbItem.number_of_members}
                />
              )
            )}} */}
      </div>
      <ToastContainer />
    </div>
  );
};

export default Equb;
