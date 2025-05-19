// import Image from "next/image";
import { SearchIcon } from "lucide-react";

import React from "react";

export const Search = ({ getWeather, handleChange, setCity, filteredCity }) => {
  const changeWeather = (value) => {
    setCity(value.split(",")[0]);
    getWeather();
  };
  console.log(filteredCity);

  return (
    <div className="absolute top-[120px] left-40 z-30">
      <div className="flex items-center w-[567px] h-80px rounded-[48px] bg-white pl-[30.52px]">
        <SearchIcon className="w-[35px] h-[35px] text-gray-500  z-30" />

        <input
          type="text"
          placeholder="Search"
          className="w-full py-4 pl-3 pr-6 text-[32px] font-bold text-gray-400 outline-none"
          onChange={handleChange}
        />
      </div>
      <div>
        {filteredCity.map((city, index) => (
          <div key={index} onClick={() => changeWeather(city)}>
            {city}
          </div>
        ))}
      </div>
    </div>
  );
};
