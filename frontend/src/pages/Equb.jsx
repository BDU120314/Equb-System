
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

  const [queries, setQueries] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const filteredData = equbType.filter((data) => {
      const query = queries.toLowerCase();
      const amount_of_deposit = data.amount_of_deposit.toString().toLowerCase();
      const equb_type_name = data.equb_type_name.toLowerCase();
      const number_of_members = data.number_of_members.toString().toLowerCase();
      return (
        amount_of_deposit.includes(query) ||
        equb_type_name.includes(query) ||
        number_of_members.includes(query)
      );
    });

    if (filteredData.length === 0) {
      toast.info("No results found");
    }

    setFilteredData(filteredData);
  };

  useEffect(() => {
    dispatch(fetchEqubType());
  }, [dispatch]);
  
  console.log(equbType);


  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <div className="flex justify-center items-center pt-8">
        <form
          onSubmit={handleSubmit}
          className="flex items-center justify-center"
        >
          <input
            id="search"
            name="queries"
            value={queries}
            onChange={(e) => {
              setQueries(e.target.value);
            }}
            type="text"
            className="bg-gray-100 w-64 lg:w-80 h-10 outline-none border-2 border-gray-300 pl-3 rounded-l-md placeholder:text-sm leading-4 font-normal"
            placeholder="Search here..."
          />
          <button
            type="submit"
            className="bg-blue-400 h-10 px-4 rounded-r-md cursor-pointer"
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
