import React from "react";
import axios from "axios";

const EqubForm = ({ equbType }) => {
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    const depositAmount = event.target.elements.deposit.value;
    const numberOfMembers = event.target.elements.no_user.value;

    try {
      const response = await axios.post("http://localhost:5003/api/v1/types/", {
        equb_type_name: equbType, // Pass equbType as equb_type_name
        amount_of_deposit: depositAmount,
        number_of_members: numberOfMembers,
      });

      // Handle the response if needed
    } catch (error) {
      // Handle the error if needed
    }
  };

  return (
    <div className="flex justify-center flex-col pt-20 gap-5 items-center h-[100vh] bg-gray-100 text-gray-700">
      <span className="text-2xl"> {equbType} equb </span>

      <p className="text-gray-800 text-xl">
        please create {equbType} equb by filling the following form
      </p>
      <div className="flex">
        <form
          onSubmit={handleFormSubmit}
          className="flex justify-start pt-5 flex-col items-end bg-white w-full px-5 rounded-md gap-10"
        >
          <div className="flex justify-start items-start flex-col gap-2">
            <label htmlFor="deposit" className="text-gray-700 ">
              Deposit Amount
            </label>
            <input
              type="number"
              name="deposit"
              id="deposit"
              className="w-[300px] bg-gray-100 pl-[10px] border rounded-md outline-none border-gray-300"
            />
          </div>
          <div className="flex justify-start items-start flex-col gap-2">
            <label htmlFor="user" className="text-gray-700">
              Number of members
            </label>
            <input
              type="number"
              name="no_user"
              id="user"
              className="w-[300px] bg-gray-100 border border-gray-300 outline-none rounded-lg pl-[10px]"
            />
          </div>
          <button
            type="submit"
            className="w-[130px] rounded-lg flex justify-end items-end p-2  text-white bg-blue-400 my-10"
          >
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
};

export default EqubForm;
