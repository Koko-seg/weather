// import Image from "next/image";
import { SearchIcon, MapPin } from "lucide-react";

import React, { useRef } from "react";

export const Search = ({ getWeather, handleChange, setCity, filteredCity, setFilteredCity  }) => {
  const inputRef = useRef(null);
  
  const changeWeather = (value) => {
    setCity(value.split(",")[0]);
    getWeather();
    setFilteredCity([]); 
    if (inputRef.current) {
      inputRef.current.value = ""; 
    }
  };
  console.log(filteredCity);

  return (
    <div className="relative w-full max-w-[567px]">
      <div className="flex items-center rounded-full bg-white  px-4 py-2 shadow-md z-10 relative">
        <SearchIcon className="w-5 h-5 text-gray-400" />

        <input
         ref={inputRef}
          type="text"
          placeholder="Search"
          className="w-full px-3 py-1 text-lg font-medium outline-none text-gray-800 placeholder:text-gray-400"
          onChange={handleChange}
        />
      </div>
      <div className="relative mt-5 w-full max-w-[567px] mx-auto z-30">
        {filteredCity.map((city, index) => (
          <div
            className="cursor-pointer hover:bg-gray-100 transition-colors duration-200"
            key={index}
            onClick={() => changeWeather(city)}
          >
            <MapPin className="w-4 h-4 text-gray-500" />
            <span className="text-gray-700 text-sm">{city}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
