import { Container } from "@/components/Container";
import { Search } from "@/components/Search";
import { Moon } from "@/components/Moon";
import { Circle } from "@/components/Circle";
import React, { useState } from "react";

export default function Home(get) {
  const [weather, setWeatherData] = useState({});

  const url = `https://api.openweathermap.org/data/2.5/weather?lat=33.44&lon=-94.04&appid=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}&units=metric`;
  const cityUrl = `https://api-ninjas.com/api/city?name=Tokyo`;

  const getCity = async () => {
    try {
      const response = await fetch(cityUrl, {
        headers: {
          "X-Api-Key": process.env.NEXT_PUBLIC_CITY_API_KEY,
        },
      });

      const data = await response.json();
      // console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const getWeather = async () => {
    try {
      const cityLocation = await getCity();
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${cityLocation[0].latitude}&lon=${cityLocation[0].longtitude}&appid=${process.env.NEXT_PUBLIC_CITY_API_KEY}&units=metric`
      );
      const data = await response.json();
      setWeatherData(data);
      // console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex w-[100wv]">
      <div className="bg-[#f3f4f6] w-[50%] h-[1200px] relative flex flex-col items-center justify-center ">
        <div className="relative  w-[800px] h-[100%] border-2 border-indigo-600 my-0 mx-auto flex items-center justify-center">
          <Search onClick={getWeather} />
          <img
            src="/weather/sun-little.webp"
            className="w-[174px] h-[174px] absolute top-[100px] left-30 z-0"
          />
          {/* <p> {weather?.forecast?.forecastday[0].date}</p> */}
          {/* <p> {weather?.forecast?.forecastday[0].day.maxtemp_c}</p> */}
          <Container get={weather} />
        </div>
      </div>
      <Circle />
      <div className="bg-[#0F141E] w-[50%] h-[1200px]">
        <div className="relative  w-[800px] h-[100%] border-2 border-indigo-600 my-0 mx-auto flex items-center justify-center">
          <img
            src="/weather/moon-little.webp"
            className="w-[174px] h-[174px] absolute box-border border-none m-auto block bottom-[100px] right-30"
          />
          <Moon />
        </div>
      </div>
    </div>
  );
}
