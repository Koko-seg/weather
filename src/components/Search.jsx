// import Image from "next/image";
import { SearchIcon } from "lucide-react";
import axios from "axios";
import React, { useState } from "react";

export const Search = (props) => {
  return (
    <div className="absolute top-[120px] left-40 z-30">
      <div className="flex items-center w-[567px] h-80px rounded-[48px] bg-white pl-[30.52px]">
        <SearchIcon className="w-[35px] h-[35px] text-gray-500  z-30" />
        {/* <form onSubmit={handleSubmit}> */}
        <input
          type="text"
          placeholder="Search"
          className="w-full py-4 pl-3 pr-6 text-[32px] font-bold text-gray-400 outline-none"
        />
        <button
          onClick={props.onClick}
          className="border p-2 w-fit text-2xl  border-indigo-600"
        >
          Search
        </button>
      </div>
    </div>
  );
};
