// import Image from "next/image";
import { SearchIcon } from "lucide-react"
 import axios from 'axios';
 import React, { useState } from 'react';

export const Search = () => {
//     const [city, setCity] = useState('');
//   const [weatherData, setWeatherData] = useState(null);

//   const fetchData = async () => {
//     try {
//       const response = await axios.get(
//         `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.REACT_APP_OPENWEATHERMAP_API_KEY}`
//       );
//       setWeatherData(response.data);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const handleInputChange = (e) => {
//     setCity(e.target.value);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     fetchData();
//   };
    return(
        <div className="absolute top-[120px] left-40 z-30">
         
            <div className="flex items-center w-[567px] h-80px rounded-[48px] bg-white pl-[30.52px]">
                <SearchIcon className="w-[35px] h-[35px] text-gray-500  z-30"/>
                {/* <form onSubmit={handleSubmit}> */}
                <input type="text" placeholder="Search" className="w-full py-4 pl-3 pr-6 text-[32px] font-bold text-gray-400 outline-none"  />
                {/* </form> */}
                {/* {weatherData ? (
        <div>
          <h2>{weatherData.name}</h2>
          <p>Температур: {weatherData.main.temp}°C</p>
          <p>Тайлбар: {weatherData.weather[0].description}</p>
        </div>
      ) : (
        <p>Цаг агаарын мэдээлэл ачааллаж байна...</p>
      )} */}
            </div>
        </div>
    )
}