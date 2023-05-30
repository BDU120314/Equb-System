import React from "react";

const Card = ( { type, amount,No_member }) => {

  return (
    <div className="flex flex-col justify-center items-center gap-5 bg-gray-100 rounded-[40px] w-[400px] h-[250px]">
      <span className="text-gray-700 capitalize font-semibold">
        <b>{type}</b> Equb
      </span>
      <span className="text-gray-700  font-normal">
        Amount Of Deposit <b>{amount}</b>
      </span>
      <span className="text-gray-700  font-normal">
        Number Of member <b>{No_member}</b>
      </span>
    </div>
    // <div className="flex flex-col rounded-lg bg-white text-center shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
    //   <div className="border-b-2 border-neutral-100 px-6 py-3 dark:border-neutral-600 dark:text-neutral-50">
    //     {type}
    //   </div>
    //   <div className="p-6">
    //     <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
    //       Members: {no_member}
    //     </h5>
    //     <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
    //       Amount of deposit: {amount}
    //     </p>
    //     <button
    //       type="button"
    //       className="inline-block rounded bg-blue-500 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-blue-500-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-blue-500-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-blue-500-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
    //       data-te-ripple-init
    //       data-te-ripple-color="light"
    //     >
    //       Join Group
    //     </button>
    //   </div>
    //   <div className="border-t-2 border-neutral-100 px-6 py-3 dark:border-neutral-600 dark:text-neutral-50">
    //     {/* Format the date here */}2 days ago {new Date().toLocaleDateString()}
    //   </div>
    // </div>
  );
};

export default Card;
