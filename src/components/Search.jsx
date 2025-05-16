// import Image from "next/image";
import { SearchIcon } from "lucide-react";

import React from "react";

export const Search = ({
  getWeather,
  onChange,
 setSearchValue
  filteredCity,
  searchValue,
}) => {
  //  const [input, setInput] = useState("");
  const setSearchValue = (event) => {
    const value = event.target.value;

    onChange(value);
  };

  return (
    <div className="absolute top-[120px] left-40 z-30">
      <div className="flex items-center w-[567px] h-80px rounded-[48px] bg-white pl-[30.52px]">
        <SearchIcon className="w-[35px] h-[35px] text-gray-500  z-30" />
        {/* <form onSubmit={handleSubmit}> */}
        <input
          type="text"
          placeholder="Search"
          className="w-full py-4 pl-3 pr-6 text-[32px] font-bold text-gray-400 outline-none"
          onChange={setSearchValue}
        />
        {/* {suggestions.length> 0 && (
          <ul className="absolute bg-white border w-full mt-1 max-h-[200px] overflow-y-auto z-50">
            {suggestions.map ((city,idx)=>(
              <li key={idx} className="p-2 hover:bg-gray-200 cursor-pointer" onClick={()=> {
                setCity(city.name)
                setSuggestions([])
              }}>
{city.name},{city.country}
              </li>
            ))}

          </ul>
        )} */}
        <button
          onClick={getWeather}
          className="border p-2 w-fit text-2xl  border-indigo-600"
        >
          Search
        </button>
      </div>
    </div>
  );
};
