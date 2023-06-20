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
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5003/api/v1/groups/search`,
          {
            params: {
              ...queries,
              page: currentPage,
              pageSize: 8,
            },
          }
        );
        setEqubType(response.data.searchResult);
        setTotalPages(response.data.totalPages);
      } catch (error) {
        console.log("Failed to fetch equbType data:", error);
      }
    };

    fetchData();
  }, [currentPage, queries]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setCurrentPage(1);
    try {
      const response = await axios.get(
        "http://localhost:5003/api/v1/groups/search",
        {
          params: {
            ...queries,
            page: 1,
            pageSize: 8,
          },
        }
      );
      setFilteredData(response.data.searchResult);
      setTotalPages(response.data.totalPages);
    } catch (error) {
      console.log("Failed to fetch filtered data:", error);
    }
    setIsSearched(true);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="flex flex-col relative justify-center items-center pt-[100px] pb-20">
      <div className="justify-center z-[20] w-screen bg-[#f7f7f7] items-center flex fixed py-5 top-[70px] left-auto">
        <form
          action=""
          onSubmit={handleSubmit}
          className="flex flex-col md:flex-row  items-center justify-center gap-2"
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
            className="bg-gray-100 outline-none border-2 border-gray-300 pl-3 w-full md:w-[250px] h-10 rounded-tl-[10px] rounded-bl-[10px] placeholder:text-[18px] leading-4 font-normal"
          >
            <option value="">Select equb type</option>
            <option value="64905b0bafe7ffbb048ac95f">Monthly</option>
            <option value="64905b16afe7ffbb048ac960">Weekly</option>
            <option value="64905af2afe7ffbb048ac95e">Daily</option>
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
            className="bg-gray-100 outline-none border-2 border-gray-300 pl-3 w-full md:w-[250px] h-10 rounded-tl-[10px] rounded-bl-[10px] placeholder:text-[18px] leading-4 font-normal"
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
            className="bg-gray-100 outline-none border-2 border-gray-300 pl-3 w-full md:w-[250px] h-10 rounded-tl-[10px] rounded-bl-[10px] placeholder:text-[18px] leading-4 font-normal"
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
      <div className="grid md:grid-cols-2 overflow-x-hidden lg:grid-cols-3 xl:grid-cols-4 place-items-center gap-10 px-3 flex-wrap ">
        {filteredData.length > 0 ? (
          filteredData.map((equbItem) => (
            <Card
              key={equbItem._id}
              amount={equbItem.amount_of_deposit}
              equb_type_id={equbItem.equb_type_id}
              No_member={equbItem.total_Members}
              status={equbItem.status}
              createdAt={equbItem.createdAt}
              equb_Group_id={equbItem._id}
            />
          ))
        ) : isSearched ? (
          <p>No result found</p>
        ) : (
          equbType.map((equbItem) => (
            <Card
              key={equbItem._id}
              amount={equbItem.amount_of_deposit}
              equb_type_id={equbItem.equb_type_id}
              No_member={equbItem.total_Members}
              status={equbItem.status}
              createdAt={equbItem.createdAt}
              equb_Group_id={equbItem._id}
            />
          ))
        )}
      </div>
      <div className="flex justify-center mt-20">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            className={`px-4 py-2 mr-2 border ${
              index + 1 === currentPage
                ? "bg-blue-500 text-white"
                : "bg-gray-100 text-gray-700"
            }`}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </button>
        ))}
      </div>
      <ToastContainer />
    </div>
  );
};

export default Equb;
