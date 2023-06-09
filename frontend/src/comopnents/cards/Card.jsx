import React from "react";

const Card = ({ type, amount, No_member, status, createdAt }) => {
  const formattedCreatedAt =
    createdAt instanceof Date ? createdAt.toLocaleString() : "N/A";

  return (
    <div className="block w-[100%] rounded-sm bg-gray-50 text-center shadow-[0_2px_15px_-3px_rgba(0,0,0,0.15),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
      <div className="border-b-2 border-neutral-100 px-6 py-3 dark:border-neutral-600 dark:text-neutral-50">
        {type}
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
        >
          Join
        </button>
      </div>
      <div className="border-t-2 border-neutral-100 px-6 py-3 dark:border-neutral-600 dark:text-neutral-50">
        <span>Created At:</span>
        {formattedCreatedAt}.
      </div>
    </div>
  );
};

export default Card;
