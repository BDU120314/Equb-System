import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Card = ({
  amount,
  No_member,
  status,
  createdAt,
  equb_type_id,
  equb_Group_id
}) => {
  const [typeName, setTypeName] = useState({});
  const navigate = useNavigate();
  // const user = useSelector((state) => state.states.user);
    const userStored =JSON.parse(localStorage.getItem("user_id"));
    const user_id = userStored ?userStored.user_id : null
  useEffect(() => {
    const fetchTypeName = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5003/api/v1/types/${equb_type_id}`
        );
        setTypeName(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchTypeName();
  }, [equb_type_id]);

  const handleJoin = async () => {
    try {
      if (!user_id) {
        // If the user is not logged in, navigate to the login page
        navigate("/Login");
        return;
      }
    
      // Check if the user already exists in the equb group
      const checkResponse = await axios.get(
        `http://localhost:5003/api/v1/groups/check/${user_id}/${equb_Group_id}`
      );
  
      if (checkResponse.data.exists) {
        // User already exists in the equb group
        console.log("User already exists in the equb group");
        return;
      }
  
      // Join the equb group
      const joinResponse = await axios.post(
        `http://localhost:5003/api/v1/groups/join/${user_id}/${equb_Group_id}`
      );
      toast.success(`Successfully join group`);
      console.log(joinResponse.data);
  
      // Add any additional logic based on the join response
    } catch (error) {
      console.error(error);
    }
  };
  
  

  return (
    <div className="block w-[100%] rounded-sm bg-gray-50 text-center shadow-[0_2px_15px_-3px_rgba(0,0,0,0.15),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
      <div className="border-b-2 border-neutral-100 px-6 py-3 dark:border-neutral-600 capitalize dark:text-neutral-50">
        {typeName.equb_type_name}
      </div>
      <div className="p-6">
        <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
          Members: {No_member}
        </h5>
        <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
          Amount of deposit: {amount}
        </p>
        <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
          Status: {status}
        </p>
        <button
          type="button"
          className="inline-block rounded bg-blue-500 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-blue-500-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-blue-500-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-blue-500-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
          data-te-ripple-init
          data-te-ripple-color="light"
          onClick={handleJoin}
        >
          Join
        </button>
      </div>
      <div className="border-t-2 border-neutral-100 px-6 py-3 dark:border-neutral-600 dark:text-neutral-50">
        <span>Created At:</span>
        {createdAt}.
      </div>
    </div>
  );
};

export default Card;
